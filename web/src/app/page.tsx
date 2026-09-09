import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-6 px-5 py-16">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Kettlebell Einstieg
      </h1>
      <p className="text-lg text-zinc-700">
        Ein ruhiger Weg durch die ersten Wochen mit der Kettlebell — ohne
        Körpermaße, ohne App-Zwang, mit klaren Texten statt Videos.
      </p>
      <div>
        <Link
          href="/kettlebell-startgewicht"
          className="inline-flex rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-700"
        >
          Startgewicht per Selbsttest bestimmen
        </Link>
      </div>
    </main>
  );
}
