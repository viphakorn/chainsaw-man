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

function getCharacters() {
  const files = fs.readdirSync("markdown/characters/");
  const characters = files.map((file) => {
    if (!file.endsWith(".md")) return;
    const markdown = fs.readFileSync(`markdown/characters/${file}`, "utf8");

    const { data } = matter(markdown);
    return data;
  }) as CharacterMetadata[];

  return characters;
}
export async function generateStaticParams() {
  const characters = getCharacters();

  return characters.map(({ slug }) => ({
    characterSlug: slug,
  }));
}

export default async function Characters() {
  const characters = getCharacters();
  return (
    <main className="container mx-auto p-4">
      <ul className="grid gap-4 grid-fluid">
        {characters.map(({ slug, image, name }) => (
          <li key={slug}>
            <Link
              href={`/${slug}`}
              className="inline-block rounded-lg bg-slate-900 px-4 py-2"
            >
              <img
                src={image}
                className="aspect-square h-32 w-32 rounded-lg bg-slate-100 object-cover object-top"
              />
              <p className="mt-2 text-center">{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
