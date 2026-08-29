import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const ALTERNATIVE_PAGES: SeoPage[] = [
  page({
    slug: "alternatives",
    kind: "hub",
    title: "Help Me and other ways to get help in Fargo–Moorhead",
    description:
      "Honest alternatives to Nextdoor, TaskRabbit, Facebook groups, and campus apps — plus when to skip all of them and call 911 or campus safety.",
    h1: "Alternatives, including the ones that should win",
    eyebrow: "compare",
    lead: "Help Me is one local option. Sometimes AAA, campus police, or a Facebook group is the right tool. These pages say which.",
    priority: 0.75,
    keywords: ["Help Me alternatives", "community help apps Fargo", "Nextdoor alternative Fargo"],
    sections: [
      {
        heading: "Use the tool that actually fits",
        body: [
          "A jump start on a West Acres night is a neighbor problem. A chest pain is 911. An official walk across NDSU after a late lab is campus police. A paid furniture move is a mover. Help Me is the gated, private, Fargo–Moorhead ask — not a replacement for the rest of that list.",
        ],
      },
    ],
    related: ["vs", "about", "not-911", "help", "resources"],
    faqs: [
      {
        q: "Is Help Me trying to replace Nextdoor?",
        a: "No. Nextdoor is a neighborhood feed. Help Me is a request sent to approved helpers. Different jobs.",
      },
    ],
  }),
  page({
    slug: "alternatives/nextdoor-alternatives",
    kind: "alternative",
    title: "Nextdoor alternatives in Fargo–Moorhead",
    description:
      "Nextdoor is a neighborhood social feed. Help Me, Facebook groups, and official services cover different jobs in Fargo, Moorhead, and West Fargo.",
    h1: "Nextdoor alternatives, for people who live here",
    eyebrow: "alternatives",
    lead: "If you opened Nextdoor for a jump start and got a comment thread, you already know the gap. Here is what else exists in this metro — including the tools that should beat an app.",
    compare: { them: "Nextdoor" },
    keywords: ["Nextdoor alternative Fargo", "Nextdoor vs Help Me", "West Fargo neighborhood app"],
    sections: [
      {
        heading: "What Nextdoor is good at",
        body: [
          "Broadcasts. Lost dogs. “Who is your plumber.” City-hall complaints. That is a feed. It is not a private offer to people who are allowed to help, and it is not an official emergency channel.",
        ],
      },
      {
        heading: "Other options in Fargo–Moorhead",
        body: [],
        bullets: [
          "Help Me: one ask, approved helpers, coarse location, meet in public. Built for this metro.",
          "Facebook neighborhood and buy/sell groups: huge reach, public-ish, argument-prone.",
          "City and county services: Fargo, West Fargo, Moorhead, Cass, Clay — for official problems.",
          "211 / FirstLink: the human directory for food, housing, and crisis, not jumper cables.",
          "911: danger, crime, medical. Always first when those apply.",
        ],
      },
      {
        heading: "When Help Me is the worse choice",
        body: [
          "If you need a recommendation thread, Nextdoor or Facebook will outperform a two-person chat. If you need police, do not post a request. If you need a licensed trade, hire one.",
        ],
      },
    ],
    related: ["vs/nextdoor", "vs/facebook-groups", "cities/fargo", "for-neighbors", "resources/211-north-dakota"],
    faqs: [
      {
        q: "Does Help Me have a neighborhood feed?",
        a: "Community has local posts and official events. Help requests are not a public Nextdoor-style thread.",
      },
      {
        q: "Can I ask for a plumber on Help Me?",
        a: "No. That is a hire. Nextdoor recommendations or a licensed company are the honest path.",
      },
    ],
  }),
  page({
    slug: "alternatives/taskrabbit-alternatives",
    kind: "alternative",
    title: "TaskRabbit alternatives in Fargo",
    description:
      "TaskRabbit is paid gig work. Help Me is unpaid community help in Fargo–Moorhead. Here is when to use which — and when to call a real company.",
    h1: "TaskRabbit alternatives, without pretending we pay you",
    eyebrow: "alternatives",
    lead: "If you need a stranger to assemble a dresser for money, that is a marketplace. If you need a neighbor with cables in a Fargo parking lot, that is Help Me.",
    compare: { them: "TaskRabbit" },
    keywords: ["TaskRabbit alternative Fargo", "odd jobs Fargo", "community help vs TaskRabbit"],
    sections: [
      {
        heading: "Paid work vs a hand",
        body: [
          "TaskRabbit, Thumbtack, and Angi sell tasks. Helpers there expect to be paid. Help Me helpers are approved community members. There is no in-app paycheck. Do not post a paid job in Help Me and do not treat a helper as a contractor.",
        ],
      },
      {
        heading: "Local options",
        body: [],
        bullets: [
          "Help Me: jump starts, walks, directions, study, tech, lifting — neighbor scale, gated.",
          "Local movers and handypersons: hire them for moves and installs.",
          "Campus facilities / residence life: the official path for university-owned problems.",
          "AAA or a shop: mechanical work beyond cables and a spare.",
        ],
      },
    ],
    related: ["vs/taskrabbit", "vs/thumbtack", "vs/angi", "help/heavy-lifting", "help/jump-start"],
    faqs: [
      {
        q: "Can I tip a Help Me helper?",
        a: "The product is not a payments app. Do not turn community help into an undeclared gig. If the work is a job, hire a company.",
      },
    ],
  }),
  page({
    slug: "alternatives/craigslist-alternatives-fargo",
    kind: "alternative",
    title: "Craigslist alternatives in Fargo–Moorhead",
    description:
      "Craigslist Fargo is classifieds. Help Me is not a marketplace. Safer local ways to ask for everyday help or to buy and sell.",
    h1: "Craigslist alternatives in Fargo, minus the mystery van",
    eyebrow: "alternatives",
    lead: "Craigslist will sell you a couch and also introduce you to people you should not meet in a dark lot. Help Me is only the help part, and only with approval and a public meeting place.",
    compare: { them: "Craigslist" },
    keywords: ["Craigslist Fargo alternative", "Fargo classifieds", "safe meetup Fargo"],
    sections: [
      {
        heading: "Split the jobs",
        body: [
          "Buying and selling: Marketplace, local shops, campus buy/sell groups. Asking for a hand: Help Me or a person you already know. Emergencies: 911. Craigslist tries to be all of that and is none of it well.",
        ],
      },
      {
        heading: "If you still meet a stranger",
        body: [
          "Public, lit, populated. Daylight if you can. Tell someone. That rule is older than this app. Help Me just makes it the default instead of a footnote under a listing.",
        ],
      },
    ],
    related: ["vs/craigslist", "vs/facebook-marketplace", "guides/meet-in-public-fargo", "safety"],
    faqs: [
      {
        q: "Can I list a bike for sale on Help Me?",
        a: "No. Help Me is not classifieds. Use a marketplace. Use Help Me if you need a hand carrying the bike after you already sold it, maybe.",
      },
    ],
  }),
  page({
    slug: "alternatives/facebook-group-alternatives",
    kind: "alternative",
    title: "Facebook group alternatives in Fargo–Moorhead",
    description:
      "Fargo and West Fargo Facebook groups are loud. Help Me is a private ask to approved helpers. When to use a group, and when not to.",
    h1: "A quieter alternative to the Fargo Facebook group",
    eyebrow: "alternatives",
    lead: "Forty comments, three arguments, one person who might have jumper cables. That is the local group. Help Me skips the audience.",
    compare: { them: "Facebook groups" },
    keywords: ["Fargo Facebook group alternative", "West Fargo community group"],
    sections: [
      {
        heading: "Keep the group for broadcasts",
        body: [
          "Event recs, buy/sell, “has anyone seen this dog,” restaurant opinions. Groups win at reach. They lose at privacy, at gating who can show up, and at not turning your dead battery into content.",
        ],
      },
      {
        heading: "Use Help Me for the actual ask",
        body: [
          "One request. Approved helpers. Coarse map area. Private chat. Public meeting place. No algorithm boosting your worst afternoon.",
        ],
      },
    ],
    related: ["vs/facebook-groups", "vs/nextdoor", "for-neighbors", "how-it-works"],
    faqs: [
      {
        q: "Is Community in Help Me a Facebook replacement?",
        a: "It is local posts plus official calendars, not a 50,000-member group. Different scale, different job.",
      },
    ],
  }),
  page({
    slug: "alternatives/campus-help-apps",
    kind: "alternative",
    title: "Campus help apps for NDSU, MSUM, and Concordia",
    description:
      "Official campus safety apps and escorts come first. Help Me is community help with official Fargo–Moorhead campus calendars — not campus police.",
    h1: "Campus help apps, with the official ones listed first",
    eyebrow: "alternatives",
    lead: "If you are scared on campus, you want public safety, not a neighbor app. If you need a study partner or a printer, the order flips.",
    compare: { them: "campus help apps" },
    keywords: ["NDSU safety app", "MSUM escort", "Concordia campus help", "campus app Fargo"],
    sections: [
      {
        heading: "Official, first",
        body: [],
        bullets: [
          "NDSU Police / campus safety and the university’s official safety channels.",
          "MSUM Public Safety.",
          "Concordia College Public Safety.",
          "Each school’s published escort or after-hours process — use those for official walks.",
        ],
      },
      {
        heading: "Community, second",
        body: [
          "Help Me ingests official NDSU, MSUM, Concordia, and M State calendars. Campus help categories exist for tech, directions, study, and a community walk. That walk is not the university escort. We will keep repeating that until search engines stop mixing them up.",
        ],
      },
    ],
    related: ["vs/campus-safety", "campuses/ndsu", "resources/ndsu-safety", "help/campus-escort", "for-students"],
    faqs: [
      {
        q: "Does Help Me replace the NDSU escort?",
        a: "No. Official escorts and police stay official. Help Me is a community helper with current approval.",
      },
    ],
  }),
  page({
    slug: "alternatives/community-help-apps",
    kind: "alternative",
    title: "Community help apps compared",
    description:
      "How Help Me sits next to Nextdoor, Buy Nothing, Be My Eyes, and volunteer apps — a Fargo–Moorhead-specific read, not a national roundup.",
    h1: "Community help apps, ranked by the job",
    eyebrow: "alternatives",
    lead: "Most “community apps” are either a feed, a charity portal, or a gig board. Help Me is a gated request in one metro.",
    keywords: ["community help app", "neighbor help app", "volunteer app Fargo"],
    sections: [
      {
        heading: "Pick by job, not by logo",
        body: [],
        bullets: [
          "Need a hand right now, nearby, private: Help Me.",
          "Need a neighborhood conversation: Nextdoor or a local group.",
          "Need to give away a couch: Buy Nothing or Marketplace.",
          "Need visual assistance as a blind user: Be My Eyes.",
          "Need official social services: 211 / FirstLink.",
          "Need emergency response: 911.",
        ],
      },
    ],
    related: ["vs/nextdoor", "vs/buy-nothing", "vs/be-my-eyes", "lists/community-apps-compared", "resources"],
    faqs: [
      {
        q: "Is Help Me a volunteer nonprofit app?",
        a: "It is a community product with staff-reviewed helpers. It is not a charity portal and not a 501 directory.",
      },
    ],
  }),
  page({
    slug: "alternatives/neighbor-help-apps",
    kind: "alternative",
    title: "Neighbor help apps in Fargo, Moorhead, and West Fargo",
    description:
      "Apps and channels Fargo–Moorhead neighbors actually use when they need a hand — Help Me, groups, AAA, and official services.",
    h1: "Neighbor help, without putting your driveway on a feed",
    eyebrow: "alternatives",
    lead: "The person two streets over would help. They do not need your house pin to do it.",
    keywords: ["neighbor help Fargo", "West Fargo neighbors", "Moorhead help app"],
    sections: [
      {
        heading: "The local stack",
        body: [
          "Help Me for a gated ask. A text to someone you already know when that person exists. AAA or a shop for cars that need more than cables. Police and 911 when it is not a neighbor problem. Facebook when you want an audience on purpose.",
        ],
      },
    ],
    related: ["for-neighbors", "cities/west-fargo", "help/jump-start", "vs/nextdoor", "guides/location-privacy"],
    faqs: [
      {
        q: "Do helpers see my address?",
        a: "Open requests show a coarse area. Exact location is off until you consent after someone accepts. You can meet at a grocery instead.",
      },
    ],
  }),
  page({
    slug: "alternatives/student-help-apps",
    kind: "alternative",
    title: "Student help apps for Fargo–Moorhead campuses",
    description:
      "NDSU, MSUM, Concordia, and M State students: official campus tools first, then Help Me for everyday asks and attributed calendars.",
    h1: "Student help apps that are not GroupMe chaos",
    eyebrow: "alternatives",
    lead: "The 200-person group chat will see your ask. So will people who cannot actually help. Official safety will not see it at all.",
    keywords: ["NDSU student app", "MSUM help", "Concordia student resources"],
    sections: [
      {
        heading: "Use the university’s tools for university problems",
        body: [
          "Registration, housing, student health, Title IX, public safety, official escorts. Those offices exist. Help Me does not impersonate them. We show their events when they publish to the calendars we ingest.",
        ],
      },
      {
        heading: "Use Help Me for the Tuesday that is merely stuck",
        body: [
          "Study buddy. Printer. Directions to a hall you have never entered. Jump start after night class. A walk that is a neighbor walk, not a police escort.",
        ],
      },
    ],
    related: ["for-students", "vs/groupme", "vs/discord", "campuses", "lists/student-resources-ndsu"],
    faqs: [
      {
        q: "Does a .edu email make me a helper?",
        a: "No. Helper access is a current staff decision after identity evidence. School email is not a badge.",
      },
    ],
  }),
  page({
    slug: "alternatives/fargo-jump-start-apps",
    kind: "alternative",
    title: "Jump start apps and options in Fargo",
    description:
      "Dead battery in Fargo: Help Me, AAA, a shop, or 911 if you are in danger. An honest list for winter parking lots.",
    h1: "Jump starts in Fargo, without a fake dispatch map",
    eyebrow: "alternatives",
    lead: "January will empty a battery. The options are a neighbor, a membership, a shop, or an emergency — not a marketplace pin that claims a 12-minute ETA we cannot promise.",
    keywords: ["jump start Fargo", "dead battery Fargo", "AAA Fargo"],
    sections: [
      {
        heading: "The honest menu",
        body: [],
        bullets: [
          "Help Me: ask an approved helper. Meet in a public lot. No guaranteed arrival time.",
          "AAA or your insurer’s roadside: if you pay for that, use it. It is the professional version.",
          "A shop or tow: when cables are not enough.",
          "911: if the car is in a live lane and you are in danger, or someone is hurt.",
        ],
      },
    ],
    related: ["help/jump-start", "guides/jump-start-in-fargo", "vs/aaa", "help/winter-car-help", "cities/fargo"],
    faqs: [
      {
        q: "Will Help Me send a truck?",
        a: "No. A helper might have cables. That is not a tow.",
      },
    ],
  }),
  page({
    slug: "alternatives/volunteer-apps-fargo",
    kind: "alternative",
    title: "Volunteer apps and neighbor help in Fargo–Moorhead",
    description:
      "Help Me is not a volunteer-matching nonprofit. Where Fargo–Moorhead people actually volunteer, and where a gated neighbor ask fits.",
    h1: "Volunteer listings vs a neighbor who can show up today",
    eyebrow: "alternatives",
    lead: "If you want a shift at a food pantry, call the pantry. If you want to jump a battery this afternoon, apply to be a Helper.",
    keywords: ["volunteer Fargo", "Help Me volunteer", "community service Fargo"],
    sections: [
      {
        heading: "Different kinds of showing up",
        body: [
          "United Way, campus volunteer offices, churches, and city programs run real volunteer work. Help Me reviews identity evidence so you can accept everyday requests. That is not a background-checked volunteer corps and not a court-ordered hours tracker.",
        ],
      },
    ],
    related: ["helpers", "for-helpers", "resources/food-assistance-fargo", "guides/how-to-become-a-helper"],
    faqs: [
      {
        q: "Can I log Help Me hours as volunteer credit?",
        a: "Not through the app. If an organization needs signed hours, use their process. We do not issue volunteer certificates.",
      },
    ],
  }),

  page({
    slug: "alternatives/help-options-for-new-residents-fargo",
    kind: "alternative",
    title: "Where new residents in Fargo–Moorhead actually get help",
    description:
      "Just moved to Fargo, Moorhead, or West Fargo? The realistic list of where to get answers: city services, campuses, libraries, 211, neighbors, and Help Me.",
    h1: "Where to actually get answers when you are new here",
    eyebrow: "alternatives",
    lead: "Most newcomer questions are practical, boring, and answered instantly by anyone who has lived here two winters.",
    answer:
      "New residents in Fargo–Moorhead get the most from four sources: their city’s official website for parking, plowing, and utilities; the public library systems for free local knowledge; 211 for services and referral; and neighbors for the practical questions nobody writes down. Help Me covers that last category for small, in-person needs.",
    keywords: ["new to Fargo help", "moving to Moorhead resources", "newcomer Fargo questions"],
    sections: [
      {
        heading: "Start with your city, not a search engine",
        body: [
          "Snow emergency rules, residential plow schedules, utility setup, and parking are city-specific, and Fargo, West Fargo, and Moorhead each publish their own. A confident answer from someone in the wrong city is how people get towed.",
        ],
        bullets: [
          "City website: plowing, parking, utilities, permits",
          "Public library: free card, local knowledge, warm building",
          "211: services, assistance, and referral in ND and MN",
          "MATBUS: transit routes and schedules",
          "Neighbors: everything nobody bothered to write down",
        ],
      },
      {
        heading: "The questions worth asking a person",
        body: [
          "Which grocery corridor is actually closest. Which lot near campus is legal. How cold is too cold to walk it. Where to buy a coat that works. Which bus stop faces the right direction. These take a resident ten seconds and cost a newcomer whole afternoons.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Small, in-person, everyday things — directions, a hand with a move, a jump start, a local-guide question. Not services, not benefits, not emergencies. Those have real institutions and this page points at them on purpose.",
        ],
      },
    ],
    related: ["for-newcomers", "guides/new-to-fargo", "for-people-new-to-winter", "resources/211-north-dakota", "resources/matbus", "lists/free-things-to-do-fargo-moorhead"],
    faqs: [
      {
        q: "What should I set up first?",
        a: "Utilities, your city’s alert system, and a library card. The alerts matter more than newcomers expect once it snows.",
      },
      {
        q: "Is there a newcomer group?",
        a: "Groups exist through campuses, employers, and community organizations. Help Me is not one — it is a help request tool, not a social network.",
      },
    ],
  }),

  page({
    slug: "alternatives/help-options-for-older-adults-fargo",
    kind: "alternative",
    title: "Help options for older adults in Fargo–Moorhead",
    description:
      "Aging services, county programs, 211, home care, and neighbors. Where each one fits for older adults in Fargo, Moorhead, and West Fargo.",
    h1: "The realistic list for older adults",
    eyebrow: "alternatives",
    lead: "There is a real difference between needing a hand with a berm and needing support at home, and the right door is different for each.",
    answer:
      "Older adults in Fargo–Moorhead have several distinct options: 211 for aging services and referral, county human services in Cass and Clay counties, licensed home care for personal and medical support, senior centers and community programs for connection, and neighbors for one-off tasks. Help Me only covers that last category.",
    keywords: ["senior services Fargo", "aging services North Dakota", "older adults Moorhead help"],
    sections: [
      {
        heading: "Match the door to the need",
        body: [
          "Ongoing daily support is home care. Benefits, meals, and program eligibility run through county and state aging services, with 211 as the front door on both sides of the river. Transportation has its own programs, including paratransit. Loneliness is real and senior centers and community programs address it better than an app can.",
        ],
        bullets: [
          "211: aging services, meals, referral in ND and MN",
          "County human services: Cass County ND, Clay County MN",
          "Licensed home care: personal and medical support",
          "Paratransit and transportation programs",
          "Neighbors: a berm, a heavy box, a jump start",
        ],
      },
      {
        heading: "What Help Me will not pretend to be",
        body: [
          "Not care, not transportation, not medical help, and not a check-in service. Helpers are approved community members whose identity a staff member reviewed — not caregivers, and not background-checked in the criminal-records sense. Meet in public when you can, and involve family if that makes it easier.",
        ],
      },
    ],
    related: ["for-seniors", "resources/211-north-dakota", "resources/211-minnesota", "resources/cass-county-resources", "resources/clay-county-resources", "questions/are-helpers-background-checked"],
    faqs: [
      {
        q: "Can Help Me arrange rides to appointments?",
        a: "No. It is not a rideshare or medical transport. Paratransit and transportation programs cover that.",
      },
      {
        q: "Is there a cost for any of this?",
        a: "Help Me is free with no payments. County and 211 services are free to contact; individual programs vary.",
      },
    ],
  }),

  page({
    slug: "alternatives/safety-walk-options-fargo",
    kind: "alternative",
    title: "Safety walk and escort options in Fargo–Moorhead",
    description:
      "Campus escorts, employer security, friends, and neighbor requests. The real options for not walking to your car alone in Fargo, Moorhead, or West Fargo.",
    h1: "Not walking alone: the actual options",
    eyebrow: "alternatives",
    lead: "It is dark by five for half the year here, and parking is rarely near the door.",
    answer:
      "For not walking alone in Fargo–Moorhead: use a campus safety escort where one exists, ask employer security at workplaces that provide it, walk out with a coworker or classmate, or request a safety walk from an approved helper on Help Me. For an immediate threat, call 911 rather than waiting on any of these.",
    keywords: ["safety escort Fargo", "walk to car service", "campus escort NDSU MSUM"],
    sections: [
      {
        heading: "On campus, use campus",
        body: [
          "Where a campus offers a safety escort service, that is the first call on campus property. Those programs are staffed, familiar with the grounds, and connected to campus public safety. NDSU, MSUM, and Concordia each publish their own safety resources.",
        ],
      },
      {
        heading: "At work, use work",
        body: [
          "Hospitals, larger employers, and some retail centers provide security walk-outs at shift change. If yours does, it is more reliable than any app because it is staffed on a schedule.",
        ],
      },
      {
        heading: "Where a neighbor request fits",
        body: [
          "The gaps: an ordinary lot, an event that ran late, a bus stop, a walk nobody else is making. Realistically, evening coverage is better than overnight coverage, and no approved helper is on call. If a person is following you or something is wrong, that is 911, immediately.",
        ],
      },
    ],
    related: ["help/safety-walk", "help/walk-to-car", "resources/ndsu-safety", "resources/msum-safety", "for-night-shift-workers", "not-911"],
    faqs: [
      {
        q: "Is a safety walk request guaranteed?",
        a: "No. Offers are voluntary and coverage depends on who is nearby and online. Use a staffed escort service when one exists.",
      },
      {
        q: "What if someone is following me right now?",
        a: "Call 911 and get to a lit, populated place. Do not wait on an app.",
      },
    ],
  }),
];
