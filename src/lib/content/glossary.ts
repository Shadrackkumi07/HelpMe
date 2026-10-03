import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";
import { GLOSSARY_LOCAL } from "./glossary-local";

const REVIEW_LINE = "Helpers can apply to be reviewed by our team. Help Me does not run background checks.";
const REPORT_LINE = "You can report or block any member at any time.";
const NOT_911 = "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.";

/** Product words. Each one is a plain definition that matches the shipping iPhone app. */
const GLOSSARY_PRODUCT: SeoPage[] = [
  page({
    slug: "glossary",
    kind: "hub",
    title: "Help Me glossary: plain definitions",
    description:
      "Plain definitions for Help Me words, like helper review, approximate location, and private chat, plus the Fargo-Moorhead terms people ask about.",
    h1: "Words we actually mean",
    eyebrow: "Glossary",
    lead: "Marketing likes fog, and this metro does not. If Help Me uses a word like helper, area, or chat, this is the honest version, not the brochure version.",
    answer:
      "The Help Me glossary defines the app's words in plain language: helper review, approximate location, private chat, help request, and more, plus local terms like snow emergency and block heater. If a feature is not in the shipping iPhone app, it is not defined here. Help Me is a place to ask your block for the small stuff.",
    takeaways: [
      "Each entry is a short definition, then a little teaching.",
      "Only features in the shipping iPhone app are defined.",
      "Local terms cover Fargo-Moorhead winters and services.",
      "Help Me is not an emergency service.",
    ],
    priority: 0.7,
    keywords: ["Help Me glossary", "Help Me definitions", "Help Me terms", "Fargo winter terms"],
    sections: [
      {
        heading: "A glossary, not a slogan list",
        body: [
          "These pages exist so a person in Fargo, West Fargo, or Moorhead can look up what the app actually does. A helper review is not a background check. Approximate location is not a pin on your house. Campus events are not invented by us. 911 is still 911.",
          "Each entry gives a one- or two-sentence meaning first. The sections under it explain the boundary: what the word includes, what it refuses, and which page to open next.",
        ],
      },
      {
        heading: "How the entries are grouped",
        body: [
          "Product words explain the app. Trust words explain who can help and how. Place words explain the metro. Winter words explain what a Fargo-Moorhead January asks of a car and a person.",
        ],
        bullets: [
          "Product: help request, live map, daily brief, online status.",
          "Helping: helper review, identity evidence, completion and reviews.",
          "Privacy and meeting: approximate location, private chat, meet in public, report and block.",
          "Local: snow emergency, block heater, wind chill, 211, 511, and 988.",
        ],
      },
      {
        heading: "If you only remember three things",
        body: [
          "Help Me is a place to ask your block for the small stuff. Helpers can apply to be reviewed by our team, and Help Me does not run background checks. Help Me is not an emergency service, so in danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["how-it-works", "ground-rules", "helpers", "questions", "support/help", "explore"],
    faqs: [
      {
        q: "Is the glossary the same as the Help Center?",
        a: "No. The Help Center answers practical questions. The glossary defines words. Use both, and email support@helpme.fyi if something is still unclear.",
      },
      {
        q: "Do these definitions apply outside Fargo-Moorhead?",
        a: "The product is built for Fargo-Moorhead. Matching, calendars, and these pages describe that metro.",
      },
      {
        q: "Can a glossary entry invent a feature?",
        a: "No. If it is not in the shipping iPhone app, it does not get a definition that pretends otherwise.",
      },
    ],
  }),
  page({
    slug: "glossary/helper-review",
    kind: "glossary",
    title: "Helper review: what it is and what it is not",
    description:
      "A helper review is a current decision by the Help Me team on a helper's identity evidence. Anyone can join. Helping is gated. It is not a background check.",
    h1: "Helper review",
    eyebrow: "Glossary",
    lead: "Anyone can join Help Me. Not everyone can help. The review is a current decision by a person, not a costume.",
    answer:
      "A helper review is a decision by the Help Me team about a helper's identity evidence. Anyone can join and ask, but helping needs a review that is current. A past review grants nothing. It is not a criminal background check, and Help Me does not run background checks.",
    term: {
      name: "Helper review",
      shortDefinition:
        "A helper review is a current decision by the Help Me team on identity evidence a helper submits. Helping needs it to be current. It is not a criminal background check.",
    },
    takeaways: [
      "Anyone can join. Helping is gated.",
      "A person reviews identity evidence and decides.",
      "A review has to be current, and a past one grants nothing.",
      "It is not a background check or a professional credential.",
    ],
    priority: 0.7,
    keywords: ["Help Me helper review", "helper application", "become a helper", "identity evidence"],
    sections: [
      {
        heading: "What the gate actually is",
        body: [
          "A helper applies from Account in the app. The application asks about which small favors they can help with, availability, and identity evidence. A member of our team reviews it and makes the call. Applications can be pending, accepted, declined, or expired, and a past label never grants access.",
          "Until a review is current, a person cannot see or accept requests. That is the point of the gate. Fewer helpers is better than a self-serve badge.",
        ],
      },
      {
        heading: "What it is not",
        body: [
          "It is not a criminal background check. It is not a professional license. It is not employment, and Help Me is not a paid marketplace. Helpers are neighbors, not contractors, not first responders, and not a substitute for campus police. " + REVIEW_LINE,
        ],
      },
      {
        heading: "Once your review is current",
        body: [
          "You choose when to go online. You can use your location so nearby requests reach you. Going offline, closing the app, or going quiet takes you out of the list. You are a neighbor, not an on-duty employee. " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["helpers", "glossary/identity-evidence", "glossary/online-status", "for-helpers", "ground-rules", "questions/does-help-me-run-background-checks"],
    faqs: [
      {
        q: "Does the review last forever?",
        a: "No. Helping needs a current review. A past one grants nothing.",
      },
      {
        q: "Is helping a paid job?",
        a: "No. Do not expect a paycheck from the app. Marketplaces built for paid work exist elsewhere.",
      },
      {
        q: "Can I help the day I join?",
        a: "You can join and ask right away. You cannot see or accept requests until our team reviews your application and the review is current.",
      },
    ],
  }),
  page({
    slug: "glossary/help-request",
    kind: "glossary",
    title: "Help request: how one works on Help Me",
    description:
      "A help request is a short, private ask from the live map. Helpers nearby can say yes. There is no public feed, one live request at a time, two-hour window.",
    h1: "A help request",
    eyebrow: "Glossary",
    lead: "One sentence is enough: a charger, directions, a hand with something heavy. No explaining yourself to a timeline.",
    answer:
      "A help request is a short ask posted from the live map in Help Me. Helpers nearby who are online and suitable can see it privately, and the first to say yes gets it. There is no public feed, you can have only one live request at a time, and it closes on its own after two hours.",
    term: {
      name: "Help request",
      shortDefinition:
        "A help request is a short ask posted from the live map. Helpers nearby can say yes privately. There is no public feed, only one live request at a time, and it closes after two hours.",
    },
    takeaways: [
      "One sentence is enough. Details are optional.",
      "No public feed of your request.",
      "One live request at a time.",
      "It closes after two hours if nobody says yes.",
    ],
    priority: 0.7,
    keywords: ["Help Me request", "one live request", "post a request Help Me", "request help Fargo"],
    sections: [
      {
        heading: "What you actually post",
        body: [
          "Open the live map and choose I need help. Pick a category, like a phone charger, directions, a jump start, a study session, or tech help, and add a sentence if you want. Details and a public meeting-place label are optional. A category on its own still makes sense to a neighbor.",
        ],
      },
      {
        heading: "Who sees it",
        body: [
          "Not a group feed and not a neighborhood thread. Help Me privately shows your request to helpers who are online, suitable for the category, recently active, and not blocked by either person. The first one to say yes gets the request. Everyone else does not.",
        ],
        bullets: [
          "Helpers must have a current review.",
          "Your request shows as a rough area about 500 meters wide.",
          "You can report or block any member at any time.",
        ],
      },
      {
        heading: "How long it lives",
        body: [
          "You can have only one live request at a time. If nobody says yes within two hours, it closes and you can try again. After a yes, you chat privately, meet in public, and both of you confirm it is done. Exact location sharing, if you turned it on, ends then.",
          NOT_911,
        ],
      },
    ],
    related: ["how-it-works", "glossary/live-map", "help", "glossary/completion-and-reviews", "questions/how-long-does-a-request-stay-open"],
    faqs: [
      {
        q: "Can I ask without sharing my location?",
        a: "Yes. A request without a location can still be seen by suitable helpers. The map shows a rough area, and exact location is opt-in after a yes.",
      },
      {
        q: "Who sees my request?",
        a: "Helpers nearby who are online and suitable for the category. It is not a public timeline.",
      },
      {
        q: "What if nobody says yes?",
        a: "After two hours the request closes and you can post again. There is no promised response and no dispatch.",
      },
    ],
  }),
  page({
    slug: "glossary/approximate-location",
    kind: "glossary",
    title: "Approximate location: the rough 500 meter area",
    description:
      "Help Me shows a request as a rough area about 500 meters wide, not a pin on you. Precise location is opt-in after a yes and ends at completion.",
    h1: "Approximate location",
    eyebrow: "Glossary",
    lead: "Asking for help should never cost you your driveway. The map shows an area. A pin is a later, optional, two-person decision.",
    answer:
      "Approximate location means Help Me shows your request as a rough area about 500 meters wide, never a pin on you. Precise location is shared only after a neighbor says yes and you agree, and only with that one person. When the request is complete, exact sharing ends automatically.",
    term: {
      name: "Approximate location",
      shortDefinition:
        "Requests show as a rough area about 500 meters wide, not a pin on you. Precise location is shared only after a yes and only with that person.",
    },
    takeaways: [
      "The default is a rough area about 500 meters wide.",
      "Precise location needs a yes and your consent.",
      "Only the neighbor who said yes receives it.",
      "Completion ends exact sharing.",
    ],
    priority: 0.7,
    keywords: ["approximate location", "coarse area", "Help Me location privacy", "500 meters"],
    sections: [
      {
        heading: "What other people see",
        body: [
          "On the open map, a request is a rounded area about 500 meters wide, not your apartment door, not a residence-hall room, not a parked car's exact stall. A helper decides whether they can be useful from that picture plus your category and sentence.",
          "Treat 500 meters as a neighborhood-scale blur, not a surveyed circle. It is a privacy default, not decoration.",
        ],
      },
      {
        heading: "When precision is even possible",
        body: [
          "Precise location moves only after a neighbor says yes and you agree, and only to that person. You can stop sharing. Completion ends exact sharing automatically. You can also skip precision entirely and meet at a public place you named in the request.",
        ],
        bullets: [
          "Precision is opt-in, never default.",
          "It goes to one person, not to every helper.",
          "On supported iPhones, precision finding needs both people to opt in.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "A help app that pinned your exact position for strangers would be a stalking tool with a friendly icon. A rough area keeps you findable by a neighbor and unfindable by anyone else. " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["ground-rules", "glossary/nearby-interaction", "glossary/live-map", "guides/location-privacy", "how-it-works", "questions/who-can-see-my-location"],
    faqs: [
      {
        q: "Can a helper see my house?",
        a: "Not from the open map. They see a rough area. Exact location is off until you agree after a yes, and you can meet at a public place instead.",
      },
      {
        q: "Is 500 meters exact?",
        a: "It is a rough area of about 500 meters. Treat it as a blur, not a measured circle.",
      },
      {
        q: "What about precision finding on iPhone?",
        a: "On supported iPhones, it is available only when both people opt in. It is a separate, later choice, not the default map.",
      },
    ],
  }),
  page({
    slug: "glossary/private-chat",
    kind: "glossary",
    title: "Private chat: two people, one request",
    description:
      "When a neighbor says yes, Help Me opens a private chat between just the two of you. Nobody else is in the thread. It is how you agree on a public place.",
    h1: "Private chat",
    eyebrow: "Glossary",
    lead: "The ask is not a performance. When someone says yes, the conversation is two people, not a group and not a comments thread.",
    answer:
      "A private chat opens in Help Me only between you and the neighbor who said yes. Nobody else is in the thread. It is how the two of you agree on a public meeting place and what you are willing to share. Messages stay between the two people in the request.",
    term: {
      name: "Private chat",
      shortDefinition:
        "A private chat opens only between you and the neighbor who said yes. Nobody else is in the thread. It is how you agree on a public meeting place.",
    },
    takeaways: [
      "Opens only after a yes.",
      "Only two people are in it.",
      "Use it to agree on a public place.",
      "Report and block apply in the chat.",
    ],
    priority: 0.65,
    keywords: ["Help Me private chat", "Help Me messages", "chat with helper"],
    sections: [
      {
        heading: "When it opens",
        body: [
          "The first eligible helper to say yes gets the request, and a private chat opens at that moment. Until then there is no thread and no audience. Offers that were not answered do not become conversations.",
        ],
      },
      {
        heading: "What it is for",
        body: [
          "Agree on a public place. Decide whether to share more location. Confirm what the ask actually is: jumper cables at a lot, a walk from the library, a box up a stair. Then go do the thing. Chat is a tool, not a social network.",
        ],
        bullets: [
          "Name a public meeting place.",
          "Decide what location, if any, to share.",
          "Confirm the small favor.",
        ],
      },
      {
        heading: "What stays private",
        body: [
          "The thread stays between the two people in the request. Leave if it feels wrong, because politeness is not a requirement. " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["how-it-works", "glossary/meet-in-public", "glossary/report-and-block", "ground-rules", "legal/privacy", "questions/does-help-me-share-my-phone-number"],
    faqs: [
      {
        q: "Can other helpers read the chat?",
        a: "No. Only you and the neighbor who said yes are in it.",
      },
      {
        q: "Is chat required?",
        a: "It is how the two of you coordinate. You still choose the meeting place and what location you share.",
      },
      {
        q: "What if the messages feel wrong?",
        a: "Stop, and use report and block. If you are in danger, call 911.",
      },
    ],
  }),
  page({
    slug: "glossary/meet-in-public",
    kind: "glossary",
    title: "Meet in public: the Help Me default",
    description:
      "Public places are the default on Help Me. You choose the label: a store entrance, a campus union, a busy lot. Never a doorstep or a stranger's car.",
    h1: "Meet in public",
    eyebrow: "Glossary",
    lead: "A lit lot, a union, a coffee shop on Broadway. Public is the default because meeting someone new deserves other people nearby.",
    answer:
      "Meet in public means choosing a place with other people around, like a store entrance, a library lobby, a campus union, or a busy lot in daylight. It is the Help Me default. You choose the label, and you can leave any time. A doorstep is never the place, and a stranger's car is never the meeting spot.",
    term: {
      name: "Meet in public",
      shortDefinition:
        "Public places are the default on Help Me. You choose the label. Exact location is optional, and a doorstep is never the meeting place.",
    },
    takeaways: [
      "Pick a place with other people around.",
      "Daylight when you can.",
      "Never a doorstep or a stranger's car.",
      "You can leave any time.",
    ],
    priority: 0.65,
    keywords: ["meet in public", "public meeting place", "Help Me meeting", "meet a neighbor Fargo"],
    sections: [
      {
        heading: "Why public is the default",
        body: [
          "A review by our team is a human look at who someone says they are. It is not a guarantee of anything, and it is not a background check. Meeting where other people exist, like a store entrance, a campus union, or a well-lit commercial lot, is the remaining common sense.",
        ],
      },
      {
        heading: "You name the place",
        body: [
          "A public meeting-place label is optional on the request, and you can sort it out in the private chat. Downtown Broadway is walkable and busy. So are the campus unions at NDSU, MSUM, and Concordia. A park path after dark is lovely and often the wrong call. Pick lit, populated ground.",
        ],
        bullets: [
          "A store or mall entrance.",
          "A library or union lobby.",
          "A busy coffee shop or lot.",
        ],
      },
      {
        heading: "Leave if you need to",
        body: [
          REPORT_LINE + " " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["ground-rules", "glossary/helper-review", "glossary/private-chat", "guides/meeting-someone-new-in-fargo", "not-911", "questions/where-should-i-meet-a-helper"],
    faqs: [
      {
        q: "Do I have to post my address?",
        a: "No. Meet in public. Share exact location only after a yes, and only if you want to.",
      },
      {
        q: "What counts as public?",
        a: "A place other people could reasonably walk into: a store, a union, a coffee shop, a busy lot. Not a basement, a dark court, or a locked hallway.",
      },
      {
        q: "Does a review mean I can meet at home?",
        a: "You choose. The default and the honest advice are public places.",
      },
    ],
  }),
  page({
    slug: "glossary/identity-evidence",
    kind: "glossary",
    title: "Identity evidence: what helpers submit",
    description:
      "Helpers submit identity evidence in Help Me so our team can review who they are. It is not a background check, and Help Me does not run them.",
    h1: "Identity evidence",
    eyebrow: "Glossary",
    lead: "Put a name to the offer. Our team looks at what you submit, and we will not dress that up as a police clearance.",
    answer:
      "Identity evidence is what a helper submits from inside Help Me so our team can review who they are. It is identity evidence plus a human decision, and it has to be current. It is not a criminal background check, and Help Me does not run background checks or describe the review as one.",
    term: {
      name: "Identity evidence",
      shortDefinition:
        "Identity evidence is what a helper submits from inside the app so our team can review who they are. It is not a criminal background check.",
    },
    takeaways: [
      "Submitted in the app, not by email.",
      "Reviewed by a person on our team.",
      "Not a criminal background check.",
      "Helping needs the review to be current.",
    ],
    priority: 0.6,
    keywords: ["Help Me identity evidence", "helper verification Help Me", "helper application"],
    sections: [
      {
        heading: "Submit it in the app",
        body: [
          "The helper application is the place. You cannot email a photo to this website and skip the app. The application also asks about which small favors you can help with and when you are available. Our team reviews it. Until the review is current, you cannot see or accept requests.",
        ],
      },
      {
        heading: "The sentence we will not bury",
        body: [
          "Identity evidence plus a human decision is not a criminal background check. Help Me does not run one and does not advertise one. If you need a licensed professional, hire one. Help Me is a place to ask your block for the small stuff, and we say so plainly.",
        ],
      },
      {
        heading: "Why we still ask",
        body: [
          "Because the person on the other end is trusting a neighbor with a few minutes. A nameless, unreviewed account should not be able to say yes to a walk from the library. Identity evidence is the minimum. Public meeting places and report and block are the rest. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["glossary/helper-review", "helpers", "ground-rules", "legal/privacy", "questions/does-help-me-run-background-checks"],
    faqs: [
      {
        q: "Is identity evidence a background check?",
        a: "No. Help Me does not run background checks. Our team reviews identity evidence. Meet in public.",
      },
      {
        q: "Do people who only ask submit identity evidence?",
        a: "Anyone can join and ask. Helping is the gated action. Requesters still have accounts, and report and block still apply.",
      },
      {
        q: "What if the review expires?",
        a: "Helping needs a current review. Expired or past reviews grant nothing, and you can apply again.",
      },
    ],
  }),
  page({
    slug: "glossary/live-map",
    kind: "glossary",
    title: "The live map in Help Me",
    description:
      "The live map is where asking happens in Help Me: request help, or go online as a helper. Open requests show as rough areas, never as pins.",
    h1: "The live map",
    eyebrow: "Glossary",
    lead: "Home orients you. Community shows what is happening. The map is where a stuck day and a willing neighbor can end up in the same place.",
    answer:
      "The live map is where asking happens in the Help Me iPhone app. You can request help or, if your helper review is current, go online. Open requests show as rough areas about 500 meters wide, not pins. It is a working tool, not a feed to scroll for entertainment.",
    term: {
      name: "Live map",
      shortDefinition:
        "The live map is where asking happens in the iPhone app. Requests show as rough areas, not pins, and offers go privately to helpers nearby.",
    },
    takeaways: [
      "Request help, or go online as a helper.",
      "Open requests are rough areas, not pins.",
      "Offers go privately to helpers nearby.",
      "It is a tool, not a social feed.",
    ],
    priority: 0.6,
    keywords: ["Help Me live map", "Help Me map", "request help map"],
    sections: [
      {
        heading: "Two actions, one map",
        body: [
          "Request help is how you post an ask. I can help is how a helper with a current review goes online. The map of Fargo-Moorhead is the shared picture, with open requests drawn as rough areas and no list of names.",
        ],
      },
      {
        heading: "What you will not see",
        body: [
          "A pin on anyone's house. A national heat map. A feed you can scroll for fun. Offers go privately to helpers nearby, and the map is operational, not social.",
        ],
        bullets: [
          "No pins on people or houses.",
          "No public list of who needs help.",
          "No leaderboard of who helps.",
        ],
      },
      {
        heading: "How it sits next to Home and Community",
        body: [
          "Home carries the daily brief and a card into the map. Community carries official events and local posts. If you came for a jump start, open the map. If you came for a show at the FARGODOME, open Community, where it is attributed to Ticketmaster. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["how-it-works", "glossary/approximate-location", "glossary/help-request", "glossary/daily-brief", "glossary/online-status", "cities/fargo"],
    faqs: [
      {
        q: "Is the live map a public feed of requests?",
        a: "No. Open requests can show as rough areas, but the ask itself is shown privately to helpers nearby. It is not a timeline.",
      },
      {
        q: "Can I use the map without going online as a helper?",
        a: "Yes. Requesting help and browsing the map do not make you a helper. Helping needs a current review and an explicit online state.",
      },
      {
        q: "Does the map work outside Fargo-Moorhead?",
        a: "The product is built for this metro. It launches one zone at a time.",
      },
    ],
  }),
  page({
    slug: "glossary/community-posts",
    kind: "glossary",
    title: "Community posts in Help Me",
    description:
      "Help Me Community lets signed-in people post, comment, and react locally. Events come first. Report and block apply everywhere.",
    h1: "Community posts",
    eyebrow: "Glossary",
    lead: "Community opens on Events, on purpose. Posts exist, and they are a local conversation, not a national social network.",
    answer:
      "Community posts are the local conversation in Help Me. Signed-in people can post, comment, and react, with events shown first. Posts persist, and report and block tools apply. A community post is not a help request: a dead battery belongs on the live map, not in a thread.",
    term: {
      name: "Community posts",
      shortDefinition:
        "Signed-in people can post, comment, and react in Community. Posts persist. Report and block apply. It is a local conversation, not a national feed.",
    },
    takeaways: [
      "Events come first, then updates from people here.",
      "You need an account to post.",
      "A post is not a help request.",
      "Report and block apply everywhere.",
    ],
    priority: 0.55,
    keywords: ["Help Me community", "Help Me posts", "Fargo community app"],
    sections: [
      {
        heading: "Events first, then updates",
        body: [
          "The first feeling in Community should be that Fargo-Moorhead has things going on, not that you walked into a blank feed. Events are included and attributed. Updates are the human layer: posts, comments, and reactions from people who live here.",
        ],
      },
      {
        heading: "What a post is, and is not",
        body: [
          "You need an account, and posts persist. A post is not a substitute for a help request. A dead battery belongs on the live map, shown privately to helpers nearby, not argued over in forty comments. Use a post for local conversation, and a request for a hand.",
        ],
      },
      {
        heading: "The same tools",
        body: [
          "Report and block apply here too. Help Me is a community app for adults. Harassment, spam, and anything unlawful do not belong, and our team can act on reports. " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["community", "glossary/report-and-block", "glossary/help-request", "for-neighbors"],
    faqs: [
      {
        q: "Is Community like a public social feed?",
        a: "It is a local, signed-in conversation with events first. It is not a national social network, and it is not where a live help request is answered.",
      },
      {
        q: "Do I need an account to post?",
        a: "Yes. Posts, comments, reactions, and reports all belong to a person.",
      },
      {
        q: "Should I post a jump-start ask here?",
        a: "No. Post a request on the live map so helpers nearby can see it privately.",
      },
    ],
  }),
  page({
    slug: "glossary/report-and-block",
    kind: "glossary",
    title: "Report and block on Help Me: what each does",
    description:
      "On Help Me you can report or block anyone, any time. Block ends contact and matching. Report goes to our team. Neither one calls 911 for you.",
    h1: "Report and block",
    eyebrow: "Glossary",
    lead: "Two verbs. Use them early. Politeness is not a reason to keep someone in your matching pool.",
    answer:
      "On Help Me you can report or block any member at any time. Blocking takes effect immediately and keeps that person out of your matching. Reporting sends the request context to our team, privately. Neither one contacts police or 911, so for danger or a crime, call 911 yourself.",
    term: {
      name: "Report and block",
      shortDefinition:
        "You can report or block anyone, any time. Block keeps that person out of your matching. Report goes to our team. Neither contacts police.",
    },
    takeaways: [
      "Available from every request and chat.",
      "Block is immediate and personal.",
      "Report goes to our team privately.",
      "Neither one calls 911. In danger, call 911.",
    ],
    priority: 0.75,
    keywords: ["report and block", "block and report", "Help Me block", "Help Me report", "report block meaning"],
    sections: [
      {
        heading: "Block is for you",
        body: [
          "Matching already skips people blocked by either person. If a chat, a meeting, or a post feels wrong, block. You do not owe a review, a debate, or a second chance in the app. Leave the physical place too if you need to.",
        ],
      },
      {
        heading: "Report is for our team",
        body: [
          "A report is a flag a person can act on, with the request context attached. It is how patterns become visible, and it can affect whether someone keeps a current review. It is not a public call-out thread, and it is not a police report. File those with the police when that is the right tool.",
        ],
        bullets: [
          "Block when you want contact to end.",
          "Report when our team should know.",
          "Call 911 for anything threatening or criminal.",
        ],
      },
      {
        heading: "Also in Community",
        body: [
          "Posts, comments, and reactions have the same tools. Harassment, spam, and anything unlawful can be reported. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["ground-rules", "glossary/community-posts", "not-911", "support/contact", "questions/can-i-block-someone", "questions/how-do-i-report-a-problem"],
    faqs: [
      {
        q: "Does blocking delete the request?",
        a: "Blocking keeps that person away from you. If you are in an active request and something is wrong, leave, report, and call 911 if you need an official response.",
      },
      {
        q: "Will the other person know I reported them?",
        a: "Treat a report as a tool for our team, not a message to the other person. If you are uncomfortable, leave and call 911 if needed.",
      },
      {
        q: "Can I report from this website?",
        a: "Use the in-app tools so the report attaches to the account and the request. You can also email support@helpme.fyi, and a person reads it.",
      },
    ],
  }),
  page({
    slug: "glossary/account-deletion",
    kind: "glossary",
    title: "Account deletion on Help Me",
    description:
      "You can delete your Help Me account yourself from Account in the iPhone app by typing DELETE. It is your account, and you can end it.",
    h1: "Account deletion",
    eyebrow: "Glossary",
    lead: "Leaving should not take a ticket and a week of waiting. Open Account, type DELETE. It is yours to end.",
    answer:
      "You can delete your Help Me account yourself. Open Account in the iPhone app, choose delete, and type DELETE to confirm. It is self-serve, with no support ticket and no reason required. Requests, private chat, reports, and saved events belong to a person, and that person can end the account.",
    term: {
      name: "Account deletion",
      shortDefinition:
        "You can delete your account yourself from Account in the app by typing DELETE. It is self-serve, and no reason is required.",
    },
    takeaways: [
      "Delete from Account inside the app.",
      "Type DELETE to confirm.",
      "No reason required.",
      "Removing the app alone does not delete the account.",
    ],
    priority: 0.55,
    keywords: ["delete Help Me account", "account deletion", "Help Me DELETE"],
    sections: [
      {
        heading: "Self-serve, on purpose",
        body: [
          "Open Account in the iPhone app and choose delete. You confirm by typing DELETE. That is the product path. It is not hidden behind a form on this website, and you do not need to explain yourself to leave.",
        ],
      },
      {
        heading: "Why an account exists at all",
        body: [
          "Requests, private chat, reports, saved events, and deletion all belong to a person. You can sign up with email or Sign in with Apple. An account is the opposite of an anonymous wall, and deletion is the opposite of a trap.",
        ],
      },
      {
        heading: "If you are stuck",
        body: [
          "If the app will not finish deletion, email support@helpme.fyi and a person will answer. Privacy questions belong there too, and the Privacy Policy governs what happens to data. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["legal/privacy", "download", "support/help", "support/contact", "about", "questions/how-do-i-delete-my-account"],
    faqs: [
      {
        q: "Can I delete from this website?",
        a: "Delete from Account in the iPhone app by typing DELETE. If something blocks that path, email support@helpme.fyi.",
      },
      {
        q: "Does deletion require a reason?",
        a: "No. It is your account. Type DELETE to confirm.",
      },
      {
        q: "What happens to a helper review if I return?",
        a: "Helping needs a current review. Do not assume an old one comes back with you. Apply again if you rejoin and want to help.",
      },
    ],
  }),
  page({
    slug: "glossary/testflight",
    kind: "glossary",
    title: "TestFlight: how Help Me ships to iPhone",
    description:
      "Help Me is in beta on Apple TestFlight for iPhone, iOS 15 or later. The Join the beta buttons on this site all point to the same TestFlight link.",
    h1: "TestFlight",
    eyebrow: "Glossary",
    lead: "The app is real, and the public store listing is not out yet. TestFlight is the honest name for the door, so we use it.",
    answer:
      "TestFlight is Apple's app for installing beta builds on iPhone. Help Me is in beta on TestFlight for iOS 15 or later at no charge. Every Join the beta button on this site points to the same TestFlight link, which can change to a public App Store listing later without becoming a different product.",
    term: {
      name: "TestFlight",
      shortDefinition:
        "Help Me is in beta on Apple TestFlight for iPhone (iOS 15 or later) at no charge. Every download button on this site points to that link.",
    },
    takeaways: [
      "iPhone, iOS 15 or later.",
      "Free to join.",
      "Every download button uses one link.",
      "Not Android, and not a web app.",
    ],
    priority: 0.55,
    keywords: ["Help Me TestFlight", "join beta Help Me", "Help Me iPhone beta"],
    sections: [
      {
        heading: "What you install",
        body: [
          "TestFlight is how iPhone betas are distributed. You need an Apple ID and iOS 15 or later. The join link is the same one behind every Join the beta button and the QR codes on this site. When a public listing exists, that is a one-line change, not a different product.",
        ],
      },
      {
        heading: "What beta still means",
        body: [
          "The product rules already hold: a review for helpers, a rough map area, private chat, attributed events, self-serve deletion, and not an emergency service. The terms and privacy pages are written for the beta and say so, and they will be replaced in full before a public release.",
        ],
      },
      {
        heading: "What TestFlight is not",
        body: [
          "It is not Android. It is not a web app that posts requests. It is not a national launch. Fargo, West Fargo, and Moorhead are first, one zone at a time. iPhone is the device, and TestFlight is the door. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["download", "about", "legal/terms", "legal/privacy", "questions/how-do-i-get-the-app"],
    faqs: [
      {
        q: "Is Help Me on the App Store?",
        a: "Today it is on TestFlight for iPhone. The download buttons on this site go there. A public listing would be a later change, not a second app.",
      },
      {
        q: "Does it cost money?",
        a: "No. Joining through TestFlight is free, and Help Me is not a paid marketplace.",
      },
      {
        q: "Can I use it on Android?",
        a: "Not yet. The app is for iPhone, iOS 15 or later, through TestFlight.",
      },
    ],
  }),
  page({
    slug: "glossary/completion-and-reviews",
    kind: "glossary",
    title: "Completion and reviews on Help Me",
    description:
      "When a Help Me request ends, both people confirm it is done, exact location sharing stops, and each can leave a review. Here is how a request closes well.",
    h1: "Completion and reviews",
    eyebrow: "Glossary",
    lead: "Mark it done. Stop sharing the extra location. Say how it went. Then carry on. That is the whole ending.",
    answer:
      "On Help Me, a request ends when both people confirm it is done. Exact location sharing then ends automatically, and each person can leave a review. If nobody says yes within two hours, the request closes without a meeting. Reviews are optional and do not replace report and block.",
    term: {
      name: "Completion and reviews",
      shortDefinition:
        "Both people confirm completion, exact location sharing ends automatically, and each person can leave a review.",
    },
    takeaways: [
      "Both people confirm it is done.",
      "Exact location sharing ends automatically.",
      "Reviews are optional and two-sided.",
      "A review does not replace report and block.",
    ],
    priority: 0.5,
    keywords: ["Help Me complete request", "Help Me review", "finish request"],
    sections: [
      {
        heading: "Done means done",
        body: [
          "The jump start worked, or it did not. The walk reached the car. The box made it up the stairs. Both people confirm completion in the request. That is the product's idea of an ending: not an open thread that follows you home.",
        ],
      },
      {
        heading: "Location sharing stops",
        body: [
          "If you agreed to share precise location after a yes, completion ends that sharing automatically. You should not have to remember to turn it off. The rough area was the default, and precision was a temporary, two-person choice.",
        ],
      },
      {
        heading: "A review is optional and two-sided",
        body: [
          "Each person can leave a review, so the other person hears how it went. It is not a public performance and not a leaderboard. It does not replace report and block if something was actually wrong. If the meeting never happened, the two-hour window already closed the ask. " + REPORT_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["how-it-works", "glossary/help-request", "glossary/approximate-location", "glossary/report-and-block", "helpers", "ground-rules"],
    faqs: [
      {
        q: "What if we never met?",
        a: "If nobody says yes within two hours, the request closes and you can try again. Completion and reviews belong to requests that had a yes.",
      },
      {
        q: "Does a bad review replace a report?",
        a: "No. If something was wrong or abusive, report and block, leave, and call 911 if you need an official response.",
      },
      {
        q: "Do reviews make helpers employees?",
        a: "No. Helpers are neighbors, not contractors. Reviews do not turn Help Me into a paid marketplace.",
      },
    ],
  }),
  page({
    slug: "glossary/online-status",
    kind: "glossary",
    title: "Online status: when a helper can be reached",
    description:
      "A helper with a current review chooses when to go online on Help Me. Going offline, closing the app, or going quiet takes you out of the list.",
    h1: "Online status",
    eyebrow: "Glossary",
    lead: "You are a neighbor, not an on-duty employee. Online is a choice you make when you can actually show up.",
    answer:
      "Online status is how a helper with a current review tells Help Me they are available. Going online is a choice. Going offline, closing the app, accepting a request, or going quiet takes the helper out of the list that sees new requests. Helpers are neighbors, not on-duty employees.",
    term: {
      name: "Online status",
      shortDefinition:
        "A helper with a current review chooses when to go online. Going offline, closing the app, accepting a request, or going quiet removes them from the list that sees new requests.",
    },
    takeaways: [
      "Online is opt-in.",
      "Offline, closing the app, or going quiet removes you from the list.",
      "Accepting a request takes you out of the general list.",
      "There are no shifts and nobody is on duty.",
    ],
    priority: 0.5,
    keywords: ["Help Me online", "helper online status", "go online Help Me"],
    sections: [
      {
        heading: "Online is opt-in",
        body: [
          "A current review is required before going online means anything. Then you tap I can help on the live map when you are actually free: between classes, after work, on a Saturday near downtown. Requests are shown to helpers who are online, not to everyone who was reviewed last fall.",
        ],
      },
      {
        heading: "How you leave the list",
        body: [
          "Go offline. Close the app. Accept a request, since you are now in that request. Go quiet. Any of those removes you from the list that sees new requests. The product assumes a helper is a person with a life, not a shift board.",
        ],
        bullets: [
          "Go offline when you are done.",
          "Accepting a request takes you out of the general list.",
          "No is always a fine answer.",
        ],
      },
      {
        heading: "Location while online",
        body: [
          "You can use your location so requests nearby reach you. You are not required to become a pin on someone else's map, and requesters still see rough areas until they agree to share more. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["helpers", "glossary/helper-review", "glossary/live-map", "for-helpers", "how-it-works"],
    faqs: [
      {
        q: "Am I online just because I opened the app?",
        a: "No. Helping needs a current review and going online. Browsing Home, Community, or the map as a requester is a different state.",
      },
      {
        q: "Can I help only near my own campus?",
        a: "You choose categories and when you are online. Requests nearby reach you based on recent activity and, when you allow it, your location.",
      },
      {
        q: "What if I forget to go offline?",
        a: "Closing the app or going quiet takes you out of the list. Still, go offline when you are done. You are not on duty by default.",
      },
    ],
  }),
  page({
    slug: "glossary/event-attribution",
    kind: "glossary",
    title: "Event attribution: where Help Me events come from",
    description:
      "Every Help Me event keeps its source and official link: NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo. No invented listings.",
    h1: "Event attribution",
    eyebrow: "Glossary",
    lead: "If we show a concert or a lecture, we say who published it, and we send you there. Credit is not optional.",
    answer:
      "Event attribution means Help Me shows the source that published each event and links to the official page. Events come from a fixed list: NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo. Help Me does not invent events, strip the credit, or claim to be affiliated with a source.",
    term: {
      name: "Event attribution",
      shortDefinition:
        "Help Me shows the source that published an event and links to the official page. The sources are a fixed list, and nothing is invented.",
    },
    takeaways: [
      "Six fixed sources.",
      "Every event links to the official page.",
      "If a feed is empty, the app says so.",
      "Attribution is not affiliation or endorsement.",
    ],
    priority: 0.55,
    keywords: ["event attribution", "Help Me events", "campus events Fargo", "Fargo events source"],
    sections: [
      {
        heading: "What it looks like",
        body: [
          "A listing from Concordia still says Concordia. A West Fargo community event still points to westfargo.org. Ticketmaster Fargo is labeled as Ticketmaster. The importer reads a fixed list of official feeds, not whatever ranked in a search.",
        ],
      },
      {
        heading: "Showing nothing is allowed",
        body: [
          "If a source is empty or down, the app says so. Filling the screen with a made-up game would be easier, and it would also be a lie. Attribution includes the right to show nothing.",
        ],
      },
      {
        heading: "Why it matters",
        body: [
          "Because events in the app can sound like Help Me is the organizer. It is not. Tickets, cancellations, and the last word live on the official page, so always open it. Showing a source is not affiliation or endorsement. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["events", "community", "campuses", "questions/where-do-events-come-from", "guides/campus-events-fargo-moorhead"],
    faqs: [
      {
        q: "Does Help Me host these events?",
        a: "No. It lists events from other sources and links back. It is not affiliated with or endorsed by them.",
      },
      {
        q: "Can I submit an event?",
        a: "No. Publish it on the official campus or city calendar and Help Me will pick it up from that source.",
      },
      {
        q: "What if an event looks wrong?",
        a: "Open the official link. The source has the last word on time and place.",
      },
    ],
  }),
  page({
    slug: "glossary/daily-brief",
    kind: "glossary",
    title: "The daily brief on Help Me Home",
    description:
      "Help Me Home opens on a short daily brief for Fargo-Moorhead: a welcome, a card into the live map, and a rail of upcoming official events.",
    h1: "The daily brief",
    eyebrow: "Glossary",
    lead: "Home should make Fargo-Moorhead feel present without turning your morning into a performance.",
    answer:
      "The daily brief is what Help Me Home opens on: a short welcome for Fargo-Moorhead, a card that opens the live map, and a rail of upcoming official events with their sources attached. It is not a public list of who needed help. Community holds the full calendar, and the map is where asking happens.",
    term: {
      name: "Daily brief",
      shortDefinition:
        "The daily brief is the top of Help Me Home: a short welcome, a card into the live map, and upcoming official events with their sources.",
    },
    takeaways: [
      "Home opens on the daily brief.",
      "A card opens the live map.",
      "Upcoming official events appear with their sources.",
      "It is not a public list of who needed help.",
    ],
    priority: 0.45,
    keywords: ["Help Me Home", "daily brief", "Help Me app home"],
    sections: [
      {
        heading: "What is on Home",
        body: [
          "A welcome. A line that the community is within reach. A card that reminds you requests stay a rough area until you share more with someone who said yes, and a button to open the map. Then upcoming campus and regional events, each with its source still attached.",
        ],
      },
      {
        heading: "What it deliberately does not do",
        body: [
          "It does not invent weather drama. It does not show a public list of people who needed help. It is not pushy, and Community holds the full calendar while the map stays the place an ask happens. If there is nothing to show, Home can say so.",
        ],
        bullets: [
          "No invented urgency.",
          "No public list of requests.",
          "No made-up events.",
        ],
      },
      {
        heading: "Where it fits",
        body: [
          "Home orients you, Community shows what is happening, and the live map is where asking happens. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["glossary/live-map", "community", "events", "how-it-works", "glossary/event-attribution"],
    faqs: [
      {
        q: "Is the daily brief a feed of requests?",
        a: "No. It is a short orientation with a card into the map and upcoming events. Requests are not listed publicly.",
      },
      {
        q: "Where is the full event calendar?",
        a: "In Community. Home shows a short rail of what is coming up.",
      },
      {
        q: "Does Home show events I did not choose?",
        a: "It shows upcoming official events from the fixed sources. Open any one to see the source page.",
      },
    ],
  }),
  page({
    slug: "glossary/nearby-interaction",
    kind: "glossary",
    title: "Precision finding and Nearby Interaction in Help Me",
    description:
      "On supported iPhones, Help Me can offer precision finding using Apple's Nearby Interaction, only when both people opt in after a yes. It is never the default.",
    h1: "Precision finding",
    eyebrow: "Glossary",
    lead: "A crowded lot, a union full of look-alike jackets. Precision finding is an optional extra for two people who already matched.",
    answer:
      "Precision finding in Help Me uses Apple's Nearby Interaction, including ultra-wideband where the iPhone supports it. It is available only after a neighbor says yes and both people opt in. If either person declines, it does not run. The default remains a rough area, a private chat, and a public place.",
    term: {
      name: "Precision finding",
      shortDefinition:
        "On supported iPhones, precision finding uses Apple's Nearby Interaction, and only when both people opt in after a yes. It is never the default.",
    },
    takeaways: [
      "Needs a supported iPhone.",
      "Both people must opt in, after a yes.",
      "If either declines, it does not run.",
      "Completion still ends exact sharing.",
    ],
    priority: 0.4,
    keywords: ["precision finding", "Nearby Interaction iPhone", "ultra-wideband Help Me"],
    sections: [
      {
        heading: "An extra, later choice",
        body: [
          "The default remains a rough area. A private chat still opens after a yes. Precision finding is a later, optional choice for two people who already matched and both want a tighter find, like a crowded mall lot or a busy union.",
        ],
      },
      {
        heading: "Hardware decides",
        body: [
          "Nearby Interaction and ultra-wideband depend on what Apple supports on that phone. Help Me does not invent a radar for hardware that cannot do it. If the phones cannot take part, meet the way the rest of the product works: a public place label and a chat.",
        ],
      },
      {
        heading: "What it is not",
        body: [
          "It is not live tracking on the open map. It is not a way to skip consent. It is not a feature other helpers can watch. Completion still ends exact location sharing, and public meeting places remain the default advice even when the radios are fancy. " + REVIEW_LINE,
          NOT_911,
        ],
      },
    ],
    related: ["glossary/approximate-location", "glossary/live-map", "glossary/private-chat", "ground-rules", "how-it-works"],
    faqs: [
      {
        q: "Does precision finding run automatically?",
        a: "No. It runs only when both people opt in after a yes, on supported iPhones.",
      },
      {
        q: "What if my phone does not support it?",
        a: "Meet the usual way: a public place label and a private chat.",
      },
      {
        q: "Can other helpers use it to find me?",
        a: "No. It is only between the two people in the request.",
      },
    ],
  }),
];

export const GLOSSARY_PAGES: SeoPage[] = [...GLOSSARY_PRODUCT, ...GLOSSARY_LOCAL];
