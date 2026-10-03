/**
 * Single source of truth for links and homepage copy.
 *
 * Help Me ships to iPhone through TestFlight today. Every button, badge, and QR
 * code on the site reads APP_URL, so moving to a public App Store listing later
 * is a one-line change here.
 *
 * Copy follows the Help Me brand identity package (v1). Plain-spoken, warm,
 * confident, local, honest about limits. Before adding a line, check the
 * banned-word list in AGENTS.md: no vetted, verified, trusted, safe, approved,
 * guaranteed, instant, emergency framing, rides, countdowns, or invented numbers.
 */
import { REGION as SEO_REGION, SITE_URL as SEO_SITE_URL, SUPPORT_EMAIL as SEO_SUPPORT_EMAIL } from "@/lib/seo/site";

export const APP_URL = "https://testflight.apple.com/join/TDcwmAe8";
export const APP_CHANNEL = "TestFlight";

export const SITE_URL = SEO_SITE_URL;
export const SUPPORT_EMAIL = SEO_SUPPORT_EMAIL;
export const REGION = SEO_REGION;

/* Required lines. Verbatim, per the brand package. Do not edit. */
export const NOT_EMERGENCY_LINE =
  "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.";
export const HELPER_REVIEW_LINE =
  "Helpers can apply to be reviewed by our team. Help Me does not run background checks.";
export const REPORT_LINE = "You can report or block any member at any time.";

export const MASTER_LINE = "It starts with me.";
export const CAMPAIGN_LINE = "Your block is closer than you think.";

/** The small moments. Daylight, public, low stakes. Never distress. */
export interface Moment {
  where: string;
  line: string;
}

export const MOMENTS: Moment[] = [
  { where: "The library, 4%", line: "Your phone dies, so you pack up and leave an hour early." },
  { where: "A building you've never been in", line: "You circle it twice looking for the right door, and walk in late anyway." },
  { where: "The coffee line", line: "Nobody to watch your seat, so you skip the coffee." },
  { where: "Move-in Saturday", line: "The futon needs two more hands up the stairs. You do it alone." },
  { where: "The lot after class", line: "The car won't start. You call a tow you can't really afford." },
  { where: "Your kitchen", line: "A jar that will not open. Dinner waits." },
];

/** One favor, start to finish. Every fact here stays inside PRODUCT_FACTS. */
export interface FavorStep {
  n: string;
  title: string;
  body: string;
  /** Short caption for the phone in this step. */
  screen: string;
  /** App screenshot (WebP, 1206:2622) shown in the phone. */
  image: string;
  /** What the screenshot shows, for screen readers. */
  alt: string;
}

export const FAVOR_EXAMPLE = "Anyone have a USB-C charger? Library, second floor.";

export const FAVOR_STEPS: FavorStep[] = [
  {
    n: "1",
    title: "Ask.",
    body: "One sentence and a public place. Your request shows as a rough area, about 500 meters wide, not a pin on you.",
    screen: "Ask",
    image: "/UI/app-ask.webp",
    alt: "The Ask for help screen in the Help Me app, with a text box, category choices, a public meeting place field, and a slide to send button.",
  },
  {
    n: "2",
    title: "A neighbor can say yes.",
    body: "Or no. Both are fine. When someone accepts, a private chat opens between just the two of you, and you choose when to share more of where you are.",
    screen: "Nearby",
    image: "/UI/app-nearby.webp",
    alt: "The Map screen in the Help Me app, showing helpers as coarse markers over Fargo, West Fargo, and Moorhead.",
  },
  {
    n: "3",
    title: "Meet in public. Under five minutes.",
    body: "Hand off the charger, say thanks, mark it done. If nobody says yes, the request closes on its own after two hours.",
    screen: "Home",
    image: "/UI/app-home.webp",
    alt: "The Home screen in the Help Me app, with a prompt to ask a helper nearby and a card to say you are available tonight.",
  },
];

/** What it's for. Straight from the "Who we are" deck. */
export const FOR_LINES = ["A phone charger.", "Directions.", "Saving your seat.", "Under 5 minutes."];

/** The small stuff, for the marquee. */
export const SMALL_ASKS = [
  "A phone charger",
  "Directions to the right door",
  "Saving your seat",
  "A jump start in daylight",
  "Two more hands for the couch",
  "A stuck jar",
  "A spare pen before the exam",
  "Carrying groceries up the stairs",
  "A hand with the porch light",
  "A second pair of eyes",
];

export const HELPER_STEPS = [
  { title: "Apply.", body: "From the app, when you're ready." },
  { title: "Get reviewed by our team.", body: "Helping needs a current review after identity evidence." },
  { title: "Say yes when it suits you.", body: "Or no. Nobody is keeping score." },
];

export const PLACES = ["Fargo", "West Fargo", "Moorhead"];
