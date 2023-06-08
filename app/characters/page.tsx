import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";

export interface character {
  data: { name: string; image: string };
  content: string;
  slug: string;
}

async function getCharacters() {
  const files = fs.readdirSync("markdown/characters/");
  // console.log(files);
  const characters = files.map((file) => {
    if (!file.endsWith(".md")) return;
    const markdown = fs.readFileSync(`markdown/characters/${file}`, "utf8");

    const { data, content } = matter(markdown);
    const slug = file.replace(".md", "");
    return {
      data,
      content,
      slug,
    };
  }) as character[];

  return characters;

  // return characterFiles.map((file) => file.replace(".md", ""));

  // const characters
  //       .filter((file) => path.extname(file) === ".md")
  //       .map(async (file) => {
  //         const filePath = `./posts/${file}`;
  //         const postContent =  fs.readFile(filePath, "utf8");

  //         if (data.published === false) {
  //           return null;
  //         }

  //       })
  //   );
}
export async function generateStaticParams() {
  const characterFiles = fs.readdirSync("markdown/characters/");

  return characterFiles.map((file) => ({
    characterName: file.replace(".md", ""),
  }));
}

export default async function Characters() {
  const characters = await getCharacters();
  return (
    <main className="container mx-auto p-4">
      <ul className="grid gap-4 grid-fluid">
        {characters.map(({ data, slug }) => (
          <li key={slug}>
            <Link
              href={`/${slug}`}
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
