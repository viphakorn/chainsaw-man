import fs from "fs";
import Link from "next/link";
import path from "path";

async function getCharacters() {
  const characterFiles = fs.readdirSync("markdown/characters/");
  return characterFiles.map((file) => file.replace(".md", ""));

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
  const charactersName = await getCharacters();
  return (
    <main>
      <ul className="flex flex-wrap gap-4">
        {charactersName.map((name) => (
          <li key={name}>
            <Link
              href={`/${name}`}
              className="inline-block rounded-lg bg-slate-900 px-4 py-2"
            >
              {convertKebabToCapitalized(name)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

function convertKebabToCapitalized(text: string) {
  const words = text.split("-");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const capitalizedText = capitalizedWords.join(" ");
  return capitalizedText;
}
