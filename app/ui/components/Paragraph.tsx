import { Paragraphs } from "@/app/lib/definitions";

const Paragraph = ({ kind, css, content }: Paragraphs) => {
  switch (kind) {
    case "p":
      return <p className={css}>{content}</p>;

    case "span":
      return <span className={css}>{content}</span>;

    default:
      break;
  }
};

export default Paragraph;
