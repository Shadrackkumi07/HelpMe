import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";
import { LIST_PAGES_MORE } from "./lists-more";

const REVIEW_LINE = "Helpers can apply to be reviewed by our team. Help Me does not run background checks.";
const REPORT_LINE = "You can report or block any member at any time.";
const NOT_911 = "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.";

/** Local lists. Real places, real streets, and the difference between a favor and a 911 call. */
const LIST_PAGES_FIRST: SeoPage[] = [
  page({
    slug: "lists",
    kind: "hub",
    title: "Fargo-Moorhead lists: places, numbers, and winter",
    description:
      "Local lists for Fargo-Moorhead: public meeting places, emergency numbers, winter lots, study spots, and the everyday favors neighbors actually ask for.",
    h1: "Lists for a metro that actually exists",
    eyebrow: "Lists",
    lead: "Not a national roundup with Fargo dropped in. Specific streets, campuses, lots, and the difference between a night out and a 911 call.",
    answer:
      "These lists cover Fargo, West Fargo, and Moorhead specifically: public places to meet, the phone numbers worth saving, the lots where cars die in January, study spots, and the everyday favors people ask for. Help Me is a place to ask your block for the small stuff, and official calendars and services stay with their sources.",
    takeaways: [
      "Public meeting places and study spots, named.",
      "The emergency and help numbers worth saving.",
      "Winter lots, driving mistakes, and late-night planning.",
      "Official calendars and services stay with their sources.",
    ],
    priority: 0.8,
    keywords: ["Fargo lists", "Fargo-Moorhead guide", "public meeting places Fargo", "Fargo winter lists", "Fargo help numbers"],
    sections: [
      {
        heading: "How to read these",
        body: [
          "Each list is a handful of real items, not a keyword pile. Help Me shows up only where a neighbor honestly fits: a jump in a lot, a walk to a ramp, a study table. Official events still belong to NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo.",
        ],
        bullets: [
          "Places: where to go, and where to meet in public.",
          "Numbers: what to call, and when.",
          "Winter: lots, driving mistakes, and late nights.",
          "Everyday help: what neighbors actually ask for.",
        ],
      },
      {
        heading: "What lists are not",
        body: [
          "They are not official city lists, and you cannot request help from them. They are orientation. Requests happen in the iPhone app. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["guides", "resources", "explore", "events", "cities", "for-newcomers"],
    faqs: [
      {
        q: "Are these official city lists?",
        a: "No. They are local orientation pages. Official calendars and services live on campus, city, and 211 sites, and on the Resources pages.",
      },
      {
        q: "Can I request help from a list?",
        a: "No. Lists explain. Requests happen in the iPhone app.",
      },
      {
        q: "Who keeps them current?",
        a: "Our team reviews them. If a number or an address has changed, email support@helpme.fyi.",
      },
    ],
  }),
  page({
    slug: "lists/things-to-do-in-fargo",
    kind: "list",
    title: "Things to do in Fargo-Moorhead you will use in February",
    description:
      "Broadway, the Fargo Theatre, West Acres, Center Avenue, The Lights, and the parks: a local list for Fargo, West Fargo, and Moorhead.",
    h1: "Things to do in Fargo-Moorhead that you will still recognize in February",
    eyebrow: "Fargo-Moorhead",
    lead: "This is a walking city in spots, a driving city in winter, and a campus city whether you enrolled or not.",
    answer:
      "Good things to do in Fargo-Moorhead include Broadway and the Fargo Theatre downtown, West Acres in winter, an NDSU or MSUM event, Center Avenue in Moorhead, The Lights in West Fargo, the library branches, and the river parks in daylight. All of them are public places that are also good, easy-to-name spots to meet a neighbor.",
    listItems: [
      { name: "Broadway, on purpose", description: "Downtown's walkable strip: the Fargo Theatre marquee, restaurants, and a sidewalk you can name in a chat. Meet here, not in the alley behind it.", href: "/neighborhoods/downtown-fargo" },
      { name: "The Fargo Theatre and downtown stages", description: "Movies and live rooms. Ticketmaster Fargo listings in Help Me cover regional shows, and the official link has the last word.", href: "/events" },
      { name: "West Acres", description: "The big mall on the west side, indoor walking in January, and a famous place for a dead battery. Meet at a vestibule, not a far row.", href: "/neighborhoods/west-acres" },
      { name: "NDSU without being a student", description: "A Bison Saturday, the Union, a lecture open to the public. Official events come from MyNDSU.", href: "/campuses/ndsu" },
      { name: "Center Avenue, Moorhead", description: "The Minnesota-side downtown, a short drive from Broadway and easy to name as a meeting place.", href: "/neighborhoods/downtown-moorhead" },
      { name: "The Lights and Sheyenne Street, West Fargo", description: "A plaza, restaurants, and a city calendar of its own. A good public meeting place on the west side.", href: "/neighborhoods/the-lights" },
      { name: "Island Park and the river, in daylight", description: "Beautiful parks by day. After dark, pick somewhere staffed. The river is the state line.", href: "/guides/meet-in-public-fargo" },
      { name: "The library branches", description: "Main downtown, Carlson in south Fargo, and Northport on north Broadway. Heat, tables, and hours on the city site.", href: "/resources/fargo-public-library" },
    ],
    takeaways: [
      "Almost every item here is a good public meeting place.",
      "Official calendars have the last word on events.",
      "A parking lot in January is not a destination.",
      "Help Me is not an emergency service.",
    ],
    priority: 0.7,
    keywords: ["things to do in Fargo", "things to do in Moorhead", "things to do in West Fargo", "Fargo attractions", "Fargo winter things to do", "free things to do Fargo"],
    geo: { name: "Fargo–Moorhead", type: "Region", lat: 46.8772, lng: -96.7898 },
    sections: [
      {
        heading: "Why this list lives on a help site",
        body: [
          "Because every good place to go is also a good place to meet. A neighbor who is asked to meet in a public, named, busy place is more likely to say yes, and you are more comfortable asking. Help Me is a place to ask your block for the small stuff, and these are the places the block already uses.",
          "For official events, use the calendars: NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo. They are in the app with their sources attached.",
        ],
      },
      {
        heading: "In winter",
        body: [
          "Indoor options matter from November to March. The library branches, West Acres, campus unions, and the Fargo Theatre are warm, public, and easy to name. Dress for the wait when you are outside, and do not stand in the wind waiting on an app. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["lists/late-night-fargo", "lists/fargo-events-guide", "cities/fargo", "guides/new-to-fargo", "lists/public-meeting-places-fargo", "cities/west-fargo"],
    faqs: [
      {
        q: "Is this a complete tourism list?",
        a: "No. It is a local orientation list. City and campus calendars are the living version.",
      },
      {
        q: "Can I ask a neighbor to show me around?",
        a: "You can ask for directions or a public meet. Help Me is not a paid tour guide.",
      },
      {
        q: "Where do I find current events?",
        a: "In Community in the app, or on the official calendars each event links to.",
      },
    ],
  }),
  page({
    slug: "lists/public-meeting-places-fargo",
    kind: "list",
    title: "Public meeting places in Fargo-Moorhead you can name",
    description:
      "Where to meet a neighbor in public: campus unions, Fargo Public Library, West Acres, grocery entrances, Broadway, and Center Avenue. No home pins.",
    h1: "Public meeting places you can actually name in a chat",
    eyebrow: "Fargo-Moorhead",
    lead: "If you cannot say the place out loud to a friend, do not put it in a request.",
    answer:
      "Good public meeting places in Fargo-Moorhead are the NDSU Memorial Union and the MSUM and Concordia campus centers, Fargo Public Library branches during open hours, West Acres, grocery entrances, Broadway lobbies, and Center Avenue in Moorhead. Pick one that is busy at the hour you are meeting, and keep exact location off.",
    listItems: [
      { name: "NDSU Memorial Union", description: "Indoor, public, and named. The default for north Fargo campus favors. Not a residence hall lounge.", href: "/campuses/ndsu" },
      { name: "MSUM and Concordia campus centers", description: "The unions and Knutson. Same rule: indoor public first, then walk to the lot together if the car is the job.", href: "/campuses/msum" },
      { name: "Fargo Public Library, Main", description: "101 4th St. N. Staffed, downtown, and only during open hours.", href: "/resources/fargo-public-library" },
      { name: "Carlson and Northport libraries", description: "The south Fargo and north Broadway branches. Same system, same open-hours rule.", href: "/resources/fargo-public-library" },
      { name: "West Acres vestibules and food court", description: "The mall is a winter living room. Meet inside, and jump the car in a busy row, not the last lamp after closing.", href: "/neighborhoods/west-acres" },
      { name: "Grocery entrances", description: "Hornbacher's, Cash Wise, and the other lit vestibules people already know. Cameras, other shoppers, a door that opens from inside.", href: "/guides/meet-in-public-fargo" },
      { name: "Broadway lobbies and sidewalks", description: "Downtown Fargo's named street. After midnight, still prefer a staffed doorway over a quiet park edge.", href: "/neighborhoods/downtown-fargo" },
      { name: "Center Avenue, Moorhead", description: "The Minnesota-side equivalent. Different police, same public-place logic.", href: "/lists/public-meeting-places-moorhead" },
    ],
    takeaways: [
      "Pick a place that is busy at the hour you are meeting.",
      "Name the place. Keep exact location off.",
      "A doorstep is never the meeting place.",
      "Leave if someone pushes you to go somewhere private.",
    ],
    priority: 0.75,
    keywords: ["public meeting places Fargo", "meet in public Fargo", "safe meeting place Fargo", "where to meet Fargo"],
    sections: [
      {
        heading: "Pick for the hour",
        body: [
          "A spot that is busy at noon can be empty at eleven. Campus buildings lock, libraries close, and retail lots empty. Choose the place that is populated when you are actually meeting, not the one that felt right when you typed the request.",
        ],
      },
      {
        heading: "What to do if the plan changes",
        body: [
          "If someone asks to move a public plan to a private place, treat that as information. Leave, and report. " + REPORT_LINE + " " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["guides/meet-in-public-fargo", "guides/meeting-someone-new-in-fargo", "lists/study-spots-fargo", "lists/parking-lots-where-cars-die-fargo", "resources/fargo-public-library", "guides/location-privacy"],
    faqs: [
      {
        q: "What if the helper wants to meet at my apartment?",
        a: "Say no. Public place. If they push, leave and report.",
      },
      {
        q: "Is a park public enough?",
        a: "In daylight with other people, sometimes. After dark, choose an indoor public place or a staffed lot.",
      },
      {
        q: "Can I change the place after we chat?",
        a: "Yes, to another public place. Agree on it in the chat before you go.",
      },
    ],
  }),
  page({
    slug: "lists/public-meeting-places-moorhead",
    kind: "list",
    title: "Public meeting places in Moorhead, Minnesota",
    description:
      "Lit, public, easy-to-name places to meet in Moorhead: campus buildings, the library, busy entrances, and the police department lobby.",
    h1: "Where to meet someone in Moorhead",
    eyebrow: "Moorhead, MN",
    lead: "The Minnesota side has plenty of good options, and picking one in advance takes ten seconds.",
    answer:
      "Good Moorhead meeting places are public, lit, and easy to describe: the MSUM Comstock Memorial Union, Concordia's Knutson Campus Center, the Moorhead Public Library during open hours, grocery and big-box entrances on the main corridors, and the Moorhead Police Department lobby. Choose one that is busy at the hour you are meeting.",
    listItems: [
      { name: "Comstock Memorial Union, MSUM", description: "A central campus building with people around during open hours. A precise, findable landmark for anyone meeting near MSUM.", href: "/campuses/msum" },
      { name: "Knutson Campus Center, Concordia", description: "The natural meeting point on the Concordia campus, easy to name without ambiguity.", href: "/campuses/concordia" },
      { name: "Moorhead Public Library", description: "Public, staffed, and warm during open hours. Check current hours before planning an evening meeting.", href: "/resources/clay-county-resources" },
      { name: "Grocery and big-box entrances", description: "Entrances along Moorhead's main retail corridors are lit, busy, and unmistakable on a map.", href: "/guides/meet-in-public-fargo" },
      { name: "Moorhead Police Department lobby", description: "A public building nobody will think it strange to meet outside. It costs nothing to choose it.", href: "/resources/moorhead-police" },
      { name: "Downtown Moorhead near the bridges", description: "Busy in the daytime and close to the Fargo side if one of you is crossing the river.", href: "/neighborhoods/downtown-moorhead" },
    ],
    takeaways: [
      "Choose a place that is populated when you meet.",
      "A heated entrance is better than an outdoor spot in January.",
      "A police department lobby is a public building and a fair choice.",
      "Public by default. Keep exact location off.",
    ],
    priority: 0.6,
    keywords: ["public meeting places Moorhead", "meet in public Moorhead", "where to meet Moorhead", "Moorhead MN meeting spots"],
    geo: { name: "Moorhead", type: "City", city: "Moorhead", state: "MN", county: "Clay County", lat: 46.8738, lng: -96.7676 },
    sections: [
      {
        heading: "Pick for the hour",
        body: [
          "A spot that is busy at noon can be empty at eleven. Campus buildings lock, libraries close, and retail lots empty. Choose the place that is populated at the time you are actually meeting, not the one that felt right when you typed the request.",
        ],
      },
      {
        heading: "Winter changes the answer",
        body: [
          "At twenty below, an outdoor spot is a bad plan for both of you. Somewhere with a heated entry keeps the meeting short and easy, and the logic is the same: other people around, lights on, and a way to leave. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["lists/public-meeting-places-fargo", "questions/where-should-i-meet-a-helper", "cities/moorhead", "campuses/msum", "ground-rules"],
    faqs: [
      {
        q: "Is meeting at a police station overkill?",
        a: "No. It is a public building, it is free, and nobody there will find it strange.",
      },
      {
        q: "Can I meet at my apartment?",
        a: "Public by default is the standard here. A doorstep is never the place to meet.",
      },
      {
        q: "Do Fargo spots work for Moorhead?",
        a: "Often, but you are in a different state with different police. Name the Moorhead place so it is clear where you are.",
      },
    ],
  }),
  page({
    slug: "lists/fargo-moorhead-campuses",
    kind: "list",
    title: "Campuses in Fargo-Moorhead: NDSU, MSUM, Concordia, M State",
    description:
      "NDSU, MSUM, Concordia, and M State Moorhead: the campuses in the metro, their official calendars, and the public safety offices that are not this app.",
    h1: "The campuses this metro actually has",
    eyebrow: "Fargo-Moorhead",
    lead: "Four names in the event importer, each a real campus with its own public safety office and its own calendar.",
    answer:
      "The campuses in Fargo-Moorhead are North Dakota State University in Fargo, Minnesota State University Moorhead and Concordia College in Moorhead, and M State's Moorhead campus. Their official calendars appear in Help Me with the source attached, and each has its own public safety office, which Help Me does not replace.",
    listItems: [
      { name: "North Dakota State University, Fargo, ND", description: "The large research campus in north Fargo. MyNDSU events, University Police at 701-231-8998, Student Health at Wallman. Cass County.", href: "/campuses/ndsu" },
      { name: "Minnesota State University Moorhead, Moorhead, MN", description: "The public university on the Minnesota side. Public Safety at 218-477-2449, including escorts and campus jumps. Clay County.", href: "/campuses/msum" },
      { name: "Concordia College, Moorhead, MN", description: "A private liberal arts campus minutes from MSUM. Public Safety and SAFEWalk at 218-299-3123, with its own calendar.", href: "/campuses/concordia" },
      { name: "M State, Moorhead campus", description: "Minnesota State Community and Technical College. Academic dates appear in the app. Check the campus directory for current security contacts.", href: "/campuses/m-state" },
      { name: "What Help Me includes, said once", description: "NDSU, MSUM, Concordia, M State, plus West Fargo's city calendar and Ticketmaster Fargo. Always attributed, never invented.", href: "/events" },
    ],
    takeaways: [
      "Four campuses, four sources, always attributed.",
      "Each has its own public safety office. Confirm numbers on the official site.",
      "Help Me is not affiliated with any campus.",
      "Help Me is not an emergency service.",
    ],
    priority: 0.65,
    keywords: ["Fargo Moorhead campuses", "colleges in Fargo", "colleges in Moorhead", "NDSU MSUM Concordia M State"],
    sections: [
      {
        heading: "Why campuses are part of the neighborhood",
        body: [
          "A campus is a place with parking lots that freeze, doors that are hard to find, and people who are new every August. That makes it a place where a small favor is often welcome. It is also a place with an official public safety office, which is the right call for anything urgent.",
        ],
      },
      {
        heading: "Showing a calendar is not affiliation",
        body: [
          "Help Me includes official calendars and links back to them. That is attribution, not endorsement or partnership. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["guides/campus-events-fargo-moorhead", "events", "campuses", "guides/new-to-ndsu", "guides/new-to-msum", "guides/new-to-concordia"],
    faqs: [
      {
        q: "Is there a Help Me campus edition?",
        a: "No. It is one app. Campus pages explain each school. Helping needs a current review by our team.",
      },
      {
        q: "Which campuses' events are in the app?",
        a: "NDSU, MSUM, Concordia, and M State, plus West Fargo and Ticketmaster Fargo. Each links to its source.",
      },
      {
        q: "Who do I call for an emergency on campus?",
        a: "Call 911 or the campus public safety office. Confirm the number on the campus site.",
      },
    ],
  }),
  page({
    slug: "lists/ways-neighbors-help-fargo",
    kind: "list",
    title: "Ways neighbors help each other in Fargo-Moorhead",
    description:
      "The everyday help neighbors actually give in Fargo: jump starts, a walk to the car, directions, study tables, tech help, a heavy box. Not paid gigs, not 911.",
    h1: "Ways neighbors actually help here",
    eyebrow: "Fargo-Moorhead",
    lead: "The group thread will argue. The person with cables will not, if they can see the ask.",
    answer:
      "Neighbors in Fargo-Moorhead help each other with small, public favors: a jump start in a lot, a walk to the car, directions, a study table, a tech fix, a short carry of something heavy, or finding something lost. They refuse emergencies, paid work, and anything that wants to leave a public place for a private one.",
    listItems: [
      { name: "Jump starts", description: "The classic. A public lot, cables if you have them. Not a mechanic and not a tow.", href: "/help/jump-start" },
      { name: "A walk to the car", description: "Library to ramp, Broadway to a downtown garage. Official campus escorts exist too, so pick the tool that matches how official you need it.", href: "/help/walk-to-car" },
      { name: "Directions", description: "Lecture halls, the Union, a visitor who cannot find the Fargo Theatre. A sentence, not a tour.", href: "/help/directions" },
      { name: "Study tables", description: "A public library or union table. You still do your own homework. A helper is not a tutor.", href: "/help/study-buddy" },
      { name: "Printer and Wi-Fi grief", description: "A small setting fix, as a neighbor favor. Official campus IT still owns accounts and locked labs.", href: "/help/tech-support" },
      { name: "Heavy boxes, briefly", description: "A public door and a short carry. Not a moving company, and not a reason to invite anyone onto a residential floor.", href: "/help/heavy-lifting" },
      { name: "Lost and found, modestly", description: "A labeled public place to hand something over. Valuables and IDs may belong with the police instead.", href: "/help/lost-and-found" },
    ],
    takeaways: [
      "Small, public, and over in minutes.",
      "Neighbors decline emergencies, paid work, and private-place requests.",
      "Official services own anything bigger.",
      "Help Me is not an emergency service.",
    ],
    priority: 0.6,
    keywords: ["neighbors helping neighbors Fargo", "ways to help a neighbor", "everyday help Fargo", "small favors Fargo"],
    sections: [
      {
        heading: "What neighbors should refuse",
        body: [
          "Emergencies, overnight hosting, paid labor, and anything that wants to leave a public place for a private one without a good reason. Saying no is always allowed, and report and block exist for anything that does not feel right.",
        ],
      },
      {
        heading: "Who is a neighbor here",
        body: [
          "Anyone who applied and was reviewed by our team, who goes online when they can, and who treats a five-minute favor as a five-minute favor. They are not employees and not on duty. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["guides/how-to-ask-for-help", "guides/how-to-become-a-helper", "for-neighbors", "for-helpers", "how-it-works", "lists/free-community-help-fargo"],
    faqs: [
      {
        q: "Can I pay a helper?",
        a: "No. Help Me is not a paid marketplace. If you need paid labor, use a marketplace that is built for it.",
      },
      {
        q: "Are helpers employees?",
        a: "No. They are neighbors who applied and were reviewed by our team. They are not on duty.",
      },
      {
        q: "What counts as a small favor?",
        a: "Something a neighbor can finish in under five minutes, in public, without a license or a truck.",
      },
    ],
  }),
  page({
    slug: "lists/late-night-fargo",
    kind: "list",
    title: "Late night in Fargo-Moorhead: plan the last mile",
    description:
      "Broadway, ramps, campus libraries, bus hours, walks to the car, and when to call police instead of a neighbor. Plan the last mile before the last song.",
    h1: "Late night in Fargo, with the last bus in mind",
    eyebrow: "Fargo-Moorhead",
    lead: "The lights on Broadway are not a 24-hour city. Plan the last mile before the last song.",
    answer:
      "Late at night in Fargo-Moorhead, meet in a lit doorway on Broadway, use a downtown ramp lobby for a walk to the car, and remember that campus libraries close, mall hours are mall hours, and MATBUS is not a night service. A neighbor is not a driver, and for danger or a fight, call 911.",
    listItems: [
      { name: "Broadway is the strip", description: "Named, walkable, and public. Meet at a doorway. Fargo Police if a fight starts, and 911 if someone is hurt.", href: "/guides/downtown-fargo-at-night" },
      { name: "Downtown ramps", description: "A fair walk-to-the-car ask. Lobby first, upper deck second. A neighbor is not a valet.", href: "/help/walk-to-car" },
      { name: "Campus libraries until they close", description: "NDSU, MSUM, and Concordia. Then they close. Do not wait in a locked vestibule hoping someone is still online.", href: "/lists/study-spots-fargo" },
      { name: "West Acres is not open at midnight", description: "Mall hours are mall hours. A dark far lot after closing is a worse place to meet than a grocery vestibule that is still open.", href: "/neighborhoods/west-acres" },
      { name: "MATBUS is not a night owl by default", description: "Check the published schedule and the last trip of the night. Help Me does not arrange transportation.", href: "/guides/how-to-use-matbus" },
      { name: "Official escorts on campus", description: "NDSU, MSUM, and Concordia each have a public safety number for an official walk. Use them.", href: "/campuses" },
      { name: "The hour it stops being a night out", description: "Threatened, injured, or too impaired to cope: call 911. A chat with a neighbor is too slow, and the wrong tool.", href: "/not-911" },
    ],
    takeaways: [
      "Plan the last mile before the night starts.",
      "Libraries and malls close. Do not count on them.",
      "There is no guaranteed late-night coverage on Help Me.",
      "For danger, call 911.",
    ],
    priority: 0.55,
    keywords: ["late night Fargo", "Fargo after midnight", "Broadway Fargo late night", "walk home Fargo late"],
    sections: [
      {
        heading: "Help Me and the late hours",
        body: [
          "Helpers go online when they can. Late at night fewer people are awake, and there is no promised coverage at two in the morning. If you are planning a night out, plan the way home too, with a friend, a bus, or an official service.",
        ],
      },
      {
        heading: "Staying comfortable",
        body: [
          "Meet in lit, public doorways. Keep exact location off. Leave if anything feels wrong. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["guides/downtown-fargo-at-night", "lists/public-meeting-places-fargo", "resources/fargo-police", "resources/matbus", "lists/things-to-do-in-fargo", "guides/meeting-someone-new-in-fargo"],
    faqs: [
      {
        q: "Can I ask someone to walk me from a bar?",
        a: "Yes, as a public, non-emergency ask. Meet in a lit doorway. Call 911 if you are in danger.",
      },
      {
        q: "Does Help Me run late-night shifts?",
        a: "No. Helpers go online when they can. There is no guaranteed overnight coverage.",
      },
      {
        q: "What time does MATBUS stop?",
        a: "It varies by route and day. Check the published schedule for the last trip.",
      },
    ],
  }),
  page({
    slug: "lists/study-spots-fargo",
    kind: "list",
    title: "Study spots in Fargo-Moorhead: libraries, unions, coffee",
    description:
      "Study spots around Fargo-Moorhead: campus libraries, Memorial Union, Fargo Public Library branches, and downtown coffee. Public tables only.",
    h1: "Study spots you can name without sharing a dorm pin",
    eyebrow: "Fargo-Moorhead",
    lead: "A table with other people in the room. That is the list, and it is also the meeting place.",
    answer:
      "Good study spots in Fargo-Moorhead are the NDSU libraries and Memorial Union, the MSUM and Concordia libraries, Fargo Public Library branches, and downtown coffee shops during staffed hours. All are public tables with other people around, which makes them good places to meet a study partner too.",
    listItems: [
      { name: "NDSU libraries", description: "The main campus study machine. Hours follow NDSU. After close, you are done or you move.", href: "/campuses/ndsu" },
      { name: "Memorial Union", description: "Louder than a silent floor and still public. A good label for a study table.", href: "/campuses/ndsu" },
      { name: "MSUM library", description: "Moorhead campus study ground, on the Minnesota side. Public Safety is the number if the night feels off.", href: "/campuses/msum" },
      { name: "Concordia library and campus tables", description: "A smaller campus, still staffed public space during hours. Knutson is a good backup label.", href: "/campuses/concordia" },
      { name: "Fargo Public Library, Main", description: "Downtown at 101 4th St. N. City hours apply, and it is not a 24-hour reading room.", href: "/resources/fargo-public-library" },
      { name: "Carlson Library", description: "The south Fargo branch. Same system, good if you live south and the downtown lot is a project.", href: "/resources/fargo-public-library" },
      { name: "Northport Library", description: "North Broadway, near NDSU's world without being on campus.", href: "/resources/fargo-public-library" },
      { name: "Downtown coffee, during staffed hours", description: "Broadway tables. Buy something, and do not turn a cafe into a free office after they want to close.", href: "/neighborhoods/downtown-fargo" },
    ],
    takeaways: [
      "Pick a public table with other people around.",
      "Libraries close, so check the hours.",
      "A study partner is a neighbor at a table, not a tutor.",
      "Meet in public, never a private apartment.",
    ],
    priority: 0.55,
    keywords: ["study spots Fargo", "study spots Moorhead", "Fargo library hours", "study partner Fargo", "NDSU study spots"],
    sections: [
      {
        heading: "Using Help Me for a study table",
        body: [
          "Post study buddy, add the subject in a sentence if you want, and name the public place from this list. A neighbor can say yes, and a private chat opens between the two of you. It is a person at a table, not paid tutoring.",
        ],
      },
      {
        heading: "Meet in public",
        body: [
          "A library floor or a union is a complete answer to where. Apartments fail the test. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["lists/public-meeting-places-fargo", "resources/fargo-public-library", "guides/meet-in-public-fargo", "help/study-buddy", "campuses/ndsu", "campuses/msum"],
    faqs: [
      {
        q: "Can I study at someone's apartment through Help Me?",
        a: "Meet in public. Apartments fail the meeting-place test.",
      },
      {
        q: "Is a study helper a tutor?",
        a: "No. It is a neighbor at a table. For instruction, use your college's academic resources.",
      },
      {
        q: "Which library is open latest?",
        a: "Hours change by term and by branch. Check the official site for the one you plan to use.",
      },
    ],
  }),
];

export const LIST_PAGES: SeoPage[] = [...LIST_PAGES_FIRST, ...LIST_PAGES_MORE];
