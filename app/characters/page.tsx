import { getMarkDownMetadata } from "@/utils/getData";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

export default async function Characters() {
  const characters = getMarkDownMetadata();
  return (
    <main className="container mx-auto p-4">
      <ul className="grid gap-4 grid-fluid">
        {characters.map((data) => (
          <li key={data.slug}>
            <Link
              href={`/${data.slug}`}
              className="inline-block rounded-lg bg-slate-900 px-4 py-2"
            >
              {
                <ExportedImage
                  src={
                    data.image
                      ? data.image
                      : "https://static.wikia.nocookie.net/chainsaw-man/images/d/d5/NoPicAvailable.png"
                  }
                  alt={data.name}
                  width={150}
                  height={150}
                  placeholder="blur"
                  className="aspect-square rounded-lg bg-slate-100 object-cover object-top"
                />
              }
              <p className="mt-2 text-center">{data.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
