import type { Metadata } from "next";
import Link from "next/link";
import WeightFinderForm from "@/components/WeightFinderForm";
import {
  bandRows,
  copy,
  trainingBackgroundLabels,
} from "@/content/de/weightFinder";

export const metadata: Metadata = {
  title: "Kettlebell-Startgewicht per Selbsttest bestimmen",
  description:
    "Welche Kettlebell zum Anfangen? Ein Selbsttest ohne Gewicht nennt dir einen Gewichtsbereich statt einer festen Zahl — abgestimmt auf deine Grundbewegungen und deinen Schwerpunkt.",
  alternates: { canonical: "/kettlebell-startgewicht" },
};

export default function KettlebellStartweightPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-12 md:py-16">
      <article className="grid gap-10">
        <header className="grid gap-4">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {copy.h1}
          </h1>
          <p className="text-lg text-zinc-700">{copy.intro}</p>
        </header>

        <section className="grid gap-3">
          <h2 className="text-xl font-semibold">{copy.howItWorksTitle}</h2>
          <ol className="grid list-decimal gap-2 pl-5 text-zinc-700 marker:text-zinc-400">
            {copy.howItWorksSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="grid gap-3">
          <h2 className="text-xl font-semibold">{copy.whyRangeTitle}</h2>
          <p className="text-zinc-700">{copy.whyRangeBody}</p>
        </section>

        <section className="grid gap-3">
          <h2 className="text-xl font-semibold">{copy.bandsTitle}</h2>
          <p className="text-zinc-700">{copy.bandsIntro}</p>
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-300">
                <th className="py-2 pr-4 font-semibold">Wie aktiv du gerade bist</th>
                <th className="py-2 font-semibold">Bereich für eine Allzweck-Hantel</th>
              </tr>
            </thead>
            <tbody>
              {bandRows.map((row) => (
                <tr key={row.background} className="border-b border-zinc-200">
                  <td className="py-2 pr-4 text-zinc-700">
                    {trainingBackgroundLabels[row.background]}
                  </td>
                  <td className="py-2 font-medium">{row.range}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-zinc-500">{copy.bandsDraftNote}</p>
        </section>

        <section className="grid gap-5 scroll-mt-6" id="finder">
          <h2 className="text-2xl font-semibold tracking-tight">{copy.formTitle}</h2>
          <WeightFinderForm />
        </section>

        <footer className="border-t border-zinc-200 pt-6 text-sm text-zinc-600">
          <p>
            Als Nächstes:{" "}
            <Link href="/" className="font-medium text-zinc-900 underline">
              zurück zur Übersicht
            </Link>
            . Ein Kaufratgeber mit den Hantel-Typen folgt.
          </p>
        </footer>
      </article>
    </main>
  );
}
