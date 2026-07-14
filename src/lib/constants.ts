/**
 * The App Store link is not live yet. It defaults to "#" so the site ships
 * honestly today. Buttons show a "coming soon" state instead of dead or
 * fabricated links. Fill these in the moment the listings go live and every
 * badge and the /download page update automatically.
 */
import type { IconName } from "@/components/icons";

export const APP_STORE_URL = "#";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://helpme.app";
export const SUPPORT_EMAIL = "support@helpme.app";

export interface TemplateCard {
  id: string;
  name: string;
  signature: string;
  description: string;
  icon: IconName;
  wash: string;
}

export const TEMPLATES: TemplateCard[] = [
  {
    id: "university",
    name: "University",
    signature: "Campus life",
    description: "Classes, clubs, events, and help from people already on campus.",
    icon: "graduation",
    wash: "from-blush-deep to-rose-light",
  },
  {
    id: "park",
    name: "Park",
    signature: "Open air",
    description: "Trails, gatherings, volunteer days, and what is happening outside.",
    icon: "tree",
    wash: "from-blush-deep to-rose-light",
  },
  {
    id: "downtown",
    name: "Downtown",
    signature: "City pulse",
    description: "Announcements, pop ups, and local energy in the heart of town.",
    icon: "building",
    wash: "from-blush-deep to-rose-light",
  },
  {
    id: "airport",
    name: "Airport",
    signature: "In transit",
    description: "Directions, delays, and a friendly hand when you need one.",
    icon: "plane",
    wash: "from-blush-deep to-rose-light",
  },
  {
    id: "shopping",
    name: "Shopping center",
    signature: "Retail hub",
    description: "Store updates, events, and easy help finding your way around.",
    icon: "shoppingBag",
    wash: "from-blush-deep to-rose-light",
  },
  {
    id: "stadium",
    name: "Stadium",
    signature: "Game day",
    description: "Schedules, gate info, and community energy before the whistle.",
    icon: "stadium",
    wash: "from-blush-deep to-rose-light",
  },
  {
    id: "business",
    name: "Local business",
    signature: "Neighborhood",
    description: "Announcements, offers, and a page that keeps visitors in the loop.",
    icon: "store",
    wash: "from-blush-deep to-rose-light",
  },
];

export interface FeatureCard {
  icon: IconName;
  title: string;
  description: string;
}

export const FEATURES: FeatureCard[] = [
  {
    icon: "mapPin",
    title: "Built around places",
    description: "Not another feed of people. Open a place and see what is happening there.",
  },
  {
    icon: "calendar",
    title: "Local events",
    description: "Discover events, announcements, fun facts, and updates for the spot you are in.",
  },
  {
    icon: "handshake",
    title: "Ask for help",
    description: "Need directions, a quick hand, or info about a location? Nearby people can step in.",
  },
  {
    icon: "users",
    title: "Offer help",
    description: "See who needs a hand around you and make your community stronger in small ways.",
  },
  {
    icon: "wrench",
    title: "Trusted local pros",
    description: "As the platform grows, connect with local professionals for moving, lawn care, tutoring, and more.",
  },
  {
    icon: "megaphone",
    title: "For organizations",
    description: "Businesses and community leaders share announcements and events in one clear place.",
  },
  {
    icon: "sprout",
    title: "Volunteer openings",
    description: "Find ways to pitch in near parks, campuses, and community spaces.",
  },
  {
    icon: "compass",
    title: "Stay informed nearby",
    description: "Scattered pages and social posts become one living community page per place.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Open a place",
    description: "Every public location gets its own community page, from campuses to parks to stadiums.",
  },
  {
    step: "02",
    title: "See what is happening",
    description: "Events, announcements, fun facts, and updates for that place, all in one view.",
  },
  {
    step: "03",
    title: "Ask or offer help",
    description: "Need a hand, or ready to give one? Nearby community members can connect in the moment.",
  },
  {
    step: "04",
    title: "Build local ties",
    description: "Organizations keep visitors informed, and people leave more connected than they arrived.",
  },
];
