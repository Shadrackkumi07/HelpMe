import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const GLOSSARY_PAGES: SeoPage[] = [
  page({
    slug: "glossary",
    kind: "hub",
    title: "Help Me glossary",
    description:
      "Plain definitions for the Help Me app in Fargo–Moorhead: approved helpers, approximate location, private chat, campus events, and what this product is not.",
    h1: "Words we actually mean",
    eyebrow: "learn",
    lead: "Marketing likes fog. This metro does not. If Help Me uses a word — helper, area, chat, approval — this is the honest version, not the brochure version.",
    keywords: ["Help Me glossary", "Help Me definitions", "approved helper meaning", "Fargo community help terms"],
    sections: [
      {
        heading: "A glossary, not a slogan list",
        body: [
          "These pages exist so a person in Fargo, Moorhead, or West Fargo can look up what the app actually does. An approved helper is not a background-checked contractor. Approximate location is not a pin on your house. Campus events are not invented by us. 911 is still 911.",
          "Each entry is a short definition, then a little teaching. If a feature is not in the iPhone app today, it is not defined here. TestFlight is the channel. Fargo–Moorhead is the map.",
        ],
      },
      {
        heading: "How to read a definition",
        body: [
          "Start with the one- or two-sentence meaning. The sections under it explain the boundary — what the word includes, what it refuses, and which product page to open next. Related links go to How it works, Safety, Helpers, Events, and the comparison pages when the confusion is usually “is this Nextdoor?”",
        ],
        bullets: [
          "Product words: request, matching, live map, daily brief, one live request",
          "Trust words: approved helper, staff review, identity evidence, coarse area",
          "Safety words: meet in public, private chat, report and block, not an emergency",
          "Place words: campus events, event attribution, home and school",
        ],
      },
      {
        heading: "If you only remember three things",
        body: [
          "Helping is gated by a current staff decision. Live help shows as a coarse area until you consent after someone accepts. Help Me does not dispatch police, campus safety, or a tow truck. The rest of the glossary is how those sentences stay true in the product.",
        ],
      },
    ],
    related: ["about", "how-it-works", "safety", "vs", "alternatives", "explore"],
    faqs: [
      {
        q: "Is this the same as the Help Center?",
        a: "No. The Help Center answers practical how-to questions. The glossary defines product words. Use both. If something still feels unclear, email support@helpme.fyi — a person reads it.",
      },
      {
        q: "Do these definitions apply outside Fargo–Moorhead?",
        a: "The product is built for Fargo–Moorhead. Matching, event calendars, and these pages describe that metro. We do not operate a national glossary for a national network we do not run.",
      },
      {
        q: "Can a word here invent a feature?",
        a: "No. If it is not in the shipping iPhone app — TestFlight, iOS 15 or later — it does not get a definition that pretends otherwise.",
      },
    ],
  }),
  page({
    slug: "glossary/what-is-help-me",
    kind: "glossary",
    title: "What is Help Me?",
    description:
      "Help Me is a Fargo–Moorhead community app for everyday, non-emergency help. Approved helpers nearby can accept a request and meet you in public.",
    h1: "What Help Me is",
    eyebrow: "glossary",
    lead: "Someone near you needs a hand. Someone near you would give one. Help Me is the local, gated, private way those two people find each other.",
    keywords: ["what is Help Me", "Help Me app", "Fargo community help app"],
    term: {
      name: "Help Me",
      shortDefinition:
        "Help Me is a Fargo–Moorhead community app for everyday, non-emergency help. You post a short ask; an approved helper nearby can accept; you chat privately and meet in public.",
    },
    sections: [
      {
        heading: "The product in one breath",
        body: [
          "You open the live map and say what you need — a jump start in a West Acres lot, a walk from the library, directions across NDSU, a study partner, a printer that will not print. Eligible approved helpers can receive a private offer. The first to accept gets the request. A private chat opens. You meet in public, finish the thing, confirm completion, and get on with your day.",
          "There is no public feed of your ask. There is no paycheck from the app. There is no promise that a neighbor is a licensed professional. The brand line is See Beyond — notice the person who is stuck, and the person who would stop.",
        ],
      },
      {
        heading: "Built here, not everywhere",
        body: [
          "Home shows a daily brief and upcoming official events. Community opens on campus and regional calendars from NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo, each linked to the official source. Matching is local. The iPhone app is on TestFlight. That is the whole geography we claim.",
        ],
      },
      {
        heading: "What it is not",
        body: [
          "It is not 911. It is not campus police. It is not a paid TaskRabbit-style marketplace. It is not a background-check company. It is not a social network for minors. Staff review identity evidence; that is a human decision about who may help, not a criminal record search, and we do not advertise one.",
        ],
      },
    ],
    related: ["about", "how-it-works", "glossary/approved-helper", "glossary/not-an-emergency", "download", "vs"],
    faqs: [
      {
        q: "Is Help Me free?",
        a: "Yes. It is on TestFlight for iPhone (iOS 15 or later) at no charge. It is not a paid gig marketplace.",
      },
      {
        q: "Do I need an account?",
        a: "Yes. Requests, private chat, reports, saved events, and account deletion all belong to a person. You can create an account with email or Sign in with Apple.",
      },
      {
        q: "Is this only for students?",
        a: "No. Students are a large part of this metro. Neighbors, newcomers, and families use the same app. Helping still requires a current staff approval. It is an adult community app, not a K–12 program.",
      },
    ],
  }),
  page({
    slug: "glossary/approved-helper",
    kind: "glossary",
    title: "Approved helper",
    description:
      "An approved helper on Help Me has current, staff-reviewed identity evidence. Anyone can join. Not everyone can help. This is not a background check.",
    h1: "Approved helper",
    eyebrow: "glossary",
    lead: "Anyone can join Help Me. Not everyone can help. The word “approved” is a current staff decision, not a costume.",
    keywords: ["approved helper", "Help Me helper", "become a helper Fargo"],
    term: {
      name: "Approved helper",
      shortDefinition:
        "An approved helper is a community member whose identity evidence a staff member has reviewed, and whose approval is current. An old badge grants nothing. It is not a criminal background check.",
    },
    sections: [
      {
        heading: "What the gate actually is",
        body: [
          "A helper applies from Account in the app. The application asks about categories they can actually help with, availability, motivation, experience, and identity evidence. A staff member reviews that evidence and makes the call. Pending, approved, rejected, expired, and resubmission are real states. Historical labels never grant access.",
          "Until approval is current, a person cannot see or accept requests. That is the entire point of the word. We would rather have fewer helpers than a self-serve badge.",
        ],
      },
      {
        heading: "What it is not",
        body: [
          "It is not a criminal background check. It is not a professional license. It is not employment. Help Me is not a paid gig marketplace. Helpers are neighbors with a name on a decision — not contractors for hire, not first responders, not a substitute for campus police.",
        ],
      },
      {
        heading: "Once you are approved",
        body: [
          "You choose when to go online. You can use your location for genuinely nearby offers. Going offline, leaving the app, accepting a request, or going quiet removes you from active matching. You are a neighbor, not an on-duty employee.",
        ],
      },
    ],
    related: [
      "helpers",
      "glossary/staff-review",
      "glossary/identity-evidence",
      "glossary/online-status",
      "for-helpers",
      "safety",
    ],
    faqs: [
      {
        q: "Does approval last forever?",
        a: "No. Approval has to be current. An old label grants nothing.",
      },
      {
        q: "Is this a paid job?",
        a: "No. Do not expect a paycheck from the app. If you want paid gigs, marketplaces built for that exist.",
      },
      {
        q: "Can I help the day I join?",
        a: "You can join and ask for help. You cannot see or accept requests until a staff member approves you and that approval is still current.",
      },
    ],
  }),
  page({
    slug: "glossary/help-request",
    kind: "glossary",
    title: "Help request",
    description:
      "A Help Me request is a short, private ask from the live map. Eligible approved helpers may get an offer. There is no public feed of your need.",
    h1: "A help request",
    eyebrow: "glossary",
    lead: "One sentence is enough. A jump start. A walk to the car. A hand with something heavy. No explaining yourself to a timeline.",
    keywords: ["help request", "ask for help Fargo", "Help Me request"],
    term: {
      name: "Help request",
      shortDefinition:
        "A help request is a short ask posted from the live map. Eligible approved helpers may receive a private offer. There is no public feed of your request, and only one live request at a time.",
    },
    sections: [
      {
        heading: "What you actually post",
        body: [
          "Open the live map and choose I need help. Pick a category — a jump start, a walk to the car, directions, a study session, tech support, lost and found — and add a sentence if you want. Details and a public meeting-place label are optional. Category-only requests are still understandable to helpers.",
        ],
      },
      {
        heading: "Who sees it",
        body: [
          "Not a Facebook group. Not Nextdoor. Help Me privately considers approved helpers who are online, suitable for the category, recently active, and not blocked by either person. Up to ten eligible helpers may receive a short-lived offer. The first to accept gets the request. Everyone else does not.",
        ],
      },
      {
        heading: "How long it lives",
        body: [
          "Only one live request at a time. If nobody accepts within two hours, the request closes and you can try again. After someone accepts, you chat privately, meet in public, and both people confirm completion. Exact location sharing — if you turned it on — ends then.",
        ],
      },
    ],
    related: [
      "how-it-works",
      "glossary/matching",
      "glossary/one-live-request",
      "glossary/live-map",
      "help",
      "glossary/completion-and-reviews",
    ],
    faqs: [
      {
        q: "Can I ask without sharing my location?",
        a: "Yes. No-location requests can still be considered by suitable approved helpers. Approximate area is the usual map view. Exact location is opt-in after someone accepts.",
      },
      {
        q: "Who sees my request?",
        a: "Eligible approved helpers who receive a private offer. Not a public timeline. Not people you did not match with.",
      },
      {
        q: "What if nobody accepts?",
        a: "After two hours the request closes. You can post again. There is no guaranteed response time and no dispatch.",
      },
    ],
  }),
  page({
    slug: "glossary/approximate-location",
    kind: "glossary",
    title: "Approximate location",
    description:
      "Live help on Help Me shows as an approximate area of about 500 meters, not a pin on you. Precise location moves only after accept and consent.",
    h1: "Approximate location",
    eyebrow: "glossary",
    lead: "Asking for help should never cost you your driveway. The map shows an area. A pin is a later, optional, two-person decision.",
    keywords: ["approximate location", "Help Me location privacy", "500 meter area"],
    term: {
      name: "Approximate location",
      shortDefinition:
        "Live help shows as a coarse area of about 500 meters, not a pin on you. Precise location is shared only after a helper is accepted and you consent, and only with that person.",
    },
    sections: [
      {
        heading: "What other people see",
        body: [
          "On the open live map, a request is a rounded area — about 500 meters — not your apartment door on 8th Street, not a residence-hall room, not a parked car’s exact stall. Helpers decide whether they can be useful from that coarse picture plus your category and sentence.",
        ],
      },
      {
        heading: "When precision is even possible",
        body: [
          "Precise location moves only after a helper is accepted and you say yes, and only to that person. You can stop sharing. Completion ends exact sharing automatically. You can also skip precision entirely and meet at a public place you named in the request.",
        ],
      },
      {
        heading: "Matching still uses the rounded area",
        body: [
          "When both people have shared matching location, offers stay within about 10 km of the requester’s rounded area. The system uses that rounded area — not a pin on you. Approximate location is a privacy default, not a decoration.",
        ],
      },
    ],
    related: [
      "safety",
      "glossary/coarse-area",
      "glossary/nearby-interaction",
      "glossary/live-map",
      "guides/location-privacy",
      "how-it-works",
    ],
    faqs: [
      {
        q: "Can a helper see my house?",
        a: "Not from the open map. They see a coarse area. Exact location is off until you consent after they accept, and you can meet at a public place instead.",
      },
      {
        q: "Is 500 meters exact?",
        a: "It is a coarse area of about 500 meters. Treat it as a neighborhood-scale blur, not a surveyed circle.",
      },
      {
        q: "What about precision finding on iPhone?",
        a: "On supported iPhones, precision finding is available only when both people opt in. That is a separate, later choice — not the default map.",
      },
    ],
  }),
  page({
    slug: "glossary/private-chat",
    kind: "glossary",
    title: "Private chat",
    description:
      "Help Me opens a private chat only between you and the helper who accepted. Nobody else is in the thread. Messages are not a public feed.",
    h1: "Private chat",
    eyebrow: "glossary",
    lead: "The ask is not a performance. When someone accepts, the conversation is two people, not a group, not a comments thread.",
    keywords: ["Help Me chat", "private chat", "helper messages"],
    term: {
      name: "Private chat",
      shortDefinition:
        "A private chat opens only between you and the helper who accepted. Nobody else is in the thread. It is how you agree on a public meeting place and what you are willing to share.",
    },
    sections: [
      {
        heading: "When it opens",
        body: [
          "The first eligible helper to accept gets the request. A private chat opens at that moment. Until then there is no thread, no audience, and no half-public “who can help?” pile-on. Offers that were not accepted do not become a conversation.",
        ],
      },
      {
        heading: "What it is for",
        body: [
          "Agree on a public place. Decide whether to share more location. Confirm what the ask actually is — jumper cables at the West Acres lot, a walk from the MSUM library, a box up a downtown stair. Then go do the thing. Chat is a tool, not a social network.",
        ],
      },
      {
        heading: "What we do not do with it",
        body: [
          "Private messages stay between the two people in the request. They are not sold. They are not used to train models. Report and block still apply if the thread feels wrong. Leave a situation that feels wrong; politeness is not a safety feature.",
        ],
      },
    ],
    related: [
      "how-it-works",
      "glossary/meet-in-public",
      "glossary/safety-actions",
      "glossary/report-and-block",
      "safety",
      "legal/privacy",
    ],
    faqs: [
      {
        q: "Can other helpers read the chat?",
        a: "No. Only you and the helper who accepted are in it.",
      },
      {
        q: "Is chat required?",
        a: "It is how the two of you coordinate. You still choose the meeting place and what location you share.",
      },
      {
        q: "What if the messages feel wrong?",
        a: "Stop. Use report and block. If you are in danger, call 911. Do not stay in a chat to be polite.",
      },
    ],
  }),
  page({
    slug: "glossary/meet-in-public",
    kind: "glossary",
    title: "Meet in public",
    description:
      "Help Me defaults to public meeting places. You choose the label. A grocery vestibule or campus union beats a dark driveway.",
    h1: "Meet in public",
    eyebrow: "glossary",
    lead: "A well-lit lot, a union, a coffee shop on Broadway. Public is the default because a stranger is still a stranger, even with a current approval.",
    keywords: ["meet in public", "Help Me safety", "public meeting place Fargo"],
    term: {
      name: "Meet in public",
      shortDefinition:
        "Public places are the default meeting choice on Help Me. You decide the label. Exact location is optional. A current helper approval is not an invitation to a private address.",
    },
    sections: [
      {
        heading: "Why public is the default",
        body: [
          "Staff-reviewed identity evidence is a human look at who someone says they are. It is not a guarantee of character, and it is not a background check. Meeting where other people exist — a grocery vestibule, a campus union, a well-lit commercial lot — is the remaining common sense.",
        ],
      },
      {
        heading: "You name the place",
        body: [
          "A public meeting-place label is optional on the request, and you can still sort it in private chat. Downtown Broadway is walkable and public. So are campus unions at NDSU, MSUM, and Concordia. Gooseberry Park after dark is beautiful and often the wrong call. Pick lit, populated ground.",
        ],
      },
      {
        heading: "Leave if you need to",
        body: [
          "Safety actions sit one tap away in every request. Report or block anyone, any time. If you are in danger, call 911 first. Do not stay in a parking lot to finish a polite sentence.",
        ],
      },
    ],
    related: [
      "safety",
      "glossary/safety-actions",
      "glossary/approved-helper",
      "glossary/private-chat",
      "guides/how-to-stay-safe",
      "not-911",
    ],
    faqs: [
      {
        q: "Do I have to post my address?",
        a: "No. Meet in public. Share exact location only after a helper accepts, and only if you want to.",
      },
      {
        q: "What counts as public?",
        a: "A place other people could reasonably walk into — a grocery, a union, a coffee shop, a busy lot. Not a basement, not a dark cul-de-sac, not a locked residence hall room.",
      },
      {
        q: "Does approval mean I can meet at home?",
        a: "You choose. The product default and the honest advice are public places. A current approval is not a reason to ignore that.",
      },
    ],
  }),
  page({
    slug: "glossary/staff-review",
    kind: "glossary",
    title: "Staff review",
    description:
      "A Help Me staff member reviews helper identity evidence and decides. Not an algorithm. Not a self-serve badge. Approval must stay current.",
    h1: "Staff review",
    eyebrow: "glossary",
    lead: "A person makes the call. That is slower than a checkbox, and it is the point.",
    keywords: ["staff review", "helper approval", "Help Me review"],
    term: {
      name: "Staff review",
      shortDefinition:
        "A staff member reviews a helper’s identity evidence and makes the approval decision. It is not an algorithm and not a self-serve badge. Pending, approved, rejected, expired, and resubmission are real states.",
    },
    sections: [
      {
        heading: "A human decision",
        body: [
          "The helper application lives inside the app. There is no shortcut from this website. Someone on staff looks at the identity evidence and the rest of the application — categories, availability, motivation, experience — and decides. We do not pretend a model can replace that look.",
        ],
      },
      {
        heading: "States that mean something",
        body: [
          "Pending means wait. Approved means current access to see and accept requests. Rejected and expired mean you cannot help until a new, current decision says otherwise. Resubmission is a real path. Historical labels never grant access. An old screenshot of a badge is not a badge.",
        ],
      },
      {
        heading: "What staff review does not claim",
        body: [
          "It does not claim a criminal background check. It does not claim a professional license. It does not claim the helper is an employee. If a later report lands, staff can act. Meet in public anyway.",
        ],
      },
    ],
    related: [
      "helpers",
      "glossary/identity-evidence",
      "glossary/approved-helper",
      "safety",
      "glossary/report-and-block",
      "for-helpers",
    ],
    faqs: [
      {
        q: "How long does review take?",
        a: "A person does it, so it is not instant. Apply from the app and wait on a real decision. We do not publish a fake SLA.",
      },
      {
        q: "Can I skip review with a .edu email?",
        a: "No. A campus address is not a helper badge and does not skip staff review.",
      },
      {
        q: "Who reviews reports?",
        a: "Staff can act on reports. Report from the request. That is separate from the original approval look.",
      },
    ],
  }),
  page({
    slug: "glossary/identity-evidence",
    kind: "glossary",
    title: "Identity evidence",
    description:
      "Helpers submit identity evidence from inside Help Me so staff can review who they are. That is not the same thing as a criminal background check.",
    h1: "Identity evidence",
    eyebrow: "glossary",
    lead: "Put a name to the offer. Staff look at what you submit. We will not dress that up as a police clearance.",
    keywords: ["identity evidence", "helper ID", "Help Me verification"],
    term: {
      name: "Identity evidence",
      shortDefinition:
        "Identity evidence is what a helper submits from inside the app so a staff member can review who they are. It is identity evidence plus a human decision — not a criminal background check.",
    },
    sections: [
      {
        heading: "Submit it in the app",
        body: [
          "The helper application is the place. You cannot email a photo to this website and skip the product. Categories, availability, motivation, and experience sit alongside the evidence. Staff review the packet. Until that approval is current, you cannot see or accept requests.",
        ],
      },
      {
        heading: "The sentence we will not bury",
        body: [
          "Identity evidence plus a human decision is not a criminal background check. We do not run one. We do not advertise one. If you need a licensed, insured, background-checked professional, use a marketplace or a trade that actually sells that. Help Me sells a neighbor with a current approval — and we say so.",
        ],
      },
      {
        heading: "Why we still ask",
        body: [
          "Because the person on the other end is trusting a stranger with an afternoon. A nameless, unreviewed account should not be able to accept a walk from the library. The evidence is the minimum. Public meeting places and report/block are the rest.",
        ],
      },
    ],
    related: [
      "glossary/staff-review",
      "glossary/approved-helper",
      "helpers",
      "safety",
      "vs/taskrabbit",
      "legal/privacy",
    ],
    faqs: [
      {
        q: "Is identity evidence a background check?",
        a: "No. We do not claim a criminal background check. Staff review identity evidence. Meet in public.",
      },
      {
        q: "Do requesters submit identity evidence?",
        a: "Anyone can join and ask. Helping is the gated action. Requesters still have accounts, and report/block still apply.",
      },
      {
        q: "What if evidence expires?",
        a: "Approval has to be current. Expired or historical labels grant nothing. Resubmission is a real state.",
      },
    ],
  }),
  page({
    slug: "glossary/live-map",
    kind: "glossary",
    title: "Live map",
    description:
      "The Help Me live map is where Fargo–Moorhead help happens. Request help or go online as a helper. Open asks show as approximate areas.",
    h1: "The live map",
    eyebrow: "glossary",
    lead: "Home orients you. Community shows what is happening. The map is where a stuck day and a willing neighbor occupy the same place.",
    keywords: ["Help Me map", "live map Fargo", "request help map"],
    term: {
      name: "Live map",
      shortDefinition:
        "The live map is where help happens in the iPhone app. You can request help or, if you are an approved helper, go online. Open help shows as approximate areas, not pins.",
    },
    sections: [
      {
        heading: "Two actions, one map",
        body: [
          "Request help is how you post an ask. I can help is how an approved helper goes online. The map of Fargo–Moorhead is the shared picture — NDSU, the river, West Acres, Center Avenue — with open help drawn as coarse areas and a count of nearby requests, not a public list of names.",
        ],
      },
      {
        heading: "What you will not see",
        body: [
          "You will not see a pin on a person’s house. You will not see a national heat map. You will not see a feed you can scroll for entertainment. Offers go privately to eligible helpers. The map is operational, not social.",
        ],
      },
      {
        heading: "How it sits next to Home and Community",
        body: [
          "Home carries the daily brief and a card into this map. Community carries official events and local posts. Activity and Account are the rest of the tabs. If you came for a jump start, you want the map. If you came for a concert at the FARGODOME, you want Community, attributed to Ticketmaster.",
        ],
      },
    ],
    related: [
      "how-it-works",
      "glossary/approximate-location",
      "glossary/help-request",
      "glossary/daily-brief",
      "glossary/online-status",
      "cities/fargo",
    ],
    faqs: [
      {
        q: "Is the live map a public feed of requests?",
        a: "Open help areas can show as coarse circles. The ask itself is offered privately to eligible approved helpers. It is not a timeline.",
      },
      {
        q: "Can I use the map without going online as a helper?",
        a: "Yes. Requesting help and browsing the map do not make you a helper. Helping still requires current approval and an explicit online state.",
      },
      {
        q: "Does the map work outside Fargo–Moorhead?",
        a: "The product is built for this metro. We do not advertise a live map we do not operate in Grand Forks or Minneapolis.",
      },
    ],
  }),
  page({
    slug: "glossary/campus-events",
    kind: "glossary",
    title: "Campus events",
    description:
      "Help Me ingests official NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo calendars and always links back to the source.",
    h1: "Campus and city events",
    eyebrow: "glossary",
    lead: "Four campuses, a city calendar, and regional shows — cached, attributed, and never made up.",
    keywords: ["campus events Fargo", "NDSU events", "MSUM calendar", "Concordia events"],
    term: {
      name: "Campus events",
      shortDefinition:
        "Official campus and regional calendars are pulled from NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo. Each listing keeps the source name and a link to the official page.",
    },
    sections: [
      {
        heading: "Where the listings come from",
        body: [
          "NDSU publishes through MyNDSU. MSUM and Concordia publish campus calendars. M State contributes academic dates. West Fargo publishes a public community calendar. Ticketmaster listings cover regional shows within about 35 miles of Fargo — FARGODOME, Scheels Arena, and nearby venues.",
          "Help Me does not scrape random websites. The importer is a fixed list of official sources. If a feed is empty or down, the app says so. It does not invent a concert to fill the rail.",
        ],
      },
      {
        heading: "What you can do in the app",
        body: [
          "Filter by source, search, save, and open the official page. Community opens on Events on purpose. Home shows a short rail of upcoming campus and regional events. Always tap through for times, tickets, and cancellations — the official page is the last word.",
        ],
      },
      {
        heading: "What this is not",
        body: [
          "It is not a Help Me-invented social calendar. It is not a way for a campus to skip its own CMS. Publish on the official calendar we already ingest. That keeps attribution honest.",
        ],
      },
    ],
    related: [
      "events",
      "community",
      "glossary/event-attribution",
      "glossary/daily-brief",
      "campuses",
      "for-campuses",
    ],
    faqs: [
      {
        q: "Are events from Help Me or from the schools?",
        a: "Campus and regional listings come from official sources. Help Me caches and attributes them. Always open the official link for the last word.",
      },
      {
        q: "Can I submit an event from this website?",
        a: "No. Publish it on the official campus or city calendar. Help Me will pick it up from that source.",
      },
      {
        q: "Is UND included?",
        a: "No. Official sources are NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo. Grand Forks is a different city and a different campus.",
      },
    ],
  }),
  page({
    slug: "glossary/community-posts",
    kind: "glossary",
    title: "Community posts",
    description:
      "Help Me Community Updates let signed-in people post, comment, and react locally. Events come first. Report and block still apply.",
    h1: "Community posts",
    eyebrow: "glossary",
    lead: "Community opens on Events, on purpose. Posts exist. They are a local conversation, not a national social network.",
    keywords: ["Help Me community", "Fargo posts", "community updates"],
    term: {
      name: "Community posts",
      shortDefinition:
        "Signed-in people can post, comment, and react in Community Updates. Posts persist. Standard report and block tools apply. This is a local conversation, not a national feed.",
    },
    sections: [
      {
        heading: "Events first, then updates",
        body: [
          "The first feeling in Community should be that Fargo–Moorhead has things going on — not that you walked into a blank social feed. Events are ingested and attributed. Updates are the human layer: posts, comments, reactions from people who actually live here.",
        ],
      },
      {
        heading: "What a post is",
        body: [
          "You need an account. Posts persist. They are not a substitute for a help request — a dead battery still belongs on the live map, offered privately to approved helpers, not argued under forty comments. Use a post for local conversation. Use a request for a hand.",
        ],
      },
      {
        heading: "The same safety tools",
        body: [
          "Report and block apply here too. Help Me is an adult community app. It is not a youth network and not a place designed for children to meet strangers. Harassment, spam, and anything unlawful do not belong. Staff can act on reports.",
        ],
      },
    ],
    related: [
      "community",
      "glossary/campus-events",
      "glossary/report-and-block",
      "glossary/help-request",
      "for-neighbors",
      "vs/facebook-groups",
    ],
    faqs: [
      {
        q: "Is Community a public Facebook-style feed?",
        a: "It is a local, signed-in conversation with events first. It is not a national social network and not the place a live help request is fulfilled.",
      },
      {
        q: "Do I need an account to post?",
        a: "Yes. Posts, comments, reactions, reports, and deletion all belong to a person.",
      },
      {
        q: "Should I post a jump-start ask here?",
        a: "No. Post a help request on the live map so eligible approved helpers can receive a private offer. A public thread is the old problem.",
      },
    ],
  }),
  page({
    slug: "glossary/safety-actions",
    kind: "glossary",
    title: "Safety actions",
    description:
      "Help Me keeps report, block, and related safety tools one tap away in every request. Meet in public. This is not 911.",
    h1: "Safety actions",
    eyebrow: "glossary",
    lead: "The tools have to be closer than the doubt. Every request keeps them in reach.",
    keywords: ["Help Me safety actions", "report block", "in-app safety"],
    term: {
      name: "Safety actions",
      shortDefinition:
        "Safety actions sit one tap away in every request — including report and block. They are how you leave a bad situation in the product. They are not emergency dispatch.",
    },
    sections: [
      {
        heading: "In the request, not buried in settings",
        body: [
          "When a helper accepts, you have a private chat, a meeting choice, and safety actions in the same place. Report or block anyone, any time. You should not have to hunt a menu while a parking lot feels wrong.",
        ],
      },
      {
        heading: "What they do",
        body: [
          "Block keeps that person away from you in matching. Report flags the behavior for staff, who can act. Together with approximate location, public meeting places, and current helper approval, they are the product’s safety posture — practical, not theatrical.",
        ],
      },
      {
        heading: "What they are not",
        body: [
          "They are not 911. They are not NDSU Police. They are not a silent alarm to Fargo dispatch. If you are in danger, threatened, injured, or watching a crime, call 911 first — then use the app later if you still want to.",
        ],
      },
    ],
    related: [
      "safety",
      "glossary/report-and-block",
      "glossary/meet-in-public",
      "glossary/not-an-emergency",
      "not-911",
      "guides/how-to-stay-safe",
    ],
    faqs: [
      {
        q: "Where do I find safety actions?",
        a: "In the request. They are meant to be one tap away, not hidden after the conversation is already going badly.",
      },
      {
        q: "Will tapping report send the police?",
        a: "No. Report notifies Help Me staff. Call 911 or campus police directly for emergencies.",
      },
      {
        q: "Can I use them before we meet?",
        a: "Yes. Report or block anyone, any time — including in chat, before a public meeting happens.",
      },
    ],
  }),
  page({
    slug: "glossary/report-and-block",
    kind: "glossary",
    title: "Report and block",
    description:
      "On Help Me you can report or block anyone, any time. Block stops matching. Report goes to staff. Neither one calls 911 for you.",
    h1: "Report and block",
    eyebrow: "glossary",
    lead: "Two verbs. Use them early. Politeness is not a reason to keep a stranger in your matching pool.",
    keywords: ["report helper", "block user Help Me", "Help Me report"],
    term: {
      name: "Report and block",
      shortDefinition:
        "You can report or block anyone, any time. Block keeps that person out of your matching. Report lets staff act. These tools also apply to community posts.",
    },
    sections: [
      {
        heading: "Block is for you",
        body: [
          "Matching already skips people blocked by either person. If a chat, a meeting, or a post feels wrong, block. You do not owe a review, a debate, or a second chance in the app. Leave the physical place too if you need to.",
        ],
      },
      {
        heading: "Report is for staff",
        body: [
          "A report is a flag a person can act on — the same kind of human look that helper approval already uses. It is how patterns become visible. It is not a public call-out thread, and it is not a police report. File those with the actual police when that is the right tool.",
        ],
      },
      {
        heading: "Also in Community",
        body: [
          "Posts, comments, and reactions are a local conversation with the same tools. Harassment, spam, and anything unlawful can be reported. Help Me is still not a courtroom and not 911.",
        ],
      },
    ],
    related: [
      "glossary/safety-actions",
      "safety",
      "glossary/matching",
      "glossary/community-posts",
      "not-911",
      "support/contact",
    ],
    faqs: [
      {
        q: "Does blocking delete the request?",
        a: "Block keeps that person away from you. If you are in an active request and something is wrong, leave, report, and use 911 if you need official response.",
      },
      {
        q: "Will the other person know I reported them?",
        a: "Treat report as a staff tool, not a message to the other person. Do not rely on the app to warn someone who is already making you unsafe — leave and call 911 if needed.",
      },
      {
        q: "Can I report from this website?",
        a: "Use the in-app tools so the report attaches to the account and the request. You can also email support@helpme.fyi. A person reads it.",
      },
    ],
  }),
  page({
    slug: "glossary/account-deletion",
    kind: "glossary",
    title: "Account deletion",
    description:
      "You can delete your Help Me account yourself from Account in the iPhone app by typing DELETE. It is your account. You can end it.",
    h1: "Account deletion",
    eyebrow: "glossary",
    lead: "Leaving should not require a ticket and a week of pleading. Open Account. Type DELETE. It is yours to end.",
    keywords: ["delete Help Me account", "Help Me data deletion", "self-serve delete"],
    term: {
      name: "Account deletion",
      shortDefinition:
        "You can delete your account yourself from Account in the app by typing DELETE. Requests, chat, reports, and saved events belong to a person — and that person can end the account.",
    },
    sections: [
      {
        heading: "Self-serve, on purpose",
        body: [
          "Open Account in the iPhone app and choose delete. You confirm by typing DELETE. That is the product path. We do not hide it behind a form on this website, and we do not require you to explain yourself to keep the door open.",
        ],
      },
      {
        heading: "Why an account exists at all",
        body: [
          "Requests, private chat, reports, saved events, and deletion all belong to a person. You can create an account with email or Sign in with Apple. An account is the opposite of an anonymous wall; deletion is the opposite of a trap.",
        ],
      },
      {
        heading: "If you are stuck",
        body: [
          "If the app will not complete deletion, email support@helpme.fyi. A person answers. Privacy questions belong there too. A fuller policy will replace the current TestFlight summary before a public App Store release.",
        ],
      },
    ],
    related: ["legal/privacy", "download", "glossary/what-is-help-me", "support/help", "support/contact", "about"],
    faqs: [
      {
        q: "Can I delete from this website?",
        a: "Delete from Account in the iPhone app by typing DELETE. If something blocks that path, email support@helpme.fyi.",
      },
      {
        q: "Does deletion require a reason?",
        a: "No. It is your account. Type DELETE to confirm.",
      },
      {
        q: "What about helper approval if I return?",
        a: "Approval has to be current. Do not assume an old decision comes back with you. Apply again if you rejoin and want to help.",
      },
    ],
  }),
  page({
    slug: "glossary/testflight",
    kind: "glossary",
    title: "TestFlight",
    description:
      "Help Me ships to iPhone through Apple TestFlight during beta. iOS 15 or later. The Get the app button on this site is the join link.",
    h1: "TestFlight",
    eyebrow: "glossary",
    lead: "The app is real. The store listing is not public yet. TestFlight is the honest channel name, so we use it.",
    keywords: ["Help Me TestFlight", "download Help Me", "iPhone beta Fargo"],
    term: {
      name: "TestFlight",
      shortDefinition:
        "Help Me is on Apple TestFlight for iPhone (iOS 15 or later) at no charge. Every download button on this site points at that join link until a public App Store listing replaces it.",
    },
    sections: [
      {
        heading: "What you install",
        body: [
          "Apple TestFlight is how iPhone betas are distributed. Help Me uses it. You will need an Apple ID and iOS 15 or later. The join link is the same one behind Get the app, the navbar, and the QR codes on this site. When the public listing exists, that URL is a one-line change — not a different product.",
        ],
      },
      {
        heading: "What beta still means",
        body: [
          "The product rules already hold: approved helpers, coarse location, private chat, official event attribution, self-serve delete, not 911. Terms and privacy on this site are written for the TestFlight beta and say so. They will be replaced in full before a public App Store release.",
        ],
      },
      {
        heading: "What TestFlight is not",
        body: [
          "It is not Android. It is not a web app that posts requests. It is not a national launch. Fargo–Moorhead is the metro. iPhone is the device. TestFlight is the door.",
        ],
      },
    ],
    related: ["download", "about", "glossary/what-is-help-me", "legal/terms", "legal/privacy", "for-students"],
    faqs: [
      {
        q: "Is Help Me on the App Store?",
        a: "Today it is on TestFlight for iPhone. This site’s download buttons go there. A public listing is a later change, not a second app.",
      },
      {
        q: "Does it cost money?",
        a: "No. TestFlight join is free. Help Me is not a paid gig marketplace.",
      },
      {
        q: "Can I use it on Android?",
        a: "The shipping client is iPhone, iOS 15 or later, through TestFlight. We do not advertise an Android app we do not ship.",
      },
    ],
  }),
  page({
    slug: "glossary/not-an-emergency",
    kind: "glossary",
    title: "Not an emergency",
    description:
      "Help Me is not 911, not campus police, and not a dispatch service. If you are in danger, call emergency services first. Then the neighbor app later.",
    h1: "Not an emergency",
    eyebrow: "glossary",
    lead: "If you are in danger, threatened, injured, or watching a crime, call 911. Help Me will still be here for the jump start and the printer.",
    keywords: ["Help Me not 911", "not an emergency", "Fargo emergency vs help"],
    term: {
      name: "Not an emergency",
      shortDefinition:
        "Help Me is for everyday, non-emergency help. It does not replace 911, campus police, or any official emergency service. If you are in danger, call emergency services first.",
    },
    sections: [
      {
        heading: "Call 911 when",
        body: [
          "Immediate danger, medical emergency, fire, crime in progress, or anyone who cannot wait for a neighbor. Fargo, West Fargo, and Cass County, ND: 911. Moorhead, Dilworth, and Clay County, MN: 911. On campus, use that school’s police or public safety number, or 911.",
        ],
      },
      {
        heading: "Use Help Me when",
        body: [
          "The day is stuck but nobody is in danger. A dead battery in a West Acres lot. A walk from the library after dark when you want a neighbor, not an officer. A study partner in the Memorial Union. Directions to a lecture hall. A lost set of keys. Heavy boxes on move-in weekend.",
        ],
      },
      {
        heading: "Official numbers live on Resources",
        body: [
          "We keep separate pages for Fargo Police, Moorhead Police, West Fargo Police, NDSU, MSUM, and Concordia public safety, 211, and county services. Bookmark those for emergencies and official help. The app is the page for a neighbor. Do not wait on a two-hour offer window when you need official response.",
        ],
      },
    ],
    related: [
      "not-911",
      "safety",
      "resources/fargo-emergency",
      "vs/campus-safety",
      "vs/aaa",
      "glossary/safety-actions",
    ],
    faqs: [
      {
        q: "Will Help Me dispatch police?",
        a: "No. Help Me does not dispatch emergency services. Call 911 or campus police directly.",
      },
      {
        q: "Can I use both?",
        a: "If it is an emergency, call 911 first. Do not wait on an app offer when you need official response. The neighbor app can wait.",
      },
      {
        q: "Is a dead battery an emergency?",
        a: "Usually no — that is a classic Help Me ask, or AAA if you have a membership. If the situation is unsafe, you are injured, or weather makes it dangerous to stay, call 911.",
      },
    ],
  }),
  page({
    slug: "glossary/matching",
    kind: "glossary",
    title: "Matching",
    description:
      "Help Me matching privately offers a request to eligible approved helpers who are online, suitable, recently active, and not blocked — not a public feed.",
    h1: "Matching",
    eyebrow: "glossary",
    lead: "The ask goes to people who are allowed to help and actually around. Not to a group chat of two hundred. Not to the whole city feed.",
    keywords: ["Help Me matching", "how helpers are chosen", "nearby helpers Fargo"],
    term: {
      name: "Matching",
      shortDefinition:
        "Help Me privately considers approved helpers who are online, suitable for the category, recently active, and not blocked. Up to ten eligible helpers may receive a short-lived offer. There is no public feed of your request.",
    },
    sections: [
      {
        heading: "Who can even be considered",
        body: [
          "Current staff approval. Online. Suitable for the category you picked. Recently active. Not blocked by either person. That list is the gate. A neighbor who is offline, expired, or wrong for jump starts does not get a peek at your dead battery.",
        ],
      },
      {
        heading: "How far, and how many",
        body: [
          "Up to ten eligible helpers may receive a short-lived offer. The first to accept gets the request. When both people have shared matching location, offers stay within about 10 km of the requester’s rounded area. The system uses that rounded area — not a pin on you. No-location requests can still be considered by suitable approved helpers.",
        ],
      },
      {
        heading: "What matching does not promise",
        body: [
          "It does not promise a helper is standing on Main Street at midnight. It does not promise a two-minute ETA. It does not pay anyone. If nobody accepts within two hours, the request closes. Distance is real. Winter is real. A public meeting place is still the default.",
        ],
      },
    ],
    related: [
      "how-it-works",
      "glossary/help-request",
      "glossary/online-status",
      "glossary/approved-helper",
      "glossary/one-live-request",
      "glossary/coarse-area",
    ],
    faqs: [
      {
        q: "Is matching a public bid board?",
        a: "No. Eligible helpers receive a private offer. There is no public ranking of who needed help.",
      },
      {
        q: "Can I choose a specific helper?",
        a: "The first eligible helper to accept gets the request. You then chat privately with that person. Matching is not a catalog you browse.",
      },
      {
        q: "Does leaving the app stop matching?",
        a: "For helpers: going offline, leaving the app, accepting a request, or going quiet removes you from active matching. You are not on duty by default.",
      },
    ],
  }),
  page({
    slug: "glossary/completion-and-reviews",
    kind: "glossary",
    title: "Completion and reviews",
    description:
      "On Help Me both people confirm completion. Exact location sharing ends. Each person can leave a review. That is how a request closes well.",
    h1: "Completion and reviews",
    eyebrow: "glossary",
    lead: "Mark it done. Stop sharing the extra location. Say how it went. Then carry on — that is the whole ending.",
    keywords: ["Help Me reviews", "complete help request", "helper review"],
    term: {
      name: "Completion and reviews",
      shortDefinition:
        "Both people confirm completion. Exact location sharing ends automatically. Each person can leave a review. If nobody accepts within two hours, the request closes without a meeting.",
    },
    sections: [
      {
        heading: "Done means done",
        body: [
          "The jump start worked, or it did not. The walk reached the car. The box made the stair. Both people confirm completion in the request. That is the product’s idea of an ending — not an open thread that follows you home.",
        ],
      },
      {
        heading: "Location sharing stops",
        body: [
          "If you consented to precise location after accept, completion ends that sharing automatically. You should not have to remember to shut it off. Approximate area was the default; precision was a temporary, two-person choice.",
        ],
      },
      {
        heading: "A review is optional and two-sided",
        body: [
          "Each person can leave a review. It is how the other person hears how it went. It is not a public performance, not a gig-worker leaderboard, and not a substitute for report and block if something was actually wrong. If the meeting never happened, a two-hour timeout already closed the ask.",
        ],
      },
    ],
    related: [
      "how-it-works",
      "glossary/help-request",
      "glossary/approximate-location",
      "glossary/report-and-block",
      "helpers",
      "safety",
    ],
    faqs: [
      {
        q: "What if we never met?",
        a: "If nobody accepts within two hours, the request closes and you can try again. Completion and reviews belong to requests that actually had an accepted helper.",
      },
      {
        q: "Does a bad review replace a report?",
        a: "No. If something was unsafe or abusive, report and block. Leave. Call 911 if you need official response. A review is not a police report.",
      },
      {
        q: "Do reviews make helpers employees?",
        a: "No. Helpers remain approved community members, not contractors for hire. Reviews do not turn Help Me into a paid marketplace.",
      },
    ],
  }),
  page({
    slug: "glossary/online-status",
    kind: "glossary",
    title: "Online status",
    description:
      "Approved Help Me helpers choose when to go online. Offline, leaving the app, accepting, or going quiet removes you from active matching.",
    h1: "Online status",
    eyebrow: "glossary",
    lead: "You are a neighbor, not an on-duty employee. Online is a choice you make when you can actually show up.",
    keywords: ["helper online", "Help Me availability", "go online helper"],
    term: {
      name: "Online status",
      shortDefinition:
        "Once approved, a helper chooses when to go online. Going offline, leaving the app, accepting a request, or going quiet removes you from active matching.",
    },
    sections: [
      {
        heading: "Online is opt-in",
        body: [
          "Current approval is required before online even exists as a useful state. Then you tap I can help on the live map when you are actually free — between classes on NDSU’s campus, after work in West Fargo, a Saturday near downtown Moorhead. Matching considers helpers who are online, not everyone who was approved last fall.",
        ],
      },
      {
        heading: "How you leave the pool",
        body: [
          "Go offline. Leave the app. Accept a request (you are now in that request, not the general pool). Go quiet. Any of those removes you from active matching. The product assumes a helper is a person with a life, not a shift board.",
        ],
      },
      {
        heading: "Location when you are online",
        body: [
          "You can use your location for genuinely nearby offers. When both sides have matching location, offers stay within about 10 km of the requester’s rounded area. You are not required to become a pin on someone else’s map. Requesters still see coarse areas until they consent after accept.",
        ],
      },
    ],
    related: [
      "helpers",
      "glossary/matching",
      "glossary/approved-helper",
      "glossary/live-map",
      "for-helpers",
      "how-it-works",
    ],
    faqs: [
      {
        q: "Am I online just because I opened the app?",
        a: "Helping requires current approval and going online. Browsing Home, Community, or the map as a requester is not the same state.",
      },
      {
        q: "Can I help only on my campus?",
        a: "You choose categories and when you are online. Nearby matching uses recent activity and, when you allow it, location. It is not a campus-only shift board.",
      },
      {
        q: "What if I forget to go offline?",
        a: "Leaving the app or going quiet removes you from active matching. Still, go offline when you are done. You are not on duty by default.",
      },
    ],
  }),
  page({
    slug: "glossary/home-school",
    kind: "glossary",
    title: "Home and school",
    description:
      "Help Me is adult community help around Fargo–Moorhead homes and campuses. High school pages are geographic context, not a K–12 meetup product.",
    h1: "Home and school",
    eyebrow: "glossary",
    lead: "This metro lives in houses and apartments, and it lives on campuses. The app is for adults in both places. It is not a youth network.",
    keywords: ["Help Me schools", "Help Me home", "Fargo high school community help"],
    term: {
      name: "Home and school",
      shortDefinition:
        "Home is the app tab for the daily brief and a path into the live map. School, on this site, means campuses and the adult community around Fargo–Moorhead high schools. Help Me is not a K–12 student meetup product.",
    },
    sections: [
      {
        heading: "Home in the app",
        body: [
          "The Home tab is the daily brief: a welcome, a live-map card, at-a-glance counts, and a short rail of upcoming official events. It is where a Fargo–Moorhead day starts — not a family-control panel, not a homeschool curriculum, not a parent dashboard. From Home you step into the map when someone needs a hand.",
        ],
      },
      {
        heading: "School on this site, campus in the product",
        body: [
          "College campuses — NDSU, MSUM, Concordia, M State — are where a lot of asks actually happen: directions, study, tech, a walk after a night class. Official campus calendars are ingested with attribution. Official campus safety still wins for escorts and emergencies.",
          "High school pages on the website describe the community around each school — activities, nearby neighborhoods, winter car help for adults, official resources. They are geography. They are not a place for minors to meet strangers.",
        ],
      },
      {
        heading: "The boundary we will keep repeating",
        body: [
          "Help Me is a community app for adults in Fargo–Moorhead. Helpers submit identity evidence. It is not a school-issued safety program, not a homeschool co-op, and not a K–12 chat. High school students should use official school and family channels. Parents who want the honest version should read it that way.",
        ],
      },
    ],
    related: [
      "glossary/daily-brief",
      "for-parents",
      "for-students",
      "schools",
      "campuses",
      "glossary/campus-events",
    ],
    faqs: [
      {
        q: "Is Help Me for high school students?",
        a: "No. It is an adult community app. High school pages describe the area around a school. Students there should use official school and family channels.",
      },
      {
        q: "Is Help Me a homeschool program?",
        a: "No. Homeschool families who are adults can use the same neighbor app as anyone else. We do not run a homeschool network or a youth program.",
      },
      {
        q: "Does Home show my kid’s school?",
        a: "Home shows a daily brief and upcoming official campus and regional events from the sources we ingest. It is not a K–12 parent portal.",
      },
    ],
  }),
  page({
    slug: "glossary/event-attribution",
    kind: "glossary",
    title: "Event attribution",
    description:
      "Every Help Me event keeps the source name and official URL. We cache NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster — we do not invent listings.",
    h1: "Event attribution",
    eyebrow: "glossary",
    lead: "If we show a concert or a lecture, we say who published it, and we send you there. Credit is not optional.",
    keywords: ["event attribution", "official campus calendar", "Help Me events source"],
    term: {
      name: "Event attribution",
      shortDefinition:
        "Help Me shows the source that published an event and links to the official page. We cache a fixed list of official feeds. We do not invent events, and we do not strip the credit.",
    },
    sections: [
      {
        heading: "Source name, official URL",
        body: [
          "A listing from Concordia still says Concordia. A West Fargo community event still points at westfargo.org. Ticketmaster Fargo is labeled as Ticketmaster. The importer is a fixed list — NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo — not a scrape of whatever ranked in a search.",
        ],
      },
      {
        heading: "When a feed is down",
        body: [
          "If a source is pending or empty, the product says so. Filling the rail with a made-up Bison game would be easier. It would also be a lie. Attribution includes the right to show nothing.",
        ],
      },
      {
        heading: "Why this is a glossary word",
        body: [
          "Because “events in the app” can sound like Help Me is the organizer. We are not. We are a cache with manners. Tickets, cancellations, and the last word live on the official page. Always open it.",
        ],
      },
    ],
    related: [
      "events",
      "glossary/campus-events",
      "community",
      "for-campuses",
      "campuses/ndsu",
      "guides/campus-events-fargo-moorhead",
    ],
    faqs: [
      {
        q: "Can a campus post events directly into Help Me?",
        a: "Publish them on the official campus calendar we already ingest. That keeps attribution honest.",
      },
      {
        q: "Do you edit event descriptions?",
        a: "We normalize listings so they can sit in one calendar. The source and official URL stay visible. Trust the official page for details.",
      },
      {
        q: "Why is Ticketmaster in a campus list?",
        a: "It is the regional show feed within about 35 miles of Fargo, credentialed on the server, and labeled as Ticketmaster. It is not a campus, and we do not pretend it is.",
      },
    ],
  }),
  page({
    slug: "glossary/coarse-area",
    kind: "glossary",
    title: "Coarse area",
    description:
      "A Help Me coarse area is the ~500 m rounded region used for live help and matching. It is the map object. It is not your exact coordinates.",
    h1: "Coarse area",
    eyebrow: "glossary",
    lead: "The circle is the point. Not a pin. Not a guess we forgot to tighten. A rounded area on purpose.",
    keywords: ["coarse area", "500m location", "Help Me map circle"],
    term: {
      name: "Coarse area",
      shortDefinition:
        "A coarse area is the about-500-meter rounded region the map uses for live help. Matching uses that rounded area, not a pin on the requester. Exact coordinates are a later, optional consent.",
    },
    sections: [
      {
        heading: "The object on the map",
        body: [
          "Open help areas are drawn as coarse circles. At a glance, Home can count them. Helpers judge distance from that blur plus a category. That is enough to decide “I am at West Acres and can jump a car” without handing someone a street number.",
        ],
      },
      {
        heading: "How matching uses it",
        body: [
          "When both people have shared matching location, offers stay within about 10 km of the requester’s rounded area. The system uses that rounded area — not a pin on you. No-location requests can still be considered; they simply do not contribute a circle.",
        ],
      },
      {
        heading: "Coarse area versus approximate location",
        body: [
          "Approximate location is the privacy rule: other people do not get a pin by default. Coarse area is the thing the rule produces — the ~500 m region itself. Precision finding on supported iPhones is a different, dual-opt-in tool after accept. Do not mix the three up.",
        ],
      },
    ],
    related: [
      "glossary/approximate-location",
      "glossary/matching",
      "glossary/live-map",
      "glossary/nearby-interaction",
      "safety",
      "how-it-works",
    ],
    faqs: [
      {
        q: "Is the coarse area my GPS point with a circle drawn around it for show?",
        a: "Live help is shown as the coarse area, not a pin. Matching uses the rounded area. Treat the blur as the data, not a decoration on top of a secret pin.",
      },
      {
        q: "Can I tighten the circle myself?",
        a: "Exact location is opt-in after a helper accepts, and only with that person. The open map stays coarse.",
      },
      {
        q: "What does ~500 m mean in Fargo?",
        a: "Neighborhood-scale. Enough to say “near NDSU” or “near West Acres,” not enough to mark a stall in a ramp.",
      },
    ],
  }),
  page({
    slug: "glossary/nearby-interaction",
    kind: "glossary",
    title: "Nearby Interaction",
    description:
      "Help Me precision finding uses Apple Nearby Interaction on supported iPhones, and only when both people opt in after a helper accepts.",
    h1: "Nearby Interaction",
    eyebrow: "glossary",
    lead: "A closer find, on hardware that can do it, when both people say yes. Never the default. Never one-sided.",
    keywords: ["Nearby Interaction", "UWB Help Me", "precision finding iPhone"],
    term: {
      name: "Nearby Interaction",
      shortDefinition:
        "On supported iPhones, precision finding — Apple’s Nearby Interaction, including ultra-wideband where the hardware allows — is available only when both people opt in.",
    },
    sections: [
      {
        heading: "After accept, and only together",
        body: [
          "The default remains a coarse area. Private chat still opens on accept. Precision finding is an extra, later choice for two people who already matched and both want a tighter find — a crowded West Acres lot, a union full of jackets that look alike. If either person does not opt in, it does not run.",
        ],
      },
      {
        heading: "Supported iPhones, not a promise to every device",
        body: [
          "Nearby Interaction and ultra-wideband depend on what Apple supports on that phone. Help Me does not invent a radar for hardware that cannot do it. If the phones cannot participate, meet the way the rest of the product already works: a public place label and a chat.",
        ],
      },
      {
        heading: "What this is not",
        body: [
          "It is not live tracking on the open map. It is not a way to skip consent. It is not available as a spectator feature for other helpers. Completion still ends exact location sharing. Public meeting places remain the default advice even when the radios are fancy.",
        ],
      },
    ],
    related: [
      "glossary/approximate-location",
      "glossary/coarse-area",
      "glossary/meet-in-public",
      "glossary/private-chat",
      "safety",
      "how-it-works",
    ],
    faqs: [
      {
        q: "Is precision finding on by default?",
        a: "No. Both people must opt in. The open map stays a coarse area.",
      },
      {
        q: "Does this work on every iPhone?",
        a: "Only on supported iPhones. If the hardware cannot participate, use a public meeting place and chat. We do not fake UWB.",
      },
      {
        q: "Can I use it to find someone who has not accepted?",
        a: "No. Precision finding is for two people already in a request who both opt in. Offers stay private and coarse until then.",
      },
    ],
  }),
  page({
    slug: "glossary/daily-brief",
    kind: "glossary",
    title: "Daily brief",
    description:
      "Help Me Home opens on a daily brief for Fargo–Moorhead: orientation, a live-map card, at-a-glance counts, and upcoming official events.",
    h1: "The daily brief",
    eyebrow: "glossary",
    lead: "The day’s orientation, not a newspaper, not a streak. Enough to see the metro, then one tap into the map.",
    keywords: ["Help Me home", "daily brief", "at a glance Help Me"],
    term: {
      name: "Daily brief",
      shortDefinition:
        "Home shows a daily brief for Fargo–Moorhead: a welcome, a live-map card, at-a-glance counts such as active requests and open help areas, and a short rail of upcoming official events.",
    },
    sections: [
      {
        heading: "What you see when you open Home",
        body: [
          "A welcome. A line that the community is within reach. A live-map card that reminds you help stays approximate until you share more with an accepted helper, and a button to open that map. Then at-a-glance tiles — active requests, open help areas, and the other local counts — plus upcoming campus and regional events with attribution still attached.",
        ],
      },
      {
        heading: "Why it is not a feed",
        body: [
          "The brief should make Fargo–Moorhead feel present without turning your morning into a performance. It is not a public list of who needed help. It is not pushy. Community remains the full calendar. The map remains where an ask happens.",
        ],
      },
      {
        heading: "What it will not become",
        body: [
          "We do not invent weather drama or fake “helpers near you” counts to juice the tiles. If there are zero open help areas, Home can say zero. Honesty at a glance is still honesty.",
        ],
      },
    ],
    related: [
      "about",
      "glossary/live-map",
      "glossary/campus-events",
      "glossary/home-school",
      "events",
      "community",
    ],
    faqs: [
      {
        q: "Is the daily brief personalized news?",
        a: "It is Home’s local orientation — map, counts, official events — not a media product and not a public request feed.",
      },
      {
        q: "Do I need to share location to see Home?",
        a: "Home orients you to Fargo–Moorhead. Exact location is still opt-in after a helper accepts. The brief is not a pin on you.",
      },
      {
        q: "Where do the event tiles come from?",
        a: "Official sources we ingest, attributed and linked. Home shows a short rail. Community is the full calendar.",
      },
    ],
  }),
  page({
    slug: "glossary/one-live-request",
    kind: "glossary",
    title: "One live request",
    description:
      "Help Me allows only one live help request at a time. If nobody accepts within two hours, it closes and you can try again.",
    h1: "One live request",
    eyebrow: "glossary",
    lead: "One stuck thing at a time. The product is a hand, not a stack of open tickets you broadcast across the metro.",
    keywords: ["one live request", "Help Me request limit", "two hour request"],
    term: {
      name: "One live request",
      shortDefinition:
        "Only one live request at a time. A request stays open for up to two hours if nobody accepts. Then it closes and you can try again.",
    },
    sections: [
      {
        heading: "Why one",
        body: [
          "Matching offers a request to a small set of eligible helpers. A pile of simultaneous asks from the same person would turn the map into noise and the helper into a dispatcher. Finish or time out, then ask again. That is the discipline.",
        ],
      },
      {
        heading: "The two-hour window",
        body: [
          "If nobody accepts within two hours, the request closes. There is no guaranteed response time. Distance, weather, and who is actually online all matter. You can post again. You cannot keep an unanswered ask hanging as a public signal.",
        ],
      },
      {
        heading: "After someone accepts",
        body: [
          "You are in that request — private chat, public meeting place, optional exact location, then both people confirm completion. Helpers who accept also leave the general online pool for that moment. One live request keeps both sides honest about attention.",
        ],
      },
    ],
    related: [
      "glossary/help-request",
      "glossary/matching",
      "how-it-works",
      "glossary/completion-and-reviews",
      "glossary/online-status",
      "help",
    ],
    faqs: [
      {
        q: "Can I post a jump start and a study ask at once?",
        a: "No. Only one live request at a time. Close or wait out the window, then ask for the next thing.",
      },
      {
        q: "What if I posted the wrong category?",
        a: "Wait for it to close or complete it if someone already accepted and you need to sort the mix-up in chat. Do not assume a second live request will stack on top.",
      },
      {
        q: "Does the two-hour window mean a helper will come in two hours?",
        a: "No. It is a close time if nobody accepts. It is not an ETA and not a promise.",
      },
    ],
  }),

  page({
    slug: "glossary/plow-berm",
    kind: "glossary",
    title: "Plow berm",
    description:
      "A plow berm is the ridge of packed snow a snowplow leaves across a driveway or behind a parked car. It is the most common winter help request in Fargo–Moorhead.",
    h1: "Plow berm",
    eyebrow: "glossary",
    lead: "The wall of packed snow at the end of your driveway, deposited by a truck that was doing its job correctly.",
    answer:
      "A plow berm is the ridge of dense, packed snow a plow pushes to the side as it clears a street, landing across driveway entrances and behind parked cars. It is heavier than fallen snow, it appears after you have already shoveled, and clearing it is the single most common winter favor asked between neighbors here.",
    keywords: ["plow berm", "snow ridge driveway", "Fargo snow removal"],
    term: {
      name: "Plow berm",
      shortDefinition:
        "The ridge of packed snow a plow leaves across a driveway or behind a parked car. Denser than fresh snow, and it usually arrives after you have finished shoveling.",
    },
    sections: [
      {
        heading: "Why it cannot be avoided",
        body: [
          "A plow moves snow sideways. Anywhere the curb is interrupted — a driveway, a parked car — receives what the blade is carrying. Cities cannot plow a street without producing berms, and complaining about the berm is a regional pastime rather than a solvable problem.",
        ],
      },
      {
        heading: "Why it matters for help requests",
        body: [
          "A berm is dense, wet, and heavy, and it is what turns shoveling into genuine cardiac exertion. Ten minutes and a second shovel is a real gift to a neighbor who should not be lifting it, which is exactly the size of favor Help Me exists for.",
        ],
      },
    ],
    related: ["help/snow-help", "guides/digging-out-after-a-snowstorm", "seasons/first-snow", "for-seniors", "seasons/winter-in-fargo-moorhead", "help/car-stuck-in-snow"],
    faqs: [
      {
        q: "Can I ask the city not to berm my driveway?",
        a: "No. It is a physical consequence of plowing. Cities publish plow schedules so you can time your shoveling instead.",
      },
      {
        q: "Is berm clearing a paid service?",
        a: "Paid snow removal companies exist. Help Me has no payments — a neighbor helping is a favor, not a job.",
      },
    ],
  }),

  page({
    slug: "glossary/block-heater",
    kind: "glossary",
    title: "Block heater",
    description:
      "A block heater is an electric engine heater plugged in overnight so a vehicle will start in deep cold. Common in North Dakota and Minnesota winters.",
    h1: "Block heater",
    eyebrow: "glossary",
    lead: "The cord hanging out of the grille of the truck next to you is not a repair in progress.",
    answer:
      "A block heater is an electric heating element that warms an engine’s coolant or oil while the vehicle is parked, so it will start in deep cold. It plugs into a standard outlet, is often run for a few hours before you need the car, and is common in Fargo–Moorhead where subzero mornings are routine.",
    keywords: ["block heater", "engine heater cord", "cold start North Dakota"],
    term: {
      name: "Block heater",
      shortDefinition:
        "An electric heater that keeps an engine warm while parked so it starts in deep cold. Plugged into an outlet, usually for a few hours before driving.",
    },
    sections: [
      {
        heading: "Why northern cars have cords",
        body: [
          "Cold thickens oil and steals battery power at the same time, which is a bad combination for starting. Warming the engine removes half that problem. Plenty of vehicles here have a factory or added block heater, which is why parking lots at apartments and campuses sometimes have outlets on posts.",
        ],
      },
      {
        heading: "What it does not fix",
        body: [
          "A dying battery. If the battery is finished, a warm engine will not save you, and the fix is a jump and then a replacement. Block heaters help the engine; they do not manufacture electricity.",
        ],
      },
    ],
    related: ["seasons/polar-vortex-cold-snap", "help/jump-start", "for-people-new-to-winter", "guides/what-to-do-if-your-car-wont-start", "seasons/winter-in-fargo-moorhead", "help/winter-car-help"],
    faqs: [
      {
        q: "How long should it be plugged in?",
        a: "A few hours is usually plenty; all night is common but not necessarily more effective. A timer saves electricity.",
      },
      {
        q: "Do I need one?",
        a: "Many people here get through winters without one, especially with a healthy battery and a garage. In deep cold it removes a variable.",
      },
    ],
  }),

  page({
    slug: "glossary/wind-chill",
    kind: "glossary",
    title: "Wind chill",
    description:
      "Wind chill is how cold exposed skin feels when wind strips away body heat. On the flat prairie around Fargo–Moorhead it is often the number that matters.",
    h1: "Wind chill",
    eyebrow: "glossary",
    lead: "The thermometer says one thing. The walk across the parking lot says another.",
    answer:
      "Wind chill expresses how quickly moving air pulls heat from exposed skin, producing a felt temperature well below the air temperature. On the open, flat terrain around Fargo–Moorhead, wind is nearly always present, so wind chill — not the thermometer — is what determines frostbite risk and how long you can safely be outside.",
    keywords: ["wind chill", "frostbite risk", "Fargo cold weather"],
    term: {
      name: "Wind chill",
      shortDefinition:
        "How cold exposed skin feels once wind is stripping heat away. It drives frostbite risk and is often far below the actual air temperature here.",
    },
    sections: [
      {
        heading: "Why it dominates here",
        body: [
          "There is very little between this metro and the horizon in most directions. Wind arrives with nothing to slow it. A modest subzero temperature with a strong wind produces frostbite risk measured in minutes rather than hours, which is why local forecasts lead with the wind chill number.",
        ],
      },
      {
        heading: "What to do with the number",
        body: [
          "Treat it as an instruction rather than trivia. Cover skin, shorten outdoor time, and do not plan to stand still — waiting for a bus at a bad wind chill is a different activity than walking. When it is severe, the correct answer to a stalled car is often to get somewhere warm and deal with the car later.",
        ],
      },
    ],
    related: ["seasons/polar-vortex-cold-snap", "seasons/winter-in-fargo-moorhead", "for-people-new-to-winter", "help/walk-to-car", "resources/winter-shelters-fargo", "for-night-shift-workers"],
    faqs: [
      {
        q: "Does wind chill affect my car?",
        a: "No. Vehicles cool to the actual air temperature; wind chill describes heat loss from skin. It still affects how long you can stand next to the car.",
      },
      {
        q: "How fast can frostbite happen?",
        a: "At severe wind chills, exposed skin can be at risk in minutes. Follow the local advisory language rather than guessing.",
      },
    ],
  }),

  page({
    slug: "glossary/snow-emergency",
    kind: "glossary",
    title: "Snow emergency",
    description:
      "A snow emergency is a declared period when a city enforces special parking rules so plows can clear streets. Fargo, West Fargo, and Moorhead each declare their own.",
    h1: "Snow emergency",
    eyebrow: "glossary",
    lead: "The one weather term in this metro that can cost you a tow bill for ignoring it.",
    answer:
      "A snow emergency is a declaration by a city that triggers special parking restrictions so plows can clear streets fully. Fargo, West Fargo, and Moorhead each declare and enforce their own, with their own rules and alert systems. Vehicles parked in violation can be ticketed or towed, so follow the rules for the city you are actually in.",
    keywords: ["snow emergency Fargo", "Moorhead snow parking", "residential plowing rules"],
    term: {
      name: "Snow emergency",
      shortDefinition:
        "A declared period when a city enforces special parking rules for plowing. Each city in this metro declares its own, and violations can be towed.",
    },
    sections: [
      {
        heading: "Three cities, three declarations",
        body: [
          "Fargo, West Fargo, and Moorhead are separate municipalities with separate plow operations and separate alert systems. A declaration in one is not a declaration in another. If you live near a boundary, know which city your street belongs to before winter, not during it.",
        ],
      },
      {
        heading: "How to not get towed",
        body: [
          "Sign up for your city’s alerts. Read the residential plowing rules once in the fall. When a declaration lands, move the car where the rule says, not where it is convenient. No approved helper can move a car for you and none of them knows your city’s current declaration better than the city does.",
        ],
      },
    ],
    related: ["seasons/first-snow", "cities/fargo", "cities/west-fargo", "cities/moorhead", "help/snow-help", "seasons/blizzard-day"],
    faqs: [
      {
        q: "How do I find out one was declared?",
        a: "Through your city’s official alerts and announcements. That is the authority, not a neighbor or an app.",
      },
      {
        q: "Do the rules differ between cities?",
        a: "Yes. Each city sets its own restrictions and enforcement. Use the rules for where your car is parked.",
      },
    ],
  }),

  page({
    slug: "glossary/fargo-moorhead-metro",
    kind: "glossary",
    title: "Fargo–Moorhead metro",
    description:
      "The Fargo–Moorhead metropolitan area spans Cass County, North Dakota and Clay County, Minnesota — Fargo, West Fargo, Moorhead, Dilworth, and surrounding towns.",
    h1: "Fargo–Moorhead metro",
    eyebrow: "glossary",
    lead: "One metro, two states, two counties, and a river down the middle that decides which rules apply to you.",
    answer:
      "The Fargo–Moorhead metropolitan area covers Cass County, North Dakota and Clay County, Minnesota. Its core cities are Fargo and West Fargo on the North Dakota side and Moorhead and Dilworth on the Minnesota side, with commuter towns like Horace, Harwood, Casselton, Glyndon, and Hawley inside its daily orbit.",
    keywords: ["Fargo Moorhead metro", "FM area", "Cass County Clay County"],
    term: {
      name: "Fargo–Moorhead metro",
      shortDefinition:
        "The two-state metropolitan area centered on Fargo and West Fargo, ND and Moorhead and Dilworth, MN, spanning Cass and Clay counties.",
    },
    sections: [
      {
        heading: "Why the state line matters daily",
        body: [
          "911 works everywhere. Almost nothing else copies across. Police, city services, county human services, tenant law, and many assistance programs follow the state and county you are standing in. A phone number that solves a problem in Fargo may be irrelevant in Moorhead, six minutes away.",
        ],
      },
      {
        heading: "How Help Me treats the metro",
        body: [
          "As one place, because people live it as one place — they work on one side and sleep on the other. City and neighborhood pages describe that lived geography, while resource pages stay strict about which side of the river a service belongs to.",
        ],
      },
    ],
    related: ["cities", "cities/fargo", "cities/moorhead", "cities/west-fargo", "questions/does-help-me-work-outside-fargo", "resources"],
    faqs: [
      {
        q: "Is West Fargo part of Fargo?",
        a: "No. It is its own city with its own police, schools, and snow rules, inside the same metro.",
      },
      {
        q: "Which county am I in?",
        a: "Fargo and West Fargo are Cass County, ND. Moorhead and Dilworth are Clay County, MN.",
      },
    ],
  }),

  page({
    slug: "glossary/red-river-of-the-north",
    kind: "glossary",
    title: "Red River of the North",
    description:
      "The Red River of the North forms the border between Fargo and Moorhead and flows north, which is why spring flooding behaves the way it does here.",
    h1: "Red River of the North",
    eyebrow: "glossary",
    lead: "It runs the wrong way, which is the single most important geographic fact about this metro.",
    answer:
      "The Red River of the North flows north along the North Dakota–Minnesota border, separating Fargo from Moorhead before continuing toward Canada. Because its southern reaches thaw first while ice remains downstream, and because the surrounding land is exceptionally flat, spring melt produces broad overland flooding rather than a contained rise.",
    keywords: ["Red River of the North", "Fargo Moorhead river", "north flowing river flooding"],
    term: {
      name: "Red River of the North",
      shortDefinition:
        "The north-flowing river forming the ND–MN border between Fargo and Moorhead. Its direction and the region’s flatness drive spring flood behavior.",
    },
    sections: [
      {
        heading: "Why direction matters",
        body: [
          "Melt begins in the south and moves downstream into reaches that are still frozen. Water meets ice, backs up, and spreads. On terrain this flat, a small rise in level covers an enormous area, which is why flood maps here look so different from those of a river in a valley.",
        ],
      },
      {
        heading: "What it means day to day",
        body: [
          "Bridges are the metro’s pinch points, the trail system that runs along the river is one of the best things about living here, and every spring the cities run flood preparation that is genuinely a civic operation. That response belongs to the cities and counties, not to a neighbor app.",
        ],
      },
    ],
    related: ["seasons/spring-thaw-and-flooding", "cities/fargo", "cities/moorhead", "neighborhoods/downtown-fargo", "resources/cass-county-resources", "resources/clay-county-resources"],
    faqs: [
      {
        q: "Does it flood every year?",
        a: "The severity varies enormously by year. Cities plan for it annually regardless.",
      },
      {
        q: "Can I help with sandbagging?",
        a: "Through official city calls for volunteers, which come with locations and hours. Not through an app.",
      },
    ],
  }),

  page({
    slug: "glossary/511-road-conditions",
    kind: "glossary",
    title: "511 road conditions",
    description:
      "511 is the official traveler information service for road conditions and closures. North Dakota and Minnesota each run their own, and both matter in this metro.",
    h1: "511",
    eyebrow: "glossary",
    lead: "Before you drive out of the metro in winter, this is the number that decides whether you should.",
    answer:
      "511 is the official traveler information service for road conditions, closures, and travel advisories, operated separately by each state. North Dakota and Minnesota each run their own 511, and drivers around Fargo–Moorhead often need both. In winter it is the authority on whether a highway is open, not a rumor or a weather app.",
    keywords: ["511 North Dakota", "MN 511", "road conditions Fargo", "highway closed"],
    term: {
      name: "511",
      shortDefinition:
        "State-operated traveler information for road conditions and closures. ND and MN each run one; both are relevant in this metro.",
    },
    sections: [
      {
        heading: "What it tells you",
        body: [
          "Whether roads are covered, icy, or closed; where travel is not advised; and where crews and crashes are. In a winter storm here, no-travel advisories and interstate closures are real, official, and enforced.",
        ],
      },
      {
        heading: "How to use it",
        body: [
          "Check before you leave, not while driving. If it says travel is not advised, that is the answer — the correct move is to stay where you are, and no help request substitutes for a plowed road.",
        ],
      },
    ],
    related: ["seasons/blizzard-day", "seasons/winter-in-fargo-moorhead", "for-commuters", "resources/fargo-emergency", "help/winter-car-help", "not-911"],
    faqs: [
      {
        q: "Is 511 the same in both states?",
        a: "The number concept is shared; the systems and coverage are separate. Use the one for the state whose roads you are driving.",
      },
      {
        q: "Is it an emergency line?",
        a: "No. It is travel information. Emergencies are 911.",
      },
    ],
  }),

  page({
    slug: "glossary/211-referral",
    kind: "glossary",
    title: "211",
    description:
      "211 is the free information and referral line for food, housing, utilities, and health services. North Dakota and Minnesota each operate their own service.",
    h1: "211",
    eyebrow: "glossary",
    lead: "The number to call when the problem is real, ongoing, and bigger than anything a neighbor can carry.",
    answer:
      "211 is a free, confidential information and referral service that connects people to local help with food, housing, utilities, healthcare, and social services. North Dakota and Minnesota run their own 211 services, so the referrals you get follow the state you are calling from — which matters in a metro split by a river.",
    keywords: ["211 North Dakota", "211 Minnesota", "Fargo referral line", "social services help"],
    term: {
      name: "211",
      shortDefinition:
        "Free information and referral to local food, housing, utility, and health services. Operated separately in ND and MN.",
    },
    sections: [
      {
        heading: "When 211 is the right call",
        body: [
          "Food insecurity, an eviction notice, a utility shutoff, a need for shelter, help finding mental health care, or simply not knowing which agency handles a situation. Trained staff know the local landscape and it costs nothing.",
        ],
      },
      {
        heading: "Why an app is not a substitute",
        body: [
          "Help Me is one-off everyday help between neighbors. It does not do intake, case management, or benefits navigation, and pointing a person in crisis at a stranger with an app delays the help they actually need.",
        ],
      },
    ],
    related: ["resources/211-north-dakota", "resources/211-minnesota", "resources/food-assistance-fargo", "resources/homeless-services-fargo", "for-nonprofits", "not-911"],
    faqs: [
      {
        q: "Is 211 an emergency line?",
        a: "No. 911 is for emergencies, 988 for mental-health crisis, and 211 for information and referral.",
      },
      {
        q: "Does it cost anything?",
        a: "No. It is free and confidential.",
      },
    ],
  }),

  page({
    slug: "glossary/988-crisis-line",
    kind: "glossary",
    title: "988 Suicide and Crisis Lifeline",
    description:
      "988 is the national suicide and crisis lifeline, available by call or text. Veterans can press 1. It is the right number for a mental-health crisis, not an app.",
    h1: "988",
    eyebrow: "glossary",
    lead: "Three digits, free, staffed, and the correct answer to a question no help app should try to hold.",
    answer:
      "988 is the Suicide and Crisis Lifeline, reachable by call or text from anywhere in the United States including both sides of the Fargo–Moorhead metro. It connects to trained crisis counselors. Veterans can press 1 for the Veterans Crisis Line. For immediate physical danger, call 911 instead.",
    keywords: ["988 crisis line", "suicide prevention Fargo", "mental health crisis North Dakota"],
    term: {
      name: "988",
      shortDefinition:
        "The national Suicide and Crisis Lifeline, by call or text. Veterans press 1. For immediate danger, 911.",
    },
    sections: [
      {
        heading: "When to use it",
        body: [
          "Thoughts of suicide or self-harm, a mental-health or substance-use crisis, or serious worry about someone else. You do not have to be at the worst possible moment to be allowed to call.",
        ],
      },
      {
        heading: "Why this page exists on a help app’s website",
        body: [
          "Because someone will search for help at two in the morning and land here. A community help app is not equipped for a crisis and should never be the last page someone reads. Campus counseling centers, local mental-health services, 988, and 911 are the real options.",
        ],
      },
    ],
    related: ["resources/mental-health-fargo", "not-911", "resources/fargo-emergency", "seasons/finals-week", "for-veterans", "resources/domestic-violence-fargo"],
    faqs: [
      {
        q: "Can I text 988?",
        a: "Yes, 988 supports call and text.",
      },
      {
        q: "Is it only for suicidal thoughts?",
        a: "No. It covers mental-health and substance-use crises broadly, including calls about someone you are worried about.",
      },
    ],
  }),

  page({
    slug: "glossary/jump-pack",
    kind: "glossary",
    title: "Jump pack",
    description:
      "A jump pack is a portable lithium battery that starts a car without a second vehicle. In a Fargo–Moorhead winter it is the highest-value item in the trunk.",
    h1: "Jump pack",
    eyebrow: "glossary",
    lead: "The thing that turns the most common winter emergency here into a two-minute inconvenience.",
    answer:
      "A jump pack is a portable battery pack with clamps that can start a car without needing a second vehicle or another person. It removes the dependency that makes a dead battery at three in the morning such a problem, and it is one of the most practical things a Fargo–Moorhead driver can keep in the trunk.",
    keywords: ["jump pack", "portable jump starter", "dead battery winter Fargo"],
    term: {
      name: "Jump pack",
      shortDefinition:
        "A portable battery that jump starts a car without a second vehicle. Charge it in the fall; keep it in the trunk all winter.",
    },
    sections: [
      {
        heading: "Why it beats cables",
        body: [
          "Cables need a second car, a second person, and someone willing to park nose to nose in a snowbank. A pack needs neither. It works in an empty lot at closing time and it works for the person who does not want to ask anyone.",
        ],
      },
      {
        heading: "Keeping it useful",
        body: [
          "Charge it in the fall and check it once mid-winter — a pack that has been flat in a cold trunk since last March will not save you. Follow the polarity instructions on the unit, since the clamp order differs from a two-car jump.",
        ],
      },
    ],
    related: ["guides/what-to-keep-in-your-car-in-winter", "help/jump-start", "guides/how-to-jump-start-a-car-safely", "seasons/polar-vortex-cold-snap", "for-night-shift-workers", "help/dead-battery"],
    faqs: [
      {
        q: "Do they work in extreme cold?",
        a: "Cold reduces their capacity too, which is why keeping it charged matters. It still beats waiting for a second car.",
      },
      {
        q: "Should I still ask for help if I have one?",
        a: "If the pack does not do it, the battery is likely finished and a jump from anyone will only buy one trip. Plan for a replacement.",
      },
    ],
  }),
];
