/**
 * Canonical site identity for Help Me.
 * Every public URL, crawler file, and JSON-LD graph reads from here.
 */
export const SITE_NAME = "Help Me";
export const SITE_TAGLINE = "See Beyond";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://helpme.fyi").replace(/\/$/, "");
export const SUPPORT_EMAIL = "support@helpme.fyi";

/** Public IndexNow key. The matching file must live at `/${INDEXNOW_KEY}.txt`. */
export const INDEXNOW_KEY = "2500d7578e4242d48d57e551182e81d0";
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
export const REGION = "Fargo–Moorhead";
export const REGION_PLAIN = "Fargo-Moorhead";
export const LOCALE = "en_US";
export const DEFAULT_OG_IMAGE = "/logo.png";
export const PUBLISHED = "2026-08-01";
export const UPDATED = "2026-08-28";

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
    "Help Me is a community help app for the Fargo–Moorhead area. People ask for everyday, non-emergency help; approved helpers nearby can accept and meet in public.",
  email: SUPPORT_EMAIL,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
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
    "Help Me does not replace 911 or any official emergency service. If you are in danger, call emergency services first.",
  helperGate:
    "Helping is gated. A helper submits identity evidence and waits on a staff decision. Approval has to be current — a past label does not grant access.",
  location:
    "Live help shows as a coarse area of about 500 meters, not a pin on you. Precise location is shared only after a helper is accepted and you consent, and only with that person.",
  chat: "A private chat opens only between you and the helper who accepted. Nobody else is in it.",
  meet: "Public places by default, with report, block, and safety actions one tap away in every request.",
  requestWindow:
    "Only one live request at a time. A request stays open for up to two hours if nobody accepts.",
  events:
    "Official campus and regional calendars are pulled from NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo, always linked back to the source that published them.",
  deletion: "You can delete your account yourself from Account in the app by typing DELETE.",
  audience:
    "Help Me is a community app for adults in Fargo–Moorhead. It is not a K–12 student program, not a youth chat, and not campus police.",
  paid: "Help Me is not a paid gig marketplace. Helpers are approved community members, not contractors for hire.",
} as const;

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
