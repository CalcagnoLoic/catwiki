import { Cat } from "@/app/lib/definitions";

const CatCaracteristics = ({ breed }: { breed: Cat }) => (
  <>
    <div className="mt-8">
      <p>
        <strong>Temperament: </strong> {breed.temperament}
      </p>
    </div>
    <div className="mt-8">
      <p>
        <strong>Origin: </strong>
        {breed.origin}
      </p>
    </div>
    <div className="mt-8">
      <p>
        <strong>Life Span: </strong> {breed.life_span} years
      </p>
    </div>
    <div className="mt-8">
      <p>
        <strong>Adaptability: </strong>
        {breed.adaptability}
      </p>
    </div>
    <div className="mt-8">
      <p>
        <strong>Affection Level: </strong>
        {breed.affection_level}
      </p>
    </div>
    <div className="mt-8">
      <p>
        <strong>Child Friendly: </strong>
        {breed.child_friendly}
      </p>
    </div>
    <div className="mt-8">
      <p>
        <strong>Grooming: </strong>
        {breed.grooming}
      </p>
    </div>
    <div className="mt-8">
      <p>
        <strong>Intelligence: </strong>
        {breed.intelligence}
      </p>
    </div>
    <div className="mt-8">
      <p>
        <strong>Health issues: </strong>
        {breed.health_issues}
      </p>
    </div>
    <div className="mt-8">
      <p>
        <strong>Social needs: </strong>
        {breed.social_needs}
      </p>
    </div>
    <div className="mt-8">
      <p>
        <strong>Stranger friendly: </strong>
        {breed.stranger_friendly}
      </p>
    </div>
  </>
);

export default CatCaracteristics;
