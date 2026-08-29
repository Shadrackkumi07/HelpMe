export type PageKind =
  | "core"
  | "hub"
  | "city"
  | "neighborhood"
  | "campus"
  | "school"
  | "help"
  | "glossary"
  | "vs"
  | "alternative"
  | "guide"
  | "resource"
  | "list"
  | "audience"
  | "question"
  | "season";

export interface FaqItem {
  q: string;
  a: string;
}

export interface ContentSection {
  heading: string;
  body: string[];
  bullets?: string[];
}

/** A single named step. Rendered as an ordered list and emitted as schema.org HowTo. */
export interface HowToStep {
  name: string;
  text: string;
}

/** A single entry in a curated list. Rendered as cards and emitted as schema.org ItemList. */
export interface ListEntry {
  name: string;
  description: string;
  href?: string;
}

export interface GeoEntity {
  name: string;
  type: "City" | "Neighborhood" | "Campus" | "School" | "Region" | "AdministrativeArea";
  city?: string;
  state?: "ND" | "MN";
  county?: string;
  lat?: number;
  lng?: number;
}

export interface SeoPage {
  /** Path without a leading slash. Home is an empty string. */
  slug: string;
  kind: PageKind;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lead: string;
  /**
   * A self-contained 40–70 word answer to the page's question, written so an answer
   * engine can quote it without the rest of the page. Rendered first, marked
   * `speakable`, and mirrored into /llms-full.txt.
   */
  answer?: string;
  /** Scannable facts an AI summary should carry away. Rendered under the answer. */
  takeaways?: string[];
  /** Ordered steps. Emits HowTo. */
  steps?: HowToStep[];
  /** Curated entries. Emits ItemList. */
  listItems?: ListEntry[];
  updated?: string;
  keywords?: string[];
  sections: ContentSection[];
  faqs?: FaqItem[];
  related: string[];
  priority?: number;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  geo?: GeoEntity;
  term?: { name: string; shortDefinition: string };
  compare?: { them: string };
  noindex?: boolean;
}

export interface HubCard {
  href: string;
  title: string;
  description: string;
  meta?: string;
}
