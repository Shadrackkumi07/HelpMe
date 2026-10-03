import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";
import { QUESTION_PAGES_MORE } from "./questions-more";

/**
 * Answer-engine pages. Each one owns a single question, answers it in the first
 * 60 words, and never contradicts the product facts in `src/lib/seo/site.ts`.
 * Facts that appear here: ~500 m rough area, a two-hour request window, one
 * live request at a time, public meeting places, no background checks.
 */
const QUESTION_PAGES_FIRST: SeoPage[] = [
  page({
    slug: "questions",
    kind: "hub",
    title: "Questions about Help Me, answered straight",
    description:
      "Plain answers about Help Me in Fargo-Moorhead: cost, location, meeting people, who can help, Android, age, payment, and what the app will never do.",
    h1: "Every question, answered in a paragraph",
    eyebrow: "Questions",
    lead: "Short answers first, the nuance underneath. If you are wondering whether Help Me costs anything, who can see where you are, or what it will never do, start here.",
    answer:
      "These pages answer the questions people ask about Help Me, one per page, with the answer first. Help Me is a place to ask your block for the small stuff in Fargo, West Fargo, and Moorhead. It is free in beta on iPhone, it is not an emergency service, and helpers can apply to be reviewed by our team.",
    takeaways: [
      "One question per page, with the answer first.",
      "Help Me is not an emergency service. In danger, call 911.",
      "Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
      "Your request shows as a rough area about 500 meters wide.",
    ],
    priority: 0.85,
    keywords: ["Help Me questions", "Help Me FAQ", "Help Me answers", "Help Me Fargo"],
    sections: [
      {
        heading: "Why the answer comes first",
        body: [
          "People do not read a marketing page to find out whether an app costs money. They ask a phone, a search bar, or a chatbot, and they take the first honest sentence they get. So these pages put the answer at the top and the nuance underneath.",
          "That is also how we would like to be quoted. If an answer engine repeats one paragraph about Help Me, we would rather it be an accurate one about the review helpers go through, the rough map area, and the fact that this is not an emergency service.",
        ],
      },
      {
        heading: "What we will not fudge",
        body: [
          "Helping requires a current review by our team after identity evidence, which is not a background check. Requests show as a rough area about 500 meters wide until someone says yes and you agree. Chat is private between two people. Emergencies belong to 911. Every page repeats those lines on purpose.",
        ],
        bullets: [
          "Cost, platform, and availability questions.",
          "Location, privacy, and meeting questions.",
          "Helper review and matching questions.",
          "Boundary questions: emergencies, payment, age.",
        ],
      },
    ],
    related: ["about", "ground-rules", "helpers", "not-911", "support/help", "explore"],
    faqs: [
      {
        q: "Are these answers different from the Help Center?",
        a: "Same facts, different shape. The Help Center is a short list for people already using the app. These pages each take one question deeper.",
      },
      {
        q: "How current are they?",
        a: "They describe the TestFlight build shipping now for iPhone. When the app changes, these pages change with it.",
      },
      {
        q: "Can I suggest a question?",
        a: "Email support@helpme.fyi. A person reads it, and good questions become pages.",
      },
    ],
  }),
  page({
    slug: "questions/what-is-help-me",
    kind: "question",
    title: "What is the Help Me app?",
    description:
      "Help Me is a place to ask your block for the small stuff in Fargo-Moorhead. You post one sentence, a neighbor can say yes, and you meet in public.",
    h1: "What is the Help Me app?",
    eyebrow: "Answer",
    lead: "A place to ask your block for the small stuff, and a place to answer. That is the whole idea.",
    answer:
      "Help Me is a free iPhone app for Fargo, West Fargo, and Moorhead where you ask neighbors for small favors, like a phone charger, directions, or a jump start in daylight. A neighbor can say yes, a private chat opens, and you meet in public. It is not an emergency service and not a paid marketplace.",
    takeaways: [
      "Free, iPhone only, in beta through TestFlight for iOS 15 or later.",
      "Built for Fargo, West Fargo, and Moorhead, not a national network.",
      "Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
      "Your request shows as a rough area about 500 meters wide, not a pin on you.",
    ],
    keywords: ["what is Help Me", "Help Me app", "Help Me Fargo", "ask your block", "neighbors helping neighbors Fargo"],
    sections: [
      {
        heading: "The shape of one request",
        body: [
          "You open the map, choose a category, and add a sentence if you feel like it. Helpers who are online and suitable for that category can see your request. The first one to say yes gets it, a private chat opens, and the two of you decide where to meet. Both people confirm when it is finished.",
          "There is no public feed of who needed help this week. There is no leaderboard of good deeds. The request exists, it resolves, and it stops existing.",
        ],
      },
      {
        heading: "The part people get wrong",
        body: [
          "Help Me is not an emergency service, a rideshare, a handyman marketplace, or a network for children. Helpers can apply to be reviewed by our team, and that review is not a criminal background check. A helper is a neighbor, not a licensed professional who was hired.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["about", "how-it-works", "questions/is-help-me-free", "questions/what-happens-when-you-meet-someone", "download", "not-911"],
    faqs: [
      {
        q: "Is Help Me a social network?",
        a: "No. There is no follower count and no public timeline of requests. The only conversation is the private one between you and the neighbor who said yes.",
      },
      {
        q: "Who is behind it?",
        a: "A small team building in Fargo-Moorhead. Support is support@helpme.fyi and a person reads it.",
      },
      {
        q: "Where does it work?",
        a: "Fargo, West Fargo, and Moorhead first, one zone at a time. The app shows what is open near you.",
      },
    ],
  }),
  page({
    slug: "questions/is-help-me-free",
    kind: "question",
    title: "Is Help Me free?",
    description:
      "Yes. Help Me is free in beta on TestFlight for iPhone. No fees, no subscription, and no payments between neighbors inside the app.",
    h1: "Is Help Me free to use?",
    eyebrow: "Answer",
    lead: "Yes, and it is free on purpose. Five minutes of a neighbor's day should not come with a price tag.",
    answer:
      "Yes. Help Me is free. The beta is available at no charge through TestFlight for iPhone, there is no subscription or paid tier, and the app does not process payments between neighbors. Helpers are neighbors, not contractors earning a fee, so there is nothing to invoice and no cut to take.",
    takeaways: [
      "No download cost, no subscription, no in-app purchase.",
      "No payment processing between neighbors.",
      "Helping is not paid work. It is not a gig platform.",
      "Tipping is not a feature.",
    ],
    keywords: ["is Help Me free", "Help Me cost", "Help Me price", "free neighbor help app"],
    sections: [
      {
        heading: "Why there is no price",
        body: [
          "The thing being asked for is usually five minutes of someone else's day: cables on a battery, an arm under a box, company across a dark parking lot. Attaching a price to that would change what it is and who shows up for it.",
          "That also means Help Me is not marketed as a way to earn money. If a page told you otherwise, it was not this one.",
        ],
      },
      {
        heading: "What you can still give",
        body: [
          "A thank you, always. If you want to buy a coffee for the person who saved your morning, that is between two adults standing in a parking lot. The app does not track it, mediate it, or take a percentage.",
        ],
        bullets: [
          "No fees or subscriptions.",
          "No in-app payments or tipping.",
          "A thank you goes a long way.",
        ],
      },
      {
        heading: "About TestFlight",
        body: [
          "TestFlight is Apple's free beta app. You install it, then install Help Me through it. Neither costs anything. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["questions/is-help-me-a-gig-app", "questions/can-i-pay-a-helper", "about", "download", "helpers"],
    faqs: [
      {
        q: "Will it stay free?",
        a: "It is free today, with no payment layer built. If that ever changes, this page changes first, and so do the terms.",
      },
      {
        q: "Does TestFlight cost anything?",
        a: "No. TestFlight is Apple's free beta distribution app. You install it, then install Help Me through it.",
      },
      {
        q: "Are there hidden fees?",
        a: "No. There are no fees of any kind in the app.",
      },
    ],
  }),
  page({
    slug: "questions/what-happens-when-you-meet-someone",
    kind: "question",
    title: "What happens when you meet someone through Help Me?",
    description:
      "How meeting works: a private chat, a public place, a rough map area, a review for helpers, and report and block in every request. Plus what stays on you.",
    h1: "What happens when you meet someone?",
    eyebrow: "Answer",
    lead: "A rough area on the map, a private chat, a public place, and a way out. Here is the whole path, and the part that is still up to you.",
    answer:
      "When a neighbor says yes, a private chat opens between the two of you, and you choose a public place to meet. Your request showed only a rough area about 500 meters wide, and exact location is opt-in. You can report or block any member at any time. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
    takeaways: [
      "The helper review is not a criminal background check.",
      "The review has to be current. A lapsed one stops working.",
      "Exact location is opt-in, shared only after a yes and only with that person.",
      "Report and block are in every request. In danger, call 911 first.",
    ],
    keywords: ["meet someone Help Me", "Help Me meeting", "is Help Me okay to use", "meeting a stranger Fargo"],
    sections: [
      {
        heading: "What the app does",
        body: [
          "A request is not broadcast to the internet. It is shown to helpers who are online, suitable for the category, recently active, and not blocked by either person. Only one of them ends up with it. Everything after that happens in a private thread.",
          "Location is deliberately blunt. The map shows a rough area, not a pin. Precise location is something you turn on after a person you can see has said yes, and it ends when the request is complete.",
        ],
      },
      {
        heading: "What is still on you",
        body: [
          "Meet in public. Tell someone where you are going. Trust the feeling in your stomach over the politeness in your head, and end the interaction if it goes sideways. If you are in danger, call 911. Do not wait on an app, and do not use a report as a substitute for a dispatcher.",
        ],
        bullets: [
          "Pick a lit, busy place: a store entrance, a campus building, a staffed lot.",
          "Keep the conversation in the app until you have met.",
          "Use report and block. Both are one tap from the request.",
          "911 first for anything threatening, medical, or criminal.",
        ],
      },
      {
        heading: "The honest limits",
        body: [
          "No product control makes a meeting risk-free, and Help Me does not claim one does. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["ground-rules", "questions/who-can-see-my-location", "questions/does-help-me-run-background-checks", "guides/meeting-someone-new-in-fargo", "not-911", "questions/where-should-i-meet-a-helper"],
    faqs: [
      {
        q: "Can someone I meet see where I live?",
        a: "Not from the map. Requests show a rough area about 500 meters wide. Exact location is shared only if you turn it on after someone says yes, and only with that person.",
      },
      {
        q: "What happens when I report someone?",
        a: "The report goes to our team along with the request context. Blocking takes effect immediately and stops future matching between the two of you.",
      },
      {
        q: "What if the meeting feels wrong?",
        a: "Leave. You do not owe anyone politeness at the cost of your comfort. If you are in danger, call 911.",
      },
    ],
  }),
  page({
    slug: "questions/who-can-see-my-location",
    kind: "question",
    title: "Who can see my location on Help Me?",
    description:
      "A rough area about 500 meters wide while live. Exact location is optional, shared only after a yes, with only that person, and it ends with the request.",
    h1: "Who can see my location on Help Me?",
    eyebrow: "Answer",
    lead: "A rough area while your request is live, and nobody sees a precise position unless you decide they should.",
    answer:
      "While a request is live, helpers see a rough area about 500 meters wide around you, never a pin on your door. Nobody sees a precise position unless you agree to share it after a specific neighbor says yes, and then only that one person sees it. When the request is complete, exact sharing ends.",
    takeaways: [
      "The default is a rough area of about 500 meters.",
      "Precise location needs a yes plus your consent.",
      "Only the neighbor who said yes ever receives it.",
      "Sharing stops when both people mark the request complete.",
    ],
    keywords: ["Help Me location", "who sees my location Help Me", "Help Me privacy", "approximate location app"],
    sections: [
      {
        heading: "Why rough by default",
        body: [
          "A help app that pinned your exact position for a list of strangers would be a stalking tool with a friendly icon. The rough area is enough for a neighbor to judge whether they can get to you in ten minutes, and not enough to find you without your say-so.",
          "The system works from that rounded area, not from a precise point, when it decides who should see your request.",
        ],
      },
      {
        heading: "Turning it off entirely",
        body: [
          "You can post a request without sharing any location. Suitable helpers can still see it, and you describe where to find you in your own words. Location permission lives in iOS Settings, and revoking it does not lock you out of the app.",
        ],
        bullets: [
          "A rough area by default.",
          "Exact location only if you choose.",
          "Shared with one person, for the length of one request.",
        ],
      },
      {
        heading: "What this does not cover",
        body: [
          "The privacy policy is the document that describes how data is handled. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time, and delete your account from inside the app by typing DELETE.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["glossary/approximate-location", "guides/location-privacy", "questions/do-i-need-to-share-my-exact-location", "legal/privacy", "ground-rules"],
    faqs: [
      {
        q: "Does Help Me track me in the background?",
        a: "The product is built around live requests, not continuous tracking. Exact location exists for an accepted request and ends with it.",
      },
      {
        q: "Can I ask for help without location?",
        a: "Yes. A request without a location can still be seen by suitable helpers.",
      },
      {
        q: "Where do I read the full policy?",
        a: "On the Privacy Policy page. That page governs how data is handled.",
      },
    ],
  }),
  page({
    slug: "questions/how-do-i-become-a-helper",
    kind: "question",
    title: "How do I become a Helper on Help Me?",
    description:
      "Apply in the app, submit identity evidence, and get reviewed by our team. Helping needs a current review before you can see or accept requests.",
    h1: "How do I become a Helper?",
    eyebrow: "Answer",
    lead: "Apply from inside the app, then wait on a real person. It is a small gate on purpose.",
    answer:
      "Open Help Me, apply to help, and submit identity evidence. A member of our team reviews it and decides. It is not automatic, and it takes a little time. Once your review is current, you can see and accept requests near you. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
    steps: [
      { name: "Install and create an account", text: "Get Help Me from TestFlight on an iPhone running iOS 15 or later, then sign up with email or Sign in with Apple." },
      { name: "Apply to help", text: "Open the helper application in the app and tell us which small favors you can help with." },
      { name: "Submit identity evidence", text: "Provide the identity evidence the app asks for." },
      { name: "Wait on a review", text: "A person on our team reviews it. There is no auto-approve, and applying is not the same as being reviewed." },
      { name: "Keep it current", text: "Helping needs a current review. Keep it valid to keep seeing requests." },
    ],
    takeaways: [
      "Applying is not the same as being reviewed. A person decides.",
      "Identity evidence is required. This is not a criminal background check.",
      "Only a current review lets you accept requests.",
      "Helping is unpaid and optional.",
    ],
    keywords: ["become a Help Me helper", "helper application Help Me", "volunteer Fargo", "how to help neighbors Fargo"],
    sections: [
      {
        heading: "What the review looks at",
        body: [
          "Whether you are a real person, reachable, and accountable for what happens under your name. That is the bar this gate is designed to hold, and it is deliberately not sold as more than it is. No criminal records search runs behind the scenes, and nothing on this site says one does.",
        ],
      },
      {
        heading: "What being reviewed looks like",
        body: [
          "Quiet, mostly. You see requests nearby that fit what you said you can do. You say yes to the ones you can actually get to. You meet in public, finish, both people confirm, and you go back to your day. Nobody is scoring you on volume.",
        ],
        bullets: [
          "Choose the favors you are comfortable with.",
          "Go online when it suits you.",
          "Say no whenever you want. No is a fine answer.",
        ],
      },
      {
        heading: "The honest part",
        body: [
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time. Helping is unpaid.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["helpers", "for-helpers", "questions/does-help-me-run-background-checks", "guides/how-to-become-a-helper", "questions/is-help-me-a-gig-app"],
    faqs: [
      {
        q: "How long does the review take?",
        a: "It depends on how many applications are waiting. A person decides, so it takes some time, and a yes is not a given.",
      },
      {
        q: "Can a review be taken away?",
        a: "Yes. Helping needs a current review. Reports, policy violations, or a lapse can end it.",
      },
      {
        q: "Do I get paid for helping?",
        a: "No. Help Me is not a paid marketplace, and helping is unpaid and optional.",
      },
    ],
  }),
  page({
    slug: "questions/does-help-me-run-background-checks",
    kind: "question",
    title: "Does Help Me run background checks on helpers?",
    description:
      "No. Helpers submit identity evidence that our team reviews. That is not a criminal background check, and Help Me does not run background checks.",
    h1: "Does Help Me run background checks?",
    eyebrow: "Answer",
    lead: "No. And because that matters, here is exactly what does happen instead.",
    answer:
      "No. Help Me does not run background checks. Helpers can apply to be reviewed by our team: they submit identity evidence, and a member of our team reviews it and decides. The review has to be current to work. It is a real gate, but it is not a criminal records search, and we do not describe it as one.",
    takeaways: [
      "Identity evidence plus a review by our team, not a records search.",
      "The review is current-status and can end.",
      "Helpers are neighbors, not licensed or bonded professionals.",
      "Meeting in public and report and block exist because no gate is perfect.",
    ],
    keywords: ["Help Me background checks", "are Help Me helpers checked", "helper review Help Me", "Help Me helpers"],
    sections: [
      {
        heading: "Why the distinction matters",
        body: [
          "People make different choices when they think a stranger has been cleared by a records search. Overstating a check would buy trust the product has not earned and cannot back. So the language stays boring and exact: identity evidence, a review by our team, current, and revocable.",
        ],
      },
      {
        heading: "What the review still gives you",
        body: [
          "Accountability. The person who says yes is tied to a reviewed identity and to a record of the request. Reports attach to that identity. Blocking is permanent from your side. Anonymous drive-by help is not something that can happen here.",
        ],
        bullets: [
          "A review by our team, not an algorithm.",
          "Reports that attach to a reviewed identity.",
          "A block that is permanent from your side.",
        ],
      },
      {
        heading: "What stays on you",
        body: [
          "Meet in public, keep the chat in the app until you meet, and use report and block. You can report or block any member at any time. Nothing about the review is a promise about anyone's character.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["helpers", "glossary/identity-evidence", "questions/what-happens-when-you-meet-someone", "ground-rules", "questions/how-do-i-become-a-helper"],
    faqs: [
      {
        q: "Do helpers get a badge or certificate?",
        a: "No professional credential is involved. The review is an internal status that lets someone see and accept requests, and it can end.",
      },
      {
        q: "Should I still be careful?",
        a: "Yes. Meet in public, keep the chat in the app until you meet, and use report and block. Call 911 for anything threatening.",
      },
      {
        q: "What do helpers submit?",
        a: "Identity evidence from inside the app. A member of our team reviews it and decides.",
      },
    ],
  }),
  page({
    slug: "questions/is-help-me-available-on-android",
    kind: "question",
    title: "Is Help Me available on Android?",
    description:
      "Not yet. Help Me is in beta for iPhone on iOS 15 or later through TestFlight. There is no Android build and no Play Store listing today.",
    h1: "Is there an Android version of Help Me?",
    eyebrow: "Answer",
    lead: "Not yet. Right now Help Me is an iPhone app, and this site is the only part that works everywhere.",
    answer:
      "Not yet. Help Me currently ships only for iPhone, on iOS 15 or later, through Apple TestFlight. There is no Android app, no Play Store listing, and no web version that creates requests. If you are on Android in Fargo-Moorhead, nothing on this site works as a live request today.",
    takeaways: [
      "iPhone only, iOS 15 or later.",
      "Distribution is TestFlight, not the App Store, for now.",
      "No Android build and no request-capable web app.",
      "This website is readable everywhere. The app is not.",
    ],
    keywords: ["Help Me Android", "Help Me app Android", "Help Me iPhone only", "Help Me Play Store"],
    sections: [
      {
        heading: "Why iPhone first",
        body: [
          "One platform, done properly, in one metro. Building a second app before the first one is genuinely good in a Fargo January would mean two mediocre apps instead of one that works when a battery dies at minus twenty.",
        ],
      },
      {
        heading: "What Android users can still do",
        body: [
          "Read. The Resources pages point to 911, campus public safety, 211, police non-emergency lines, and county services, and those work regardless of what is in your pocket. If someone in your household has an iPhone, they can install Help Me and ask on your behalf when it makes sense.",
        ],
        bullets: [
          "Use the Resources pages for official numbers.",
          "Read the guides and answers on this site.",
          "Email support@helpme.fyi if you want to be told when that changes.",
        ],
      },
      {
        heading: "The short version",
        body: [
          "Help Me is a place to ask your block for the small stuff, and today that place is an iPhone app. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
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
        a: "There is no waitlist today. Email support@helpme.fyi if you want to be told when that changes.",
      },
      {
        q: "Which iPhones work?",
        a: "iPhones on iOS 15 or later.",
      },
    ],
  }),
  page({
    slug: "questions/how-do-i-get-the-app",
    kind: "question",
    title: "How do I download Help Me?",
    description:
      "Install Apple TestFlight on an iPhone running iOS 15 or later, then open the Help Me invitation and install. Free, in two quick steps.",
    h1: "How do I download Help Me?",
    eyebrow: "Answer",
    lead: "Two installs, both free: TestFlight first, then Help Me.",
    answer:
      "Help Me is in beta through Apple TestFlight. On an iPhone running iOS 15 or later, install TestFlight from the App Store, open the Help Me TestFlight link on the download page, and tap Install. Then create an account with email or Sign in with Apple. Both steps are free, and there is no Android or web version yet.",
    steps: [
      { name: "Check your iPhone", text: "You need an iPhone on iOS 15 or later. Older devices and Android phones cannot install the current build." },
      { name: "Install TestFlight", text: "Get Apple TestFlight from the App Store. It is Apple's free app for installing beta builds." },
      { name: "Open the Help Me invitation", text: "Use the TestFlight link on the download page. It opens in TestFlight rather than the App Store." },
      { name: "Install and sign in", text: "Tap Install, open Help Me, and create an account with email or Sign in with Apple." },
    ],
    takeaways: [
      "TestFlight first, then Help Me. Two separate installs.",
      "iOS 15 or later required.",
      "Free, with no subscription or purchase.",
      "An account is needed for requests, chat, and deletion.",
    ],
    keywords: ["download Help Me", "Help Me TestFlight", "install Help Me app", "Help Me iPhone"],
    sections: [
      {
        heading: "Why TestFlight and not the App Store",
        body: [
          "Help Me is in beta and shipping fast. TestFlight is how iPhone beta builds are distributed, and it means fixes reach you in days instead of waiting in a review queue. It also means builds expire, so you will occasionally update through TestFlight rather than the App Store.",
        ],
      },
      {
        heading: "If the link does not open",
        body: [
          "Make sure TestFlight is installed first. A TestFlight link opened without the app just shows a web page. Open the link on the iPhone itself, not on a laptop. If a beta is full or a build has expired, email support@helpme.fyi and a person will answer.",
        ],
        bullets: [
          "Install TestFlight first.",
          "Open the link on your iPhone.",
          "Update the build in TestFlight if it expires.",
        ],
      },
      {
        heading: "After you install",
        body: [
          "You will create an account, and then you can ask or apply to help. Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
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
      {
        q: "Is there a QR code?",
        a: "Yes. The download page has a QR code you can scan with your iPhone camera.",
      },
    ],
  }),
  page({
    slug: "questions/does-help-me-work-outside-fargo",
    kind: "question",
    title: "Does Help Me work outside Fargo-Moorhead?",
    description:
      "Help Me launches in Fargo, West Fargo, and Moorhead first, one zone at a time. Matching and events are local, so coverage thins outside the metro.",
    h1: "Does Help Me work outside Fargo-Moorhead?",
    eyebrow: "Answer",
    lead: "Not the way a national app would, and that is on purpose. It is one metro, done properly.",
    answer:
      "Help Me is launching in Fargo and West Fargo in North Dakota and Moorhead in Minnesota first, one zone at a time. Matching and event calendars are local. Outside that area the app will install, but there is unlikely to be anyone nearby to say yes to your request.",
    takeaways: [
      "Launch area: Fargo, West Fargo, and Moorhead, one zone at a time.",
      "Matching is geographic. No one nearby means no offers.",
      "Event calendars come from local sources only.",
      "Nearby towns are covered on a single page.",
    ],
    keywords: ["Help Me coverage", "Help Me outside Fargo", "Help Me where available", "Help Me service area"],
    sections: [
      {
        heading: "How far the metro stretches",
        body: [
          "People in Horace, Harwood, Casselton, Dilworth, Glyndon, and nearby towns live inside Fargo-Moorhead's daily orbit. They work here, study here, and get stuck in the same parking lots. Help Me launches in the three cities first, and the app shows what is open near you.",
          "Farther towns have real ties to the metro, but thin coverage, and this site does not pretend otherwise.",
        ],
      },
      {
        heading: "Why not national",
        body: [
          "A help app is only as good as the number of people willing to show up near you. Claiming national coverage would mean shipping empty maps to strangers. One metro, actually served, is the product.",
        ],
        bullets: [
          "Fargo and West Fargo in North Dakota.",
          "Moorhead and Dilworth in Minnesota.",
          "Nearby towns grouped on one page.",
        ],
      },
      {
        heading: "Visiting is fine",
        body: [
          "If you are in the metro with an iPhone and an account, you can ask like anyone else. Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["cities", "cities/fargo", "cities/moorhead", "cities/west-fargo", "cities/towns-around-fargo-moorhead", "questions/what-is-help-me"],
    faqs: [
      {
        q: "Can I use it while visiting Fargo?",
        a: "Yes. If you are in the metro with an iPhone and an account, you can ask like anyone else.",
      },
      {
        q: "Will other cities be added?",
        a: "Nothing is announced. When another place is real, it will show up on this site, not in a rumor.",
      },
      {
        q: "Is my town covered?",
        a: "Nearby towns are on one page. The app shows what is open near you.",
      },
    ],
  }),
  page({
    slug: "questions/can-i-pay-a-helper",
    kind: "question",
    title: "Can I pay someone who helps me on Help Me?",
    description:
      "No. Help Me has no payments, tipping, or fees. Helpers are neighbors giving everyday help, not contractors being hired for a task.",
    h1: "Can I pay someone who helps me?",
    eyebrow: "Answer",
    lead: "No. If you want to say thanks, say thanks. The app stays out of the money.",
    answer:
      "No. Help Me does not process payments, tips, or fees of any kind. Helpers are neighbors who applied and were reviewed by our team, not contractors taking a job. If you want to thank someone in a parking lot, that is between two adults. The app does not mediate it, track it, or take a cut.",
    takeaways: [
      "No in-app payments, tipping, or invoicing.",
      "Helping is unpaid. The app is not an income source.",
      "Not a marketplace: no bids, quotes, or service fees.",
      "Requests are for small favors, not contracted labor.",
    ],
    keywords: ["pay a Help Me helper", "Help Me tipping", "Help Me payment", "does Help Me charge"],
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
          "Ask for the small, finishable thing. A jump start. A hand with a couch. Someone to walk with you to a car at eleven at night. If what you need is a paid trade, like a licensed electrician, a tow truck, or a mover, hire one. Help Me is not that and will not pretend to be.",
        ],
        bullets: [
          "Small, finishable favors only.",
          "No bids, no quotes, no fees.",
          "For paid trades, hire a professional.",
        ],
      },
      {
        heading: "If someone asks you for money",
        body: [
          "Asking for payment is not what Help Me is for. Decline, then report and block. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["questions/is-help-me-a-gig-app", "questions/is-help-me-free", "questions/what-should-i-not-ask-for", "helpers"],
    faqs: [
      {
        q: "Can a helper ask me for money?",
        a: "No. Asking for payment is not what the platform is for. Report it if it happens.",
      },
      {
        q: "What about gas money for a long drive?",
        a: "That is a sign the request is too big for the app. Requests should be small, local, and finishable.",
      },
      {
        q: "Can I tip?",
        a: "Tipping is not a feature. A thank you is welcome, and that is as far as it goes.",
      },
    ],
  }),
  page({
    slug: "questions/how-long-does-a-request-stay-open",
    kind: "question",
    title: "How long does a Help Me request stay open?",
    description:
      "Up to two hours. If nobody says yes in that window the request closes on its own and you can post a new one. Only one live request at a time.",
    h1: "How long does a request stay open?",
    eyebrow: "Answer",
    lead: "Two hours at most, and then it closes on its own. Small favors are time-shaped.",
    answer:
      "A live request stays open for up to two hours. If nobody says yes in that window, it closes automatically and you can post a new one. You can have only one live request at a time, so the map never fills with stale asks from someone who already got what they needed.",
    takeaways: [
      "Two hours is the maximum for a request with no yes.",
      "One live request per person at a time.",
      "Closing is automatic. Nothing lingers.",
      "You can post again as soon as it closes.",
    ],
    keywords: ["how long Help Me request", "Help Me request expires", "Help Me two hours", "one request at a time"],
    sections: [
      {
        heading: "Why two hours",
        body: [
          "Everyday help is time-shaped. A request for a jump start means little four hours later: either you are gone, or you are in real trouble. A window that closes on its own keeps the map honest about what is still live.",
        ],
      },
      {
        heading: "Why only one at a time",
        body: [
          "One live request keeps the ask specific and keeps neighbors from being spread across a queue from the same person. If two things are wrong at once, ask for the one a neighbor can actually solve, and use the official resources for the rest.",
        ],
        bullets: [
          "Closing is automatic after two hours.",
          "Post again right after it closes.",
          "For anything urgent, do not wait. Call 911.",
        ],
      },
      {
        heading: "After a yes",
        body: [
          "The two-hour window is about finding someone. Once a neighbor says yes, you are in a private chat working it out together. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["glossary/help-request", "questions/what-happens-if-nobody-accepts", "questions/can-i-cancel-a-request", "how-it-works", "guides/how-to-ask-for-help"],
    faqs: [
      {
        q: "Does the timer restart when someone says yes?",
        a: "The two-hour window is about finding someone. Once a neighbor says yes, you are in a private chat working it out together.",
      },
      {
        q: "Can I post again right away?",
        a: "Yes. Once the old request closes, you can create a new one.",
      },
      {
        q: "Can I have two requests open?",
        a: "No. You can have only one live request at a time.",
      },
    ],
  }),
  page({
    slug: "questions/what-happens-if-nobody-accepts",
    kind: "question",
    title: "What happens if nobody says yes to my request?",
    description:
      "The request closes after two hours and you can try again. For anything urgent, do not wait: call 911 or the right official service.",
    h1: "What happens if nobody says yes?",
    eyebrow: "Answer",
    lead: "It closes on its own, you can try again, and for anything urgent the app was never the plan.",
    answer:
      "If nobody says yes within two hours, your request closes on its own and you can post a new one. Help Me never promises someone will be nearby. Saying yes is voluntary, and coverage depends on time and place. If it is urgent, call 911 or the right official service instead of waiting on the app.",
    takeaways: [
      "A request closes after two hours with no yes.",
      "You can try again right away.",
      "Help Me does not promise anyone is nearby.",
      "For anything urgent, call 911 or an official service.",
    ],
    keywords: ["nobody accepted Help Me", "Help Me no response", "Help Me no helpers", "request not accepted"],
    sections: [
      {
        heading: "Why it sometimes happens",
        body: [
          "Saying yes is voluntary. Late at night, in quiet areas, or at odd hours, fewer people are awake and nearby. Help Me does not promise anyone is on call, and it does not pretend a quiet map is busy. A request that sits unanswered is information, not a failure.",
        ],
      },
      {
        heading: "What to try next",
        body: [
          "Post again with a clearer sentence or a named public place. Try a time when more neighbors are around, like an evening near campus. Or use another route: a friend, a roadside service, a store employee, or an official number. The Resources pages list them.",
        ],
        bullets: [
          "Post again with a clearer sentence.",
          "Name a public place.",
          "Try a busier time of day.",
          "Use an official or professional service if it is more than a small favor.",
        ],
      },
      {
        heading: "The backup plan is not the app",
        body: [
          "A highway shoulder, a medical problem, a threat, or a car you cannot stay in during a cold snap is a call to 911, roadside assistance, or campus public safety. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["questions/how-long-does-a-request-stay-open", "guides/how-to-ask-for-help", "resources", "not-911", "resources/fargo-emergency", "help"],
    faqs: [
      {
        q: "Will I be told nobody said yes?",
        a: "The request closes when the window ends. You can post a new one right away.",
      },
      {
        q: "Are some hours better than others?",
        a: "Realistically, yes. More neighbors are awake and nearby in the evening near campuses and shopping areas than at three in the morning.",
      },
      {
        q: "What if it is urgent?",
        a: "Do not wait on an app. Call 911 or your local emergency number.",
      },
    ],
  }),
  page({
    slug: "questions/can-i-cancel-a-request",
    kind: "question",
    title: "Can I cancel a Help Me request?",
    description:
      "Yes. You can close a request you no longer need. If someone already said yes, tell them in the private chat first: they may already be on the way.",
    h1: "Can I cancel a request?",
    eyebrow: "Answer",
    lead: "Yes, any time. And if someone is already on their way, a quick note in the chat is the kind thing to do.",
    answer:
      "Yes. You can close a request you no longer need, and one that nobody answers closes on its own within two hours. If a neighbor has already said yes, say so in the private chat before you go quiet, because they may already be on the way. When the request ends, exact location sharing ends with it.",
    takeaways: [
      "Requests can be closed at any point.",
      "Tell a neighbor who said yes before you cancel.",
      "Unanswered requests close on their own.",
      "Ending the request ends exact location sharing.",
    ],
    keywords: ["cancel Help Me request", "close request Help Me", "undo Help Me request"],
    sections: [
      {
        heading: "The problem solved itself",
        body: [
          "It happens constantly: a coworker had cables, the door was unlocked, the friend showed up. Close it. There is no penalty, and a stale live request is worse for everyone than a canceled one.",
        ],
      },
      {
        heading: "If someone is already on the way",
        body: [
          "Two sentences in the chat is the whole obligation: it is handled, thank you, sorry for the trip. Vanishing on someone who left what they were doing for you is the one thing that makes people stop showing up for each other.",
        ],
        bullets: [
          "Say it is handled.",
          "Say thank you.",
          "Close the request.",
        ],
      },
      {
        heading: "The same goes the other way",
        body: [
          "A neighbor can change their mind too. Plans change and roads close. Saying so in the chat is the same courtesy. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["glossary/help-request", "questions/how-long-does-a-request-stay-open", "guides/how-to-ask-for-help", "glossary/completion-and-reviews", "how-it-works", "questions/how-do-i-report-a-problem"],
    faqs: [
      {
        q: "Does canceling hurt my account?",
        a: "Canceling because a problem resolved is normal. Repeatedly pulling people out for nothing is different and can be reported.",
      },
      {
        q: "Can a helper cancel?",
        a: "Yes. Plans change and roads close. Saying so in the chat is the same courtesy in the other direction.",
      },
      {
        q: "What happens to my location when I cancel?",
        a: "Exact location sharing ends when the request ends.",
      },
    ],
  }),
];

export const QUESTION_PAGES: SeoPage[] = [...QUESTION_PAGES_FIRST, ...QUESTION_PAGES_MORE];
