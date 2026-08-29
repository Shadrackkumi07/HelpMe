import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const HELP_PAGES: SeoPage[] = [
  page({
    slug: "help",
    kind: "hub",
    title: "Everyday things you can ask for on Help Me",
    description:
      "Jump starts, walks to the car, study, tech, snow, and move-in — everyday non-emergency help in Fargo–Moorhead. Neighbors, not professionals.",
    h1: "Everyday things you can ask for",
    eyebrow: "help",
    lead: "The day stalls. Nobody is dying. You still need a hand. These pages are the honest list of what that looks like in Fargo–Moorhead — and the equally honest list of what a neighbor is not.",
    priority: 0.9,
    keywords: ["ask for help Fargo", "jump start Fargo", "community help Moorhead", "Help Me categories"],
    sections: [
      {
        heading: "A sentence is enough",
        body: [
          "Open the live map, choose I need help, pick a category, add a sentence if you want. Category-only still makes sense to a helper. Details and a public meeting-place label are optional. The ask goes to approved helpers nearby — not to a timeline, not to a Facebook argument about which shop is cheapest.",
          "Matching considers helpers who are online, suitable for the category, recently active, and not blocked. Up to ten eligible people may get a short-lived private offer. The first to accept gets the request. A 1:1 chat opens. You meet in public. Both people mark it done.",
        ],
      },
      {
        heading: "Neighbors, not a marketplace",
        body: [
          "Help Me is not 911, not campus police, not a paid gig board, and not a locksmith dispatch. A jump start is someone with cables. A locked-out ask is a neighbor, not a professional entry. A flat tire is a spare and a jack, not a shop. If you need a contractor, hire a contractor.",
        ],
        bullets: [
          "Cars: jump starts, dead batteries, winter stalls, flats, a shove out of snow",
          "Walking: a walk to the car, a safety walk, a community walk — not an official campus escort",
          "Campus life: study, tech, wifi, printing, directions, lost and found",
          "Hands: heavy lifting, move-in, snow, a local guide, extra eyes, transit questions",
        ],
      },
      {
        heading: "The rules do not change by category",
        body: [
          "Approved helpers only — identity evidence plus a current staff decision, not a background check. Live help shows as a coarse area of about 500 meters. Exact location is opt-in after accept. Report, block, and 911 still exist. You can delete your account from the app by typing DELETE. iPhone, TestFlight, iOS 15+. Questions: support@helpme.fyi.",
        ],
      },
    ],
    related: ["how-it-works", "safety", "cities/fargo", "for-students", "not-911", "helpers"],
    faqs: [
      {
        q: "Is this a list of paid services?",
        a: "No. Help Me is not a gig marketplace. Helpers are approved community members. Do not expect a professional, a invoice, or an ETA.",
      },
      {
        q: "What if my need is not listed?",
        a: "If it is everyday, non-emergency, and a neighbor could actually do it, ask in a sentence. If it needs a license, a tow truck, or 911, use that instead.",
      },
      {
        q: "What if nobody accepts?",
        a: "A request stays open up to two hours, then it closes. You can try again. Only one live request at a time.",
      },
    ],
  }),
  page({
    slug: "help/jump-start",
    kind: "help",
    title: "Jump start help in Fargo–Moorhead",
    description:
      "Ask an approved neighbor for jumper cables in Fargo, Moorhead, or West Fargo. Public lots. Not a mechanic, not a tow, and not 911.",
    h1: "A jump start, from someone nearby",
    eyebrow: "cars",
    lead: "The click. The dash that looks like a rumor of electricity. West Acres, an NDSU ramp, a Davies lot after a game — Fargo winters kill batteries in public. That is a neighbor with cables, not a career.",
    keywords: ["jump start Fargo", "jumper cables Moorhead", "dead car West Fargo", "jump start NDSU"],
    sections: [
      {
        heading: "Where cars actually sit down",
        body: [
          "West Acres lots. Broadway street parking after a show. NDSU ramps after a night class. MSUM and Concordia lots on the Minnesota side. 13th Avenue. Veterans Boulevard. A helper is someone with cables who can meet you in that public place — not a mobile mechanic, not a tow, not a shop that will sell you a battery at 9 p.m.",
        ],
      },
      {
        heading: "How the ask works",
        body: [
          "Post jump start. Add a sentence if you want — “West Acres, north lot” is plenty. Approved helpers nearby may get a private offer. The first to accept opens a 1:1 chat. You decide what location you share. Meet in public. Both people confirm when the engine is running, or when it is not and you are calling someone with a truck.",
        ],
      },
      {
        heading: "What this is not",
        body: [
          "It is not roadside assistance you pay for. It is not a guarantee. If the car is in a traffic lane, if someone is hurt, if it is more than a battery, that is 911 or a tow — not a stranger with cables. Helpers hold a current staff-reviewed approval. That is not a background check.",
        ],
      },
    ],
    related: [
      "help/dead-battery",
      "help/winter-car-help",
      "help/flat-tire",
      "how-it-works",
      "safety",
      "cities/fargo",
      "campuses/ndsu",
    ],
    faqs: [
      {
        q: "Do I have to share my exact parking stall?",
        a: "No. The map shows a coarse area of about 500 meters. Exact location is off until a helper accepts and you consent. A public lot label is enough.",
      },
      {
        q: "What if the jump does not work?",
        a: "Then it was never a cables problem. Call a tow or a shop. The helper is not obligated to diagnose an alternator in a West Acres wind.",
      },
      {
        q: "Is this available at NDSU?",
        a: "Campus lots are a common place for the ask. NDSU Police still handle campus emergencies. Help Me is community help.",
      },
    ],
  }),
  page({
    slug: "help/dead-battery",
    kind: "help",
    title: "Dead battery help in Fargo–Moorhead",
    description:
      "January batteries in Fargo lots — West Acres, campus ramps, 13th Avenue. Ask a neighbor with cables. Not a shop, not a tow dispatch.",
    h1: "The battery gave up. That is a whole category.",
    eyebrow: "cars",
    lead: "In this metro, “dead battery” is not a metaphor. It is January, a parking lot, and a car that was fine at lunch. You do not need a Facebook thread. You need cables and a public place to use them.",
    keywords: ["dead battery Fargo", "car battery winter ND", "West Acres dead battery", "battery help Moorhead"],
    sections: [
      {
        heading: "Cold is the mechanic you did not hire",
        body: [
          "A Fargo battery that is tired in October is fiction in January. West Acres, the 45th Street strip, NDSU ramps, a Moorhead lot off 8th Street — the car sits, the cold works, the dash dies. Jump-start is the verb. Dead battery is the reason you are still in the lot when the mall lights change.",
        ],
      },
      {
        heading: "Ask a neighbor, not a parts counter",
        body: [
          "Post the ask. An approved helper with cables may accept. Chat is private. Meet in public. They are not selling you an Optima out of a trunk, and they are not a warranty. If the jump takes and the car dies again at the next light, that is a shop. If nobody is in danger, it is still not 911.",
        ],
      },
      {
        heading: "Location stays coarse until you say yes",
        body: [
          "Live help shows as an approximate area, not a pin on your stall. After someone accepts, you can share more, or you can keep meeting at a vestibule and walking out together. Report and block stay one tap away. Account delete is yours: type DELETE in Account.",
        ],
      },
    ],
    related: [
      "help/jump-start",
      "help/winter-car-help",
      "how-it-works",
      "safety",
      "cities/fargo",
      "cities/moorhead",
      "campuses/ndsu",
    ],
    faqs: [
      {
        q: "Is dead battery different from jump start?",
        a: "Same winter, same cables. This page is for the people who searched the diagnosis. The ask in the app is still everyday car help from a neighbor.",
      },
      {
        q: "Will a helper bring a new battery?",
        a: "Do not expect that. A neighbor may have cables. A parts store sells batteries. Help Me is not AutoZone.",
      },
      {
        q: "What about a battery on campus?",
        a: "Community help is allowed. Official campus police are still the right call for emergencies. NDSU, MSUM, and Concordia public safety are not this app.",
      },
    ],
  }),
  page({
    slug: "help/winter-car-help",
    kind: "help",
    title: "Winter car help in Fargo–Moorhead",
    description:
      "Frozen doors, packed-in stalls, dead batteries, a shove out of snow. Fargo winter car help from neighbors — not a plow, not a tow.",
    h1: "Winter car help, which is just Fargo from November on",
    eyebrow: "winter",
    lead: "The season here is a mechanical fact. Doors freeze. Tires sit in ruts. Batteries quit. You need a human in a hat, not a metaphor about resilience.",
    keywords: ["winter car help Fargo", "frozen car North Dakota", "snowed in Fargo", "Fargo winter battery"],
    sections: [
      {
        heading: "What winter actually does to a car here",
        body: [
          "A packed stall behind Scheels. A door that will not unstick on 13th Avenue. An NDSU ramp that looks plowed until you try to leave it. A West Fargo driveway that is a neighbor job, not a city contract. Winter car help is the bundle: cables, a shove, a second pair of gloves, someone who will stand there while you try the key again.",
        ],
      },
      {
        heading: "A neighbor is not a fleet",
        body: [
          "Help Me does not send a plow. It does not send a tow. It does not thaw a lock with professional tools. An approved helper nearby might have cables, a shovel, or ten minutes. If the car is in a lane, if someone is trapped, if it is actually dangerous, call 911. If you need a contracted plow, call a contracted plow.",
        ],
      },
      {
        heading: "Meet in public, even when the weather is the story",
        body: [
          "A grocery vestibule is still better than a dark residential street. The map stays coarse until you consent after accept. Chat is 1:1. Helpers need a current staff-reviewed approval. iPhone via TestFlight, iOS 15+. support@helpme.fyi if the app itself is the thing that froze.",
        ],
      },
    ],
    related: [
      "help/jump-start",
      "help/dead-battery",
      "help/snow-help",
      "help/flat-tire",
      "how-it-works",
      "safety",
      "cities/fargo",
    ],
    faqs: [
      {
        q: "Can someone dig my car out?",
        a: "They might shovel or push. They are not a plow service and not on a clock. Say what you actually need in a sentence.",
      },
      {
        q: "Is a frozen door a Help Me ask?",
        a: "If a neighbor can reasonably help and nobody is in danger, yes. If you are locked in a dangerous situation, call 911.",
      },
      {
        q: "Does this work in Moorhead and West Fargo too?",
        a: "Yes. The winter does not stop at the river or at Sheyenne Street. Matching is local to who is online.",
      },
    ],
  }),
  page({
    slug: "help/locked-out",
    kind: "help",
    title: "Locked out in Fargo–Moorhead — neighbors, not locksmiths",
    description:
      "Locked out of a car or building in Fargo? A neighbor might help. They are not a locksmith, and there is no promise they can get you in.",
    h1: "Locked out. A neighbor is not a locksmith.",
    eyebrow: "cars",
    lead: "Keys in the ignition, you on the sidewalk, Broadway going by like nothing happened. Someone nearby might have a spare minute. That is not the same thing as a licensed locksmith, and we will not pretend it is.",
    keywords: ["locked out Fargo", "locked out of car Fargo", "locksmith vs neighbor", "keys locked in car ND"],
    sections: [
      {
        heading: "Say the limitation before the hope",
        body: [
          "A Help Me helper is an approved community member. They might hold a spare house key you already trusted them with. They might give you a ride to a spare. They might stand with you while you call a locksmith. They might have no way into that car, and that is the usual case. Do not post this ask expecting professional entry tools.",
        ],
      },
      {
        heading: "Car lots and apartments are different problems",
        body: [
          "A car in a West Acres lot is a public, visible problem — still not a license to force a door. An apartment lock is a landlord, a locksmith, or a person you already live with. Help Me is not a way around that. If a child or a pet is in danger inside a locked car, that is 911, immediately, not an app offer.",
        ],
      },
      {
        heading: "How to ask without lying to yourself",
        body: [
          "Post locked out. Write the sentence: keys in the car, need a ride to a spare, need company while you wait. Meet in public. Chat is private. Exact location stays off until you consent. If the honest need is a locksmith, call a locksmith. The app will still be here for the jump start later.",
        ],
      },
    ],
    related: ["help/jump-start", "help/walk-to-car", "how-it-works", "safety", "not-911", "cities/fargo"],
    faqs: [
      {
        q: "Will a helper open my car?",
        a: "Probably not, and they should not be asked to force a lock. They are neighbors, not locksmiths. Call a professional if you need the door opened.",
      },
      {
        q: "What if a kid is locked in the car?",
        a: "Call 911. Do not wait on an app match. Help Me is not emergency response.",
      },
      {
        q: "Can I ask for a ride to my spare key?",
        a: "You can ask. A helper may or may not be able to do that. There is no paid driver and no guaranteed yes.",
      },
    ],
  }),
  page({
    slug: "help/safety-walk",
    kind: "help",
    title: "A safety walk in Fargo–Moorhead",
    description:
      "Ask an approved neighbor to walk with you in Fargo, Moorhead, or West Fargo. Public streets. Not police, not 911, not a campus escort.",
    h1: "A walk with someone, on purpose",
    eyebrow: "walking",
    lead: "The block is lit enough and still feels too long. You want a second pair of feet, not a squad car. That is a safety walk: a neighbor, a public sidewalk, a destination you both understand.",
    keywords: ["safety walk Fargo", "walk with me Fargo", "not 911 walk", "Broadway walk Fargo"],
    sections: [
      {
        heading: "Public ground, two people, one destination",
        body: [
          "Downtown Broadway. A stretch from a library to a lot. A walk from a bus stop to a well-lit door. You post the ask. An approved helper may accept. Chat is 1:1. You meet in a public place and you walk in a public place. If you are in danger, threatened, or watching a crime, that is 911 first. This app is the everyday version.",
        ],
      },
      {
        heading: "This is not a patrol",
        body: [
          "Help Me does not dispatch security. Helpers are not guards, not off-duty police, not a neighborhood-watch franchise. They are approved community members who said they could walk with someone. Report and block exist because a walk can still go wrong. Leave if it feels wrong. You do not owe politeness to a sidewalk.",
        ],
      },
      {
        heading: "Campus walks have an official option",
        body: [
          "NDSU Police, MSUM Public Safety, and Concordia Public Safety run official campus safety and escort programs. Use those when you want the institution. A Help Me safety walk is community help. The campus-escort page spells out the difference so nobody confuses a neighbor with campus police.",
        ],
      },
    ],
    related: [
      "help/walk-to-car",
      "help/campus-escort",
      "safety",
      "not-911",
      "how-it-works",
      "cities/fargo",
      "campuses/ndsu",
    ],
    faqs: [
      {
        q: "Is a safety walk an emergency response?",
        a: "No. If you are in danger, call 911. A safety walk is everyday company on a public route.",
      },
      {
        q: "Can I see the helper’s exact location first?",
        a: "The open map is coarse, about 500 meters. Exact sharing is opt-in after they accept, and only with that person.",
      },
      {
        q: "What if I want an official campus escort instead?",
        a: "Call NDSU Police, MSUM Public Safety, or Concordia Public Safety. Help Me is not those offices.",
      },
    ],
  }),
  page({
    slug: "help/walk-to-car",
    kind: "help",
    title: "Walk to the car in Fargo–Moorhead",
    description:
      "A walk from the library, the mall, or a ramp to your car in Fargo. Approved neighbor, public place. Not campus police, and not 911.",
    h1: "Walk me to the car",
    eyebrow: "walking",
    lead: "The building was full. The lot is not. NDSU ramps, West Acres after close, a Moorhead lot off campus — a walk to the car is the smallest ask that still changes the walk.",
    keywords: ["walk to car Fargo", "parking ramp NDSU", "West Acres parking", "walk to car Moorhead"],
    sections: [
      {
        heading: "The lots this metro actually uses",
        body: [
          "NDSU parking ramps after a late class. West Acres when the stores have thinned out. A Broadway garage. An MSUM or Concordia lot. 13th Avenue commercial. You want someone to walk the distance with you, not a debate about streetlights in a group chat.",
        ],
      },
      {
        heading: "Ask it as a neighbor walk",
        body: [
          "Post walk to the car. Name a public meeting point if you want — the union doors, the mall vestibule, the library steps. An approved helper may accept. Private chat. Coarse map until you consent. You walk together in public and you are done. They are not a driver, not a security guard, and not on a shift.",
        ],
      },
      {
        heading: "If it is more than a walk, stop using the app",
        body: [
          "Someone following you, a threat, a medical problem — 911 or campus police. NDSU, MSUM, and Concordia have official public safety numbers. Help Me will still be here tomorrow for the ordinary dark lot. It will not dispatch anyone tonight.",
        ],
      },
    ],
    related: [
      "help/safety-walk",
      "help/campus-escort",
      "safety",
      "not-911",
      "how-it-works",
      "cities/fargo",
      "campuses/ndsu",
      "campuses/msum",
    ],
    faqs: [
      {
        q: "Can a helper walk me through a campus ramp?",
        a: "Yes, as community help, if they accept. For an official campus escort, call campus public safety instead.",
      },
      {
        q: "Do I share my stall number?",
        a: "Only if you want to, after someone accepts. A building entrance is a better default meeting label.",
      },
      {
        q: "What about West Acres specifically?",
        a: "A mall lot is a common, public place for this ask. Meet inside a vestibule first if the lot feels empty.",
      },
    ],
  }),
  page({
    slug: "help/campus-escort",
    kind: "help",
    title: "Campus walk vs official escort in Fargo–Moorhead",
    description:
      "Help Me is a community walk with an approved neighbor — not NDSU Police, not MSUM Public Safety, not Concordia’s official escort.",
    h1: "A community walk is not a campus escort",
    eyebrow: "campus",
    lead: "NDSU, MSUM, and Concordia already run official public safety and escort programs. Those are the institutions. Help Me is a neighbor who can walk with you. Mixing those up is how people get the wrong phone in their hand.",
    keywords: [
      "NDSU escort",
      "MSUM public safety",
      "Concordia escort",
      "campus walk Fargo",
      "not campus police",
    ],
    sections: [
      {
        heading: "Official escorts stay official",
        body: [
          "If you want a campus-employed safety walk, call the campus. NDSU Police, MSUM Public Safety, and Concordia Public Safety publish their own numbers and procedures. Help Me does not dispatch them, does not stand in for them, and does not see your campus ID as a helper badge.",
        ],
      },
      {
        heading: "What the app can actually do",
        body: [
          "An approved community helper may walk with you from a public place to another public place — a union to a ramp, a library to a lot. Chat is private. Location is coarse until you consent. They are not campus police, not a contracted escort, and not on duty because of a student fee. Use the official program when you want the official program.",
        ],
      },
      {
        heading: "Emergencies skip both and go to 911",
        body: [
          "Danger, crime, injury — 911, then campus police. Do not wait out a two-hour help request. The resource pages on this site point at official campus safety numbers. Bookmark those. Use this page to understand the difference, not to replace the office.",
        ],
      },
    ],
    related: [
      "help/safety-walk",
      "help/walk-to-car",
      "resources/ndsu-safety",
      "campuses/ndsu",
      "campuses/msum",
      "campuses/concordia",
      "safety",
      "not-911",
      "how-it-works",
    ],
    faqs: [
      {
        q: "Does Help Me replace NDSU Police escorts?",
        a: "No. Call NDSU Police for an official campus escort. Help Me is community help from an approved neighbor.",
      },
      {
        q: "What about MSUM or Concordia?",
        a: "Same split. MSUM Public Safety and Concordia Public Safety are official. The app is not their dispatch.",
      },
      {
        q: "Can I request a campus walk in the app anyway?",
        a: "You can ask an approved helper to walk with you in public. That is not an institutional escort and not a guarantee.",
      },
      {
        q: "Is a .edu email a helper approval?",
        a: "No. Helping requires a current staff review of identity evidence. A campus login is not a badge.",
      },
    ],
  }),
  page({
    slug: "help/study-buddy",
    kind: "help",
    title: "Find a study buddy in Fargo–Moorhead",
    description:
      "Ask for a study session at NDSU, MSUM, or Concordia — Memorial Union, a library table. Not a paid tutor, and not a dating app.",
    h1: "A study buddy, without the group chat of 200",
    eyebrow: "campus",
    lead: "You need another person at the table, not a performance in a class Discord. Help Me can ask approved people nearby for a study session. It cannot sell you a GPA.",
    keywords: ["study buddy NDSU", "MSUM study", "Concordia study session", "study help Fargo"],
    sections: [
      {
        heading: "Campus tables this is built for",
        body: [
          "Memorial Union. A library floor. An MSUM building you can actually find. Concordia’s campus when you do not want to study in a room alone. Post study buddy, add the subject in a sentence if you want, meet in public. The point is a table with another adult, not a private apartment and not a paid tutoring shop.",
        ],
      },
      {
        heading: "Not a tutor marketplace",
        body: [
          "Helpers are community members with a current staff-reviewed approval. They might be good at the class. They might only be good at sitting there so you stay. They are not contractors. They are not a dating pool. If you want a professional tutor, hire one through official campus resources.",
        ],
      },
      {
        heading: "High school is a different sentence",
        body: [
          "Help Me is an adult community app. It is not a K–12 homework network and not a way for high school students to meet strangers. College students and other adults can ask. Minors should use school and family channels. Public places, private chat, report and block — same rules as a jump start.",
        ],
      },
    ],
    related: [
      "for-students",
      "campuses/ndsu",
      "campuses/msum",
      "campuses/concordia",
      "help/tech-support",
      "how-it-works",
      "safety",
    ],
    faqs: [
      {
        q: "Is this a paid tutor?",
        a: "No. Help Me is not a gig marketplace. If you need professional tutoring, use campus academic resources.",
      },
      {
        q: "Where should we meet?",
        a: "A public campus place: a union, a library, a coffee shop. Exact location is optional after someone accepts.",
      },
      {
        q: "Can high school students find a study partner here?",
        a: "No. Help Me is not a K–12 student product. Use official school and family channels.",
      },
    ],
  }),
  page({
    slug: "help/tech-support",
    kind: "help",
    title: "Tech support from a neighbor in Fargo–Moorhead",
    description:
      "Phone, laptop, or printer settings — ask an approved neighbor at NDSU, MSUM, or in town. Not campus IT, and not a Genius Bar.",
    h1: "Tech support, the neighbor kind",
    eyebrow: "campus",
    lead: "The laptop is a brick and the assignment is due. Someone nearby might know the setting. They are not Information Technology Services, and they are not Apple.",
    keywords: ["tech support NDSU", "laptop help Fargo", "phone help Moorhead", "campus tech neighbor"],
    sections: [
      {
        heading: "What a neighbor can actually fix",
        body: [
          "A Wi-Fi toggle. A printer queue. An iPhone setting. A login screen that looks haunted. Meet in a public place — a union, a library, a coffee shop on Broadway — and look at the thing together. Chat is private. They might solve it in ten minutes. They might tell you it is a hardware problem and walk away. Both are honest outcomes.",
        ],
      },
      {
        heading: "Campus IT still exists",
        body: [
          "NDSU, MSUM, and Concordia run official technology help. Use those offices for accounts, campus systems, and anything that needs an employee. Help Me is community help. A helper’s current approval is identity evidence plus a staff decision, not a certification, not a background check, not a student-worker shift.",
        ],
      },
      {
        heading: "Do not hand over the keys to your life",
        body: [
          "Do not share passwords. Do not install remote-access tools for a stranger. Meet in public. Watch the screen. Report and block if it feels wrong. If the device is evidence in a crime or you are being scammed, that is official channels, not an app offer.",
        ],
      },
    ],
    related: [
      "help/campus-wifi",
      "help/printing",
      "campuses/ndsu",
      "campuses/msum",
      "how-it-works",
      "safety",
      "cities/fargo",
    ],
    faqs: [
      {
        q: "Will a helper fix my laptop for money?",
        a: "Help Me is not paid tech support. If you need a shop, use a shop. A neighbor might look at a setting with you.",
      },
      {
        q: "Is this NDSU IT?",
        a: "No. Campus technology offices remain official. This is community help.",
      },
      {
        q: "Should I give them my password?",
        a: "No. Sit together in public. Keep your logins. If they ask for remote control of your whole life, leave and report.",
      },
    ],
  }),
  page({
    slug: "help/campus-wifi",
    kind: "help",
    title: "Campus Wi-Fi help in Fargo–Moorhead",
    description:
      "Cannot get on campus Wi-Fi at NDSU, MSUM, or Concordia? A neighbor might know the room that works. They are not campus IT.",
    h1: "Campus Wi-Fi, when the network is a rumor",
    eyebrow: "campus",
    lead: "The syllabus assumed you were online. The union is a Faraday cage today. Someone who already fought this building might know which floor actually works. That is the ask. Admin access is not.",
    keywords: ["NDSU wifi", "MSUM wifi", "Concordia wifi", "campus internet help Fargo"],
    sections: [
      {
        heading: "The human version of “have you tried forgetting the network”",
        body: [
          "Post campus wifi. Add the building if you know it. An approved helper may accept and walk you to a place that actually has a signal, or sit with you while you toggle the obvious things. Meet in public. They cannot reset eduroam for you. They cannot see the campus controller. They are a person with a phone that connected last Tuesday.",
        ],
      },
      {
        heading: "Official IT is still the office",
        body: [
          "Account lockouts, registration holds, required device setup — campus IT. Help Me does not provision access and does not ingest outage status. If the whole campus is down, a neighbor will not magic a packet. If you just need a working corner and a second pair of eyes, that is closer to why this category exists.",
        ],
      },
      {
        heading: "Same safety as every other ask",
        body: [
          "Coarse map. Private chat after accept. Exact location only with consent. Report and block. This is not 911 and not campus police. iPhone, TestFlight, iOS 15+.",
        ],
      },
    ],
    related: [
      "help/tech-support",
      "help/printing",
      "help/directions",
      "campuses/ndsu",
      "campuses/msum",
      "campuses/concordia",
      "how-it-works",
      "safety",
    ],
    faqs: [
      {
        q: "Can a helper log into campus Wi-Fi as me?",
        a: "They should not, and you should not hand them your credentials. Sit together. Keep your login.",
      },
      {
        q: "What if the campus network is actually down?",
        a: "Then you need official IT status, not a neighbor. Help Me does not publish outage boards.",
      },
      {
        q: "Does this work off campus too?",
        a: "The category is campus-flavored. A neighbor might still help you find working internet in a public place. They are not your ISP.",
      },
    ],
  }),
  page({
    slug: "help/printing",
    kind: "help",
    title: "Printing help on Fargo–Moorhead campuses",
    description:
      "The residence-hall printer failed and the paper is due. Ask a neighbor who knows the union queue. Not a copy shop, not campus IT.",
    h1: "Printing, which is always due in twelve minutes",
    eyebrow: "campus",
    lead: "The job is in the queue. The queue is a myth. Someone on this campus has already lost a fight with that printer and might still help you win the next one.",
    keywords: ["NDSU printing", "MSUM printer", "campus printing Fargo", "print help Concordia"],
    sections: [
      {
        heading: "Union printers, hall printers, the last ten pages",
        body: [
          "NDSU, MSUM, Concordia — each has official print locations. Help Me is the neighbor who knows which one is actually working at 8:40 p.m., or who will walk with you to it. They are not a copy shop on 13th Avenue. They are not obligated to print your thesis on their own paper.",
        ],
      },
      {
        heading: "Ask clearly, meet in public",
        body: [
          "Post printing. “Need the union printer, job won’t release” is a better sentence than “help.” An approved helper may accept. Private chat. Public meeting place. If the real need is a paid print shop, go to a paid print shop. If the real need is campus IT, go to campus IT.",
        ],
      },
      {
        heading: "What we will not pretend",
        body: [
          "Help Me does not run print queues. It does not refund Bison Bucks or student print balances. It does not store your file. Do not send sensitive documents to a stranger. Stand there. Watch the pages come out. Report if anything feels off.",
        ],
      },
    ],
    related: [
      "help/tech-support",
      "help/campus-wifi",
      "help/directions",
      "campuses/ndsu",
      "campuses/msum",
      "how-it-works",
      "safety",
      "for-students",
    ],
    faqs: [
      {
        q: "Will a helper print it at their apartment?",
        a: "Meet in public. A campus print station or a public business is the right default. Do not go to a stranger’s residence for a document.",
      },
      {
        q: "Is this a print shop?",
        a: "No. If you need copies bound by morning, use a shop. This is neighbor help around campus printers.",
      },
      {
        q: "What if I cannot find the print room?",
        a: "That is half directions, half printing. Ask in a sentence. A helper may walk you there.",
      },
    ],
  }),
  page({
    slug: "help/directions",
    kind: "help",
    title: "Directions in Fargo–Moorhead",
    description:
      "Lost on an NDSU campus, looking for Broadway, first week in Moorhead. Ask a neighbor. Not a tour company, and not campus police.",
    h1: "Directions, because this grid only looks simple",
    eyebrow: "getting around",
    lead: "North-south numbered streets, a river that is a state line, three campuses that all say “the union” like there is one. A person standing there is still better than a blue dot that thinks 12th is 13th.",
    keywords: ["directions NDSU", "find Broadway Fargo", "MSUM directions", "lost in Fargo"],
    sections: [
      {
        heading: "The places people actually miss",
        body: [
          "A lecture hall on the NDSU campus that is not where the map pin claimed. Concordia versus MSUM when you are new to Moorhead. Downtown Broadway versus a GPS that dumped you on a one-way. West Acres from campus without taking the scenic I-29 loop. Post directions. Meet in a public, obvious place — a union door, a coffee shop, a well-lit corner.",
        ],
      },
      {
        heading: "A neighbor is not a tour",
        body: [
          "They might walk you a block. They might point and describe. They might ride the same MATBUS direction you need. They are not a paid guide and not campus orientation staff. If you want the official tour, the campuses run those. If you want a local-guide style hang, that is a different category with the same safety rules.",
        ],
      },
      {
        heading: "Do not share a home pin to get un-lost",
        body: [
          "The live map is a coarse area until you consent after accept. A public meeting label is enough. Exact location is optional. Report and block if the help turns into something else. 911 if you are actually unsafe, not merely turned around.",
        ],
      },
    ],
    related: [
      "help/local-guide",
      "help/transit-help",
      "campuses/ndsu",
      "campuses/msum",
      "campuses/concordia",
      "cities/fargo",
      "how-it-works",
      "safety",
    ],
    faqs: [
      {
        q: "Can someone walk me to the building?",
        a: "They might. Ask in a sentence. Meet in public. That is still community help, not an official orientation.",
      },
      {
        q: "Is this only for campus?",
        a: "No. Downtown Fargo, West Fargo commercial strips, Moorhead’s Center Avenue — anywhere a neighbor could reasonably point.",
      },
      {
        q: "What if I am new to town?",
        a: "Read the newcomers pages, then ask. A local-guide request is the broader version of this.",
      },
    ],
  }),
  page({
    slug: "help/lost-and-found",
    kind: "help",
    title: "Lost and found help in Fargo–Moorhead",
    description:
      "Lost keys, a wallet, a bag on campus or Broadway. Extra eyes from approved neighbors — not a recovery agency, and not police.",
    h1: "Lost and found, extra eyes, not a detective",
    eyebrow: "everyday",
    lead: "The keys were in your hand on Broadway. They are not in your hand now. You want more people looking, not a case file. That is the size of this ask.",
    keywords: ["lost keys Fargo", "lost and found NDSU", "lost wallet Moorhead", "found item Fargo"],
    sections: [
      {
        heading: "What a neighbor can do",
        body: [
          "Walk a path you already walked. Check a union lost-and-found with you. Keep an eye out in a coarse area. Meet in public if they think they spotted it. They are not a recovery service, not a pawn-shop investigator, and not the police. Campus and city lost-and-found desks still exist — use those too.",
        ],
      },
      {
        heading: "What not to put in the ask",
        body: [
          "Do not publish account numbers, full IDs, or enough detail that a stranger can fake ownership. A category and a short sentence are enough. Chat is 1:1 after someone accepts. If the item is evidence, or you were robbed, that is police, not an app offer.",
        ],
      },
      {
        heading: "Found something instead?",
        body: [
          "You can still be a helper with a current approval and meet in public to return it. Or take it to official lost-and-found or the campus desk. Do not lure anyone to a private address. Exact location sharing stays consent-only. Report and block if the story feels like a setup.",
        ],
      },
    ],
    related: [
      "help/directions",
      "how-it-works",
      "safety",
      "not-911",
      "cities/fargo",
      "campuses/ndsu",
      "campuses/msum",
    ],
    faqs: [
      {
        q: "Will Help Me track my phone?",
        a: "No. We are not Find My. A neighbor might look with you in a public area. Use official device tools for tracking.",
      },
      {
        q: "Should I post my address because I lost keys to it?",
        a: "No. Meet in public. Tell the helper what they need and nothing extra. Change locks through official means if you must.",
      },
      {
        q: "Is a stolen bike a Help Me ask?",
        a: "Theft is police. Extra eyes after you have filed a report is optional community help, not an investigation.",
      },
    ],
  }),
  page({
    slug: "help/heavy-lifting",
    kind: "help",
    title: "Heavy lifting help in Fargo–Moorhead",
    description:
      "A sofa that will not turn the stair, a dresser, a campus mini-fridge in Fargo. Ask a neighbor. Not movers, and not a paid crew.",
    h1: "Heavy lifting, the neighbor with gloves",
    eyebrow: "hands",
    lead: "The couch is in the hallway and physics has opinions. You need a second body, not a franchise with a truck and a rate card.",
    keywords: ["help lifting Fargo", "move furniture Fargo", "heavy boxes NDSU", "sofa stairs Fargo"],
    sections: [
      {
        heading: "The jobs that stall a Tuesday",
        body: [
          "A sofa in a downtown Fargo stair. A dresser in a south Fargo townhouse. A mini-fridge that seemed funny until the residence hall elevator. A table from a Broadway shop to a car. Post heavy lifting. Say the object in a sentence. Meet in public first if you do not already know the person, then decide how much access you actually grant.",
        ],
      },
      {
        heading: "This is not a moving company",
        body: [
          "No truck unless they happen to have one and offer it. No insurance. No crew of four. No piano down a spiral. If the thing needs professionals, hire professionals. Helpers are approved community members, not contractors. They can decline anything that looks like it will wreck a back or a doorway.",
        ],
      },
      {
        heading: "Houses, halls, and the consent line",
        body: [
          "Exact location is off until you say yes after accept. You can meet at the building entrance instead of posting a unit number on the open map. Chat is private. Report and block. If you are a student in a hall, follow the campus move-in rules — this app does not override them.",
        ],
      },
    ],
    related: [
      "help/move-in",
      "how-it-works",
      "safety",
      "cities/fargo",
      "campuses/ndsu",
      "campuses/msum",
      "for-students",
    ],
    faqs: [
      {
        q: "Will a helper bring a truck?",
        a: "Only if they offer. Do not assume a vehicle. Help Me is not U-Haul and not a paid moving crew.",
      },
      {
        q: "Can they come inside?",
        a: "That is your call after you have a private chat and a public-first meeting if you need one. You can stop sharing location. You can leave.",
      },
      {
        q: "What if someone gets hurt lifting?",
        a: "This is not insured labor. If it looks like a job for movers, call movers. If it is an emergency, call 911.",
      },
    ],
  }),
  page({
    slug: "help/move-in",
    kind: "help",
    title: "Move-in help in Fargo–Moorhead",
    description:
      "NDSU, MSUM, or Concordia move-in weekend — boxes, a mini-fridge, a third-floor carry. Neighbors with hands, not a moving company.",
    h1: "Move-in weekend, extra hands",
    eyebrow: "campus",
    lead: "The street is cones and parents and a mattress that will not fold. Campuses expect the crush. Help Me is how you ask for one more pair of hands without turning it into a classified ad.",
    keywords: ["NDSU move-in", "MSUM move-in", "Concordia move-in", "help moving Fargo campus"],
    sections: [
      {
        heading: "The weekend the metro tilts toward campus",
        body: [
          "NDSU move-in fills north Fargo. MSUM and Concordia fill Moorhead the same week in spirit if not on the same day. Boxes, mini-fridges, the last awkward piece of furniture. Official campus move-in rules still win — loading zones, elevator hours, what you are allowed to prop open. The app does not waive those.",
        ],
      },
      {
        heading: "Ask for hands, not a crew",
        body: [
          "Post move-in. A sentence about the object and the building is enough. An approved helper may accept. Private chat. Meet in a public, obvious spot — a lot, a lobby, a marked unloading zone — before anyone follows you down a hall. They are not a moving company. They might carry a box. They might not have a truck.",
        ],
      },
      {
        heading: "Safety does not take a weekend off",
        body: [
          "Coarse map until consent. Report and block. High school students are not the audience; this is adult community help around college move-in and apartment weekends. If someone is injured, call 911. If you need a real mover, hire a real mover. The two-hour window still applies. Nobody is on a paid clock.",
        ],
      },
    ],
    related: [
      "help/heavy-lifting",
      "for-students",
      "campuses/ndsu",
      "campuses/msum",
      "campuses/concordia",
      "how-it-works",
      "safety",
      "cities/fargo",
    ],
    faqs: [
      {
        q: "Can I hire movers through Help Me?",
        a: "No. It is not a paid marketplace. Helpers are neighbors. Hire a moving company if you need a crew and a truck.",
      },
      {
        q: "Does this override campus loading rules?",
        a: "No. Follow the campus move-in instructions. Help Me is extra hands, not a permit.",
      },
      {
        q: "Is move-in only for students?",
        a: "Students are the obvious weekend. Apartment move-ins in Fargo, Moorhead, and West Fargo are the same category of ask.",
      },
    ],
  }),
  page({
    slug: "help/snow-help",
    kind: "help",
    title: "Snow help in Fargo–Moorhead",
    description:
      "Shovel a walk, brush off a car, a little extra snow help from a Fargo–Moorhead neighbor. Not a plow service, not the city, not 911.",
    h1: "Snow help, which is not a plow",
    eyebrow: "winter",
    lead: "The walk is a ridge. The car is a drift with a roof. You need a shovel and ten honest minutes, not a contract and a blade on a truck.",
    keywords: ["snow shovel Fargo", "snow help Moorhead", "brush off car Fargo", "not a plow Fargo"],
    sections: [
      {
        heading: "The human-scale storm",
        body: [
          "A sidewalk you cannot legally ignore. A car that has to move before a plow comes through and buries it twice. An older neighbor’s steps. A campus walk you cannot see. Post snow help. Say shovel, brush, or both. Meet in public if you do not already know them. This metro understands snow; it does not always have a spare pair of hands.",
        ],
      },
      {
        heading: "City plows and contractors still exist",
        body: [
          "Fargo, West Fargo, and Moorhead run street plows. Private lots hire services. Help Me does not. A helper might shovel a walk or knock snow off a car. They will not clear a commercial lot, and they should not be asked to. If the snow is an emergency — medical, trapped, dangerous — 911, not an app.",
        ],
      },
      {
        heading: "Winter, privacy, the usual tools",
        body: [
          "Approximate area on the map. Exact location after accept, only if you want. Private 1:1 chat. Current helper approval required. Report, block, delete by typing DELETE. The winter-car-help page covers the engine side of the same season.",
        ],
      },
    ],
    related: [
      "help/winter-car-help",
      "help/jump-start",
      "how-it-works",
      "safety",
      "cities/fargo",
      "cities/moorhead",
      "cities/west-fargo",
    ],
    faqs: [
      {
        q: "Can I request a driveway plow?",
        a: "You can ask. Do not expect a truck. Help Me is not a plow service. Hire one if that is the job.",
      },
      {
        q: "Is this the city’s snow line?",
        a: "No. Street plowing is the city. This is a neighbor with a shovel.",
      },
      {
        q: "What if I cannot get out for a medical reason?",
        a: "If it is an emergency, call 911. Do not wait on a two-hour community offer.",
      },
    ],
  }),
  page({
    slug: "help/local-guide",
    kind: "help",
    title: "A local guide in Fargo–Moorhead",
    description:
      "New to Fargo, NDSU, or Moorhead? Ask an approved neighbor to point at Broadway, West Acres, the river. Not a paid tour company.",
    h1: "A local guide, not a tour bus",
    eyebrow: "getting around",
    lead: "You landed. The grid is numbered and still confusing. Someone who already bought groceries in this cold can walk a public stretch with you and name the places that matter.",
    keywords: ["new to Fargo", "Fargo local guide", "NDSU new student", "Moorhead newcomer help"],
    sections: [
      {
        heading: "What “show me around” can honestly mean",
        body: [
          "Broadway. The difference between Fargo and Moorhead. Where West Acres sits on the west side. Which union is which campus. How 13th Avenue relates to 19th. A public coffee shop, a walk, a few names. That is a local guide on Help Me. It is not a paid itinerary, not a bar crawl package, and not a promise they will spend the day.",
        ],
      },
      {
        heading: "Meet in public, keep it a neighbor",
        body: [
          "Post local guide. Say what you actually need — “first week at NDSU, cannot find anything south of campus.” An approved helper may accept. Private chat. Public meeting place. They are not orientation staff. The campuses run official orientation. The newcomers pages on this site exist so you can read first and ask second.",
        ],
      },
      {
        heading: "Two states, one metro, still not a date",
        body: [
          "Cass County, North Dakota. Clay County, Minnesota. 911 works on both; county services do not copy-paste. A local guide can say that out loud. They should not be treated as a dating setup. Report and block if the walk turns. High school students are not this audience.",
        ],
      },
    ],
    related: [
      "help/directions",
      "help/transit-help",
      "for-newcomers",
      "guides/new-to-fargo",
      "cities/fargo",
      "campuses/ndsu",
      "how-it-works",
      "safety",
    ],
    faqs: [
      {
        q: "Is this a paid tour?",
        a: "No. Help Me is not a tour company. A neighbor might point and walk a public stretch with you.",
      },
      {
        q: "Can they show me bars on Broadway?",
        a: "Adults can meet in public. This is not a nightlife service and not a way to pressure anyone into a night out.",
      },
      {
        q: "I am a new NDSU student. Is this for me?",
        a: "If you are an adult looking for everyday orientation help, yes. Official campus orientation still matters more for the institution.",
      },
    ],
  }),
  page({
    slug: "help/community-watch",
    kind: "help",
    title: "Extra eyes in Fargo–Moorhead — not a neighborhood watch",
    description:
      "Ask an approved neighbor for extra eyes on a public Fargo lot or a walk after dark. Not police, not a watch program, and not 911.",
    h1: "Extra eyes, not a neighborhood watch franchise",
    eyebrow: "everyday",
    lead: "You want someone to look. A lot after a game. A walk to a car. A second person on a public block. That is extra eyes. It is not a badge, not a patrol schedule, and not Fargo Police.",
    keywords: ["extra eyes Fargo", "community watch Fargo", "not neighborhood watch", "public lot Fargo"],
    sections: [
      {
        heading: "Say what you actually mean",
        body: [
          "Walk through a West Acres lot with me. Stand at a union door until my ride shows. Look at a bike rack on campus while I run inside. Those are neighbor-sized. “Patrol my block every night” is not, and Help Me will not pretend we run that.",
        ],
      },
      {
        heading: "Police remain police",
        body: [
          "Crime, threats, someone in danger — 911, Fargo Police, Moorhead Police, West Fargo Police, campus public safety. Community watch on this site is extra eyes from an approved helper who accepted a specific ask. It is not a neighborhood-watch organization, not a vigilante board, and not a substitute for a report to the city.",
        ],
      },
      {
        heading: "How the product still works",
        body: [
          "One request, two hours if nobody accepts, private chat if someone does. Coarse map. Public places. Report and block. Helpers need a current staff-reviewed approval of identity evidence — not a background check, not a security license. If what you want is official, use official.",
        ],
      },
    ],
    related: [
      "help/safety-walk",
      "help/walk-to-car",
      "not-911",
      "safety",
      "resources/fargo-police",
      "how-it-works",
      "cities/fargo",
    ],
    faqs: [
      {
        q: "Is this an official neighborhood watch?",
        a: "No. Help Me does not run a watch program. It is a one-off ask to an approved neighbor.",
      },
      {
        q: "Can I report a crime here instead of to police?",
        a: "No. Report crimes to police. You can also report and block people in the app for product safety.",
      },
      {
        q: "Will helpers sit in a car outside my house?",
        a: "Do not ask for that. Meet in public. Surveillance of a private home is not this product.",
      },
    ],
  }),
  page({
    slug: "help/transit-help",
    kind: "help",
    title: "Transit help in Fargo–Moorhead",
    description:
      "MATBUS questions, campus to West Acres, a walk to the right stop in Fargo–Moorhead. A neighbor, not a taxi, not a driver for hire.",
    h1: "Transit help, which is not a ride service",
    eyebrow: "getting around",
    lead: "The bus is real here. The map is still a puzzle if you are new. Someone who already rides MATBUS might walk you to the stop or tell you which number actually goes to West Acres. That is the whole offer.",
    keywords: ["MATBUS help", "bus Fargo NDSU", "West Acres bus", "transit help Moorhead"],
    sections: [
      {
        heading: "What a neighbor can do with a bus map",
        body: [
          "Which stop. Which route toward NDSU, MSUM, Concordia, downtown Broadway, West Acres. How transfers feel in January. They might walk you to the shelter. They might ride the same direction because they were going anyway. They are not a taxi. Help Me is not a driver marketplace and not Uber inside a community app.",
        ],
      },
      {
        heading: "Official transit stays official",
        body: [
          "MATBUS publishes routes, fares, and alerts. Use that for the last word. Help Me does not ingest the bus feed and does not sell passes. If you need paratransit or a medical ride, that is an official service, not a stranger in the app.",
        ],
      },
      {
        heading: "If what you wanted was a car",
        body: [
          "Say so, and expect a maybe. A helper might offer a one-off neighbor lift. They might not. There is no fare, no ETA, no commercial driver. Meet in public. Do not get in a car with someone if it feels wrong. Report and block. 911 if you are in danger.",
        ],
      },
    ],
    related: [
      "help/directions",
      "help/local-guide",
      "campuses/ndsu",
      "campuses/msum",
      "cities/fargo",
      "how-it-works",
      "safety",
    ],
    faqs: [
      {
        q: "Will someone drive me?",
        a: "Do not count on it. This category is transit help — stops, routes, a walk to the bus. Help Me is not a ride-hailing app.",
      },
      {
        q: "Can a helper explain MATBUS to West Acres?",
        a: "That is a reasonable sentence to post. They still might be wrong, and the official MATBUS map wins.",
      },
      {
        q: "Is this campus transportation?",
        a: "No. Campus and city transit offices remain official. The app is a neighbor who might know the stop.",
      },
    ],
  }),
  page({
    slug: "help/flat-tire",
    kind: "help",
    title: "Flat tire help in Fargo–Moorhead",
    description:
      "A neighbor with a jack and a spare in a Fargo lot — West Acres, an NDSU ramp, 13th Avenue. Not a tire shop, and not a tow truck.",
    h1: "A flat tire, a spare, a neighbor — not a shop",
    eyebrow: "cars",
    lead: "The car lists. The lot is West Acres or an NDSU ramp or 13th Avenue in the wind. Someone nearby might have a jack and the patience to use yours. That is not a tire store, and it will not mount a new set.",
    keywords: ["flat tire Fargo", "spare tire help", "West Acres flat", "tire help NDSU"],
    sections: [
      {
        heading: "What a neighbor can actually do",
        body: [
          "Help you put on the spare you already have. Hold a flashlight. Lend a jack if theirs fits. Stand there so you are not alone in a commercial lot. They are not a mobile tire tech. They may not have a compressor. They should not be expected to plug a sidewall at night in January.",
        ],
      },
      {
        heading: "Shops and tows still exist",
        body: [
          "No spare, damaged rim, on a live roadway, in a blizzard — that is a shop or a tow. Help Me will not dispatch one. If the car is a hazard, if someone is hurt, 911. A public grocery lot is a better place to work than a travel lane. Say that in the sentence when you post.",
        ],
      },
      {
        heading: "Same product rules as a jump start",
        body: [
          "Approved helpers only. Coarse ~500 m area until you consent after accept. Private 1:1 chat. Meet in public. Two hours, then the request closes. Not a paid gig. Not a background-check company. iPhone TestFlight, iOS 15+. support@helpme.fyi if the problem is the app, not the tire.",
        ],
      },
    ],
    related: [
      "help/jump-start",
      "help/winter-car-help",
      "help/dead-battery",
      "how-it-works",
      "safety",
      "cities/fargo",
      "campuses/ndsu",
    ],
    faqs: [
      {
        q: "Will a helper bring a new tire?",
        a: "Do not expect that. A neighbor might help with your spare. A shop sells tires. Help Me is not a shop.",
      },
      {
        q: "What if I have no spare?",
        a: "Call a tow or a shop. A helper cannot invent a tire, and they are not on a commercial hook.",
      },
      {
        q: "Is a flat on I-29 a Help Me ask?",
        a: "A live highway is a hazard. Use official roadside help or 911 if you are in danger. A public lot is the right geography for a neighbor.",
      },
    ],
  }),

  page({
    slug: "help/car-stuck-in-snow",
    kind: "help",
    title: "Car stuck in snow in Fargo–Moorhead",
    description:
      "Stuck in a drift, a berm, or an unplowed lot? What actually gets a car out, what makes it worse, and when it becomes a tow-truck problem.",
    h1: "Stuck in the snow",
    eyebrow: "help topic",
    lead: "The wheels are spinning, the smell is getting worse, and every attempt is digging you further in.",
    answer:
      "A car stuck in a lot or driveway usually needs traction and a push, not more throttle. Clear snow ahead of and behind the drive wheels, put sand, cat litter, or a floor mat down, and rock gently between forward and reverse. Two people make this easy. A car in a ditch or on a highway shoulder is a tow truck, not a neighbor.",
    takeaways: [
      "Spinning the tires polishes ice and digs deeper.",
      "Traction material plus a gentle rock beats horsepower.",
      "Clear the exhaust pipe before running the engine.",
      "Ditches and highways are tow-truck territory.",
    ],
    keywords: ["car stuck in snow Fargo", "stuck in drift North Dakota", "get car unstuck"],
    sections: [
      {
        heading: "What works",
        body: [
          "Dig a short ramp in front of and behind the drive wheels. Put something gritty under them. Straighten the wheels. Ease between drive and reverse to build a rocking motion rather than flooring it. If two people can push while the driver feathers the throttle, most metro-lot situations resolve in a couple of minutes.",
        ],
      },
      {
        heading: "What makes it worse",
        body: [
          "Full throttle, spinning tires, and repeated attempts at the same angle. You melt snow into ice, dig a trench, and can cook a transmission doing it. Also: running the engine with a snow-packed exhaust, which pushes carbon monoxide back into the cabin.",
        ],
      },
      {
        heading: "When to stop and call",
        body: [
          "In a ditch, off a rural road, on a highway shoulder, or high-centered on packed snow — that is a tow. If you are cold, exposed, or in traffic, call 911. Help Me is for the lot-and-driveway version of this problem, and only when someone nearby chooses to accept.",
        ],
      },
    ],
    related: ["guides/digging-out-after-a-snowstorm", "help/snow-help", "seasons/winter-in-fargo-moorhead", "seasons/blizzard-day", "help/winter-car-help", "not-911"],
    faqs: [
      {
        q: "Can someone tow me out with a strap?",
        a: "Strap recoveries can damage vehicles and injure people. That is a job for a tow service, not a favor between strangers.",
      },
      {
        q: "What should I keep in the trunk?",
        a: "A small shovel and a bag of sand or cat litter. Both weigh little and solve most of these.",
      },
    ],
  }),

  page({
    slug: "help/frozen-windshield",
    kind: "help",
    title: "Frozen windshield and frozen car doors",
    description:
      "Ice on the glass, a door that will not open, a wiper welded down. What works in a Fargo–Moorhead deep freeze and what damages the car.",
    h1: "Frozen shut",
    eyebrow: "help topic",
    lead: "It is not just the windshield. It is the door seal, the lock, the wipers, and the fifteen minutes you did not budget.",
    answer:
      "Start the car, run the defroster on low heat first, and scrape mechanically while it warms. Never pour hot water on cold glass — the thermal shock can crack it. For a frozen door, press around the seal to break the ice rather than yanking the handle, and do not force a frozen wiper off the glass.",
    takeaways: [
      "Hot water on cold glass can crack a windshield.",
      "Warm the defroster gradually rather than blasting heat.",
      "Free a frozen door seal by pressing, not pulling.",
      "Lifting wipers before a freeze saves the blades.",
    ],
    keywords: ["frozen windshield", "car door frozen shut", "ice scraper Fargo"],
    sections: [
      {
        heading: "The right sequence",
        body: [
          "Start the engine, set the defroster to a moderate temperature, and begin scraping while it works from the inside out. Clear the whole windshield, not a porthole — clearing a small square is how people miss a pedestrian in a lot. Clear the rear glass, mirrors, headlights, and the roof, because roof snow becomes someone else’s windshield at fifty miles an hour.",
        ],
      },
      {
        heading: "Frozen doors and locks",
        body: [
          "Push firmly along the door seam to crack the ice before pulling the handle; yanking tears rubber seals that then leak all winter. Try a different door. Do not use a lighter on a lock or force a key, and keep a de-icer product in your bag rather than in the locked car.",
        ],
      },
      {
        heading: "The part a neighbor can do",
        body: [
          "Lend a second scraper and five minutes. It is a small ask and it makes a genuine difference when you are late and your hands are already numb.",
        ],
      },
    ],
    related: ["seasons/winter-in-fargo-moorhead", "guides/what-to-keep-in-your-car-in-winter", "help/winter-car-help", "seasons/first-snow", "for-people-new-to-winter", "help/locked-out"],
    faqs: [
      {
        q: "Is it fine to leave the car running to warm up?",
        a: "Check that the exhaust is clear of snow first, never run it in a closed garage, and know that some cities have rules about unattended running vehicles.",
      },
      {
        q: "Do windshield covers help?",
        a: "They save real time on frost. In freezing rain they can freeze down themselves, so they are not magic.",
      },
    ],
  }),

  page({
    slug: "help/carrying-groceries",
    kind: "help",
    title: "A hand carrying groceries in Fargo–Moorhead",
    description:
      "Stairs, ice, a trunk full of bags, and two arms. When a second set of hands is the whole solution — and why this is not a delivery service.",
    h1: "A hand with the bags",
    eyebrow: "help topic",
    lead: "Nobody wants to make four trips up an icy stairwell, and nobody should have to.",
    answer:
      "Carrying help is a small, finishable request: someone meets you at your car and helps move bags to a door or a landing. It is not grocery shopping, not delivery, and not a paid service. Help Me has no payments, so nobody is buying anything for anyone or being reimbursed for a trip.",
    takeaways: [
      "Carrying, not shopping and not delivery.",
      "No payments — nobody buys groceries for anyone.",
      "Best when stairs, ice, or an injury make trips hard.",
      "Meet at the vehicle in a public, lit spot.",
    ],
    keywords: ["help carrying groceries", "grocery help Fargo", "carry bags upstairs"],
    sections: [
      {
        heading: "When it makes sense",
        body: [
          "A third-floor walk-up in February. A recent surgery. A stroller in one hand and a week of groceries in the other. A parking lot that has turned into a rink between you and your door. These are ten-minute problems with an obvious solution.",
        ],
      },
      {
        heading: "Where the line is",
        body: [
          "Nobody shops for you, nobody fronts money, and nobody delivers. Grocery delivery services exist and they are the right tool for that. If food itself is the problem rather than the carrying, food assistance resources are listed under Resources and they are a better answer than a stranger.",
        ],
      },
    ],
    related: ["help/heavy-lifting", "for-seniors", "for-new-parents", "resources/food-assistance-fargo", "questions/what-should-i-not-ask-for", "help/move-in"],
    faqs: [
      {
        q: "Can someone bring me groceries?",
        a: "No. There is no payment or delivery in Help Me. Use a delivery service, or food assistance if cost is the issue.",
      },
      {
        q: "Do I have to let them inside?",
        a: "No. A door or a landing is a completely normal stopping point, and public-by-default is the standard here.",
      },
    ],
  }),

  page({
    slug: "help/furniture-assembly",
    kind: "help",
    title: "Help assembling furniture in Fargo–Moorhead",
    description:
      "A second pair of hands for the step that needs two people. Not a paid handyman service, and not anything requiring a licensed trade.",
    h1: "The step that needs two people",
    eyebrow: "help topic",
    lead: "Most flat-pack furniture is a one-person job with exactly one two-person moment, usually near the end.",
    answer:
      "Assembly help means someone holding the other end while you attach it — a bed frame, a bookshelf being stood up, a table being flipped. It is a short, everyday favor with no payment involved. Anything mounted to a wall, wired, plumbed, or structural should go to a licensed professional instead.",
    takeaways: [
      "Best for the specific step that needs two sets of hands.",
      "No payment and no handyman services.",
      "Nothing electrical, plumbed, or structurally mounted.",
      "Keep it short and keep the request specific.",
    ],
    keywords: ["furniture assembly help", "two person lift", "flat pack help Fargo"],
    sections: [
      {
        heading: "Ask for the moment, not the project",
        body: [
          "Standing a tall bookshelf up. Flipping a table without cracking a leg. Holding a bed rail square while bolts go in. If you ask for the specific moment, it takes ten minutes and everyone leaves happy. If you ask for an evening of assembly, you are asking for unpaid labor and it will not get accepted.",
        ],
      },
      {
        heading: "What to route elsewhere",
        body: [
          "Anchoring heavy furniture into a wall, TV mounts, anything involving wiring, and anything that could fall on a child later. Those are worth a professional, and a rented apartment adds a landlord permission question on top.",
        ],
      },
    ],
    related: ["help/heavy-lifting", "help/move-in", "for-renters", "seasons/fall-move-in-season", "questions/what-should-i-not-ask-for", "questions/can-i-pay-a-helper"],
    faqs: [
      {
        q: "Can I ask someone to mount my TV?",
        a: "No. Wall mounting is a job with real consequences if it fails. Hire someone who does it professionally.",
      },
      {
        q: "Is this a paid task?",
        a: "No. Help Me has no payments at all, and helping is not gig work.",
      },
    ],
  }),

  page({
    slug: "help/tire-pressure",
    kind: "help",
    title: "Low tire pressure help in Fargo–Moorhead",
    description:
      "Cold weather drops tire pressure fast and lights up the dash. What the warning means, what to do about it, and when the tire is actually flat.",
    h1: "The tire light came on",
    eyebrow: "help topic",
    lead: "Every year, the first cold snap turns on a few thousand tire warning lights across this metro on the same morning.",
    answer:
      "Cold air lowers tire pressure measurably, so a sharp temperature drop commonly triggers the warning light on otherwise healthy tires. Check pressure when the tires are cold, fill to the number on the driver’s door jamb — not the number on the tire — and watch for a tire that keeps losing air, which means a leak and a repair shop.",
    takeaways: [
      "Cold snaps trigger warning lights across the metro at once.",
      "Correct pressure is on the driver’s door jamb sticker.",
      "Check when the tires are cold, before driving far.",
      "A tire that repeatedly goes low has a leak — get it repaired.",
    ],
    keywords: ["tire pressure light cold", "low tire pressure Fargo", "winter tire psi"],
    sections: [
      {
        heading: "Why it happens here",
        body: [
          "Air contracts as it cools, so a thirty or forty degree overnight drop takes a noticeable amount of pressure out of every tire in the parking lot. That is normal physics rather than a failure. Topping them up is a five-minute job at any station with a working air pump.",
        ],
      },
      {
        heading: "When it is more than cold",
        body: [
          "If one tire is the only one low, or it goes low again within a few days, there is a puncture or a bad valve. Driving on a genuinely underinflated tire ruins it and handles badly on ice. Get it looked at rather than topping it up every week.",
        ],
      },
    ],
    related: ["help/flat-tire", "help/winter-car-help", "seasons/first-snow", "guides/what-to-keep-in-your-car-in-winter", "seasons/winter-in-fargo-moorhead", "for-commuters"],
    faqs: [
      {
        q: "Should I use the number printed on the tire?",
        a: "No. That is the maximum for the tire, not the correct pressure for your car. Use the door jamb sticker.",
      },
      {
        q: "Can a helper change my tire?",
        a: "Some people will help with a spare in a safe lot. On a road shoulder, call roadside assistance instead — that is not a place to kneel next to traffic.",
      },
    ],
  }),

  page({
    slug: "help/bike-help",
    kind: "help",
    title: "Bike help in Fargo–Moorhead",
    description:
      "A flat on the trail, a chain off, a bike that needs to get home. What a neighbor can help with and where the metro’s bike shops and trails come in.",
    h1: "Stuck with a bike",
    eyebrow: "help topic",
    lead: "The Red River trails are genuinely good, right up until a tube goes on the far end of one.",
    answer:
      "Bike help on Help Me means small, immediate things: a hand getting a chain back on, a pump, or company walking a bike back to a road. Repairs belong at a bike shop, and Help Me is not a rideshare — nobody is arranging a vehicle to come collect you or your bike.",
    takeaways: [
      "Small trailside help only: a pump, a chain, a hand.",
      "Repairs go to a bike shop, not a stranger.",
      "Not a rideshare — no vehicle pickups are arranged.",
      "Carry a tube and a pump on the longer trail sections.",
    ],
    keywords: ["bike flat tire Fargo", "Red River trail bike", "Moorhead bike help"],
    sections: [
      {
        heading: "The trail reality",
        body: [
          "The paved trail system along the Red River is long, pleasant, and in places genuinely remote from a parking lot. A flat two miles in means a long walk. Carrying a spare tube, a pump, and a multi-tool is the difference between an annoyance and an afternoon.",
        ],
      },
      {
        heading: "Winter and shoulder season",
        body: [
          "Bike commuting happens here year-round for a determined minority, and the hazards change: black ice, plowed windrows blocking crossings, and dark by five. Lights and studded tires do more for you than any app can.",
        ],
      },
    ],
    related: ["help/directions", "help/local-guide", "for-people-without-a-car", "lists/things-to-do-in-fargo", "help/transit-help", "questions/what-can-i-ask-for"],
    faqs: [
      {
        q: "Can someone drive my bike home?",
        a: "No. Help Me does not arrange rides or transport for people or property.",
      },
      {
        q: "Can I ask for a repair?",
        a: "A chain or a tube with your own tools, maybe. Actual repair work belongs at a shop.",
      },
    ],
  }),
];
