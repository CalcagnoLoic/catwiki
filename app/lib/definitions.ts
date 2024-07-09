export type ButtonPosition = {
  cssPosition: string;
};

interface Content {
  css: string;
  content: string;
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
