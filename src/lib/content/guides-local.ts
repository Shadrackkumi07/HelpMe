import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

const REVIEW_LINE = "Helpers can apply to be reviewed by our team. Help Me does not run background checks.";
const REPORT_LINE = "You can report or block any member at any time.";
const NOT_911 = "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.";

/** Winter, cars, newcomers, campuses, and getting around. Official numbers should be confirmed on the official site. */
export const GUIDE_PAGES_LOCAL: SeoPage[] = [
  page({
    slug: "guides/winter-help-fargo",
    kind: "guide",
    title: "Winter help in Fargo-Moorhead: what to ask, what to call",
    description:
      "How to ask for everyday winter help in Fargo, West Fargo, and Moorhead: jump starts, walks to the car, and the line between stuck and an emergency.",
    h1: "Winter help, before the wind chill becomes the story",
    eyebrow: "Guide",
    lead: "Winter here is not a metaphor. It is a battery, a parking ramp, and a walk that was fine in September.",
    answer:
      "In a Fargo-Moorhead winter, a dead battery in a lit lot is a neighbor ask, and a person without shelter, a car in a ditch on I-94, or anyone who cannot feel their hands is a 911 call. Name a public place, keep exact location off until you agree, and go inside if the wait gets cold.",
    takeaways: [
      "Stuck in a lit lot is a neighbor ask. Danger from the cold is 911.",
      "Name a public place, and go inside if the wait stretches.",
      "Fargo and West Fargo are in North Dakota. Moorhead and Dilworth are in Minnesota.",
      "211 and the shelter pages are for a bed tonight, not Help Me.",
    ],
    priority: 0.75,
    keywords: ["winter help Fargo", "Fargo winter survival", "winter jump start Fargo", "winter shelter Fargo"],
    sections: [
      {
        heading: "The line between stuck and an emergency",
        body: [
          "A dead battery in a lit lot is a neighbor ask. Someone without shelter in a blizzard, a person who cannot feel their hands, a car in a ditch on I-94, the smell of exhaust in a closed garage: that is 911. Do not workshop it in an app.",
          "If you need a bed tonight, skip Help Me. Dial 211 or open the winter shelter resource page and use official programs. Help Me does not operate a shelter.",
        ],
      },
      {
        heading: "Asks that fit January",
        body: [
          "Jump starts in public lots. A walk from the library to the ramp after a night class. Directions when the skyway logic fails a visitor. A pair of hands with a stubborn trunk. None of that needs a feed, and all of it needs a public meeting place.",
        ],
        bullets: [
          "Name the public place: West Acres, Memorial Union, a store entrance, a downtown ramp lobby.",
          "Keep exact location off until someone says yes and you agree.",
          "Wear the coat you mock in October.",
          "If the wait stretches and the cold is winning, go inside and ask again from a vestibule.",
        ],
      },
      {
        heading: "Two states, one winter",
        body: [
          "Fargo and West Fargo sit in Cass County, North Dakota. Moorhead and Dilworth sit in Clay County, Minnesota. 911 works on both banks. Food, housing, and county benefits do not copy across. Bookmark the Cass and Clay resource pages now, not during a wind advisory.",
        ],
      },
      {
        heading: "Official winter tools that are not this app",
        body: [
          "MATBUS for when the car is a sculpture. Campus public safety escorts at NDSU, MSUM, and Concordia. 211 for heat, shelter, and food. Police non-emergency lines for when you need an officer and nobody is in danger. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["resources/winter-shelters-fargo", "resources/211-north-dakota", "not-911", "cities/fargo", "seasons/winter-in-fargo-moorhead", "help/winter-car-help"],
    faqs: [
      {
        q: "Can I ask someone to warm up my apartment?",
        a: "No. Help Me is not a utility or a landlord. If you have no heat, call 211 and your utility. If someone is in medical danger from cold, call 911.",
      },
      {
        q: "Is a walk to the car okay after dark in winter?",
        a: "Yes, as a small public ask, with report and block available. For an official escort on campus, call campus public safety.",
      },
      {
        q: "Where do I go if I have nowhere warm?",
        a: "Call 211 or see the winter shelter resource page. Do not wait on an app.",
      },
    ],
  }),
  page({
    slug: "guides/new-to-fargo",
    kind: "guide",
    title: "New to Fargo-Moorhead: a practical first-week guide",
    description:
      "Moving to Fargo, West Fargo, or Moorhead? Two states, several campuses, winter, and how asking a neighbor fits a city you do not know yet.",
    h1: "New to Fargo, on purpose",
    eyebrow: "Guide",
    lead: "This metro is easy to like and easy to get stuck in, especially in January and especially if your people are eight hours away.",
    answer:
      "If you are new to Fargo-Moorhead, learn the river first: Fargo and West Fargo are in Cass County, North Dakota, and Moorhead and Dilworth are in Clay County, Minnesota. 911 works on both sides, but other services do not copy across. Save 911 and 211, and ask a neighbor in a public place when the day stalls.",
    takeaways: [
      "Two states, two counties, one metro.",
      "Save 911, and save 211 for help that is not an ambulance.",
      "MATBUS crosses the river. Check the schedule before a weekend night.",
      "Meet new people in public, and ask in one sentence.",
    ],
    priority: 0.7,
    keywords: ["moving to Fargo", "new to Fargo", "Fargo first week", "new to Moorhead", "Fargo newcomer guide"],
    sections: [
      {
        heading: "Learn the river first",
        body: [
          "The Red River is the state line. Fargo and West Fargo are Cass County, North Dakota. Moorhead and Dilworth are Clay County, Minnesota. People cross for class, work, and groceries without thinking, until they need a county office. 911 still works. Other services do not.",
        ],
      },
      {
        heading: "The map you will actually use",
        body: [
          "Downtown Broadway is the walkable strip. West Acres is the big mall on the west side. NDSU is in north Fargo. MSUM and Concordia are in Moorhead, minutes apart, and M State has a Moorhead campus. West Fargo is its own city, not a Fargo neighborhood, with Sheyenne Street, Veterans Boulevard, and a city calendar of its own.",
        ],
        bullets: [
          "Save 911, and save 211 for help that is not an ambulance.",
          "Get a library card at Fargo Public Library if you live in Fargo.",
          "MATBUS crosses the river. Check the schedule before you assume a Saturday night bus.",
          "Meet new people in public. Help Me shows a rough area, not your first apartment.",
        ],
      },
      {
        heading: "Where Help Me fits a newcomer",
        body: [
          "Directions. A jump start. A walk from a lot you cannot name yet. A study table when you do not have a group chat. Official campus and city events sit together in the Community tab, each attributed to its source.",
          "It will not replace the police, a landlord, a bank, or your first winter coat. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["for-newcomers", "cities/fargo", "cities/moorhead", "cities/west-fargo", "lists/things-to-do-in-fargo", "guides/new-to-ndsu"],
    faqs: [
      {
        q: "Is Help Me only for students?",
        a: "No. Students are a big part of this metro, but neighbors, newcomers, and families use the same app.",
      },
      {
        q: "Should I use Fargo numbers in Moorhead?",
        a: "Not for county or city services. 911 works on both sides. Police, food assistance, and housing follow Cass County or Clay County.",
      },
      {
        q: "What is the first thing to do before winter?",
        a: "Get a real coat, a scraper, and a jump pack, and read the winter guide.",
      },
    ],
  }),
  page({
    slug: "guides/new-to-ndsu",
    kind: "guide",
    title: "New to NDSU: campus police, the Union, first semester",
    description:
      "Starting at North Dakota State University? Save the campus police number, learn the Union, and see where Help Me fits a first semester in Fargo.",
    h1: "New to NDSU, without pretending you already know 19th Avenue",
    eyebrow: "Guide",
    lead: "North Dakota State is a campus you can get lost on in daylight. That is survivable. Doing it without the official numbers is not.",
    answer:
      "If you are new to NDSU, save NDSU Police before you save a neighbor: the published non-emergency line is 701-231-8998, and 911 is for emergencies. Learn Memorial Union as your indoor public meeting place, and use Help Me for small favors like directions or a jump in a lit lot, not for official campus help.",
    takeaways: [
      "Save NDSU Police first. Confirm the number on the official site.",
      "Memorial Union is the indoor public default.",
      "NDSU events from MyNDSU appear in Help Me with the source attached.",
      "Help Me does not replace campus escorts or student services.",
    ],
    priority: 0.6,
    keywords: ["new to NDSU", "NDSU first semester", "NDSU Memorial Union", "NDSU police", "NDSU parking"],
    sections: [
      {
        heading: "Save official NDSU before you save a neighbor",
        body: [
          "NDSU University Police and Safety is the campus number. The published non-emergency line is 701-231-8998, and 911 remains 911. They run a safety escort: call that number and ask. That is an official officer, not a neighbor in an app.",
          "Student Health sits in the Wallman Wellness Center (701-231-7331), and Counseling is in Ceres Hall (701-231-7671). After hours, NDSU points students to FirstLink and 988. None of that is Help Me, and numbers can change, so confirm on the NDSU site.",
        ],
      },
      {
        heading: "How to get oriented",
        body: [
          "Memorial Union is the indoor public default. The libraries are study ground. MyNDSU is the official events source Help Me includes, labeled and linked. If the feed is down, the app says so, and it does not invent a Bison game.",
        ],
        bullets: [
          "Learn one indoor meeting place: the Union.",
          "Learn one official safety number: NDSU Police.",
          "Learn the river: you are in Fargo, Cass County, North Dakota. Moorhead is a different state.",
          "Ask Help Me for directions, a study table, or a jump in a public lot.",
        ],
      },
      {
        heading: "Parking lots will test you",
        body: [
          "NDSU lots in January are jump-start country. Meet at a public, lit corner of the lot or walk to the Union first. Do not share a residence-hall pin. Campus police are still there if something is wrong. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["resources/ndsu-safety", "resources/student-health-ndsu", "guides/campus-events-fargo-moorhead", "campuses/ndsu", "neighborhoods/north-fargo", "help/jump-start"],
    faqs: [
      {
        q: "Does a student ID make me a helper?",
        a: "No. Helping needs identity evidence and a current review by our team. A student card is not that.",
      },
      {
        q: "Can Help Me replace NDSU Police escorts?",
        a: "No. Call NDSU Police for an official escort. Help Me is for small favors between neighbors.",
      },
      {
        q: "Where do I meet someone on campus?",
        a: "Memorial Union or another busy public place. Do not meet in a residence-hall room.",
      },
    ],
  }),
  page({
    slug: "guides/new-to-msum",
    kind: "guide",
    title: "New to MSUM: Moorhead campus, numbers, and the first week",
    description:
      "Starting at Minnesota State University Moorhead? Public Safety, Minnesota services, campus events, and everyday help across the river from Fargo.",
    h1: "New to MSUM, on the Minnesota side",
    eyebrow: "Guide",
    lead: "You did not enroll in a Fargo annex. MSUM is a Minnesota campus with its own public safety, its own calendar, and a river that is also a border.",
    answer:
      "If you are new to MSUM in Moorhead, save MSUM Public Safety (218-477-2449) and remember you are in Clay County, Minnesota, not Fargo. 911 works everywhere, but Moorhead Police are not Fargo Police. Use the campus union and library as public indoor places, and ask a neighbor for small favors like directions or a jump.",
    takeaways: [
      "Save MSUM Public Safety. Confirm the number on the official site.",
      "You are in Clay County, Minnesota, so Minnesota services apply.",
      "The campus union and library are public indoor ground.",
      "MSUM events from Campus Labs appear in Help Me with the source.",
    ],
    priority: 0.6,
    keywords: ["new to MSUM", "MSUM first week", "MSUM Public Safety", "Moorhead campus guide"],
    sections: [
      {
        heading: "Moorhead numbers, Moorhead campus",
        body: [
          "MSUM Public Safety publishes 218-477-2449. They offer safety escorts, on-campus jump starts, and vehicle unlocks in a short radius around campus. 911 is still 911, and Moorhead Police are not Fargo Police. Confirm the numbers on the official site.",
          "You are in Clay County, Minnesota. Food support, mental health crisis lines, and housing programs can differ from Cass County, and county offices do not copy across the river.",
        ],
      },
      {
        heading: "First-week geography",
        body: [
          "Concordia is minutes away. Downtown Moorhead along Center Avenue is a public meeting strip. Fargo's Broadway is a walk or a short drive when you want the other downtown. Gooseberry Park is beautiful and not always the right place to meet someone new after dark. Buildings, buses, and meals take a week to sort out, and asking a neighbor is part of that.",
        ],
        bullets: [
          "Save Public Safety before you save a group chat.",
          "Use the campus union and library as public indoor ground.",
          "Help Me shows official MSUM events with the source attached.",
          "Ask a neighbor for a study table or a jump. Ask Public Safety for an official escort.",
        ],
      },
      {
        heading: "Official first, neighbor second",
        body: [
          "Campus emergencies are 911 or MSUM Public Safety. Help Me is for small favors, not for campus help. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["resources/msum-safety", "resources/clay-county-resources", "cities/moorhead", "campuses/msum", "neighborhoods/downtown-moorhead", "guides/new-to-concordia"],
    faqs: [
      {
        q: "Does Help Me work in Moorhead or only Fargo?",
        a: "Moorhead is a launch city. Help Me opens one zone at a time across Fargo, West Fargo, and Moorhead.",
      },
      {
        q: "Should I call Fargo Police from campus?",
        a: "For a campus emergency, call 911 or MSUM Public Safety. Moorhead Police serve the city.",
      },
      {
        q: "Where do I meet someone near campus?",
        a: "The student union, the library, or a busy store entrance. Skip residence halls and quiet corners.",
      },
    ],
  }),
  page({
    slug: "guides/new-to-concordia",
    kind: "guide",
    title: "New to Concordia College: Public Safety and SAFEWalk",
    description:
      "Starting at Concordia College in Moorhead? Public Safety, SAFEWalk, Knutson Campus Center, and where Help Me fits a smaller campus next to MSUM.",
    h1: "New to Concordia, small campus, real city",
    eyebrow: "Guide",
    lead: "Concordia is walkable and Moorhead is still a city. The combination fools people into thinking they do not need a meeting place or a number to call.",
    answer:
      "If you are new to Concordia, save Campus Public Safety (218-299-3123), which also runs SAFEWalk, and remember 911 reaches Moorhead emergency dispatch. Knutson Campus Center is a good public indoor meeting place. Use Help Me for small favors like directions or a jump, and the official offices for campus help.",
    takeaways: [
      "Save Public Safety. SAFEWalk uses the same number.",
      "Knutson Campus Center is a public indoor default.",
      "Concordia and MSUM share a city and a river.",
      "Clay County services apply, not Cass County.",
    ],
    priority: 0.55,
    keywords: ["new to Concordia", "Concordia College Moorhead", "SAFEWalk Concordia", "Knutson Campus Center"],
    sections: [
      {
        heading: "Official Concordia first",
        body: [
          "Campus Public Safety publishes 218-299-3123. SAFEWalk uses the same number. From a campus phone the short extension is 3123, and from a cell you use the full number. 911 reaches Moorhead emergency dispatch. Confirm the numbers on the official site.",
          "Knutson Campus Center is the indoor public default: a place you can name in a chat without dropping a residence pin.",
        ],
      },
      {
        heading: "You share a city with MSUM",
        body: [
          "The two campuses sit minutes apart. Help Me shows both official calendars, labeled and linked. A weekend here is often a Concordia event, an MSUM event, and a walk across the river to Broadway. Attribution stays with the source, and Help Me does not invent a concert to fill the rail.",
        ],
        bullets: [
          "Meet at Knutson, a library, or a public place on Center Avenue.",
          "Use SAFEWalk when you want an official campus walk.",
          "Use Help Me for a neighbor, for a jump, directions, or a study table.",
          "Clay County services apply. Do not paste a Cass County office onto a Moorhead problem.",
        ],
      },
      {
        heading: "Counseling and crisis are not a helper category",
        body: [
          "Concordia publishes a Counseling Center. For a mental health crisis, call or text 988, or call 911. Help Me is not a crisis line and not a counselor. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["resources/concordia-safety", "guides/new-to-msum", "cities/moorhead", "guides/campus-events-fargo-moorhead", "resources/mental-health-fargo", "campuses/concordia"],
    faqs: [
      {
        q: "Is Concordia in Fargo?",
        a: "No. Concordia College is in Moorhead, Minnesota. Help Me still covers the metro. Official police are Moorhead or campus public safety.",
      },
      {
        q: "Can I use Help Me instead of SAFEWalk?",
        a: "Use SAFEWalk for an official campus walk. Help Me is for small favors between neighbors, not campus security.",
      },
      {
        q: "Where can I find counseling?",
        a: "Concordia's Counseling Center, or 988 for a crisis. See the mental health resources page.",
      },
    ],
  }),
  page({
    slug: "guides/new-to-m-state",
    kind: "guide",
    title: "New to M State Moorhead: commuting, campus, and calendar",
    description:
      "Starting at Minnesota State Community and Technical College in Moorhead? Campus logistics, Clay County services, and everyday small favors.",
    h1: "New to M State, Moorhead campus",
    eyebrow: "Guide",
    lead: "M State in Moorhead runs on a commuter rhythm: park, class, work, the river. The help you need is often a battery, a building name, or a date.",
    answer:
      "If you are new to M State's Moorhead campus, find the official campus safety desk through the campus directory, and use 911 for emergencies. M State's academic calendar appears in Help Me with its source. Use Help Me for small favors like a jump in a lot or directions between campuses, and county services for food, health, and housing.",
    takeaways: [
      "Find the current campus safety number on the official site.",
      "M State's calendar appears in Help Me, linked to minnesota.edu.",
      "Commuter problems start in parking lots. Meet in public ones.",
      "Clay County services cover food, health, and housing help.",
    ],
    priority: 0.55,
    keywords: ["new to M State", "M State Moorhead", "M State campus guide", "M State commuter"],
    sections: [
      {
        heading: "Find the official campus desk",
        body: [
          "M State's Moorhead campus sits in the same city as MSUM and Concordia. Search the campus directory for the current safety number instead of trusting a number from a flyer. 911 still works, and MSUM Public Safety is a neighboring campus, not your campus police.",
          "Academic dates from M State are one of the official calendars Help Me includes. Open the official link on a listing for the last word on a drop date or a closure.",
        ],
      },
      {
        heading: "Commuter problems are still local problems",
        body: [
          "A lot of M State days start in a parking lot. A jump start belongs in a lit, public place. Directions between M State, MSUM, Concordia, and a Fargo job are a fair ask. Help Me does not arrange transportation of any kind.",
        ],
        bullets: [
          "You are in Moorhead, Clay County, Minnesota.",
          "MATBUS is the official bus, not a neighbor with a car.",
          "Meet at a campus entrance or a public lobby, not an apartment door.",
          "County food, health, and housing help: Clay County or 211.",
        ],
      },
      {
        heading: "The rest of the metro is in the same app",
        body: [
          "NDSU, MSUM, Concordia, West Fargo, and Ticketmaster Fargo listings sit beside M State dates so a weekend is visible. Use the source name. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["guides/new-to-msum", "cities/moorhead", "resources/clay-county-resources", "resources/matbus", "guides/campus-events-fargo-moorhead", "campuses/m-state"],
    faqs: [
      {
        q: "Does Help Me include M State events?",
        a: "Yes. M State academic dates are a listed official source. Open the official link for details.",
      },
      {
        q: "Can I get driven to another campus through Help Me?",
        a: "No. Help Me does not arrange transportation. Use MATBUS or another official transit service.",
      },
      {
        q: "Who do I call in an emergency on campus?",
        a: "Call 911. Use the campus directory for the current non-emergency safety number.",
      },
    ],
  }),
  page({
    slug: "guides/campus-events-fargo-moorhead",
    kind: "guide",
    title: "How campus events work in Help Me",
    description:
      "NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo calendars in one place. Always attributed, never invented. Here is how to read them.",
    h1: "How to read Fargo-Moorhead events without a fifth app",
    eyebrow: "Guide",
    lead: "A handful of campuses, a city calendar, and regional shows. Cached, labeled, linked, and not made up.",
    answer:
      "Help Me shows events from a fixed list of official sources: NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo. Home shows a short rail and Community shows the full calendar. Every event links to its source, and you cannot submit one from the app or this site.",
    takeaways: [
      "Six fixed sources.",
      "Home shows a short rail. Community shows everything.",
      "Tap through to the official page for times and tickets.",
      "To add an event, publish it on the official calendar.",
    ],
    priority: 0.6,
    keywords: ["campus events Fargo", "Fargo-Moorhead events calendar", "NDSU events", "events near me Fargo"],
    sections: [
      {
        heading: "Where the listings come from",
        body: [
          "NDSU publishes through MyNDSU. MSUM and Concordia publish campus calendars. M State contributes academic dates. West Fargo publishes a public community calendar. Ticketmaster listings cover regional shows within about 35 miles of Fargo.",
          "Help Me does not scrape random websites. The importer reads a fixed list of official sources. If a feed is empty or down, the app says so.",
        ],
      },
      {
        heading: "How to use them in the app",
        body: [
          "Home shows a short rail of upcoming events. Community is the full calendar. Filter by source, search, save, and open the official page. The source name stays visible on purpose.",
        ],
        bullets: [
          "Tap through for times, tickets, and cancellations on the official page.",
          "Save what you might actually attend.",
          "A listing is not a Help Me meetup. A study table after a lecture is a separate request.",
          "You cannot submit an event here. Publish it on the official calendar.",
        ],
      },
      {
        heading: "What an event is not",
        body: [
          "It is not a partnership announcement. Showing a calendar is not a contract with a university. It is not campus police, and it is not a ticket reseller. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["events", "community", "lists/fargo-events-guide", "lists/fargo-moorhead-campuses", "glossary/event-attribution", "questions/where-do-events-come-from"],
    faqs: [
      {
        q: "Are events from Help Me or from the schools?",
        a: "Events come from official sources. Help Me caches and attributes them. Always open the official link for the last word.",
      },
      {
        q: "Can I add a club meeting?",
        a: "Not from this site. Put it on the official campus calendar that Help Me already reads.",
      },
      {
        q: "What if a source is down?",
        a: "The app says so instead of filling the screen. Help Me does not invent events.",
      },
    ],
  }),
  page({
    slug: "guides/downtown-fargo-at-night",
    kind: "guide",
    title: "Downtown Fargo at night: where to meet, who to call",
    description:
      "Broadway after dark: public meeting places, a walk to the ramp, and when to call Fargo Police instead of asking a neighbor.",
    h1: "Downtown Fargo at night, without making the alley the meeting place",
    eyebrow: "Guide",
    lead: "Broadway is walkable, lit, and public, and that is the point. A good night out is not a reason to share a home pin.",
    answer:
      "After dark in downtown Fargo, meet on Broadway in a lobby, at a restaurant entrance, or at a ramp elevator that other people use, not in an alley or a quiet residential block. A walk to a downtown ramp is a fair ask. For danger or a fight, call 911, and use the non-emergency line for things that can wait.",
    takeaways: [
      "Name a public place on Broadway, not your apartment door.",
      "A walk to a downtown ramp is a fair ask.",
      "Fargo Police cover downtown. Danger is 911.",
      "Plan the last mile before the last song.",
    ],
    priority: 0.55,
    keywords: ["downtown Fargo at night", "Broadway Fargo night", "Fargo late night walk", "Fargo Police non-emergency"],
    sections: [
      {
        heading: "Use the street you can name",
        body: [
          "Meet on Broadway, in a lobby, on the Fargo Theatre sidewalk, at a restaurant entrance, or at a ramp elevator that other people use. The Island Park side after the bars thin out is quieter than it looks on a summer postcard. Quiet is not the same as a good place for a first meeting.",
        ],
        bullets: [
          "Label the public place in the request. Do not describe your apartment door.",
          "Exact location stays off until you agree after a yes.",
          "A walk to a downtown ramp is a fair ask. A walk into a dark residential block is not.",
          "If you are threatened, injured, or watching a fight, call 911.",
        ],
      },
      {
        heading: "Official downtown",
        body: [
          "Fargo Police serve downtown. Emergency is 911. Metro non-emergency often goes through the Red River Regional Dispatch Center at 701-451-7660. Confirm on the city's site for anything that can wait, and use online reporting where the city offers it for non-urgent incidents.",
        ],
      },
      {
        heading: "After the show",
        body: [
          "Ticketmaster listings in the app are for finding the night. MATBUS is not a late-night service, so check its hours. Help Me does not arrange transportation. Plan the last mile before the last song. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["lists/late-night-fargo", "lists/public-meeting-places-fargo", "guides/meet-in-public-fargo", "resources/fargo-police", "cities/fargo", "neighborhoods/downtown-fargo"],
    faqs: [
      {
        q: "Can I ask someone to walk me from a bar to my car?",
        a: "Yes, as a public, non-emergency ask. Meet in a lit doorway. Call 911 if you are in danger.",
      },
      {
        q: "Is downtown Moorhead the same page?",
        a: "No. Center Avenue is in Moorhead, Minnesota, with different police. 911 is the same, and so is the rule: public, lit, populated ground.",
      },
      {
        q: "What number do I call for something that is not an emergency?",
        a: "The police non-emergency line. Confirm the current number on the city's site.",
      },
    ],
  }),
  page({
    slug: "guides/west-fargo-community-help",
    kind: "guide",
    title: "West Fargo community help: a guide to its own city",
    description:
      "How Help Me works in West Fargo: neighbor help, the official city calendar, Sheyenne Street, and West Fargo Police. Not Fargo as an afterthought.",
    h1: "West Fargo help, as its own city",
    eyebrow: "Guide",
    lead: "West Fargo is not a Fargo neighborhood with extra cul-de-sacs. It has a police department, a city calendar, and lots that freeze the same night as 13th Avenue.",
    answer:
      "West Fargo is its own city in Cass County, North Dakota, with its own police department and city calendar. Help Me is a place to ask your West Fargo block for small favors, like a jump start in a lot on Veterans Boulevard. Meet in public, and use West Fargo Police for official help and 911 for emergencies.",
    takeaways: [
      "West Fargo has its own city, police, and calendar.",
      "The official West Fargo calendar appears in Help Me with its source.",
      "Meet at a store entrance, not a quiet cul-de-sac.",
      "911 works in West Fargo. Use West Fargo Police for non-emergencies.",
    ],
    priority: 0.6,
    keywords: ["West Fargo help", "West Fargo community", "Sheyenne Street", "West Fargo events", "West Fargo Police"],
    sections: [
      {
        heading: "Where the asks actually happen",
        body: [
          "Veterans Boulevard and 13th Avenue commercial lots. Sheyenne Street. Neighborhoods people name, like The Lights, Sheyenne Crossing, and Shadow Wood, which is exactly why you meet at a store entrance instead of a porch.",
        ],
        bullets: [
          "Jump starts: public lots, not a dark cul-de-sac.",
          "Directions: the city is new to a lot of residents, so a named store is a better pin than a subdivision name.",
          "Events: Help Me includes the official West Fargo community calendar and links back to westfargond.gov.",
        ],
      },
      {
        heading: "Official West Fargo",
        body: [
          "West Fargo Police are the official local department, and the city website lists current numbers and online reporting. Emergency is 911. Cass County Human Services covers county benefits, because West Fargo is in Cass County, North Dakota.",
        ],
      },
      {
        heading: "Same app, different city desk",
        body: [
          "Matching is local to the metro. There is no West Fargo-only roster of helpers. There is a West Fargo police department you should call when a neighbor is the wrong tool. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["cities/west-fargo", "resources/west-fargo-police", "neighborhoods/the-lights", "resources/cass-county-resources", "guides/how-to-ask-for-help", "neighborhoods/sheyenne-crossing"],
    faqs: [
      {
        q: "Does Help Me include West Fargo events?",
        a: "Yes. The official West Fargo community calendar is one of the fixed sources in the app.",
      },
      {
        q: "Is West Fargo on the Fargo police page?",
        a: "No. Use West Fargo Police for West Fargo and Fargo Police for Fargo. 911 works for both.",
      },
      {
        q: "Does West Fargo have its own Help Me app?",
        a: "No. It is one iPhone app, and West Fargo is a launch city with its own page.",
      },
    ],
  }),
  page({
    slug: "guides/how-to-jump-start-a-car",
    kind: "guide",
    title: "How to jump start a car in a Fargo winter, step by step",
    description:
      "The correct cable order, what not to touch, and what to do when a battery is frozen. A jump start guide for Fargo-Moorhead cold.",
    h1: "How to jump start a car without wrecking either one",
    eyebrow: "Guide",
    lead: "Two people, one set of cables, and a cold parking lot. This is the part that goes wrong when everyone is in a hurry.",
    answer:
      "Park the cars close without touching, both off. Connect red to the dead battery's positive, red to the good battery's positive, black to the good battery's negative, then black to bare metal on the dead car's engine block, not the dead negative terminal. Start the good car, wait a minute, then start the dead one. Remove in reverse order.",
    steps: [
      { name: "Position and shut off", text: "Park close enough for cables to reach without the vehicles touching. Both engines off, both in park, parking brakes on." },
      { name: "Red to dead positive", text: "Clamp one red clip to the positive terminal of the dead battery. Positive is marked with a plus and usually a red cover." },
      { name: "Red to good positive", text: "Clamp the other red clip to the positive terminal of the working battery." },
      { name: "Black to good negative", text: "Clamp one black clip to the negative terminal of the working battery." },
      { name: "Black to bare metal", text: "Clamp the last black clip to unpainted metal on the dead car's engine block or frame, away from the battery. This is the step people skip, and it keeps a spark away from battery gases." },
      { name: "Start and wait", text: "Start the working car and let it run a minute or two. Then try the dead car. If it does not turn over after a couple of tries, stop. Something else is wrong." },
      { name: "Disconnect in reverse", text: "Remove the clips in the exact reverse order, then let the revived car run or drive for a while before shutting it off." },
    ],
    takeaways: [
      "The last black clip goes to bare metal, not the dead negative terminal.",
      "Never let the clamps touch each other while anything is connected.",
      "A cracked, leaking, or frozen battery does not get jumped.",
      "If it will not start after two tries, it is a tow or a new battery.",
    ],
    priority: 0.7,
    keywords: ["how to jump start a car", "jump start Fargo winter", "jumper cable order", "dead battery cold", "jump start steps"],
    sections: [
      {
        heading: "When not to jump it at all",
        body: [
          "If the battery case is cracked, leaking, bulging, or visibly frozen, walk away and call a service. A frozen battery can rupture. If you smell rotten eggs, that is the battery venting, and it is not a smell to work through. Check the owner's manual for anything specific to your vehicle.",
          "If the car cranks strongly but will not catch, the battery is probably not the problem. Repeated attempts will just drain the good car.",
        ],
      },
      {
        heading: "Doing it at minus twenty",
        body: [
          "Cold makes everything slower and clumsier. Wear gloves you can still work in, keep the cable ends off the ground where they freeze stiff, and do not stand between the cars. If either of you is losing feeling in your hands, stop and call roadside assistance. A jump is not worth frostbite.",
        ],
      },
      {
        heading: "Asking for one on Help Me",
        body: [
          "Pick a public, plowed, lit lot. Say where you are in terms someone can find without a map: the store entrance, the lot, the row. A neighbor nearby can say yes, and the first one to say yes gets it. Nobody is obligated, and nobody gets paid. A jump pack in the trunk removes the need to ask at all. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["help/jump-start", "seasons/polar-vortex-cold-snap", "help/winter-car-help", "lists/parking-lots-where-cars-die-fargo", "questions/where-should-i-meet-a-helper", "glossary/jump-pack"],
    faqs: [
      {
        q: "Does the order really matter?",
        a: "Yes. The final black clip on bare metal keeps the spark away from gas venting off the battery. It is the whole reason for the sequence.",
      },
      {
        q: "How long should I drive afterward?",
        a: "Long enough for the alternator to put something back. A highway loop beats idling in a lot. If it dies again the next morning, the battery is finished.",
      },
      {
        q: "Can I jump a car with a frozen battery?",
        a: "No. Call a service. A frozen battery can rupture.",
      },
    ],
  }),
  page({
    slug: "guides/what-to-keep-in-your-car-in-winter",
    kind: "guide",
    title: "What to keep in your car in a Fargo-Moorhead winter",
    description:
      "The winter car kit that matters in North Dakota and Minnesota: jump pack, scraper, real gloves, a blanket, and what people forget until minus twenty.",
    h1: "The winter kit, ranked by how badly you will want it",
    eyebrow: "Guide",
    lead: "Everything on this list is boring until the one night it is the only thing between you and a very long wait.",
    answer:
      "A Fargo-Moorhead winter car kit needs a scraper with a brush, a portable jump pack, real gloves and a hat, a warm blanket, and a charged phone with roadside assistance saved. Add boots, a small shovel, and traction material if you drive outside the metro. Keep fuel above half, and tell someone your route on rural drives.",
    takeaways: [
      "A jump pack is the highest-value item in the trunk.",
      "A scraper with a brush lives in every car, all winter.",
      "A blanket and warm layers matter if you are ever stuck.",
      "Keep fuel above half. A full tank is also a warm tank.",
    ],
    priority: 0.6,
    keywords: ["winter car kit Fargo", "winter emergency kit car North Dakota", "what to keep in car winter", "jump pack winter"],
    sections: [
      {
        heading: "The core five",
        body: [
          "A scraper with a brush, because clearing a windshield with a credit card is a rite of passage nobody needs twice. A portable jump pack, which turns the most common winter failure into a two-minute fix. Real gloves and a hat, not the thin ones. A wool or emergency blanket. A phone charger that works in the car.",
        ],
        bullets: [
          "Scraper with a brush.",
          "Portable jump pack, charged in fall.",
          "Insulated gloves, a hat, and a spare pair of socks.",
          "A blanket and an extra layer.",
          "A car charger, and roadside assistance saved offline.",
        ],
      },
      {
        heading: "If you drive outside the metro",
        body: [
          "Add a small shovel, a bag of sand or cat litter for traction, a flashlight, water, and food that survives freezing. The stretches around this metro are flat, open, and unforgiving. The distance to the next building matters more than the temperature.",
        ],
      },
      {
        heading: "The habits that go with it",
        body: [
          "Keep the tank above half. Charge the jump pack in October, not January. Clear the exhaust pipe if you are stuck in deep snow before running the engine. And tell somebody your route before a winter drive out of town. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["seasons/winter-in-fargo-moorhead", "for-people-new-to-winter", "help/winter-car-help", "seasons/blizzard-day", "guides/winter-help-fargo", "glossary/jump-pack"],
    faqs: [
      {
        q: "Jump pack or cables?",
        a: "Both if you can. A pack works alone at three in the morning, and cables need a second car and a second person.",
      },
      {
        q: "Do I need a shovel in town?",
        a: "In the metro, usually a scraper is enough. If you park where plows build berms, a small shovel earns its space.",
      },
      {
        q: "What is the single most useful item?",
        a: "A charged jump pack. It makes a dead battery a ten-minute problem.",
      },
    ],
  }),
  page({
    slug: "guides/how-to-help-a-stranded-driver",
    kind: "guide",
    title: "How to help a stranded driver in Fargo-Moorhead",
    description:
      "What to do, and what not to do, when you see someone stuck. Lot versus highway, cold-weather risk, and when the right help is a phone call.",
    h1: "How to help someone who is stuck",
    eyebrow: "Guide",
    lead: "The instinct is good. The execution is where people get hurt, especially near a highway in winter.",
    answer:
      "In a parking lot or on a low-speed street, stopping to help is usually fine: park where you are visible and offer a jump or a push. On a highway shoulder, do not stop. Call 911 or the state patrol so trained responders with warning lights arrive. In deep cold, getting someone warm matters more than fixing the car.",
    takeaways: [
      "Lots and low-speed streets: helping directly is reasonable.",
      "Highway shoulders: call it in, do not stop.",
      "In deep cold, warmth beats mechanics every time.",
      "Never leave someone stranded without confirming help is coming.",
    ],
    priority: 0.55,
    keywords: ["help stranded driver Fargo", "stuck car help", "stranded motorist North Dakota", "I-94 stranded"],
    sections: [
      {
        heading: "The parking lot version",
        body: [
          "Pull in where you are visible, leave room, and ask before doing anything. Most of the time the answer is cables and ten minutes. If the person seems disoriented, very cold, or unwell, that is a 911 call, not a mechanical problem.",
        ],
      },
      {
        heading: "The highway version",
        body: [
          "Do not stop on the shoulder of I-94 or I-29. Adding a second stationary vehicle to a fast, possibly icy road is how a bad situation becomes a crash. Call it in with a mile marker and a direction. Dispatchers can send people with lights, training, and a legal right to be there.",
        ],
      },
      {
        heading: "Cold changes the priority",
        body: [
          "At subzero temperatures the car is not the emergency. The person is. If someone has been outside a while, getting them somewhere warm comes first, and the vehicle can wait for a tow. Do the part you are competent to do, and do not move an injured person. This site does not give legal advice. " + REVIEW_LINE,
          NOT_911,
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
        q: "Should I offer to drive them somewhere?",
        a: "That is a personal call, and not something Help Me arranges. Help Me does not arrange transportation, and no request should be for it.",
      },
      {
        q: "What if I cannot tell how serious it is?",
        a: "Call 911 and describe what you see. Dispatchers would rather get a call that turns out to be minor.",
      },
    ],
  }),
  page({
    slug: "guides/digging-out-after-a-snowstorm",
    kind: "guide",
    title: "Digging out after a Fargo-Moorhead snowstorm, safely",
    description:
      "Berms, buried cars, and shoveling injuries nobody plans for. How to dig out safely, and what a neighbor can reasonably help with.",
    h1: "Digging out without hurting yourself",
    eyebrow: "Guide",
    lead: "The plow is not being rude. It is doing its job, and its job leaves a wall behind your car.",
    answer:
      "After a snowstorm here, the hardest part is usually the plow berm at the end of a driveway or behind a parked car. Clear the exhaust pipe before running the engine, dig ahead of the tires rather than under the car, push snow rather than lifting it, and stop if your chest or back protests. Ask a neighbor for a second shovel.",
    steps: [
      { name: "Clear the exhaust first", text: "Before starting an engine, make sure the tailpipe is not packed with snow. Blocked exhaust means carbon monoxide inside the car." },
      { name: "Dig in front of and behind the tires", text: "Make a ramp for each drive wheel instead of trying to excavate the whole vehicle." },
      { name: "Push, do not lift", text: "Push snow to the side. Lifting wet snow is how people hurt their backs and their hearts." },
      { name: "Add traction", text: "Sand, cat litter, or a floor mat under the drive wheels beats spinning until you polish ice." },
      { name: "Rock gently", text: "Ease between forward and reverse. Flooring it digs deeper and can damage a transmission." },
    ],
    takeaways: [
      "Blocked exhaust is a carbon monoxide risk. Check it first.",
      "Shoveling is real cardiac exertion in cold air.",
      "Traction material beats more throttle every time.",
      "City snow emergency rules decide where you can park.",
    ],
    priority: 0.6,
    keywords: ["digging out snow Fargo", "stuck in snow Fargo", "plow berm", "shoveling safely", "car buried snow"],
    sections: [
      {
        heading: "Why the berm exists",
        body: [
          "Plows push snow to the side, which means every driveway and parked car on the route gets a wall. It is unavoidable, heavier and wetter than fresh snow, and where most of the work is.",
        ],
      },
      {
        heading: "Where a neighbor fits",
        body: [
          "Ten minutes and a second shovel is transformative on a berm, and pushing a car out of a shallow drift takes two people who are not in a hurry. This is one of the best uses of a small request in this metro. It is not a paid snow-removal service, and nobody is obligated to say yes.",
        ],
      },
      {
        heading: "Know when to stop",
        body: [
          "Any chest tightness, arm pain, dizziness, or shortness of breath means stop immediately, and call 911 if it does not pass. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["help/snow-help", "seasons/first-snow", "seasons/winter-in-fargo-moorhead", "cities/fargo", "for-seniors", "glossary/plow-berm"],
    faqs: [
      {
        q: "Who clears the sidewalk?",
        a: "Cities here place that responsibility on property owners, with their own timelines. Check your city's rules.",
      },
      {
        q: "When should I stop shoveling?",
        a: "At any chest tightness, arm pain, dizziness, or shortness of breath. Stop, and call 911 if it does not pass.",
      },
      {
        q: "Can a neighbor move my car?",
        a: "No. Moving your car is your responsibility. A neighbor can help dig it out.",
      },
    ],
  }),
  page({
    slug: "guides/how-to-use-matbus",
    kind: "guide",
    title: "How to use MATBUS in Fargo-Moorhead, even in winter",
    description:
      "Getting around Fargo, West Fargo, and Moorhead on MATBUS: how routes work, what to check before you go, and what winter waits are really like.",
    h1: "How to actually use MATBUS",
    eyebrow: "Guide",
    lead: "Transit here works well along the corridors it serves, and not at all where it does not. Knowing which is which is the whole skill.",
    answer:
      "MATBUS is the public transit system for Fargo, West Fargo, Moorhead, and the campus areas. Check the current route map, schedule, and fare on the official MATBUS source before you travel, since routes and hours change by season and campus service differs from city service. Plan extra time in winter and dress for waiting.",
    takeaways: [
      "MATBUS serves the metro, including campus corridors.",
      "Routes and hours change seasonally. Check the official source.",
      "Evening and weekend service is thinner than weekday service.",
      "Winter waits are the real constraint, not the trip.",
    ],
    priority: 0.55,
    keywords: ["how to use MATBUS", "MATBUS Fargo", "MATBUS winter", "MATBUS routes", "MATBUS schedule"],
    sections: [
      {
        heading: "Before your first trip",
        body: [
          "Look up the actual route instead of assuming a straight line, because transit routes wander for good reasons. Confirm the last departure of the evening before you plan a return trip. Know your fare situation in advance, including any campus arrangement your student ID may cover.",
        ],
      },
      {
        heading: "Winter waiting",
        body: [
          "Dress for standing still, not for walking. A ten-minute wait at fifteen below in a wind is a different activity than a ten-minute walk. Arrive early, stand somewhere sheltered if the stop offers it, and have a backup plan for the last trip of the night.",
        ],
        bullets: [
          "Check the schedule for the last trip on your route.",
          "Dress for the wait, not the trip.",
          "Have a backup plan for late nights.",
        ],
      },
      {
        heading: "Where a neighbor helps",
        body: [
          "Figuring out which stop and which side of the street. Directions to a building once you are off the bus. A hand with bags. Help Me does not arrange transportation, and a neighbor is not a driver. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["resources/matbus", "help/transit-help", "for-people-without-a-car", "help/directions", "cities/moorhead", "cities/fargo"],
    faqs: [
      {
        q: "Does MATBUS run late at night?",
        a: "Service ends earlier than many people expect. Check the official schedule for the last trip on your route before you rely on it.",
      },
      {
        q: "Is there campus service?",
        a: "There is service in the campus corridors, and campus routes can differ from city routes. Confirm with MATBUS and your campus.",
      },
      {
        q: "Where do I find the current schedule?",
        a: "On the official MATBUS site. Routes and hours change by season.",
      },
    ],
  }),
  page({
    slug: "guides/what-to-do-if-your-car-wont-start",
    kind: "guide",
    title: "What to do when your car will not start in Fargo",
    description:
      "How to tell a dead battery from something worse, what to try in order, and when to stop and call a tow in Fargo-Moorhead.",
    h1: "Your car will not start. Now what?",
    eyebrow: "Guide",
    lead: "Ninety seconds of diagnosis saves an hour of guessing, especially when it is cold enough that guessing has a cost.",
    answer:
      "Listen first. Silence or rapid clicking usually means a dead battery or a bad connection. Strong cranking without catching means the battery is fine and the problem is elsewhere, like fuel, ignition, or the cold itself. After two failed tries, stop and call for a jump or a tow. Do not keep cranking.",
    steps: [
      { name: "Turn everything off", text: "Headlights, heater, radio, and any chargers. Give whatever charge is left to the starter." },
      { name: "Listen to what it does", text: "Silence, clicking, or strong cranking each point somewhere different." },
      { name: "Check the obvious", text: "Is it in park? Is the steering wheel locked against the ignition? Are the battery terminals corroded or loose?" },
      { name: "Try twice, not ten times", text: "Repeated attempts drain the battery and can flood an engine. Two honest tries is enough information." },
      { name: "Call the right help", text: "A jump for a dead battery. A tow for anything else. 911 if you are stranded somewhere unsafe or dangerously cold." },
    ],
    takeaways: [
      "Silence or clicking points at the battery.",
      "Strong cranking without starting is not a battery problem.",
      "Cold makes marginal batteries fail all at once across the metro.",
      "Two tries, then get help. Do not keep cranking.",
    ],
    priority: 0.7,
    keywords: ["car won't start Fargo", "car will not start cold", "dead battery Fargo where to bring it", "car won't start Moorhead", "tow Fargo"],
    sections: [
      {
        heading: "Reading the symptoms",
        body: [
          "Dashboard lights that dim dramatically when you turn the key, or a rapid machine-gun clicking, mean a battery with nothing left. Complete silence can be a dead battery, a loose terminal, or a bad connection. A strong, healthy crank that never catches is a different family of problem, and no amount of jumping fixes it.",
        ],
      },
      {
        heading: "The Fargo winter version",
        body: [
          "Cold reduces available battery power exactly when the engine needs more of it. A battery that was marginal in October fails on the first genuinely cold morning, along with thousands of others across the metro. That is why every tow service in town has a queue that day, and why a neighbor with cables is worth so much.",
        ],
      },
      {
        heading: "Where to take it",
        body: [
          "If a jump gets you going, drive for a while and get the battery tested at a shop or an auto parts store. If it will not start after a jump, it needs a tow to a shop. Help Me can find you a neighbor with cables in a public lot, but it cannot diagnose a car or pull one to a shop. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["guides/how-to-jump-start-a-car", "help/jump-start", "seasons/polar-vortex-cold-snap", "lists/parking-lots-where-cars-die-fargo", "help/winter-car-help", "glossary/block-heater"],
    faqs: [
      {
        q: "Can I ask for a jump on Help Me?",
        a: "Yes. It is one of the most common requests. Meet in a public, plowed lot and name your location precisely.",
      },
      {
        q: "How do I know the battery is just old?",
        a: "Three to five years is the usual life here, and cold shortens it. If it needed a jump last winter too, replace it before this one.",
      },
      {
        q: "Where do I bring a car that will not start?",
        a: "To a shop, by tow if a jump does not work. Get the battery tested if a jump does.",
      },
    ],
  }),
  page({
    slug: "guides/apartment-move-out-checklist-fargo",
    kind: "guide",
    title: "Apartment move-out checklist for Fargo-Moorhead",
    description:
      "May move-out in the metro: notice, cleaning, deposits, donating instead of dumpsters, and the two-states problem for tenant rules.",
    h1: "Moving out without losing your deposit",
    eyebrow: "Guide",
    lead: "Everyone in this metro moves the same week, which means every truck, elevator, and dumpster is spoken for.",
    answer:
      "Give notice in writing on your lease's timeline, photograph the unit before and after cleaning, and confirm the move-out and key return process in writing. North Dakota and Minnesota tenant rules differ, so use the rules for the state you rent in: Fargo and West Fargo are North Dakota, and Moorhead and Dilworth are Minnesota.",
    steps: [
      { name: "Give written notice", text: "Follow the notice period in your lease and send it in a form you can prove you sent." },
      { name: "Photograph everything", text: "Before cleaning and after, with timestamps. This is the whole deposit argument if there is one." },
      { name: "Book the logistics early", text: "Truck, elevator reservation, and loading zone. In May these run out before the boxes do." },
      { name: "Donate what is usable", text: "Working furniture, kitchenware, and clothing have destinations here. Check what an organization accepts before loading." },
      { name: "Confirm keys and forwarding address", text: "Get the key return and deposit-return process in writing, with an address to send it to." },
    ],
    takeaways: [
      "Photos before and after are the deposit's best defense.",
      "ND and MN tenant rules differ across the river.",
      "May capacity is the constraint. Book everything early.",
      "Usable items belong at donation programs, not the dumpster.",
    ],
    priority: 0.6,
    keywords: ["move out checklist Fargo", "apartment move out Moorhead", "deposit return Fargo", "May move out Fargo", "moving Fargo-Moorhead"],
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
          "A hand on the heavy end of something, ten minutes at the truck, a second person for a stairwell. Small and finishable. A full move is movers and friends you can feed, not a neighbor with an app. Hauling and disposal are paid services, and Help Me has no payments.",
        ],
        bullets: [
          "Two more hands for a heavy item.",
          "A second person for a stairwell.",
          "Book movers for a full move.",
        ],
      },
      {
        heading: "If there is a dispute",
        body: [
          "Legal aid and tenant-resource organizations in your state can help with a withheld deposit. A neighbor cannot answer a legal question. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["seasons/move-out-week", "for-renters", "help/heavy-lifting", "help/move-in", "resources/clay-county-resources", "resources/cass-county-resources"],
    faqs: [
      {
        q: "Can I get help hauling things away?",
        a: "Hauling and disposal are paid services. Help Me has no payments, and helpers are not contractors.",
      },
      {
        q: "Who do I ask about a withheld deposit?",
        a: "Legal aid and tenant-resource organizations in your state. A neighbor cannot answer a legal question.",
      },
      {
        q: "When should I book a truck?",
        a: "As early as you can. In May, trucks and elevators sell out before the boxes are packed.",
      },
    ],
  }),
];
