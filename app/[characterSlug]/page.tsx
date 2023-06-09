import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Metadata } from "next";
import { getMarkDownContent, getMarkDownMetadata } from "@/utils/getData";
import ExportedImage from "next-image-export-optimizer";
import probe from "probe-image-size";

type Props = {
  params: {
    characterSlug: string;
  };
};

const components = {
  img: async (props: any) => {
    const imageSize = await probe(props.src);
    return (
      <ExportedImage
        src={
          props.src
            ? props.src
            : "https://static.wikia.nocookie.net/chainsaw-man/images/d/d5/NoPicAvailable.png"
        }
        width={imageSize.width}
        height={imageSize.height}
        placeholder="blur"
        className="max-w-sm rounded-md"
        {...props}
      />
    );
  },

  a: (props: any) => {
    return <Link {...props}>{props.children}</Link>;
  },
};

export async function generateStaticParams() {
  const characters = getMarkDownMetadata();

  return characters.map((data) => ({
    characterSlug: data.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = getMarkDownContent(params.characterSlug);

  return {
    title: data.name,
  };
}

export default function CharacterInfo({ params }: Props) {
  const { content } = getMarkDownContent(params.characterSlug);

  return (
    <main>
      <article className="font prose prose-invert max-w-7xl py-8 fluid-container prose-headings:font-[Arial] prose-h2:my-4 prose-h3:m-0 prose-p:m-0 prose-p:text-slate-300">
        {/* @ts-ignore */}
        <MDXRemote source={content} components={{ ...components }} />
      </article>
    </main>
  );
}
