import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";
import { GUIDE_PAGES_LOCAL } from "./guides-local";

const REVIEW_LINE = "Helpers can apply to be reviewed by our team. Help Me does not run background checks.";
const REPORT_LINE = "You can report or block any member at any time.";
const NOT_911 = "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.";

/** Guides about Help Me itself: asking, helping, meeting, location. */
const GUIDE_PAGES_PRODUCT: SeoPage[] = [
  page({
    slug: "guides",
    kind: "hub",
    title: "Help Me guides for Fargo-Moorhead",
    description:
      "Practical how-tos for Fargo, West Fargo, and Moorhead: asking for help, helping a neighbor, meeting in public, winter cars, campuses, and getting around.",
    h1: "Guides for the days that stall",
    eyebrow: "Guides",
    lead: "These are not essays about community. They are the steps: how to ask, how to help, how to meet in public, and when to put the phone down and call 911.",
    answer:
      "These guides give practical steps for everyday situations in Fargo, West Fargo, and Moorhead: how to ask a neighbor for help, how to be a good helper, how to meet in public, what to do when a car will not start, and how winter changes things. Help Me is a place to ask your block for the small stuff.",
    takeaways: [
      "Product how-tos: ask, help, meet, location.",
      "Winter and car guides for Fargo-Moorhead conditions.",
      "Campus and newcomer guides for the first week in town.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.8,
    keywords: ["Fargo guides", "how to ask for help Fargo", "Fargo winter guide", "new to Fargo guide", "Help Me guides"],
    sections: [
      {
        heading: "Read the one that matches the hour you are in",
        body: [
          "A jump start at West Acres is not the same problem as a first week at NDSU. A dead battery in January is not a crisis, and a crisis is not a neighbor with jumper cables. Pick the guide for the situation you are in.",
          "Every page describes the iPhone app as it ships: in beta on TestFlight for iOS 15 or later, a review for helpers, a rough area on the map, and a private chat after someone says yes. Nothing is a paid gig, and nothing dispatches police.",
        ],
      },
      {
        heading: "What these guides will not do",
        body: [
          "They will not invent a background check Help Me does not run. They will not tell you to handle an emergency in the app. They will not pretend a Cass County office works for a Clay County problem if you copy a number across the river.",
        ],
        bullets: [
          "Product how-tos: ask, help, report, location.",
          "Place how-tos: Fargo, West Fargo, downtown at night, winter.",
          "Newcomer how-tos: NDSU, MSUM, Concordia, M State, a first week.",
        ],
      },
    ],
    related: ["how-it-works", "ground-rules", "resources", "lists", "explore", "not-911"],
    faqs: [
      {
        q: "Is a guide the same as asking for help?",
        a: "No. Guides explain. Requests exist only in the iPhone app, and only helpers with a current review can say yes.",
      },
      {
        q: "Do I need the app to read these?",
        a: "No. Read them on the web. Open the app when you actually need a neighbor.",
      },
      {
        q: "Are the phone numbers in guides current?",
        a: "Official numbers can change. Confirm on the official site before you rely on one, and call 911 for emergencies.",
      },
    ],
  }),
  page({
    slug: "guides/how-to-ask-for-help",
    kind: "guide",
    title: "How to ask for help on Help Me: the four steps",
    description:
      "Post one sentence, not a performance. How to ask a neighbor for a small favor in Fargo, West Fargo, or Moorhead, from the first tap to done.",
    h1: "How to ask for help without an audience",
    eyebrow: "Guide",
    lead: "You do not owe a group thread a speech. One sentence is enough. Here is the whole path from tap to done.",
    answer:
      "To ask for help on Help Me, open the live map, choose I need help, pick a category, and add a sentence if you want. A neighbor nearby can say yes, a private chat opens, and you meet in public. Exact location stays off until you agree. A request closes on its own after two hours if nobody says yes.",
    steps: [
      { name: "Ask", text: "Open the live map, choose I need help, pick a category, and add one sentence. A public meeting-place label is optional." },
      { name: "Wait for a yes", text: "Helpers nearby who are online and suitable can see your request privately. There is no public feed." },
      { name: "Chat", text: "The first helper to say yes opens a private chat. Nobody else is in it." },
      { name: "Meet in public", text: "Pick a public place. Exact location stays off until you agree after a yes." },
    ],
    takeaways: [
      "One sentence is enough.",
      "Meet in public. Exact location is optional.",
      "A request closes after two hours if nobody says yes.",
      "If it is an emergency, call 911, not the app.",
    ],
    priority: 0.75,
    keywords: ["how to ask for help", "ask a neighbor Fargo", "Help Me how to", "request help Moorhead"],
    sections: [
      {
        heading: "Before you open the map",
        body: [
          "If anyone is in danger, injured, or watching a crime, call 911. Help Me is for the stuck day: a dead battery, a walk to the lot, a printer, a sofa that will not turn the stair, directions to a hall you have never seen.",
          "You need an account, with email or Sign in with Apple, and an iPhone on iOS 15 or later. The app is in beta on TestFlight. You can have only one live request at a time.",
        ],
      },
      {
        heading: "The four taps",
        body: [
          "Open the live map. Choose I need help. Pick a category. Add a sentence if you want one. A public meeting-place label is optional, and a category on its own still makes sense to a helper.",
        ],
        bullets: [
          "Ask: one sentence is enough. You are not applying for a grant.",
          "Wait: helpers nearby can see a short-lived private offer. There is no public feed.",
          "Chat: the first helper to say yes opens a private thread.",
          "Meet: public place by default. Exact location is off until you agree.",
        ],
      },
      {
        heading: "What helpers actually see",
        body: [
          "They see a rough area about 500 meters wide, not your driveway. Matching considers helpers who are online, suitable for the category, recently active, and not blocked by either of you. If nobody says yes within two hours, the request closes and you can try again.",
          "Meet in public, do the thing, and both of you confirm it is done. Exact location sharing ends. You can leave a review. " + REPORT_LINE + " " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["how-it-works", "guides/meeting-someone-new-in-fargo", "guides/meet-in-public-fargo", "guides/location-privacy", "ground-rules", "download"],
    faqs: [
      {
        q: "Can I ask without sharing my location?",
        a: "Yes. A request without a location can still be seen by suitable helpers. The map shows a rough area, and exact location is opt-in after a yes.",
      },
      {
        q: "Who sees the request?",
        a: "Helpers nearby who are online and suitable for the category. It is not a public timeline.",
      },
      {
        q: "What if nobody says yes?",
        a: "The request closes after two hours and you can post again. There is no promised response time.",
      },
    ],
  }),
  page({
    slug: "guides/how-to-become-a-helper",
    kind: "guide",
    title: "How to become a Help Me helper: the application",
    description:
      "Apply from Account in the app, submit identity evidence, and get reviewed by our team. How the helper application works in Fargo-Moorhead.",
    h1: "How to become a helper",
    eyebrow: "Guide",
    lead: "Anyone can join Help Me. Not everyone can help. Putting your name on it is the point.",
    answer:
      "To become a helper, apply from Account in the Help Me iPhone app and submit identity evidence. A member of our team reviews it, and helping needs the review to be current. Helpers can apply to be reviewed by our team. Help Me does not run background checks. Helping is unpaid.",
    steps: [
      { name: "Join and open Account", text: "Create an account in the iPhone app and open the helper application from Account." },
      { name: "Tell us what you can help with", text: "Choose the small favors you are comfortable with and when you are usually around." },
      { name: "Submit identity evidence", text: "Provide what the app asks for. A person on our team reviews it." },
      { name: "Wait on a decision", text: "The review is not automatic. Helping needs it to be current." },
    ],
    takeaways: [
      "Apply in the app. There is no web form.",
      "Our team reviews identity evidence. It is not a background check.",
      "A past review grants nothing. It has to be current.",
      "Helping is unpaid, and no is always a fine answer.",
    ],
    priority: 0.7,
    keywords: ["become a Help Me helper", "helper application", "volunteer Fargo", "help neighbors Fargo"],
    sections: [
      {
        heading: "This is not a side-hustle listing",
        body: [
          "Help Me is not a paid marketplace. There is no paycheck from the app, no hourly rate, and no customer to invoice. If you already jump a neighbor's car or walk someone to the ramp, this is how the person who needs that finds you without calling across a parking lot.",
        ],
      },
      {
        heading: "Apply from Account",
        body: [
          "The application lives inside the iPhone app. There is no form on this site and no shortcut around the review. It asks what you can help with, when you tend to be around, and for identity evidence.",
        ],
        bullets: [
          "Submit identity evidence from the app. A person on our team reviews it.",
          "Applications can be pending, accepted, declined, or expired.",
          "A past review grants nothing. It has to be current.",
          "It is not a criminal background check, and we do not advertise one.",
        ],
      },
      {
        heading: "After a yes from our team",
        body: [
          "You choose when to go online. You can use your location so offers are genuinely nearby. Going offline, closing the app, accepting a request, or going quiet takes you out of the list. When an offer arrives, read it, and accept only if you can show up in public. Chat is private, and you meet where other people can see you.",
          "Decline anything that sounds like an emergency, anything that wants to happen in a dark driveway instead of a store entrance, and anything that asks you to be a mechanic, a locksmith, a counselor, or an officer. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["helpers", "for-helpers", "guides/meeting-someone-new-in-fargo", "ground-rules", "guides/how-to-ask-for-help", "download"],
    faqs: [
      {
        q: "Can I apply from this website?",
        a: "No. Apply from Account in the iPhone app. A person on our team reviews identity evidence there.",
      },
      {
        q: "Does a .edu email skip the review?",
        a: "No. A campus address is not a helper badge. Everyone waits on a current review.",
      },
      {
        q: "Can I help only near my own campus?",
        a: "You choose categories and when you are online. Requests nearby reach you based on recent activity and, when you allow it, your location.",
      },
    ],
  }),
  page({
    slug: "guides/meeting-someone-new-in-fargo",
    kind: "guide",
    title: "How to meet someone new in Fargo-Moorhead, step by step",
    description:
      "Meet in public, keep exact location off until you agree, and use report and block. How to meet a neighbor from Help Me, plus when to call 911 instead.",
    h1: "How to meet someone new, with your head on straight",
    eyebrow: "Guide",
    lead: "Asking for help should never cost you your privacy, and it should never be the tool you reach for in a crisis.",
    answer:
      "To meet someone new through Help Me, pick a public, busy place, in daylight when you can, and keep exact location off until you agree to share it. Tell a friend where you are going, keep report and block close, and leave if anything feels off. If you are in danger, call 911 first.",
    takeaways: [
      "Meet in public, in a lit, populated place.",
      "Exact location is optional and one person only.",
      "Tell a friend where you are going.",
      "Leave if anything feels off. In danger, call 911.",
    ],
    priority: 0.7,
    keywords: ["meet a neighbor Fargo", "meeting someone new Fargo", "meet in public Fargo", "Help Me meeting tips"],
    sections: [
      {
        heading: "The order of operations",
        body: [
          "Danger, injury, fire, a crime in progress: 911. A campus emergency: campus public safety for that school, or 911. Everything else on this page assumes nobody is in danger.",
        ],
      },
      {
        heading: "Keep the map honest",
        body: [
          "Requests show as a rough area about 500 meters wide. Precise location moves only after someone says yes and you agree, and only to that person. You can stop sharing, and completion ends exact sharing automatically. On supported iPhones, precision finding needs both people to opt in. You never owe anyone a house pin. A store entrance is a complete sentence.",
        ],
        bullets: [
          "Meet in public, lit, populated ground.",
          "Tell a friend where you are going.",
          "Keep report and block close. They are in every request.",
          "Leave the moment something feels off. Politeness is not a plan.",
        ],
      },
      {
        heading: "Who says yes, and what that means",
        body: [
          "Only people with a current review can see or accept requests. That is identity evidence plus a human decision. " + REVIEW_LINE + " Treat a helper as a neighbor who was willing to stop, not as a professional who was hired.",
        ],
      },
      {
        heading: "If it goes sideways",
        body: [
          "Walk away. Call 911 if you need an official response. In the app, report and block. Our team can act on reports. Email support@helpme.fyi if you want a person on our side afterward. " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["ground-rules", "not-911", "guides/meet-in-public-fargo", "guides/location-privacy", "resources/fargo-emergency", "questions/what-happens-when-you-meet-someone"],
    faqs: [
      {
        q: "Can a helper see my house from the map?",
        a: "Not from the open request. They see a rough area. Exact location is off until you agree after a yes, and you can meet at a public place instead.",
      },
      {
        q: "Does a review mean helpers get background checks?",
        a: "No. Our team reviews identity evidence. Help Me does not run background checks.",
      },
      {
        q: "Should I stay if I feel uneasy?",
        a: "No. Leave. Call 911 if you are in danger. Report and block in the app once you are somewhere you feel comfortable.",
      },
    ],
  }),
  page({
    slug: "guides/meet-in-public-fargo",
    kind: "guide",
    title: "Where to meet in public in Fargo-Moorhead",
    description:
      "Public meeting places in Fargo, West Fargo, and Moorhead: unions, libraries, store entrances, malls, and lit lots. Never a doorstep or a stranger's car.",
    h1: "Meet in public. That is the whole rule.",
    eyebrow: "Guide",
    lead: "A store entrance has witnesses. A basement apartment has a door that closes. Choose the entrance.",
    answer:
      "In Fargo-Moorhead, a good public meeting place is one where other people can see you, the lights work, and you can leave easily: a campus union, a library lobby, a store entrance, a mall, or a lit lot in daylight. Put the place in your request and keep exact location off. Never meet at a doorstep or in a stranger's car.",
    takeaways: [
      "Pick a place where other people can see you.",
      "Name the place in the request. You do not have to share exact location.",
      "Places that fail the test: doorsteps, alleys, and a stranger's car.",
      "If someone pushes to move a public plan somewhere private, leave and report.",
    ],
    priority: 0.7,
    keywords: ["public meeting places Fargo", "meet in public Moorhead", "where to meet Fargo", "Help Me meeting place"],
    sections: [
      {
        heading: "What public means here",
        body: [
          "Other people can see you. The lights work. You can leave without asking anyone to unlock something. You can name the place in one label a neighbor will recognize.",
        ],
        bullets: [
          "Campus unions: NDSU Memorial Union and the campus centers at MSUM and Concordia.",
          "Libraries: Fargo Public Library downtown, Carlson, Northport, and campus libraries.",
          "Retail: West Acres, store entrances, and big-box entrances with cameras and foot traffic.",
          "Downtown: Broadway sidewalks and lobbies in Fargo, and Center Avenue in Moorhead.",
        ],
      },
      {
        heading: "How to put it in the request",
        body: [
          "Type the label. You do not have to share exact location at all. If you later agree to share it, you can still walk to the public place and do the thing there: jump the car in the lot beside the store, not in a garage attached to a house.",
        ],
      },
      {
        heading: "Places that fail the test",
        body: [
          "Residential streets where porch lights are the only lights. Isolated trailheads. Unstaffed ramps at 2 a.m. when you have another option. Your first-week apartment. If someone pushes to change a public plan into a private one, that is information. Leave, and report. " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["lists/public-meeting-places-fargo", "guides/meeting-someone-new-in-fargo", "guides/location-privacy", "lists/study-spots-fargo", "guides/downtown-fargo-at-night", "ground-rules"],
    faqs: [
      {
        q: "What if the help has to happen at a car?",
        a: "Use a public lot, and meet at the entrance first if you want. Do not turn a jump start into a house call.",
      },
      {
        q: "Is a park public enough?",
        a: "In daylight with other people, sometimes. After dark, pick an indoor public place or a staffed lot. Gooseberry Park and river trails are lovely and a poor choice at midnight.",
      },
      {
        q: "Do I have to share my address?",
        a: "No. Name a public place and leave your address out of it.",
      },
    ],
  }),
  page({
    slug: "guides/location-privacy",
    kind: "guide",
    title: "Location privacy on Help Me: what is shared and when",
    description:
      "Help Me shows a rough area about 500 meters wide, not a pin on you. Exact location is shared only after a yes and your consent. Here is how it works.",
    h1: "How location works, and how it does not",
    eyebrow: "Guide",
    lead: "The map is supposed to be useful without being a tracker. That is a design choice, not a slogan.",
    answer:
      "Help Me shows your request as a rough area about 500 meters wide, not a pin on you. Precise location is shared only after a neighbor says yes and you agree, and only with that one person. You can stop sharing at any time, and finishing the request ends exact sharing automatically.",
    takeaways: [
      "Requests are a rough area, not a pin.",
      "Exact location is optional, one person, and ends with the request.",
      "You can complete a request by naming a public place.",
      "The Privacy Policy is the legal version of this guide.",
    ],
    priority: 0.65,
    keywords: ["Help Me location privacy", "approximate location app", "location sharing Fargo", "privacy neighbor app"],
    sections: [
      {
        heading: "What other people see while a request is open",
        body: [
          "A rounded area about 500 meters wide. That is not a dot on your person, not a house number, and not a stall in a ramp. Helpers who see your request privately get that rough area plus whatever you typed.",
        ],
      },
      {
        heading: "Exact location is a later, smaller door",
        body: [
          "Precise location moves only after a neighbor says yes and you agree, and only to that person. You can refuse. You can stop sharing. Completion ends exact sharing automatically.",
        ],
        bullets: [
          "You can finish a request by naming a public place and walking there.",
          "On supported iPhones, precision finding needs both people to opt in.",
          "A request without a location can still be seen by suitable helpers.",
        ],
      },
      {
        heading: "What we do not do",
        body: [
          "We do not publish your request as a public pin. We do not give every helper in town a live trail. We do not need your home address to jump a battery in a store lot.",
        ],
      },
      {
        heading: "If you want the legal language",
        body: [
          "The Privacy Policy is the contract-shaped version of this guide. This one is the human version. Delete your account from Account in the app by typing DELETE if you want your data gone. Questions go to support@helpme.fyi. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["ground-rules", "legal/privacy", "guides/meeting-someone-new-in-fargo", "guides/meet-in-public-fargo", "how-it-works", "questions/who-can-see-my-location"],
    faqs: [
      {
        q: "Can I turn off exact sharing after I said yes?",
        a: "Yes. Stop sharing and meet in public anyway. Completion also ends exact sharing.",
      },
      {
        q: "Does the rough area show my apartment building?",
        a: "It is about 500 meters, not a building outline. Still prefer a public meeting label over anything that reads like a home.",
      },
      {
        q: "Can I ask without any location at all?",
        a: "Yes. Describe where to find you in your own words, in a public place.",
      },
    ],
  }),
  page({
    slug: "guides/how-to-be-a-good-helper",
    kind: "guide",
    title: "How to be a good helper on Help Me",
    description:
      "Show up when you say you will, meet in public, keep it short, and know when to decline. What good helping looks like in Fargo-Moorhead.",
    h1: "How to be the person people are glad showed up",
    eyebrow: "Guide",
    lead: "The bar is not heroism. It is reliability and a short conversation in a parking lot.",
    answer:
      "Good helping is simple: say yes only to what you can actually reach, tell the person when you will arrive and then arrive, meet in the public place you agreed on in chat, do the one thing, and go. Decline anything outside small, non-emergency favors, never accept payment, and use report and block if something feels wrong.",
    takeaways: [
      "Say yes only to what you can genuinely reach in time.",
      "Say when you will arrive, and stick to it.",
      "Decline emergencies, paid tasks, and anything that feels unsafe.",
      "Never accept payment. There are no payments in the app.",
    ],
    priority: 0.55,
    keywords: ["be a good helper", "helper tips Help Me", "volunteer neighbor tips Fargo"],
    sections: [
      {
        heading: "Before you say yes",
        body: [
          "Look at where it is and how you would get there. Saying yes to a request across town in a snowstorm because you feel bad saying no leaves someone waiting longer than if you had passed. Offers are voluntary, and no is a complete answer.",
        ],
      },
      {
        heading: "During",
        body: [
          "Keep it in the app chat until you meet. Show up where you said. Do the thing that was asked, not a list of extras nobody requested. If the request turns out to be bigger than described, like a full move, a repair, or anything needing a license, say so kindly and stop.",
        ],
        bullets: [
          "A public meeting place, every time.",
          "Short, specific, finished.",
          "No payment, no tips, no side arrangements.",
          "Report and block are available to you too.",
        ],
      },
      {
        heading: "After",
        body: [
          "Confirm completion so the request closes and exact location sharing ends. Leave a review if you want. Then let it go. There is no scoreboard here, and nobody is counting. " + REVIEW_LINE + " " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["helpers", "for-helpers", "guides/how-to-become-a-helper", "questions/how-do-i-become-a-helper", "glossary/completion-and-reviews", "questions/what-should-i-not-ask-for"],
    faqs: [
      {
        q: "Can I back out after saying yes?",
        a: "Plans change. Say so in the chat quickly so the person can post again instead of waiting on you.",
      },
      {
        q: "What if someone offers me money?",
        a: "Decline. There are no payments in Help Me, and accepting cash turns a neighbor favor into something else.",
      },
      {
        q: "What if the favor is bigger than described?",
        a: "Say so kindly and stop. Point them to a professional or an official service.",
      },
    ],
  }),
  page({
    slug: "guides/asking-for-help-when-you-hate-asking",
    kind: "guide",
    title: "How to ask for help when you hate asking",
    description:
      "For people who would rather freeze than ask. Why asking is smaller than it feels, and how to make the request in one sentence without explaining yourself.",
    h1: "For people who would rather walk home in the cold",
    eyebrow: "Guide",
    lead: "Upper Midwest culture is generous with help and terrible at asking for it. Both halves of that are true at once.",
    answer:
      "Asking on Help Me is smaller than it feels. No audience sees it, no explanation is required, and a category on its own is enough. Pick the category, name a public place, and send it. If nobody says yes, the request closes quietly after two hours, and nobody was watching.",
    takeaways: [
      "There is no public feed. Only a few helpers see your request.",
      "A category on its own is valid. Explanations are optional.",
      "An unanswered request closes on its own, privately.",
      "Helpers volunteer. You are not imposing on anyone assigned to you.",
    ],
    priority: 0.55,
    keywords: ["hate asking for help", "asking for help Minnesota nice", "ask a neighbor", "It starts with me"],
    sections: [
      {
        heading: "What you are actually afraid of",
        body: [
          "Usually it is not the help. It is the audience: the group thread where forty people comment, the group chat where you will have to explain, the feeling of being someone with a problem. Help Me removes exactly that part. There is no feed, no comments, and no record for anyone to scroll later.",
          "It starts with one person deciding to ask. The block is closer than you think, and most people would say yes to a five-minute favor if they knew.",
        ],
      },
      {
        heading: "How small the ask really is",
        body: [
          "One sentence. A category. A public place. That is it. You do not have to say why, and you do not owe anyone a story. A no costs nothing, and a yes takes five minutes.",
        ],
        bullets: [
          "Anyone have a charger? Library, second floor.",
          "Where is the entrance to the north building?",
          "Two more hands for a futon, ground floor, Saturday.",
        ],
      },
      {
        heading: "If you still hesitate",
        body: [
          "Ask for the smallest thing first, and ask in the daytime. Notice that being asked is rarely a burden for the person who says yes. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          NOT_911,
        ],
      },
    ],
    related: ["guides/how-to-ask-for-help", "about", "for-neighbors", "how-it-works", "questions/what-can-i-ask-for", "help"],
    faqs: [
      {
        q: "Will people think I am needy?",
        a: "No one sees your request except a few helpers nearby, and most are glad to be asked for something small.",
      },
      {
        q: "What if I feel awkward after?",
        a: "Say thanks and leave. A thank you is the whole transaction.",
      },
      {
        q: "What is the smallest thing I can ask for?",
        a: "A phone charger, directions, or a held door. All fit.",
      },
    ],
  }),
];

export const GUIDE_PAGES: SeoPage[] = [...GUIDE_PAGES_PRODUCT, ...GUIDE_PAGES_LOCAL];
