import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const CORE_PAGES: SeoPage[] = [
  page({
    slug: "explore",
    kind: "hub",
    title: "Explore Help Me in Fargo-Moorhead",
    description:
      "Every Help Me page in one place: cities, neighborhoods, the small stuff, guides, answers, and official resources across Fargo, West Fargo, and Moorhead.",
    h1: "Everything Help Me covers in Fargo-Moorhead",
    eyebrow: "Directory",
    lead: "Start wherever you actually are. A neighborhood. A dead battery. A question about what this app is, and what it is not.",
    answer:
      "Help Me is a place to ask your block for the small stuff in Fargo, West Fargo, and Moorhead. This directory lists every page: cities, neighborhoods, small-favor topics, guides, plain answers, and the official numbers to call when something is more than a neighbor can handle.",
    takeaways: [
      "Cities and neighborhoods explain the places Help Me is launching in.",
      "Help topics cover the small stuff: chargers, directions, jump starts, heavy lifting.",
      "Resource pages point to police, county services, 211, and campus public safety.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.9,
    keywords: ["Help Me directory", "Fargo community help", "Help Me Fargo-Moorhead", "ask your block"],
    sections: [
      {
        heading: "A local app, with local pages",
        body: [
          "Help Me is built for Fargo, West Fargo, and Moorhead, and for the people who share their roads, campuses, and winters. These pages exist so a person, or a search engine, or an answer engine, can find the honest version: how asking for help works, who can give it, and where the official calendars come from.",
          "Nothing here invents a feature the iPhone app does not ship. Helping requires a current review by our team. Live requests show as a rough area about 500 meters wide. Chat is private between the two people. Meeting in public is the default. 911 is still 911.",
        ],
      },
      {
        heading: "How to use this directory",
        body: [
          "If you live here, start with your city or neighborhood. If you want a definition, open the glossary. If you are comparing tools, start with the comparisons and alternatives. If you need an official phone number, open Resources. Those pages send you to police, campus public safety, 211, and county services, not to a stranger in the app.",
        ],
        bullets: [
          "Places: cities, neighborhoods, and campuses.",
          "Product: how it works, helping, ground rules, events, and community.",
          "Help topics: the small stuff, from phone chargers to jump starts in daylight.",
          "Learn: the glossary, guides, and lists.",
          "Answers: one-question pages for the things people type into a search bar.",
          "Seasons: what this metro needs in January, August, and everything between.",
        ],
      },
      {
        heading: "What this directory is not",
        body: [
          "It is not a place to request help. Only the iPhone app creates a request, and only helpers who have been reviewed by our team can accept one. These pages explain; the app does the asking.",
        ],
      },
    ],
    related: ["about", "ground-rules", "how-it-works", "questions", "cities", "help"],
    faqs: [
      {
        q: "Is every page here a place I can request help?",
        a: "No. City and neighborhood pages explain the area, and resource pages point to official services. Only the iPhone app creates a request, and only reviewed helpers can accept one.",
      },
      {
        q: "Does Help Me work outside Fargo-Moorhead?",
        a: "Help Me is launching in Fargo, West Fargo, and Moorhead first, one zone at a time. Event calendars and matching are local, and the app shows what is open near you.",
      },
      {
        q: "Where do I find official phone numbers?",
        a: "On the Resources pages. They list police, county services, 211, and campus public safety offices. For danger, call 911 or your local emergency number.",
      },
    ],
  }),
  page({
    slug: "about",
    kind: "core",
    title: "About Help Me: ask your block",
    description:
      "Help Me is a place to ask your block for the small stuff in Fargo-Moorhead. One sentence, a neighbor can say yes, and you meet in public. It starts with me.",
    h1: "A place to ask your block for the small stuff",
    eyebrow: "About",
    lead: "There's a version of you that doesn't ask. The car won't start, the couch needs two more hands, and somebody on your block might have said yes. You just stopped asking.",
    answer:
      "Help Me is an iPhone app for neighbors in Fargo, West Fargo, and Moorhead. You ask for a hand with something small, a neighbor can say yes or no, and you meet in public. It is a place to ask, not a guarantee that someone comes. It starts with one person deciding to ask.",
    takeaways: [
      "Help Me is for small, everyday favors, not emergencies.",
      "A neighbor can say yes or no, and both are fine.",
      "Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
      "It is in beta on TestFlight for iPhone, launching one zone at a time.",
    ],
    priority: 0.95,
    keywords: ["about Help Me", "Help Me app", "Fargo community app", "It starts with me", "ask your block"],
    sections: [
      {
        heading: "The simple idea",
        body: [
          "You post what you need in a sentence. A neighbor nearby can say yes. A private chat opens, you meet in a public place, you finish the thing, and you get on with your day. That is the whole product.",
          "There is no feed to perform for, no public ranking of who needed help, and no promise that a neighbor is a professional. Help Me is built on a simple bet: neighbors still show up for each other. They just need an easy way to ask and an easy way to say yes.",
        ],
      },
      {
        heading: "Built here, for here",
        body: [
          "Help Me is a Fargo-Moorhead app. Home shows the day's brief and upcoming events. The map is where asking happens. Community opens on calendars from NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo, each linked to the source that published it.",
          "The brand line is \"It starts with me.\" Asking a neighbor for a hand starts with one person deciding to ask, or to say yes. Under it sits the campaign line: \"Your block is closer than you think.\"",
        ],
      },
      {
        heading: "What Help Me is not",
        body: [
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. It is not campus police. It is not a paid marketplace for hired help. It is not a network for children. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["how-it-works", "ground-rules", "helpers", "not-911", "cities", "download"],
    faqs: [
      {
        q: "Who makes Help Me?",
        a: "Help Me is built in Fargo-Moorhead by Help Me LLC. Support is at support@helpme.fyi, and a person reads it.",
      },
      {
        q: "Is the app free?",
        a: "Yes. Help Me is in beta on TestFlight for iPhone (iOS 15 or later) at no charge. It is not a paid marketplace for hired help.",
      },
      {
        q: "Do I need an account?",
        a: "Yes. Requests, private chat, reports, saved events, and account deletion all belong to a person. You can sign up with email or Sign in with Apple.",
      },
    ],
  }),
  page({
    slug: "how-it-works",
    kind: "core",
    title: "How Help Me works: ask, say yes, meet in public",
    description:
      "Ask in one sentence. A neighbor nearby can say yes. You chat privately and meet in a public place. Four steps, for the small stuff in Fargo-Moorhead.",
    h1: "How Help Me works",
    eyebrow: "How it works",
    lead: "Your phone is at 4% on the second floor of the library. One sentence, a neighbor who can say yes, and five minutes in a public place. Here is the whole thing.",
    answer:
      "On Help Me you post one sentence about a small favor, like a phone charger at the library. A neighbor nearby can say yes or no. If someone says yes, a private chat opens between the two of you, and you meet in a public place. Then you mark it done. A request closes on its own after two hours.",
    takeaways: [
      "Ask in one sentence. Details are optional.",
      "Your request shows as a rough area about 500 meters wide, not a pin on you.",
      "Only one live request at a time, and it closes after two hours if nobody says yes.",
      "A private chat opens only between you and the neighbor who said yes.",
    ],
    priority: 0.95,
    keywords: ["how Help Me works", "ask a neighbor for help", "request help Fargo", "Help Me app steps"],
    steps: [
      { name: "Ask", text: "Open the map, choose I need help, pick a category, and add a sentence if you want. A public meeting place label is optional." },
      { name: "A neighbor can say yes", text: "Helpers nearby who are online and suitable for the category can see your request. Or no. Both are fine." },
      { name: "Meet in public", text: "When someone says yes, a private chat opens. You choose what location to share and where to meet. Public places are the default." },
      { name: "Get on with your day", text: "Both of you confirm it is done and exact location sharing ends. Each person can leave a review." },
    ],
    sections: [
      {
        heading: "Ask",
        body: [
          "Open the live map and choose I need help. Pick a category, like a phone charger, directions, a jump start, a study session, tech help, or a lost item, and add a sentence if you want. Details and a public meeting-place label are optional. A category on its own is still easy for a neighbor to understand.",
        ],
      },
      {
        heading: "A neighbor can say yes",
        body: [
          "Help Me privately shows your request to helpers who are online, suitable for the category, recently active, and not blocked by either of you. There is no public feed of your request. Your request shows on the map as a rough area about 500 meters wide, not a pin on you.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Helping needs a current review, and a past one does not carry over.",
        ],
      },
      {
        heading: "Meet in public",
        body: [
          "The first eligible helper to say yes gets the request, and a private chat opens between just the two of you. You decide what location you share and where you meet. Public places are the default. On supported iPhones, precision finding is available only when both people opt in.",
        ],
      },
      {
        heading: "Get on with your day",
        body: [
          "Both people confirm it is done, exact location sharing ends, and each person can leave a review. If nobody says yes within two hours, the request closes and you can try again. You can have only one live request at a time. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["help", "ground-rules", "helpers", "guides/how-to-ask-for-help", "not-911", "cities"],
    faqs: [
      {
        q: "Can I ask without sharing my location?",
        a: "Yes. A request without a location can still be seen by suitable helpers. The map shows a rough area, and exact location is opt-in after someone says yes.",
      },
      {
        q: "Who sees my request?",
        a: "Helpers nearby who are online and suitable for the category, and who you have not blocked. It is not a public timeline.",
      },
      {
        q: "What if nobody says yes?",
        a: "The request closes after two hours and you can try again. For anything urgent, do not wait on the app. Call 911 or your local emergency number.",
      },
      {
        q: "Can I cancel a request?",
        a: "Yes. You can close your request any time, and you can report or block any member at any time.",
      },
    ],
  }),
  page({
    slug: "ground-rules",
    kind: "core",
    title: "Help Me ground rules: location, chat, meeting",
    description:
      "How Help Me handles your location, who can help, private chat, and meeting in public. Plus how to report or block anyone. Help Me is not an emergency service.",
    h1: "The ground rules, said plainly",
    eyebrow: "Ground rules",
    lead: "Asking for help should never cost you your privacy. Here is how location, chat, and meeting up work, and the one sentence we will not bury: Help Me is not an emergency service.",
    answer:
      "Help Me shows a request as a rough area about 500 meters wide, not a pin on you. A private chat opens only between you and the neighbor who said yes. Meeting in public is the default, and you can report or block any member at any time. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
    takeaways: [
      "Your request is a rough area until you choose to share more.",
      "Chat is private between two people.",
      "Meet in public by default, in daylight when you can.",
      "Report or block any member at any time. For danger, call 911.",
    ],
    priority: 0.95,
    keywords: ["Help Me ground rules", "Help Me location privacy", "meet in public", "report and block", "not 911"],
    sections: [
      {
        heading: "Location on your terms",
        body: [
          "Live requests show as a rough area about 500 meters wide, not a pin on you. More precise location moves only after a helper says yes and you agree, and only to that one person. You can stop sharing, and finishing the request ends exact sharing.",
        ],
      },
      {
        heading: "Who can help",
        body: [
          "Anyone can join Help Me. Helping is gated. A helper submits identity evidence from inside the app, and our team reviews it. Until that review is current, they cannot see or accept requests. A past one grants nothing.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks, and nothing on this site says otherwise.",
        ],
      },
      {
        heading: "Private chat, public places",
        body: [
          "A chat opens only between you and the neighbor who said yes. Nobody else is in it. Meet in public by default: a library lobby, a store entrance, a busy lot in daylight. A doorstep is never the place to meet, and a stranger's car is never the meeting spot. For anything with a vehicle, both people stay outside it.",
        ],
      },
      {
        heading: "Tools that stay close",
        body: [
          "You can report or block any member at any time, from inside any request or chat. Reports go to our team privately. If something feels off, leave. Nobody is keeping score, and you do not owe anyone politeness at the cost of your comfort.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["not-911", "guides/meeting-someone-new-in-fargo", "guides/location-privacy", "helpers", "resources/fargo-emergency"],
    faqs: [
      {
        q: "Can a helper see where I live?",
        a: "Not from the open map. Helpers see a rough area. You can meet at a public place instead, and exact location is off until you agree after someone says yes.",
      },
      {
        q: "What if something feels wrong during a meetup?",
        a: "Leave. If you are in danger, call 911 or your local emergency number. In the app, you can report and block, and our team reviews reports privately.",
      },
      {
        q: "Does Help Me run background checks?",
        a: "No. Helpers can apply to be reviewed by our team after they submit identity evidence. That review is not a background check, and Help Me does not run background checks.",
      },
    ],
  }),
  page({
    slug: "not-911",
    kind: "core",
    title: "Help Me is not an emergency service",
    description:
      "Help Me is for small favors in Fargo-Moorhead. If someone is in immediate danger, call 911 or your local emergency number. Here is how to tell the difference.",
    h1: "Help Me is not an emergency service",
    eyebrow: "Not 911",
    lead: "If someone is in immediate danger, call 911 or your local emergency number. Help Me is for the other kind of day: the charger, the directions, the stuck jar.",
    answer:
      "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. Help Me is for small, everyday favors in public places: a phone charger, directions, saving a seat, a jump start in daylight. It does not dispatch police, fire, or medical help.",
    takeaways: [
      "In danger, call 911 or your local emergency number first.",
      "Help Me does not dispatch emergency services.",
      "Help Me is for the small stuff, under five minutes, in public.",
      "Official numbers for Fargo, West Fargo, and Moorhead are on the Resources pages.",
    ],
    priority: 0.9,
    keywords: ["Help Me not 911", "Fargo emergency number", "when to call 911", "non-emergency Fargo"],
    sections: [
      {
        heading: "Call 911 when",
        body: [
          "Use official emergency services for immediate danger, a medical emergency, a fire, a crime in progress, or anyone who cannot wait for a neighbor. Do not wait on an app when you need an official response.",
        ],
        bullets: [
          "Fargo, West Fargo, and Cass County, ND: 911.",
          "Moorhead, Dilworth, and Clay County, MN: 911.",
          "Campus emergencies: the school's public safety number, or 911.",
        ],
      },
      {
        heading: "Use Help Me when",
        body: [
          "The day is stuck but nobody is in danger. Your phone dies at the library. You are circling a building looking for the right door. You need someone to hold your seat. A dead battery in a busy lot in daylight. Two more hands for a couch on move-in weekend. Small, public, and over in minutes.",
        ],
      },
      {
        heading: "Official numbers live on Resources",
        body: [
          "We keep a separate set of pages for Fargo Police, Moorhead Police, West Fargo Police, campus public safety offices, 211, and county services. Those are the pages to bookmark for official help. The app is for a neighbor, not a dispatcher.",
        ],
      },
    ],
    related: ["ground-rules", "resources", "resources/fargo-emergency", "resources/ndsu-safety", "help", "lists/emergency-numbers-fargo-moorhead"],
    faqs: [
      {
        q: "Will Help Me dispatch police?",
        a: "No. Help Me does not dispatch emergency services. In an emergency, call 911 or your local emergency number directly.",
      },
      {
        q: "Can I use both Help Me and 911?",
        a: "If it is an emergency, call 911 first. Use Help Me later for the small stuff, if you still need a hand.",
      },
      {
        q: "What is a non-emergency number in Fargo?",
        a: "Fargo, West Fargo, and Moorhead police each have a non-emergency line. They are listed on the Resources pages, and 211 covers local services.",
      },
    ],
  }),
  page({
    slug: "helpers",
    kind: "core",
    title: "Be the one who says yes: helping on Help Me",
    description:
      "Apply in the app, submit identity evidence, and get reviewed by our team before you can see or accept requests in Fargo-Moorhead. Say yes when it suits you.",
    h1: "Be the one who says yes",
    eyebrow: "Helping",
    lead: "Next time, it could be you. Anyone can join Help Me. Helping means putting your name to it and waiting on a real decision by our team.",
    answer:
      "To help on Help Me, you apply from inside the app and submit identity evidence. Our team reviews it, and helping needs a current review before you can see or accept requests. Helpers can apply to be reviewed by our team. Help Me does not run background checks. Helping is unpaid and optional.",
    takeaways: [
      "Apply from Account in the iPhone app.",
      "Our team reviews identity evidence. That is not a background check.",
      "You say yes when it suits you, and no when it does not.",
      "Helping is not a paid gig, and nobody is keeping score.",
    ],
    priority: 0.9,
    keywords: ["become a helper", "Help Me helper", "volunteer Fargo", "help neighbors Fargo", "helper application"],
    sections: [
      {
        heading: "Apply from Account",
        body: [
          "The application asks which kinds of small favors you can actually help with, when you are available, why you want to help, and for identity evidence. You submit it from inside the app. There is no shortcut from this website.",
        ],
      },
      {
        heading: "A person reviews it",
        body: [
          "A member of our team makes the call. It is not an algorithm and not a self-serve badge. Applications can be pending, accepted, declined, or expired, and a past review never grants access. Helping needs a current review.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Nothing about the review is a promise about anyone's character.",
        ],
      },
      {
        heading: "Say yes when it suits you",
        body: [
          "Once your review is current, you choose when to go online. You can use your location so requests nearby reach you. Going offline, closing the app, or going quiet takes you out of the list. You are a neighbor, not an on-duty employee, and no is always a fine answer.",
          "Meet in public, keep it short, and keep both people outside any car. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["guides/how-to-become-a-helper", "ground-rules", "how-it-works", "for-helpers", "glossary/helper-review", "guides/how-to-be-a-good-helper"],
    faqs: [
      {
        q: "Is helping a paid job?",
        a: "No. Help Me is not a paid marketplace. Helpers are neighbors who applied and were reviewed by our team, and there is no paycheck from the app.",
      },
      {
        q: "Does the review last forever?",
        a: "No. Helping needs a current review. A past one does not grant access.",
      },
      {
        q: "Does Help Me run background checks?",
        a: "No. Helpers can apply to be reviewed by our team after they submit identity evidence. Help Me does not run background checks.",
      },
    ],
  }),
  page({
    slug: "community",
    kind: "core",
    title: "Community on Help Me: what's happening in Fargo-Moorhead",
    description:
      "Calendars from NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo, then local posts. Community is what's happening here, linked to the source.",
    h1: "Fargo-Moorhead is happening",
    eyebrow: "Community",
    lead: "Community opens on Events, on purpose. The first feeling should be that this place has things going on, not that you walked into a blank feed.",
    answer:
      "Help Me Community opens on events from a fixed list of sources: NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo. Every event is linked to the source that published it. Signed-in people can also post, comment, and react, with report and block tools on everything.",
    takeaways: [
      "Events come from six named sources and always link back.",
      "Help Me does not invent events.",
      "Signed-in people can post, comment, and react.",
      "Report and block tools apply everywhere.",
    ],
    priority: 0.85,
    keywords: ["Help Me community", "Fargo events", "Fargo-Moorhead events", "NDSU events", "West Fargo events"],
    sections: [
      {
        heading: "Events, attributed",
        body: [
          "Calendars from NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo are normalized on the server and shown with the source that published them. Tap through for the official page. Attribution is not affiliation or endorsement, and Help Me does not invent events to fill the screen.",
        ],
      },
      {
        heading: "Updates from people here",
        body: [
          "Signed-in people can post, comment, and react. Posts persist. The standard report and block tools apply, and our team reviews reports privately. This is a local conversation, not a national social network.",
        ],
      },
      {
        heading: "What you will see",
        body: [
          "Home shows a short rail of what is coming up. Community is the full calendar, with filters for each source and a search box. You can save an event, open the official page, and see which source published it. Nothing is sorted by popularity, and nothing is ranked by who showed up the most.",
          "Posts from people here sit beside the events. They are local and short. Report and block tools are on every post, and you can leave a conversation any time you want.",
        ],
      },
      {
        heading: "Why it opens on events",
        body: [
          "A neighborhood is not an address. It is the people who show up. Events are the easiest proof that people are showing up: a game, a market, a lecture, a show. Starting there makes asking for a hand feel less like walking into an empty room.",
        ],
      },
    ],
    related: ["events", "cities", "guides/campus-events-fargo-moorhead", "lists/fargo-events-guide", "campuses", "how-it-works"],
    faqs: [
      {
        q: "Are events from Help Me or from the schools?",
        a: "Events come from official sources like NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo. Help Me caches and attributes them. Open the official link for the last word.",
      },
      {
        q: "Can I post in Community?",
        a: "Yes, once you are signed in. You can post, comment, and react, and you can report or block anyone at any time.",
      },
      {
        q: "Does Help Me invent events?",
        a: "No. If a source is empty or down, the app says so instead of filling the screen with made-up listings.",
      },
    ],
  }),
  page({
    slug: "events",
    kind: "core",
    title: "Fargo-Moorhead events: official calendars in Help Me",
    description:
      "NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo calendars in one place, each linked to the source that published it. Never made up.",
    h1: "Campus and city calendars, in one place",
    eyebrow: "Events",
    lead: "Four colleges, a city calendar, and regional Ticketmaster listings, cached, attributed, and never made up.",
    answer:
      "Help Me shows events from a fixed list of sources: NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo. Every event links back to the source that published it. If a source is empty or down, the app says so. Help Me does not scrape random sites or invent listings.",
    takeaways: [
      "Six sources, always attributed.",
      "Ticketmaster listings cover regional shows within about 35 miles of Fargo.",
      "If a feed is empty or down, the app says so.",
      "To add an event, publish it on the official calendar.",
    ],
    priority: 0.85,
    keywords: ["NDSU events", "MSUM events", "Concordia events", "Fargo events", "West Fargo calendar", "Fargo-Moorhead events"],
    sections: [
      {
        heading: "Where the events come from",
        body: [
          "NDSU publishes through MyNDSU. MSUM and Concordia publish campus calendars. M State contributes academic dates. West Fargo publishes a public community calendar. Ticketmaster listings cover regional shows within about 35 miles of Fargo.",
          "Help Me does not scrape random websites. The importer reads a fixed list of official sources. If a feed is empty or down, the app says so, rather than inventing a concert to fill the rail.",
        ],
      },
      {
        heading: "What you can do in the app",
        body: [
          "Filter by source, search, save, and open the official page. Home shows a short rail of upcoming events. Community is the full calendar. Attribution is not affiliation or endorsement.",
        ],
      },
      {
        heading: "What attribution means",
        body: [
          "Every event shows the name of the source and links to its page. That keeps the facts where they belong. If a time or a room changes, the source is the place that updates first, and the link takes you there. Showing a source is not the same as being affiliated with it, and Help Me does not claim to be.",
        ],
      },
      {
        heading: "Adding an event",
        body: [
          "You cannot submit an event on this website. Publish it on the official campus or city calendar and Help Me will pick it up from that source. That keeps the app honest and keeps one place as the source of truth.",
        ],
      },
    ],
    related: ["community", "campuses/ndsu", "campuses/msum", "campuses/concordia", "guides/campus-events-fargo-moorhead", "lists/fargo-events-guide"],
    faqs: [
      {
        q: "Can I submit an event on this website?",
        a: "No. Publish it on the official campus or city calendar. Help Me will pick it up from that source.",
      },
      {
        q: "Which sources does Help Me use for events?",
        a: "NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo. Each event links back to the source that published it.",
      },
      {
        q: "What happens if a calendar is down?",
        a: "The app says so instead of filling the screen. Help Me does not invent events.",
      },
    ],
  }),
  page({
    slug: "for-helpers",
    kind: "audience",
    title: "Help Me for people who already say yes",
    description:
      "If you already jump a neighbor's car or point a lost visitor to the right door, here is how to help through Help Me in Fargo, West Fargo, and Moorhead.",
    h1: "For people who would have stopped anyway",
    eyebrow: "Who it's for",
    lead: "You already point lost people to the right door. You already stop for the dead battery. Help Me is how the person who needs that finds you without calling out across a parking lot.",
    answer:
      "Help Me is for people in Fargo, West Fargo, and Moorhead who would stop for a small favor anyway. You apply from the app and our team reviews your identity evidence. Helpers can apply to be reviewed by our team. Help Me does not run background checks. Helping is unpaid, and you say yes only when it suits you.",
    takeaways: [
      "Apply in the app, then wait on a review by our team.",
      "Help Me is not a paid marketplace.",
      "You choose when to go online and what to say yes to.",
      "Meet in public, and report or block any member at any time.",
    ],
    keywords: ["volunteer Fargo", "help neighbors Fargo", "become a helper", "help a neighbor Moorhead"],
    sections: [
      {
        heading: "This is not a side-hustle listing",
        body: [
          "If you want paid gigs, marketplaces for hired help exist. Help Me is neighbors helping neighbors. You apply, get a current review by our team, go online when you can, meet in public, and mark it done. Nobody is keeping score, and nobody is tracking how fast you say yes.",
        ],
      },
      {
        heading: "What a typical yes looks like",
        body: [
          "A phone charger at a library. Directions to a building across campus. Holding a seat for ten minutes. A jump start in a busy lot in daylight. Two more hands for a couch. These are small, public, and quick. You stay in control of when you are available and which categories you take on.",
          "Both people stay outside the car for anything involving a vehicle. A doorstep is never the place to meet, and a stranger's car is never the meeting spot.",
        ],
      },
      {
        heading: "The review, plainly",
        body: [
          "Helping is gated. A member of our team reviews your identity evidence, and the review has to be current. It is not a background check, and Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["helpers", "guides/how-to-become-a-helper", "ground-rules", "help", "guides/how-to-be-a-good-helper"],
    faqs: [
      {
        q: "Can I help only near my own neighborhood?",
        a: "You choose categories and when you are online. Requests nearby reach you based on recent activity and, when you allow it, your location.",
      },
      {
        q: "Do helpers get paid?",
        a: "No. Help Me is not a paid marketplace. Helpers are neighbors who applied and were reviewed by our team.",
      },
      {
        q: "Can I say no to a request?",
        a: "Always. No is a fine answer. Nobody is keeping score.",
      },
    ],
  }),
  page({
    slug: "for-neighbors",
    kind: "audience",
    title: "Help Me for Fargo-Moorhead neighbors",
    description:
      "A quieter way than a group feed to ask for a jump start, directions, or a hand. One sentence, a neighbor can say yes, and you meet in public.",
    h1: "For neighbors, not for an audience",
    eyebrow: "Who it's for",
    lead: "The group thread will debate for forty comments before anyone picks up a jumper cable. Help Me sends your ask to people nearby who can actually say yes.",
    answer:
      "Help Me is for neighbors in Fargo, West Fargo, and Moorhead who want to ask for a small favor without posting to a feed. You write one sentence, helpers nearby can say yes or no, and a private chat opens between the two of you. You meet in public. There is no audience and nothing to perform for.",
    takeaways: [
      "No feed, no audience, nothing to perform for.",
      "Meet in public. You never need to post your address.",
      "Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
      "For danger, call 911.",
    ],
    keywords: ["Fargo neighbors", "West Fargo neighbors", "Moorhead neighbors", "ask your block"],
    sections: [
      {
        heading: "Why this is not a neighborhood feed",
        body: [
          "Group feeds are broadcasts. Help Me is a request shown to helpers nearby, answered by one person, and finished in a private chat. A dead battery does not need a public debate about which shop is best. It needs a charger and ten minutes.",
        ],
      },
      {
        heading: "Your address stays yours",
        body: [
          "You never need to post where you live. Your request shows as a rough area about 500 meters wide. Meet in a public place, share more location only if you want to, and only after someone says yes. You can report or block any member at any time.",
        ],
      },
      {
        heading: "What a good ask looks like",
        body: [
          "Short and specific. Anyone have a USB-C charger? Library, second floor. Where is the entrance to the north building? Two more hands for a futon, Saturday morning, ground floor. You do not owe anyone an explanation, and nobody owes you a yes. A no is a fine answer, and it costs nothing.",
          "Pick a public place for the handoff, and say where. Daylight helps. Keep it quick, say thanks, and mark it done.",
        ],
      },
      {
        heading: "Say yes, too",
        body: [
          "The same app that lets you ask lets you answer. If you would stop for a small favor anyway, apply to be a helper. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
        ],
      },
    ],
    related: ["cities/fargo", "cities/moorhead", "cities/west-fargo", "how-it-works"],
    faqs: [
      {
        q: "Do I have to share my address?",
        a: "No. Meet in public. Share more location only after someone says yes, and only if you want to.",
      },
      {
        q: "Is it like posting in a neighborhood group?",
        a: "No. There is no public feed. Your request is shown to helpers nearby and answered by one person.",
      },
      {
        q: "What if I need urgent help?",
        a: "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
      },
    ],
  }),
  page({
    slug: "for-newcomers",
    kind: "audience",
    title: "New to Fargo-Moorhead? Ask your block",
    description:
      "Moving to Fargo, West Fargo, or Moorhead? How Help Me fits your first winter, your first week on campus, and a city you do not know yet.",
    h1: "New in town, on purpose",
    eyebrow: "Who it's for",
    lead: "Fargo-Moorhead is easy to like and easy to get stuck in, especially in January, and especially if your family is eight hours away. You do not know who to ask yet. That is the point.",
    answer:
      "If you are new to Fargo, West Fargo, or Moorhead, Help Me is a place to ask the people around you for small things: directions, a phone charger, two more hands for a move, a jump start in daylight. A neighbor can say yes or no, and you meet in public. It is not an emergency service.",
    takeaways: [
      "Two states, two counties, one metro: Cass County, ND and Clay County, MN.",
      "Help Me is for adults and for small, public favors.",
      "Official numbers live on the Resources pages.",
      "In danger, call 911 or your local emergency number.",
    ],
    keywords: ["moving to Fargo", "new to Fargo", "new to Moorhead", "new to West Fargo", "new to NDSU"],
    sections: [
      {
        heading: "What to learn first",
        body: [
          "There are two states here. Fargo and West Fargo sit in Cass County, North Dakota. Moorhead and Dilworth sit in Clay County, Minnesota. 911 works on both sides, but county services do not copy over the river.",
          "NDSU is in Fargo. MSUM and Concordia are in Moorhead, and M State has a Moorhead campus. Downtown Broadway is the walkable core. West Acres is the big mall. Winter is not a metaphor, so a plan for a dead battery is a good first plan.",
        ],
      },
      {
        heading: "What a first week looks like",
        body: [
          "You circle a building twice looking for the right door. Your phone dies at the library. You need two more hands for the futon. These are the moments Help Me is built for. A neighbor who has been lost in the same hallway can say yes in a minute.",
          "Meet in public, in daylight when you can, and keep the handoff short.",
        ],
      },
      {
        heading: "Where the official help is",
        body: [
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. For non-emergency needs, the Resources pages list police, county services, 211, and campus public safety offices by city.",
        ],
      },
    ],
    related: ["guides/new-to-fargo", "cities/fargo", "cities", "lists/things-to-do-in-fargo", "help/local-guide", "resources"],
    faqs: [
      {
        q: "Is Help Me only for college students?",
        a: "No. Help Me is for adults across Fargo-Moorhead: neighbors, newcomers, and families. Helping still requires a current review by our team.",
      },
      {
        q: "Do I need to know anyone to use it?",
        a: "No. That is the point. You ask in one sentence, and a neighbor nearby can say yes.",
      },
      {
        q: "What should I do first in a Fargo winter?",
        a: "Keep a charger and a plan for a dead battery, and know the official non-emergency numbers. The seasons pages cover winter in detail.",
      },
    ],
  }),
  page({
    slug: "for-parents",
    kind: "audience",
    title: "Help Me for parents in Fargo-Moorhead",
    description:
      "What Help Me is, and is not, if your adult child lives near Fargo, West Fargo, or Moorhead. An adult community app for small favors, not an emergency service.",
    h1: "For parents who want the honest version",
    eyebrow: "Who it's for",
    lead: "Your kid is eight hours away and just texted that their phone died at the library. Help Me is for exactly that kind of small problem. Here is the honest version of what it is.",
    answer:
      "Help Me is an app for adults in Fargo, West Fargo, and Moorhead to ask neighbors for small favors in public places. It is not an emergency service, not campus police, and not a network for children. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
    takeaways: [
      "Help Me is for adults, not for children.",
      "It covers small, public favors, not emergencies.",
      "Campus public safety offices are the right call for campus emergencies.",
      "Members can report or block anyone at any time.",
    ],
    keywords: ["parents Fargo", "parents NDSU", "Help Me for families", "college parents Fargo"],
    sections: [
      {
        heading: "If your adult child is in college here",
        body: [
          "Point them to official campus public safety first: NDSU Police, MSUM Public Safety, or Concordia Public Safety. Help Me can cover small things like directions, a phone charger, a hand with a heavy box, or a jump start in daylight. It does not replace those offices, and it does not dispatch anyone.",
        ],
      },
      {
        heading: "How meetings work",
        body: [
          "Meeting in public is the default. The map shows a rough area about 500 meters wide, not a pin on anyone. A private chat opens only between two people. Both people stay outside any car. A doorstep is never the place to meet. You can report or block any member at any time.",
        ],
      },
      {
        heading: "What to be honest about",
        body: [
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks, and nothing here is a guarantee about any person. Help Me is an adult community app. It is not designed for children to meet people they do not know.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["ground-rules", "not-911", "resources/ndsu-safety", "resources/msum-safety", "resources/concordia-safety", "helpers"],
    faqs: [
      {
        q: "Is Help Me for minors?",
        a: "No. Help Me is a community app for adults in Fargo-Moorhead. It is not designed for children to meet people they do not know.",
      },
      {
        q: "Does Help Me replace campus public safety?",
        a: "No. For campus emergencies, call the school's public safety number or 911. Help Me is for small, everyday favors.",
      },
      {
        q: "Does Help Me run background checks on helpers?",
        a: "No. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
      },
    ],
  }),
  page({
    slug: "sitemap-directory",
    kind: "hub",
    title: "Help Me site index",
    description:
      "A readable index of every public Help Me page: cities, neighborhoods, help topics, guides, answers, and official resources for Fargo-Moorhead.",
    h1: "Site index",
    eyebrow: "Index",
    lead: "Every public page on helpme.fyi, grouped the way the site is actually organized. Machines read the XML sitemap. People can use this.",
    priority: 0.3,
    changeFrequency: "weekly",
    noindex: true,
    sections: [
      {
        heading: "Why this page exists",
        body: [
          "Search engines read the XML sitemap. Answer engines read the machine summary. People deserve a table of contents that does not require guessing a URL. If a page is public, it should be reachable from here.",
        ],
      },
    ],
    related: ["explore", "about"],
    faqs: [
      {
        q: "Is this the same as the XML sitemap?",
        a: "No. The XML sitemap is the machine index. This page is a readable table of contents.",
      },
    ],
  }),
];
