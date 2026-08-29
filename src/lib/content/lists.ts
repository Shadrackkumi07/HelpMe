import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const LIST_PAGES: SeoPage[] = [
  page({
    slug: "lists",
    kind: "hub",
    title: "Fargo–Moorhead lists",
    description:
      "Local lists for Fargo–Moorhead: things to do, campuses, study spots, winter survival, public meeting places, and where cars die in January.",
    h1: "Lists for a metro that actually exists",
    eyebrow: "lists",
    lead: "Not a national roundup with Fargo photoshopped in. Specific streets, campuses, lots, and the difference between a night out and a 911 call.",
    priority: 0.8,
    keywords: ["Fargo lists", "things to do Fargo", "Fargo-Moorhead guide"],
    sections: [
      {
        heading: "How to read these",
        body: [
          "Each list is six to ten real items, not a keyword pile. Help Me shows up only where a neighbor honestly fits — a jump in a lot, a walk to a ramp, a study table. Official events still belong to NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo.",
        ],
        bullets: [
          "Places to go and public places to meet",
          "Campuses, high schools, student lists",
          "Winter, late night, parking lots",
          "How this app compares to feeds and gig boards",
        ],
      },
    ],
    related: ["guides", "resources", "explore", "events", "cities", "for-newcomers"],
    faqs: [
      {
        q: "Are these official city lists?",
        a: "No. They are local orientation pages. Official calendars and services live on campus, city, and 211 sites — and on our resource pages.",
      },
      {
        q: "Can I request help from a listicle?",
        a: "No. Lists explain. Requests happen in the iPhone app.",
      },
    ],
  }),

  page({
    slug: "lists/things-to-do-in-fargo",
    kind: "list",
    title: "Things to do in Fargo, ND",
    description:
      "A local list of things to do in Fargo: Broadway, the Fargo Theatre, West Acres, NDSU, parks, and official events — not a tourist brochure.",
    h1: "Things to do in Fargo that you will still recognize in February",
    eyebrow: "Fargo",
    lead: "This is a walking city in spots, a driving city in winter, and a campus city whether you enrolled or not.",
    priority: 0.7,
    keywords: ["things to do in Fargo", "Fargo ND attractions", "Broadway Fargo"],
    geo: { name: "Fargo", type: "City", city: "Fargo", state: "ND" },
    sections: [
      {
        heading: "1. Broadway, on purpose",
        body: [
          "Downtown’s walkable strip: the Fargo Theatre marquee, restaurants, the sidewalk you can name in a chat. Meet here. Do not meet in the alley behind here.",
        ],
        bullets: [
          "Public, lit, easy to leave.",
          "A fair default if you asked a helper for directions or a walk to a ramp.",
        ],
      },
      {
        heading: "2. The Fargo Theatre and downtown stages",
        body: [
          "Movies, live rooms, the kind of night you actually put on a calendar. Ticketmaster Fargo listings in Help Me cover regional shows — always open the official link for the last word.",
        ],
      },
      {
        heading: "3. West Acres",
        body: [
          "The big mall on the west side. Indoor walking in January. Also a famous place for a dead battery. If you meet anyone from the app, use a vestibule or food-court edge, not a far row of the lot after close.",
        ],
      },
      {
        heading: "4. NDSU without being a student",
        body: [
          "Dacotah Field, the Union, a Bison Saturday. Official NDSU events in the app are from MyNDSU. Campus police still own campus safety.",
        ],
      },
      {
        heading: "5. Island Park and the river",
        body: [
          "Daylight parks. After dark, pick something staffed. The river is the state line; Moorhead starts when you mean it to.",
        ],
      },
      {
        heading: "6. Scheels and the 13th Avenue strip",
        body: [
          "A destination store and a commercial corridor where cars sit too long in the cold. Public, busy, good for a labeled meet.",
        ],
      },
      {
        heading: "7. Fargo Public Library",
        body: [
          "Main downtown, Carlson on 32nd, Northport on Broadway. Heat, tables, hours on fargond.gov. Closed when they say they are closed.",
        ],
      },
      {
        heading: "8. Official calendars instead of guessing",
        body: [
          "NDSU, West Fargo, Ticketmaster Fargo, plus the Moorhead campuses if your Saturday ignores city limits. Attribution stays on the source.",
        ],
      },
    ],
    related: [
      "lists/things-to-do-in-moorhead",
      "lists/late-night-fargo",
      "lists/fargo-events-guide",
      "cities/fargo",
      "guides/new-to-fargo",
      "lists/west-fargo-things-to-do",
    ],
    faqs: [
      {
        q: "Is this a complete Fargo tourism list?",
        a: "No. It is a local orientation list. City and campus calendars are the living version.",
      },
      {
        q: "Can I ask a helper to show me around?",
        a: "You can ask for directions or a public meet. Help Me is not a paid tour guide.",
      },
    ],
  }),

  page({
    slug: "lists/things-to-do-in-moorhead",
    kind: "list",
    title: "Things to do in Moorhead, MN",
    description:
      "Things to do in Moorhead: MSUM, Concordia, Center Avenue, Hjemkomst, Gooseberry Park, and the short trip across the river to Fargo.",
    h1: "Things to do in Moorhead, which is not a Fargo suburb",
    eyebrow: "Moorhead",
    lead: "Two campuses, a river that is a border, and a downtown that still has a name: Center Avenue.",
    priority: 0.66,
    keywords: ["things to do in Moorhead", "Moorhead MN", "MSUM Concordia"],
    geo: { name: "Moorhead", type: "City", city: "Moorhead", state: "MN" },
    sections: [
      {
        heading: "1. MSUM campus",
        body: [
          "Minnesota State University Moorhead is a city inside the city. Official events in Help Me are labeled MSUM. Public Safety is 218-477-2449 if the night stops being a night out.",
        ],
      },
      {
        heading: "2. Concordia College",
        body: [
          "Walkable campus, Knutson Campus Center, a calendar of its own. SAFEWalk is 218-299-3123. Different school from MSUM even when the weekend blurs.",
        ],
      },
      {
        heading: "3. Center Avenue downtown",
        body: [
          "Moorhead’s public strip. Meet here. Moorhead Police if you need an officer. 911 still 911.",
        ],
        bullets: [
          "Lit, named, easy to describe in a chat.",
          "Not Broadway. Different city, different records desk.",
        ],
      },
      {
        heading: "4. Hjemkomst Center",
        body: [
          "The ship, the stave church, the local museum people actually take visitors to. Daylight public place. Confirm hours on the official site.",
        ],
      },
      {
        heading: "5. Gooseberry Park and the river corridor",
        body: [
          "Beautiful in daylight. A bad stranger-meet after dark. Trails are not vestibules.",
        ],
      },
      {
        heading: "6. Bluestem and outdoor shows, in season",
        body: [
          "Regional performing arts sit on this side of the river. Ticketmaster Fargo listings may still apply for bigger rooms — check the source name.",
        ],
      },
      {
        heading: "7. Walk or ride to Fargo on purpose",
        body: [
          "Broadway is close. Cass County starts when you cross. Fun, and a different police department if you need one.",
        ],
      },
      {
        heading: "8. Dilworth as the east edge",
        body: [
          "Grocery-and-highway Moorhead’s neighbor. Still Clay County. Still 911. Still not a Fargo annex.",
        ],
      },
    ],
    related: [
      "cities/moorhead",
      "lists/moorhead-campus-weekend",
      "lists/things-to-do-in-fargo",
      "guides/new-to-msum",
      "guides/new-to-concordia",
      "lists/fargo-moorhead-campuses",
    ],
    faqs: [
      {
        q: "Is Moorhead on the Fargo things-to-do page?",
        a: "It has its own list. The metro shares a Saturday. It does not share a police department.",
      },
      {
        q: "Do MSUM and Concordia events show in Help Me?",
        a: "Yes, attributed to each official calendar.",
      },
    ],
  }),

  page({
    slug: "lists/public-meeting-places-fargo",
    kind: "list",
    title: "Public meeting places in Fargo–Moorhead",
    description:
      "Where to meet a helper in public: campus unions, Fargo Public Library, West Acres, grocery vestibules, Broadway, Center Avenue — not a home pin.",
    h1: "Public meeting places you can actually name in a chat",
    eyebrow: "safety",
    lead: "If you cannot say the place out loud to a friend, do not put it in a request.",
    priority: 0.68,
    keywords: ["public meeting places Fargo", "safe meetup Fargo", "where to meet Fargo"],
    sections: [
      {
        heading: "1. NDSU Memorial Union",
        body: [
          "Indoor, public, named. The default for north Fargo campus asks. Not a residence hall lounge.",
        ],
      },
      {
        heading: "2. MSUM and Concordia campus centers",
        body: [
          "Unions and Knutson. Same rule: indoor public, then walk to the lot together if the car is the job.",
        ],
      },
      {
        heading: "3. Fargo Public Library — Main",
        body: [
          "101 4th St. N. Staffed, downtown, free patron parking as the city describes it. Only during open hours.",
        ],
      },
      {
        heading: "4. Carlson and Northport libraries",
        body: [
          "South Fargo and north Broadway branches. Same library system, same open-hours rule.",
        ],
      },
      {
        heading: "5. West Acres vestibules and food court",
        body: [
          "The mall is a winter living room. Meet inside. Jump the car in a busy row, not the last lamp after close.",
        ],
      },
      {
        heading: "6. Grocery entrances",
        body: [
          "Hornbacher’s, Cash Wise, and the other lit vestibules people already know. Cameras, other shoppers, a door that opens from the inside.",
        ],
      },
      {
        heading: "7. Broadway lobbies and sidewalks",
        body: [
          "Downtown Fargo’s named street. After midnight still prefer a staffed doorway over a quiet park edge.",
        ],
      },
      {
        heading: "8. Center Avenue, Moorhead",
        body: [
          "The Minnesota-side equivalent. Different police. Same public-place logic.",
        ],
      },
      {
        heading: "9. Downtown parking ramp lobbies",
        body: [
          "Elevators and pay stations other people use. Fine for a walk-to-the-car ask. Abandoned upper decks at 2 a.m. are a worse plan if you have the lobby.",
        ],
      },
    ],
    related: [
      "guides/meet-in-public-fargo",
      "guides/how-to-stay-safe",
      "lists/study-spots-fargo",
      "lists/parking-lots-where-cars-die-fargo",
      "resources/fargo-public-library",
      "guides/location-privacy",
    ],
    faqs: [
      {
        q: "What if the helper wants to meet at my apartment?",
        a: "Say no. Public place. If they push, leave and report.",
      },
      {
        q: "Is a park public enough?",
        a: "Daylight with other people, sometimes. After dark, indoor public or a staffed lot.",
      },
    ],
  }),

  page({
    slug: "lists/fargo-moorhead-campuses",
    kind: "list",
    title: "Campuses in Fargo–Moorhead",
    description:
      "NDSU, MSUM, Concordia, and M State Moorhead — the campuses Help Me actually covers, with official calendars and public safety that is not this app.",
    h1: "The campuses this metro actually has",
    eyebrow: "campuses",
    lead: "Four names in the event importer. A few more in the surrounding valley. We will not pretend UND is a Fargo neighborhood.",
    priority: 0.68,
    keywords: ["Fargo campuses", "NDSU MSUM Concordia", "Moorhead colleges"],
    sections: [
      {
        heading: "1. North Dakota State University — Fargo, ND",
        body: [
          "The large research campus in north Fargo. MyNDSU events, University Police at 701-231-8998, Student Health in Wallman. Cass County.",
        ],
        bullets: ["Official calendar in Help Me: NDSU", "City police off campus: Fargo Police"],
      },
      {
        heading: "2. Minnesota State University Moorhead — Moorhead, MN",
        body: [
          "Public university on the Minnesota side. Public Safety 218-477-2449, including escorts and campus jumps. Clay County.",
        ],
      },
      {
        heading: "3. Concordia College — Moorhead, MN",
        body: [
          "Private liberal-arts campus minutes from MSUM. Public Safety / SAFEWalk 218-299-3123. Its own calendar, its own name.",
        ],
      },
      {
        heading: "4. M State — Moorhead campus",
        body: [
          "Minnesota State Community and Technical College. Academic dates in the importer. Search the campus directory for current security contacts. Commuter rhythm, same city as MSUM and Concordia.",
        ],
      },
      {
        heading: "5. What we ingest, said once",
        body: [
          "NDSU, MSUM, Concordia, M State, plus West Fargo’s city calendar and Ticketmaster Fargo. Always attributed. Never invented.",
        ],
      },
      {
        heading: "6. Nearby, not launched as this product",
        body: [
          "NDSCS in Wahpeton sits down the river. UND sits in Grand Forks. Help Me is built for Fargo–Moorhead. Surrounding-city pages on this site exist so we do not fake a statewide network.",
        ],
      },
      {
        heading: "7. High schools are a different list",
        body: [
          "Fargo, West Fargo, Moorhead, and district schools have their own page. Help Me is not a K–12 meetup product.",
        ],
      },
    ],
    related: [
      "for-students",
      "guides/campus-events-fargo-moorhead",
      "lists/student-resources-ndsu",
      "lists/student-resources-msum",
      "lists/student-resources-concordia",
      "events",
    ],
    faqs: [
      {
        q: "Is there a Help Me campus edition?",
        a: "No. One app. Campus pages explain each school. Helping still needs a current staff approval.",
      },
      {
        q: "Do you ingest UND events?",
        a: "No. Official sources are NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo.",
      },
    ],
  }),

  page({
    slug: "lists/high-schools-fargo-moorhead",
    kind: "list",
    title: "High schools in Fargo–Moorhead",
    description:
      "Fargo North, South, Davies; West Fargo, Sheyenne, Horizon; Moorhead; DGF and others. Adult community help around schools — not a student meetup app.",
    h1: "High schools in the metro, named honestly",
    eyebrow: "schools",
    lead: "These names shape Friday nights and bus routes. Help Me is an adult community app. It is not a place for minors to meet strangers.",
    priority: 0.58,
    keywords: ["Fargo high schools", "West Fargo high schools", "Moorhead High"],
    sections: [
      {
        heading: "1. Fargo North, Fargo South, Fargo Davies",
        body: [
          "The Fargo Public Schools high campuses, north to south. Neighborhoods and winter lots around them are adult geography — jump starts in public, not a student chat.",
        ],
      },
      {
        heading: "2. West Fargo High",
        body: [
          "The original West Fargo campus. City police are West Fargo Police. Events often sit on the official West Fargo calendar we ingest.",
        ],
      },
      {
        heading: "3. Sheyenne High",
        body: [
          "West Fargo’s Sheyenne campus. Same city, same 911, same rule: adults use neighbor help; students use school and family channels.",
        ],
      },
      {
        heading: "4. Horizon High",
        body: [
          "The newer West Fargo high campus. Fast-growing south-west metro. Cul-de-sacs are still a bad meeting place.",
        ],
      },
      {
        heading: "5. Moorhead High",
        body: [
          "Minnesota side. Moorhead Police, Clay County. Spuds games are a public night; they are not a reason to share a home pin.",
        ],
      },
      {
        heading: "6. Dilworth-Glyndon-Felton",
        body: [
          "DGF serves the east edge. Still Clay County. Still not Fargo Public Schools.",
        ],
      },
      {
        heading: "7. Oak Grove and other nonpublic campuses",
        body: [
          "Oak Grove in Fargo is a well-known Christian school. Private campuses have their own safety offices. Search the school name for official contacts.",
        ],
      },
      {
        heading: "8. What this list is not",
        body: [
          "Not a teen dating app. Not a student rideshare. Not a substitute for a school resource officer. Parents should read the for-parents page.",
        ],
      },
    ],
    related: ["for-parents", "cities/fargo", "cities/west-fargo", "cities/moorhead", "guides/west-fargo-community-help", "safety"],
    faqs: [
      {
        q: "Can high-school students use Help Me?",
        a: "Help Me is a community app for adults. It is not a K–12 student program or a youth chat.",
      },
      {
        q: "Why list high schools at all?",
        a: "They are landmarks in this metro. Adults near them still get stuck in winter lots. Official youth safety stays with schools and families.",
      },
    ],
  }),

  page({
    slug: "lists/winter-student-survival-fargo",
    kind: "list",
    title: "Winter student survival in Fargo–Moorhead",
    description:
      "How students get through a Fargo winter: coats, batteries, indoor meeting spots, MATBUS, campus escorts, and when cold is a 911 call.",
    h1: "Winter student survival, without romanticizing the wind chill",
    eyebrow: "winter",
    lead: "The novelty lasts until the first night your car is a sculpture and your fingers stop pretending.",
    priority: 0.64,
    keywords: ["Fargo winter student", "NDSU winter", "Moorhead winter campus"],
    sections: [
      {
        heading: "1. The coat is not optional",
        body: [
          "Fashion dies at twenty below. Cover skin. Keep a layer in the building you actually live in, not in the car you might not get into.",
        ],
      },
      {
        heading: "2. Batteries fail in public lots",
        body: [
          "Ask for a jump in a lit lot. Meet at an entrance first if you want. Campus public safety jumps cars on some campuses — MSUM publishes that service; search NDSU and Concordia for theirs.",
        ],
      },
      {
        heading: "3. Park facing out when you can",
        body: [
          "A small mercy on a morning when the lot is ice. Not a guarantee. Not a helper’s job to dig you out of a private stall.",
        ],
      },
      {
        heading: "4. Indoor public defaults",
        body: [
          "Unions, libraries, mall vestibules. Name them in the request. Exact location stays optional.",
        ],
      },
      {
        heading: "5. MATBUS when the car is done",
        body: [
          "matbus.com. Monday–Saturday fixed routes as they publish them. Not a Sunday assumption. Not a stranger’s sedan.",
        ],
      },
      {
        heading: "6. Official escorts exist",
        body: [
          "NDSU 701-231-8998. MSUM 218-477-2449. Concordia SAFEWalk 218-299-3123. Use them when you want an official walk.",
        ],
      },
      {
        heading: "7. Heat and shelter are 211",
        body: [
          "If the apartment has no heat, that is a landlord, a utility, and 211. If someone is outside in a blizzard, 911 or a shelter — winter-shelter page, not the map.",
        ],
      },
      {
        heading: "8. Mental weather is a crisis line",
        body: [
          "January is long. 988, campus counseling, FirstLink. Not a helper category.",
        ],
      },
    ],
    related: [
      "guides/winter-help-fargo",
      "lists/parking-lots-where-cars-die-fargo",
      "resources/winter-shelters-fargo",
      "resources/matbus",
      "guides/student-safety-fargo",
      "resources/211-north-dakota",
    ],
    faqs: [
      {
        q: "Can I ask a helper to warm up my car every morning?",
        a: "No. That is not a neighbor favor; it is a routine service. Help Me is not a paid gig app.",
      },
      {
        q: "When is cold an emergency?",
        a: "When someone cannot get inside, is injured, or shows signs of hypothermia. 911.",
      },
    ],
  }),

  page({
    slug: "lists/ways-neighbors-help-fargo",
    kind: "list",
    title: "Ways neighbors help in Fargo–Moorhead",
    description:
      "Everyday help neighbors actually give in Fargo: jump starts, walks to the car, directions, study tables, tech, boxes — not paid gigs, not 911.",
    h1: "Ways neighbors actually help here",
    eyebrow: "community",
    lead: "The Facebook group will argue. The person with cables will not, if they can see the ask.",
    priority: 0.64,
    keywords: ["neighbor help Fargo", "community help Fargo", "everyday help Fargo"],
    sections: [
      {
        heading: "1. Jump starts",
        body: [
          "The classic. Public lot. Cables if you have them. Not a mechanic. Not a tow.",
        ],
      },
      {
        heading: "2. A walk to the car",
        body: [
          "Library to ramp, Broadway to a downtown garage. Official campus escorts exist too. Pick the tool that matches how official you need it.",
        ],
      },
      {
        heading: "3. Directions",
        body: [
          "Lecture halls, the Union, a visitor who cannot find the Fargo Theatre. A sentence on a map, not a tour company.",
        ],
      },
      {
        heading: "4. Study tables",
        body: [
          "A public library or union table. You still do your own homework. Helper approval is not a tutor credential.",
        ],
      },
      {
        heading: "5. Printer and Wi-Fi grief",
        body: [
          "Campus tech categories exist as community help, not as ITS. Housing staff and official campus IT still own accounts and locked labs.",
        ],
      },
      {
        heading: "6. Heavy boxes, briefly",
        body: [
          "A public door, a short carry. Not a moving company. Not a reason to invite someone onto a residential floor.",
        ],
      },
      {
        heading: "7. Lost and found, modestly",
        body: [
          "A labeled public place to hand something over. Valuables and IDs may belong with campus police or city police instead.",
        ],
      },
      {
        heading: "8. What neighbors should refuse",
        body: [
          "Emergencies, overnight hosting, paid labor, anything that wants to leave a public place for a private one without a good reason. Report and block exist.",
        ],
      },
    ],
    related: [
      "guides/how-to-ask-for-help",
      "guides/how-to-become-a-helper",
      "for-neighbors",
      "for-helpers",
      "how-it-works",
      "lists/free-community-help-fargo",
    ],
    faqs: [
      {
        q: "Can I pay a helper?",
        a: "Help Me is not a gig marketplace. Do not turn it into one. If you need paid labor, use a marketplace that is actually that.",
      },
      {
        q: "Are helpers employees?",
        a: "No. Approved community members. Current staff-reviewed identity evidence. Not a background-check company. Not on duty.",
      },
    ],
  }),

  page({
    slug: "lists/student-resources-ndsu",
    kind: "list",
    title: "Student resources at NDSU",
    description:
      "NDSU student resources: University Police, Student Health, Counseling, Memorial Union, MyNDSU events, library, MATBUS — official first, Help Me second.",
    h1: "NDSU student resources, official names first",
    eyebrow: "NDSU",
    lead: "A Bison ID opens campus doors. It does not replace 911, and it does not skip helper approval.",
    priority: 0.64,
    keywords: ["NDSU student resources", "NDSU police", "NDSU counseling"],
    geo: { name: "North Dakota State University", type: "Campus", city: "Fargo", state: "ND" },
    sections: [
      {
        heading: "1. University Police — 701-231-8998",
        body: [
          "24/7. Escorts at this number. 911 for emergencies. ndsu.edu/police_safety.",
        ],
      },
      {
        heading: "2. Student Health — 701-231-7331",
        body: [
          "Wallman Wellness Center. Pharmacy 701-231-7332. Weekday clinic, not an ER.",
        ],
      },
      {
        heading: "3. Counseling Center — 701-231-7671",
        body: [
          "Ceres Hall. After hours, NDSU points students at FirstLink / 988.",
        ],
      },
      {
        heading: "4. Memorial Union",
        body: [
          "Indoor public default. A fair Help Me meeting label.",
        ],
      },
      {
        heading: "5. Libraries",
        body: [
          "Campus libraries for study. Hours follow the academic calendar. After close, pick another public place or go home.",
        ],
      },
      {
        heading: "6. MyNDSU events",
        body: [
          "The official feed Help Me ingests. Open the official link. We do not invent a game.",
        ],
      },
      {
        heading: "7. Dean of Students / basic needs",
        body: [
          "NDSU publishes basic-needs pages and points at 211 / FirstLink. Food and housing stress belong there, not in a helper chat.",
        ],
      },
      {
        heading: "8. MATBUS",
        body: [
          "Student pass rules on matbus.com. Confirm before you assume a ride is free.",
        ],
      },
    ],
    related: [
      "resources/ndsu-safety",
      "resources/student-health-ndsu",
      "guides/new-to-ndsu",
      "lists/first-week-at-ndsu",
      "lists/student-resources-msum",
      "for-students",
    ],
    faqs: [
      {
        q: "Does Help Me replace any of these offices?",
        a: "No. It sits beside them for everyday, non-emergency neighbor help.",
      },
      {
        q: "Where do NDSU events in the app come from?",
        a: "Official NDSU / MyNDSU sources, attributed and linked.",
      },
    ],
  }),

  page({
    slug: "lists/student-resources-msum",
    kind: "list",
    title: "Student resources at MSUM",
    description:
      "MSUM student resources: Public Safety, counseling, library, campus jumps, Moorhead Police, 211, and official events — Minnesota numbers included.",
    h1: "MSUM student resources, Minnesota-side",
    eyebrow: "MSUM",
    lead: "Spartans get a public-safety desk that will actually jump a car. Use it. Then use the rest of this list for everything else.",
    priority: 0.6,
    keywords: ["MSUM student resources", "MSUM Public Safety", "MSUM counseling"],
    geo: { name: "Minnesota State University Moorhead", type: "Campus", city: "Moorhead", state: "MN" },
    sections: [
      {
        heading: "1. Public Safety — 218-477-2449",
        body: [
          "24/7. Escorts, on-campus jumps, vehicle unlocks as they publish them. dispatch@mnstate.edu.",
        ],
      },
      {
        heading: "2. 911 and Moorhead Police",
        body: [
          "City around campus. General information 218-299-5120. Non-emergency dispatch 701-451-7660.",
        ],
      },
      {
        heading: "3. Counseling Services",
        body: [
          "Search MSUM Counseling for appointments. After hours: 988 or 911. Help Me is not a counselor.",
        ],
      },
      {
        heading: "4. Library and union",
        body: [
          "Study ground and indoor public meets. Hours follow campus, not your deadline.",
        ],
      },
      {
        heading: "5. Official MSUM calendar",
        body: [
          "In Help Me, labeled MSUM. Tap through. Concordia is next door and a different source.",
        ],
      },
      {
        heading: "6. Title IX / Dean of Students",
        body: [
          "MSUM publishes 218-477-2391 for the Title IX office on its getting-help page. Confirm on mnstate.edu. Emergencies still 911.",
        ],
      },
      {
        heading: "7. Clay County and 211",
        body: [
          "Benefits and food support: claycountymn.gov or 211. You are in Minnesota even when you eat in Fargo.",
        ],
      },
      {
        heading: "8. MATBUS",
        body: [
          "Crosses the river. Student fare rules on matbus.com.",
        ],
      },
    ],
    related: [
      "resources/msum-safety",
      "guides/new-to-msum",
      "guides/first-week-msum",
      "lists/student-resources-concordia",
      "resources/clay-county-resources",
      "for-students",
    ],
    faqs: [
      {
        q: "Should I call Public Safety or a helper for a dead battery on campus?",
        a: "Public Safety first on campus — they publish free jumps. A helper is the off-campus / neighbor version.",
      },
      {
        q: "Are MSUM events mixed with NDSU in the app?",
        a: "They sit in one calendar with source labels. Filter by source.",
      },
    ],
  }),

  page({
    slug: "lists/student-resources-concordia",
    kind: "list",
    title: "Student resources at Concordia College",
    description:
      "Concordia College resources: Public Safety, SAFEWalk, counseling, Knutson Campus Center, official events, and Moorhead services.",
    h1: "Concordia student resources, small campus, full city",
    eyebrow: "Concordia",
    lead: "You can walk this campus in a cold hour. You still need official numbers, because Moorhead does not shrink at the fence.",
    priority: 0.58,
    keywords: ["Concordia College resources", "Concordia SAFEWalk", "Cobber student help"],
    geo: { name: "Concordia College", type: "Campus", city: "Moorhead", state: "MN" },
    sections: [
      {
        heading: "1. Public Safety / SAFEWalk — 218-299-3123",
        body: [
          "24/7. From a campus phone: 3123. 911 for emergencies. Knutson Campus Center is the usual public-safety home.",
        ],
      },
      {
        heading: "2. Counseling Center",
        body: [
          "Concordia publishes a Counseling Center (search Concordia Counseling; 218-299-3514 has been listed with Disability Services on public pages — confirm on the college site). After hours: 988 or 911.",
        ],
      },
      {
        heading: "3. Knutson Campus Center",
        body: [
          "Indoor public default. A meeting label a helper will understand.",
        ],
      },
      {
        heading: "4. Official Concordia calendar",
        body: [
          "In Help Me, attributed. Not MSUM’s calendar. Not ours to invent.",
        ],
      },
      {
        heading: "5. Title IX / Get Help Now",
        body: [
          "The college publishes a Get Help Now page for interpersonal violence. 911, Public Safety, Sollera. Not a Help Me request.",
        ],
      },
      {
        heading: "6. Moorhead Police and Clay County",
        body: [
          "Off campus, Minnesota city and county desks. 211 for benefits and shelter.",
        ],
      },
      {
        heading: "7. MSUM next door",
        body: [
          "Shared city, separate public safety, separate events source. A weekend can use both calendars.",
        ],
      },
      {
        heading: "8. Broadway across the river",
        body: [
          "Close. Different state. Fargo Police if something happens on that sidewalk.",
        ],
      },
    ],
    related: [
      "resources/concordia-safety",
      "guides/new-to-concordia",
      "lists/student-resources-msum",
      "lists/moorhead-campus-weekend",
      "resources/domestic-violence-fargo",
      "for-students",
    ],
    faqs: [
      {
        q: "Is Concordia Public Safety the same as MSUM Public Safety?",
        a: "No. Different campuses, different numbers. 911 for both in an emergency.",
      },
      {
        q: "Can I meet a helper in a residence hall?",
        a: "Meet at Knutson or another public place. Halls have their own guest rules.",
      },
    ],
  }),

  page({
    slug: "lists/late-night-fargo",
    kind: "list",
    title: "Late night in Fargo",
    description:
      "Late-night Fargo: Broadway, ramps, campus libraries, MATBUS hours, walks to the car, and when to call police instead of a neighbor.",
    h1: "Late night in Fargo, with the last bus in mind",
    eyebrow: "Fargo",
    lead: "The lights on Broadway are not a 24-hour city. Plan the last mile before the last song.",
    priority: 0.6,
    keywords: ["late night Fargo", "Fargo nightlife", "downtown Fargo late"],
    geo: { name: "Downtown Fargo", type: "Neighborhood", city: "Fargo", state: "ND" },
    sections: [
      {
        heading: "1. Broadway is the strip",
        body: [
          "Named, walkable, public. Meet at a doorway. Fargo Police if a fight starts. 911 if someone is hurt.",
        ],
      },
      {
        heading: "2. Downtown ramps",
        body: [
          "A fair walk-to-the-car ask. Lobby first, upper deck second. Helper is not a valet.",
        ],
      },
      {
        heading: "3. Campus libraries until they close",
        body: [
          "NDSU, MSUM, Concordia. Then they close. Do not wait in a locked vestibule hoping a stranger is still online.",
        ],
      },
      {
        heading: "4. West Acres is not midnight forever",
        body: [
          "Mall hours are mall hours. A dark far lot after close is a worse meet than a still-open grocery vestibule.",
        ],
      },
      {
        heading: "5. MATBUS is not a night owl by default",
        body: [
          "Fixed routes Monday–Saturday as published. Check matbus.com. Do not request a driver in the app.",
        ],
      },
      {
        heading: "6. Official escorts on campus",
        body: [
          "NDSU, MSUM, Concordia numbers on the safety pages. Use them.",
        ],
      },
      {
        heading: "7. Shows and Ticketmaster Fargo",
        body: [
          "FARGODOME, Scheels Arena, downtown rooms. Listings in the app link out. A ticket is not a ride home.",
        ],
      },
      {
        heading: "8. The hour it stops being a night out",
        body: [
          "Threatened, injured, too drunk to be safe: 911. A helper chat is too slow and the wrong people.",
        ],
      },
    ],
    related: [
      "guides/downtown-fargo-at-night",
      "lists/public-meeting-places-fargo",
      "resources/fargo-police",
      "resources/matbus",
      "lists/things-to-do-in-fargo",
      "guides/how-to-stay-safe",
    ],
    faqs: [
      {
        q: "Can I ask someone to walk me from a bar?",
        a: "Yes as a public, non-emergency ask. Lit doorway. Official police if you are in danger.",
      },
      {
        q: "Does Help Me run late-night shifts?",
        a: "No. Helpers go online when they can. There is no guaranteed 2 a.m. coverage.",
      },
    ],
  }),

  page({
    slug: "lists/study-spots-fargo",
    kind: "list",
    title: "Study spots in Fargo–Moorhead",
    description:
      "Study spots: NDSU and MSUM libraries, Concordia, Fargo Public Library, Memorial Union, downtown coffee — public tables, not a stranger’s apartment.",
    h1: "Study spots you can name without sharing a dorm pin",
    eyebrow: "study",
    lead: "A table with other humans in the room. That is the list. That is also the meeting place.",
    priority: 0.6,
    keywords: ["study spots Fargo", "NDSU library", "Fargo Public Library study"],
    sections: [
      {
        heading: "1. NDSU libraries",
        body: [
          "The main campus study machine. Hours follow NDSU. After close, you are done or you move.",
        ],
      },
      {
        heading: "2. Memorial Union",
        body: [
          "Louder than a silent floor, still public. A good Help Me study-table label.",
        ],
      },
      {
        heading: "3. MSUM library",
        body: [
          "Moorhead campus study ground. Minnesota side. Public Safety if the night feels off.",
        ],
      },
      {
        heading: "4. Concordia library / campus tables",
        body: [
          "Smaller campus, still staffed public space during hours. Knutson as a backup label.",
        ],
      },
      {
        heading: "5. Fargo Public Library — Main",
        body: [
          "Downtown, 101 4th St. N. City hours on fargond.gov. Not a 24-hour reading room.",
        ],
      },
      {
        heading: "6. Carlson Library",
        body: [
          "South Fargo branch. Same system. Good if you live south and the downtown lot is a project.",
        ],
      },
      {
        heading: "7. Northport Library",
        body: [
          "North Broadway. Near NDSU’s world without being on campus.",
        ],
      },
      {
        heading: "8. Downtown coffee, during staffed hours",
        body: [
          "Broadway tables. Buy something. Do not turn a cafe into a free office after they want to close. Meet a study helper here, not at a residence.",
        ],
      },
    ],
    related: [
      "lists/public-meeting-places-fargo",
      "resources/fargo-public-library",
      "guides/meet-in-public-fargo",
      "for-students",
      "lists/student-resources-ndsu",
      "lists/moorhead-campus-weekend",
    ],
    faqs: [
      {
        q: "Can I study at someone’s apartment via Help Me?",
        a: "Meet in public. Apartments fail the meeting-place test.",
      },
      {
        q: "Is a study helper a tutor?",
        a: "No. A neighbor at a table. Hire a tutor through official campus channels if you need instruction.",
      },
    ],
  }),

  page({
    slug: "lists/free-community-help-fargo",
    kind: "list",
    title: "Free community help in Fargo–Moorhead",
    description:
      "Free help in Fargo–Moorhead: 911, 211, campus safety, pantries, libraries, MATBUS student rules, and neighbor help on Help Me — each in its lane.",
    h1: "Free help, with the right door for each problem",
    eyebrow: "community",
    lead: "Free is not the same as unofficial. Some of the best help in this metro wears a badge or answers 211.",
    priority: 0.62,
    keywords: ["free help Fargo", "community resources Fargo", "211 Fargo free"],
    sections: [
      {
        heading: "1. 911",
        body: [
          "Free. Both states. Not optional when it is an emergency.",
        ],
      },
      {
        heading: "2. 211 / FirstLink",
        body: [
          "Free referral and listening. 211 or 701-235-7335. myfirstlink.org.",
        ],
      },
      {
        heading: "3. Campus public safety",
        body: [
          "NDSU, MSUM, Concordia escorts and, on some campuses, jumps and unlocks. Official, not a favor.",
        ],
      },
      {
        heading: "4. Food pantries and meal sites",
        body: [
          "Great Plains Food Bank list, Emergency Food Pantry, Dorothy Day, Salvation Army meals. Hours on their pages. 211 if you cannot parse the week.",
        ],
      },
      {
        heading: "5. Fargo Public Library",
        body: [
          "Cards, computers, heat during open hours. fargond.gov.",
        ],
      },
      {
        heading: "6. MATBUS",
        body: [
          "Not always free. Student and youth pass rules are published. Still cheaper than a dead car. matbus.com.",
        ],
      },
      {
        heading: "7. County human services",
        body: [
          "Cass or Clay, depending on the river. Benefits are programs, not charity theater.",
        ],
      },
      {
        heading: "8. Help Me neighbor help",
        body: [
          "Free, not paid gigs. Approved helpers. Everyday asks. Never a shelter, never a crisis line, never police.",
        ],
      },
    ],
    related: [
      "resources",
      "resources/211-north-dakota",
      "resources/food-assistance-fargo",
      "lists/ways-neighbors-help-fargo",
      "resources/fargo-public-library",
      "not-911",
    ],
    faqs: [
      {
        q: "Is Help Me the free version of TaskRabbit?",
        a: "No. It is not a gig marketplace. Helpers are neighbors with a current staff approval.",
      },
      {
        q: "Should I try Help Me before 211?",
        a: "For a jump start, maybe. For food, heat, shelter, or benefits, 211 first.",
      },
    ],
  }),

  page({
    slug: "lists/community-apps-compared",
    kind: "list",
    title: "Community apps compared for Fargo–Moorhead",
    description:
      "Help Me vs Nextdoor, Facebook groups, gig apps, 911, and 211 — what each is for in Fargo–Moorhead, without invented features.",
    h1: "Community apps, compared without the marketing fog",
    eyebrow: "compare",
    lead: "Different tools. One metro. The mistake is using a feed when you need an officer, or an officer when you need jumper cables.",
    priority: 0.66,
    keywords: ["Help Me vs Nextdoor", "Fargo Facebook groups", "community app Fargo"],
    sections: [
      {
        heading: "1. Help Me",
        body: [
          "Fargo–Moorhead community help. Ask in a sentence. Approved helpers, coarse ~500 m area, private chat, public meet. TestFlight, iPhone, iOS 15+. Not 911. Not paid gigs. Not a background-check company.",
        ],
      },
      {
        heading: "2. Nextdoor",
        body: [
          "A neighborhood feed. Broadcasts. Comments. Useful for lost dogs and city notices. Your dead battery does not need a thread.",
        ],
      },
      {
        heading: "3. Facebook groups",
        body: [
          "Buy-sell, campus groups, “is this your car.” Public-ish, noisy, sometimes kind. Not gated helper approval. Not private by default.",
        ],
      },
      {
        heading: "4. Gig marketplaces",
        body: [
          "TaskRabbit and similar exist if you want to pay a stranger as a contractor. Help Me will not pretend to be that. No paycheck from this app.",
        ],
      },
      {
        heading: "5. 911 and city police",
        body: [
          "Danger, crime, medical emergency. Fargo, Moorhead, West Fargo, campus police. The app does not dispatch them.",
        ],
      },
      {
        heading: "6. 211 / FirstLink",
        body: [
          "Food, shelter, heat, referrals, a listening line. Official. Free. Not a map of helpers.",
        ],
      },
      {
        heading: "7. Campus safety apps and escorts",
        body: [
          "NDSU, MSUM, and Concordia run official tools. Use those for official escorts. Help Me is a neighbor.",
        ],
      },
      {
        heading: "8. Group chats",
        body: [
          "Fine for people you already know. A 200-person GroupMe is still an audience. That is the problem Help Me is built around.",
        ],
      },
    ],
    related: ["about", "how-it-works", "not-911", "for-neighbors", "resources/211-north-dakota", "guides/how-to-ask-for-help"],
    faqs: [
      {
        q: "Is Help Me trying to replace Nextdoor?",
        a: "No. It is a request with a gated offer list, not a neighborhood social network.",
      },
      {
        q: "Why not just post in a Facebook group?",
        a: "You can. You will get opinions. Help Me sends the ask to approved helpers who are actually online.",
      },
    ],
  }),

  page({
    slug: "lists/fargo-events-guide",
    kind: "list",
    title: "Fargo–Moorhead events guide",
    description:
      "Where Fargo–Moorhead events come from: NDSU, MSUM, Concordia, M State, West Fargo, Ticketmaster Fargo — attributed in Help Me, never invented.",
    h1: "Fargo–Moorhead events, source by source",
    eyebrow: "events",
    lead: "Six official pipes. One Community tab. The last word is always the link they published.",
    priority: 0.65,
    keywords: ["Fargo events", "NDSU events", "West Fargo calendar"],
    sections: [
      {
        heading: "1. NDSU / MyNDSU",
        body: [
          "Campus life, athletics, lectures. Labeled NDSU in the app.",
        ],
      },
      {
        heading: "2. MSUM campus calendar",
        body: [
          "Minnesota State University Moorhead. Separate school, separate source.",
        ],
      },
      {
        heading: "3. Concordia College calendar",
        body: [
          "Cobber events, still Moorhead, still not MSUM.",
        ],
      },
      {
        heading: "4. M State academic dates",
        body: [
          "Drop dates and closures more than concerts. Still official. Still linked.",
        ],
      },
      {
        heading: "5. West Fargo community calendar",
        body: [
          "A city calendar, not a campus one. westfargo.org remains the home. This is why West Fargo is not treated as a Fargo neighborhood.",
        ],
      },
      {
        heading: "6. Ticketmaster Fargo",
        body: [
          "Regional shows within about 35 miles — FARGODOME, Scheels Arena, and nearby rooms. Credentialed on the server. Not a scrape of random flyers.",
        ],
      },
      {
        heading: "7. How to use the app",
        body: [
          "Home rail for a glance. Community for the full calendar. Filter, search, save, open official page.",
        ],
      },
      {
        heading: "8. How not to use it",
        body: [
          "Do not submit events here. Do not treat a listing as a Help Me meetup. If a feed is down, the product says so.",
        ],
      },
    ],
    related: [
      "events",
      "community",
      "guides/campus-events-fargo-moorhead",
      "lists/fargo-moorhead-campuses",
      "for-campuses",
      "lists/things-to-do-in-fargo",
    ],
    faqs: [
      {
        q: "Can I add a show from this website?",
        a: "No. Publish it on the official calendar we already ingest.",
      },
      {
        q: "Why is a concert missing?",
        a: "It may not be in those sources, or a feed is down. We do not invent a night to fill the rail.",
      },
    ],
  }),

  page({
    slug: "lists/west-fargo-things-to-do",
    kind: "list",
    title: "Things to do in West Fargo",
    description:
      "West Fargo things to do: Sheyenne Street, Veterans Boulevard, The Lights, parks, high-school nights, and the official city calendar.",
    h1: "Things to do in West Fargo, as its own city",
    eyebrow: "West Fargo",
    lead: "Fast growth, long commercial strips, and a calendar Help Me actually pulls. Not a Fargo appendix.",
    priority: 0.6,
    keywords: ["things to do West Fargo", "Sheyenne Street", "West Fargo events"],
    geo: { name: "West Fargo", type: "City", city: "West Fargo", state: "ND" },
    sections: [
      {
        heading: "1. Sheyenne Street",
        body: [
          "The city’s spine. Restaurants, errands, a named public strip. Meet here instead of a porch in The Lights.",
        ],
      },
      {
        heading: "2. Veterans Boulevard",
        body: [
          "Big-box and lots. Jump-start geography. Vestibules over far dark rows.",
        ],
      },
      {
        heading: "3. The Lights and new neighborhoods",
        body: [
          "People live here. That is why public grocery entrances exist. Subdivision names are bad meeting labels.",
        ],
      },
      {
        heading: "4. High-school Friday nights",
        body: [
          "West Fargo, Sheyenne, Horizon. Public events, official school safety. Help Me is not for students to meet strangers after the game.",
        ],
      },
      {
        heading: "5. Parks and trails in daylight",
        body: [
          "City parks. After dark, pick staffed commercial ground. West Fargo Police: 911, 701-515-5500 on westfargond.gov.",
        ],
      },
      {
        heading: "6. Official West Fargo calendar",
        body: [
          "In the app, labeled West Fargo, linked to the city. Community rec, city events, the living list.",
        ],
      },
      {
        heading: "7. West Acres on the edge",
        body: [
          "The mall sits in the west-side gravity well. Indoor January. Still check which city limit you are in if you need police.",
        ],
      },
      {
        heading: "8. Crossing back to Fargo and Moorhead",
        body: [
          "Jobs, Broadway, campuses. One metro, three police departments, two states if you keep driving east.",
        ],
      },
    ],
    related: [
      "cities/west-fargo",
      "guides/west-fargo-community-help",
      "resources/west-fargo-police",
      "lists/things-to-do-in-fargo",
      "lists/fargo-events-guide",
      "lists/parking-lots-where-cars-die-fargo",
    ],
    faqs: [
      {
        q: "Is West Fargo on the Fargo events page?",
        a: "West Fargo has its own city calendar source in Help Me. It also appears in the metro events guide as its own item.",
      },
      {
        q: "Can I meet a helper in The Lights?",
        a: "Meet at a public commercial entrance, not a house. Cul-de-sacs fail the test after dark.",
      },
    ],
  }),

  page({
    slug: "lists/moorhead-campus-weekend",
    kind: "list",
    title: "A Moorhead campus weekend",
    description:
      "Weekend plans for MSUM and Concordia: campus events, Center Avenue, the river, Broadway, study hours, and public meeting places.",
    h1: "A Moorhead campus weekend, without pretending Fargo is the only downtown",
    eyebrow: "Moorhead",
    lead: "Two campuses, one Minnesota city, and a river you will cross for food even if you swore you would not.",
    priority: 0.58,
    keywords: ["MSUM weekend", "Concordia weekend", "Moorhead student weekend"],
    geo: { name: "Moorhead", type: "City", city: "Moorhead", state: "MN" },
    sections: [
      {
        heading: "1. Read both campus calendars",
        body: [
          "MSUM and Concordia listings in Help Me are different sources. Filter. Open the official link. A free campus event beats a vague plan.",
        ],
      },
      {
        heading: "2. Center Avenue in daylight",
        body: [
          "Moorhead downtown. Public. A Saturday meet that does not require a Fargo parking ramp.",
        ],
      },
      {
        heading: "3. Hjemkomst or Gooseberry, then go indoors",
        body: [
          "Visitors like the ship. Students like the park until the wind starts. Night: staffed ground.",
        ],
      },
      {
        heading: "4. Cross to Broadway on purpose",
        body: [
          "It is close. It is North Dakota. 911 still works. Fargo Police if you need an officer there.",
        ],
      },
      {
        heading: "5. Study hours that actually exist",
        body: [
          "Campus libraries and Fargo Public Library. Confirm Sunday hours — several Fargo branches have been closed Sundays in city postings.",
        ],
      },
      {
        heading: "6. A jump-start plan before you need one",
        body: [
          "MSUM Public Safety on campus. A helper in a public lot off campus. Cables in the trunk if you have a trunk.",
        ],
      },
      {
        heading: "7. Official night walks",
        body: [
          "MSUM escorts. Concordia SAFEWalk. Help Me if you want a neighbor and official is not what you are asking for.",
        ],
      },
      {
        heading: "8. Sunday is still Clay County",
        body: [
          "Benefits, food, and city desks do not become Fargo’s because you spent Saturday on Broadway.",
        ],
      },
    ],
    related: [
      "guides/first-week-msum",
      "guides/new-to-concordia",
      "lists/things-to-do-in-moorhead",
      "guides/campus-events-fargo-moorhead",
      "lists/late-night-fargo",
      "resources/msum-safety",
    ],
    faqs: [
      {
        q: "Can Concordia students go to MSUM events?",
        a: "Often as public campus events — the official listing decides. Help Me does not ticket you.",
      },
      {
        q: "Is there a Moorhead-only Help Me?",
        a: "No. One metro app. Moorhead is inside it.",
      },
    ],
  }),

  page({
    slug: "lists/first-week-at-ndsu",
    kind: "list",
    title: "First week at NDSU",
    description:
      "A first-week NDSU checklist: move-in, Memorial Union, University Police, parking lots, MyNDSU events, the river, and how to ask for help.",
    h1: "First week at NDSU, eight things that actually matter",
    eyebrow: "NDSU",
    lead: "You will get lost. That is allowed. Not saving University Police is not a personality.",
    priority: 0.62,
    keywords: ["first week NDSU", "NDSU orientation week", "NDSU freshman week"],
    geo: { name: "North Dakota State University", type: "Campus", city: "Fargo", state: "ND" },
    sections: [
      {
        heading: "1. Official move-in beats a random helper",
        body: [
          "Housing maps, load-in, hall staff. Helpers can take a box from a public lot to a public door. They cannot badge into your floor.",
        ],
      },
      {
        heading: "2. Save 701-231-8998",
        body: [
          "NDSU University Police, 24/7, escorts at that number. 911 for danger.",
        ],
      },
      {
        heading: "3. Learn Memorial Union in daylight",
        body: [
          "Your indoor public default for the next four years of asks.",
        ],
      },
      {
        heading: "4. Student Health is Wallman, 701-231-7331",
        body: [
          "Clinic hours, not an ER. Counseling is Ceres Hall, 701-231-7671.",
        ],
      },
      {
        heading: "5. Parking lots will try you",
        body: [
          "Jump starts in public, lit corners. No residence pin. See the parking-lot listicle if you want the geography.",
        ],
      },
      {
        heading: "6. MyNDSU in the app",
        body: [
          "Official events, attributed. Home rail, then Community. Tap through.",
        ],
      },
      {
        heading: "7. The river is a state line",
        body: [
          "Moorhead is Minnesota. Fun on Saturday. Different police if you need them.",
        ],
      },
      {
        heading: "8. Ask in a sentence when the day stalls",
        body: [
          "Directions, a study table, a jump. TestFlight, iOS 15+. Approved helpers only. Two-hour window. Meet in public.",
        ],
      },
    ],
    related: [
      "guides/new-to-ndsu",
      "guides/move-in-weekend-ndsu",
      "lists/student-resources-ndsu",
      "resources/ndsu-safety",
      "lists/parking-lots-where-cars-die-fargo",
      "for-students",
    ],
    faqs: [
      {
        q: "Do I need a .edu email for Help Me?",
        a: "No. Email or Sign in with Apple. A .edu address does not skip helper review.",
      },
      {
        q: "Is move-in a good time to apply as a helper?",
        a: "Apply when you can wait on a staff decision. Move-in weekend is a busy time to help, not a shortcut around identity review.",
      },
    ],
  }),

  page({
    slug: "lists/parking-lots-where-cars-die-fargo",
    kind: "list",
    title: "Parking lots where cars die in Fargo",
    description:
      "Winter lots that kill batteries: West Acres, NDSU, downtown ramps, 13th & 45th, West Fargo, MSUM. Meet in public — do not share a home pin.",
    h1: "Parking lots where cars die — and where to meet instead of a driveway",
    eyebrow: "winter",
    lead: "January does not pick favorites. It picks lots. Name the lot, stay in public, keep the house out of the chat.",
    priority: 0.66,
    keywords: ["Fargo dead battery", "West Acres jump start", "NDSU parking lot winter"],
    sections: [
      {
        heading: "1. West Acres lots",
        body: [
          "Huge, windy, full of cars that sat through a movie and a meal. Meet at a mall entrance or vestibule. Jump in a busy row. After close, prefer a still-open grocery if you have the choice.",
        ],
        bullets: [
          "Label: West Acres, which entrance.",
          "Do not wander a far row alone waiting on an offer.",
        ],
      },
      {
        heading: "2. NDSU campus lots",
        body: [
          "Night class, then click-click. University Police 701-231-8998 if it is unsafe or you want official campus help. A helper is the neighbor version — Union or a lot entrance as the label.",
        ],
      },
      {
        heading: "3. Downtown Fargo ramps",
        body: [
          "Broadway nights, workdays, winter. Meet in the lobby or at a named ramp. Upper decks get quiet. Exact location still optional. Fargo Police if someone is lurking, not if the battery is merely dead.",
        ],
      },
      {
        heading: "4. 13th Avenue and 45th Street strip",
        body: [
          "Commercial Fargo. Big lots, long cold. Grocery and big-box vestibules are the public default.",
        ],
      },
      {
        heading: "5. West Fargo — Veterans Boulevard and Sheyenne",
        body: [
          "Same winter, different city police. West Fargo Police for anything that is not a neighbor job. Meet at a store door, not a cul-de-sac in The Lights.",
        ],
      },
      {
        heading: "6. MSUM and Concordia lots",
        body: [
          "MSUM Public Safety publishes on-campus jumps (218-477-2449). Concordia: ask Public Safety at 218-299-3123 what they will do. Off the short campus radius, a public lot and a helper.",
        ],
      },
      {
        heading: "7. Downtown Moorhead / Center Avenue lots",
        body: [
          "Minnesota side. Moorhead Police. Same vestibule rule. Do not paste a Fargo lot name onto a Moorhead stall and hope matching understands the poetry.",
        ],
      },
      {
        heading: "8. The lot that is actually your driveway",
        body: [
          "That is the one you should not share as a pin. Drive to a grocery if the car will move. If it will not, wait for a tow or a person you already trust. A first-time helper belongs in public.",
        ],
      },
    ],
    related: [
      "guides/jump-start-in-fargo",
      "guides/winter-help-fargo",
      "guides/meet-in-public-fargo",
      "lists/public-meeting-places-fargo",
      "lists/winter-student-survival-fargo",
      "guides/location-privacy",
    ],
    faqs: [
      {
        q: "Will a helper come to my house if the car is in the driveway?",
        a: "Meet in public. If the car cannot move, a tow or someone you already know is the safer tool than a first match at a home pin.",
      },
      {
        q: "Is this a list of official tow companies?",
        a: "No. It is geography. For a tow, call a shop. For danger in a lot, 911.",
      },
    ],
  }),

  page({
    slug: "lists/emergency-numbers-fargo-moorhead",
    kind: "list",
    title: "Emergency and help numbers in Fargo–Moorhead",
    description:
      "911, 988, 511, and 211 across North Dakota and Minnesota, plus what each one is actually for. The list to save before you need it.",
    h1: "The numbers worth knowing before you need them",
    eyebrow: "reference",
    lead: "Four short numbers cover almost everything, and knowing which is which saves the worst ten minutes of someone’s year.",
    answer:
      "In Fargo–Moorhead: 911 for danger, injury, fire, or a crime in progress on both sides of the river. 988 for a suicide or mental-health crisis, by call or text. 211 for food, housing, utilities, and referral. 511 for road conditions and closures, run separately by North Dakota and Minnesota.",
    priority: 0.75,
    listItems: [
      { name: "911 — emergencies", description: "Danger, injury, fire, or a crime in progress. Works in Fargo, West Fargo, Cass County, Moorhead, Dilworth, and Clay County. Stay on the line and give a location a dispatcher can use.", href: "/resources/fargo-emergency" },
      { name: "988 — suicide and crisis lifeline", description: "Call or text for a mental-health or substance-use crisis, or when you are worried about someone else. Veterans press 1.", href: "/glossary/988-crisis-line" },
      { name: "211 — information and referral", description: "Free and confidential help finding food, housing, utility assistance, and health services. North Dakota and Minnesota operate separate services.", href: "/glossary/211-referral" },
      { name: "511 — road conditions", description: "State traveler information for closures and no-travel advisories. Check the state whose roads you are driving before a winter trip.", href: "/glossary/511-road-conditions" },
      { name: "City police non-emergency", description: "Fargo, West Fargo, and Moorhead each run their own department and non-emergency line for reports that are not in progress.", href: "/resources/fargo-police" },
      { name: "Campus public safety", description: "NDSU, MSUM, and Concordia each have their own public safety office for incidents on campus property.", href: "/resources/ndsu-safety" },
    ],
    keywords: ["Fargo emergency numbers", "988 Fargo", "211 North Dakota", "Moorhead police non emergency"],
    sections: [
      {
        heading: "Save them now, not later",
        body: [
          "The moment you need one of these is the moment you are least able to research it. Put them in your phone tonight, and put roadside assistance in there too while you are at it.",
        ],
      },
      {
        heading: "Where Help Me sits",
        body: [
          "Nowhere on this list. Help Me is everyday, non-emergency neighbor help. If your situation belongs to any number above, use the number. That is the entire point of publishing this page on a help app’s website.",
        ],
      },
    ],
    related: ["resources", "not-911", "resources/fargo-emergency", "resources/211-north-dakota", "resources/mental-health-fargo", "questions/is-help-me-911"],
    faqs: [
      {
        q: "Does 911 work the same in both states?",
        a: "Yes. 911 works on both sides of the Red River. Almost every other service follows the state and county you are in.",
      },
      {
        q: "What if I am not sure it is an emergency?",
        a: "Call 911 anyway. Dispatchers would rather sort it out than lose time.",
      },
    ],
  }),

  page({
    slug: "lists/safe-meeting-spots-moorhead",
    kind: "list",
    title: "Public meeting spots in Moorhead",
    description:
      "Lit, public, easy-to-name places to meet someone in Moorhead, Minnesota — campus buildings, the library, busy lots, and the police department lobby.",
    h1: "Where to meet someone in Moorhead",
    eyebrow: "safety",
    lead: "The Minnesota side has plenty of good options, and picking one in advance takes ten seconds.",
    answer:
      "Good Moorhead meeting spots are public, lit, and easy to describe: the MSUM Comstock Memorial Union, Concordia’s Knutson Campus Center, the Moorhead Public Library during open hours, grocery and big-box entrances along the main corridors, and the Moorhead Police Department lobby. Confirm hours before relying on any of them at night.",
    priority: 0.65,
    listItems: [
      { name: "Comstock Memorial Union, MSUM", description: "Central campus building with people around during open hours. A precise, findable landmark for anyone meeting near MSUM.", href: "/campuses/msum" },
      { name: "Knutson Campus Center, Concordia", description: "The natural meeting point on the Concordia campus, and easy to name without ambiguity.", href: "/campuses/concordia" },
      { name: "Moorhead Public Library", description: "Public, staffed, and warm during open hours. Check current hours before planning an evening meet.", href: "/resources/fargo-public-library" },
      { name: "Grocery and big-box entrances", description: "Entrances along Moorhead’s main retail corridors are lit, busy, and unmistakable on a map.", href: "/guides/how-to-find-a-safe-meeting-spot" },
      { name: "Moorhead Police Department lobby", description: "A public building nobody will think it strange to meet outside. Free, and it costs you nothing to choose it.", href: "/resources/moorhead-police" },
      { name: "Downtown Moorhead near the bridges", description: "Busy during the day and close to the Fargo side if one of you is crossing the river.", href: "/neighborhoods/downtown-moorhead" },
    ],
    keywords: ["safe meeting spot Moorhead", "public place Moorhead", "MSUM meeting point"],
    sections: [
      {
        heading: "Pick for the hour",
        body: [
          "A spot that is busy at noon can be deserted at eleven. Campus buildings lock, libraries close, and retail lots empty. Choose the place that is populated at the time you are actually meeting, not the one that felt right when you typed the request.",
        ],
      },
      {
        heading: "Winter changes the answer",
        body: [
          "At twenty below, an outdoor spot is a bad plan for both of you. Somewhere with a heated entry keeps it short and civil, and the safety logic is unchanged.",
        ],
      },
    ],
    related: ["lists/public-meeting-places-fargo", "guides/how-to-find-a-safe-meeting-spot", "questions/where-should-i-meet-a-helper", "cities/moorhead", "campuses/msum", "safety"],
    faqs: [
      {
        q: "Is meeting at a police station overkill?",
        a: "No. It is a public building, it is free, and nobody there will find it strange.",
      },
      {
        q: "Can I meet at my apartment?",
        a: "Public by default is the standard here. A lobby or a doorway is a normal stopping point.",
      },
    ],
  }),

  page({
    slug: "lists/things-to-do-in-winter-fargo",
    kind: "list",
    title: "Things to do in a Fargo–Moorhead winter",
    description:
      "Five months is a long time to hide indoors. Indoor and outdoor options across Fargo, Moorhead, and West Fargo when it is genuinely cold.",
    h1: "What to actually do here between November and March",
    eyebrow: "local",
    lead: "The people who like it here in winter are the ones who stopped waiting for it to end.",
    answer:
      "A Fargo–Moorhead winter works better with a plan: campus and community events, downtown Fargo’s indoor culture, the library systems, skating and sledding on cold-but-clear days, and the campus event calendars that run all season. Check hours and cancellations at the source, since weather closes things on short notice.",
    priority: 0.65,
    listItems: [
      { name: "Campus events at four institutions", description: "NDSU, MSUM, Concordia, and M State all run public events through winter — lectures, concerts, games. Listings come from their official calendars.", href: "/events" },
      { name: "Downtown Fargo indoors", description: "Broadway’s restaurants, shops, and the theater district are built for a season when standing outside is not the plan.", href: "/neighborhoods/downtown-fargo" },
      { name: "Public libraries", description: "Fargo and Moorhead library systems are warm, free, and open to everyone, with programming through the winter.", href: "/resources/fargo-public-library" },
      { name: "Sledding and skating on clear days", description: "City parks in Fargo, West Fargo, and Moorhead maintain seasonal winter facilities. Conditions and hours come from the parks departments.", href: "/cities/fargo" },
      { name: "Fargodome events", description: "Concerts and games on the north side. Expect traffic and full lots for hours around a big event.", href: "/seasons/game-day-fargo" },
      { name: "A trail walk on a still day", description: "The Red River trail system is quiet and genuinely beautiful when the wind stops. Dress for standing still, not for walking.", href: "/lists/walking-trails-fargo-moorhead" },
    ],
    keywords: ["winter things to do Fargo", "Moorhead winter activities", "Fargo January events"],
    sections: [
      {
        heading: "Plan around wind, not temperature",
        body: [
          "A still ten-below afternoon is pleasant. A twenty-above day with a hard wind is miserable. Locals check the wind chill and then decide, which is why plans here get made the morning of rather than a week out.",
        ],
      },
      {
        heading: "Confirm before you drive",
        body: [
          "Weather cancels things on short notice here and campus event details change. Every event listing in Help Me links back to the official source that published it, and that source is the authority.",
        ],
      },
    ],
    related: ["seasons/winter-in-fargo-moorhead", "lists/things-to-do-in-fargo", "lists/things-to-do-in-moorhead", "events", "for-people-new-to-winter", "lists/free-things-to-do-fargo-moorhead"],
    faqs: [
      {
        q: "Is anything open when it is thirty below?",
        a: "Most of the metro keeps running. Schools and campuses may close, and outdoor facilities shut down. Check the specific place.",
      },
      {
        q: "Where do event listings come from?",
        a: "NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo, always linked back to the source.",
      },
    ],
  }),

  page({
    slug: "lists/free-things-to-do-fargo-moorhead",
    kind: "list",
    title: "Free things to do in Fargo–Moorhead",
    description:
      "Free options across Fargo, Moorhead, and West Fargo: libraries, parks, trails, campus events, downtown, and public spaces that cost nothing to enjoy.",
    h1: "Free, and actually worth doing",
    eyebrow: "local",
    lead: "A metro with four campuses and a long river has more free options than its reputation suggests.",
    answer:
      "Free things to do in Fargo–Moorhead include the Fargo and Moorhead public library systems, the Red River trail network, city parks in all three cities, many public campus events at NDSU, MSUM, Concordia, and M State, and downtown Fargo on a summer evening. Confirm hours and any ticketing at the official source.",
    priority: 0.65,
    listItems: [
      { name: "Public libraries", description: "Fargo and Moorhead library systems: free cards, free programming, warm buildings, and staff who know the metro.", href: "/resources/fargo-public-library" },
      { name: "The Red River trail system", description: "Paved trails running along the river through both cities. Free, long, and the best thing about a summer evening here.", href: "/lists/walking-trails-fargo-moorhead" },
      { name: "City parks", description: "Fargo, West Fargo, and Moorhead all maintain substantial park systems with playgrounds, shelters, and seasonal facilities.", href: "/cities/west-fargo" },
      { name: "Public campus events", description: "Lectures, exhibitions, recitals, and open events at four campuses. Listings come from the official campus calendars with attribution.", href: "/events" },
      { name: "Downtown Fargo on a summer evening", description: "Broadway, the plaza, and the surrounding blocks cost nothing to walk. Events there are frequent and often free.", href: "/neighborhoods/downtown-fargo" },
      { name: "Community help itself", description: "Asking a neighbor for a jump start or directions is free, because Help Me has no payments of any kind.", href: "/questions/is-help-me-free" },
    ],
    keywords: ["free things to do Fargo", "free activities Moorhead", "cheap Fargo weekend"],
    sections: [
      {
        heading: "Where the free stuff hides",
        body: [
          "Campus calendars, mostly. Four institutions in one metro produce a steady stream of public events that most residents never notice because they assume campus events are for students. Many are not.",
        ],
      },
      {
        heading: "A note on hours",
        body: [
          "Library and park hours change seasonally, and outdoor facilities close for winter. Confirm with the city or the campus before making the drive.",
        ],
      },
    ],
    related: ["lists/things-to-do-in-fargo", "lists/things-to-do-in-moorhead", "lists/west-fargo-things-to-do", "events", "lists/things-to-do-in-winter-fargo", "for-newcomers"],
    faqs: [
      {
        q: "Are campus events open to the public?",
        a: "Many are; some are not. The campus calendar entry says which, and it is the authority.",
      },
      {
        q: "Does Help Me host events?",
        a: "No. It links official calendars with attribution and never invents a listing.",
      },
    ],
  }),

  page({
    slug: "lists/walking-trails-fargo-moorhead",
    kind: "list",
    title: "Walking and biking trails in Fargo–Moorhead",
    description:
      "The Red River trail network and the parks it connects across Fargo, Moorhead, and West Fargo — plus what changes in winter and during high water.",
    h1: "Where to walk in this metro",
    eyebrow: "local",
    lead: "The river the cities were built around turns out to be the best-designed thing in either of them.",
    answer:
      "Fargo–Moorhead’s trail network runs along both sides of the Red River, linking city parks across Fargo, Moorhead, and West Fargo into a long paved system used year-round. Sections close during spring high water and some are unplowed in winter, so check with the city parks department before planning a long route.",
    priority: 0.65,
    listItems: [
      { name: "The Red River corridor trails", description: "The spine of the system, running along both banks and connecting parks in Fargo and Moorhead. Long, flat, and mostly paved.", href: "/glossary/red-river-of-the-north" },
      { name: "Lindenwood Park, Fargo", description: "A large riverside park on the Fargo side with trail access and open space. Seasonal facilities and hours come from Fargo Parks.", href: "/cities/fargo" },
      { name: "Gooseberry Mound Park, Moorhead", description: "Riverside park on the Minnesota side, connected into the trail system across the bridge from Fargo.", href: "/cities/moorhead" },
      { name: "MB Johnson Park, north Fargo", description: "North-end river park with trail access, near the north Fargo neighborhoods.", href: "/neighborhoods/north-fargo" },
      { name: "West Fargo park trails", description: "West Fargo’s own park and trail system serves the newer neighborhoods on the west side of the metro.", href: "/cities/west-fargo" },
      { name: "Campus-adjacent walking routes", description: "The streets and paths around NDSU, MSUM, and Concordia are walkable and well-used during the school year.", href: "/campuses" },
    ],
    keywords: ["Fargo trails", "Moorhead bike trail", "Red River walking path"],
    sections: [
      {
        heading: "Spring closes sections",
        body: [
          "Riverside trails are the first thing under water in a high-water spring. Closures are posted by the cities and they are not suggestions — flooded trail sections hide washouts and debris.",
        ],
      },
      {
        heading: "Winter use",
        body: [
          "Some sections are maintained in winter and some are not. Walking a river trail alone in the dark in deep cold is a different proposition than walking it in July. Tell somebody your route.",
        ],
      },
    ],
    related: ["help/bike-help", "lists/free-things-to-do-fargo-moorhead", "seasons/spring-thaw-and-flooding", "cities/fargo", "cities/moorhead", "for-people-without-a-car"],
    faqs: [
      {
        q: "Are the trails plowed in winter?",
        a: "Some sections are maintained and some are not. Check with the city parks department for current conditions.",
      },
      {
        q: "Can I bike between Fargo and Moorhead?",
        a: "Yes — the bridges and trail connections make crossing straightforward in good conditions.",
      },
    ],
  }),

  page({
    slug: "lists/winter-driving-mistakes-newcomers-make",
    kind: "list",
    title: "Winter driving mistakes newcomers make in Fargo–Moorhead",
    description:
      "The specific errors that catch people in their first North Dakota winter, from clearing a porthole in the windshield to trusting all-wheel drive on ice.",
    h1: "Eight ways a first winter goes wrong",
    eyebrow: "how-to",
    lead: "None of these are stupidity. They are all reasonable habits from somewhere with a milder climate.",
    answer:
      "The common first-winter mistakes here are scraping only a small porthole, trusting all-wheel drive to help on ice, running the fuel tank low, ignoring wind chill when dressing, leaving the jump pack uncharged, driving too fast for a plowed-but-icy road, parking against snow-emergency rules, and heading out of the metro without checking 511.",
    priority: 0.7,
    listItems: [
      { name: "Clearing only a porthole", description: "Clear the whole windshield, the rear glass, mirrors, lights, and the roof. Roof snow becomes the car behind you’s windshield.", href: "/help/frozen-windshield" },
      { name: "Trusting all-wheel drive on ice", description: "AWD helps you accelerate. It does nothing for stopping or turning on ice. Braking distance is the thing that surprises people.", href: "/seasons/winter-in-fargo-moorhead" },
      { name: "Running the tank low", description: "Keep it above half. Fuel is your heat source if you end up waiting for a tow.", href: "/guides/what-to-keep-in-your-car-in-winter" },
      { name: "Dressing for the thermometer", description: "Wind chill is what determines frostbite risk, and it is often far below the air temperature here.", href: "/glossary/wind-chill" },
      { name: "An uncharged jump pack", description: "A pack that has been flat in the trunk since March will not save you in January. Charge it in the fall.", href: "/glossary/jump-pack" },
      { name: "Driving a plowed road like a dry one", description: "Plowed does not mean clear. Packed snow polishes into ice, especially at intersections where everyone brakes.", href: "/help/car-stuck-in-snow" },
      { name: "Ignoring snow emergency parking rules", description: "Fargo, West Fargo, and Moorhead each declare their own, and each will tow. Sign up for your city’s alerts.", href: "/glossary/snow-emergency" },
      { name: "Leaving the metro without checking 511", description: "Rural roads and interstates close in this region, and no-travel advisories are real. Check before you drive.", href: "/glossary/511-road-conditions" },
    ],
    keywords: ["winter driving mistakes", "first winter North Dakota", "driving on ice Fargo"],
    sections: [
      {
        heading: "The pattern behind them",
        body: [
          "Almost every mistake on this list is a habit that works fine in a milder place. Nothing here is about competence; it is about a climate that punishes assumptions on a schedule.",
        ],
      },
      {
        heading: "When it goes wrong anyway",
        body: [
          "In a lot or a driveway, a neighbor with cables or a shovel is a real answer. On a highway, in a ditch, or if you are getting cold, it is a tow service and 911. That line does not move.",
        ],
      },
    ],
    related: ["for-people-new-to-winter", "guides/what-to-keep-in-your-car-in-winter", "seasons/winter-in-fargo-moorhead", "help/winter-car-help", "guides/what-to-do-if-your-car-wont-start", "seasons/blizzard-day"],
    faqs: [
      {
        q: "Are snow tires worth it here?",
        a: "Many locals run all-seasons and manage. Dedicated winter tires make a real difference in stopping distance on ice.",
      },
      {
        q: "How do I practice?",
        a: "An empty, legal lot after a snowfall teaches you more about your car’s braking than any article can.",
      },
    ],
  }),

  page({
    slug: "lists/questions-before-meeting-a-stranger",
    kind: "list",
    title: "Questions to ask yourself before meeting a stranger",
    description:
      "A short pre-meet checklist for anyone using a community help app: place, hour, who knows, what you are sharing, and what your exit is.",
    h1: "Six questions before you meet anyone",
    eyebrow: "safety",
    lead: "None of these take more than a few seconds, and running through them once becomes a habit you never have to think about again.",
    answer:
      "Before meeting someone from a help app, ask: is the place public and lit at this hour, does someone else know where I am going, am I sharing more location than I need to, is the conversation still in the app, do I have a way to leave, and does anything feel off. Any single no is reason enough to change the plan.",
    priority: 0.7,
    listItems: [
      { name: "Is this place public and lit right now?", description: "Not at noon — right now. Lots empty, buildings lock, and a good spot at three is a bad spot at eleven.", href: "/guides/how-to-find-a-safe-meeting-spot" },
      { name: "Does anyone else know where I am?", description: "One text to one person. Where, who, and when you expect to be done. It costs nothing.", href: "/guides/how-to-stay-safe" },
      { name: "Am I sharing more location than I need to?", description: "Approximate area is the default and it is usually enough. Precise sharing is opt-in and ends with the request.", href: "/questions/who-can-see-my-location" },
      { name: "Is the conversation still in the app?", description: "In-app chat keeps report and block meaningful and keeps your phone number yours.", href: "/questions/does-help-me-share-my-phone-number" },
      { name: "Do I have a way to end this?", description: "Report and block are one tap away, and leaving early needs no explanation and no apology.", href: "/questions/can-i-block-someone" },
      { name: "Does anything feel off?", description: "That is sufficient. You do not owe anyone the benefit of the doubt at your own expense, and 911 exists if it is more than a feeling.", href: "/not-911" },
    ],
    keywords: ["meeting a stranger safely", "safety checklist app", "help app safety questions"],
    sections: [
      {
        heading: "Why a list and not advice",
        body: [
          "Advice evaporates under social pressure. A checklist survives it, because you ran it before you were standing in front of anyone and before politeness started arguing with your judgment.",
        ],
      },
      {
        heading: "What the app does on its side",
        body: [
          "Only helpers with a current staff-reviewed approval can accept. Live requests show a coarse area rather than a pin. Chat is private between two people. Report and block are always present. That is a real floor, and it is not a substitute for the six questions above.",
        ],
      },
    ],
    related: ["safety", "guides/how-to-stay-safe", "questions/is-help-me-safe", "questions/where-should-i-meet-a-helper", "glossary/meet-in-public", "guides/how-to-report-or-block"],
    faqs: [
      {
        q: "Is it rude to leave early?",
        a: "No. Ending an interaction is always allowed, and nobody is entitled to an explanation.",
      },
      {
        q: "Should I bring someone?",
        a: "Always fine. Nothing about this expects you to show up alone.",
      },
    ],
  }),

  page({
    slug: "lists/most-common-help-requests-fargo",
    kind: "list",
    title: "The most common everyday help requests in Fargo–Moorhead",
    description:
      "What people actually ask for in this metro: jump starts, snow, lifting, directions, walks to the car, printing, and study company.",
    h1: "What people actually ask for here",
    eyebrow: "help topics",
    lead: "The list is unglamorous, which is exactly why it works. Nobody needs a hero. They need ten minutes.",
    answer:
      "The most common everyday help requests in Fargo–Moorhead are jump starts, snow and berm clearing, heavy lifting during move-in and move-out, directions and finding a campus building, a walk to a car after dark, printing before a deadline, and study company. All are small, public, and finishable in one meeting.",
    priority: 0.7,
    listItems: [
      { name: "Jump start", description: "The metro’s signature request. Cold kills marginal batteries in clusters, usually in a store or campus lot.", href: "/help/jump-start" },
      { name: "Snow and berm clearing", description: "The plow leaves a wall, and clearing it is heavy work that not everyone should be doing alone.", href: "/help/snow-help" },
      { name: "Heavy lifting", description: "Move-in and move-out weeks concentrate this into a few days each August and May.", href: "/help/heavy-lifting" },
      { name: "Directions and finding a building", description: "Four campuses, buildings that share names, and lots that are not where anyone assumes.", href: "/help/directions" },
      { name: "A walk to the car", description: "Late shifts, late library sessions, and long walks across emptied lots after an event.", href: "/help/walk-to-car" },
      { name: "Printing before a deadline", description: "The printer fails at the worst possible hour, reliably, every finals week.", href: "/help/printing" },
      { name: "Study company", description: "Someone across the table so you actually stay. Not tutoring — campus centers do that better and for free.", href: "/help/study-buddy" },
    ],
    keywords: ["common help requests", "Fargo help topics", "what people ask for help"],
    sections: [
      {
        heading: "Why they are all small",
        body: [
          "Because small is what a stranger can actually do well. A ten-minute favor asks nothing of anyone’s week, needs no license, and ends cleanly with both people going back to their day. Everything larger than that belongs to friends, professionals, or official services.",
        ],
      },
      {
        heading: "The seasonal shape",
        body: [
          "Batteries and snow from November through March. Boxes in August and May. Walks to cars year-round, more in winter when it is dark at five. The metro’s help calendar is legible enough to plan around.",
        ],
      },
    ],
    related: ["help", "questions/what-can-i-ask-for", "seasons", "guides/how-to-ask-for-help", "questions/what-should-i-not-ask-for", "lists/ways-neighbors-help-fargo"],
    faqs: [
      {
        q: "Is there a most common time of day?",
        a: "Evenings, especially in winter when it is dark early and lots empty out. Overnight coverage is genuinely thin.",
      },
      {
        q: "What is never on this list?",
        a: "Emergencies, paid work, licensed trades, rides, and childcare. Those are not what a neighbor app is for.",
      },
    ],
  }),
];
