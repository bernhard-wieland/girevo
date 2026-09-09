import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative } from "node:path";
import { describe, expect, it } from "vitest";

// Every internal href in the source must point at a route that exists. Catches the
// class of bug where a "bald" link was flipped on before its page was built, or a
// page was renamed without updating its links.

const SRC = fileURLToPath(new URL("../", import.meta.url)); // web/src
const APP = join(SRC, "app");

function walk(dir: string, hits: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, hits);
    else hits.push(full);
  }
  return hits;
}

/** Routes = every app/ directory that holds a page.tsx, plus "/". */
function knownRoutes(): Set<string> {
  const routes = new Set<string>(["/"]);
  for (const file of walk(APP)) {
    if (!file.endsWith("page.tsx")) continue;
    const rel = relative(APP, dirname(file)).replace(/\\/g, "/");
    if (rel === "") continue;
    // route groups "(name)" and parallel/intercepted routes are not real paths
    if (rel.split("/").some((seg) => /^[([@.]/.test(seg))) continue;
    routes.add("/" + rel);
  }
  return routes;
}

const ASSET_ALLOW = /\.(png|svg|ico|xml|txt|webmanifest|json|pdf)$/;

describe("internal links resolve to real routes", () => {
  const routes = knownRoutes();
  const files = walk(SRC).filter((f) => /\.(tsx?|mdx?)$/.test(f) && !f.endsWith(".test.ts"));

  const found: { file: string; href: string }[] = [];
  for (const file of files) {
    const text = readFileSync(file, "utf8");
    // href="/..."  |  href={"/..."}  |  href: "/..."  |  href={`/...`}
    for (const m of text.matchAll(/href[=:]\s*\{?\s*[`"']([^`"'\s]+)[`"']/g)) {
      const raw = m[1];
      if (!raw.startsWith("/") || raw.startsWith("//")) continue;
      found.push({ file: relative(SRC, file), href: raw });
    }
  }

  it("finds internal links to check", () => {
    expect(found.length).toBeGreaterThan(5);
  });

  it("every internal href is a known route, a fragment, or a static asset", () => {
    const bad = found.filter(({ href }) => {
      const path = href.split(/[?#]/)[0];
      if (path === "" || path === "/") return false;
      if (ASSET_ALLOW.test(path)) return false;
      return !routes.has(path);
    });
    expect(
      bad,
      bad.map((b) => `${b.href}  (${b.file})`).join("\n"),
    ).toEqual([]);
  });
});
