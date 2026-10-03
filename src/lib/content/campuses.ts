import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const CAMPUS_PAGES: SeoPage[] = [
  page({
    slug: "campuses",
    kind: "hub",
    title: "Campuses in Fargo-Moorhead and their official events",
    description:
      "NDSU, MSUM, Concordia, and M State are part of the Fargo-Moorhead neighborhood. See the official calendars Help Me includes, and where to meet nearby.",
    h1: "The campuses that are part of this metro",
    eyebrow: "Campuses",
    lead: "Several campuses sit inside Fargo-Moorhead, and they are part of the neighborhoods around them. Their official calendars are in the app. Their police departments are not, and that split is the point of these pages.",
    answer:
      "NDSU, MSUM, Concordia College, and M State are part of the Fargo-Moorhead neighborhood, and their official event calendars appear in Help Me with the source attached. Help Me is a place to ask your block for the small stuff, near campus or anywhere else. Campus public safety offices stay the official number for campus emergencies.",
    takeaways: [
      "Official calendars from NDSU, MSUM, Concordia, and M State appear in the app, linked to their sources.",
      "Help Me is for adults in the metro, not a campus-only network.",
      "Campus public safety and 911 are the official numbers for emergencies.",
      "Help Me is not an emergency service.",
    ],
    priority: 0.88,
    keywords: ["NDSU", "MSUM", "Concordia College", "M State", "Fargo campuses", "Moorhead campuses"],
    geo: { name: "Fargo–Moorhead", type: "Region", lat: 46.8772, lng: -96.7898 },
    sections: [
      {
        heading: "What we include, and what we do not",
        body: [
          "Help Me pulls official events from a fixed list: NDSU through MyNDSU, MSUM through Campus Labs, Concordia through Cobber Connect, M State through minnesota.edu/events, plus West Fargo's city calendar and Ticketmaster Fargo. The source name and official link stay visible. If a feed is down, the app says so. It does not invent a concert.",
          "Showing a source is not the same as being affiliated with it. Help Me is independent of every campus listed here.",
        ],
        bullets: [
          "NDSU: myndsu.ndsu.edu/events",
          "MSUM: mnstate.campuslabs.com/engage/events",
          "Concordia: cobberconnect.cord.edu/events",
          "M State: minnesota.edu/events",
        ],
      },
      {
        heading: "Small favors near campus",
        body: [
          "Directions to a hall, a phone charger in the library, a hand with a heavy box on move-in weekend, a jump start in a lot in January. Those are small, public, and over in minutes. They are community favors between neighbors, not a contracted campus service.",
          "Meet in a public place, like a student union or a busy lobby. Your request shows as a rough area about 500 meters wide, not a pin on a residence hall.",
        ],
      },
      {
        heading: "Adults, public places, a real support address",
        body: [
          "Help Me is a community app for adults in Fargo-Moorhead, on iPhone through TestFlight. Helpers can apply to be reviewed by our team. Help Me does not run background checks. Support is support@helpme.fyi, and a person reads it.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["events", "cities/fargo", "cities/moorhead", "help/study-buddy", "lists/fargo-moorhead-campuses", "community"],
    faqs: [
      {
        q: "Does Help Me replace campus police?",
        a: "No. Call NDSU Police, MSUM Public Safety, Concordia Public Safety, or 911 for emergencies. Help Me is for small, everyday favors.",
      },
      {
        q: "Which campus calendars are in the app?",
        a: "NDSU, MSUM, Concordia, and M State, always linked to the official page.",
      },
      {
        q: "Do I need a .edu email?",
        a: "No. You can join with email or Sign in with Apple. An .edu address does not skip the review that helpers go through.",
      },
    ],
  }),
  page({
    slug: "campuses/ndsu",
    kind: "campus",
    title: "Help Me near NDSU in Fargo: events and small favors",
    description:
      "Ask neighbors near NDSU for directions, a phone charger, or a jump start. MyNDSU events appear in the app. NDSU Police stay the official campus number.",
    h1: "NDSU, Bison country, still a city campus",
    eyebrow: "Fargo, ND",
    lead: "North Dakota State University sits on 19th Avenue North in Fargo. The Union is public, the ramps freeze, and NDSU Police are the official number. Help Me is for the neighbor.",
    answer:
      "Near NDSU in Fargo, Help Me is a place to ask for small favors: directions to a hall, a phone charger, a jump start in a lot. Meet at Memorial Union or another public place. Official NDSU events from MyNDSU appear in the app, linked to the source. NDSU Police remain the official campus safety number.",
    takeaways: [
      "Meet at Memorial Union or a lit, busy public place.",
      "Official events come from MyNDSU and link back to it.",
      "NDSU Police handle campus emergencies and official escorts.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.92,
    keywords: ["NDSU help", "NDSU events", "Memorial Union", "Bison", "NDSU Police", "near NDSU Fargo"],
    geo: { name: "North Dakota State University", type: "Campus", city: "Fargo", state: "ND", county: "Cass County", lat: 46.897, lng: -96.802 },
    sections: [
      {
        heading: "What gets people stuck near NDSU",
        body: [
          "Directions to a lecture hall on the first Tuesday. A printer that will not talk to the network. A phone that dies at the library. Two more hands for a futon on move-in weekend. A jump start in a 19th Avenue lot in January. None of that is a 911 call, and all of it can wreck a day.",
          "Meet at Memorial Union, a well-lit lot, or another named public place. Your request shows as a rough area about 500 meters wide, not a pin on your hall.",
        ],
        bullets: [
          "A phone charger at the library or the union.",
          "Directions to the right hall or the right door.",
          "Two more hands for something heavy.",
          "A jump start in a busy lot, in daylight.",
        ],
      },
      {
        heading: "MyNDSU events, attributed",
        body: [
          "Official NDSU events come from MyNDSU at myndsu.ndsu.edu/events. Help Me caches them, labels the source, and links back. Tap through for the last word on time and place. Help Me does not invent an event to fill Home.",
          "Ticketmaster Fargo listings can cover shows at the FARGODOME and nearby venues. Those are regional, not campus-owned, and the source stays on the card either way. Showing an event is not affiliation or endorsement.",
        ],
      },
      {
        heading: "NDSU Police are still NDSU Police",
        body: [
          "Campus emergencies, crime, and official escorts go through NDSU Police. Help Me does not dispatch them, replace them, or wear their patch. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
          "A private chat opens only between you and the neighbor who said yes. You can report or block any member at any time, or delete your account from inside the app by typing DELETE. If you are in danger, call 911 or NDSU Police first.",
        ],
      },
    ],
    related: ["cities/fargo", "neighborhoods/north-fargo", "resources/ndsu-safety", "help/study-buddy", "help/tech-support", "help/directions", "events", "campuses/msum"],
    faqs: [
      {
        q: "Does Help Me replace NDSU Police?",
        a: "No. Official campus safety and escorts go through NDSU Police. Help Me is a place to ask neighbors for small favors.",
      },
      {
        q: "Where should I meet someone near campus?",
        a: "Memorial Union is the obvious public place. A busy lobby or a well-lit lot works too. Do not send a first meeting to a residence-hall room.",
      },
      {
        q: "Are NDSU events in the app?",
        a: "Yes. Official listings come from myndsu.ndsu.edu/events and link back to that page.",
      },
      {
        q: "Can I ask for a study buddy?",
        a: "Yes. Meet in public. It is not paid tutoring and not a class-registration service.",
      },
    ],
  }),
  page({
    slug: "campuses/ndsu-downtown",
    kind: "campus",
    title: "NDSU downtown Fargo: ramps, Broadway, and small favors",
    description:
      "NDSU's downtown presence puts students and staff on Broadway. What it means for ramp parking, evening walks, and where a neighbor can lend a hand.",
    h1: "NDSU downtown, a campus on a working street",
    eyebrow: "Fargo, ND",
    lead: "A campus that shares its sidewalks with a working downtown changes almost everything about the day, from where you park to when the street gets quiet.",
    answer:
      "NDSU has a downtown Fargo presence apart from its main campus north of the city center, which puts students and staff on Broadway. Parking is ramps and metered streets, not campus lots, and the street feels different after dark. Help Me is a place to ask a neighbor for small favors there, like directions or a jump start.",
    takeaways: [
      "Downtown means ramps and metered street parking, not campus lots.",
      "Broadway is busy during the day and different at night.",
      "Fargo Police cover the city, and NDSU Police cover university property.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.6,
    keywords: ["NDSU downtown campus", "downtown Fargo students", "Broadway Fargo NDSU"],
    geo: { name: "NDSU downtown", type: "Campus", city: "Fargo", state: "ND", county: "Cass County", lat: 46.8772, lng: -96.7898 },
    sections: [
      {
        heading: "A different set of practical problems",
        body: [
          "Ramps and metered street parking instead of campus lots. Weekend crowds on Broadway that the main campus does not see. Buildings that are part of a downtown block rather than a quad. It is a good environment, and it asks for different habits, especially after dark.",
          "Between the main campus and downtown, the questions repeat: which building, which entrance, which ramp. Those are exactly the small questions a neighbor can answer in a minute.",
        ],
      },
      {
        heading: "Where a neighbor fits",
        body: [
          "Directions between downtown and the main campus. A jump start in a ramp that has emptied out. A phone charger at a Broadway coffee shop. Meet somewhere lit and busy. Broadway offers plenty of options during business hours, and a store entrance or a lobby is better than a quiet corner.",
        ],
        bullets: [
          "Directions between downtown and the main campus.",
          "A phone charger in a coffee shop.",
          "A jump start in a busy ramp, in daylight.",
          "Two more hands for something heavy.",
        ],
      },
      {
        heading: "Official help",
        body: [
          "Fargo Police cover the city and NDSU Police cover university property. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
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
        q: "Who handles emergencies downtown?",
        a: "Call 911. Fargo Police cover the city and NDSU Police cover university property.",
      },
      {
        q: "Where do I meet someone downtown?",
        a: "A busy public place: a Broadway coffee shop, a store entrance, or a lobby. You choose the label, and exact location is optional.",
      },
    ],
  }),
  page({
    slug: "campuses/msum",
    kind: "campus",
    title: "Help Me near MSUM in Moorhead: events and small favors",
    description:
      "Ask neighbors near MSUM for directions, a phone charger, or a jump start. Campus Labs events appear in the app. MSUM Public Safety stays official.",
    h1: "MSUM, Dragons on the Minnesota side",
    eyebrow: "Moorhead, MN",
    lead: "Minnesota State University Moorhead sits minutes from Concordia and a bridge from Fargo. The campus has its own public safety office, and Help Me does not pretend to be it.",
    answer:
      "Near MSUM in Moorhead, Help Me is a place to ask for small favors: directions to a building, a phone charger, a jump start in a lot. Meet at the student union or another busy public place. Official MSUM events from Campus Labs appear in the app with the source attached. MSUM Public Safety is the official campus number.",
    takeaways: [
      "MSUM is in Moorhead, Clay County, Minnesota.",
      "Official events come from Campus Labs and link back to it.",
      "MSUM Public Safety and 911 handle campus emergencies.",
      "Help Me is not an emergency service.",
    ],
    priority: 0.88,
    keywords: ["MSUM help", "MSUM events", "Dragons", "Minnesota State University Moorhead", "near MSUM Moorhead"],
    geo: { name: "Minnesota State University Moorhead", type: "Campus", city: "Moorhead", state: "MN", county: "Clay County", lat: 46.866, lng: -96.762 },
    sections: [
      {
        heading: "A Moorhead campus, not a Fargo annex",
        body: [
          "MSUM is in Moorhead, Clay County, Minnesota. People cross into Fargo for work and food, and Fargo residents cross back for class. Help Me covers the whole metro, but official numbers do not copy across the river. Emergencies here are 911 and MSUM Public Safety, not Fargo Police and not NDSU Police.",
          "Everyday asks look like campus life anywhere: directions to a building, tech help with a laptop, a study partner, a phone charger. Meet at the student union or another populated indoor place. Your request shows as a rough area about 500 meters wide.",
        ],
      },
      {
        heading: "Campus Labs events, linked",
        body: [
          "Official MSUM events come from Campus Labs at mnstate.campuslabs.com/engage/events. Help Me labels the source and keeps the official link. Open it for the last word. Concordia's calendar sits beside it in the app, because a Saturday in this metro ignores the campus line.",
        ],
        bullets: [
          "Directions to the right building.",
          "A phone charger in the library or the union.",
          "A jump start in a busy lot, in daylight.",
          "Two more hands for something heavy.",
        ],
      },
      {
        heading: "Public Safety is official. We are not.",
        body: [
          "MSUM Public Safety runs official campus safety programs. Use them when you want an official response, and use Help Me when you want a neighbor. Helpers can apply to be reviewed by our team. Help Me does not run background checks. Helpers are not employees of the university.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["cities/moorhead", "neighborhoods/downtown-moorhead", "campuses/concordia", "campuses/ndsu", "resources/msum-safety", "help/study-buddy"],
    faqs: [
      {
        q: "Does Help Me replace MSUM Public Safety?",
        a: "No. Official escorts and campus emergencies go through MSUM Public Safety or 911. Help Me is for small, everyday favors.",
      },
      {
        q: "Do MSUM events show up in Help Me?",
        a: "Yes. Official listings come from mnstate.campuslabs.com/engage/events and stay attributed to that source.",
      },
      {
        q: "Does Help Me only match people from the same campus?",
        a: "No. Matching is local to helpers nearby who are online, not campus-only. Two campuses a few blocks apart still share a city.",
      },
    ],
  }),
  page({
    slug: "campuses/concordia",
    kind: "campus",
    title: "Help Me near Concordia College, Moorhead",
    description:
      "Ask neighbors near Concordia for directions, a phone charger, or a jump start. Cobber Connect events are in the app. Concordia Public Safety stays official.",
    h1: "Concordia, Cobbers, still Moorhead",
    eyebrow: "Moorhead, MN",
    lead: "Concordia College sits next to MSUM and across the river from Fargo. Cobber Connect is the official calendar and Concordia Public Safety is the official office. Help Me is neither.",
    answer:
      "Near Concordia College in Moorhead, Help Me is a place to ask for small favors: directions to a hall, a phone charger, a jump start in a lot. Meet at a campus center or a busy lobby. Official Concordia events from Cobber Connect appear in the app with the source attached. Concordia Public Safety is the official campus number.",
    takeaways: [
      "Concordia is in Moorhead, Clay County, Minnesota.",
      "Official events come from Cobber Connect and link back to it.",
      "Concordia Public Safety and 911 handle campus emergencies.",
      "Help Me is not an emergency service.",
    ],
    priority: 0.86,
    keywords: ["Concordia College help", "Cobbers", "Cobber Connect", "Concordia Moorhead", "near Concordia Moorhead"],
    geo: { name: "Concordia College", type: "Campus", city: "Moorhead", state: "MN", county: "Clay County", lat: 46.865, lng: -96.767 },
    sections: [
      {
        heading: "A small campus with its own public safety office",
        body: [
          "Concordia is compact and walkable, and it is still a place where a first-year cannot find a hall and a senior cannot find a jump in January. Help Me is for small favors like directions, a phone charger, a hand with a heavy box, or a walk with someone to a car. It is not Concordia Public Safety, not campus police, and not a contracted night patrol.",
          "Meet at a campus center, a populated lobby, or a well-lit lot. Do not send a first meeting to a residence hall. Your request shows as a rough area about 500 meters wide, and exact location is optional after someone says yes.",
        ],
      },
      {
        heading: "Cobber Connect, attributed",
        body: [
          "Official Concordia events come from Cobber Connect at cobberconnect.cord.edu/events. Help Me caches them and links back. MSUM's Campus Labs feed sits next to it, because the two campuses share a city. Help Me does not invent a concert or a game time, and showing an event is not affiliation.",
        ],
        bullets: [
          "Directions to the right hall.",
          "A phone charger in a lobby.",
          "A jump start in a busy lot, in daylight.",
          "A walk with someone to a car in the evening.",
        ],
      },
      {
        heading: "Adults, Minnesota numbers",
        body: [
          "Help Me is for adults. Helpers can apply to be reviewed by our team. Help Me does not run background checks. Moorhead Police and Clay County handle official help off campus, and Concordia Public Safety handles it on campus. 911 handles danger.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["cities/moorhead", "campuses/msum", "campuses/ndsu", "resources/concordia-safety", "help/study-buddy", "events"],
    faqs: [
      {
        q: "Is Help Me the same as Concordia Public Safety?",
        a: "No. Official campus safety and escorts go through Concordia Public Safety. Help Me is for small favors between neighbors.",
      },
      {
        q: "Are Cobber events in the app?",
        a: "Yes. Official listings come from cobberconnect.cord.edu/events and link back to that page.",
      },
      {
        q: "Can I ask for a walk to my car after a late rehearsal?",
        a: "Yes, as a walk with someone, from a neighbor. If you want an official campus escort, call Concordia Public Safety instead.",
      },
      {
        q: "Do I need to be a student to use Help Me here?",
        a: "No. Help Me is for adults across Fargo-Moorhead. Helping needs a current review by our team.",
      },
    ],
  }),
  page({
    slug: "campuses/m-state",
    kind: "campus",
    title: "Help Me near M State in Moorhead: calendar and favors",
    description:
      "M State's Moorhead campus: the official academic calendar in the app, and small favors from neighbors nearby. M State's own safety process stays official.",
    h1: "M State Moorhead, the other campus on this side of the river",
    eyebrow: "Moorhead, MN",
    lead: "Minnesota State Community and Technical College has a Moorhead campus. It is smaller than MSUM and Concordia, and it is still part of the metro Help Me is built for.",
    answer:
      "Near M State's Moorhead campus, Help Me is a place to ask for small favors: directions to a lobby, a phone charger, tech help with a laptop. M State's official calendar at minnesota.edu/events appears in the app with the source attached. M State's own safety process and 911 handle emergencies.",
    takeaways: [
      "M State has a campus in Moorhead, Clay County, Minnesota.",
      "The official calendar appears in the app and links back to minnesota.edu.",
      "M State's safety process and 911 handle campus emergencies.",
      "Help Me is not an emergency service.",
    ],
    priority: 0.8,
    keywords: ["M State Moorhead", "Minnesota State Community and Technical College", "M State events", "near M State Moorhead"],
    geo: { name: "M State Moorhead", type: "Campus", city: "Moorhead", state: "MN", county: "Clay County", lat: 46.869, lng: -96.758 },
    sections: [
      {
        heading: "A working campus with real parking lots",
        body: [
          "M State Moorhead is a campus with real parking lots, real labs, and real January. People here ask for the same everyday things as anywhere else: directions, tech help, a study partner, a phone charger. Help Me is not M State security, and it is not a tutoring desk.",
          "Meet in a populated lobby or another public indoor place. Your request shows as a rough area about 500 meters wide, not a pin on a classroom wing. A private chat opens only between two people, after someone says yes.",
        ],
      },
      {
        heading: "Academic calendar, official URL",
        body: [
          "M State's contribution to Help Me is its official calendar at minnesota.edu/events: dates and college-published events, attributed and linked. It is not a firehose of student-group posts, and Help Me does not scrape department pages to pretend it is.",
        ],
        bullets: [
          "Directions to the right building.",
          "A phone charger in a lobby.",
          "Tech help with a laptop between classes.",
          "A jump start in a busy lot, in daylight.",
        ],
      },
      {
        heading: "Official safety stays official",
        body: [
          "Campus emergencies go through M State's own safety process and 911. Moorhead Police cover the city around the campus. Help Me does not dispatch any of them. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["cities/moorhead", "campuses/msum", "campuses/concordia", "resources/moorhead-police", "help/tech-support", "events"],
    faqs: [
      {
        q: "Does Help Me include M State events?",
        a: "Yes. The official calendar at minnesota.edu/events appears in the app, attributed and linked. Open the official page for the last word.",
      },
      {
        q: "Is Help Me campus security for M State?",
        a: "No. Use M State's safety channels and 911 for emergencies. Help Me is for small, everyday favors.",
      },
      {
        q: "Can I ask for tech help between classes?",
        a: "Yes, as a small favor from a neighbor. It is not the campus IT help desk or a repair shop.",
      },
    ],
  }),
  page({
    slug: "campuses/rasmussen-fargo",
    kind: "campus",
    title: "Help Me near Rasmussen University in Fargo",
    description:
      "Rasmussen University's Fargo campus is part of the metro. Small favors from neighbors nearby: directions, a charger, a jump start. Not a calendar we include.",
    h1: "Rasmussen Fargo, a smaller campus in the same winter",
    eyebrow: "Fargo, ND",
    lead: "A career-focused campus in southwest Fargo, not a second NDSU. People here still park in lots that freeze, and Help Me is still not campus security.",
    answer:
      "Near Rasmussen University's Fargo campus, Help Me is a place to ask neighbors for small favors: directions, a phone charger, a jump start in a lot. Rasmussen is in Fargo, so the metro app applies, but Help Me does not include a Rasmussen events calendar. Rasmussen's own channels and 911 handle emergencies.",
    takeaways: [
      "Rasmussen's Fargo campus is in the metro Help Me is built for.",
      "Help Me does not include a Rasmussen events calendar.",
      "Meet in a populated lobby or a public commercial door.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.6,
    keywords: ["Rasmussen Fargo", "Rasmussen University Fargo", "southwest Fargo campus"],
    geo: { name: "Rasmussen University Fargo", type: "Campus", city: "Fargo", state: "ND", county: "Cass County", lat: 46.855, lng: -96.847 },
    sections: [
      {
        heading: "In the metro, not a feed we include",
        body: [
          "Rasmussen University's Fargo campus is in the city Help Me is built for, which matters for matching. It does not mean Help Me includes a Rasmussen events calendar. The official sources are NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo. A Rasmussen date that is not on one of those is not in the app, because Help Me invents nothing.",
        ],
      },
      {
        heading: "Everyday asks in southwest Fargo",
        body: [
          "Directions, a phone charger, a hand with a laptop, a jump start in the lot. Meet at a populated lobby or a nearby public commercial door, since West Acres is close. Your request shows as a rough area about 500 meters wide, not a pin on a classroom.",
          "Help Me is not a Rasmussen partnership, not campus security, and not a tutoring marketplace. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
        ],
        bullets: [
          "Directions to the right entrance.",
          "A phone charger in a lobby.",
          "A jump start in a busy lot, in daylight.",
          "Two more hands for something heavy.",
        ],
      },
      {
        heading: "Fargo numbers, adult app",
        body: [
          "Campus-level questions go through Rasmussen's own channels. Street-level emergencies are Fargo Police and 911. Help Me is for adults. Support is support@helpme.fyi.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["cities/fargo", "neighborhoods/west-acres", "campuses/ndsu", "help/jump-start", "help/tech-support", "resources/fargo-police"],
    faqs: [
      {
        q: "Does Help Me include Rasmussen events?",
        a: "No. Rasmussen is not one of the official calendar sources. NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo are.",
      },
      {
        q: "Is Rasmussen part of the Fargo-Moorhead app?",
        a: "The campus is in Fargo, so the metro app applies. That is geography, not a campus contract.",
      },
      {
        q: "Can I get a jump start in the lot?",
        a: "Yes, as everyday public help. Meet in a lit, public part of the lot and keep both people outside the car. A neighbor is not a tow service.",
      },
    ],
  }),
];
