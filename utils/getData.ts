import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface CharacterMetadata {
  name: string;
  image: string;
  slug: string;
}
export interface CharacterContent {
  data: CharacterMetadata;
  content: string;
}

export function getMarkDownMetadata() {
  const folder = "markdown/characters";
  const files = fs.readdirSync(path.join(process.cwd(), folder));

  const characters = files.map((file) => {
    if (!file.endsWith(".md")) return;
    const markdown = fs.readFileSync(
      path.join(process.cwd(), `${folder}/${file}`),
      "utf8"
    );
    const { data } = matter(markdown);
    return data;
  }) as CharacterMetadata[];
  return characters;
}

export function getMarkDownContent(slug: string) {
  const folder = "markdown/characters";
  const file = path.join(process.cwd(), `${folder}/${slug}.md`);
  const markdown = fs.readFileSync(file, "utf8");
  const { data, content } = matter(markdown) as unknown as CharacterContent;
  return { data, content };
}
