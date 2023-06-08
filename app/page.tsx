import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-stack">
        <img
          src="/images/banner.png"
          alt="Hero"
          className="h-full w-full select-none object-cover object-top opacity-50 drag-none"
        />
        <div className="grid items-center px-2 fluid-container">
          <div className="z-10 max-w-xl space-y-2">
            <img src="/images/logo-large.png" alt="" width={400} />
            <h1 className="text-4xl font-bold">Chainsaw Man</h1>
            <p>
              After being left for dead, Denji turns into a devil-human hybrid
              with chainsaw powers, and gets recruited into a governmental devil
              hunting agency.
            </p>
            <p>Starring:Kikunosuke Toya, Shiori Izawa, Tomori Kusunoki</p>
            <Link
              href={"/characters"}
              className="inline-block rounded-md border border-white px-4 py-2"
            >
              Characters
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
