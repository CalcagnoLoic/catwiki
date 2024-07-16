import { Headings } from "@/app/lib/definitions";

const Heading = ({ kind, css, content }: Headings) => {
  switch (kind) {
    case "h1":
      return <h1 className={css}>{content}</h1>;
    case "h2":
      return <h2 className={css}>{content}</h2>;

    default:
      null;
  }
};

export default Heading