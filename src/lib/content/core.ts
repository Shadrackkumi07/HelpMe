import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const CORE_PAGES: SeoPage[] = [
  page({
    slug: "explore",
    kind: "hub",
    title: "Explore Help Me in Fargo–Moorhead",
    description:
      "The full map of Help Me: cities, campuses, high schools, help topics, glossary, comparisons, guides, and local resources across Fargo, Moorhead, and West Fargo.",
    h1: "Everything Help Me covers in Fargo–Moorhead",
    eyebrow: "directory",
    lead: "Start wherever you actually are. A campus. A neighborhood. A dead battery. A question about what this app is — and what it is not.",
    priority: 0.9,
    keywords: ["Help Me directory", "Fargo community help", "Help Me sitemap"],
    sections: [
      {
        heading: "A local app, with local pages",
        body: [
          "Help Me is built for Fargo, Moorhead, West Fargo, and the towns that share their roads, campuses, and winters. These pages exist so a person — or a search engine, or an answer engine — can find the honest version of that: how asking for help works, who is allowed to give it, and where the official campus calendars come from.",
          "Nothing here invents a feature the iPhone app does not ship. Helping is gated by a current staff-reviewed approval. Live help shows as an approximate area. Chat is private. Meeting in public is the default. 911 is still 911.",
        ],
      },
      {
        heading: "How to use this directory",
        body: [
          "If you live here, start with your city or campus. If you are comparing tools, start with Versus or Alternatives. If you want a definition, open the glossary. If you need an official phone number, open Resources — those pages send you to police, campus safety, 211, and county services, not to a stranger in the app.",
        ],
        bullets: [
          "Places: cities, neighborhoods, campuses, and schools",
          "Product: how it works, helpers, safety, events, community",
          "Help topics: jump starts, walks to the car, study, tech, winter",
          "Learn: glossary, guides, listicles, comparisons",
          "Answers: one-question pages for the things people ask a search bar",
          "Seasons: what this metro needs in January, August, and finals week",
        ],
      },
    ],
    related: ["about", "safety", "how-it-works", "questions", "seasons", "cities", "campuses", "help"],
    faqs: [
      {
        q: "Is every page here a place I can request help?",
        a: "No. City and campus pages explain the area. Resource pages point at official services. Only the iPhone app creates a live help request, and only approved helpers can accept one.",
      },
      {
        q: "Does Help Me work outside Fargo–Moorhead?",
        a: "The product is built for Fargo–Moorhead first. Event calendars are local. Matching is local. Surrounding-town pages describe the metro people actually drive, not a national network we do not operate.",
      },
    ],
  }),
  page({
    slug: "about",
    kind: "core",
    title: "About Help Me",
    description:
      "Help Me is a Fargo–Moorhead community app for everyday, non-emergency help. Approved helpers nearby can accept a request and meet you in public.",
    h1: "About Help Me",
    eyebrow: "product",
    lead: "Someone near you needs a hand right now. Someone near you would give one. Help Me puts them in the same place — in Fargo, Moorhead, and West Fargo.",
    priority: 0.95,
    keywords: ["about Help Me", "Help Me app", "Fargo community app", "See Beyond"],
    sections: [
      {
        heading: "The simple idea",
        body: [
          "You post what you need in a sentence. Approved helpers around you can see it. One of them accepts. A private chat opens. You meet in public, finish the thing, and get on with your day.",
          "That is the whole product. There is no feed to perform for, no public ranking of who needed help, and no promise that a stranger is a professional. Helpers are community members whose identity evidence a staff member has actually reviewed.",
        ],
      },
      {
        heading: "Built here, for here",
        body: [
          "Help Me is a Fargo–Moorhead app. Home shows a daily brief and upcoming official events. The map is where help happens. Community opens on campus and regional calendars from NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo, each linked to the official source.",
          "The brand line is See Beyond — as in, notice the person who is stuck, and the person who would stop.",
        ],
      },
      {
        heading: "What Help Me is not",
        body: [
          "It is not 911. It is not campus police. It is not a paid TaskRabbit-style marketplace. It is not a social network for minors. It is not a background-check company. Staff review identity evidence; that is not the same thing as a criminal background check, and we do not advertise one.",
        ],
      },
    ],
    related: ["how-it-works", "safety", "helpers", "for-students", "not-911", "download"],
    faqs: [
      {
        q: "Who makes Help Me?",
        a: "Help Me is a product built in Fargo–Moorhead. Support is at support@helpme.fyi. A person reads it.",
      },
      {
        q: "Is the app free?",
        a: "Yes. Help Me is on TestFlight for iPhone (iOS 15 or later) at no charge. It is not a paid gig marketplace.",
      },
      {
        q: "Do I need an account?",
        a: "Yes. Requests, private chat, reports, saved events, and account deletion all belong to a person. You can create an account with email or Sign in with Apple.",
      },
    ],
  }),
  page({
    slug: "how-it-works",
    kind: "core",
    title: "How Help Me works",
    description:
      "Ask in a sentence. Approved helpers nearby see it. One accepts. You chat privately and meet in public. Four steps — that is the entire ask.",
    h1: "How Help Me works",
    eyebrow: "product",
    lead: "Four steps. That is the entire ask. No audience, no performance, no explaining yourself to a timeline.",
    priority: 0.95,
    keywords: ["how Help Me works", "request help Fargo", "approved helpers"],
    sections: [
      {
        heading: "Ask",
        body: [
          "Open the live map and choose I need help. Pick a category — a jump start, a walk to the car, directions, a study session, tech support, lost and found — and add a sentence if you want. Details and a public meeting-place label are optional. Category-only requests are still understandable to helpers.",
        ],
      },
      {
        heading: "Someone nearby sees it",
        body: [
          "Help Me privately considers approved helpers who are online, suitable for the category, recently active, and not blocked by either person. Up to ten eligible helpers may receive a short-lived offer. There is no public feed of your request.",
          "When both people have shared matching location, offers stay within about 10 km of the requester’s rounded area. The system uses that rounded area — not a pin on you.",
        ],
      },
      {
        heading: "Meet in public",
        body: [
          "The first eligible helper to accept gets the request. A private chat opens. You decide what location you share and where you meet. Public places are the default. On supported iPhones, precision finding is available only when both people opt in.",
        ],
      },
      {
        heading: "Get on with your day",
        body: [
          "Both people confirm completion. Exact location sharing ends. Each person can leave a review. If nobody accepts within two hours, the request closes and you can try again. Only one live request at a time.",
        ],
      },
    ],
    related: ["help", "safety", "helpers", "guides/how-to-ask-for-help", "not-911"],
    faqs: [
      {
        q: "Can I ask without sharing my location?",
        a: "Yes. No-location requests can still be considered by suitable approved helpers. Approximate area is the usual map view. Exact location is opt-in after someone accepts.",
      },
      {
        q: "Who sees my request?",
        a: "Eligible approved helpers who receive a private offer. Not a public timeline. Not people you did not match with.",
      },
    ],
  }),
  page({
    slug: "safety",
    kind: "core",
    title: "Safety on Help Me",
    description:
      "Approximate location, approved helpers only, private chat, public meeting places, and report/block tools. Help Me is not 911.",
    h1: "Safety, said plainly",
    eyebrow: "trust",
    lead: "Asking for help should never cost you your privacy. Help Me is built around that sentence, and around the other sentence we will not bury: this is not emergency response.",
    priority: 0.95,
    keywords: ["Help Me safety", "location privacy", "approved helpers", "not 911"],
    sections: [
      {
        heading: "Location on your terms",
        body: [
          "Live help shows as an approximate area of about 500 meters, not a pin on you. Precise location moves only after a helper is accepted and you say yes, and only to that person. You can stop sharing. Completion ends exact sharing automatically.",
        ],
      },
      {
        heading: "Approved helpers only",
        body: [
          "Anyone can join Help Me. Not everyone can help. A helper submits identity evidence from inside the app. A staff member reviews it. Until that approval is current, they cannot see or accept requests. An old badge grants nothing.",
          "That is identity evidence plus a human decision. It is not a criminal background check, and we do not claim one.",
        ],
      },
      {
        heading: "Meet in public, keep the tools close",
        body: [
          "Public places by default. Report or block anyone, any time. Safety actions sit one tap away in every request. If you are in danger, call 911 first — then use the app later if you still want to.",
        ],
      },
    ],
    related: ["not-911", "guides/how-to-stay-safe", "guides/location-privacy", "helpers", "resources/fargo-emergency"],
    faqs: [
      {
        q: "Can a helper see my house?",
        a: "Not from the open map. They see a coarse area. Exact location is off until you consent after they accept, and you can meet at a public place instead.",
      },
      {
        q: "What if something feels wrong?",
        a: "Leave. Call emergency services if you need them. In the app, report and block. Staff can act on reports. Do not stay in a situation to be polite.",
      },
    ],
  }),
  page({
    slug: "not-911",
    kind: "core",
    title: "Help Me is not 911",
    description:
      "Help Me is for everyday, non-emergency help in Fargo–Moorhead. If you are in danger, call 911. Here is how to tell the difference.",
    h1: "Help Me is not 911",
    eyebrow: "safety",
    lead: "If you are in danger, threatened, injured, or watching a crime, call 911. Help Me will still be here for the jump start, the walk to the car, and the printer that will not print.",
    priority: 0.9,
    keywords: ["Help Me not 911", "Fargo emergency", "when to call 911"],
    sections: [
      {
        heading: "Call 911 when",
        body: ["Use official emergency services for immediate danger, medical emergencies, fire, crime in progress, or anyone who cannot wait for a neighbor."],
        bullets: [
          "Fargo, West Fargo, and Cass County, ND: 911",
          "Moorhead, Dilworth, and Clay County, MN: 911",
          "Campus emergencies: use the campus police / public safety number for that school, or 911",
        ],
      },
      {
        heading: "Use Help Me when",
        body: [
          "The day is stuck but nobody is in danger. A dead battery in a West Acres lot. A walk from the library after dark. A study partner in the Memorial Union. Directions to a lecture hall. A lost set of keys. Heavy boxes on move-in weekend.",
        ],
      },
      {
        heading: "Official numbers live on Resources",
        body: [
          "We keep a separate set of pages for Fargo Police, Moorhead Police, West Fargo Police, NDSU, MSUM, and Concordia public safety, 211, and county services. Those are the pages to bookmark for emergencies and official help. The app is the page for a neighbor.",
        ],
      },
    ],
    related: ["safety", "resources", "resources/fargo-emergency", "resources/ndsu-safety", "help"],
    faqs: [
      {
        q: "Will Help Me dispatch police?",
        a: "No. Help Me does not dispatch emergency services. Call 911 or campus police directly.",
      },
      {
        q: "Can I use both?",
        a: "If it is an emergency, call 911 first. Do not wait on an app offer when you need official response.",
      },
    ],
  }),
  page({
    slug: "helpers",
    kind: "core",
    title: "Become a Help Me Helper",
    description:
      "Apply in the app, submit identity evidence, wait on a staff decision. Current approval is required before you can see or accept requests in Fargo–Moorhead.",
    h1: "Helpers show up",
    eyebrow: "helpers",
    lead: "Anyone can join Help Me. Not everyone can help. Becoming a Helper means putting your name to it and waiting on a real decision.",
    priority: 0.9,
    keywords: ["become a helper", "Help Me helper", "volunteer Fargo", "approved helper"],
    sections: [
      {
        heading: "Apply from Account",
        body: [
          "The application asks about categories you can actually help with, availability, motivation, experience, and identity evidence. Submit it from inside the app. There is no shortcut from this website.",
        ],
      },
      {
        heading: "A person reviews it",
        body: [
          "A staff member makes the call. Not an algorithm, and not a self-serve badge. Pending, approved, rejected, expired, and resubmission are real states. Historical labels never grant access.",
        ],
      },
      {
        heading: "Go online when you can",
        body: [
          "Once approved, you choose when to go online. You can use your location for genuinely nearby offers. Going offline, leaving the app, accepting a request, or going quiet removes you from active matching. You are a neighbor, not an on-duty employee.",
        ],
      },
    ],
    related: ["guides/how-to-become-a-helper", "safety", "how-it-works", "for-helpers", "for-neighbors"],
    faqs: [
      {
        q: "Is this a paid job?",
        a: "No. Help Me is not a gig marketplace. Helpers are approved community members. Do not expect a paycheck from the app.",
      },
      {
        q: "Does approval last forever?",
        a: "No. Approval has to be current. An old label grants nothing.",
      },
    ],
  }),
  page({
    slug: "community",
    kind: "core",
    title: "Community on Help Me",
    description:
      "Campus and regional events first, then local posts. Help Me Community is what is happening in Fargo–Moorhead — attributed to the official source.",
    h1: "Fargo–Moorhead is happening",
    eyebrow: "community",
    lead: "Community opens on Events, on purpose. The first feeling should be that this place has things going on — not that you walked into a blank social feed.",
    priority: 0.85,
    keywords: ["Help Me community", "Fargo events", "campus events Fargo-Moorhead"],
    sections: [
      {
        heading: "Events, attributed",
        body: [
          "Official calendars from NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo are normalized on the server and shown with the source that published them. Tap through for the official page. We do not invent events.",
        ],
      },
      {
        heading: "Updates",
        body: [
          "Signed-in people can post, comment, and react. Posts persist. Standard report and block tools apply. This is a local conversation, not a national social network.",
        ],
      },
    ],
    related: ["events", "campuses", "lists/fargo-moorhead-campuses", "guides/campus-events-fargo-moorhead"],
    faqs: [
      {
        q: "Are events from Help Me or from the schools?",
        a: "Campus and regional listings come from official sources. Help Me caches and attributes them. Always open the official link for the last word.",
      },
    ],
  }),
  page({
    slug: "events",
    kind: "core",
    title: "Fargo–Moorhead events in Help Me",
    description:
      "Official NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo calendars in one place, always linked to the source.",
    h1: "Campus and city calendars, in one place",
    eyebrow: "events",
    lead: "Four campuses, a city calendar, and regional Ticketmaster listings — cached, attributed, and never made up.",
    priority: 0.85,
    keywords: ["NDSU events", "MSUM events", "Concordia events", "Fargo events", "West Fargo calendar"],
    sections: [
      {
        heading: "Where the events come from",
        body: [
          "NDSU publishes through MyNDSU. MSUM and Concordia publish campus calendars. M State contributes academic dates. West Fargo publishes a public community calendar. Ticketmaster listings cover regional shows within about 35 miles of Fargo.",
          "Help Me does not scrape random websites. The importer is a fixed list of official sources. If a feed is empty or down, the app says so. It does not invent a concert to fill the rail.",
        ],
      },
      {
        heading: "What you can do in the app",
        body: [
          "Filter by source, search, save, and open the official page. Home shows a short rail of upcoming campus and regional events. Community is the full calendar.",
        ],
      },
    ],
    related: ["community", "campuses/ndsu", "campuses/msum", "campuses/concordia", "guides/campus-events-fargo-moorhead"],
    faqs: [
      {
        q: "Can I submit an event from this website?",
        a: "No. Publish it on the official campus or city calendar. Help Me will pick it up from that source.",
      },
    ],
  }),
  page({
    slug: "for-students",
    kind: "audience",
    title: "Help Me for Fargo–Moorhead students",
    description:
      "For NDSU, MSUM, Concordia, and M State students: everyday campus help, official events, and a way to ask without posting to a group chat.",
    h1: "For students in Fargo–Moorhead",
    eyebrow: "who it's for",
    lead: "New campus, new winter, new parking lot. You do not have to perform the ask in a GroupMe of two hundred people.",
    keywords: ["NDSU help", "MSUM help", "Concordia student app", "campus help Fargo"],
    sections: [
      {
        heading: "What students actually ask for",
        body: [
          "Directions to a lecture hall. A study buddy. Wi-Fi and printer problems. A walk from the library. A jump start after a night class. Move-in boxes. None of that is an emergency. All of it can ruin a Tuesday.",
        ],
      },
      {
        heading: "Events without another app",
        body: [
          "Campus calendars already exist. Help Me puts NDSU, MSUM, Concordia, and M State next to each other so a weekend in this metro is visible in one place, with the official link still attached.",
        ],
      },
      {
        heading: "Campus safety still exists",
        body: [
          "NDSU, MSUM, and Concordia run official public safety and escort programs. Use those for official campus safety. Help Me is a neighbor with a current approval, not a substitute for campus police.",
        ],
      },
    ],
    related: ["campuses", "campuses/ndsu", "campuses/msum", "campuses/concordia", "help/study-buddy", "resources/ndsu-safety"],
    faqs: [
      {
        q: "Do I need a .edu email?",
        a: "You can join with email or Sign in with Apple. A .edu address is not a helper badge and does not skip staff review.",
      },
    ],
  }),
  page({
    slug: "for-helpers",
    kind: "audience",
    title: "Help Me for people who want to help",
    description:
      "If you live in Fargo, Moorhead, or West Fargo and want to help neighbors with everyday tasks, apply to become an approved Helper.",
    h1: "For people who would have stopped anyway",
    eyebrow: "who it's for",
    lead: "You already jump strangers’ cars. You already walk people to the parking ramp. Help Me is how the person who needs that finds you without shouting it down Broadway.",
    keywords: ["volunteer Fargo", "help neighbors Fargo", "become a helper"],
    sections: [
      {
        heading: "This is not a side hustle listing",
        body: [
          "If you want paid gigs, TaskRabbit and similar marketplaces exist. Help Me is community help. Apply, get a current staff decision, go online when you can, meet in public, mark it done.",
        ],
      },
    ],
    related: ["helpers", "guides/how-to-become-a-helper", "safety", "help"],
    faqs: [
      {
        q: "Can I help only on my campus?",
        a: "You choose categories and when you are online. Nearby matching uses recent activity and, when you allow it, location. It is not a campus-only shift board.",
      },
    ],
  }),
  page({
    slug: "for-neighbors",
    kind: "audience",
    title: "Help Me for Fargo–Moorhead neighbors",
    description:
      "A quieter way than Facebook groups or Nextdoor to ask for a jump start, a walk, or a hand — from approved people nearby.",
    h1: "For neighbors, not for an audience",
    eyebrow: "who it's for",
    lead: "The Facebook group will argue for forty comments before anyone picks up a jumper cable. Help Me sends the ask to people who are actually allowed to help.",
    keywords: ["Fargo neighbors", "West Fargo help", "Moorhead community"],
    sections: [
      {
        heading: "Why this is not a neighborhood feed",
        body: [
          "Nextdoor and Facebook groups are broadcasts. Help Me is a request with a gated offer list. Your dead battery does not need a public debate about which auto shop is best.",
        ],
      },
    ],
    related: ["cities/fargo", "cities/moorhead", "cities/west-fargo", "vs/nextdoor", "vs/facebook-groups"],
    faqs: [
      {
        q: "Do I have to post my address?",
        a: "No. Meet in public. Share exact location only after a helper accepts, and only if you want to.",
      },
    ],
  }),
  page({
    slug: "for-newcomers",
    kind: "audience",
    title: "New to Fargo–Moorhead",
    description:
      "Moving to Fargo, Moorhead, or West Fargo? How Help Me fits a first winter, a first campus week, and a city you do not know yet.",
    h1: "New in town, on purpose",
    eyebrow: "who it's for",
    lead: "Fargo–Moorhead is easy to like and easy to get stuck in — especially in January, especially if your family is eight hours away.",
    keywords: ["moving to Fargo", "new to NDSU", "new to Moorhead"],
    sections: [
      {
        heading: "What to learn first",
        body: [
          "There are two states here. Fargo and West Fargo sit in Cass County, North Dakota. Moorhead and Dilworth sit in Clay County, Minnesota. 911 still works; county services do not copy-paste across the river.",
          "NDSU is in Fargo. MSUM and Concordia are in Moorhead. M State has a Moorhead campus. Downtown Broadway is the walkable night strip. West Acres is the big mall. Winter is not a metaphor.",
        ],
      },
    ],
    related: ["guides/new-to-fargo", "cities/fargo", "campuses", "lists/things-to-do-in-fargo", "help/local-guide"],
    faqs: [
      {
        q: "Is Help Me only for students?",
        a: "No. Students are a large part of this metro. Neighbors, newcomers, and families use the same app. Helping still requires a current staff approval.",
      },
    ],
  }),
  page({
    slug: "for-parents",
    kind: "audience",
    title: "Help Me for parents in Fargo–Moorhead",
    description:
      "What Help Me is — and is not — if your student lives near NDSU, MSUM, Concordia, or a Fargo–Moorhead high school. Adult community help, not a youth network.",
    h1: "For parents who want the honest version",
    eyebrow: "who it's for",
    lead: "Help Me is an adult community help app. It is not a school-issued safety program and not a place designed for children to meet strangers.",
    keywords: ["parents NDSU", "Fargo student safety", "Help Me for families"],
    sections: [
      {
        heading: "If your student is in college",
        body: [
          "Point them at official campus safety first: NDSU Police, MSUM Public Safety, Concordia Public Safety. Help Me can cover jump starts, directions, and study help. It does not replace those offices.",
        ],
      },
      {
        heading: "If you are looking at high school pages",
        body: [
          "Those pages describe the community around each school — activities, nearby neighborhoods, winter car help for adults, official resources. Help Me is not a K–12 student meetup product. High school students should use official school and family channels.",
        ],
      },
    ],
    related: ["safety", "not-911", "schools", "resources/ndsu-safety", "for-students"],
    faqs: [
      {
        q: "Is Help Me for minors?",
        a: "Help Me is a community app for adults in Fargo–Moorhead. Helpers submit identity evidence. It is not a youth program.",
      },
    ],
  }),
  page({
    slug: "for-campuses",
    kind: "audience",
    title: "Help Me for Fargo–Moorhead campuses",
    description:
      "How Help Me treats official NDSU, MSUM, Concordia, and M State calendars, and how campus help requests stay distinct from campus police.",
    h1: "For the campuses this metro actually has",
    eyebrow: "who it's for",
    lead: "We ingest official calendars. We do not pretend to be campus public safety. Those two sentences are the whole partnership posture.",
    keywords: ["campus partnership Fargo", "NDSU community app", "MSUM events"],
    sections: [
      {
        heading: "Calendars",
        body: [
          "Fixed official feeds. Source name and official URL stay visible. Ticketmaster is regional and credentialed on the server. If a source is pending or down, the product says so.",
        ],
      },
      {
        heading: "Help requests",
        body: [
          "Campus categories exist — tech support, escort-style walks, directions, study buddies — as community help, not as a contracted campus service. Official escorts and police remain official.",
        ],
      },
    ],
    related: ["campuses", "events", "resources/ndsu-safety", "resources/msum-safety", "resources/concordia-safety"],
    faqs: [
      {
        q: "Can a campus post events directly into Help Me?",
        a: "Publish them on the official campus calendar we already ingest. That keeps attribution honest.",
      },
    ],
  }),
  page({
    slug: "sitemap-directory",
    kind: "hub",
    title: "HTML sitemap",
    description:
      "A human-readable index of every public Help Me page: product, places, help topics, glossary, comparisons, guides, and resources.",
    h1: "HTML sitemap",
    eyebrow: "index",
    lead: "Every public URL on helpme.fyi, grouped the way the site is actually organized. Machines should use /sitemap.xml. People can use this.",
    priority: 0.4,
    changeFrequency: "weekly",
    sections: [
      {
        heading: "Why this page exists",
        body: [
          "Search engines get XML. Answer engines get /llms.txt. Humans get a directory that does not require a view-source. If a page is public, it should be reachable from here without guessing the URL.",
        ],
      },
    ],
    related: ["explore", "about"],
    faqs: [
      {
        q: "Is this the same as sitemap.xml?",
        a: "No. /sitemap.xml is the machine index submitted to Google Search Console. This page is a readable table of contents.",
      },
    ],
  }),
];
