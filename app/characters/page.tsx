import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export interface CharacterMetadata {
  name: string;
  image: string;
  slug: string;
}
export interface Character {
  data: CharacterMetadata;
  content: string;
}

export function getCharacters() {
  const files = fs.readdirSync("markdown/characters/");
  const characters = files.map((file) => {
    if (!file.endsWith(".md")) return;
    const markdown = fs.readFileSync(`markdown/characters/${file}`, "utf8");

    const { data, content } = matter(markdown);
    return { data, content };
  }) as Character[];

  return characters;
}
export async function generateStaticParams() {
  const characters = getCharacters();

  return characters.map(({ data }) => ({
    characterSlug: data.slug,
  }));
}

export default async function Characters() {
  const characters = getCharacters();
  return (
    <main className="container mx-auto p-4">
      <ul className="grid gap-4 grid-fluid">
        {characters.map(({ data }) => (
          <li key={data.slug}>
            <Link
              href={`/${data.slug}`}
              className="inline-block rounded-lg bg-slate-900 px-4 py-2"
            >
              <img
                src={data.image}
                className="aspect-square h-32 w-32 rounded-lg bg-slate-100 object-cover object-top"
              />
              <p className="mt-2 text-center">{data.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
