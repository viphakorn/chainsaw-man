import fs from "fs";
import Markdown from "markdown-to-jsx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import probe from "probe-image-size";
import matter from "gray-matter";

type Props = {
  params: {
    characterName: string;
  };
};

const getCharacterInfo = (characterName: string) => {
  const folder = "markdown/characters/";
  const file = `${folder}${characterName}.md`;
  const markdown = fs.readFileSync(file, "utf8");
  const { data, content } = matter(markdown);
  return { data, content };
};

const components = {
  img: async (props: any) => {
    // const imageSize = await probe(props.src.replace(/\/revision\/.*$/, ""));

    return (
      <img
        {...props}
        src={props.src.replace(/\/revision\/.*$/, "")}
        className="rounded-md"
      />
    );
  },

  a: (props: any) => {
    if (props.href.includes("https://static.wikia.nocookie.net/")) {
      return props.children;
    }
    return (
      <Link
        {...props}
        href={props.href
          .replace(/^\/wiki/, "")
          .toLowerCase()
          .replace(/_/g, "-")}
      >
        {props.children}
      </Link>
    );
  },
};

export default async function CharacterInfo({ params }: Props) {
  const { data, content } = getCharacterInfo(params?.characterName);
  return (
    <main>
      <article className="prose prose-invert max-w-7xl fluid-container">
        {/* @ts-ignore */}
        <MDXRemote source={content} components={{ ...components }} />
      </article>
    </main>
  );
}
