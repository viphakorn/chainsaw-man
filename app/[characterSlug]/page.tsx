import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import matter from "gray-matter";
import { Metadata } from "next";
import { getCharacters } from "../characters/page";

type Props = {
  params: {
    characterSlug: string;
  };
};

// const getCharacterInfo = (characterSlug: string) => {
//   const folder = "markdown/characters/";
//   const file = path.join(process.cwd(), `${folder}${characterSlug}.md`);
//   const markdown = fs.readFileSync(file, "utf8");
//   const { data, content } = matter(markdown);
//   return { data, content };
// };

const components = {
  img: async (props: any) => {
    return <img {...props} src={props.src} className="rounded-md" />;
  },

  a: (props: any) => {
    return <Link {...props}>{props.children}</Link>;
  },
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const characters = getCharacters();
  const character = characters.find(
    ({ data }) => data.slug === params.characterSlug
  );
  return {
    title: character?.data.name,
  };
}

export default function CharacterInfo({ params }: Props) {
  const characters = getCharacters();
  const character = characters.find(
    ({ data }) => data.slug === params.characterSlug
  );
  return (
    <main>
      <article className="prose prose-invert max-w-7xl fluid-container">
        {/* @ts-ignore */}
        <MDXRemote source={character?.content} components={{ ...components }} />
      </article>
    </main>
  );
}
