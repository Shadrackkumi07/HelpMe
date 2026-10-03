/**
 * Canonical site identity for Help Me.
 * Every public URL, crawler file, and JSON-LD graph reads from here.
 */
export const SITE_NAME = "Help Me";
export const SITE_TAGLINE = "It starts with me";
export const CAMPAIGN_LINE = "Your block is closer than you think.";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://helpme.fyi").replace(/\/$/, "");
export const SUPPORT_EMAIL = "support@helpme.fyi";

/** Public IndexNow key. The matching file must live at `/${INDEXNOW_KEY}.txt`. */
export const INDEXNOW_KEY = "2500d7578e4242d48d57e551182e81d0";
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
export const REGION = "Fargo–Moorhead";
export const REGION_PLAIN = "Fargo-Moorhead";
export const LOCALE = "en_US";
export const DEFAULT_OG_IMAGE = "/brand/share-card.png";
export const PUBLISHED = "2026-08-01";
export const UPDATED = "2026-10-02";

export const GEO = {
  regionName: "Fargo–Moorhead metropolitan area",
  states: ["North Dakota", "Minnesota"] as const,
  counties: ["Cass County, ND", "Clay County, MN"] as const,
  cities: ["Fargo", "Moorhead", "West Fargo"] as const,
  latitude: 46.8772,
  longitude: -96.7898,
  geoRegion: "US-ND",
  icbm: "46.8772, -96.7898",
  areaServed: "Fargo, West Fargo, Moorhead, Dilworth, Horace, and surrounding Cass and Clay County communities",
};

export const ORGANIZATION = {
  name: SITE_NAME,
  legalName: "Help Me",
  description:
    "Help Me is a place to ask your block for the small stuff. Neighbors in the Fargo–Moorhead area ask for quick, everyday, non-emergency favors, and a neighbor who helps through Help Me can say yes and meet in public.",
  email: SUPPORT_EMAIL,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/help-me-icon-512.png`,
  foundingLocation: "Fargo, North Dakota",
  areaServed: GEO.areaServed,
};

export const SOFTWARE = {
  name: SITE_NAME,
  operatingSystem: "iOS 15+",
  applicationCategory: "LifestyleApplication",
  offersPrice: "0",
  downloadUrl: "https://testflight.apple.com/join/TDcwmAe8",
  channel: "TestFlight",
};

export const PRODUCT_FACTS = {
  notEmergency:
    "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
  helperGate:
    "Helping is gated. A helper submits identity evidence and our team reviews it; the review has to be current, and a past one does not grant access. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
  location:
    "Live help shows as a coarse area of about 500 meters, not a pin on you. Precise location is shared only after a helper is accepted and you consent, and only with that person.",
  chat: "A private chat opens only between you and the helper who accepted. Nobody else is in it.",
  meet: "Meet in public places by default. You can report or block any member at any time, from inside every request.",
  requestWindow:
    "Only one live request at a time. A request stays open for up to two hours if nobody accepts.",
  events:
    "Official campus and regional calendars are pulled from NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo, always linked back to the source that published them.",
  deletion: "You can delete your account yourself from Account in the app by typing DELETE.",
  audience:
    "Help Me is a community app for adults in Fargo–Moorhead. It is not a K–12 student program, not a youth chat, and not campus police.",
  paid: "Help Me is not a paid gig marketplace. Helpers are neighbors who applied and were reviewed by our team, not contractors for hire.",
} as const;

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
