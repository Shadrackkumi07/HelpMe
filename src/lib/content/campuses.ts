import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const CAMPUS_PAGES: SeoPage[] = [
  page({
    slug: "campuses",
    kind: "hub",
    title: "Fargo–Moorhead campuses on Help Me",
    description:
      "Campus pages for NDSU, MSUM, Concordia, and M State — official calendars we ingest, community help we are not, and surrounding schools we document honestly.",
    h1: "Campuses this metro actually has",
    eyebrow: "places",
    lead: "Four campuses sit in Fargo–Moorhead. Their official calendars are in the app. Their police departments are not. That split is the whole point of these pages.",
    priority: 0.88,
    keywords: [
      "NDSU",
      "MSUM",
      "Concordia College",
      "M State",
      "Fargo campuses",
      "Moorhead campuses",
    ],
    geo: { name: "Fargo–Moorhead", type: "Region", lat: 46.8772, lng: -96.7898 },
    sections: [
      {
        heading: "What we ingest, and what we do not",
        body: [
          "Help Me pulls official events from a fixed list: NDSU via MyNDSU, MSUM via Campus Labs, Concordia via Cobber Connect, M State via minnesota.edu/events, plus West Fargo’s city calendar and Ticketmaster Fargo. Source name and official URL stay visible. If a feed is down, the app says so. It does not invent a concert.",
          "UND in Grand Forks is not on that list. NDSCS in Wahpeton is not a launch campus. Mayville State, Valley City State, and the University of Jamestown are surrounding. Those pages exist so a search for “North Dakota campus help app” does not get a fake statewide claim.",
        ],
        bullets: [
          "NDSU — myndsu.ndsu.edu/events",
          "MSUM — mnstate.campuslabs.com/engage/events",
          "Concordia — cobberconnect.cord.edu/events",
          "M State — minnesota.edu/events",
        ],
      },
      {
        heading: "Campus help is community help",
        body: [
          "Students ask for directions to a hall, a study buddy, quick tech support, a walk to the car. Those categories exist. They are not a contracted campus service. NDSU Police, MSUM Public Safety, Concordia Public Safety, and 911 remain the official path for danger, crime, and medical emergencies.",
          "A Help Me safety escort is a community walk from an approved helper — not campus police. Meet at a public place: Memorial Union, a campus center, a well-lit lot. Live help shows a coarse ~500 m area, not a pin on a residence hall.",
        ],
      },
      {
        heading: "Adults. TestFlight. A real support address.",
        body: [
          "Help Me is a community app for adults in Fargo–Moorhead, on iPhone via TestFlight (iOS 15+). It is not a K–12 meetup product and not a way for high school students to meet strangers. Support is support@helpme.fyi. A person reads it.",
        ],
      },
    ],
    related: [
      "for-students",
      "for-campuses",
      "events",
      "cities/fargo",
      "cities/moorhead",
      "help/study-buddy",
      "lists/fargo-moorhead-campuses",
    ],
    faqs: [
      {
        q: "Does Help Me replace campus police?",
        a: "No. Call NDSU Police, MSUM Public Safety, Concordia Public Safety, or 911 for official safety. Help Me is everyday community help.",
      },
      {
        q: "Which campus calendars are in the app?",
        a: "NDSU, MSUM, Concordia, and M State, always linked to the official page. UND is not ingested. Surrounding campuses are documented as surrounding.",
      },
      {
        q: "Do I need a .edu email?",
        a: "You can join with email or Sign in with Apple. A .edu address is not a helper badge and does not skip staff review of identity evidence.",
      },
    ],
  }),
  page({
    slug: "campuses/ndsu",
    kind: "campus",
    title: "Help Me at North Dakota State University",
    description:
      "Community help around NDSU in Fargo — study buddies, tech, directions, walks to the car. MyNDSU events in the app. NDSU Police stays the official safety.",
    h1: "NDSU, Bison country, still a city campus",
    eyebrow: "Fargo, ND",
    lead: "North Dakota State University sits on 19th Avenue North in Fargo. The Union is public. The ramps freeze. NDSU Police is the official number. Help Me is the neighbor with a current approval.",
    priority: 0.92,
    keywords: ["NDSU help", "NDSU events", "Memorial Union", "Bison", "NDSU Police"],
    geo: {
      name: "North Dakota State University",
      type: "Campus",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.897,
      lng: -96.802,
    },
    sections: [
      {
        heading: "What students actually get stuck on",
        body: [
          "Directions to a lecture hall on a first Tuesday. A printer that will not talk to the residence-hall network. A study buddy who is not a GroupMe of two hundred people. A walk from the library to a ramp after dark. A jump start in a 19th Avenue lot in January. None of that is a 911 call. All of it can wreck a week.",
          "Help Me categories that fit here: Quick Tech Support, Safety Escort (a community walk — not NDSU Police), Directions, Study Buddy, plus public asks like a jump start or lost-and-found. Meet at Memorial Union, a well-lit lot, or another named public place. The live map shows a coarse area of about 500 meters, not a pin on your hall.",
        ],
      },
      {
        heading: "MyNDSU events, attributed",
        body: [
          "Official NDSU events come from MyNDSU at https://myndsu.ndsu.edu/events. Help Me caches them, labels the source, and links back. Tap through for the last word on time and place. We do not invent a Bison event to fill Home.",
          "Ticketmaster Fargo listings can cover shows at the FARGODOME and nearby venues. Those are regional, not campus-owned. The source name stays on the card either way.",
        ],
      },
      {
        heading: "NDSU Police is still NDSU Police",
        body: [
          "Campus emergencies, crime, and official escorts go through NDSU Police / campus safety. Help Me does not dispatch them, does not replace them, and does not wear their patch. A helper holds a current staff-reviewed approval based on identity evidence. That is not a criminal background check, and we do not advertise one.",
          "Private chat opens only between you and the helper who accepted. Report, block, or delete your account from inside the app by typing DELETE. If you are in danger, call 911 or NDSU Police first.",
        ],
      },
    ],
    related: [
      "cities/fargo",
      "neighborhoods/north-fargo",
      "resources/ndsu-safety",
      "help/study-buddy",
      "help/tech-support",
      "help/directions",
      "help/campus-escort",
      "for-students",
      "events",
      "campuses/msum",
    ],
    faqs: [
      {
        q: "Does Help Me replace NDSU Police?",
        a: "No. Official campus safety and escorts go through NDSU Police. Help Me is community help from approved neighbors.",
      },
      {
        q: "Where should I meet a helper on campus?",
        a: "Memorial Union is the obvious public place. A populated lobby or a well-lit lot works. Do not send a first meeting to a residence-hall room.",
      },
      {
        q: "Are NDSU events in the app?",
        a: "Yes. Official listings are ingested from https://myndsu.ndsu.edu/events and linked back to that page.",
      },
      {
        q: "Can I ask for a study buddy?",
        a: "Yes. Meet in public. It is not paid tutoring and not a class-registration service.",
      },
    ],
  }),
  page({
    slug: "campuses/msum",
    kind: "campus",
    title: "Help Me at Minnesota State University Moorhead",
    description:
      "Community help around MSUM in Moorhead — study, tech, directions, walks to the car. Campus Labs events in the app. MSUM Public Safety stays the official safety.",
    h1: "MSUM, Dragons on the Minnesota side",
    eyebrow: "Moorhead, MN",
    lead: "Minnesota State University Moorhead sits minutes from Concordia and a bridge from Fargo. The campus has its own public safety office. Help Me does not pretend to be it.",
    priority: 0.88,
    keywords: ["MSUM help", "MSUM events", "Dragons", "Minnesota State University Moorhead"],
    geo: {
      name: "Minnesota State University Moorhead",
      type: "Campus",
      city: "Moorhead",
      state: "MN",
      county: "Clay County",
      lat: 46.866,
      lng: -96.762,
    },
    sections: [
      {
        heading: "A Moorhead campus, not a Fargo annex",
        body: [
          "MSUM is in Moorhead, Clay County, Minnesota. Students cross into Fargo for work and food; Fargo students cross back for class. Help Me matching covers the metro. Official numbers do not copy-paste across the river. Emergencies here are 911 and MSUM Public Safety — not Fargo Police and not NDSU Police.",
          "Everyday asks still look like campus life everywhere: Directions to a building, Quick Tech Support, Study Buddy, a Safety Escort that is a community walk from an approved helper. Meet at the student union or another populated indoor place. Live help is a coarse ~500 m area, not a pin on a hall.",
        ],
      },
      {
        heading: "Campus Labs events, linked",
        body: [
          "Official MSUM events are ingested from Campus Labs at https://mnstate.campuslabs.com/engage/events. Help Me labels the source and keeps the official URL. Open that link for the last word. Concordia’s calendar sits beside it in the app because a Saturday in this metro ignores the campus line.",
        ],
      },
      {
        heading: "Public Safety is official. We are not.",
        body: [
          "MSUM Public Safety runs official campus safety and escort programs. Use them when you want official response. Use Help Me when you want a neighbor with a current staff-reviewed approval. Helpers are not employees of the university. The app is not a paid gig board.",
        ],
      },
    ],
    related: [
      "cities/moorhead",
      "neighborhoods/downtown-moorhead",
      "campuses/concordia",
      "campuses/ndsu",
      "resources/msum-safety",
      "help/study-buddy",
      "help/tech-support",
      "help/directions",
      "help/campus-escort",
      "for-students",
    ],
    faqs: [
      {
        q: "Does Help Me replace MSUM Public Safety?",
        a: "No. Official escorts and campus emergencies go through MSUM Public Safety or 911. Help Me is community help.",
      },
      {
        q: "Do MSUM events show up in Help Me?",
        a: "Yes. Official listings come from https://mnstate.campuslabs.com/engage/events and stay attributed to that source.",
      },
      {
        q: "Can Concordia students see MSUM asks?",
        a: "Matching is local to approved helpers who are online, not a campus-only shift board. Two campuses a few blocks apart still share a city.",
      },
    ],
  }),
  page({
    slug: "campuses/concordia",
    kind: "campus",
    title: "Help Me at Concordia College, Moorhead",
    description:
      "Community help around Concordia College — study, tech, directions, walks to the car. Cobber Connect events in the app. Concordia Public Safety stays official.",
    h1: "Concordia, Cobbers, still Moorhead",
    eyebrow: "Moorhead, MN",
    lead: "Concordia College sits next to MSUM and across the river from Fargo. Cobber Connect is the official calendar. Concordia Public Safety is the official escort. Help Me is neither office.",
    priority: 0.86,
    keywords: ["Concordia College help", "Cobbers", "Cobber Connect", "Concordia Moorhead"],
    geo: {
      name: "Concordia College",
      type: "Campus",
      city: "Moorhead",
      state: "MN",
      county: "Clay County",
      lat: 46.865,
      lng: -96.767,
    },
    sections: [
      {
        heading: "A small campus with a real public-safety office",
        body: [
          "Concordia is compact, walkable, and still a place where a first-year cannot find a hall and a senior cannot find a jump in January. Help Me covers Directions, Study Buddy, Quick Tech Support, and a Safety Escort that is a community walk — not Concordia Public Safety, not campus police, not a contracted night patrol.",
          "Meet at a campus center, a populated lobby, or a well-lit lot. Do not send a first meeting to a residence hall. The map shows a coarse area of about 500 meters. Exact location is optional after someone accepts.",
        ],
      },
      {
        heading: "Cobber Connect, attributed",
        body: [
          "Official Concordia events come from Cobber Connect at https://cobberconnect.cord.edu/events. Help Me caches them and links back. MSUM’s Campus Labs feed sits next to it because the two campuses share a city. We do not invent a chapel concert or a game time.",
        ],
      },
      {
        heading: "Adults, identity evidence, Minnesota numbers",
        body: [
          "Help Me is for adults. It is not a youth ministry meetup and not a high-school visit program. Helpers submit identity evidence; a staff member reviews it. Approval has to be current. Moorhead Police and Clay County handle off-campus official help. Concordia Public Safety handles campus official help. 911 handles danger.",
        ],
      },
    ],
    related: [
      "cities/moorhead",
      "campuses/msum",
      "campuses/ndsu",
      "resources/concordia-safety",
      "help/study-buddy",
      "help/tech-support",
      "help/directions",
      "help/campus-escort",
      "for-students",
      "events",
    ],
    faqs: [
      {
        q: "Is Help Me Concordia Public Safety?",
        a: "No. Official campus safety and escorts go through Concordia Public Safety. Help Me is community help from approved neighbors.",
      },
      {
        q: "Are Cobber events in the app?",
        a: "Yes. Official listings are ingested from https://cobberconnect.cord.edu/events and linked back to that page.",
      },
      {
        q: "Can I ask for a walk to my car after a late rehearsal?",
        a: "Yes, as a community walk from an approved helper. If you want official campus escort, call Concordia Public Safety instead.",
      },
      {
        q: "Do I need to be a Cobber to use Help Me here?",
        a: "No. The app is Fargo–Moorhead, not a student-ID wall. Helping still requires a current staff approval.",
      },
    ],
  }),
  page({
    slug: "campuses/m-state",
    kind: "campus",
    title: "Help Me at M State Moorhead",
    description:
      "M State’s Moorhead campus — academic dates we ingest, community help we are not. Directions, tech, study, walks to the car. Help Me is not campus police.",
    h1: "M State Moorhead, the other campus on this side of the river",
    eyebrow: "Moorhead, MN",
    lead: "Minnesota State Community and Technical College has a Moorhead campus. It is smaller than MSUM and Concordia. It is still in the metro Help Me is built for. The academic calendar is the feed we actually pull.",
    priority: 0.78,
    keywords: ["M State Moorhead", "Minnesota State Community and Technical College", "M State events"],
    geo: {
      name: "M State Moorhead",
      type: "Campus",
      city: "Moorhead",
      state: "MN",
      county: "Clay County",
      lat: 46.869,
      lng: -96.758,
    },
    sections: [
      {
        heading: "A working campus, not a satellite rumor",
        body: [
          "M State Moorhead is a real campus with real parking lots, real labs, and real January. Students here ask for the same everyday things: Directions, Quick Tech Support, Study Buddy, a community walk to the car. Help Me is not M State security and not a paid tutoring desk.",
          "Meet in a populated lobby or another public indoor place. Live help shows a coarse ~500 m area, not a pin on a classroom wing. Private chat is two people after someone accepts.",
        ],
      },
      {
        heading: "Academic calendar, official URL",
        body: [
          "M State’s contribution to Help Me is the official academic calendar at https://www.minnesota.edu/events. That is dates and college-published events, attributed and linked. It is not a student-org firehose, and we do not scrape random department pages to pretend it is.",
        ],
      },
      {
        heading: "Official safety stays official",
        body: [
          "Campus emergencies go through M State’s own safety process and 911. Moorhead Police cover the city around the campus. Help Me does not dispatch any of them. Helpers hold a current staff-reviewed approval. An old label grants nothing.",
        ],
      },
    ],
    related: [
      "cities/moorhead",
      "campuses/msum",
      "campuses/concordia",
      "resources/moorhead-police",
      "help/study-buddy",
      "help/tech-support",
      "help/directions",
      "help/campus-escort",
      "for-students",
      "events",
    ],
    faqs: [
      {
        q: "Does Help Me ingest M State events?",
        a: "Yes — the official calendar at https://www.minnesota.edu/events, attributed and linked. Open the official page for the last word.",
      },
      {
        q: "Is Help Me campus security for M State?",
        a: "No. Use campus safety channels and 911 for emergencies. Help Me is everyday community help.",
      },
      {
        q: "Can I request tech support between classes?",
        a: "Yes, as Quick Tech Support from an approved helper. It is not the campus IT help desk and not a paid repair shop.",
      },
    ],
  }),
  page({
    slug: "campuses/ndscs",
    kind: "campus",
    title: "Help Me and NDSCS Wahpeton",
    description:
      "NDSCS is in Wahpeton, about an hour south of Fargo. Surrounding region, not a Help Me launch campus. No NDSCS calendar in the app. Honest range, not a promise.",
    h1: "NDSCS is down the river, not in the launch map",
    eyebrow: "Wahpeton, ND",
    lead: "North Dakota State College of Science is a real campus with real students. It is also in Wahpeton, not Fargo. Help Me is built for Fargo–Moorhead. This page exists so we do not blur that.",
    priority: 0.55,
    keywords: ["NDSCS", "Wahpeton", "NDSCS Wildcats", "Fargo campus app"],
    geo: {
      name: "North Dakota State College of Science",
      type: "Campus",
      city: "Wahpeton",
      state: "ND",
      lat: 46.268,
      lng: -96.608,
    },
    sections: [
      {
        heading: "Surrounding region, said plainly",
        body: [
          "Help Me matching is Fargo–Moorhead-first. Wahpeton is about an hour south on the Red River, with Breckenridge across the water. We do not operate an NDSCS helper grid, and we do not ingest an NDSCS events feed. If you are searching from campus housing in Wahpeton, this is not a promise that a Fargo helper will drive down.",
        ],
      },
      {
        heading: "What we do ingest — none of it is NDSCS",
        body: [
          "Official event sources in the app are NDSU (https://myndsu.ndsu.edu/events), MSUM (https://mnstate.campuslabs.com/engage/events), Concordia (https://cobberconnect.cord.edu/events), M State (https://www.minnesota.edu/events), West Fargo, and Ticketmaster Fargo. NDSCS is not on that list. Students who come up to Fargo–Moorhead for a weekend can use the metro app there like anyone else.",
        ],
      },
      {
        heading: "Official NDSCS safety is still in Wahpeton",
        body: [
          "Campus emergencies at NDSCS go through NDSCS campus police / public safety and 911. Help Me is not that office. It is also not a way for minors to meet strangers — the app is for adults. Support for the product we actually ship is support@helpme.fyi.",
        ],
      },
    ],
    related: ["cities/wahpeton", "cities/fargo", "campuses/ndsu", "for-students", "events", "campuses"],
    faqs: [
      {
        q: "Is Help Me an NDSCS app?",
        a: "No. It is a Fargo–Moorhead app. NDSCS is documented as surrounding region so the range stays honest.",
      },
      {
        q: "Will NDSCS events show up in Help Me?",
        a: "No. We do not ingest an NDSCS calendar. Fargo–Moorhead sources are the ones in the app.",
      },
      {
        q: "Can I use Help Me if I drive up to Fargo for the weekend?",
        a: "The product is built for Fargo–Moorhead. Use it there as an adult in the metro. There is no Wahpeton dispatch.",
      },
    ],
  }),
  page({
    slug: "campuses/und",
    kind: "campus",
    title: "Help Me and the University of North Dakota",
    description:
      "UND is in Grand Forks, up I-29 from Fargo. Help Me does not ingest the UND calendar and does not run a Grand Forks helper network. Honest product boundary.",
    h1: "UND is Grand Forks. Help Me is not.",
    eyebrow: "Grand Forks, ND",
    lead: "University of North Dakota, the other I-29 campus, a rivalry this state can recite. Help Me still launches as a Fargo–Moorhead product. We will not borrow UND’s name to look statewide.",
    priority: 0.55,
    keywords: ["UND", "University of North Dakota", "Grand Forks campus app", "NDSU vs UND"],
    geo: {
      name: "University of North Dakota",
      type: "Campus",
      city: "Grand Forks",
      state: "ND",
      lat: 47.922,
      lng: -97.073,
    },
    sections: [
      {
        heading: "A different city, a different police department",
        body: [
          "Grand Forks has UND. Fargo has NDSU. UND Police and Grand Forks Police are the official safety path there. Help Me does not dispatch them, does not replace them, and does not operate a Grand Forks helper network. If you are in danger in Grand Forks, call 911 or UND Police — not an app built for a metro down the interstate.",
        ],
      },
      {
        heading: "UND’s calendar is not in the app",
        body: [
          "Official Help Me event sources are NDSU at https://myndsu.ndsu.edu/events, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo. UND is not ingested. We will not scrape a Fighting Hawks calendar to look complete. NDSU’s MyNDSU feed is the North Dakota campus calendar we actually pull.",
        ],
      },
      {
        heading: "If you are actually in Fargo–Moorhead",
        body: [
          "UND students who visit Fargo, work a summer here, or sit in a West Acres lot with a dead battery can use Help Me the same way any adult in the metro can. Study Buddy, Quick Tech Support, Directions, a community walk — those categories exist here. They are not UND services, and they are not a reason to meet a stranger on a Grand Forks page we do not operate.",
        ],
      },
    ],
    related: ["cities/grand-forks", "campuses/ndsu", "cities/fargo", "for-students", "events", "campuses"],
    faqs: [
      {
        q: "Does Help Me work in Grand Forks?",
        a: "The app is built for Fargo–Moorhead. We do not operate a Grand Forks helper network and do not ingest the UND calendar.",
      },
      {
        q: "Can I see UND events in Help Me?",
        a: "No. UND is not one of the official sources. NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo are.",
      },
      {
        q: "Is this a statewide North Dakota campus app?",
        a: "No. It is a Fargo–Moorhead app. This page exists so that sentence stays true in search results.",
      },
    ],
  }),
  page({
    slug: "campuses/rasmussen-fargo",
    kind: "campus",
    title: "Help Me at Rasmussen University Fargo",
    description:
      "Rasmussen’s Fargo campus on 19th Avenue South is still Fargo–Moorhead. Everyday adult help nearby — not a Rasmussen partnership and not a calendar we ingest.",
    h1: "Rasmussen Fargo, smaller campus, same winter",
    eyebrow: "Fargo, ND",
    lead: "4012 19th Avenue South. A career-focused campus near the south-west commercial strip, not a second NDSU. Students here still park in lots that freeze. Help Me still is not campus security.",
    priority: 0.62,
    keywords: ["Rasmussen Fargo", "Rasmussen University Fargo", "19th Avenue South campus"],
    geo: {
      name: "Rasmussen University Fargo",
      type: "Campus",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.855,
      lng: -96.847,
    },
    sections: [
      {
        heading: "Still in the metro, not a feed we pull",
        body: [
          "Rasmussen University’s Fargo campus is in the city Help Me is built for. That matters for matching. It does not mean we ingest a Rasmussen events calendar. Official sources remain NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo. If a Rasmussen date is not on those, it is not in the app because we invented nothing.",
        ],
      },
      {
        heading: "Everyday asks on 19th Avenue South",
        body: [
          "Directions, Quick Tech Support, Study Buddy, a community walk to the car, a jump start in the lot. Meet at a populated lobby or a nearby public commercial door — West Acres is close enough to be honest about. Live help shows a coarse ~500 m area, not a pin on a classroom.",
          "Help Me is not a Rasmussen partnership, not campus security, and not a paid tutoring marketplace. Helpers are approved community members. Staff review identity evidence; approval has to be current.",
        ],
      },
      {
        heading: "Fargo numbers, adult app",
        body: [
          "Campus-level safety questions go through Rasmussen’s own channels. Street-level emergencies are Fargo Police and 911. The app is for adults. It is not a way for high school dual-enrollment students to meet strangers. Support is support@helpme.fyi.",
        ],
      },
    ],
    related: [
      "cities/fargo",
      "neighborhoods/west-acres",
      "campuses/ndsu",
      "help/jump-start",
      "help/tech-support",
      "help/study-buddy",
      "help/directions",
      "for-students",
      "resources/fargo-police",
    ],
    faqs: [
      {
        q: "Does Help Me ingest Rasmussen events?",
        a: "No. Rasmussen is not one of the official calendar sources. NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo are.",
      },
      {
        q: "Is Rasmussen part of the Fargo–Moorhead app?",
        a: "The campus is in Fargo, so the metro product applies. That is geography, not a campus contract.",
      },
      {
        q: "Can I get a jump start in the Rasmussen lot?",
        a: "Yes, as everyday public help. Meet in a public, lit part of the lot. A helper is not a tow company.",
      },
    ],
  }),
  page({
    slug: "campuses/mayville-state",
    kind: "campus",
    title: "Help Me and Mayville State University",
    description:
      "Mayville State is a Comets campus west of the Fargo metro. Surrounding region, not a Help Me launch campus. No Mayville calendar in Help Me. Honest range.",
    h1: "Mayville State, surrounding — not a Fargo neighborhood",
    eyebrow: "Mayville, ND",
    lead: "Mayville State University is a real North Dakota campus about an hour northwest of Fargo. Help Me is not a statewide university app. This page is a boundary, not a rollout.",
    priority: 0.48,
    keywords: ["Mayville State", "Comets", "Mayville ND campus"],
    geo: {
      name: "Mayville State University",
      type: "Campus",
      city: "Mayville",
      state: "ND",
      lat: 47.5,
      lng: -97.325,
    },
    sections: [
      {
        heading: "Surrounding, on purpose",
        body: [
          "Mayville is not Fargo, not Moorhead, and not West Fargo. Help Me matching is built for that metro. We do not advertise a Comets helper network we do not operate, and we do not ingest a Mayville State events feed.",
        ],
      },
      {
        heading: "The calendars we actually pull",
        body: [
          "NDSU (https://myndsu.ndsu.edu/events), MSUM, Concordia, M State, West Fargo, Ticketmaster Fargo. If you are a Mayville student in Fargo for the day, those are the listings you might see. They are not Mayville’s calendar with a different label.",
        ],
      },
      {
        heading: "Official safety stays in Mayville",
        body: [
          "Campus emergencies at Mayville State go through that campus’s public safety process and 911. Help Me does not dispatch them. The app is for adults in Fargo–Moorhead. It is not a rural-campus meetup product.",
        ],
      },
    ],
    related: ["campuses/ndsu", "cities/fargo", "campuses/valley-city-state", "for-students", "events", "campuses"],
    faqs: [
      {
        q: "Does Help Me work on the Mayville State campus?",
        a: "Mayville is surrounding region. We do not list it as a launch campus or ingest its calendar.",
      },
      {
        q: "Can Mayville students use Help Me in Fargo?",
        a: "Adults in Fargo–Moorhead can use the metro app there. That is not a Mayville dispatch.",
      },
    ],
  }),
  page({
    slug: "campuses/valley-city-state",
    kind: "campus",
    title: "Help Me and Valley City State University",
    description:
      "Valley City State sits west of Fargo on I-94. Surrounding region, not a Help Me launch campus. No Vikings calendar in the app. An honest product boundary.",
    h1: "Valley City State, west on 94, outside the launch",
    eyebrow: "Valley City, ND",
    lead: "Valley City State University is a Vikings campus with its own town. I-94 makes Fargo feel closer than it is on a January night. Help Me still does not treat Valley City as a neighborhood of West Acres.",
    priority: 0.48,
    keywords: ["Valley City State", "VCSU", "Vikings Valley City"],
    geo: {
      name: "Valley City State University",
      type: "Campus",
      city: "Valley City",
      state: "ND",
      lat: 46.922,
      lng: -98.003,
    },
    sections: [
      {
        heading: "A corridor campus, not a metro campus",
        body: [
          "Valley City is surrounding North Dakota, west on I-94. Help Me is built for Fargo–Moorhead. We do not ingest a VCSU calendar and we do not staff a Valley City helper list. Distance is real. A Fargo jump start is not a Valley City dispatch.",
        ],
      },
      {
        heading: "What “events in the app” actually means",
        body: [
          "Official sources: NDSU at https://myndsu.ndsu.edu/events, MSUM, Concordia, M State, West Fargo, Ticketmaster Fargo. Valley City State is not among them. Ticketmaster’s Fargo radius is regional shows, not a promise we cover every campus gym in the state.",
        ],
      },
      {
        heading: "Official VCSU safety stays there",
        body: [
          "Campus emergencies go through Valley City State’s own safety process and 911. Help Me is not that office, not campus police, and not a youth meetup. Adults visiting Fargo–Moorhead can use the metro product there.",
        ],
      },
    ],
    related: [
      "campuses/mayville-state",
      "campuses/university-of-jamestown",
      "campuses/ndsu",
      "cities/fargo",
      "for-students",
      "events",
    ],
    faqs: [
      {
        q: "Is Valley City in the Help Me service area?",
        a: "It is surrounding region. We do not list it as a launch city or ingest the VCSU calendar.",
      },
      {
        q: "Will a Fargo helper drive to Valley City?",
        a: "Do not expect that. Matching is metro-local. There is no statewide dispatch and no paid ETA.",
      },
    ],
  }),
  page({
    slug: "campuses/university-of-jamestown",
    kind: "campus",
    title: "Help Me and the University of Jamestown",
    description:
      "University of Jamestown is a Jimmies campus farther west. Surrounding region, not a Help Me launch campus. No UJ calendar in the app. Honest product range.",
    h1: "University of Jamestown, surrounding on purpose",
    eyebrow: "Jamestown, ND",
    lead: "The Jimmies have a campus, a town, and a name people in Fargo still recognize. That recognition is not a service area. Help Me does not launch as a Jamestown product.",
    priority: 0.46,
    keywords: ["University of Jamestown", "Jimmies", "Jamestown ND campus"],
    geo: {
      name: "University of Jamestown",
      type: "Campus",
      city: "Jamestown",
      state: "ND",
      lat: 46.91,
      lng: -98.702,
    },
    sections: [
      {
        heading: "Farther west than we operate",
        body: [
          "Jamestown is a regional center of its own. Help Me is Fargo–Moorhead. We do not ingest a University of Jamestown calendar, and we do not claim a Jimmies helper network. UJ also keeps some Fargo additional locations for specific programs — those are not a second Help Me campus partnership, because there is no campus partnership to claim.",
        ],
      },
      {
        heading: "The feeds that actually exist",
        body: [
          "NDSU (https://myndsu.ndsu.edu/events), MSUM (https://mnstate.campuslabs.com/engage/events), Concordia (https://cobberconnect.cord.edu/events), M State (https://www.minnesota.edu/events), West Fargo, Ticketmaster Fargo. If you are in Fargo for class or a show, those are the official listings. They are not UJ’s calendar.",
        ],
      },
      {
        heading: "Safety stays with UJ and 911",
        body: [
          "Campus emergencies in Jamestown go through University of Jamestown’s own safety process and 911. Help Me does not replace them. The app is for adults. It is not a way for visiting high school teams to meet strangers in a chat.",
        ],
      },
    ],
    related: [
      "campuses/valley-city-state",
      "campuses/ndsu",
      "cities/fargo",
      "for-students",
      "events",
      "campuses",
    ],
    faqs: [
      {
        q: "Does Help Me cover the University of Jamestown?",
        a: "Jamestown is surrounding region. We do not ingest a UJ calendar or operate a helper network there.",
      },
      {
        q: "UJ has Fargo locations — does that change things?",
        a: "If you are physically in Fargo–Moorhead, the metro app applies. That is still not a UJ partnership or a Jamestown dispatch.",
      },
      {
        q: "Can Jimmies students see NDSU events in the app?",
        a: "If they are using Help Me in Fargo–Moorhead, they see the official sources we ingest, including NDSU, with the official link attached.",
      },
    ],
  }),

  page({
    slug: "campuses/ndsu-downtown",
    kind: "campus",
    title: "NDSU downtown campus in Fargo",
    description:
      "NDSU’s downtown Fargo presence puts students on Broadway rather than on the main campus. What that means for parking, walking, and everyday help.",
    h1: "NDSU downtown",
    eyebrow: "Fargo, ND",
    lead: "A campus that shares its sidewalks with a working downtown, which changes almost everything about the day.",
    answer:
      "NDSU maintains a downtown Fargo presence separate from its main campus north of the city center, putting students and staff in the middle of Broadway’s business district. Parking is ramp-and-street rather than campus lots, walking distances differ, and downtown at night is a different environment from the main campus.",
    priority: 0.65,
    keywords: ["NDSU downtown campus", "Renaissance Hall Fargo", "downtown Fargo students"],
    geo: { name: "Downtown Fargo", type: "Campus", city: "Fargo", state: "ND", county: "Cass County", lat: 46.877, lng: -96.789 },
    sections: [
      {
        heading: "A different set of practical problems",
        body: [
          "Ramps and metered street parking instead of campus lots. Bar traffic on a Friday night that the main campus does not have. Buildings that are part of a downtown block rather than a quad. It is a good environment and it demands different habits, particularly after dark.",
        ],
      },
      {
        heading: "Where help fits",
        body: [
          "Walks back to a ramp, directions between downtown and the main campus, a jump start in a ramp that has emptied out. Meet somewhere lit and busy — Broadway is full of options during business hours.",
        ],
      },
    ],
    related: ["campuses/ndsu", "neighborhoods/downtown-fargo", "guides/downtown-fargo-at-night", "help/walk-to-car", "resources/ndsu-safety", "help/directions"],
    faqs: [
      {
        q: "Is Help Me affiliated with NDSU?",
        a: "No. Campus event calendars are linked with attribution, which is not affiliation or endorsement.",
      },
      {
        q: "Who handles safety downtown?",
        a: "Fargo Police for the city, NDSU public safety for university property. 911 for emergencies either way.",
      },
    ],
  }),

  page({
    slug: "campuses/m-state-fergus-falls",
    kind: "campus",
    title: "M State Fergus Falls campus",
    description:
      "M State runs multiple Minnesota campuses. The Fergus Falls campus is well outside the Fargo–Moorhead metro, and this page is honest about what that means.",
    h1: "M State Fergus Falls",
    eyebrow: "Fergus Falls, MN",
    lead: "Same college system as the Moorhead campus, an hour of interstate away, with its own town around it.",
    answer:
      "Minnesota State Community and Technical College operates several campuses, including one in Fergus Falls about an hour southeast of Moorhead. It is outside the Fargo–Moorhead metro, so Help Me’s helper coverage there is thin. Campus safety, local emergency services, and Minnesota 211 are the dependable resources.",
    priority: 0.55,
    keywords: ["M State Fergus Falls", "Minnesota State Community and Technical College", "Otter Tail County college"],
    geo: { name: "Fergus Falls", type: "Campus", city: "Fergus Falls", state: "MN", county: "Otter Tail County", lat: 46.283, lng: -96.077 },
    sections: [
      {
        heading: "One system, separate towns",
        body: [
          "Students sometimes assume that because the Moorhead campus is in the metro, the whole system is. It is not. Each campus sits in its own community with its own services, and an hour of Minnesota interstate is a real hour in February.",
        ],
      },
      {
        heading: "Use the local stack",
        body: [
          "Campus safety for anything on campus property, city and county law enforcement locally, Minnesota 211 for referral, and 911 for emergencies. Those work regardless of which app is installed.",
        ],
      },
    ],
    related: ["campuses/m-state", "cities/fergus-falls", "questions/does-help-me-work-outside-fargo", "resources/211-minnesota", "campuses", "not-911"],
    faqs: [
      {
        q: "Does Help Me work at this campus?",
        a: "Coverage follows the metro. In Fergus Falls, assume there is nobody nearby to accept a request.",
      },
      {
        q: "Is M State one campus or several?",
        a: "Several across Minnesota, including Moorhead, Fergus Falls, Detroit Lakes, and Wadena. Check the college for current campus and program details.",
      },
    ],
  }),
];
