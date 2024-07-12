import { Cat } from "@/app/lib/definitions";
import Paragraph from "../../Paragraph";

const CatCaracteristics = ({ breed }: { breed: Cat }) => (
  <>
    <div className="mt-8">
      <Paragraph
        kind="p"
        content={
          <>
            <strong>Temperament: </strong> {breed.temperament}
          </>
        }
      />
    </div>
    <div className="mt-8">
      <Paragraph
        kind="p"
        content={
          <>
            <strong>Origin: </strong>
            {breed.origin}
          </>
        }
      />
    </div>
    <div className="mt-8">
      <Paragraph
        kind="p"
        content={
          <>
            <strong>Life Span: </strong> {breed.life_span} years
          </>
        }
      />
    </div>
    <div className="mt-8">
      <Paragraph
        kind="p"
        content={
          <>
            <strong>Adaptability: </strong>
            {breed.adaptability}
          </>
        }
      />
    </div>
    <div className="mt-8">
      <Paragraph
        kind="p"
        content={
          <>
            <strong>Affection Level: </strong>
            {breed.affection_level}
          </>
        }
      />
    </div>
    <div className="mt-8">
      <Paragraph
        kind="p"
        content={
          <>
            <strong>Child Friendly: </strong>
            {breed.child_friendly}
          </>
        }
      />
    </div>
    <div className="mt-8">
      <Paragraph
        kind="p"
        content={
          <>
            <strong>Grooming: </strong>
            {breed.grooming}
          </>
        }
      />
    </div>
    <div className="mt-8">
      <Paragraph
        kind="p"
        content={
          <>
            <strong>Intelligence: </strong>
            {breed.intelligence}
          </>
        }
      />
    </div>
    <div className="mt-8">
      <Paragraph
        kind="p"
        content={
          <>
            <strong>Health issues: </strong>
            {breed.health_issues}
          </>
        }
      />
    </div>
    <div className="mt-8">
      <Paragraph
        kind="p"
        content={
          <>
            <strong>Social needs: </strong>
            {breed.social_needs}
          </>
        }
      />
    </div>
    <div className="mt-8">
      <Paragraph
        kind="p"
        content={
          <>
            <strong>Stranger friendly: </strong>
            {breed.stranger_friendly}
          </>
        }
      />
    </div>
  </>
);

export default CatCaracteristics;
