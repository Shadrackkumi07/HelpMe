import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const GUIDE_PAGES: SeoPage[] = [
  page({
    slug: "guides",
    kind: "hub",
    title: "Help Me guides for Fargo–Moorhead",
    description:
      "Practical how-tos for Help Me in Fargo–Moorhead: asking for help, becoming a helper, staying safe, winter, campuses, and meeting in public.",
    h1: "Guides for the days that stall",
    eyebrow: "how-to",
    lead: "These are not essays about community. They are the steps: how to ask, how to help, how to meet in public, and when to put the phone down and call 911.",
    priority: 0.8,
    keywords: ["Help Me guides", "how to ask for help Fargo", "Fargo community how-to"],
    sections: [
      {
        heading: "Read the one that matches the hour you are in",
        body: [
          "A jump start at West Acres is not the same problem as a first week at NDSU. A dead battery in January is not a crisis, and a crisis is not a neighbor with jumper cables. Pick the guide for the actual situation.",
          "Every page here describes the iPhone app as it ships: TestFlight, iOS 15 or later, approved helpers only, a coarse area on the map, private chat after someone accepts. Nothing is a paid gig. Nothing dispatches police.",
        ],
      },
      {
        heading: "What these guides will not do",
        body: [
          "They will not invent a background check we do not run. They will not tell you to handle an emergency in the app. They will not pretend Cass County services work in Clay County if you copy-paste a number across the river.",
        ],
        bullets: [
          "Product how-tos: ask, help, report, delete, location",
          "Place how-tos: Fargo, West Fargo, downtown at night, winter",
          "Campus how-tos: NDSU, MSUM, Concordia, M State, move-in",
        ],
      },
    ],
    related: ["how-it-works", "safety", "resources", "lists", "explore", "not-911"],
    faqs: [
      {
        q: "Is a guide the same as asking for help?",
        a: "No. Guides explain. Live requests only exist in the iPhone app, and only approved helpers can accept them.",
      },
      {
        q: "Do I need the app to read these?",
        a: "No. Read them on the web. Create a request from the app when you actually need a neighbor.",
      },
    ],
  }),

  page({
    slug: "guides/how-to-ask-for-help",
    kind: "guide",
    title: "How to ask for help on Help Me",
    description:
      "Post a sentence, not a performance. How to request everyday, non-emergency help in Fargo–Moorhead from approved helpers nearby.",
    h1: "How to ask for help without an audience",
    eyebrow: "how-to",
    lead: "You do not owe a Facebook group a speech. One sentence is enough. Here is the whole path from tap to done.",
    priority: 0.75,
    keywords: ["ask for help Fargo", "Help Me request", "how to request help"],
    sections: [
      {
        heading: "Before you open the map",
        body: [
          "If anyone is in danger, injured, or watching a crime, call 911. Help Me is for the stuck day: a dead battery, a walk to the lot, a printer, a sofa that will not turn the stair, directions to a hall you have never seen.",
          "You need an account — email or Sign in with Apple — and an iPhone on iOS 15 or later. The app is on TestFlight. Only one live request at a time.",
        ],
      },
      {
        heading: "The four taps",
        body: [
          "Open the live map. Choose I need help. Pick a category. Add a sentence if you want one. A public meeting-place label is optional; a category-only request is still readable to a helper.",
        ],
        bullets: [
          "Ask: one sentence is enough. You are not applying for a grant.",
          "Wait: eligible approved helpers nearby may get a short-lived private offer. There is no public feed of your request.",
          "Chat: the first eligible helper to accept opens a private thread. Nobody else is in it.",
          "Meet: public place by default. Exact location is off until you consent after they accept.",
        ],
      },
      {
        heading: "What helpers actually see",
        body: [
          "They see a coarse area of about 500 meters, not your driveway. Matching considers approved helpers who are online, suitable for the category, recently active, and not blocked by either of you. When both people have shared matching location, offers stay within about 10 km of that rounded area.",
          "If nobody accepts within two hours, the request closes. Try again. Do not wait on an app offer if the situation has become an emergency.",
        ],
      },
      {
        heading: "Finish it like a neighbor",
        body: [
          "Meet in public. Do the thing. Both people confirm completion. Exact location sharing ends. You can leave a review. Report or block if anything felt wrong — you do not have to be polite about a bad feeling.",
        ],
      },
    ],
    related: [
      "how-it-works",
      "guides/how-to-stay-safe",
      "guides/meet-in-public-fargo",
      "guides/location-privacy",
      "safety",
      "download",
    ],
    faqs: [
      {
        q: "Can I ask without sharing my location?",
        a: "Yes. No-location requests can still be considered by suitable approved helpers. Approximate area is the usual map view. Exact location is opt-in after someone accepts.",
      },
      {
        q: "Who sees the request?",
        a: "Eligible approved helpers who receive a private offer. Not a timeline. Not people you did not match with.",
      },
      {
        q: "What if nobody accepts?",
        a: "The request closes after two hours. You can post again. There is no guaranteed response time and no paid ETA.",
      },
    ],
  }),

  page({
    slug: "guides/how-to-become-a-helper",
    kind: "guide",
    title: "How to become a Help Me helper",
    description:
      "Apply in the app, submit identity evidence, wait on a staff decision. Current approval is required before you can help in Fargo–Moorhead.",
    h1: "How to become a helper",
    eyebrow: "how-to",
    lead: "Anyone can join Help Me. Not everyone can help. Putting your name on it is the point.",
    priority: 0.75,
    keywords: ["become a helper", "Help Me helper application", "volunteer Fargo"],
    sections: [
      {
        heading: "This is not a side hustle listing",
        body: [
          "Help Me is not TaskRabbit. There is no paycheck from the app, no hourly rate, no customer you invoice. If you already jump strangers’ cars and walk people to the ramp, this is how the person who needs that finds you without shouting it down Broadway.",
        ],
      },
      {
        heading: "Apply from Account",
        body: [
          "The application lives inside the iPhone app. There is no web form on this site and no shortcut around staff review. It asks what you can actually help with, when you tend to be around, why you want to, what you have done before, and for identity evidence.",
        ],
        bullets: [
          "Submit identity evidence from the app — a staff member reviews it.",
          "Pending, approved, rejected, expired, and resubmission are real states.",
          "An old badge grants nothing. Approval has to be current.",
          "This is not a criminal background check, and we do not advertise one.",
        ],
      },
      {
        heading: "After a person says yes",
        body: [
          "You choose when to go online. You can use your location so offers are genuinely nearby. Going offline, leaving the app, accepting a request, or going quiet removes you from active matching.",
          "When an offer arrives, read it. Accept only if you can actually show up in public. Chat is private. Meet where other people can see you. Mark it done. You are a neighbor, not an on-duty employee.",
        ],
      },
      {
        heading: "What you are allowed to decline",
        body: [
          "Anything that sounds like an emergency — tell them to call 911. Anything that wants to happen in a dark driveway instead of a grocery vestibule. Anything that asks you to be a mechanic, a locksmith, a counselor, or a cop. Help with the jumper cables. Leave the rest to people whose job it is.",
        ],
      },
    ],
    related: ["helpers", "for-helpers", "guides/how-to-stay-safe", "safety", "guides/how-to-ask-for-help", "download"],
    faqs: [
      {
        q: "Can I apply from this website?",
        a: "No. Apply from Account in the iPhone app. A staff member reviews identity evidence there.",
      },
      {
        q: "Does a .edu email skip review?",
        a: "No. A campus address is not a helper badge. Everyone waits on a current staff decision.",
      },
      {
        q: "Can I help only on my campus?",
        a: "You choose categories and when you are online. Nearby matching uses recent activity and, when you allow it, location. It is not a campus-only shift board.",
      },
    ],
  }),

  page({
    slug: "guides/how-to-stay-safe",
    kind: "guide",
    title: "How to stay safe on Help Me",
    description:
      "Meet in public, keep exact location off until you consent, and use report and block. Help Me is not 911 — call official help first if you are in danger.",
    h1: "How to stay safe while asking for a hand",
    eyebrow: "safety",
    lead: "Asking for help should never cost you your privacy, and it should never be the tool you reach for in a crisis.",
    priority: 0.75,
    keywords: ["Help Me safety", "meet in public Fargo", "community help safety"],
    sections: [
      {
        heading: "The order of operations",
        body: [
          "Danger, injury, fire, a crime in progress: 911. Campus emergency: campus police or public safety for that school, or 911. Everything else on this page assumes nobody is in danger.",
        ],
      },
      {
        heading: "Keep the map honest",
        body: [
          "Live help shows as an approximate area of about 500 meters. Precise location moves only after a helper is accepted and you say yes, and only to that person. You can stop sharing. Completion ends exact sharing automatically.",
          "On supported iPhones, precision finding exists only when both people opt in. You never owe anyone your house pin. A grocery vestibule is a complete sentence.",
        ],
        bullets: [
          "Meet in public, lit, populated ground.",
          "Tell a friend where you are going.",
          "Keep report and block one tap away — they sit in every request.",
          "Leave the moment something feels wrong. Politeness is not a safety plan.",
        ],
      },
      {
        heading: "Who is allowed to help",
        body: [
          "Only people with a current staff-reviewed approval can see or accept requests. That is identity evidence plus a human decision. It is not a criminal background check. Treat a helper as a neighbor who was willing to stop, not as a vetted contractor.",
        ],
      },
      {
        heading: "If it goes sideways",
        body: [
          "Walk away. Call 911 if you need official response. In the app, report and block. Staff can act on reports. Email support@helpme.fyi if you need a person on our side after the fact — a person reads it.",
        ],
      },
    ],
    related: [
      "safety",
      "not-911",
      "guides/meet-in-public-fargo",
      "guides/location-privacy",
      "guides/how-to-report-or-block",
      "resources/fargo-emergency",
    ],
    faqs: [
      {
        q: "Can a helper see my house from the map?",
        a: "Not from the open request. They see a coarse area. Exact location is off until you consent after they accept, and you can meet at a public place instead.",
      },
      {
        q: "Does helper approval mean they were background-checked?",
        a: "No. Staff review identity evidence. We do not run or advertise a criminal background check.",
      },
      {
        q: "Should I stay if I feel uneasy?",
        a: "No. Leave. Official help first if you are in danger. Report and block in the app when you are safe.",
      },
    ],
  }),

  page({
    slug: "guides/jump-start-in-fargo",
    kind: "guide",
    title: "How to get a jump start in Fargo",
    description:
      "Dead battery in a Fargo lot? Ask an approved helper, meet in public, and know when you need a shop or tow instead of a neighbor.",
    h1: "How to get a jump start in Fargo without a group-chat debate",
    eyebrow: "how-to",
    lead: "January batteries do not care about your syllabus. Here is how to ask for cables without posting your exact stall to a thousand strangers.",
    priority: 0.7,
    keywords: ["jump start Fargo", "dead battery Fargo", "jumper cables Fargo ND"],
    sections: [
      {
        heading: "First, decide if this is still a neighbor job",
        body: [
          "A click-click in a public lot is a classic Help Me ask. A smell of burning, a cracked case, a car that died in a traffic lane, or anyone feeling unwell in the cold is not. Move out of traffic if you can. Call for a tow or 911 if the situation is unsafe.",
        ],
      },
      {
        heading: "Ask from the lot you are actually in",
        body: [
          "Open Help Me, choose the jump-start category, and say which public place you are at — West Acres, an NDSU lot, a downtown ramp, a Hornbacher’s vestibule. Do not drop a pin on your house. Helpers see a coarse area until you consent to more after they accept.",
        ],
        bullets: [
          "Meet at the car only if the lot is public, lit, and other people can see you.",
          "Otherwise walk to a vestibule or entrance and walk back together.",
          "You provide the cables if you have them; do not assume a helper is a rolling AutoZone.",
          "A helper is not a mechanic. If it will not start after a clean jump, call a shop or a tow.",
        ],
      },
      {
        heading: "The cold-weather version",
        body: [
          "Fargo winters kill batteries that were merely tired in October. Park facing out when you can. Keep a charger or cables if this keeps happening. MATBUS still runs Monday through Saturday when a car is a brick — matbus.com has the current map.",
          "West Acres, the 13th Avenue / 45th Street strip, downtown ramps, and campus lots are where this ask actually happens. See the parking-lot listicle if you want the geography, not the steps.",
        ],
      },
      {
        heading: "What this is not",
        body: [
          "It is not a free tow network. It is not lockout service. It is not NDSU Police, MSUM Public Safety, or a garage. Campus public safety on some campuses will jump cars on campus — search the campus name plus jump start and use that official number when you are on their ground.",
        ],
      },
    ],
    related: [
      "lists/parking-lots-where-cars-die-fargo",
      "guides/winter-help-fargo",
      "guides/meet-in-public-fargo",
      "cities/fargo",
      "how-it-works",
      "resources/matbus",
    ],
    faqs: [
      {
        q: "Will a helper come to my driveway?",
        a: "Meet in public. You choose the label. Exact location is optional after they accept. A dark driveway is a bad default.",
      },
      {
        q: "Does Help Me guarantee a jump?",
        a: "No. Offers go to approved helpers who are online. There is no dispatch and no paid ETA. If nobody accepts in two hours, the request closes.",
      },
      {
        q: "Can campus safety jump me instead?",
        a: "Sometimes, on campus. Search NDSU Police, MSUM Public Safety, or Concordia Public Safety for their official vehicle help. Use that when you are on their campus.",
      },
    ],
  }),

  page({
    slug: "guides/winter-help-fargo",
    kind: "guide",
    title: "Winter help in Fargo–Moorhead",
    description:
      "How to ask for everyday winter help in Fargo, Moorhead, and West Fargo — jump starts, walks to the car, and when cold becomes an emergency.",
    h1: "Winter help, before the wind chill becomes the story",
    eyebrow: "how-to",
    lead: "Winter here is not a metaphor. It is a battery, a parking ramp, and a walk that was fine in September.",
    priority: 0.7,
    keywords: ["winter help Fargo", "Fargo cold weather help", "Fargo-Moorhead winter"],
    sections: [
      {
        heading: "The line between stuck and emergency",
        body: [
          "A dead battery in a lit lot is a neighbor ask. Someone without shelter in a blizzard, a person who cannot feel their hands, a car in a ditch on I-94, a smell of exhaust in a closed garage — that is 911. Do not workshop it in an app.",
          "If you need a bed tonight, skip Help Me. Dial 211 or open the winter-shelter resource page and use official programs. We do not operate a shelter.",
        ],
      },
      {
        heading: "Asks that actually fit January",
        body: [
          "Jump starts in public lots. A walk from the library to the ramp after a night class. Directions when the skyway logic fails a visitor. A pair of hands with a stubborn trunk. None of that needs a feed. All of it needs a public meeting place.",
        ],
        bullets: [
          "Name the public place: West Acres, Memorial Union, a grocery entrance, a downtown ramp lobby.",
          "Keep exact location off until a helper accepts and you consent.",
          "Wear the coat you mock in October. Helpers are neighbors, not a ride service.",
          "If the wait stretches and the cold is winning, go inside. Try again from a vestibule.",
        ],
      },
      {
        heading: "Two states, one winter",
        body: [
          "Fargo and West Fargo sit in Cass County, North Dakota. Moorhead and Dilworth sit in Clay County, Minnesota. 911 works on both banks. Food, housing, and county benefits do not copy-paste. Bookmark the Cass and Clay resource pages now, not during a wind advisory.",
        ],
      },
      {
        heading: "Official winter tools that are not this app",
        body: [
          "MATBUS for when the car is a sculpture. Campus safety escorts on NDSU, MSUM, and Concordia. 211 / FirstLink for heat, shelter, and food. Fargo, Moorhead, and West Fargo police non-emergency through the Red River Regional Dispatch Center when you need an officer and nobody is dying.",
        ],
      },
    ],
    related: [
      "lists/winter-student-survival-fargo",
      "guides/jump-start-in-fargo",
      "resources/winter-shelters-fargo",
      "resources/211-north-dakota",
      "not-911",
      "cities/fargo",
    ],
    faqs: [
      {
        q: "Can I ask someone to warm up my apartment?",
        a: "No. Help Me is not a utility or a landlord. If you have no heat, call 211 and your utility. If someone is in medical danger from cold, call 911.",
      },
      {
        q: "Is a walk to the car okay after dark in winter?",
        a: "Yes as a community ask, in public, with report and block available. Official campus escorts exist too — use those on campus when you want an official officer, not a neighbor.",
      },
    ],
  }),

  page({
    slug: "guides/new-to-fargo",
    kind: "guide",
    title: "New to Fargo: a practical first-week guide",
    description:
      "Moving to Fargo, Moorhead, or West Fargo? Two states, four campuses, winter, and how Help Me fits a city you do not know yet.",
    h1: "New to Fargo, on purpose",
    eyebrow: "how-to",
    lead: "This metro is easy to like and easy to get stuck in — especially in January, especially if your people are eight hours away.",
    priority: 0.7,
    keywords: ["new to Fargo", "moving to Fargo ND", "Fargo newcomer guide"],
    sections: [
      {
        heading: "Learn the river first",
        body: [
          "The Red River is the state line. Fargo and West Fargo are Cass County, North Dakota. Moorhead and Dilworth are Clay County, Minnesota. People cross for class, work, and groceries without thinking — until they need a county office. 911 still works. Other services do not.",
        ],
      },
      {
        heading: "The map you will actually use",
        body: [
          "Downtown Broadway is the walkable strip. West Acres is the big mall on the west side. NDSU sits in north Fargo. MSUM and Concordia sit in Moorhead, minutes apart. M State has a Moorhead campus. West Fargo is its own city, not a Fargo neighborhood — Sheyenne Street, Veterans Boulevard, a city calendar of its own.",
        ],
        bullets: [
          "Save 911, and save 211 for everything that is help but not an ambulance.",
          "Get a library card at Fargo Public Library if you live in Fargo — three buildings, one system.",
          "MATBUS crosses the river. Check matbus.com before you assume a Saturday night bus.",
          "Meet new people in public. Help Me will show a coarse area, not your first apartment.",
        ],
      },
      {
        heading: "Where Help Me fits a newcomer",
        body: [
          "Directions. A jump start. A walk from a lot you cannot yet name. A study table when you do not have a group chat. Official campus and city events in one Community tab, each attributed to NDSU, MSUM, Concordia, M State, West Fargo, or Ticketmaster Fargo.",
          "It will not replace Fargo Police, a landlord, a bank, or your first winter coat. Download TestFlight, iOS 15 or later, and ask in a sentence when the day stalls.",
        ],
      },
    ],
    related: [
      "for-newcomers",
      "cities/fargo",
      "cities/moorhead",
      "cities/west-fargo",
      "lists/things-to-do-in-fargo",
      "guides/new-to-ndsu",
    ],
    faqs: [
      {
        q: "Is Help Me only for students?",
        a: "No. Students are a large part of this metro. Neighbors, newcomers, and families use the same app. Helping still requires a current staff approval.",
      },
      {
        q: "Should I use Fargo numbers in Moorhead?",
        a: "Not for county or city services. 911 works both sides. Police, food assistance, and housing follow Cass County or Clay County. Open the matching resource page.",
      },
    ],
  }),

  page({
    slug: "guides/new-to-ndsu",
    kind: "guide",
    title: "New to NDSU: campus help and first-semester orientation",
    description:
      "New to North Dakota State University? Campus police, Memorial Union, official events, and how Help Me fits a first semester in Fargo.",
    h1: "New to NDSU, without pretending you already know 19th Avenue",
    eyebrow: "NDSU",
    lead: "North Dakota State is a campus you can get lost on in daylight. That is survivable. Doing it without official safety numbers is not a personality.",
    priority: 0.68,
    keywords: ["new to NDSU", "NDSU freshman guide", "NDSU campus help"],
    geo: { name: "North Dakota State University", type: "Campus", city: "Fargo", state: "ND", county: "Cass County" },
    sections: [
      {
        heading: "Save official NDSU before you save a neighbor",
        body: [
          "NDSU University Police and Safety is the campus number. Search NDSU Police — the published non-emergency line is 701-231-8998, 24/7, and 911 remains 911. They run a safety escort: call that number and ask. That is an official officer, not a helper in an app.",
          "Student Health sits in the Wallman Wellness Center (701-231-7331). Counseling is in Ceres Hall (701-231-7671). After hours, NDSU points students at FirstLink / 988. None of that is Help Me.",
        ],
      },
      {
        heading: "How to get oriented without performing it",
        body: [
          "Memorial Union is the indoor public default. The libraries are study ground. MyNDSU is the official events source Help Me ingests — we label it NDSU and link back. If the feed is down, the app says so. It does not invent a Bison game.",
        ],
        bullets: [
          "Learn one indoor meeting place: the Union.",
          "Learn one official safety number: NDSU Police.",
          "Learn the river: you are in Fargo, Cass County, North Dakota. Moorhead is a different state.",
          "Ask in Help Me for directions, a study table, a jump in a public lot — not for a locked-out dorm after midnight if you need official housing staff.",
        ],
      },
      {
        heading: "Parking lots will try you",
        body: [
          "NDSU lots in January are a jump-start geography. Meet at a public, lit corner of the lot or walk to the Union first. Do not share a residence-hall pin. Campus police still exist if the situation is unsafe.",
        ],
      },
    ],
    related: [
      "guides/move-in-weekend-ndsu",
      "lists/first-week-at-ndsu",
      "resources/ndsu-safety",
      "resources/student-health-ndsu",
      "for-students",
      "guides/campus-events-fargo-moorhead",
    ],
    faqs: [
      {
        q: "Does a Bison ID make me a helper?",
        a: "No. Helping requires identity evidence and a current staff approval. A student card is not that.",
      },
      {
        q: "Can Help Me replace NDSU Police escorts?",
        a: "No. Call 701-231-8998 for an official escort. Help Me is a neighbor with a current approval.",
      },
    ],
  }),

  page({
    slug: "guides/new-to-msum",
    kind: "guide",
    title: "New to MSUM: a Moorhead campus how-to",
    description:
      "New to Minnesota State University Moorhead? Public Safety, Minnesota services, campus events, and everyday help across the river from Fargo.",
    h1: "New to MSUM, on the Minnesota side",
    eyebrow: "MSUM",
    lead: "You did not enroll in a Fargo annex. MSUM is a Minnesota campus with its own public safety, its own calendar, and a river that is also a border.",
    priority: 0.66,
    keywords: ["new to MSUM", "MSUM freshman guide", "Minnesota State Moorhead help"],
    geo: { name: "Minnesota State University Moorhead", type: "Campus", city: "Moorhead", state: "MN", county: "Clay County" },
    sections: [
      {
        heading: "Moorhead numbers, Moorhead campus",
        body: [
          "MSUM Public Safety publishes 218-477-2449, 24/7. Search MSUM Public Safety to confirm. They offer safety escorts, on-campus jump starts, and vehicle unlocks in a short radius around campus. 911 is still 911. Moorhead Police are not Fargo Police.",
          "You are in Clay County, Minnesota. Food support, mental-health crisis lines, and housing programs can differ from Cass County. 211 on this side of the river may still be answered with local knowledge — FirstLink serves Clay County for 211 — but county offices do not copy-paste.",
        ],
      },
      {
        heading: "First-week geography",
        body: [
          "Concordia is minutes away. Downtown Moorhead along Center Avenue is a public meeting strip. Fargo’s Broadway is a walk or a short drive when you want the other downtown. Gooseberry Park is beautiful and not always the right place to meet a stranger after dark.",
        ],
        bullets: [
          "Save Public Safety before you save a group chat.",
          "Use the campus union and library as default public indoor ground.",
          "Help Me shows official MSUM events with the source still attached.",
          "Ask a neighbor for a study table or a jump. Ask Public Safety for an official escort or a campus jump.",
        ],
      },
      {
        heading: "The first week is a separate guide",
        body: [
          "If you want the day-by-day of buildings, buses, and not eating every meal from a box, open First week at MSUM. This page is the identity: Minnesota campus, official safety first, neighbor help second.",
        ],
      },
    ],
    related: [
      "guides/first-week-msum",
      "resources/msum-safety",
      "resources/clay-county-resources",
      "cities/moorhead",
      "lists/moorhead-campus-weekend",
      "for-students",
    ],
    faqs: [
      {
        q: "Does Help Me work in Moorhead or only Fargo?",
        a: "Moorhead is part of the metro the app is built for. Matching is local, not Fargo-only.",
      },
      {
        q: "Should I call Fargo Police from campus?",
        a: "For a campus emergency, 911 or MSUM Public Safety. Moorhead Police serve the city. Do not assume a Fargo non-emergency line is the right city desk.",
      },
    ],
  }),

  page({
    slug: "guides/new-to-concordia",
    kind: "guide",
    title: "New to Concordia College Moorhead",
    description:
      "New to Concordia College in Moorhead? Public Safety, SAFEWalk, Knutson Campus Center, and how Help Me fits a smaller campus next to MSUM.",
    h1: "New to Concordia, small campus, real city",
    eyebrow: "Concordia",
    lead: "Concordia is walkable. Moorhead is still a city. The combination fools people into thinking they do not need a meeting place or a safety number.",
    priority: 0.64,
    keywords: ["new to Concordia College", "Concordia Moorhead guide", "Cobber campus help"],
    geo: { name: "Concordia College", type: "Campus", city: "Moorhead", state: "MN", county: "Clay County" },
    sections: [
      {
        heading: "Official Concordia first",
        body: [
          "Campus Public Safety publishes 218-299-3123, 24/7. Search Concordia Public Safety to confirm. SAFEWalk uses the same number. From a campus phone the short extension is 3123; from a cell, use the full number. 911 reaches Moorhead emergency dispatch.",
          "Knutson Campus Center is the indoor public default — information, public safety presence, a place you can name in a chat without dropping a residence pin.",
        ],
      },
      {
        heading: "You share a city with MSUM",
        body: [
          "The two campuses sit minutes apart. Help Me shows both official calendars, labeled, linked. A weekend here is often a Concordia event, an MSUM event, and a walk across the river to Broadway. Attribution stays on the source. We do not invent a concert to fill the rail.",
        ],
        bullets: [
          "Meet at Knutson, a library, or a Center Avenue public place.",
          "Use SAFEWalk when you want an official campus walk.",
          "Use Help Me when you want a neighbor for a jump, directions, or a study table.",
          "Clay County services apply. Do not paste a Cass County office onto a Moorhead problem.",
        ],
      },
      {
        heading: "Counseling and crisis are not a helper category",
        body: [
          "Concordia publishes a Counseling Center. For a mental-health crisis, 988 or 911. Sollera (formerly Rape and Abuse Crisis Center) serves this metro. Help Me is not a crisis line and not a confidential counselor.",
        ],
      },
    ],
    related: [
      "resources/concordia-safety",
      "guides/new-to-msum",
      "cities/moorhead",
      "guides/campus-events-fargo-moorhead",
      "resources/mental-health-fargo",
      "for-students",
    ],
    faqs: [
      {
        q: "Is Concordia in Fargo?",
        a: "No. Concordia College is in Moorhead, Minnesota. Help Me still covers the metro. Official police are Moorhead / campus public safety.",
      },
      {
        q: "Can I use Help Me instead of SAFEWalk?",
        a: "Use SAFEWalk for an official campus walk. Help Me is community help from an approved neighbor, not campus security.",
      },
    ],
  }),

  page({
    slug: "guides/new-to-m-state",
    kind: "guide",
    title: "New to M State Moorhead",
    description:
      "Starting at Minnesota State Community and Technical College in Moorhead? Campus logistics, Clay County services, and everyday non-emergency help.",
    h1: "New to M State, Moorhead campus",
    eyebrow: "M State",
    lead: "M State in Moorhead is a commuter rhythm: park, class, work, the river. The help you need is often a battery, a building name, or a calendar date — not a feed.",
    priority: 0.62,
    keywords: ["M State Moorhead", "Minnesota State Community College Moorhead", "M State student help"],
    geo: { name: "M State Moorhead", type: "Campus", city: "Moorhead", state: "MN", county: "Clay County" },
    sections: [
      {
        heading: "Find the official campus desk",
        body: [
          "M State’s Moorhead campus sits in the same city as MSUM and Concordia. Search M State Moorhead campus security or the campus directory for the current safety number rather than trusting a number you found on a flyer. 911 still works. MSUM Public Safety is a neighbor campus, not automatically your campus police.",
          "Academic dates from M State are one of the official calendars Help Me ingests. Open the official link in the listing for the last word on a drop date or a closure.",
        ],
      },
      {
        heading: "Commuter problems are still local problems",
        body: [
          "A lot of M State days start in a parking lot. Jump starts belong in public, lit ground. Directions between M State, MSUM, Concordia, and a Fargo job are a fair ask. A ride home across the county is not a promise anyone in the app made.",
        ],
        bullets: [
          "You are in Moorhead, Clay County, Minnesota unless you drove back to Cass.",
          "MATBUS is the official bus, not a helper with a sedan.",
          "Meet at a campus entrance or a public vestibule, not at an apartment door.",
          "County food, health, and housing help: Clay County Social Services or 211 — not a stranger in chat.",
        ],
      },
      {
        heading: "The rest of the metro is in the same app",
        body: [
          "NDSU, MSUM, Concordia, West Fargo, and Ticketmaster Fargo listings sit beside M State dates. That is so a weekend is visible, not so we pretend every campus is the same school. Use the source name.",
        ],
      },
    ],
    related: [
      "guides/new-to-msum",
      "cities/moorhead",
      "resources/clay-county-resources",
      "resources/matbus",
      "guides/campus-events-fargo-moorhead",
      "for-students",
    ],
    faqs: [
      {
        q: "Does Help Me ingest M State events?",
        a: "Yes. M State academic dates are a listed official source. Always open the official link for details.",
      },
      {
        q: "Can I request a ride to another M State campus?",
        a: "Help Me is not a ride service or a paid driver network. Ask for on-the-ground help here. Use official transit for travel between cities.",
      },
    ],
  }),

  page({
    slug: "guides/campus-events-fargo-moorhead",
    kind: "guide",
    title: "How campus events work in Help Me",
    description:
      "NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo calendars in Help Me — always attributed, never invented.",
    h1: "How to read Fargo–Moorhead campus events without a fifth app",
    eyebrow: "events",
    lead: "Four campuses, a city calendar, and regional shows. Cached. Labeled. Linked. Not made up.",
    priority: 0.65,
    keywords: ["NDSU events", "MSUM calendar", "Fargo campus events"],
    sections: [
      {
        heading: "Where the listings come from",
        body: [
          "NDSU publishes through MyNDSU. MSUM and Concordia publish campus calendars. M State contributes academic dates. West Fargo publishes a public community calendar. Ticketmaster listings cover regional shows within about 35 miles of Fargo.",
          "Help Me does not scrape random websites. The importer is a fixed list of official sources. If a feed is empty or down, the app says so.",
        ],
      },
      {
        heading: "How to use them in the app",
        body: [
          "Home shows a short rail of upcoming campus and regional events. Community is the full calendar. Filter by source, search, save, and open the official page. The source name stays visible on purpose.",
        ],
        bullets: [
          "Tap through for times, tickets, and cancellations on the official page.",
          "Save what you might actually attend. It is not a public RSVP performance.",
          "A listing is not a Help Me meetup. If you want a study table after a lecture, that is a separate request.",
          "You cannot submit an event from this website. Publish it on the official campus or city calendar.",
        ],
      },
      {
        heading: "What an event is not",
        body: [
          "It is not a partnership announcement. Ingesting a calendar is not a contract with a university. It is not campus police. It is not a ticket reseller.",
        ],
      },
    ],
    related: ["events", "community", "lists/fargo-events-guide", "for-campuses", "for-students", "lists/fargo-moorhead-campuses"],
    faqs: [
      {
        q: "Are events from Help Me or from the schools?",
        a: "Campus and regional listings come from official sources. Help Me caches and attributes them. Always open the official link for the last word.",
      },
      {
        q: "Can I add a club meeting?",
        a: "Not from this site. Put it on the official campus calendar the importer already reads, or use Community posts for a local conversation — that is not the same as an official listing.",
      },
    ],
  }),

  page({
    slug: "guides/student-safety-fargo",
    kind: "guide",
    title: "Student safety in Fargo–Moorhead",
    description:
      "Campus police first, 911 for danger, neighbors second. A practical safety guide for NDSU, MSUM, Concordia, and M State students.",
    h1: "Student safety, with the official numbers on top",
    eyebrow: "safety",
    lead: "A neighbor can walk you to a lot. A neighbor cannot be your campus police, your Title IX office, or an ambulance.",
    priority: 0.68,
    keywords: ["student safety Fargo", "NDSU safety", "MSUM safety"],
    sections: [
      {
        heading: "Call the people whose job it is",
        body: [
          "Immediate danger: 911 in Cass County and in Clay County. On campus, use that campus public safety number in the same breath if you can do it without delaying 911.",
        ],
        bullets: [
          "NDSU University Police: search NDSU Police — published line 701-231-8998, escorts at that number.",
          "MSUM Public Safety: 218-477-2449, escorts and on-campus jumps.",
          "Concordia Public Safety / SAFEWalk: 218-299-3123.",
          "M State: search the Moorhead campus directory for the current security contact.",
        ],
      },
      {
        heading: "What a helper is for",
        body: [
          "A jump in a public lot. Directions to a hall. A study table. A walk when you want a neighbor and official escort is not what you are asking for. Approved helpers only, coarse location, private chat, public meeting places, report and block.",
          "Help Me is an adult community app. It is not a K–12 program, not a youth chat, and not a substitute for a residence-life duty phone.",
        ],
      },
      {
        heading: "Downtown, lots, and the hour after a show",
        body: [
          "Broadway after midnight is public and still a street. Meet under lights. Do not share a first-apartment pin with someone you have not accepted in the app, and think twice after you have. Official non-emergency police for the metro often runs through the Red River Regional Dispatch Center at 701-451-7660 — confirm on the city police page if you need an officer and it is not an emergency.",
        ],
      },
      {
        heading: "Crisis is a different stack",
        body: [
          "988 for a mental-health crisis. 211 / FirstLink for resources. Sollera and YWCA Cass Clay for violence and abuse. Campus counseling during office hours. None of those asks belong in a help request.",
        ],
      },
    ],
    related: [
      "guides/how-to-stay-safe",
      "resources/ndsu-safety",
      "resources/msum-safety",
      "resources/concordia-safety",
      "guides/downtown-fargo-at-night",
      "not-911",
    ],
    faqs: [
      {
        q: "Is Help Me a campus safety escort program?",
        a: "No. Use NDSU Police, MSUM Public Safety, or Concordia SAFEWalk for official escorts. Help Me is community help.",
      },
      {
        q: "What if I feel unsafe during a request?",
        a: "Leave. Call 911 if you need official response. Report and block in the app. Email support@helpme.fyi when you are safe.",
      },
    ],
  }),

  page({
    slug: "guides/downtown-fargo-at-night",
    kind: "guide",
    title: "Downtown Fargo at night",
    description:
      "Broadway after dark: public meeting places, walks to the ramp, and when to call Fargo Police instead of asking a neighbor.",
    h1: "Downtown Fargo at night, without making the alley the meeting place",
    eyebrow: "Fargo",
    lead: "Broadway is walkable, lit, and public. That is the point. The point is also that a fun night is not a reason to share a home pin.",
    priority: 0.62,
    keywords: ["downtown Fargo at night", "Broadway Fargo safety", "Fargo nightlife"],
    geo: { name: "Downtown Fargo", type: "Neighborhood", city: "Fargo", state: "ND", county: "Cass County" },
    sections: [
      {
        heading: "Use the street you can name",
        body: [
          "Meet on Broadway, in a lobby, at the Fargo Theatre sidewalk, at a restaurant entrance, at a ramp elevator that other people use. The Island Park side after the bars thin out is quieter than it looks on a summer postcard. Quiet is not the same as safe-for-a-stranger.",
        ],
        bullets: [
          "Label the public place in the request. Do not describe your apartment door.",
          "Exact location stays off until you consent after accept.",
          "A walk to a downtown ramp is a fair ask. A walk into a dark residential block is a worse plan.",
          "If you are threatened, drunk-injured, or watching a fight, 911 — not a helper offer.",
        ],
      },
      {
        heading: "Official downtown",
        body: [
          "Fargo Police serve downtown. Emergency is 911. Metro non-emergency often goes through the Red River Regional Dispatch Center at 701-451-7660. Confirm on fargond.gov if you are filing something that can wait. Online reporting exists for some non-urgent incidents on the city site.",
        ],
      },
      {
        heading: "After the show",
        body: [
          "Ticketmaster Fargo listings in the app are for finding the night, not for finding a ride. MATBUS is not a 24-hour night owl — check matbus.com for hours. A helper is not a taxi. Plan the last mile before the last song.",
        ],
      },
    ],
    related: [
      "lists/late-night-fargo",
      "lists/public-meeting-places-fargo",
      "guides/meet-in-public-fargo",
      "resources/fargo-police",
      "cities/fargo",
      "guides/how-to-stay-safe",
    ],
    faqs: [
      {
        q: "Can I ask someone to walk me from a bar to my car?",
        a: "Yes as a public, non-emergency ask. Meet in a lit doorway. Official police if you are in danger. A helper is not a bouncer.",
      },
      {
        q: "Is downtown Moorhead the same page?",
        a: "No. Center Avenue is Moorhead, Minnesota. Different police. Same 911. Same rule: public, lit, populated ground.",
      },
    ],
  }),

  page({
    slug: "guides/location-privacy",
    kind: "guide",
    title: "Location privacy on Help Me",
    description:
      "Help Me shows a coarse ~500 m area, not a pin on you. Exact location is shared only after a helper accepts and you consent.",
    h1: "How location works — and how it does not",
    eyebrow: "privacy",
    lead: "The map is supposed to be useful without being a tracker. That is a design choice, not a slogan.",
    priority: 0.7,
    keywords: ["Help Me location", "approximate location", "location privacy"],
    sections: [
      {
        heading: "What other people see while a request is open",
        body: [
          "Live help shows as an approximate area of about 500 meters. That is a rounded area, not a dot on your person, not a house number, not a stall in a ramp. Helpers who receive a private offer see that coarse area plus whatever you typed.",
        ],
      },
      {
        heading: "Exact location is a later, smaller door",
        body: [
          "Precise location moves only after a helper is accepted and you say yes, and only to that person. You can refuse. You can stop sharing. Completion ends exact sharing automatically.",
        ],
        bullets: [
          "You can still complete a request by naming a public place and walking there.",
          "On supported iPhones, precision finding is available only when both people opt in.",
          "No-location requests can still be considered by suitable approved helpers.",
          "When both people have shared matching location, offers stay within about 10 km of the requester’s rounded area.",
        ],
      },
      {
        heading: "What we do not do",
        body: [
          "We do not publish your request on a public map pin. We do not give every helper in town a live trail. We do not need your home address to jump a battery at West Acres.",
        ],
      },
      {
        heading: "If you want the legal language",
        body: [
          "The Privacy Policy is the contract-shaped version of this. This guide is the human one. Delete your account from Account in the app if you want your data gone; type DELETE. Questions: support@helpme.fyi.",
        ],
      },
    ],
    related: ["safety", "legal/privacy", "guides/how-to-stay-safe", "guides/meet-in-public-fargo", "guides/delete-your-account", "how-it-works"],
    faqs: [
      {
        q: "Can I turn off exact sharing after I said yes?",
        a: "Yes. Stop sharing. Meet in public anyway. Completion also ends exact sharing.",
      },
      {
        q: "Does the coarse area show my apartment building?",
        a: "It is about 500 meters, not a building outline. Still prefer a public meeting label over anything that reads like a home.",
      },
    ],
  }),

  page({
    slug: "guides/delete-your-account",
    kind: "guide",
    title: "How to delete your Help Me account",
    description:
      "Delete your Help Me account yourself from Account in the iPhone app by typing DELETE. No ticket required. Support is support@helpme.fyi.",
    h1: "How to delete your account",
    eyebrow: "account",
    lead: "You should not have to email a stranger to leave. You type DELETE. That is the product.",
    priority: 0.6,
    keywords: ["delete Help Me account", "Help Me account deletion", "close Help Me"],
    sections: [
      {
        heading: "Do it in the app",
        body: [
          "Open Account. Choose the delete path. Type DELETE. That is the self-serve control. There is no website button that remotely wipes an iPhone account, and there is no need to invent a reason for a form.",
        ],
        bullets: [
          "You need access to the signed-in iPhone to do this yourself.",
          "If you cannot open the app, email support@helpme.fyi — a person reads it.",
          "Deleting an account is not the same as blocking one person. Use block for a person. Use delete for you.",
        ],
      },
      {
        heading: "What deletion is for",
        body: [
          "You are done with the product. You want your login gone. You do not want leftover requests attached to a person. It is not a panic button — if you are in danger, 911 first, then worry about accounts.",
        ],
      },
      {
        heading: "If you only wanted a pause",
        body: [
          "Helpers can go offline. You can not post. You do not have to delete to have a quiet month. Delete when you mean it.",
        ],
      },
    ],
    related: ["legal/privacy", "legal/terms", "support/contact", "guides/how-to-report-or-block", "safety", "about"],
    faqs: [
      {
        q: "Can I delete from this website?",
        a: "No. Delete from Account in the iPhone app by typing DELETE. If you are locked out, email support@helpme.fyi.",
      },
      {
        q: "Does deleting cancel a live request?",
        a: "Do not rely on deletion as an emergency exit from a meet. Leave the place, call 911 if needed, report and block, then deal with the account.",
      },
    ],
  }),

  page({
    slug: "guides/meet-in-public-fargo",
    kind: "guide",
    title: "How to meet in public in Fargo–Moorhead",
    description:
      "Public meeting places for Help Me in Fargo, Moorhead, and West Fargo: unions, libraries, grocery vestibules, malls, and lit lots — not home pins.",
    h1: "Meet in public. That is the whole rule.",
    eyebrow: "how-to",
    lead: "A vestibule has witnesses. A basement apartment has a door that closes. Choose the vestibule.",
    priority: 0.68,
    keywords: ["meet in public Fargo", "public meeting places Fargo", "Help Me meetup"],
    sections: [
      {
        heading: "What “public” means here",
        body: [
          "Other people can see you. Lights work. You can leave without asking anyone to unlock something. You can name the place in one label a helper will recognize.",
        ],
        bullets: [
          "Campus unions: NDSU Memorial Union, MSUM and Concordia campus centers.",
          "Libraries: Fargo Public Library downtown, Carlson, Northport; campus libraries.",
          "Retail: West Acres, grocery vestibules, Scheels, big-box entrances with cameras and foot traffic.",
          "Downtown: Broadway sidewalks and lobbies in Fargo; Center Avenue in Moorhead.",
        ],
      },
      {
        heading: "How to put it in the request",
        body: [
          "Type the label. You do not have to share exact location at all. If you later consent to exact location, you can still walk to the public place and do the work there — jump the car in the lot beside the store, not in a garage attached to a house.",
        ],
      },
      {
        heading: "Places that fail the test",
        body: [
          "Residential streets after the porch lights are the only lights. Isolated trailheads. Unstaffed ramps at 2 a.m. if you have another option. Your first week apartment. If the helper pushes to change a public plan to a private one, that is information. Leave. Report.",
        ],
      },
    ],
    related: [
      "lists/public-meeting-places-fargo",
      "guides/how-to-stay-safe",
      "guides/location-privacy",
      "lists/study-spots-fargo",
      "guides/downtown-fargo-at-night",
      "safety",
    ],
    faqs: [
      {
        q: "What if the help has to happen at a car?",
        a: "Use a public lot. Meet at the entrance first if you want. Do not convert a jump start into a house call.",
      },
      {
        q: "Is a park public enough?",
        a: "In daylight with other people, sometimes. After dark, pick indoor public or a staffed lot. Gooseberry and river trails are the wrong kind of pretty at midnight.",
      },
    ],
  }),

  page({
    slug: "guides/move-in-weekend-ndsu",
    kind: "guide",
    title: "NDSU move-in weekend: how to get a hand",
    description:
      "NDSU move-in: heavy boxes, public meeting spots, campus police, and why Help Me is a neighbor — not housing staff or a moving company.",
    h1: "NDSU move-in weekend, without turning the hallway into a gig board",
    eyebrow: "NDSU",
    lead: "Everyone is carrying something. That does not make a stranger with a current approval into a moving crew, and it does not replace residence life.",
    priority: 0.63,
    keywords: ["NDSU move-in", "NDSU move in help", "NDSU boxes"],
    geo: { name: "North Dakota State University", type: "Campus", city: "Fargo", state: "ND" },
    sections: [
      {
        heading: "Use official move-in first",
        body: [
          "NDSU publishes move-in instructions, load-in maps, and hall contacts on official channels. Follow those. Housing staff and the people they schedule are the ones allowed in staff-only areas. Help Me helpers are not.",
        ],
      },
      {
        heading: "What you can actually ask a neighbor for",
        body: [
          "A pair of hands from a public lot to a public door. A jump when the car dies in a move-in line. Directions to a hall you cannot see from 19th Avenue. That is the size of it.",
        ],
        bullets: [
          "Meet at a named public point: Union, a lot entrance, a hall lobby if it is open to guests under hall rules.",
          "Do not post your room number as a meeting label.",
          "Parents can carry boxes. Helpers should not be invited to ride an elevator into a residential floor as a workaround.",
          "If someone is injured, 911 or NDSU Police — 701-231-8998 for non-emergency campus police, 911 for emergency.",
        ],
      },
      {
        heading: "The weekend will be loud. The rules stay quiet.",
        body: [
          "Approved helpers only. Coarse area on the map. Private chat. Public meeting places. Two-hour window. One live request. Not a paid crew. If you need a truck, hire a truck. If you need campus security, call campus security.",
        ],
      },
    ],
    related: [
      "guides/new-to-ndsu",
      "lists/first-week-at-ndsu",
      "resources/ndsu-safety",
      "guides/how-to-ask-for-help",
      "guides/meet-in-public-fargo",
      "for-parents",
    ],
    faqs: [
      {
        q: "Can I hire a helper to move a whole apartment?",
        a: "No. Help Me is not a paid moving marketplace. Ask for a short public hand or hire a mover.",
      },
      {
        q: "Can a parent use Help Me?",
        a: "Adults in Fargo–Moorhead can use the app. It is not a youth program. Helping still needs a current staff approval.",
      },
    ],
  }),

  page({
    slug: "guides/first-week-msum",
    kind: "guide",
    title: "First week at MSUM",
    description:
      "A first-week how-to for Minnesota State University Moorhead: Public Safety, buildings, the river, and everyday help that is not an emergency.",
    h1: "First week at MSUM, Minnesota numbers included",
    eyebrow: "MSUM",
    lead: "The first week is buildings, a bus, a bank, and a moment you wish someone would just point. Pointing is allowed. Crisis response is not this app.",
    priority: 0.62,
    keywords: ["first week MSUM", "MSUM orientation", "MSU Moorhead new student"],
    geo: { name: "Minnesota State University Moorhead", type: "Campus", city: "Moorhead", state: "MN" },
    sections: [
      {
        heading: "Day one numbers",
        body: [
          "MSUM Public Safety: 218-477-2449. 911 for danger. Moorhead Police for the city. You are in Clay County. If you walk to Broadway after dinner, you crossed into Fargo and Cass County — fun, and a different city desk if something goes wrong.",
        ],
      },
      {
        heading: "How to spend the week without getting stranded",
        body: [
          "Walk the indoor public places in daylight: union, library, the paths you will actually use at 9 p.m. Official MSUM events show in Help Me with attribution. Concordia is next door; their calendar is a separate source, not the same school.",
        ],
        bullets: [
          "Put Public Safety in your phone before you put new friends in a group chat.",
          "MATBUS U-Pass details live on matbus.com — confirm student fare rules there.",
          "Ask Help Me for a study table or directions. Ask Public Safety for an official escort or a campus jump.",
          "Food and money stress: 211 and campus basic-needs pages, not a helper chat.",
        ],
      },
      {
        heading: "When the first week stops being logistical",
        body: [
          "Homesick is human. Panic that will not come down is 988 or campus counseling. Threats are 911. Do not test whether a neighbor can substitute for any of that.",
        ],
      },
    ],
    related: [
      "guides/new-to-msum",
      "lists/student-resources-msum",
      "resources/msum-safety",
      "lists/moorhead-campus-weekend",
      "guides/campus-events-fargo-moorhead",
      "for-students",
    ],
    faqs: [
      {
        q: "Is there a separate Help Me for MSUM?",
        a: "No. One Fargo–Moorhead app. MSUM is a place inside it, with its own official calendar and its own public safety.",
      },
      {
        q: "Can Public Safety jump my car off campus?",
        a: "MSUM describes on-campus jumps and a short radius. Read their current services page. Off campus, a neighbor or a shop.",
      },
    ],
  }),

  page({
    slug: "guides/west-fargo-community-help",
    kind: "guide",
    title: "Community help in West Fargo",
    description:
      "How Help Me works in West Fargo: neighbor help, the official city calendar, Sheyenne Street geography, and West Fargo Police — not Fargo as an afterthought.",
    h1: "West Fargo help, as its own city",
    eyebrow: "West Fargo",
    lead: "West Fargo is not a Fargo neighborhood with extra cul-de-sacs. It has a police department, a city calendar, and lots that freeze on the same night as 13th Avenue.",
    priority: 0.64,
    keywords: ["West Fargo help", "West Fargo community", "Sheyenne Street help"],
    geo: { name: "West Fargo", type: "City", city: "West Fargo", state: "ND", county: "Cass County" },
    sections: [
      {
        heading: "Where the asks actually happen",
        body: [
          "Veterans Boulevard and 13th Avenue commercial lots. Sheyenne Street. High-school nights at West Fargo, Sheyenne, and Horizon. Neighborhoods people name — The Lights, Sheyenne Crossing, Shadow Wood — which is exactly why you meet at a grocery entrance instead of a porch.",
        ],
        bullets: [
          "Jump starts: public lots, not a dark cul-de-sac.",
          "Directions: the city is new for a lot of residents; a named store is a better pin than a subdivision name a helper may not know.",
          "Events: Help Me ingests the official West Fargo community calendar and links back to westfargo.org.",
          "Schools: high-school pages on this site describe the area. Help Me is not a K–12 meetup product.",
        ],
      },
      {
        heading: "Official West Fargo",
        body: [
          "West Fargo Police: westfargond.gov. Emergency 911. Department line published at 701-515-5500. Metro non-emergency dispatch is often 701-451-7660. Confirm on the city site. Cass County Human Services still covers county benefits — West Fargo is Cass County, North Dakota.",
        ],
      },
      {
        heading: "Same app, different city desk",
        body: [
          "Matching is local to the metro. There is no West Fargo-only helper roster we pretend to staff. There is a West Fargo police department you should actually call when a neighbor is the wrong tool.",
        ],
      },
    ],
    related: [
      "cities/west-fargo",
      "resources/west-fargo-police",
      "lists/west-fargo-things-to-do",
      "resources/cass-county-resources",
      "guides/how-to-ask-for-help",
      "guides/jump-start-in-fargo",
    ],
    faqs: [
      {
        q: "Does Help Me include West Fargo events?",
        a: "Yes. The official West Fargo community calendar is one of the fixed sources in the app.",
      },
      {
        q: "Is West Fargo on the Fargo police page?",
        a: "No. Use West Fargo Police for West Fargo. Fargo Police for Fargo. 911 for both in an emergency.",
      },
    ],
  }),

  page({
    slug: "guides/how-to-report-or-block",
    kind: "guide",
    title: "How to report or block someone on Help Me",
    description:
      "Report or block anyone, any time in Help Me. Safety actions sit in every request. Staff can act on reports. Call 911 first if you are in danger.",
    h1: "How to report or block — without writing an essay",
    eyebrow: "safety",
    lead: "You do not need a thesis. You need the person out of your map, and if they crossed a line, a record that they did.",
    priority: 0.66,
    keywords: ["report Help Me", "block user Help Me", "Help Me safety tools"],
    sections: [
      {
        heading: "If you are in danger, stop reading this",
        body: [
          "Call 911. Leave the place. Campus police if you are on campus and that is the faster official path. The app can wait.",
        ],
      },
      {
        heading: "Block vs report",
        body: [
          "Block is for you: that person should not be in your matching world. Report is for staff: something happened that a human on our side should see. You can do both. You can do them during a live request; safety actions sit one tap away on purpose.",
        ],
        bullets: [
          "You do not have to finish the help to report.",
          "You do not have to be polite in the chat while you look for the button.",
          "Blocking is not the same as deleting your whole account.",
          "Staff can act on reports. We will not narrate the internal process like a crime show.",
        ],
      },
      {
        heading: "What to include when you report",
        body: [
          "What happened, when, and whether you are safe now. If this was a crime, say so to police first. A Help Me report is not a police report. Fargo, Moorhead, and West Fargo each have official reporting paths — including online options for some non-urgent incidents on city sites.",
        ],
      },
      {
        heading: "Afterward",
        body: [
          "Email support@helpme.fyi if you need a person. If you want the account gone, type DELETE in Account. If you want the legal documents, Privacy and Terms live on this site.",
        ],
      },
    ],
    related: ["safety", "guides/how-to-stay-safe", "guides/delete-your-account", "not-911", "resources/fargo-police", "support/contact"],
    faqs: [
      {
        q: "Will the other person know I reported them?",
        a: "Do not use reporting as a chat message. Use the in-app action. If you need distance, block. If you need official law enforcement, call them.",
      },
      {
        q: "Can I report someone who did not accept my request?",
        a: "Use the safety tools available on the request and in the account. If something happened off-app, police or campus safety may be the right first call.",
      },
    ],
  }),

  page({
    slug: "guides/how-to-jump-start-a-car-safely",
    kind: "guide",
    title: "How to jump start a car safely in Fargo winter",
    description:
      "The correct cable order, what not to touch, and what to do when a battery is frozen. A step-by-step jump start guide for Fargo–Moorhead cold.",
    h1: "How to jump start a car without wrecking either one",
    eyebrow: "how-to",
    lead: "Two people, one set of cables, and a cold parking lot. This is the part that goes wrong when everyone is in a hurry.",
    answer:
      "Park the cars close without touching, both off. Connect red to the dead positive, red to the good positive, black to the good negative, then black to bare metal on the dead car’s engine block — not the dead negative terminal. Start the good car, wait a minute, then start the dead one. Remove in reverse order.",
    steps: [
      { name: "Position and shut off", text: "Park close enough for cables to reach without the vehicles touching. Both engines off, both in park, parking brakes on." },
      { name: "Red to dead positive", text: "Clamp one red clip to the positive terminal of the dead battery. Positive is marked with a plus and usually a red cover." },
      { name: "Red to good positive", text: "Clamp the other red clip to the positive terminal of the working battery." },
      { name: "Black to good negative", text: "Clamp one black clip to the negative terminal of the working battery." },
      { name: "Black to bare metal", text: "Clamp the last black clip to unpainted metal on the dead car’s engine block or frame, away from the battery. This is the step people skip, and it is the one that keeps a spark away from battery gases." },
      { name: "Start and wait", text: "Start the working car and let it run a minute or two. Then try the dead car. If it does not turn over after a couple of tries, stop — something else is wrong." },
      { name: "Disconnect in reverse", text: "Remove the clips in the exact reverse order, then let the revived car run or drive for a while before shutting it off." },
    ],
    takeaways: [
      "Last black clip goes to bare metal, not the dead negative terminal.",
      "Never let the clamps touch each other while anything is connected.",
      "A visibly cracked, leaking, or frozen battery does not get jumped.",
      "If it will not start after two tries, it is a tow or a new battery.",
    ],
    keywords: ["jump start car safely", "jumper cable order", "Fargo dead battery winter"],
    sections: [
      {
        heading: "When not to jump it at all",
        body: [
          "If the battery case is cracked, leaking, bulging, or visibly frozen, walk away and call a service. A frozen battery can rupture. If you smell rotten eggs, that is the battery venting and it is not a smell to work through.",
          "If the car cranks strongly but will not catch, the battery is probably not the problem. Repeated attempts will just drain the good car.",
        ],
      },
      {
        heading: "Doing it at minus twenty",
        body: [
          "Cold makes everything slower and clumsier. Wear gloves you can still work in, keep the cable ends off the ground where they freeze stiff, and do not stand between the cars. If either of you is losing feeling in your hands, stop and call roadside assistance — a jump is not worth frostbite.",
        ],
      },
      {
        heading: "Asking for one on Help Me",
        body: [
          "Pick a public, plowed, lit lot. Say where you are in terms someone can find without a map — the store entrance, the lot number, the row. Approved helpers nearby can be offered it, and the first eligible one to accept gets it. Nobody is obligated, and nobody gets paid.",
        ],
      },
    ],
    related: ["help/jump-start", "guides/jump-start-in-fargo", "seasons/polar-vortex-cold-snap", "help/winter-car-help", "lists/parking-lots-where-cars-die-fargo", "questions/where-should-i-meet-a-helper"],
    faqs: [
      {
        q: "Does the order really matter?",
        a: "Yes. The final black clip on bare metal keeps the spark away from hydrogen venting off the battery. It is the whole reason for the sequence.",
      },
      {
        q: "How long should I drive afterward?",
        a: "Long enough for the alternator to put something back — a highway loop beats idling in a lot. If it dies again the next morning, the battery is finished.",
      },
    ],
  }),

  page({
    slug: "guides/what-to-keep-in-your-car-in-winter",
    kind: "guide",
    title: "What to keep in your car in a Fargo–Moorhead winter",
    description:
      "The winter car kit that actually matters in North Dakota and Minnesota: jump pack, scraper, real gloves, blanket, and the things people forget until minus twenty.",
    h1: "The winter kit, ranked by how badly you will want it",
    eyebrow: "how-to",
    lead: "Everything on this list is boring until the one night it is the only thing standing between you and a very long wait.",
    answer:
      "A Fargo–Moorhead winter car kit needs a scraper with a brush, a portable jump pack, real gloves and a hat, a warm blanket, and a charged phone with roadside assistance saved. Add boots, a small shovel, and traction material if you drive outside the metro. Keep fuel above half and tell someone your route on rural drives.",
    takeaways: [
      "Jump pack is the highest-value item in the trunk.",
      "Scraper with a brush lives in every car, all winter.",
      "A blanket and warm layers matter if you are ever stuck.",
      "Fuel above half; a full tank is also a warm tank.",
    ],
    keywords: ["winter car kit", "North Dakota winter driving", "emergency kit car Fargo"],
    sections: [
      {
        heading: "The core five",
        body: [
          "A scraper with a brush, because clearing a windshield with a credit card is a rite of passage nobody needs twice. A portable jump pack, which turns the most common winter failure into a two-minute fix. Real gloves and a hat, not the thin ones. A wool or emergency blanket. A phone charger that works in the car.",
        ],
        bullets: [
          "Scraper with brush",
          "Portable jump pack, charged in fall",
          "Insulated gloves, hat, and a spare pair of socks",
          "Blanket and an extra layer",
          "Car charger and roadside assistance number saved offline",
        ],
      },
      {
        heading: "If you drive outside the metro",
        body: [
          "Add a small shovel, a bag of sand or cat litter for traction, a flashlight, water, and food that survives freezing. Rural stretches around this metro are flat, open, and unforgiving — the distance to the next building matters more than the temperature.",
        ],
      },
      {
        heading: "The habits that go with it",
        body: [
          "Keep the tank above half. Charge the jump pack in October, not January. Clear the exhaust pipe if you are stuck in deep snow before running the engine. And tell somebody your route before a winter drive out of town.",
        ],
      },
    ],
    related: ["seasons/winter-in-fargo-moorhead", "for-people-new-to-winter", "help/winter-car-help", "seasons/blizzard-day", "guides/winter-help-fargo", "for-commuters"],
    faqs: [
      {
        q: "Jump pack or cables?",
        a: "Both if you can. A pack works alone at three in the morning; cables need a second car and a second person.",
      },
      {
        q: "Do I need a shovel in town?",
        a: "In the metro, usually a scraper is enough. If you park where plows build berms, a small shovel earns its space.",
      },
    ],
  }),

  page({
    slug: "guides/how-to-find-a-safe-meeting-spot",
    kind: "guide",
    title: "How to pick a safe meeting spot in Fargo–Moorhead",
    description:
      "Lit, public, populated, and easy to describe. How to choose where to meet someone you do not know in Fargo, Moorhead, or West Fargo.",
    h1: "How to choose where to meet a stranger",
    eyebrow: "how-to",
    lead: "The right spot is the boring one: bright, busy, and impossible to get wrong on a map.",
    answer:
      "Pick a place that is lit, public, busy at that hour, and easy to name precisely — a grocery or big-box entrance, a staffed campus building, a library during open hours, a well-used lot. Tell someone where you are going, stay in the app chat until you meet, and leave if anything feels off.",
    steps: [
      { name: "Choose a named public place", text: "A store entrance, a campus union, a library, a busy lot. Somewhere a stranger can find in one search." },
      { name: "Check the hour", text: "A place that is busy at noon can be empty at eleven. Pick for the time you are actually meeting." },
      { name: "Say it precisely in the request", text: "Name the entrance or the row, not just the business. Precision is what gets a request accepted quickly." },
      { name: "Tell someone", text: "A friend, a roommate, anyone. Where you are, who you are meeting, and when you expect to be done." },
      { name: "Keep it in the app until you meet", text: "In-app chat keeps report and block meaningful and keeps your number yours." },
    ],
    takeaways: [
      "Lit, public, busy, and precisely nameable.",
      "Never a home address if you can avoid it.",
      "Tell one other person where you are going.",
      "Leaving early is always allowed and never rude.",
    ],
    keywords: ["safe meeting spot Fargo", "where to meet stranger Moorhead", "public exchange location"],
    sections: [
      {
        heading: "Metro spots that work",
        body: [
          "West Acres and the retail corridor around 13th Avenue South. Grocery entrances across south Fargo, north Fargo, and Moorhead. The Memorial Union at NDSU, the Comstock Memorial Union at MSUM, the Knutson Campus Center at Concordia. Fargo and Moorhead public libraries in open hours. Police departments in all three cities are public buildings and no one will think it strange.",
        ],
      },
      {
        heading: "Spots that look fine and are not",
        body: [
          "An empty park after dark. A back lot behind a closed business. A residential street chosen because it was close. A ramp level with no other cars on it. Convenience is the thing that quietly talks people out of good judgment.",
        ],
      },
      {
        heading: "The winter exception",
        body: [
          "At twenty below, an outdoor meeting spot is a bad plan for both of you. Choose somewhere with a heated entry or a vestibule, and keep it short. The safety logic does not change; the comfort logic does.",
        ],
      },
    ],
    related: ["lists/public-meeting-places-fargo", "glossary/meet-in-public", "questions/where-should-i-meet-a-helper", "guides/meet-in-public-fargo", "safety", "guides/how-to-stay-safe"],
    faqs: [
      {
        q: "What if my car is stuck where it is?",
        a: "Then the location is fixed. Describe it precisely, wait somewhere lit if you can, and tell someone where you are.",
      },
      {
        q: "Is a police station lobby overkill?",
        a: "No. It is a normal, free, public place and using it costs nothing.",
      },
    ],
  }),

  page({
    slug: "guides/how-to-help-a-stranded-driver",
    kind: "guide",
    title: "How to help a stranded driver in Fargo–Moorhead",
    description:
      "What to do — and what not to do — when you see someone stuck. Lot versus highway, cold-weather risk, and when the right help is a phone call.",
    h1: "How to help someone who is stuck",
    eyebrow: "how-to",
    lead: "The instinct is good. The execution is where people get hurt, especially near a highway in winter.",
    answer:
      "In a parking lot or a low-speed street, stopping to help is usually fine: park safely, stay visible, and offer a jump or a push. On a highway shoulder, do not stop — call 911 or the state patrol so trained responders and warning lights arrive instead. In deep cold, getting someone warm matters more than fixing the car.",
    takeaways: [
      "Lots and low-speed streets: helping directly is reasonable.",
      "Highway shoulders: call it in, do not stop.",
      "In deep cold, warmth beats mechanics every time.",
      "Never leave someone stranded without confirming help is coming.",
    ],
    keywords: ["help stranded driver", "stopping to help North Dakota", "highway safety Fargo"],
    sections: [
      {
        heading: "The parking lot version",
        body: [
          "Pull in where you are visible, leave room, and ask before doing anything. Most of the time the answer is cables and ten minutes. If the person seems disoriented, very cold, or unwell, that is a 911 call and not a mechanical problem.",
        ],
      },
      {
        heading: "The highway version",
        body: [
          "Do not stop on the shoulder of I-94 or I-29. Adding a second stationary vehicle to a fast, possibly icy road is how a bad situation becomes a crash. Call it in with a mile marker and direction. Dispatchers can send people with lights, training, and a legal right to be there.",
        ],
      },
      {
        heading: "Cold changes the priority",
        body: [
          "At subzero temperatures the car is not the emergency; the person is. If someone has been outside a while, getting them somewhere warm comes first and the vehicle can wait for a tow.",
        ],
      },
    ],
    related: ["helpers", "seasons/blizzard-day", "seasons/polar-vortex-cold-snap", "help/jump-start", "not-911", "resources/fargo-emergency"],
    faqs: [
      {
        q: "Am I liable if I help someone?",
        a: "This site does not give legal advice. Practically: do what you are competent to do, do not move an injured person, and call 911 when it is more than a favor.",
      },
      {
        q: "Should I offer a ride?",
        a: "That is a personal call and not something Help Me arranges. The app is not a rideshare and no request should be for transportation.",
      },
    ],
  }),

  page({
    slug: "guides/digging-out-after-a-snowstorm",
    kind: "guide",
    title: "Digging out after a Fargo–Moorhead snowstorm",
    description:
      "Berms, buried cars, and the shovel injuries nobody plans for. How to dig out safely and what a neighbor can reasonably help with.",
    h1: "Digging out without hurting yourself",
    eyebrow: "how-to",
    lead: "The plow is not being rude. It is doing its job, and its job leaves a wall behind your car.",
    answer:
      "After a snowstorm here, the hardest part is usually the plow berm at the end of a driveway or behind a parked car. Clear the exhaust pipe before running an engine, dig ahead of the tires rather than under the car, push snow rather than lifting it, and stop if your chest or back protests. Shoveling injuries are common and serious.",
    steps: [
      { name: "Clear the exhaust first", text: "Before starting an engine, make sure the tailpipe is not packed with snow. Blocked exhaust means carbon monoxide inside the car." },
      { name: "Dig in front of and behind the tires", text: "Make a ramp for each drive wheel rather than trying to excavate the whole vehicle." },
      { name: "Push, do not lift", text: "Push snow to the side. Lifting wet snow is how people hurt their backs and their hearts." },
      { name: "Add traction", text: "Sand, cat litter, or a floor mat under the drive wheels beats spinning until you polish ice." },
      { name: "Rock gently", text: "Ease between forward and reverse. Flooring it digs deeper and can damage a transmission." },
    ],
    takeaways: [
      "Blocked exhaust is a carbon monoxide risk — check it first.",
      "Shoveling is genuine cardiac exertion in cold air.",
      "Traction material beats more throttle every time.",
      "City snow-emergency rules decide where you can park.",
    ],
    keywords: ["dig out car snow", "plow berm driveway", "Fargo snow removal"],
    sections: [
      {
        heading: "Why the berm exists",
        body: [
          "Plows push snow to the right, which means every driveway and parked car on the route gets a wall. It is unavoidable, it is heavier and wetter than fresh snow, and it is where most of the work is.",
        ],
      },
      {
        heading: "Where a neighbor fits",
        body: [
          "Ten minutes and a second shovel is genuinely transformative on a berm, and pushing a car out of a shallow drift takes two people who are not in a hurry. This is one of the best uses of a small help request in this metro. It is not a paid snow-removal service and nobody is obligated to say yes.",
        ],
      },
    ],
    related: ["help/snow-help", "seasons/first-snow", "seasons/winter-in-fargo-moorhead", "help/car-stuck-in-snow", "cities/fargo", "for-seniors"],
    faqs: [
      {
        q: "Who clears the sidewalk?",
        a: "Cities here place that responsibility on property owners, with their own timelines. Check your city’s rules.",
      },
      {
        q: "When should I stop shoveling?",
        a: "Any chest tightness, arm pain, dizziness, or shortness of breath — stop immediately and call 911 if it does not pass.",
      },
    ],
  }),

  page({
    slug: "guides/how-to-use-matbus",
    kind: "guide",
    title: "How to use MATBUS in Fargo–Moorhead",
    description:
      "Getting around Fargo, West Fargo, and Moorhead on MATBUS: how routes work, what to check before you go, and winter stop realities.",
    h1: "How to actually ride MATBUS",
    eyebrow: "how-to",
    lead: "Transit here works well along the corridors it serves, and not at all where it does not. Knowing which is which is the whole skill.",
    answer:
      "MATBUS is the public transit system for Fargo, West Fargo, Moorhead, and the campus areas. Check the current route map, schedule, and fare on the official MATBUS source before you travel, since routes and hours change seasonally and campus service differs from city service. Plan extra time in winter and dress for waiting outside.",
    takeaways: [
      "MATBUS serves the metro including campus corridors.",
      "Routes and hours change seasonally — check the official source.",
      "Evening and weekend service is thinner than weekday service.",
      "Winter waits are the real constraint, not the ride.",
    ],
    keywords: ["MATBUS routes", "Fargo bus", "Moorhead public transit", "campus bus Fargo"],
    sections: [
      {
        heading: "Before your first ride",
        body: [
          "Look up the actual route rather than assuming a straight line — transit routes wander for good reasons. Confirm the last departure of the evening before you plan a return trip. Know your fare situation in advance, including any campus arrangement your student ID may cover.",
        ],
      },
      {
        heading: "Winter riding",
        body: [
          "Dress for standing still, not for walking. A ten-minute wait at fifteen below in a wind is a different activity than a ten-minute walk. Arrive early, stand somewhere sheltered if the stop offers it, and have a backup plan for the last trip of the night.",
        ],
      },
      {
        heading: "Where a neighbor helps",
        body: [
          "Figuring out which stop and which side of the street. Directions to a building once you are off the bus. A hand with bags. Transit help and directions requests are exactly this. Nobody arranges rides through Help Me — it is not a rideshare.",
        ],
      },
    ],
    related: ["resources/matbus", "help/transit-help", "for-people-without-a-car", "help/directions", "for-international-students", "cities/moorhead"],
    faqs: [
      {
        q: "Does MATBUS run late at night?",
        a: "Service ends earlier than many people expect. Check the official schedule for the last trip on your route before you rely on it.",
      },
      {
        q: "Is there campus service?",
        a: "There is service in the campus corridors, and campus routes can differ from city routes. Confirm with MATBUS and your campus.",
      },
    ],
  }),

  page({
    slug: "guides/what-to-do-if-your-car-wont-start",
    kind: "guide",
    title: "What to do when your car will not start in Fargo",
    description:
      "How to tell a dead battery from something worse, what to try in order, and when to stop trying and call a tow in Fargo–Moorhead.",
    h1: "Your car will not start. Now what?",
    eyebrow: "how-to",
    lead: "Ninety seconds of diagnosis saves an hour of guessing, especially when it is cold enough that guessing has a cost.",
    answer:
      "Listen first. Nothing at all usually means a dead battery or a bad connection. Rapid clicking means the battery is nearly dead. Strong cranking without catching means the battery is fine and the problem is elsewhere — fuel, ignition, or the cold itself. Two failed attempts is the signal to stop and call for a jump or a tow.",
    steps: [
      { name: "Turn everything off", text: "Headlights, heater, radio, and any chargers. Give whatever charge is left to the starter." },
      { name: "Listen to what it does", text: "Silence, clicking, or strong cranking each point somewhere different." },
      { name: "Check the obvious", text: "Is it in park? Is the wheel locked against the ignition? Are the battery terminals corroded or loose?" },
      { name: "Try twice, not ten times", text: "Repeated attempts drain the battery and can flood an engine. Two honest tries is enough information." },
      { name: "Call the right help", text: "A jump for a dead battery. A tow for anything else. 911 if you are stranded somewhere unsafe or dangerously cold." },
    ],
    takeaways: [
      "Silence or clicking points at the battery.",
      "Strong cranking without starting is not a battery problem.",
      "Cold makes marginal batteries fail all at once across the metro.",
      "Two tries, then get help — do not keep cranking.",
    ],
    keywords: ["car won't start Fargo", "clicking sound starting car", "dead battery symptoms"],
    sections: [
      {
        heading: "Reading the symptoms",
        body: [
          "Dashboard lights that dim dramatically when you turn the key, or a rapid machine-gun clicking, is a battery with nothing left. Complete silence can be a dead battery, a loose terminal, or a bad connection. A strong, healthy crank that never catches is a different family of problem, and no amount of jumping fixes it.",
        ],
      },
      {
        heading: "The Fargo winter version",
        body: [
          "Cold reduces available battery power exactly when the engine needs more of it. A battery that was marginal in October fails on the first genuinely cold morning, along with several thousand others across the metro. That is why every tow service in town has a queue that day and why a neighbor with cables is worth so much.",
        ],
      },
    ],
    related: ["guides/how-to-jump-start-a-car-safely", "help/jump-start", "help/dead-battery", "seasons/polar-vortex-cold-snap", "lists/parking-lots-where-cars-die-fargo", "help/winter-car-help"],
    faqs: [
      {
        q: "Can I ask for a jump on Help Me?",
        a: "Yes — that is one of the most common requests. Meet in a public, plowed lot and name your location precisely.",
      },
      {
        q: "How do I know the battery is just old?",
        a: "Three to five years is the usual life here, and cold shortens it. If it needed a jump last winter too, replace it before this one.",
      },
    ],
  }),

  page({
    slug: "guides/apartment-move-out-checklist-fargo",
    kind: "guide",
    title: "Apartment move-out checklist for Fargo–Moorhead",
    description:
      "May move-out in the metro: notice, cleaning, deposits, donation instead of dumpsters, and the two-states problem for tenant rules.",
    h1: "Moving out without losing your deposit",
    eyebrow: "how-to",
    lead: "Everyone in this metro moves the same week, which means every truck, elevator, and dumpster is spoken for.",
    answer:
      "Give notice in writing on your lease’s timeline, document the unit’s condition with photos before and after cleaning, and confirm your landlord’s move-out and key return process in writing. North Dakota and Minnesota tenant rules differ, so use the rules for the state you actually rent in — Fargo and West Fargo are ND, Moorhead and Dilworth are MN.",
    steps: [
      { name: "Give written notice", text: "Follow the notice period in your lease and send it in a form you can prove you sent." },
      { name: "Photograph everything", text: "Before cleaning and after, with timestamps. This is the entire deposit argument if there is one." },
      { name: "Book the logistics early", text: "Truck, elevator reservation, and loading zone. In May these run out before the boxes do." },
      { name: "Donate what is usable", text: "Working furniture, kitchenware, and clothing have destinations here. Check what an organization accepts before loading." },
      { name: "Confirm keys and forwarding address", text: "Get the key return and deposit-return process in writing, with an address to send it to." },
    ],
    takeaways: [
      "Photos before and after are the deposit’s best defense.",
      "ND and MN tenant rules differ across the river.",
      "May capacity is the constraint — book everything early.",
      "Usable items belong at donation programs, not the dumpster.",
    ],
    keywords: ["move out checklist Fargo", "security deposit North Dakota", "Moorhead apartment move out"],
    sections: [
      {
        heading: "The two-states problem",
        body: [
          "Deposit timelines, notice periods, and tenant protections are set by state law, and this metro sits across a state line. Advice from a friend who rents on the other side of the Red River may be confidently and completely wrong for your lease.",
        ],
      },
      {
        heading: "Where help fits",
        body: [
          "A hand on the heavy end of something, ten minutes at the truck, a second person for a stairwell. Small and finishable. A full move is movers and friends you can feed, not a stranger with an app and no payment involved.",
        ],
      },
    ],
    related: ["seasons/move-out-week", "for-renters", "help/heavy-lifting", "help/move-in", "resources/clay-county-resources", "resources/cass-county-resources"],
    faqs: [
      {
        q: "Can I get help hauling things away?",
        a: "Hauling and disposal are paid services. Help Me has no payments and helpers are not contractors.",
      },
      {
        q: "Who do I ask about a withheld deposit?",
        a: "Legal aid and tenant-resource organizations in your state. A neighbor cannot answer a legal question.",
      },
    ],
  }),

  page({
    slug: "guides/how-to-be-a-good-helper",
    kind: "guide",
    title: "How to be a good Helper on Help Me",
    description:
      "Show up when you say you will, meet in public, keep it short, and know when to decline. What good looks like for approved Helpers in Fargo–Moorhead.",
    h1: "How to be the person people are glad showed up",
    eyebrow: "how-to",
    lead: "The bar is not heroism. It is reliability and a short conversation in a parking lot.",
    answer:
      "Good helping is simple: only accept what you can actually get to, say when you will arrive and then arrive, meet in the public place agreed in chat, do the one thing, and go. Decline anything outside everyday non-emergency help, never accept payment, and use report and block if something feels wrong.",
    takeaways: [
      "Accept only what you can genuinely reach in time.",
      "Communicate arrival time and stick to it.",
      "Decline emergencies, paid tasks, and anything unsafe.",
      "Never accept payment — there are no payments in this app.",
    ],
    keywords: ["good helper etiquette", "helping neighbors Fargo", "Help Me helper tips"],
    sections: [
      {
        heading: "Before you accept",
        body: [
          "Look at where it is and how you are getting there. Accepting a request across town in a snowstorm because you feel bad saying no leaves someone waiting longer than if you had passed. Offers are voluntary and declining is a complete answer.",
        ],
      },
      {
        heading: "During",
        body: [
          "Keep it in the app chat until you meet. Show up where you said. Do the thing that was asked and not a list of extra things nobody requested. If the request turns out to be bigger than described — a full move, a repair, anything requiring a license — say so kindly and stop.",
        ],
        bullets: [
          "Public meeting place, every time",
          "Short, specific, finished",
          "No payment, no tips, no side arrangements",
          "Report and block are available to you too",
        ],
      },
      {
        heading: "After",
        body: [
          "Confirm completion so the request closes and exact location sharing ends. Leave a review if you want. Then let it go — there is no scoreboard here and nobody is counting.",
        ],
      },
    ],
    related: ["helpers", "for-helpers", "guides/how-to-become-a-helper", "questions/how-do-i-become-a-helper", "glossary/completion-and-reviews", "questions/what-should-i-not-ask-for"],
    faqs: [
      {
        q: "Can I decline after accepting?",
        a: "Plans change. Say so in the chat quickly so the person can post again rather than waiting on you.",
      },
      {
        q: "What if someone offers me money?",
        a: "Decline. There are no payments in Help Me and accepting cash turns a neighbor favor into something else entirely.",
      },
    ],
  }),

  page({
    slug: "guides/asking-for-help-when-you-hate-asking",
    kind: "guide",
    title: "How to ask for help when you hate asking",
    description:
      "For people who would rather freeze than post. Why asking is smaller than it feels, and how to make the request in one sentence without explaining yourself.",
    h1: "For people who would rather walk home in the cold",
    eyebrow: "how-to",
    lead: "Upper Midwest culture is generous with help and terrible at requesting it. Both halves of that are true at once.",
    answer:
      "Asking on Help Me is smaller than it feels: no audience sees it, no explanation is required, and a category-only request is understandable to helpers. Pick the category, name a public place, and send it. If nobody accepts, the request closes quietly in two hours and nobody was watching.",
    takeaways: [
      "There is no public feed — nobody sees your request but a few helpers.",
      "Category-only requests are valid; explanations are optional.",
      "An unaccepted request closes on its own, privately.",
      "Helpers volunteer; you are not imposing on anyone assigned to you.",
    ],
    keywords: ["hate asking for help", "asking for help anxiety", "Midwest asking for help"],
    sections: [
      {
        heading: "What you are actually afraid of",
        body: [
          "Usually not the help. It is the audience — the Facebook group where forty people comment, the group chat where you will have to explain, the feeling of being someone with a problem. Help Me removes exactly that part. There is no feed, no comments, and no record for anyone to scroll later.",
        ],
      },
      {
        heading: "The one-sentence version",
        body: [
          "Dead battery, Hornbacher’s lot on 13th, silver Corolla. That is a complete request. You do not owe anyone the story of the day that led to it. Naming a specific public spot does more for acceptance than any amount of context.",
        ],
      },
      {
        heading: "The reciprocity nobody demands",
        body: [
          "You do not owe a favor back. Helpers apply, get approved, and accept voluntarily because they wanted to. Nobody is keeping a ledger, and there is no payment in either direction.",
        ],
      },
    ],
    related: ["guides/how-to-ask-for-help", "questions/what-can-i-ask-for", "for-neighbors", "questions/how-does-matching-work", "help", "community"],
    faqs: [
      {
        q: "Will people see that I needed help?",
        a: "Only the approved helpers offered your request, and only while it is live. There is no public feed.",
      },
      {
        q: "What if I get turned down?",
        a: "Nobody is turned down out loud. If nobody accepts, the request just closes and you can ask again.",
      },
    ],
  }),
];
