/**
 * Single source of truth for links and landing-page copy.
 *
 * Help Me ships to iPhone through TestFlight today. Every button, badge, and QR
 * code on the site reads APP_URL, so moving to a public App Store listing later
 * is a one-line change here.
 */
import type { IconName } from "@/components/icons";
import { REGION as SEO_REGION, SITE_URL as SEO_SITE_URL, SUPPORT_EMAIL as SEO_SUPPORT_EMAIL } from "@/lib/seo/site";

export const APP_URL = "https://testflight.apple.com/join/TDcwmAe8";
export const APP_CHANNEL = "TestFlight";

export const SITE_URL = SEO_SITE_URL;
export const SUPPORT_EMAIL = SEO_SUPPORT_EMAIL;
export const REGION = SEO_REGION;

export interface Step {
  step: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS: Step[] = [
  {
    step: "01",
    title: "Ask",
    description:
      "One sentence is enough. A jump start. A walk to your car. A hand with something heavy. No explaining yourself.",
  },
  {
    step: "02",
    title: "Someone nearby sees it",
    description:
      "Approved helpers around you get the request. No feed, no audience, nothing to perform for.",
  },
  {
    step: "03",
    title: "Meet in public",
    description:
      "A helper accepts, a private chat opens, and you decide what location you share and where you meet.",
  },
  {
    step: "04",
    title: "Get on with your day",
    description: "Mark it done, leave a review, and carry on. That's the whole thing.",
  },
];

export interface ShowcaseScreen {
  src: string;
  alt: string;
  tab: string;
  title: string;
  description: string;
}

export const SCREENS: ShowcaseScreen[] = [
  {
    src: "/IMG_8317.PNG",
    alt: "Help Me home screen showing the daily brief and a live map card for Fargo-Moorhead",
    tab: "Home",
    title: "Your community, within reach",
    description: "The day's brief, what's open near you, and one tap into the live map.",
  },
  {
    src: "/IMG_8318.PNG",
    alt: "Help Me live map of Fargo-Moorhead with Request help and I can help actions",
    tab: "Map",
    title: "Help nearby",
    description:
      "Open help areas stay a coarse ~500 m circle until a helper accepts and you choose to share more.",
  },
  {
    src: "/IMG_8319.PNG",
    alt: "Help Me community tab showing upcoming events across Fargo-Moorhead campuses",
    tab: "Community",
    title: "Fargo-Moorhead is happening",
    description: "Campus and regional calendars in one place, always linked back to the official source.",
  },
];

export interface FeatureCard {
  icon: IconName;
  title: string;
  description: string;
}

export const FEATURES: FeatureCard[] = [
  {
    icon: "handshake",
    title: "Ask in a sentence",
    description: "Post what you need. It goes to helpers near you, not to a timeline.",
  },
  {
    icon: "shield",
    title: "Approved helpers only",
    description:
      "Helping is gated. A helper holds a current staff-reviewed approval before they can see or accept anything.",
  },
  {
    icon: "mapPin",
    title: "Location on your terms",
    description: "Your request shows as an approximate area until you consent to share more with your helper.",
  },
  {
    icon: "message",
    title: "Private chat",
    description: "A direct thread opens only between you and the helper who accepted. Nobody else is in it.",
  },
  {
    icon: "users",
    title: "Meet in public",
    description: "Public places by default, with safety actions one tap away in every request.",
  },
  {
    icon: "calendar",
    title: "Events worth showing up for",
    description: "Campus and regional calendars, attributed and linked to the source that published them.",
  },
  {
    icon: "megaphone",
    title: "A community that talks",
    description: "Posts, comments, and reactions from people who actually live here.",
  },
  {
    icon: "lock",
    title: "Report, block, delete",
    description: "Report or block anyone, any time. Delete your account yourself, from your own phone.",
  },
];

export interface TrustPoint {
  icon: IconName;
  title: string;
  description: string;
}

export const TRUST: TrustPoint[] = [
  {
    icon: "eye",
    title: "Nobody sees your exact spot",
    description:
      "Live help shows as an approximate area. Precise location moves only after a helper is accepted and you say yes.",
  },
  {
    icon: "check",
    title: "Approval is current or it isn't",
    description:
      "Helpers submit identity evidence and wait on a staff decision. An old badge grants nothing.",
  },
  {
    icon: "info",
    title: "Help Me is not 911",
    description:
      "In an emergency, call emergency services. Help Me is for the everyday things that stop your day but aren't an emergency.",
  },
];
