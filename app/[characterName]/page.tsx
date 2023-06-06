import fs from "fs";
import Markdown from "markdown-to-jsx";

type Props = {
  params: {
    characterName: string;
  };
};

const getCharacterInfo = (characterName: string) => {
  const folder = "markdown/characters/";
  const file = `${folder}${characterName}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
};

export default function CharacterInfo({ params }: Props) {
  const content = getCharacterInfo(params?.characterName);
  return (
    <main>
      <article className="prose prose-invert fluid-container">
        <Markdown>{content}</Markdown>
      </article>
    </main>
  );
}
