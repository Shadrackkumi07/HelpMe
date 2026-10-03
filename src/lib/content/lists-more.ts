import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

const REVIEW_LINE = "Helpers can apply to be reviewed by our team. Help Me does not run background checks.";
const REPORT_LINE = "You can report or block any member at any time.";
const NOT_911 = "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.";

export const LIST_PAGES_MORE: SeoPage[] = [
  page({
    slug: "lists/free-community-help-fargo",
    kind: "list",
    title: "Free help in Fargo-Moorhead: the right door for each problem",
    description:
      "Free help in Fargo-Moorhead: 911, 211, campus public safety, food pantries, libraries, MATBUS, county services, and neighbor favors. Each has its lane.",
    h1: "Free help, with the right door for each problem",
    eyebrow: "Fargo-Moorhead",
    lead: "Free is not the same as unofficial. Some of the best help in this metro wears a badge or answers 211.",
    answer:
      "Free help in Fargo-Moorhead includes 911 for emergencies, 211 for referrals to food, heat, and housing, campus public safety offices, food pantries and meal sites, the public library, county human services, and neighbor favors on Help Me. Each has its own lane, and the right door depends on the problem.",
    listItems: [
      { name: "911", description: "Free in both states, and not optional when it is an emergency.", href: "/resources/fargo-emergency" },
      { name: "211 and FirstLink", description: "Free referral and a listening line. Call 211 or 701-235-7335, or visit myfirstlink.org.", href: "/glossary/211-referral" },
      { name: "Campus public safety", description: "NDSU, MSUM, and Concordia offer escorts and, on some campuses, jumps and unlocks. Official, not a favor.", href: "/campuses" },
      { name: "Food pantries and meal sites", description: "The Great Plains Food Bank list, the Emergency Food Pantry, Dorothy Day, and Salvation Army meals. Hours are on their pages, and 211 helps if you cannot parse the week.", href: "/resources/food-assistance-fargo" },
      { name: "Fargo Public Library", description: "Cards, computers, and heat during open hours. Details on the city site.", href: "/resources/fargo-public-library" },
      { name: "MATBUS", description: "Not always free. Student and youth pass rules are published. Still cheaper than a dead car.", href: "/resources/matbus" },
      { name: "County human services", description: "Cass or Clay, depending on the river. Benefits are programs, not charity theater.", href: "/resources/cass-county-resources" },
      { name: "Neighbor favors on Help Me", description: "Free, and not a paid marketplace. Everyday asks, answered by neighbors. Never a shelter, a crisis line, or the police.", href: "/help" },
    ],
    takeaways: [
      "Free help exists at every level, and each door has its lane.",
      "211 is the front door for food, heat, housing, and benefits.",
      "Help Me is for small favors, not shelter or crisis.",
      "In danger, call 911.",
    ],
    priority: 0.6,
    keywords: ["free help Fargo", "free help Moorhead", "community help Fargo", "free resources Fargo-Moorhead"],
    sections: [
      {
        heading: "Where to start",
        body: [
          "If you are not sure which door, call 211. Trained staff know what is available and which side of the river you are on. If it is a small favor, like a charger or a jump, a neighbor on Help Me is the quickest door.",
        ],
      },
      {
        heading: "Help Me's place in this list",
        body: [
          "Help Me is a place to ask your block for the small stuff. It does not do food, housing, benefits, or crisis help. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["resources", "resources/211-north-dakota", "resources/food-assistance-fargo", "lists/ways-neighbors-help-fargo", "resources/fargo-public-library", "not-911"],
    faqs: [
      {
        q: "Is Help Me a free version of a paid task marketplace?",
        a: "No. It is not a paid marketplace. Helpers are neighbors who applied and were reviewed by our team.",
      },
      {
        q: "Should I try Help Me before 211?",
        a: "For a jump start or directions, maybe. For food, heat, shelter, or benefits, call 211 first.",
      },
      {
        q: "Are these services open all day?",
        a: "Hours differ. Check each source, or ask 211.",
      },
    ],
  }),
  page({
    slug: "lists/community-apps-compared",
    kind: "list",
    title: "Which tool for which problem in Fargo-Moorhead",
    description:
      "A neighbor request, a neighborhood feed, a group thread, a paid task service, 911, 211, or a campus escort: what each is for in Fargo-Moorhead.",
    h1: "Which tool fits which problem",
    eyebrow: "Fargo-Moorhead",
    lead: "Different tools, one metro. The mistake is using a feed when you need an officer, or an officer when you need jumper cables.",
    answer:
      "In Fargo-Moorhead, a neighbor request fits a small favor in public, a neighborhood feed fits lost pets and city notices, a group thread fits people you already know, a paid task service fits hired labor, 911 fits danger, 211 fits food, heat, and housing, and a campus escort fits an official walk. Help Me is the first one.",
    listItems: [
      { name: "A neighbor request (Help Me)", description: "Ask in a sentence. Helpers nearby can say yes, you chat privately, and you meet in public. Rough area on the map, a review for helpers, and not an emergency service.", href: "/how-it-works" },
      { name: "A neighborhood feed", description: "A broadcast with comments, useful for lost dogs and city notices. A dead battery does not need a thread.", href: "/for-neighbors" },
      { name: "A group thread", description: "Buy-sell groups, campus groups, and is-this-your-car posts. Public-ish, noisy, sometimes kind. Not private by default.", href: "/glossary/community-posts" },
      { name: "A paid task service", description: "A marketplace for paying someone as a contractor. Help Me is not that, and nobody is paid through it.", href: "/questions/is-help-me-a-gig-app" },
      { name: "911 and city police", description: "Danger, crime, and medical emergencies. Fargo, Moorhead, West Fargo, and campus police. Help Me does not dispatch them.", href: "/not-911" },
      { name: "211 and FirstLink", description: "Food, shelter, heat, and referrals. Official, free, and not a map of helpers.", href: "/glossary/211-referral" },
      { name: "Campus escorts", description: "NDSU, MSUM, and Concordia run official tools for official walks. Help Me is a neighbor.", href: "/help/walk-with-someone" },
      { name: "A group chat", description: "Fine for people you already know. A 200-person chat is still an audience, which is the problem Help Me is built around.", href: "/guides/asking-for-help-when-you-hate-asking" },
    ],
    takeaways: [
      "Match the tool to the problem, not the habit.",
      "A small public favor fits a neighbor request.",
      "Danger fits 911. Food, heat, and housing fit 211.",
      "Help Me is not an emergency service.",
    ],
    priority: 0.5,
    keywords: ["neighbor help app Fargo", "ask a neighbor app", "community help options Fargo", "which app for help Fargo"],
    sections: [
      {
        heading: "Why this list exists",
        body: [
          "People reach for what is on their phone. A feed for a dead battery gets forty opinions and no cables. An emergency line for a lost charger wastes someone's night. Picking the right tool is most of the problem.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is a place to ask your block for the small stuff, and a place to answer. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["about", "how-it-works", "not-911", "for-neighbors", "resources/211-north-dakota", "guides/how-to-ask-for-help"],
    faqs: [
      {
        q: "Is Help Me trying to replace a neighborhood feed?",
        a: "No. It is a request with a private offer, not a neighborhood social network.",
      },
      {
        q: "Why not just post in a group?",
        a: "You can. You will get opinions. Help Me shows your ask to helpers nearby who are online.",
      },
      {
        q: "Which tool is right for an emergency?",
        a: "911. Help Me is not an emergency service.",
      },
    ],
  }),
  page({
    slug: "lists/fargo-events-guide",
    kind: "list",
    title: "Fargo-Moorhead events guide: calendars by source",
    description:
      "Where Fargo-Moorhead events come from: NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo. Attributed in Help Me, never invented.",
    h1: "Fargo-Moorhead events, source by source",
    eyebrow: "Fargo-Moorhead",
    lead: "Six official pipes. One Community tab. The last word is always the link they published.",
    answer:
      "Events in Help Me come from six official sources: NDSU through MyNDSU, the MSUM and Concordia campus calendars, M State's academic dates, West Fargo's community calendar, and Ticketmaster Fargo for regional shows. Each event shows its source and links to the official page, and nothing is invented.",
    listItems: [
      { name: "NDSU and MyNDSU", description: "Campus life, athletics, and lectures. Labeled NDSU in the app.", href: "/campuses/ndsu" },
      { name: "MSUM campus calendar", description: "Minnesota State University Moorhead. A separate school and a separate source.", href: "/campuses/msum" },
      { name: "Concordia College calendar", description: "Cobber events, in Moorhead and not MSUM.", href: "/campuses/concordia" },
      { name: "M State academic dates", description: "Drop dates and closures more than concerts. Official and linked.", href: "/campuses/m-state" },
      { name: "West Fargo community calendar", description: "A city calendar, not a campus one, with westfargond.gov as its home. This is why West Fargo is not treated as a Fargo neighborhood.", href: "/guides/west-fargo-community-help" },
      { name: "Ticketmaster Fargo", description: "Regional shows within about 35 miles of Fargo, like the FARGODOME and Scheels Arena. Pulled from Ticketmaster, not from flyers.", href: "/events" },
    ],
    takeaways: [
      "Six fixed sources. Nothing else.",
      "Home shows a rail. Community shows the full calendar.",
      "If a feed is down, the app says so.",
      "To add an event, publish it on the official calendar.",
    ],
    priority: 0.55,
    keywords: ["Fargo events", "Fargo-Moorhead events calendar", "NDSU events", "West Fargo events calendar", "FARGODOME events"],
    sections: [
      {
        heading: "How to use them in the app",
        body: [
          "Home shows a rail for a quick look. Community is the full calendar. Filter by source, search, save, and open the official page. The source name stays visible on purpose, because the source has the last word on times and tickets.",
        ],
      },
      {
        heading: "How not to use them",
        body: [
          "Do not submit events here. Do not treat a listing as a Help Me meetup. If a feed is down, the product says so instead of filling the screen. Showing an event is not affiliation. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["events", "community", "guides/campus-events-fargo-moorhead", "lists/fargo-moorhead-campuses", "lists/things-to-do-in-fargo", "glossary/event-attribution"],
    faqs: [
      {
        q: "Can I add a show from this website?",
        a: "No. Publish it on the official calendar that Help Me already includes.",
      },
      {
        q: "Why is a concert missing?",
        a: "It may not be in those sources, or a feed is down. Help Me does not invent a night to fill the screen.",
      },
      {
        q: "Where do I buy tickets?",
        a: "On the official page each event links to.",
      },
    ],
  }),
  page({
    slug: "lists/parking-lots-where-cars-die-fargo",
    kind: "list",
    title: "Parking lots where cars die in Fargo-Moorhead",
    description:
      "Winter lots that kill batteries: West Acres, NDSU, downtown ramps, 13th and 45th, West Fargo, MSUM. Meet in public, and keep your driveway out of the chat.",
    h1: "Parking lots where cars die, and where to meet instead of a driveway",
    eyebrow: "Fargo-Moorhead",
    lead: "January does not pick favorites. It picks lots. Name the lot, stay in public, and keep your house out of the chat.",
    answer:
      "In Fargo-Moorhead winters, cars most often die in big, windy lots: West Acres, NDSU campus lots, downtown ramps, the 13th Avenue and 45th Street strip, Veterans Boulevard and Sheyenne Street in West Fargo, and the MSUM and Concordia lots. Name the lot in your request and meet at an entrance, not at your driveway.",
    listItems: [
      { name: "West Acres lots", description: "Huge, windy, and full of cars that sat through a movie and a meal. Meet at a mall entrance. Jump in a busy row, and prefer a still-open grocery after closing.", href: "/neighborhoods/west-acres" },
      { name: "NDSU campus lots", description: "Night class, then click-click. University Police at 701-231-8998 if it is unsafe or you want official campus help. A neighbor is the other option, with the Union as the label.", href: "/campuses/ndsu" },
      { name: "Downtown Fargo ramps", description: "Broadway nights, workdays, winter. Meet in the lobby. Upper decks get quiet. Fargo Police if someone is lurking, not if the battery is merely dead.", href: "/neighborhoods/downtown-fargo" },
      { name: "The 13th Avenue and 45th Street strip", description: "Commercial Fargo with big lots and a long cold. Grocery and big-box entrances are the public default.", href: "/neighborhoods/south-fargo" },
      { name: "Veterans Boulevard and Sheyenne Street, West Fargo", description: "The same winter with different city police. Meet at a store door, not a cul-de-sac in The Lights.", href: "/neighborhoods/sheyenne-crossing" },
      { name: "MSUM and Concordia lots", description: "MSUM Public Safety publishes on-campus jumps (218-477-2449). For Concordia, ask Public Safety (218-299-3123) what they offer. Beyond the short campus radius, use a public lot and a neighbor.", href: "/campuses/msum" },
      { name: "Downtown Moorhead and Center Avenue", description: "The Minnesota side, with Moorhead Police. Same entrance rule. Do not paste a Fargo lot name onto a Moorhead stall.", href: "/neighborhoods/downtown-moorhead" },
      { name: "The lot that is your driveway", description: "That is the one you should not share as a pin. If the car will move, drive to a grocery. If not, wait for a tow or someone you already trust.", href: "/guides/meet-in-public-fargo" },
    ],
    takeaways: [
      "Name the lot, and meet at an entrance.",
      "Do not wander a far row alone waiting on an offer.",
      "A jump pack in the trunk beats every other plan.",
      "In danger, call 911.",
    ],
    priority: 0.6,
    keywords: ["dead battery lots Fargo", "winter parking lots Fargo", "cars die Fargo winter", "West Acres jump start", "NDSU lot jump start"],
    sections: [
      {
        heading: "Why lots, and why January",
        body: [
          "Big lots are windy, cars sit for hours, and a battery that was marginal in October gives up on the first very cold morning. That is why the same few places show up every winter. A charged jump pack is the most useful thing you can carry.",
        ],
      },
      {
        heading: "A first match belongs in public",
        body: [
          "If the car will not move, a tow or someone you already know is a better tool than a first match at a home pin. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["guides/winter-help-fargo", "guides/meet-in-public-fargo", "lists/public-meeting-places-fargo", "guides/location-privacy", "help/jump-start", "glossary/jump-pack"],
    faqs: [
      {
        q: "Will a helper come to my house if the car is in the driveway?",
        a: "Meet in public. If the car cannot move, a tow or someone you already know is the better tool than a first match at a home pin.",
      },
      {
        q: "Is this a list of tow companies?",
        a: "No. It is geography. For a tow, call a shop. For danger in a lot, call 911.",
      },
      {
        q: "What is the best way to avoid needing help?",
        a: "A charged jump pack and a battery tested before winter.",
      },
    ],
  }),
  page({
    slug: "lists/emergency-numbers-fargo-moorhead",
    kind: "list",
    title: "Emergency and help numbers in Fargo-Moorhead",
    description:
      "911, 988, 511, and 211 across North Dakota and Minnesota, plus what each one is for. The list to save before you need it.",
    h1: "The numbers worth knowing before you need them",
    eyebrow: "Fargo-Moorhead",
    lead: "A few short numbers cover almost everything, and knowing which is which saves the worst ten minutes of someone's year.",
    answer:
      "In Fargo-Moorhead: call 911 for danger, injury, fire, or a crime in progress on both sides of the river. Call or text 988 for a suicide or mental health crisis. Call 211 for food, housing, utilities, and referrals. Use 511 for road conditions and closures, which North Dakota and Minnesota run separately.",
    listItems: [
      { name: "911: emergencies", description: "Danger, injury, fire, or a crime in progress. Works in Fargo, West Fargo, Cass County, Moorhead, Dilworth, and Clay County. Stay on the line and give a location a dispatcher can use.", href: "/resources/fargo-emergency" },
      { name: "988: suicide and crisis lifeline", description: "Call or text for a mental health or substance use crisis, or when you are worried about someone else. Veterans press 1.", href: "/glossary/988-crisis-line" },
      { name: "211: information and referral", description: "Free and confidential help finding food, housing, utility assistance, and health services. North Dakota and Minnesota run separate services.", href: "/glossary/211-referral" },
      { name: "511: road conditions", description: "State traveler information for closures and no-travel advisories. Check the state whose roads you are driving before a winter trip.", href: "/glossary/511-road-conditions" },
      { name: "City police non-emergency", description: "Fargo, West Fargo, and Moorhead each run their own department and non-emergency line for reports that are not in progress.", href: "/resources/fargo-police" },
      { name: "Campus public safety", description: "NDSU, MSUM, and Concordia each have their own public safety office for incidents on campus property.", href: "/resources/ndsu-safety" },
    ],
    takeaways: [
      "911 for danger. 988 for a mental health crisis.",
      "211 for food, housing, and referrals. 511 for roads.",
      "Police non-emergency lines differ by city.",
      "Help Me is not on this list. It is not an emergency service.",
    ],
    priority: 0.7,
    keywords: ["emergency numbers Fargo", "Fargo non emergency number", "Moorhead non emergency police", "988 Fargo", "211 North Dakota", "911 Fargo-Moorhead"],
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
          "Nowhere on this list. Help Me is for small, everyday favors between neighbors. If your situation belongs to any number above, use the number. That is the whole reason this page exists on a help app's website. " + REVIEW_LINE,
          NOT_911,
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
      {
        q: "What is the Fargo non-emergency number?",
        a: "Each city lists its own on the official site, and the Resources pages link to them. Confirm the current number before relying on it.",
      },
    ],
  }),
  page({
    slug: "lists/winter-driving-mistakes-newcomers-make",
    kind: "list",
    title: "Winter driving mistakes newcomers make in Fargo-Moorhead",
    description:
      "The errors that catch people in a first North Dakota winter, from clearing a porthole in the windshield to trusting all-wheel drive on ice.",
    h1: "Eight ways a first winter goes wrong",
    eyebrow: "Fargo-Moorhead",
    lead: "None of these are stupidity. They are all reasonable habits from somewhere with a milder climate.",
    answer:
      "Common first-winter mistakes here are scraping only a small porthole, trusting all-wheel drive on ice, running the tank low, dressing for the thermometer instead of the wind chill, leaving the jump pack uncharged, driving a plowed-but-icy road like a dry one, ignoring snow emergency rules, and leaving the metro without checking 511.",
    listItems: [
      { name: "Clearing only a porthole", description: "Clear the whole windshield, the rear glass, the mirrors, the lights, and the roof. Roof snow becomes the windshield of the car behind you.", href: "/help/winter-car-help" },
      { name: "Trusting all-wheel drive on ice", description: "All-wheel drive helps you accelerate. It does nothing for stopping or turning on ice. Braking distance is the thing that surprises people.", href: "/seasons/winter-in-fargo-moorhead" },
      { name: "Running the tank low", description: "Keep it above half. Fuel is your heat source if you end up waiting for a tow.", href: "/guides/what-to-keep-in-your-car-in-winter" },
      { name: "Dressing for the thermometer", description: "Wind chill decides frostbite risk, and it is often far below the air temperature here.", href: "/glossary/wind-chill" },
      { name: "An uncharged jump pack", description: "A pack that has been flat in the trunk since March will not help in January. Charge it in the fall.", href: "/glossary/jump-pack" },
      { name: "Driving a plowed road like a dry one", description: "Plowed does not mean clear. Packed snow polishes into ice, especially at intersections where everyone brakes.", href: "/help/winter-car-help" },
      { name: "Ignoring snow emergency parking rules", description: "Fargo, West Fargo, and Moorhead each declare their own, and each will tow. Sign up for your city's alerts.", href: "/glossary/snow-emergency" },
      { name: "Leaving the metro without checking 511", description: "Rural roads and interstates close in this region, and no-travel advisories are real. Check before you drive.", href: "/glossary/511-road-conditions" },
    ],
    takeaways: [
      "Clear the whole car, roof included.",
      "All-wheel drive does not stop on ice.",
      "Charge the jump pack in the fall.",
      "Check 511 before you leave the metro.",
    ],
    priority: 0.55,
    keywords: ["winter driving mistakes", "first winter Fargo", "winter driving North Dakota", "driving on ice Fargo", "newcomer winter tips"],
    sections: [
      {
        heading: "The pattern behind them",
        body: [
          "Almost every mistake on this list is a habit that works fine in a milder place. None of it is about competence. It is about a climate that punishes assumptions on a schedule.",
        ],
      },
      {
        heading: "When it goes wrong anyway",
        body: [
          "In a lot or a driveway, a neighbor with cables or a shovel is a real answer. On a highway, in a ditch, or if you are getting cold, it is a tow service and 911. That line does not move. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
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
        a: "An empty, legal lot after a snowfall teaches you more about your car's braking than any article can.",
      },
      {
        q: "What is the single biggest mistake?",
        a: "Dressing and planning for the thermometer instead of the wind chill and the road.",
      },
    ],
  }),
  page({
    slug: "lists/questions-before-meeting-someone-new",
    kind: "list",
    title: "Six questions to ask before meeting someone new",
    description:
      "A short pre-meet checklist for anyone using a neighbor help app: place, hour, who knows, what you are sharing, and how you leave.",
    h1: "Six questions before you meet anyone",
    eyebrow: "Fargo-Moorhead",
    lead: "None of these take more than a few seconds, and running through them once becomes a habit you never have to think about again.",
    answer:
      "Before meeting someone from a help app, ask: is the place public and lit right now, does someone else know where I am going, am I sharing more location than I need to, is the conversation still in the app, do I have a way to leave, and does anything feel off. Any single no is a reason to stop.",
    listItems: [
      { name: "Is this place public and lit right now?", description: "Not at noon, right now. Lots empty, buildings lock, and a good spot at three is a bad spot at eleven.", href: "/guides/meet-in-public-fargo" },
      { name: "Does anyone else know where I am?", description: "One text to one person: where, who, and when you expect to be done. It costs nothing.", href: "/guides/meeting-someone-new-in-fargo" },
      { name: "Am I sharing more location than I need to?", description: "A rough area is the default and it is usually enough. Precise sharing is opt-in and ends with the request.", href: "/questions/who-can-see-my-location" },
      { name: "Is the conversation still in the app?", description: "In-app chat keeps report and block meaningful and keeps your phone number yours.", href: "/questions/does-help-me-share-my-phone-number" },
      { name: "Do I have a way to end this?", description: "Report and block are one tap away, and leaving early needs no explanation and no apology.", href: "/questions/can-i-block-someone" },
      { name: "Does anything feel off?", description: "That is enough. You do not owe anyone the benefit of the doubt at your own expense, and 911 exists if it is more than a feeling.", href: "/not-911" },
    ],
    takeaways: [
      "Run the six questions before you are standing in front of anyone.",
      "Any single no is a reason to stop.",
      "Leaving early needs no explanation.",
      "In danger, call 911.",
    ],
    priority: 0.5,
    keywords: ["before meeting someone new", "meeting checklist", "meet a neighbor checklist", "meeting someone from an app"],
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
          "Helping needs a current review by our team. Requests show a rough area rather than a pin. Chat is private between two people. Report and block are always present. That is a real floor, and it is not a substitute for the six questions above. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["ground-rules", "guides/meeting-someone-new-in-fargo", "questions/what-happens-when-you-meet-someone", "questions/where-should-i-meet-a-helper", "glossary/meet-in-public"],
    faqs: [
      {
        q: "Is it rude to leave early?",
        a: "No. Ending an interaction is always allowed, and nobody is entitled to an explanation.",
      },
      {
        q: "Should I bring someone?",
        a: "Always fine. Nothing about Help Me expects you to show up alone.",
      },
      {
        q: "What if I answer no to one of the questions?",
        a: "Stop, and change the plan: a different place, a different hour, or a different tool.",
      },
    ],
  }),
  page({
    slug: "lists/most-common-help-requests-fargo",
    kind: "list",
    title: "The most common everyday favors in Fargo-Moorhead",
    description:
      "What people actually ask for here: jump starts, snow, lifting, directions, walks to the car, printing, and study company. The unglamorous list that works.",
    h1: "What people actually ask for here",
    eyebrow: "Fargo-Moorhead",
    lead: "The list is unglamorous, which is exactly why it works. Nobody needs a hero. They need ten minutes.",
    answer:
      "The most common everyday favors in Fargo-Moorhead are jump starts, snow and berm clearing, heavy lifting during move-in and move-out, directions to a campus building, a walk to the car after dark, printing before a deadline, and study company. All are small, public, and finishable in minutes, and none needs a license.",
    listItems: [
      { name: "Jump start", description: "The metro's signature request. Cold kills marginal batteries in clusters, usually in a store or campus lot.", href: "/help/jump-start" },
      { name: "Snow and berm clearing", description: "The plow leaves a wall, and clearing it is heavy work that not everyone should do alone.", href: "/help/snow-help" },
      { name: "Heavy lifting", description: "Move-in and move-out weeks concentrate this into a few days each August and May.", href: "/help/heavy-lifting" },
      { name: "Directions and finding a building", description: "Several campuses, buildings that share names, and lots that are not where anyone assumes.", href: "/help/directions" },
      { name: "A walk to the car", description: "Late shifts, late library sessions, and long walks across emptied lots after an event.", href: "/help/walk-to-car" },
      { name: "Printing before a deadline", description: "The printer fails at the worst possible hour, reliably, every finals week.", href: "/help/tech-support" },
      { name: "Study company", description: "Someone across the table so you actually stay. Not tutoring, which campus centers do better and for free.", href: "/help/study-buddy" },
    ],
    takeaways: [
      "Everything on the list is small, public, and quick.",
      "The calendar is legible: batteries in winter, boxes in August and May.",
      "Evenings are busiest. Overnight coverage is thin.",
      "Emergencies and paid work are never on the list.",
    ],
    priority: 0.55,
    keywords: ["common help requests Fargo", "what people ask for Fargo", "everyday favors Fargo", "Help Me requests"],
    sections: [
      {
        heading: "Why they are all small",
        body: [
          "Because small is what a neighbor can actually do well. A ten-minute favor asks nothing of anyone's week, needs no license, and ends cleanly with both people going back to their day. Everything larger than that belongs to friends, professionals, or official services.",
        ],
      },
      {
        heading: "The seasonal shape",
        body: [
          "Batteries and snow from November through March. Boxes in August and May. Walks to cars year-round, more in winter when it is dark at five. The metro's help calendar is legible enough to plan around. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
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
        a: "Emergencies, paid work, licensed trades, transportation, and childcare. Those are not what a neighbor app is for.",
      },
      {
        q: "Where do I start?",
        a: "Pick the favor that fits and ask in one sentence.",
      },
    ],
  }),
];
