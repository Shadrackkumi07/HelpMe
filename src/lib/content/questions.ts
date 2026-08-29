import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

/**
 * Answer-engine pages. Each one owns a single question, answers it in the first
 * 60 words, and never contradicts the product facts in `src/lib/seo/site.ts`.
 */
export const QUESTION_PAGES: SeoPage[] = [
  page({
    slug: "questions",
    kind: "hub",
    title: "Questions about Help Me, answered straight",
    description:
      "Direct answers about Help Me in Fargo–Moorhead: cost, safety, location sharing, helper approval, Android, age, payment, and what the app will never do.",
    h1: "Every question, answered in a paragraph",
    eyebrow: "answers",
    lead: "No funnel, no maybe. Each page here takes one question, answers it in the first breath, and then shows the work.",
    priority: 0.9,
    keywords: ["Help Me app questions", "Help Me FAQ", "is Help Me safe", "Fargo help app answers"],
    sections: [
      {
        heading: "Why the answer comes first",
        body: [
          "People do not read a marketing page to learn whether an app costs money. They ask a phone, a search bar, or a chatbot, and they take the first honest sentence they get. So these pages put the answer at the top and the nuance underneath.",
          "That is also how we would like to be quoted. If an answer engine repeats one paragraph about Help Me, we would rather it be an accurate one about approval, approximate location, and the fact that this is not 911.",
        ],
      },
      {
        heading: "What we will not fudge",
        body: [
          "Helping requires a current staff review of identity evidence, which is not a criminal background check. Live help shows as a coarse area of roughly 500 meters until someone accepts and you consent. Chat is private between two people. Emergencies belong to 911. Every page here repeats those lines on purpose.",
        ],
        bullets: [
          "Cost, platform, and availability questions",
          "Safety, location, and privacy questions",
          "Helper approval and matching questions",
          "Boundary questions: emergencies, payment, minors",
        ],
      },
    ],
    related: ["about", "safety", "helpers", "not-911", "support/help", "explore"],
    faqs: [
      {
        q: "Are these answers different from the Help Center?",
        a: "Same facts, different shape. The Help Center is a short list for people already using the app. These pages each take one question deeper, with the context an answer engine needs to quote it correctly.",
      },
      {
        q: "How current are they?",
        a: "They describe the TestFlight build shipping now for iPhone. When app behavior changes, these pages change with it rather than aging quietly.",
      },
    ],
  }),

  page({
    slug: "questions/what-is-help-me",
    kind: "question",
    title: "What is the Help Me app?",
    description:
      "Help Me is a Fargo–Moorhead community app for everyday, non-emergency help. You post a short request, an approved helper nearby accepts, and you meet in public.",
    h1: "What is the Help Me app?",
    eyebrow: "answer",
    lead: "The one-line version, then the parts that actually matter when you decide whether to install it.",
    answer:
      "Help Me is a free iPhone app for the Fargo–Moorhead area where a person asks for everyday, non-emergency help — a jump start, a hand carrying something, a walk to a car — and an approved helper nearby can accept. A private chat opens between those two people and they meet in public. It is not 911 and not a paid gig marketplace.",
    takeaways: [
      "Free, iPhone only, distributed through TestFlight for iOS 15 or later.",
      "Built for Fargo, West Fargo, and Moorhead, not a national network.",
      "Only helpers with a current staff-reviewed approval can accept a request.",
      "Live requests show an approximate area of about 500 meters, not a pin on you.",
    ],
    keywords: ["what is Help Me", "Help Me app Fargo", "community help app North Dakota"],
    sections: [
      {
        heading: "The shape of one request",
        body: [
          "You open the map, choose a category, and add a sentence if you feel like it. Approved helpers who are online and suitable for that category can be offered the request. The first eligible one to accept gets it, a private chat opens, and the two of you decide where to meet. Both people confirm when it is finished.",
          "There is no public feed of who needed help this week. There is no leaderboard of good deeds. The request exists, it resolves, and it stops existing.",
        ],
      },
      {
        heading: "The part people get wrong",
        body: [
          "Help Me is not an emergency service, a rideshare, a handyman marketplace, or a youth network. Staff review identity evidence before someone can help; that review is not a criminal background check and we will not call it one. A helper is a neighbor who was checked, not a licensed professional who was hired.",
        ],
      },
    ],
    related: ["about", "how-it-works", "questions/is-help-me-free", "questions/is-help-me-safe", "download", "not-911"],
    faqs: [
      {
        q: "Is Help Me a social network?",
        a: "No. There is no follower count and no public timeline of requests. The only conversation is the private one between a requester and the helper who accepted.",
      },
      {
        q: "Who is behind it?",
        a: "A small team building in Fargo–Moorhead. Support is support@helpme.fyi and a person reads it.",
      },
    ],
  }),

  page({
    slug: "questions/is-help-me-free",
    kind: "question",
    title: "Is Help Me free?",
    description:
      "Yes. Help Me is free on TestFlight for iPhone. There are no fees, no subscription, and no payments between requesters and helpers inside the app.",
    h1: "Is Help Me free to use?",
    eyebrow: "answer",
    lead: "Short version: yes, and there is no payment layer to surprise you later.",
    answer:
      "Yes. Help Me is free. The app is distributed at no charge through TestFlight for iPhone, there is no subscription or paid tier, and the app does not process payments between a requester and a helper. Helpers are approved community members, not contractors earning a fee, so there is nothing to invoice and no cut to take.",
    takeaways: [
      "No download cost, no subscription, no in-app purchase.",
      "No payment processing between requester and helper.",
      "Helping is not paid work — it is not a gig platform.",
      "Tipping is not a feature, and no page here promises income.",
    ],
    keywords: ["is Help Me free", "Help Me cost", "free help app Fargo"],
    sections: [
      {
        heading: "Why there is no price",
        body: [
          "The thing being asked for is usually five minutes of someone else’s day: cables on a battery, an arm under a box, company across a dark parking lot. Attaching a price to that would change what it is and who shows up for it.",
          "That also means we do not market Help Me as a way to earn money. If a page told you otherwise, it was not this one.",
        ],
      },
      {
        heading: "What you can still owe someone",
        body: [
          "Nothing enforceable. If you want to buy a coffee for the person who saved your morning, that is between two adults standing in a parking lot. The app does not track it, mediate it, or take a percentage.",
        ],
      },
    ],
    related: ["questions/is-help-me-a-gig-app", "questions/can-i-pay-a-helper", "vs/taskrabbit", "about", "download", "helpers"],
    faqs: [
      {
        q: "Will it stay free?",
        a: "It is free today with no payment layer built. If that ever changes, this page changes first and the terms change with it.",
      },
      {
        q: "Does TestFlight cost anything?",
        a: "No. TestFlight is Apple’s free beta distribution app. You install it, then install Help Me through it.",
      },
    ],
  }),

  page({
    slug: "questions/is-help-me-safe",
    kind: "question",
    title: "Is Help Me safe to use?",
    description:
      "How Help Me handles safety: staff-reviewed helper approval, approximate location, private chat, public meeting places, and report and block in every request.",
    h1: "Is Help Me safe?",
    eyebrow: "answer",
    lead: "The honest answer includes what the app does, and what no app can do for you.",
    answer:
      "Help Me is built around four safety rules: only helpers with a current staff-reviewed approval can accept, live requests show a coarse area of about 500 meters rather than your address, chat stays private between the two people involved, and public meeting places are the default with report and block one tap away. None of that replaces your own judgment, and none of it replaces 911.",
    takeaways: [
      "Helper approval is a staff review of identity evidence, not a criminal background check.",
      "Approval has to be current — a lapsed one stops working.",
      "Exact location is opt-in, shared only after someone accepts and only with that person.",
      "Report and block are in every request, and emergencies go to 911 first.",
    ],
    keywords: ["is Help Me safe", "Help Me safety", "safe help app Fargo"],
    sections: [
      {
        heading: "What the app enforces",
        body: [
          "A request is not broadcast to the internet. It is offered to a short list of approved helpers who are online, suitable for the category, recently active, and not blocked by either person. Only one of them ends up with it. Everything after that happens in a private thread.",
          "Location is deliberately blunt. The map shows an approximate area, not a pin. Precise location is something you turn on after a person you can see has accepted, and it ends when the request is complete.",
        ],
      },
      {
        heading: "What is still on you",
        body: [
          "Meet in public. Tell someone where you are going. Trust the feeling in your stomach over the politeness in your head, and end the interaction if it goes sideways. If you are actually in danger, call 911 — do not wait on an app offer, and do not use a report as a substitute for a dispatcher.",
        ],
        bullets: [
          "Pick a lit, busy place — a store entrance, a campus building, a staffed lot",
          "Keep the conversation in the app until you have met",
          "Use report and block; both are one tap from the request",
          "911 first for anything threatening, medical, or criminal",
        ],
      },
    ],
    related: ["safety", "questions/who-can-see-my-location", "questions/are-helpers-background-checked", "guides/how-to-stay-safe", "not-911", "questions/where-should-i-meet-a-helper"],
    faqs: [
      {
        q: "Can a stranger see where I live?",
        a: "Not from the map. Live help shows a coarse area of roughly 500 meters. Exact location is only shared if you turn it on after someone accepts, and only with that person.",
      },
      {
        q: "What happens when I report someone?",
        a: "The report goes to staff along with the request context. Blocking takes effect immediately and stops future matching between the two of you.",
      },
    ],
  }),

  page({
    slug: "questions/who-can-see-my-location",
    kind: "question",
    title: "Who can see my location on Help Me?",
    description:
      "Live requests show an approximate area of about 500 meters. Exact location is opt-in after a helper accepts, shared only with that person, and ends when the request closes.",
    h1: "Who can see my location on Help Me?",
    eyebrow: "answer",
    lead: "The map is deliberately vague. Here is exactly how vague, and when that changes.",
    answer:
      "While a request is live, other approved helpers see a coarse area of about 500 meters around you — never a pin on your door. Nobody sees a precise position unless you consent to share it after a specific helper accepts, and then only that one person sees it. When the request is complete, exact sharing ends.",
    takeaways: [
      "Default is an approximate area of roughly 500 meters.",
      "Precise location requires an accepted helper plus your consent.",
      "Only the accepted helper ever receives it, not other helpers.",
      "Sharing stops when both people mark the request complete.",
    ],
    keywords: ["Help Me location privacy", "does Help Me track me", "approximate location app"],
    sections: [
      {
        heading: "Why coarse by default",
        body: [
          "A help app that pinned your exact position for a list of strangers would be a stalking tool with a friendly icon. The rounded area is enough for a helper to judge whether they can get to you in ten minutes and not enough to find you without your say-so.",
          "It also shapes matching. When both people have shared matching location, offers stay within about 10 km of the requester’s rounded area — the system works from that area, not from a precise point.",
        ],
      },
      {
        heading: "Turning it off entirely",
        body: [
          "You can post a request without sharing location at all. Suitable approved helpers can still be offered it; you just describe where to find you in your own words. Location permission lives in iOS Settings, and revoking it does not lock you out of the app.",
        ],
      },
    ],
    related: ["glossary/approximate-location", "glossary/coarse-area", "guides/location-privacy", "questions/do-i-need-to-share-my-exact-location", "legal/privacy", "safety"],
    faqs: [
      {
        q: "Does Help Me track me in the background?",
        a: "The product is built around live requests, not continuous tracking. Exact location exists for an accepted request and ends with it.",
      },
      {
        q: "Can I ask for help without location?",
        a: "Yes. No-location requests can still be considered by suitable approved helpers.",
      },
    ],
  }),

  page({
    slug: "questions/how-do-i-become-a-helper",
    kind: "question",
    title: "How do I become a Helper on Help Me?",
    description:
      "Apply in the app, submit identity evidence, and wait for a staff decision. Approval must be current before you can accept requests in Fargo–Moorhead.",
    h1: "How do I become an approved Helper?",
    eyebrow: "answer",
    lead: "It is a gate, not a switch. Here is what is behind it.",
    answer:
      "Open Help Me, apply to help, and submit identity evidence. A staff member reviews it and makes a decision — approval is not automatic and not instant. Once approved, you can receive and accept requests near you. Approval has to stay current: if it lapses or is revoked, the ability to accept goes with it.",
    steps: [
      { name: "Install and create an account", text: "Get Help Me from TestFlight on an iPhone running iOS 15 or later, then sign up with email or Sign in with Apple." },
      { name: "Apply to help", text: "Open the helper application in the app and tell us how you want to help — the everyday categories, not emergencies." },
      { name: "Submit identity evidence", text: "Provide the identity evidence the app asks for. This is how staff confirm you are a real, accountable adult in the area." },
      { name: "Wait for a staff decision", text: "A person reviews it. There is no auto-approve, and applying is not the same as being approved." },
      { name: "Stay current", text: "Approval is a current status, not a permanent badge. Keep it valid to keep receiving requests." },
    ],
    takeaways: [
      "Applying is not approval — a staff member decides.",
      "Identity evidence is required; a criminal background check is not what this is.",
      "Only current approval allows accepting requests.",
      "Helping is unpaid community help, not contract work.",
    ],
    keywords: ["become a helper Fargo", "Help Me helper approval", "volunteer help Fargo Moorhead"],
    sections: [
      {
        heading: "What staff are actually checking",
        body: [
          "That you are a real person, reachable, and accountable for what happens under your name. That is the bar this gate is designed to hold. It is deliberately not sold as more than it is: no criminal history search runs behind the scenes, and no page here will claim one does.",
        ],
      },
      {
        heading: "What being approved feels like",
        body: [
          "Quiet, mostly. You get short-lived offers for nearby requests that fit what you said you can do. You accept the ones you can actually get to. You meet in public, you finish, both people confirm, and you go back to your day. Nobody is scoring you on volume.",
        ],
      },
    ],
    related: ["helpers", "for-helpers", "questions/are-helpers-background-checked", "guides/how-to-become-a-helper", "glossary/staff-review", "questions/is-help-me-a-gig-app"],
    faqs: [
      {
        q: "How long does approval take?",
        a: "It depends on review volume. It is a human decision, so it is not instant and it is not guaranteed.",
      },
      {
        q: "Can approval be taken away?",
        a: "Yes. Approval is a current status. Reports, policy violations, or a lapsed review can end it.",
      },
    ],
  }),

  page({
    slug: "questions/are-helpers-background-checked",
    kind: "question",
    title: "Are Help Me helpers background checked?",
    description:
      "No. Helpers submit identity evidence that staff review before approval. That is an identity check, not a criminal background check, and Help Me does not claim otherwise.",
    h1: "Are Helpers background checked?",
    eyebrow: "answer",
    lead: "This is the question we least want to be vague about.",
    answer:
      "No. Help Me does not run criminal background checks. Before anyone can accept a request, they submit identity evidence and a staff member reviews it and decides. That is an identity and accountability check, and approval must be current to work. It is a real gate, but calling it a background check would be a lie, so we do not.",
    takeaways: [
      "Identity evidence plus staff review — not a criminal records search.",
      "Approval is current-status, revocable, and required to accept requests.",
      "Helpers are neighbors, not licensed or bonded professionals.",
      "Meeting in public and report/block exist because no gate is perfect.",
    ],
    keywords: ["Help Me background check", "are helpers vetted", "identity verification help app"],
    sections: [
      {
        heading: "Why the distinction matters",
        body: [
          "People make different choices when they think a stranger has been cleared by a records search. Overstating a check would buy trust the product has not earned and cannot back. So the language stays boring and exact: staff-reviewed identity evidence, current approval, revocable.",
        ],
      },
      {
        heading: "What that gate still gives you",
        body: [
          "Accountability. The person who shows up is tied to a reviewed identity and to a record of the request. Reports attach to that identity. Blocking is permanent from your side. Anonymous drive-by help is not a thing that can happen here.",
        ],
      },
    ],
    related: ["helpers", "glossary/identity-evidence", "glossary/staff-review", "questions/is-help-me-safe", "safety", "questions/how-do-i-become-a-helper"],
    faqs: [
      {
        q: "Do helpers get a badge or certificate?",
        a: "There is no professional credential involved. Approval is an internal status that lets someone accept requests, and it can end.",
      },
      {
        q: "Should I still be careful?",
        a: "Yes. Meet in public, keep the chat in the app until you meet, and use report and block. Call 911 for anything threatening.",
      },
    ],
  }),

  page({
    slug: "questions/is-help-me-available-on-android",
    kind: "question",
    title: "Is Help Me available on Android?",
    description:
      "Not yet. Help Me currently ships for iPhone on iOS 15 or later through TestFlight. There is no Android build and no Play Store listing today.",
    h1: "Is there an Android version of Help Me?",
    eyebrow: "answer",
    lead: "The disappointing answer, stated plainly instead of buried in a waitlist.",
    answer:
      "Not yet. Help Me currently ships only for iPhone, on iOS 15 or later, distributed through Apple TestFlight. There is no Android app, no Play Store listing, and no web version that creates requests. If you are on Android in Fargo–Moorhead, nothing on this site will work as a live help request today.",
    takeaways: [
      "iPhone only, iOS 15 or later.",
      "Distribution is TestFlight, not the App Store, right now.",
      "No Android build and no request-capable web app.",
      "The website is readable everywhere; the app is not.",
    ],
    keywords: ["Help Me Android", "Help Me app iPhone only", "community help app Android Fargo"],
    sections: [
      {
        heading: "Why iPhone first",
        body: [
          "One platform, done properly, in one metro. Building a second client before the first one is genuinely good in a Fargo January would mean two mediocre apps instead of one that works when a battery dies at minus twenty.",
        ],
      },
      {
        heading: "What Android users can still do",
        body: [
          "Read. The resource pages point at 911, campus safety, 211, police non-emergency lines, and county services — those work regardless of what is in your pocket. If someone in your household has an iPhone, they can install it and ask on your behalf when it makes sense.",
        ],
      },
    ],
    related: ["download", "questions/how-do-i-get-the-app", "glossary/testflight", "resources", "about", "questions/does-help-me-work-outside-fargo"],
    faqs: [
      {
        q: "Can I use Help Me in a browser?",
        a: "No. This site is informational. Requests, chat, and the live map exist only in the iPhone app.",
      },
      {
        q: "Is there a waitlist for Android?",
        a: "There is no waitlist to sign up for today. Email support@helpme.fyi if you want to be told when that changes.",
      },
    ],
  }),

  page({
    slug: "questions/how-do-i-get-the-app",
    kind: "question",
    title: "How do I download Help Me?",
    description:
      "Install Apple TestFlight on an iPhone running iOS 15 or later, then open the Help Me TestFlight invitation and install. It is free.",
    h1: "How do I download Help Me?",
    eyebrow: "answer",
    lead: "Two installs, about three minutes, no cost.",
    answer:
      "Help Me is distributed through Apple TestFlight. On an iPhone running iOS 15 or later, install TestFlight from the App Store, open the Help Me TestFlight link on the download page, and tap Install. Then create an account with email or Sign in with Apple. Both steps are free, and no Android or web version exists yet.",
    steps: [
      { name: "Check your iPhone", text: "You need an iPhone on iOS 15 or later. Older devices and Android phones cannot install the current build." },
      { name: "Install TestFlight", text: "Get Apple TestFlight from the App Store. It is Apple’s free app for installing beta builds." },
      { name: "Open the Help Me invitation", text: "Use the TestFlight link on the download page. It opens in TestFlight rather than the App Store." },
      { name: "Install and sign in", text: "Tap Install, open Help Me, and create an account with email or Sign in with Apple." },
    ],
    takeaways: [
      "TestFlight first, then Help Me — two separate installs.",
      "iOS 15 or later required.",
      "Free, with no subscription or purchase.",
      "An account is needed for requests, chat, and deletion.",
    ],
    keywords: ["download Help Me", "Help Me TestFlight", "install Help Me Fargo"],
    sections: [
      {
        heading: "Why TestFlight and not the App Store",
        body: [
          "The app is in beta and shipping fast. TestFlight is how iPhone beta builds are distributed, and it means fixes reach you in days rather than sitting in a review queue. It also means builds expire and you will occasionally update through TestFlight rather than the App Store.",
        ],
      },
      {
        heading: "If the link does not open",
        body: [
          "Make sure TestFlight is installed first — a TestFlight link opened without the app just shows a webpage. Open the link on the iPhone itself, not on a laptop. If a beta is full or a build has expired, email support@helpme.fyi and a person will answer.",
        ],
      },
    ],
    related: ["download", "glossary/testflight", "questions/is-help-me-available-on-android", "questions/is-help-me-free", "how-it-works", "support/contact"],
    faqs: [
      {
        q: "Do I need an Apple ID?",
        a: "Yes, the same one you use for the App Store, because TestFlight installs through it.",
      },
      {
        q: "Will my beta build expire?",
        a: "TestFlight builds do expire. Open TestFlight and update to the current build when that happens.",
      },
    ],
  }),

  page({
    slug: "questions/does-help-me-work-outside-fargo",
    kind: "question",
    title: "Does Help Me work outside Fargo–Moorhead?",
    description:
      "Help Me is built for the Fargo–Moorhead metro. Matching, helper approval, and event calendars are local, so coverage thins fast outside Cass and Clay County.",
    h1: "Does Help Me work outside Fargo–Moorhead?",
    eyebrow: "answer",
    lead: "You can install it anywhere. That is not the same as it being useful anywhere.",
    answer:
      "Help Me is built for the Fargo–Moorhead metro — Fargo and West Fargo in North Dakota, Moorhead and Dilworth in Minnesota, and the towns that commute in. Approved helpers, matching, and the official event calendars are all local. Outside that area the app will install but there is unlikely to be anyone nearby to accept your request.",
    takeaways: [
      "Core area: Cass County, ND and Clay County, MN.",
      "Matching is geographic — no nearby approved helpers means no offers.",
      "Event calendars come from local campuses and Ticketmaster Fargo only.",
      "Surrounding-town pages describe the metro people actually drive.",
    ],
    keywords: ["Help Me coverage area", "help app North Dakota", "Fargo Moorhead app area"],
    sections: [
      {
        heading: "How far the metro really stretches",
        body: [
          "People in Horace, Harwood, Casselton, Dilworth, Glyndon, Hawley, and Barnesville live inside Fargo–Moorhead’s daily orbit: they work here, study here, and get stuck in the same parking lots. Cities pages exist for those towns because that is where the metro actually ends, not where a county line says it does.",
          "Grand Forks, Detroit Lakes, Fergus Falls, and Wahpeton are a different story — real regional ties, thin helper coverage. Those pages are honest about that.",
        ],
      },
      {
        heading: "Why we are not pretending to be national",
        body: [
          "A help app is only as good as the density of people willing to show up. Claiming national coverage would mean shipping empty maps to strangers. One metro, actually served, is the product.",
        ],
      },
    ],
    related: ["cities", "cities/fargo", "cities/moorhead", "cities/west-fargo", "questions/what-is-help-me", "explore"],
    faqs: [
      {
        q: "Can I use it while visiting Fargo?",
        a: "Yes. If you are in the metro with an iPhone and an account, you can ask like anyone else.",
      },
      {
        q: "Will other cities be added?",
        a: "Nothing is announced. When a second metro is real, it will show up on this site, not in a rumor.",
      },
    ],
  }),

  page({
    slug: "questions/can-i-pay-a-helper",
    kind: "question",
    title: "Can I pay a Helper on Help Me?",
    description:
      "No. Help Me has no payments, tipping, or fees. Helpers are approved community members giving everyday help, not contractors being hired for a task.",
    h1: "Can I pay someone who helps me?",
    eyebrow: "answer",
    lead: "There is no payment button, and that is a design decision rather than a missing feature.",
    answer:
      "No. Help Me does not process payments, tips, or fees of any kind. Helpers are approved community members offering everyday help, not contractors taking a job. If you want to thank someone in a parking lot, that is between two adults — the app does not mediate it, track it, or take a cut.",
    takeaways: [
      "No in-app payments, tipping, or invoicing.",
      "Helping is unpaid; the app is not an income source.",
      "Not a marketplace — no bids, quotes, or service fees.",
      "Requests are for everyday help, not contracted labor.",
    ],
    keywords: ["pay a helper", "Help Me payments", "is Help Me paid"],
    sections: [
      {
        heading: "Why money is not in the loop",
        body: [
          "The moment a task carries a price, the question changes from would someone stop for me to what is this worth. Payment also drags in tax, liability, and worker-classification questions that a neighbor with jumper cables should never have to think about.",
        ],
      },
      {
        heading: "What to ask for instead",
        body: [
          "Ask for the small, finishable thing. A jump start. A hand with a couch. Someone to walk beside you to a car at eleven at night. If what you need is a paid trade — a licensed electrician, a tow truck, a mover — hire one. Help Me is not that and will not pretend to be.",
        ],
      },
    ],
    related: ["questions/is-help-me-a-gig-app", "questions/is-help-me-free", "vs/taskrabbit", "vs/thumbtack", "questions/what-should-i-not-ask-for", "helpers"],
    faqs: [
      {
        q: "Can a helper ask me for money?",
        a: "No. Soliciting payment is not what the platform is for. Report it if it happens.",
      },
      {
        q: "What about gas money for a long drive?",
        a: "That is a sign the request is too big for the app. Requests should be small, local, and finishable.",
      },
    ],
  }),

  page({
    slug: "questions/how-long-does-a-request-stay-open",
    kind: "question",
    title: "How long does a Help Me request stay open?",
    description:
      "Up to two hours. If nobody accepts within that window the request closes on its own, and you can post a new one. Only one live request at a time.",
    h1: "How long does a request stay open?",
    eyebrow: "answer",
    lead: "Two hours, one at a time. Here is why both limits exist.",
    answer:
      "A live request stays open for up to two hours. If no approved helper accepts in that window, it closes automatically and you are free to post a new one. You can only have one live request at a time, so the map never fills with stale asks from a person who already got what they needed.",
    takeaways: [
      "Two-hour maximum on an unaccepted request.",
      "One live request per person at a time.",
      "Closing is automatic — nothing lingers.",
      "You can post again immediately after it closes.",
    ],
    keywords: ["Help Me request time limit", "how long request open", "request expires"],
    sections: [
      {
        heading: "Why two hours",
        body: [
          "Everyday help is time-shaped. A request for a jump start is meaningless four hours later; either you are gone or you are in real trouble. A window that closes on its own keeps the map honest about what is still live.",
        ],
      },
      {
        heading: "Why only one at a time",
        body: [
          "One live request keeps the ask specific and keeps helpers from being spread across a queue from the same person. If two things are wrong at once, ask for the one a neighbor can actually solve, and use the official resources for the rest.",
        ],
      },
    ],
    related: ["glossary/one-live-request", "glossary/help-request", "questions/what-happens-if-nobody-accepts", "questions/can-i-cancel-a-request", "how-it-works", "guides/how-to-ask-for-help"],
    faqs: [
      {
        q: "Does the timer restart when someone accepts?",
        a: "The two-hour window is about finding a helper. Once someone accepts, you are in a private chat and working it out together.",
      },
      {
        q: "Can I repost right away?",
        a: "Yes. Once the old request closes, you can create a new one.",
      },
    ],
  }),

  page({
    slug: "questions/what-happens-if-nobody-accepts",
    kind: "question",
    title: "What happens if nobody accepts my Help Me request?",
    description:
      "The request closes after up to two hours and you can post again. Nobody is obligated to accept, and official services are the right call for anything urgent.",
    h1: "What if nobody accepts my request?",
    eyebrow: "answer",
    lead: "It happens. Here is what it means and what to do next.",
    answer:
      "The request closes on its own after up to two hours and you can post another one. No approved helper is obligated to accept anything, so an unanswered request usually just means nobody nearby was online, eligible for that category, or able to get to you. If the situation is urgent, call 911 or the right official service rather than reposting.",
    takeaways: [
      "Nobody is required to accept — offers are voluntary.",
      "Coverage is thinner late at night and far from the metro core.",
      "A closed request can be reposted immediately.",
      "Urgent or unsafe situations belong to 911, not a repost.",
    ],
    keywords: ["no one accepted request", "Help Me request unanswered", "help app no helpers"],
    sections: [
      {
        heading: "How to make a request easier to accept",
        body: [
          "Say the actual thing in a sentence. Name a public place a helper can picture — a store entrance, a campus lot, a specific corner of West Acres. Pick the category that matches, because eligibility is filtered by category. Ask when you first notice the problem instead of at the end of your patience.",
        ],
        bullets: [
          "One clear task, not a paragraph of context",
          "A recognizable public meeting place",
          "The right category so suitable helpers are offered it",
          "Earlier in the evening beats two in the morning",
        ],
      },
      {
        heading: "The backup plan is not the app",
        body: [
          "Stranded on a highway shoulder, a medical problem, a threat, a car you cannot safely stay in during a Fargo cold snap — those are 911, roadside assistance, or campus safety. The resource pages exist so that path is never further away than a request.",
        ],
      },
    ],
    related: ["questions/how-long-does-a-request-stay-open", "guides/how-to-ask-for-help", "resources", "not-911", "resources/fargo-emergency", "help"],
    faqs: [
      {
        q: "Will I be told nobody accepted?",
        a: "The request closes when the window ends. You can post a new one right away.",
      },
      {
        q: "Are some hours better than others?",
        a: "Realistically yes. More approved helpers are awake and near campus and the retail corridors in the evening than at three in the morning.",
      },
    ],
  }),

  page({
    slug: "questions/can-i-cancel-a-request",
    kind: "question",
    title: "Can I cancel a Help Me request?",
    description:
      "Yes. You can close a request you no longer need. If someone already accepted, tell them in the private chat first — they may already be driving toward you.",
    h1: "Can I cancel a request?",
    eyebrow: "answer",
    lead: "Yes, and there is one courtesy attached to it.",
    answer:
      "Yes. You can close a request you no longer need, and an unaccepted one closes on its own within two hours anyway. If a helper has already accepted, say so in the private chat before you disappear — someone may already be crossing town for you. Once the request ends, exact location sharing ends with it.",
    takeaways: [
      "Requests can be closed at any point.",
      "Tell an accepted helper in chat before cancelling.",
      "Unaccepted requests expire automatically.",
      "Ending the request ends precise location sharing.",
    ],
    keywords: ["cancel Help Me request", "close request", "helper already accepted"],
    sections: [
      {
        heading: "The problem solved itself",
        body: [
          "It happens constantly — a coworker had cables, the door was unlocked, the ride showed up. Close it. There is no penalty, and a stale live request is worse for everyone than a cancelled one.",
        ],
      },
      {
        heading: "If someone is already on the way",
        body: [
          "Two sentences in chat is the whole obligation: it is handled, thank you, sorry for the drive. Vanishing on a person who left their apartment for you is the one thing that makes people stop showing up for strangers.",
        ],
      },
    ],
    related: ["glossary/help-request", "questions/how-long-does-a-request-stay-open", "guides/how-to-ask-for-help", "glossary/completion-and-reviews", "how-it-works", "questions/how-do-i-report-a-problem"],
    faqs: [
      {
        q: "Does cancelling hurt my account?",
        a: "Cancelling because a problem resolved is normal. Repeatedly pulling people out for nothing is a different thing and can be reported.",
      },
      {
        q: "Can a helper cancel?",
        a: "Yes. Plans change and roads close. Saying so in chat is the same courtesy in the other direction.",
      },
    ],
  }),

  page({
    slug: "questions/who-can-use-help-me",
    kind: "question",
    title: "Who can use Help Me? Age and eligibility",
    description:
      "Help Me is an adult community app for the Fargo–Moorhead area. It is not a K–12 student network, not a youth chat, and not a school-issued safety program.",
    h1: "Who is Help Me actually for?",
    eyebrow: "answer",
    lead: "Adults in one metro. Everything else follows from that.",
    answer:
      "Help Me is a community app for adults in the Fargo–Moorhead area — residents, college students, and people passing through the metro. It is not a K–12 student network, not a youth chat platform, and not a school-issued safety program. High-school pages on this site describe the adult community around a school, not a service for the students inside it.",
    takeaways: [
      "Adults in Fargo, West Fargo, Moorhead, and the surrounding towns.",
      "Not designed for minors and not marketed to them.",
      "Not affiliated with, or endorsed by, any school district.",
      "College students are adults and use it like anyone else.",
    ],
    keywords: ["Help Me age requirement", "is Help Me for students", "who can use Help Me"],
    sections: [
      {
        heading: "Why the line is drawn hard",
        body: [
          "An app that connects a person to a nearby stranger is not a product for children, no matter how good the intention. So there is no youth mode, no parent-supervised child account, and no school rollout. Parents deserve that stated bluntly rather than discovered later.",
        ],
      },
      {
        heading: "What the school pages are for",
        body: [
          "Neighbors near Fargo North or Moorhead High are adults with driveways, dead batteries, and moving trucks. Those pages describe that adult community and its geography. They do not invite students to meet strangers and they do not claim a partnership with any district.",
        ],
      },
    ],
    related: ["for-parents", "schools", "about", "safety", "questions/is-help-me-safe", "legal/terms"],
    faqs: [
      {
        q: "Is Help Me endorsed by a school or district?",
        a: "No. There is no district partnership and no campus endorsement. Official campus event calendars are attributed to their sources, which is not the same as sponsorship.",
      },
      {
        q: "My teenager wants to help. Can they?",
        a: "Helping requires the adult approval process. This is not designed as a youth volunteering program.",
      },
    ],
  }),

  page({
    slug: "questions/is-help-me-911",
    kind: "question",
    title: "Is Help Me an emergency service?",
    description:
      "No. Help Me is not 911, campus police, or dispatch. For danger, injury, fire, or a crime in progress, call 911 in both North Dakota and Minnesota.",
    h1: "Is Help Me an emergency service?",
    eyebrow: "answer",
    lead: "No. This page exists so that answer is never one click away from someone who needs it.",
    answer:
      "No. Help Me is not 911, not campus police, and not an emergency dispatch service. It is everyday, non-emergency community help. If you are in danger, injured, watching a fire or a crime, or unsure and frightened, call 911 — it works in Fargo, West Fargo, Cass County, Moorhead, Dilworth, and Clay County. Do not wait on an app offer.",
    takeaways: [
      "911 works on both sides of the Red River.",
      "988 is the mental-health crisis line; 211 is information and referral.",
      "Help Me cannot dispatch police, fire, or medical response.",
      "No approved helper is a first responder acting in that role.",
    ],
    keywords: ["Help Me 911", "is Help Me emergency", "Fargo emergency app"],
    sections: [
      {
        heading: "Where the boundary sits",
        body: [
          "A dead battery in a lit parking lot is everyday help. A stranger following you is not. Chest pain is not. A car in the ditch on I-94 in a whiteout is not. The difference is not how upset you are; it is whether the right answer is a neighbor with ten minutes or a trained responder with a radio.",
        ],
        bullets: [
          "911: danger, injury, fire, crime in progress",
          "988: suicidal thoughts or a mental-health crisis",
          "211: food, housing, utilities, and referral in ND and MN",
          "Campus safety: incidents on NDSU, MSUM, Concordia, or M State property",
        ],
      },
      {
        heading: "Why an app cannot be the fallback",
        body: [
          "Nobody is on call. Offers are voluntary and expire. There is no dispatcher watching the map at three in the morning. Designing around that honestly means telling you to leave, not to post.",
        ],
      },
    ],
    related: ["not-911", "resources/fargo-emergency", "resources", "safety", "resources/211-north-dakota", "resources/mental-health-fargo"],
    faqs: [
      {
        q: "Can I use Help Me after calling 911?",
        a: "Sure — a ride home, a hand with a car, company while you wait. Call first, post second.",
      },
      {
        q: "Does reporting someone notify police?",
        a: "No. Reports go to staff. If a crime happened, call police yourself.",
      },
    ],
  }),

  page({
    slug: "questions/how-do-i-delete-my-account",
    kind: "question",
    title: "How do I delete my Help Me account?",
    description:
      "Open Account in the app, choose account deletion, and type DELETE to confirm. It is self-serve — you do not need to email anyone to leave.",
    h1: "How do I delete my account?",
    eyebrow: "answer",
    lead: "Self-serve, in the app, without asking permission.",
    answer:
      "Open Help Me, go to Account, choose to delete your account, and type DELETE to confirm. It is self-serve — there is no support ticket, no retention offer, and no waiting on a reply. Close any live request first so nobody is left waiting on a chat that is about to disappear.",
    steps: [
      { name: "Finish anything live", text: "Close or complete an open request so a helper is not left mid-conversation." },
      { name: "Open Account", text: "In the app, go to your Account settings." },
      { name: "Choose deletion", text: "Select the account deletion option." },
      { name: "Type DELETE", text: "Confirm by typing DELETE. That confirmation exists so it cannot happen by accident." },
    ],
    takeaways: [
      "Deletion lives in Account, inside the app.",
      "Typing DELETE is the confirmation step.",
      "No email or support request is required.",
      "Deleting the app alone does not delete the account.",
    ],
    keywords: ["delete Help Me account", "remove account", "Help Me account deletion"],
    sections: [
      {
        heading: "Deleting the app is not deleting the account",
        body: [
          "Removing the icon from your home screen leaves the account where it was. If leaving is what you mean, do it from Account inside the app before you uninstall.",
        ],
      },
      {
        heading: "If you are locked out",
        body: [
          "Email support@helpme.fyi from the address on the account. A person reads it. The privacy policy is the document that governs what happens to data after deletion.",
        ],
      },
    ],
    related: ["guides/delete-your-account", "glossary/account-deletion", "legal/privacy", "support/contact", "questions/how-do-i-report-a-problem", "support/help"],
    faqs: [
      {
        q: "Can I come back later?",
        a: "You would sign up again as a new account. Deletion is not a pause button.",
      },
      {
        q: "Does deleting remove my reports?",
        a: "Safety records exist so reports mean something. The privacy policy describes what is retained and why.",
      },
    ],
  }),

  page({
    slug: "questions/what-can-i-ask-for",
    kind: "question",
    title: "What can I ask for on Help Me?",
    description:
      "Everyday, non-emergency help: a jump start, a hand lifting something, directions, a walk to your car, printing, tech help, or a study session in Fargo–Moorhead.",
    h1: "What can I actually ask for?",
    eyebrow: "answer",
    lead: "Small, finishable, and legal. That is the whole filter.",
    answer:
      "Ask for everyday, non-emergency things a neighbor could finish in one visit: a jump start, a hand carrying furniture, directions, a walk across a dark lot, help finding a campus building, printing, basic tech help, or a study session. If it needs a license, a tow truck, a dispatcher, or a whole afternoon, it belongs somewhere other than Help Me.",
    takeaways: [
      "Small and finishable in one meeting.",
      "Non-emergency by definition.",
      "Nothing that requires a licensed trade or paid contractor.",
      "Public places by default, and category-only requests are fine.",
    ],
    keywords: ["what can I ask Help Me", "help request examples Fargo", "community help ideas"],
    sections: [
      {
        heading: "The everyday list",
        body: [
          "Most requests are ordinary in the best sense. A battery died at Hornbacher’s. A couch will not turn the corner. A first-year cannot find Minard Hall. Someone finished a shift at eleven and does not want to walk to the ramp alone. A printer ate a paper an hour before it is due.",
        ],
        bullets: [
          "Jump start, flat tire help, a car stuck in snow",
          "Heavy lifting, move-in, a second set of hands",
          "Directions, a local guide, a campus building",
          "A safety walk to a car or a bus stop",
          "Printing, basic tech support, a study buddy",
        ],
      },
      {
        heading: "Say it like a person",
        body: [
          "One sentence beats a paragraph. Category-only requests are still understandable to helpers, so if you do not want to explain yourself, do not. Naming a public meeting place gets you accepted faster than any amount of context.",
        ],
      },
    ],
    related: ["help", "questions/what-should-i-not-ask-for", "guides/how-to-ask-for-help", "help/jump-start", "help/heavy-lifting", "help/safety-walk"],
    faqs: [
      {
        q: "Can I ask for a ride?",
        a: "Help Me is not a rideshare and helpers are not drivers for hire. Use a rideshare, MATBUS, or a campus escort service where one exists.",
      },
      {
        q: "Do I have to explain why I need it?",
        a: "No. Pick a category, add a sentence if you want, and leave the rest.",
      },
    ],
  }),

  page({
    slug: "questions/what-should-i-not-ask-for",
    kind: "question",
    title: "What should I not ask for on Help Me?",
    description:
      "No emergencies, no paid work, no licensed trades, no rides for hire, no medical or legal advice, and nothing that asks a stranger into a private space alone.",
    h1: "What should I not ask for?",
    eyebrow: "answer",
    lead: "The boundary is not squeamishness. It is what a neighbor can safely do.",
    answer:
      "Do not use Help Me for emergencies, paid work, licensed trades, rides for hire, medical or legal advice, anything illegal, or requests that put a stranger alone in a private space with you. Those need 911, a professional, or a service designed for them. Help Me is small, everyday, public-by-default help between adults.",
    takeaways: [
      "Emergencies go to 911, 988, or campus safety.",
      "No paid jobs — the app has no payments at all.",
      "No electrical, plumbing, mechanical, medical, or legal work.",
      "Public places by default; keep private-space requests off the app.",
    ],
    keywords: ["Help Me rules", "what not to ask", "community help boundaries"],
    sections: [
      {
        heading: "The four categories that are always no",
        body: [
          "Emergencies, because nobody is on call. Paid work, because there is no payment layer and no worker protection. Licensed trades and professional advice, because an approved neighbor is not a credentialed professional and treating them like one hurts both people. Anything illegal, which needs no further explanation.",
        ],
        bullets: [
          "Emergency, medical, or crisis response",
          "Paid tasks, gig work, hauling for hire, or a ride for money",
          "Electrical, plumbing, roofing, mechanical repair, childcare, or pet boarding",
          "Medical, legal, financial, or immigration advice",
          "Anything illegal, or anything you would not do in a lit parking lot",
        ],
      },
      {
        heading: "The judgment-call zone",
        body: [
          "A hand carrying boxes to a doorway is normal. A stranger spending two hours alone in your apartment is not what this is for. If a request only works when nobody else can see it, that is the signal to stop and use a service built for it.",
        ],
      },
    ],
    related: ["questions/what-can-i-ask-for", "not-911", "questions/can-i-pay-a-helper", "safety", "legal/terms", "guides/how-to-stay-safe"],
    faqs: [
      {
        q: "Can I ask for help moving apartments?",
        a: "A hand with a few heavy items is reasonable. A full move is a job for movers or friends you can feed.",
      },
      {
        q: "What if someone asks me for something off-limits?",
        a: "Decline, then report and block. Both are one tap from the request.",
      },
    ],
  }),

  page({
    slug: "questions/does-help-me-share-my-phone-number",
    kind: "question",
    title: "Does Help Me share my phone number?",
    description:
      "No. Conversation happens in a private in-app chat between a requester and the helper who accepted. Contact details are yours to share or not.",
    h1: "Does Help Me give out my phone number?",
    eyebrow: "answer",
    lead: "The chat exists so you do not have to hand a stranger your number.",
    answer:
      "No. When a helper accepts, a private in-app chat opens between the two of you, and that is where coordination happens. Your phone number is not handed over as part of matching. If you choose to share contact details with someone, that is your decision — and there is a good argument for keeping it in the app until you have actually met.",
    takeaways: [
      "Coordination happens in the private in-app chat.",
      "No number swap is required to meet someone.",
      "Only the accepted helper is in that conversation.",
      "Keeping it in-app keeps report and block meaningful.",
    ],
    keywords: ["Help Me phone number privacy", "does help app share contact", "private chat safety"],
    sections: [
      {
        heading: "Why in-app is safer",
        body: [
          "A conversation inside the app is attached to the request. If something goes wrong, report has context. If you block someone, the channel actually closes. A text thread on your personal number has none of that — and it outlives the request by years.",
        ],
      },
      {
        heading: "What is visible about you",
        body: [
          "Enough for a person to recognize you in a parking lot and no more. The map shows a coarse area rather than an address, and precise location only exists after you consent, with one person, for the length of the request.",
        ],
      },
    ],
    related: ["glossary/private-chat", "questions/who-can-see-my-location", "legal/privacy", "safety", "questions/can-i-block-someone", "guides/location-privacy"],
    faqs: [
      {
        q: "Can I share my number if I want to?",
        a: "You can. It is a personal call, and it is not required for anything the app does.",
      },
      {
        q: "Can other helpers read my chat?",
        a: "No. The thread is between you and the helper who accepted.",
      },
    ],
  }),

  page({
    slug: "questions/can-i-block-someone",
    kind: "question",
    title: "Can I block someone on Help Me?",
    description:
      "Yes. Report and block are one tap away in every request. Blocking takes effect immediately and stops the two of you from being matched again.",
    h1: "Can I block someone?",
    eyebrow: "answer",
    lead: "Yes — immediately, without a conversation about it.",
    answer:
      "Yes. Report and block are available from every request, and blocking takes effect immediately. Once you block someone, matching does not put the two of you together again — blocked pairs are excluded when helpers are considered for a request. You do not need to explain yourself to anyone to use it.",
    takeaways: [
      "Blocking is immediate and one tap from the request.",
      "Blocked pairs are excluded from future matching.",
      "Reporting sends context to staff; blocking is your own switch.",
      "For anything criminal or threatening, call 911 as well.",
    ],
    keywords: ["block a helper", "Help Me report and block", "safety actions app"],
    sections: [
      {
        heading: "Report and block are not the same thing",
        body: [
          "Blocking is personal and instant: that person is out of your world in the app. Reporting is a message to staff with the request attached, and it can affect whether someone keeps a current approval. Use both when both fit. Use block on its own whenever you want to.",
        ],
      },
      {
        heading: "When it is more than an app problem",
        body: [
          "If someone threatened you, followed you, or committed a crime, call 911 and then police non-emergency for the follow-up. A block protects your next request. It does not investigate anything.",
        ],
      },
    ],
    related: ["glossary/report-and-block", "glossary/safety-actions", "guides/how-to-report-or-block", "questions/how-do-i-report-a-problem", "safety", "resources/fargo-police"],
    faqs: [
      {
        q: "Will they be told I blocked them?",
        a: "Blocking is not designed as a message. It is designed to end contact.",
      },
      {
        q: "Can I unblock later?",
        a: "Manage blocks from your account settings in the app.",
      },
    ],
  }),

  page({
    slug: "questions/how-does-matching-work",
    kind: "question",
    title: "How does Help Me match requests to helpers?",
    description:
      "A request is privately offered to approved helpers who are online, suitable for the category, recently active, and not blocked. The first eligible accept wins.",
    h1: "How does matching actually work?",
    eyebrow: "answer",
    lead: "No public feed, no auction, no queue. A short list of people who could actually come.",
    answer:
      "When you post a request, Help Me privately considers approved helpers who are online, suitable for that category, recently active, and not blocked by either person. Up to ten eligible helpers may receive a short-lived offer, and the first one to accept gets the request. When both people share matching location, offers stay within about 10 km of your rounded area.",
    takeaways: [
      "Up to ten helpers may see a short-lived offer.",
      "Filters: approval, online, category fit, recent activity, no block.",
      "First eligible accept takes it; there is no bidding.",
      "Distance is judged from your rounded area, not a precise pin.",
    ],
    keywords: ["Help Me matching", "how helpers get requests", "help app matching algorithm"],
    sections: [
      {
        heading: "Why it is private",
        body: [
          "A public feed of who needs help turns a bad morning into a permanent record. Offers are short-lived and targeted, so your request reaches the people who could plausibly show up and nobody else.",
        ],
      },
      {
        heading: "What makes a match more likely",
        body: [
          "Density and timing. Near campus in the evening there are simply more approved helpers awake and close by than in a rural township at three in the morning. Choosing the right category matters too, because eligibility is filtered by it.",
        ],
      },
    ],
    related: ["glossary/matching", "how-it-works", "questions/what-happens-if-nobody-accepts", "questions/who-can-see-my-location", "helpers", "glossary/online-status"],
    faqs: [
      {
        q: "Can helpers browse all requests?",
        a: "No. There is no open list of requests to scroll. Offers are sent, short-lived, and specific.",
      },
      {
        q: "Do helpers see my exact position?",
        a: "Not from an offer. They see the rounded area. Precise location comes later, only if you consent.",
      },
    ],
  }),

  page({
    slug: "questions/where-do-events-come-from",
    kind: "question",
    title: "Where do Help Me event listings come from?",
    description:
      "From a fixed source list: NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo — always linked back to the source that published them.",
    h1: "Where do the events come from?",
    eyebrow: "answer",
    lead: "From official calendars, attributed every time. Nothing is invented.",
    answer:
      "Event listings come from a fixed set of official sources: NDSU, MSUM, Concordia College, M State, the City of West Fargo, and Ticketmaster Fargo. Every listing links back to the source that published it. Help Me does not create events, does not host them, and is not affiliated with or endorsed by those organizations.",
    takeaways: [
      "Six sources, always attributed with a link.",
      "No invented, scraped-and-rewritten, or user-submitted events.",
      "Attribution is not affiliation or sponsorship.",
      "The source calendar is always the authority on details.",
    ],
    keywords: ["Fargo events app", "NDSU events calendar", "campus events Fargo Moorhead"],
    sections: [
      {
        heading: "Why a fixed source list",
        body: [
          "Community calendars rot. An event page that cannot say where a listing came from is a rumor with a date on it. Locking the sources means every listing has an owner you can check, and a wrong time is fixable at the source instead of copied forever.",
        ],
        bullets: [
          "NDSU",
          "MSUM",
          "Concordia College",
          "M State",
          "City of West Fargo",
          "Ticketmaster Fargo",
        ],
      },
      {
        heading: "Check the source before you drive",
        body: [
          "Times move, rooms change, and weather cancels things in a metro that measures winter in feet. The link on a listing is not decoration — it is the thing you should open before you put on boots.",
        ],
      },
    ],
    related: ["events", "glossary/event-attribution", "glossary/campus-events", "guides/campus-events-fargo-moorhead", "campuses", "community"],
    faqs: [
      {
        q: "Can I submit an event?",
        a: "No. Listings come from the fixed source list, which is what keeps them trustworthy.",
      },
      {
        q: "Is Help Me affiliated with NDSU or MSUM?",
        a: "No. Linking a public calendar and being endorsed by an institution are different things.",
      },
    ],
  }),

  page({
    slug: "questions/do-i-need-to-share-my-exact-location",
    kind: "question",
    title: "Do I have to share my exact location on Help Me?",
    description:
      "No. Requests work with an approximate area, and you can post with no location at all. Precise location is opt-in after a helper accepts.",
    h1: "Do I have to share my exact location?",
    eyebrow: "answer",
    lead: "No — and the app is designed to be useful without it.",
    answer:
      "No. The map works from an approximate area of about 500 meters, and you can post a request with no location shared at all — suitable approved helpers can still be offered it. Precise location only exists after a specific helper accepts and you consent, and it ends when the request is complete.",
    takeaways: [
      "Approximate area is the default view.",
      "No-location requests are supported.",
      "Precise sharing needs an accepted helper plus your consent.",
      "On supported iPhones, precision finding requires both people to opt in.",
    ],
    keywords: ["exact location app", "Help Me location optional", "share location help app"],
    sections: [
      {
        heading: "When sharing more is worth it",
        body: [
          "A five-level parking ramp at eleven at night is the case for it. So is a snow-blind lot where every car is a white lump. When the description would take four messages, precise location saves both of you twenty minutes.",
        ],
      },
      {
        heading: "When to keep it coarse",
        body: [
          "At home, near home, or anywhere you would not want a stranger to be able to return to. Name a public meeting place instead — a store entrance, a campus building, a lit corner of a lot — and walk to it.",
        ],
      },
    ],
    related: ["questions/who-can-see-my-location", "glossary/approximate-location", "glossary/nearby-interaction", "guides/location-privacy", "guides/meet-in-public-fargo", "safety"],
    faqs: [
      {
        q: "Can I turn location off in iOS?",
        a: "Yes. Location permission is managed in iOS Settings, and turning it off does not lock you out of the app.",
      },
      {
        q: "Does the helper keep my location afterward?",
        a: "Exact sharing ends when the request is complete.",
      },
    ],
  }),

  page({
    slug: "questions/is-help-me-a-gig-app",
    kind: "question",
    title: "Is Help Me a gig app?",
    description:
      "No. There are no payments, no jobs, no bids, and no earnings. Helpers are approved community members, not contractors, and Help Me is not a marketplace.",
    h1: "Is Help Me a gig or side-hustle app?",
    eyebrow: "answer",
    lead: "No, and it is worth being specific about why not.",
    answer:
      "No. Help Me has no payments, no job listings, no bidding, and no earnings of any kind. Helpers are approved community members who choose to show up for a neighbor, not contractors accepting work. If you are looking for paid tasks, a marketplace like TaskRabbit or Thumbtack is the right category of product — this is not that.",
    takeaways: [
      "No payment layer, no fees, no tips, no payouts.",
      "No job board, no bids, no quotes, no ratings-for-hire.",
      "Approval is a safety gate, not an employment contract.",
      "Nothing on this site promises income from helping.",
    ],
    keywords: ["Help Me gig app", "make money helping Fargo", "is Help Me TaskRabbit"],
    sections: [
      {
        heading: "What the approval gate is and is not",
        body: [
          "It is a safety mechanism: staff review identity evidence and decide, and that approval has to stay current. It is not onboarding for work, and being approved creates no obligation to accept anything. Offers are voluntary, always.",
        ],
      },
      {
        heading: "If you want to be paid",
        body: [
          "That is a legitimate thing to want, and there are real products for it. Help Me is built for the other thing — the five minutes someone would have given anyway, made findable by the person who needs it.",
        ],
      },
    ],
    related: ["vs/taskrabbit", "vs/thumbtack", "vs/angi", "questions/can-i-pay-a-helper", "questions/is-help-me-free", "helpers"],
    faqs: [
      {
        q: "Can helpers advertise a business?",
        a: "Help Me is not a lead-generation channel. Requests are everyday help between neighbors.",
      },
      {
        q: "Are helpers employees or contractors?",
        a: "Neither. They are approved community members, not workers, and there is no pay involved.",
      },
    ],
  }),

  page({
    slug: "questions/how-do-i-report-a-problem",
    kind: "question",
    title: "How do I report a problem on Help Me?",
    description:
      "Use report and block in the request, then email support@helpme.fyi for anything else. For crimes or danger, call 911 or police non-emergency first.",
    h1: "How do I report a problem or a person?",
    eyebrow: "answer",
    lead: "In-app first for people, email for everything else, 911 for anything criminal.",
    answer:
      "Report and block are one tap away in every request — reporting sends context to staff, blocking ends contact immediately. For bugs, account problems, or anything outside a request, email support@helpme.fyi and a person will read it. If a crime happened or you were in danger, call 911 first and police non-emergency after.",
    steps: [
      { name: "Get safe first", text: "If you are in danger, leave and call 911. Reporting inside an app is not an emergency channel." },
      { name: "Block from the request", text: "Blocking takes effect immediately and stops future matching between the two of you." },
      { name: "Report with context", text: "Send the report from the request so staff see what it is attached to." },
      { name: "Email for anything else", text: "support@helpme.fyi for bugs, account issues, or a follow-up. A person answers." },
    ],
    takeaways: [
      "Report goes to staff; block is immediate and personal.",
      "Reports can affect whether someone keeps a current approval.",
      "Reporting is not a police report and does not dispatch anyone.",
      "support@helpme.fyi is read by a human.",
    ],
    keywords: ["report a helper", "Help Me support", "report problem app Fargo"],
    sections: [
      {
        heading: "What makes a report useful",
        body: [
          "Specifics. What was said or done, where, and when. Staff can see the request the report is attached to, which is exactly why in-app reporting beats a screenshot sent from somewhere else.",
        ],
      },
      {
        heading: "Reporting is not policing",
        body: [
          "Staff can end an approval, not investigate a crime. If something illegal happened, the report belongs to police in the city where it happened — Fargo, West Fargo, or Moorhead — and 911 if it is still happening.",
        ],
      },
    ],
    related: ["guides/how-to-report-or-block", "glossary/report-and-block", "questions/can-i-block-someone", "support/contact", "resources/fargo-police", "not-911"],
    faqs: [
      {
        q: "Will I hear back about a report?",
        a: "Outcomes about another person’s account are private. Staff act on reports; they do not narrate them.",
      },
      {
        q: "Can I report without blocking?",
        a: "Yes. They are separate actions and you can use either one alone.",
      },
    ],
  }),

  page({
    slug: "questions/who-do-i-contact-for-support",
    kind: "question",
    title: "How do I contact Help Me support?",
    description:
      "Email support@helpme.fyi. A person reads it. For emergencies call 911, and use in-app report and block for problems inside a request.",
    h1: "How do I contact support?",
    eyebrow: "answer",
    lead: "One email address, read by a human, not a ticket robot.",
    answer:
      "Email support@helpme.fyi. That is the support channel, and a person reads it — there is no phone queue and no chatbot in front of it. Use in-app report and block for problems inside a request, and call 911 for anything that is an actual emergency.",
    takeaways: [
      "support@helpme.fyi is the one address.",
      "No phone support line; email is the channel.",
      "In-request problems: report and block first.",
      "Emergencies: 911, not support.",
    ],
    keywords: ["Help Me support email", "contact Help Me", "helpme.fyi support"],
    sections: [
      {
        heading: "What to include",
        body: [
          "The email address on your account, your iPhone model and iOS version, and what you expected to happen versus what did. For a TestFlight install problem, say which step failed — TestFlight itself, the invitation link, or the app after install.",
        ],
      },
      {
        heading: "What support cannot do",
        body: [
          "Dispatch help, override the approval decision on demand, or act as an emergency channel. Approval is a staff review with a real standard, and support email is not a fast lane around it.",
        ],
      },
    ],
    related: ["support/contact", "support/help", "questions/how-do-i-report-a-problem", "questions/how-do-i-delete-my-account", "questions/how-do-i-get-the-app", "not-911"],
    faqs: [
      {
        q: "Is there a phone number?",
        a: "No. Email is the support channel. 911 is the emergency channel.",
      },
      {
        q: "How fast is a reply?",
        a: "A person answers as soon as they can. It is a small team, not a call center.",
      },
    ],
  }),

  page({
    slug: "questions/where-should-i-meet-a-helper",
    kind: "question",
    title: "Where should I meet a Help Me helper?",
    description:
      "Somewhere public, lit, and busy: a store entrance, a staffed campus building, a well-used parking lot. Public meeting places are the default for a reason.",
    h1: "Where should I meet someone?",
    eyebrow: "answer",
    lead: "Public, lit, and populated. In Fargo–Moorhead that is easy to find at almost any hour.",
    answer:
      "Meet in a public, lit, populated place: a grocery or big-box store entrance, a staffed campus building, a busy parking lot, a library, or a lobby. Public meeting places are the default in Help Me, and naming one in your request gets it accepted faster because a helper can picture exactly where to go.",
    takeaways: [
      "Lit, public, and populated beats close and convenient.",
      "Name the meeting place in the request — it speeds up acceptance.",
      "Stay in the app chat until you have actually met.",
      "Nothing requires you to give out a home address.",
    ],
    keywords: ["safe meeting place Fargo", "where to meet a stranger safely", "public meeting spot Moorhead"],
    sections: [
      {
        heading: "Places that work in this metro",
        body: [
          "West Acres and the retail corridor around it. Grocery entrances in south Fargo and north Moorhead. The Memorial Union at NDSU, the Comstock Memorial Union at MSUM, the Knutson Campus Center at Concordia. Fargo and Moorhead public libraries during open hours. Any city or campus lot that is actually being used at that hour.",
          "Winter changes this. A doorway with a vestibule beats a corner of a lot at minus fifteen, and both of you will be better company for it.",
        ],
      },
      {
        heading: "Places to skip",
        body: [
          "Your driveway, your apartment door, an empty industrial lot after dark, a park at midnight, or anywhere you would have to describe with landmarks nobody else uses. If a helper cannot find it on a map in five seconds, it is the wrong spot.",
        ],
      },
    ],
    related: ["glossary/meet-in-public", "guides/meet-in-public-fargo", "lists/public-meeting-places-fargo", "questions/is-help-me-safe", "safety", "guides/how-to-stay-safe"],
    faqs: [
      {
        q: "What if my car is dead in a private lot?",
        a: "Then the car is where it is. Describe the lot precisely, stay somewhere lit, and tell someone where you are.",
      },
      {
        q: "Should I bring a friend?",
        a: "Always fine. Nothing about this expects you to be alone.",
      },
    ],
  }),

  page({
    slug: "questions/what-does-see-beyond-mean",
    kind: "question",
    title: "What does See Beyond mean?",
    description:
      "See Beyond is the Help Me brand line. It means noticing the person who is stuck — and the person nearby who would have stopped if they had known.",
    h1: "What does See Beyond mean?",
    eyebrow: "answer",
    lead: "It is a brand line, and it is also the entire product thesis.",
    answer:
      "See Beyond is the Help Me brand line. It means looking past the surface of an ordinary day to notice two people who never find each other: the one stuck in a parking lot, and the one fifty yards away who would have stopped if they had known. The app exists to close that gap in Fargo–Moorhead.",
    takeaways: [
      "See Beyond is the brand line, not a feature.",
      "It describes a visibility problem, not a shortage of goodwill.",
      "Every product rule follows from it: private, local, small, public.",
      "It is why there is no feed and no audience.",
    ],
    keywords: ["See Beyond", "Help Me brand line", "Help Me meaning"],
    sections: [
      {
        heading: "The gap it names",
        body: [
          "Almost nobody drives past a stranded person on purpose. They drive past because they did not see it, or could not tell if it was a problem, or assumed someone else already had it. Goodwill is not scarce in this metro. Visibility is.",
        ],
      },
      {
        heading: "Why it shaped the product",
        body: [
          "If the problem is seeing, the answer is not a bigger audience. It is a smaller, better-aimed signal: an offer to a few people who could actually come, a private conversation between two of them, a meeting in public, and then nothing left behind. No feed to perform for, no permanent record of a bad morning.",
        ],
      },
    ],
    related: ["about", "community", "how-it-works", "for-neighbors", "questions/what-is-help-me", "helpers"],
    faqs: [
      {
        q: "Is See Beyond a feature in the app?",
        a: "No. It is the brand line and the reasoning behind how the app is built.",
      },
      {
        q: "Does it refer to accessibility?",
        a: "No. Help Me is not a vision-assistance product. Be My Eyes is a different thing entirely, and there is a page comparing the two.",
      },
    ],
  }),
];
