import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const CITY_PAGES: SeoPage[] = [
  page({
    slug: "cities",
    kind: "hub",
    title: "Fargo, West Fargo, Moorhead: where Help Me works",
    description:
      "Help Me is launching in Fargo, West Fargo, and Moorhead first, one zone at a time. Start here to find your city and the small stuff your block can help with.",
    h1: "Fargo, West Fargo, Moorhead, and the towns around them",
    eyebrow: "Where it starts",
    lead: "The Fargo–Moorhead metro is one job market, two states, and a river that most people cross without thinking about it. Help Me starts here, one zone at a time.",
    answer:
      "Help Me is launching in Fargo and West Fargo, North Dakota, and Moorhead, Minnesota, first, one zone at a time. It is a place to ask your block for the small stuff: a phone charger, directions, a jump start in daylight. The towns around the metro are covered on one page, and each city has its own.",
    takeaways: [
      "Fargo, West Fargo, and Moorhead are the launch cities.",
      "Dilworth and Horace sit inside the same metro and have their own pages.",
      "Nearby towns are grouped on one page instead of a page each.",
      "Help Me opens zone by zone, so ask in the app to see what is open near you.",
    ],
    priority: 0.9,
    keywords: ["Fargo", "Moorhead", "West Fargo", "Fargo-Moorhead", "Cass County", "Clay County", "Help Me Fargo"],
    geo: { name: "Fargo–Moorhead", type: "Region", lat: 46.8772, lng: -96.7898 },
    sections: [
      {
        heading: "The metro, said accurately",
        body: [
          "Fargo and West Fargo sit in Cass County, North Dakota. Moorhead and Dilworth sit in Clay County, Minnesota. The Red River is the state line, and people cross it for class, work, groceries, and jumper cables without a second thought. They only notice it when they need a county service.",
          "Help Me is built for that whole stretch. It launches one zone at a time, so the app tells you whether your area is open yet. Nothing here promises that a neighbor is standing nearby right now. It promises a place to ask, and a place to answer, starting with your own block.",
        ],
      },
      {
        heading: "Pick your city",
        body: [
          "Each city page covers the places people actually meet, the small stuff that comes up there, and which official numbers to call when something is more than a neighbor can handle. If you live in a smaller town nearby, the towns page covers the area in one place.",
          "Cities are a starting point, not a boundary. A favor often crosses the river: a charger at a Moorhead library for someone who lives in Fargo, a couch up the stairs for a friend in West Fargo.",
        ],
        bullets: [
          "Fargo: downtown Broadway, North Fargo, South Fargo, and the big shopping lots.",
          "West Fargo: Sheyenne Street, Veterans Boulevard, and the newer neighborhoods.",
          "Moorhead: Center Avenue, the river, and the campuses on the Minnesota side.",
          "Dilworth and Horace: the east and south edges of the metro.",
        ],
      },
      {
        heading: "What stays official",
        body: [
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. Police, county services, and campus public safety offices are the right call for crime, injuries, and anything urgent. The resources section lists the official numbers by city.",
        ],
      },
    ],
    related: ["cities/fargo", "cities/west-fargo", "cities/moorhead", "cities/towns-around-fargo-moorhead", "neighborhoods", "not-911"],
    faqs: [
      {
        q: "Does Help Me have a different app for each city?",
        a: "No. It is one iPhone app. The city pages explain how asking and answering work in each place, and which official numbers to use.",
      },
      {
        q: "Which cities is Help Me launching in?",
        a: "Fargo and West Fargo in North Dakota, and Moorhead in Minnesota, first, one zone at a time. Nearby towns are covered on a single page.",
      },
      {
        q: "Is Help Me open everywhere in the metro today?",
        a: "Not yet. Help Me opens zone by zone. The app shows whether your area is open, and the beta on TestFlight is how you get in early.",
      },
    ],
  }),
  page({
    slug: "cities/fargo",
    kind: "city",
    title: "Help Me in Fargo, ND: ask your block",
    description:
      "Ask Fargo neighbors for the small stuff: a phone charger, directions, a daylight jump start. Public places, a private chat, and a closer block than you think.",
    h1: "Fargo: ask your block for the small stuff",
    eyebrow: "Fargo, ND",
    lead: "Your phone dies on the second floor of the library, so you pack up and leave an hour early. Somebody three tables over had a charger. Fargo is full of people who would say yes if they knew.",
    answer:
      "Help Me is a place to ask your Fargo block for the small stuff: a phone charger, directions to the right door, a jump start in daylight. You post one sentence, a neighbor can say yes or no, and you meet in a public place. It launches in Fargo first, one zone at a time.",
    takeaways: [
      "Help Me is for small, everyday favors in public places, not emergencies.",
      "Your request shows as a rough area about 500 meters wide, not a pin on you.",
      "A private chat opens only between you and the neighbor who says yes.",
      "For danger or crime in Fargo, call 911 or your local emergency number.",
    ],
    priority: 0.95,
    keywords: ["Fargo help", "Fargo ND", "ask a neighbor Fargo", "jump start Fargo", "Fargo small favors", "Help Me Fargo"],
    geo: { name: "Fargo", type: "City", city: "Fargo", state: "ND", county: "Cass County", lat: 46.8772, lng: -96.7898 },
    sections: [
      {
        heading: "What gets people stuck in Fargo",
        body: [
          "January batteries. A parking ramp after a late class. A printer that stops working the night before something is due. A couch that will not turn the corner on a downtown stairwell. A visitor circling Broadway looking for the right door. None of that is a 911 call, and all of it is the kind of thing a person nearby could fix in under five minutes.",
          "Most of us already believe our neighbors would help. We just stopped asking. Help Me is built to make asking feel normal again, one small, low-stakes ask at a time.",
        ],
      },
      {
        heading: "Where to meet in Fargo",
        body: [
          "Meet in public by default. Downtown Broadway is walkable, busy, and obvious. A grocery store entrance, a campus union, a library lobby, or the front of a well-lit shopping center all work. West Acres and the lots along 13th Avenue are where cars quit in the cold, so a daylight jump start in a busy lot is the classic ask.",
          "You choose where to meet, and you choose when to share more of where you are. Until a neighbor says yes, your request shows as a rough area about 500 meters wide. Both people stay outside the car for anything involving a vehicle.",
        ],
      },
      {
        heading: "The small stuff, across North and South Fargo",
        body: [
          "North Fargo around NDSU has the library, the union, and a lot of people carrying heavy things up stairs in August. South Fargo has big parking lots and new housing where a second pair of hands matters during a move. Downtown has the walkable core. The point of Help Me is that you do not have to know which neighbor to ask.",
        ],
        bullets: [
          "A phone charger at the library or a coffee shop.",
          "Directions to the right door on a campus or in a building you have never entered.",
          "Someone to hold your seat while you grab coffee.",
          "A jump start in a busy lot, in daylight.",
          "Two more hands for a couch or a box of books.",
        ],
      },
      {
        heading: "Official help is still official",
        body: [
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. Fargo Police, Cass County, and campus public safety offices handle crime, injuries, and anything urgent. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["neighborhoods/downtown-fargo", "campuses/ndsu", "help/jump-start", "guides/new-to-fargo", "resources/fargo-police", "cities/west-fargo"],
    faqs: [
      {
        q: "Can I ask for a jump start in Fargo on Help Me?",
        a: "Yes, it is a classic small ask. Post it, meet in a busy public lot in daylight, and keep both people outside the car. A neighbor is not a mechanic or a tow service.",
      },
      {
        q: "Where should I meet someone from Help Me in Fargo?",
        a: "Somewhere public: a store entrance, the library, a campus union, or a busy downtown block. You choose, and you control when to share more of your location.",
      },
      {
        q: "Does Help Me replace Fargo Police?",
        a: "No. Help Me is not an emergency service. For danger or crime, call 911 or your local emergency number. Help Me is for the small stuff.",
      },
      {
        q: "Is Help Me open all over Fargo yet?",
        a: "Help Me launches one zone at a time. The app shows whether your area is open, and the TestFlight beta is how you get in early.",
      },
    ],
  }),
  page({
    slug: "cities/moorhead",
    kind: "city",
    title: "Help Me in Moorhead, MN: ask your block",
    description:
      "Ask Moorhead neighbors for the small stuff: directions across campus, a phone charger, a hand with a box. Public places and a private chat, Minnesota side.",
    h1: "Moorhead: ask your block on the Minnesota side",
    eyebrow: "Moorhead, MN",
    lead: "You circle a building twice looking for the right door and walk into class late anyway. Moorhead is a city with its own downtown, its own campuses, and plenty of people who have been lost in the same hallway.",
    answer:
      "Help Me is a place to ask your Moorhead block for the small stuff: directions across campus, a phone charger, two more hands for a box. One sentence, a neighbor can say yes or no, and you meet in public. Moorhead is part of the Fargo–Moorhead launch, one zone at a time.",
    takeaways: [
      "Moorhead is a launch city, not a Fargo suburb.",
      "Meet in public: Center Avenue, a campus union, or a library lobby.",
      "Moorhead Police and Clay County are separate from Fargo and Cass County.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.93,
    keywords: ["Moorhead help", "Moorhead MN", "ask a neighbor Moorhead", "Moorhead small favors", "Help Me Moorhead"],
    geo: { name: "Moorhead", type: "City", city: "Moorhead", state: "MN", county: "Clay County", lat: 46.8738, lng: -96.7676 },
    sections: [
      {
        heading: "A city, not a suburb",
        body: [
          "Moorhead has its own police, its own downtown along Center Avenue, and Clay County services. Minnesota State University Moorhead and Concordia College sit minutes apart, and both draw people across the river every day. Many Moorhead residents work in Fargo and many Fargo residents shop in Moorhead, so a favor often crosses the state line.",
          "Help Me treats Moorhead as a launch city. Official MSUM and Concordia event calendars appear in the app with the source attached, next to calendars from the rest of the metro.",
        ],
      },
      {
        heading: "Where to meet in Moorhead",
        body: [
          "Meet in public by default. Center Avenue downtown is busy and obvious. Campus unions and library lobbies are good for a phone charger or a quick handoff. Gooseberry Park and the river corridor are lovely, but pick somewhere lit and populated if you are meeting someone new.",
          "Until a neighbor says yes, your request shows as a rough area about 500 meters wide, not a pin on you. After that, you choose when to share more.",
        ],
        bullets: [
          "A phone charger at a campus library.",
          "Directions to the right building or the right door.",
          "A second person to carry something up the stairs.",
          "A jump start in a busy lot, in daylight.",
        ],
      },
      {
        heading: "Minnesota numbers, Minnesota services",
        body: [
          "911 works everywhere. Moorhead Police and Clay County are not Fargo Police and Cass County, and food, housing, and mental-health resources can differ across the river. The resources section keeps that split straight so you call the right office the first time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["campuses/msum", "campuses/concordia", "neighborhoods/downtown-moorhead", "resources/moorhead-police", "cities/fargo", "cities/dilworth"],
    faqs: [
      {
        q: "Is Help Me available in Moorhead or only in Fargo?",
        a: "Moorhead is a launch city. Help Me opens one zone at a time across Fargo, West Fargo, and Moorhead, and the app shows whether your area is open.",
      },
      {
        q: "Do MSUM and Concordia events show up in Help Me?",
        a: "Yes. Official MSUM and Concordia calendars appear in the app, always linked back to the source that published them. Open the official link for details.",
      },
      {
        q: "Who do I call in Moorhead for something urgent?",
        a: "Call 911 or your local emergency number. For non-emergency questions, use Moorhead Police or Clay County. Help Me is for the small stuff.",
      },
    ],
  }),
  page({
    slug: "cities/west-fargo",
    kind: "city",
    title: "Help Me in West Fargo, ND: ask your block",
    description:
      "Ask West Fargo neighbors for the small stuff: a daylight jump start, directions, a hand with a heavy box. Public places, a private chat, one zone at a time.",
    h1: "West Fargo: ask your block for the small stuff",
    eyebrow: "West Fargo, ND",
    lead: "The car will not start in a big lot on Veterans Boulevard, and everyone walking past assumes someone else has jumper cables. West Fargo is growing fast, and a lot of new neighbors have not met yet.",
    answer:
      "Help Me is a place to ask your West Fargo block for the small stuff: a jump start in daylight, directions, a hand with something heavy. You post one sentence, a neighbor can say yes or no, and you meet in public. West Fargo is a launch city, opening one zone at a time.",
    takeaways: [
      "West Fargo is a launch city with its own page and its own calendar.",
      "The official West Fargo community calendar appears in the app, linked to its source.",
      "Meet in public: a store entrance, a busy lot, or a community space.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.92,
    keywords: ["West Fargo help", "West Fargo ND", "ask a neighbor West Fargo", "West Fargo events", "Help Me West Fargo"],
    geo: { name: "West Fargo", type: "City", city: "West Fargo", state: "ND", county: "Cass County", lat: 46.8747, lng: -96.9004 },
    sections: [
      {
        heading: "A fast-growing city of new neighbors",
        body: [
          "West Fargo is the growing western side of the metro: Sheyenne Street, 32nd Avenue, Veterans Boulevard, and newer neighborhoods like The Lights, Sheyenne Crossing, and Shadow Wood. A lot of people here moved in recently and have not met the people on their block yet. That is exactly the gap Help Me is built for.",
          "West Fargo publishes its own community calendar. Help Me includes it, labels it as West Fargo, and links back to the city so you can read the official details.",
        ],
      },
      {
        heading: "Where to meet in West Fargo",
        body: [
          "Meet in public by default. The big commercial lots along Veterans Boulevard and 13th Avenue are busy and well lit, which makes them a good place for a daylight jump start. A grocery entrance, a community space, or a coffee shop all work for a quick handoff.",
          "Your request shows as a rough area about 500 meters wide until a neighbor says yes. Then you choose when to share more of where you are, and only with that one person.",
        ],
        bullets: [
          "A jump start in a busy lot, in daylight.",
          "Directions to a building you have never been in.",
          "Two more hands for a couch or a box of books.",
          "A phone charger while you wait on an appointment.",
        ],
      },
      {
        heading: "When it is more than a neighbor can do",
        body: [
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. West Fargo Police and Cass County handle crime, injuries, and anything urgent. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["neighborhoods/the-lights", "neighborhoods/sheyenne-crossing", "guides/west-fargo-community-help", "resources/west-fargo-police", "cities/fargo", "cities/horace"],
    faqs: [
      {
        q: "Does Help Me include West Fargo events?",
        a: "Yes. The official West Fargo community calendar is one of the fixed sources in the app, and every event links back to the city that published it.",
      },
      {
        q: "Is West Fargo part of the Fargo page?",
        a: "No. West Fargo has its own city page, its own neighborhoods, and its own police resource page. It is a launch city, not an appendix to Fargo.",
      },
      {
        q: "Where is a good place to meet a neighbor in West Fargo?",
        a: "A busy public place: a store entrance, a lit lot during the day, or a community space. You choose, and you control when to share more of your location.",
      },
    ],
  }),
  page({
    slug: "cities/dilworth",
    kind: "city",
    title: "Help Me in Dilworth, MN: ask your block",
    description:
      "Dilworth sits on the east edge of Moorhead. Ask neighbors for the small stuff here: a jump start in daylight, directions, a hand with something heavy.",
    h1: "Dilworth: ask your block for the small stuff",
    eyebrow: "Dilworth, MN",
    lead: "Dilworth is small, close, and easy to skip on a map of Fargo. The people who live here still get stuck in the same winter, and the nearest neighbor with jumper cables might be one street over.",
    answer:
      "Help Me is a place to ask your Dilworth block for the small stuff: a jump start in daylight, directions, a hand with something heavy. One sentence, a neighbor can say yes or no, and you meet in public. Dilworth is part of the Fargo–Moorhead area Help Me is launching in, one zone at a time.",
    takeaways: [
      "Dilworth is inside the Fargo–Moorhead metro Help Me is built for.",
      "Meet in public: a store entrance or a busy lot in town or in Moorhead.",
      "Dilworth falls under Clay County, Minnesota for official services.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.7,
    keywords: ["Dilworth MN", "Dilworth help", "Clay County", "ask a neighbor Dilworth"],
    geo: { name: "Dilworth", type: "City", city: "Dilworth", state: "MN", county: "Clay County", lat: 46.876, lng: -96.703 },
    sections: [
      {
        heading: "Next to Moorhead, not inside it",
        body: [
          "Dilworth sits just east of Moorhead along Highway 10, with the rail corridor running through town. Jobs, groceries, and campuses in Moorhead and Fargo are a short drive away, so many of the favors that start in Dilworth end up in a Moorhead parking lot or a Fargo library.",
          "Help Me does not run a separate Dilworth product. It is part of the same metro area, and the app shows whether your zone is open yet.",
        ],
      },
      {
        heading: "Where to meet near Dilworth",
        body: [
          "Meet in public by default. A busy store entrance, a gas station lot with other people around, or a stop in Moorhead along Center Avenue all work. Do the handoff in daylight when you can, and keep both people outside the car for anything involving a vehicle.",
          "Your request shows as a rough area about 500 meters wide until a neighbor says yes, and you choose when to share more.",
        ],
        bullets: [
          "A jump start in daylight in a busy lot.",
          "A phone charger on the way to work.",
          "Directions to a building you have not been to.",
          "Two more hands for something heavy.",
        ],
      },
      {
        heading: "Official help in Clay County",
        body: [
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. For non-emergency questions, Clay County and the city are the right offices. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["cities/moorhead", "resources/clay-county-resources", "help/jump-start", "cities/towns-around-fargo-moorhead"],
    faqs: [
      {
        q: "Is Dilworth included in Help Me?",
        a: "Yes, as part of the Fargo–Moorhead area the app is built for. Help Me opens one zone at a time, and the app shows whether yours is open.",
      },
      {
        q: "Who do I call for an emergency in Dilworth?",
        a: "Call 911 or your local emergency number. Help Me is for the small stuff, not emergencies.",
      },
      {
        q: "Where should I meet a neighbor near Dilworth?",
        a: "Somewhere public and busy, like a store entrance or a lit lot, ideally in daylight. You choose, and you control when to share more.",
      },
    ],
  }),
  page({
    slug: "cities/horace",
    kind: "city",
    title: "Help Me in Horace, ND: ask your block",
    description:
      "Horace is the fast-growing Cass County city south of West Fargo. Ask neighbors for the small stuff: a jump start, directions, a hand with something heavy.",
    h1: "Horace: ask your block for the small stuff",
    eyebrow: "Horace, ND",
    lead: "Horace grew up on the southern edge of the metro: new streets, a long drive to almost everything, and the same dead battery as everyone north of you. The nearest neighbor with jumper cables might live one cul-de-sac over.",
    answer:
      "Help Me is a place to ask your Horace block for the small stuff: a jump start in daylight, directions, a hand with something heavy. One sentence, a neighbor can say yes or no, and you meet in public. Horace is part of the Fargo–Moorhead area Help Me is launching in, one zone at a time.",
    takeaways: [
      "Horace is inside the Fargo–Moorhead metro and the Cass County service area.",
      "Meet in public: a store entrance or a busy lot, in daylight when you can.",
      "Help Me opens one zone at a time, so the app shows what is open near you.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.68,
    keywords: ["Horace ND", "Horace North Dakota", "south Fargo metro", "ask a neighbor Horace"],
    geo: { name: "Horace", type: "City", city: "Horace", state: "ND", county: "Cass County", lat: 46.758, lng: -96.904 },
    sections: [
      {
        heading: "South of the metro, still in it",
        body: [
          "Horace residents work, shop, and study in Fargo and West Fargo, so most of what comes up happens somewhere along that drive. A favor that starts in Horace might end in a West Fargo parking lot or a Fargo library. Help Me is built around that whole area rather than a single town.",
          "Help Me opens one zone at a time. The app tells you whether your zone is open yet, and the TestFlight beta is how you get in early.",
        ],
      },
      {
        heading: "Where to meet near Horace",
        body: [
          "Meet in public by default. A grocery entrance, a busy corner, or a lot with other people around all work. Do the handoff in daylight when you can. Nothing about Help Me asks you to invite anyone to your home, and a doorstep is never the place to meet.",
          "Until a neighbor says yes, your request shows as a rough area about 500 meters wide. After that, you choose when to share more, and only with that one person.",
        ],
        bullets: [
          "A jump start in a busy lot, in daylight.",
          "A phone charger while you wait.",
          "Directions to a building you have not been to.",
          "Two more hands for a couch or a box.",
        ],
      },
      {
        heading: "When it is more than a neighbor can do",
        body: [
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. Cass County handles official services for Horace. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["cities/west-fargo", "cities/fargo", "help/jump-start", "resources/cass-county-resources", "cities/towns-around-fargo-moorhead"],
    faqs: [
      {
        q: "Does Help Me serve Horace?",
        a: "Horace is part of the Fargo–Moorhead area the app is built for. It is not a separate city app, and Help Me opens one zone at a time.",
      },
      {
        q: "Who do I call for something urgent in Horace?",
        a: "Call 911 or your local emergency number. Help Me is for the small stuff and is not an emergency service.",
      },
      {
        q: "Where should I meet a neighbor near Horace?",
        a: "Somewhere public and busy, like a store entrance or a lit lot, ideally in daylight. You choose, and you decide when to share more of your location.",
      },
    ],
  }),
  page({
    slug: "cities/towns-around-fargo-moorhead",
    kind: "city",
    title: "Help Me in the towns around Fargo-Moorhead",
    description:
      "Living in Harwood, Casselton, Kindred, Glyndon, Sabin, or another town near the metro? Here is how asking and answering works just outside Fargo-Moorhead.",
    h1: "The towns around Fargo-Moorhead",
    eyebrow: "Nearby towns",
    lead: "If you live in Harwood, Casselton, Kindred, Mapleton, Argusville, Oxbow, Glyndon, Sabin, Hawley, or Barnesville, you probably cross into the metro for work, groceries, or class. Your favors tend to happen there too.",
    answer:
      "Help Me is launching in Fargo, West Fargo, and Moorhead first, one zone at a time. If you live in a smaller town nearby, like Harwood, Casselton, Kindred, or Glyndon, you can still ask for and offer small favors in the metro where you shop, work, and study. The app shows what is open near you.",
    takeaways: [
      "Help Me launches in Fargo, West Fargo, and Moorhead first.",
      "Nearby towns are covered here instead of with a page each.",
      "Most small favors happen in metro lots, libraries, and stores you already visit.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.7,
    keywords: ["towns near Fargo", "Harwood ND", "Casselton ND", "Kindred ND", "Glyndon MN", "Sabin MN", "Hawley MN", "Barnesville MN"],
    geo: { name: "Towns around Fargo–Moorhead", type: "Region", lat: 46.8772, lng: -96.7898 },
    sections: [
      {
        heading: "How the towns fit in",
        body: [
          "North Dakota towns like Harwood, Casselton, Kindred, Mapleton, Argusville, and Oxbow sit in Cass County. Minnesota towns like Glyndon, Sabin, Hawley, and Barnesville sit in Clay County. Their residents tend to live in one place and run errands in another, which is exactly where a small favor tends to come up.",
          "Help Me opens one zone at a time, starting in Fargo, West Fargo, and Moorhead. The app shows whether your area is open. If it is not yet, you can still join the TestFlight beta and ask or answer in the places that are open, like the metro library you already visit.",
        ],
      },
      {
        heading: "What this looks like in practice",
        body: [
          "A phone charger at a Moorhead library on your lunch break. Directions to the right building on a campus you have never visited. Two more hands for a couch at a friend's place in West Fargo. A jump start in a busy lot after work. These are small, public, and over in minutes.",
          "Meet in public by default, in daylight when you can. Nothing in Help Me asks you to invite anyone to your home.",
        ],
        bullets: [
          "Ask for the small stuff in the metro place you are already headed to.",
          "Offer a hand when you are out running errands in Fargo, West Fargo, or Moorhead.",
          "Keep the handoff short, public, and in daylight.",
        ],
      },
      {
        heading: "Official numbers near you",
        body: [
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. For non-emergency needs in smaller towns, your county sheriff, your city office, and 211 are the right starting points. The resources section lists the official offices for Cass and Clay Counties.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["cities", "cities/fargo", "cities/moorhead", "resources/cass-county-resources", "resources/clay-county-resources", "how-it-works"],
    faqs: [
      {
        q: "Can I use Help Me if I live outside Fargo, West Fargo, or Moorhead?",
        a: "Help Me launches in those three cities first, one zone at a time. If you live in a nearby town, you can still ask or help in the metro places you already visit, and the app shows what is open.",
      },
      {
        q: "Why is there no page for my town?",
        a: "Help Me is launching in Fargo, West Fargo, and Moorhead first. Nearby towns are grouped here until a zone opens close enough to be useful on its own.",
      },
      {
        q: "Who do I call for non-emergency help in a small town near the metro?",
        a: "Start with your county or city office, or call 211 for local services. For danger, call 911 or your local emergency number.",
      },
    ],
  }),
];
