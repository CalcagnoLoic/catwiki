export type ButtonPosition = {
  cssPosition: string;
};

interface Content {
  css?: string;
  content: string | React.ReactNode;
}

export interface Paragraphs extends Content {
  kind: "p" | "span";
}

export interface Headings extends Content {
  kind: "h1" | "h2";
}

export interface Cat {
  weight: Weight;
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
  value: string;
  label: string;
  [key: string]: any;
}

export interface Weight {
  imperial: string;
  metric: string;
}

export interface BreedPage {
  params: {
    slug: string;
  };
}

export interface getImages {
  limit: string;
  slug: string;
}

export type ImageData = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type catsHero = {
  id: string;
  src: string;
  breed: string;
};

export type reasons = {
  id: string;
  subtitle: string;
  explanation: string;
};

export type mostResearchedBreed = {
  breed: Cat;
  index: number;
};

export type caracteristics = {
  name: string;
  data: string;
  rating: boolean;
};
