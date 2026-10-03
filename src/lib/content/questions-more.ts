import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

/** Second half of the answer-engine pages. See questions.ts for the rules every one follows. */
export const QUESTION_PAGES_MORE: SeoPage[] = [
  page({
    slug: "questions/who-can-use-help-me",
    kind: "question",
    title: "Who can use Help Me? Age and eligibility",
    description:
      "Help Me is a community app for adults in Fargo-Moorhead. It is not a network for children, not a youth chat, and not a school program.",
    h1: "Who is Help Me actually for?",
    eyebrow: "Answer",
    lead: "Short version: adults who live, work, or study in Fargo, West Fargo, or Moorhead, and who want a place to ask a neighbor for the small stuff.",
    answer:
      "Help Me is a community app for adults in the Fargo-Moorhead area: residents, college students, and people passing through the metro. It is not a network for children, not a youth chat, and not a school program. College students are adults and use it like anyone else.",
    takeaways: [
      "Adults in Fargo, West Fargo, Moorhead, and the surrounding towns.",
      "Not designed for children and not marketed to them.",
      "Not affiliated with or endorsed by any school or district.",
      "Helping requires a current review by our team.",
    ],
    keywords: ["Help Me age requirement", "who can use Help Me", "Help Me adults only", "Help Me eligibility"],
    sections: [
      {
        heading: "Why the line is drawn hard",
        body: [
          "An app that connects a person to someone nearby is not a product for children, however good the intention. So there is no youth mode, no parent-supervised child account, and no school rollout. Parents deserve that said plainly, not discovered later.",
          "Help Me is a place to ask your block for the small stuff, and it is built for adults who can decide for themselves where to meet, what to share, and when to say no.",
        ],
      },
      {
        heading: "Who tends to use it",
        body: [
          "Residents who just moved in. People between jobs and campuses. Parents with their hands full. Older adults who would rather ask a neighbor than call a service. College students who are adults and want a charger, directions, or two more hands. Everyone is welcome who is an adult in the metro.",
        ],
        bullets: [
          "Residents of Fargo, West Fargo, Moorhead, Dilworth, and nearby towns.",
          "Adults at colleges in the metro, who use it like anyone else.",
          "Visitors in town with an iPhone.",
        ],
      },
      {
        heading: "What helping requires",
        body: [
          "Anyone can join. Helping is gated: it requires a current review by our team after identity evidence. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["for-parents", "about", "ground-rules", "questions/what-happens-when-you-meet-someone", "helpers", "legal/terms"],
    faqs: [
      {
        q: "Is Help Me endorsed by a school or district?",
        a: "No. There is no district partnership and no campus endorsement. Official campus calendars are attributed to their sources, which is not the same as sponsorship.",
      },
      {
        q: "Can a teenager use Help Me?",
        a: "No. Help Me is a community app for adults. It is not designed for children, and helping requires the adult review process.",
      },
      {
        q: "Do I need to live in Fargo-Moorhead?",
        a: "The app is built for the metro, and matching is local. You can install it anywhere, but you are unlikely to find a neighbor nearby outside the area.",
      },
    ],
  }),
  page({
    slug: "questions/is-help-me-911",
    kind: "question",
    title: "Is Help Me an emergency service?",
    description:
      "No. Help Me is not 911, campus police, or dispatch. For danger, injury, fire, or a crime in progress, call 911 in North Dakota and Minnesota.",
    h1: "Is Help Me an emergency service?",
    eyebrow: "Answer",
    lead: "No, and it is worth saying first. If someone is in immediate danger, call 911 or your local emergency number.",
    answer:
      "No. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. It does not dispatch police, fire, or medical help, and nobody on the app is on call. 911 works on both sides of the Red River, in Fargo, West Fargo, Moorhead, Dilworth, and the surrounding counties.",
    takeaways: [
      "911 works on both sides of the Red River.",
      "988 is the mental health crisis line. 211 is information and referral.",
      "Help Me cannot dispatch police, fire, or medical response.",
      "Do not wait on an app when you need an official response.",
    ],
    keywords: ["Help Me 911", "is Help Me an emergency app", "Fargo emergency number", "non-emergency help Fargo"],
    sections: [
      {
        heading: "Where the boundary sits",
        body: [
          "A dead battery in a lit parking lot is everyday help. A stranger following you is not. Chest pain is not. A car in a ditch in a whiteout is not. The difference is not how upset you are. It is whether the right answer is a neighbor with ten minutes or a trained responder with a radio.",
        ],
        bullets: [
          "911: danger, injury, fire, crime in progress.",
          "988: suicidal thoughts or a mental health crisis.",
          "211: food, housing, utilities, and referrals in ND and MN.",
          "Campus public safety: incidents on NDSU, MSUM, Concordia, or M State property.",
        ],
      },
      {
        heading: "Why an app cannot be the fallback",
        body: [
          "Nobody is on call. Saying yes is voluntary, and requests close on their own after two hours. There is no dispatcher watching a map at three in the morning. Designing honestly around that means telling you to call, not to post.",
        ],
      },
      {
        heading: "After you call",
        body: [
          "Help Me is for what comes after: a hand with a car, company while you wait, a phone charger. Call first and post second. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["not-911", "resources/fargo-emergency", "resources", "ground-rules", "resources/211-north-dakota", "resources/mental-health-fargo"],
    faqs: [
      {
        q: "Can I use Help Me after calling 911?",
        a: "Yes, for the small stuff that follows: a hand with a car, company, a charger. Call first, post second.",
      },
      {
        q: "Does reporting someone notify police?",
        a: "No. Reports go to our team. If a crime happened, call 911 or the police yourself.",
      },
      {
        q: "What number do I call for a mental health crisis?",
        a: "Call or text 988. For immediate danger, call 911.",
      },
    ],
  }),
  page({
    slug: "questions/how-do-i-delete-my-account",
    kind: "question",
    title: "How do I delete my Help Me account?",
    description:
      "Open Account in the app, choose delete, and type DELETE to confirm. It is self-serve: you do not need to email anyone to leave.",
    h1: "How do I delete my account?",
    eyebrow: "Answer",
    lead: "You can leave any time, and you do not need anyone's permission. It takes a minute, from inside the app.",
    answer:
      "Open Help Me, go to Account, choose to delete your account, and type DELETE to confirm. It is self-serve, with no support ticket and no waiting on a reply. Close any live request first so nobody is left waiting on a chat that is about to disappear.",
    steps: [
      { name: "Finish anything live", text: "Close or complete an open request so a neighbor is not left mid-conversation." },
      { name: "Open Account", text: "In the app, go to your Account settings." },
      { name: "Choose deletion", text: "Select the account deletion option." },
      { name: "Type DELETE", text: "Confirm by typing DELETE. That step exists so it cannot happen by accident." },
    ],
    takeaways: [
      "Deletion lives in Account, inside the app.",
      "Typing DELETE is the confirmation step.",
      "No email or support request is required.",
      "Deleting the app alone does not delete the account.",
    ],
    keywords: ["delete Help Me account", "remove Help Me account", "Help Me account deletion", "leave Help Me"],
    sections: [
      {
        heading: "Deleting the app is not deleting the account",
        body: [
          "Removing the icon from your home screen leaves the account where it was. If leaving is what you mean, do it from Account inside the app before you uninstall.",
        ],
      },
      {
        heading: "What to do first",
        body: [
          "Finish or close any live request so a neighbor is not left waiting. Say thanks in the chat if you want to. Then open Account, choose deletion, and type DELETE. The whole thing takes about a minute.",
        ],
        bullets: [
          "Close or complete a live request.",
          "Open Account and choose deletion.",
          "Type DELETE to confirm.",
        ],
      },
      {
        heading: "If you are locked out",
        body: [
          "Email support@helpme.fyi from the address on the account. A person reads it. The privacy policy is the document that governs what happens to data after deletion, and it is the place to check before you ask.",
        ],
      },
    ],
    related: ["glossary/account-deletion", "legal/privacy", "support/contact", "questions/how-do-i-report-a-problem", "support/help"],
    faqs: [
      {
        q: "Can I come back later?",
        a: "You would sign up again as a new account. Deletion is not a pause button.",
      },
      {
        q: "Does deleting remove my reports?",
        a: "Reports exist so they mean something. The privacy policy describes what is kept and why.",
      },
      {
        q: "Will deleting the app delete my account?",
        a: "No. Delete the account from Account inside the app first, then remove the app if you want to.",
      },
    ],
  }),
  page({
    slug: "questions/what-can-i-ask-for",
    kind: "question",
    title: "What can I ask for on Help Me?",
    description:
      "Small, public favors: a phone charger, directions, a jump start in daylight, a hand with something heavy, tech help, or a study session in Fargo-Moorhead.",
    h1: "What can I actually ask for?",
    eyebrow: "Answer",
    lead: "Anything small, public, and finishable in one meeting, from a phone charger to two more hands for a couch.",
    answer:
      "Ask for small favors a neighbor can finish in one meeting: a phone charger, directions, a jump start in daylight, a hand carrying something heavy, a walk to your car, tech help, or a study session. If it needs a license, a tow truck, a dispatcher, or a whole afternoon, it belongs somewhere else.",
    takeaways: [
      "Small and finishable in one meeting.",
      "Not an emergency, and nothing that needs a license or a paid contractor.",
      "Public places by default.",
      "A category on its own is fine, and you do not have to explain yourself.",
    ],
    keywords: ["what can I ask for Help Me", "Help Me requests", "Help Me favors", "ask a neighbor for help"],
    sections: [
      {
        heading: "The everyday list",
        body: [
          "Most requests are ordinary in the best sense. A battery died in a grocery lot. A couch will not turn the corner. A first-year cannot find the right building. Someone finished a shift at eleven and does not want to walk to the ramp alone. A printer ate a page an hour before it is due.",
        ],
        bullets: [
          "A jump start, flat tire help, a push out of snow.",
          "Heavy lifting, a move-in, a second pair of hands.",
          "Directions, a local tip, a campus building.",
          "A walk with someone to a car or a bus stop.",
          "Printing, basic tech help, a study buddy.",
        ],
      },
      {
        heading: "Say it like a person",
        body: [
          "One sentence beats a paragraph. A category on its own still makes sense to a neighbor, so if you do not want to explain yourself, do not. Naming a public meeting place gets you a yes faster than any amount of context.",
        ],
      },
      {
        heading: "Keep it small",
        body: [
          "A request closes on its own after two hours, and you can have only one live request at a time. That keeps asks specific. If it is bigger than a few minutes, there is probably a better tool. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["help", "questions/what-should-i-not-ask-for", "guides/how-to-ask-for-help", "help/jump-start", "help/heavy-lifting", "help/walk-with-someone"],
    faqs: [
      {
        q: "Can I ask someone to drive me?",
        a: "No. Help Me does not arrange transportation. Use MATBUS, a rideshare, or a campus escort where one exists.",
      },
      {
        q: "Do I have to explain why I need it?",
        a: "No. Pick a category, add a sentence if you want, and leave the rest.",
      },
      {
        q: "What if my request does not fit a category?",
        a: "If it is small, public, and a neighbor could actually do it, ask in a sentence. If it needs a license, a tow, or 911, use that.",
      },
    ],
  }),
  page({
    slug: "questions/what-should-i-not-ask-for",
    kind: "question",
    title: "What should I not ask for on Help Me?",
    description:
      "No emergencies, no paid work, no licensed trades, no transportation, no medical or legal advice, and nothing that asks a stranger into a private space alone.",
    h1: "What should I not ask for?",
    eyebrow: "Answer",
    lead: "The short list of things Help Me is not for, so you can reach for the right tool the first time.",
    answer:
      "Do not use Help Me for emergencies, paid work, licensed trades, transportation, medical or legal advice, anything illegal, or requests that put someone alone in a private space with you. Those need 911, a professional, or a service built for them. Help Me is small, everyday, public-by-default favors between adults.",
    takeaways: [
      "Emergencies go to 911, 988, or campus public safety.",
      "No paid work. The app has no payments at all.",
      "No electrical, plumbing, mechanical, medical, or legal work.",
      "Public places by default. Keep private-space requests off the app.",
    ],
    keywords: ["what not to ask Help Me", "Help Me rules", "Help Me prohibited requests"],
    sections: [
      {
        heading: "The categories that are always no",
        body: [
          "Emergencies, because nobody is on call. Paid work, because there is no payment layer. Licensed trades and professional advice, because a neighbor is not a credentialed professional, and treating them like one hurts both people. Anything illegal, which needs no further explanation.",
        ],
        bullets: [
          "Emergency, medical, or crisis response.",
          "Paid tasks, gig work, or hauling for hire.",
          "Electrical, plumbing, roofing, mechanical repair, childcare, or pet boarding.",
          "Medical, legal, financial, or immigration advice.",
          "Anything illegal, or anything you would not do in a lit parking lot.",
        ],
      },
      {
        heading: "The judgment-call zone",
        body: [
          "A hand carrying boxes to a doorway is normal. A stranger spending two hours alone in your apartment is not what this is for. If a request only works when nobody else can see it, that is the signal to stop and use a service built for it.",
        ],
      },
      {
        heading: "If someone asks for something off-limits",
        body: [
          "Decline, then report and block. Both are one tap from the request. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["questions/what-can-i-ask-for", "not-911", "questions/can-i-pay-a-helper", "ground-rules", "legal/terms", "guides/meeting-someone-new-in-fargo"],
    faqs: [
      {
        q: "Can I ask for help moving apartments?",
        a: "A hand with a few heavy items is reasonable. A full move is a job for movers or friends.",
      },
      {
        q: "What if someone asks me for something off-limits?",
        a: "Decline, then report and block. Both are one tap from the request.",
      },
      {
        q: "Can I ask a neighbor to watch my kid?",
        a: "No. Childcare is never a Help Me request, however short.",
      },
    ],
  }),
  page({
    slug: "questions/does-help-me-share-my-phone-number",
    kind: "question",
    title: "Does Help Me share my phone number?",
    description:
      "No. Conversation happens in a private in-app chat between you and the neighbor who said yes. Contact details are yours to share or not.",
    h1: "Does Help Me give out my phone number?",
    eyebrow: "Answer",
    lead: "No. Everything you need to meet someone happens in the app, and you decide what else to share.",
    answer:
      "No. When a neighbor says yes, a private in-app chat opens between the two of you, and that is where you coordinate. Your phone number is not handed over as part of matching. If you choose to share contact details, that is your decision, and keeping the conversation in the app until you have met is a good default.",
    takeaways: [
      "Coordination happens in the private in-app chat.",
      "No number swap is required to meet someone.",
      "Only the neighbor who said yes is in that conversation.",
      "Keeping it in the app keeps report and block meaningful.",
    ],
    keywords: ["Help Me phone number", "does Help Me share my number", "Help Me private chat", "Help Me privacy"],
    sections: [
      {
        heading: "Why in-app works better",
        body: [
          "A conversation inside the app is attached to the request. If something goes wrong, a report has context. If you block someone, the channel actually closes. A text thread on your personal number has none of that, and it outlives the request by years.",
        ],
      },
      {
        heading: "What a neighbor can see about you",
        body: [
          "Enough to recognize you in a parking lot and no more. The map shows a rough area about 500 meters wide rather than an address, and precise location only exists after you agree, with one person, for the length of the request.",
        ],
        bullets: [
          "A rough area on the map, not an address.",
          "A private chat with the neighbor who said yes.",
          "Precise location only if you choose to share it.",
        ],
      },
      {
        heading: "If you do share more",
        body: [
          "That is your call. It is not required for anything the app does, and you can stop at any time. You can report or block any member at any time, and delete your account from inside the app by typing DELETE. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["glossary/private-chat", "questions/who-can-see-my-location", "legal/privacy", "ground-rules", "questions/can-i-block-someone", "guides/location-privacy"],
    faqs: [
      {
        q: "Can I share my number if I want to?",
        a: "You can. It is a personal call, and it is not required for anything the app does.",
      },
      {
        q: "Can other helpers read my chat?",
        a: "No. The thread is between you and the neighbor who said yes.",
      },
      {
        q: "Does a helper see my address?",
        a: "No. They see a rough area about 500 meters wide. More precise location is opt-in after someone says yes.",
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
    eyebrow: "Answer",
    lead: "Yes, any time, for any reason, and you do not owe anyone an explanation.",
    answer:
      "Yes. You can report or block any member at any time, from inside any request or chat. Blocking takes effect immediately, and blocked pairs are excluded when helpers are considered for a request, so the two of you are not matched again. You do not need to explain yourself to anyone to use it.",
    takeaways: [
      "Blocking is immediate and one tap from the request.",
      "Blocked pairs are excluded from future matching.",
      "Reporting sends context to our team. Blocking is your own switch.",
      "For anything criminal or threatening, call 911 as well.",
    ],
    keywords: ["block someone Help Me", "report Help Me user", "Help Me block", "Help Me report"],
    sections: [
      {
        heading: "Report and block are not the same thing",
        body: [
          "Blocking is personal and takes effect at once: that person is out of your world in the app. Reporting is a message to our team with the request attached, and it can affect whether someone keeps a current review. Use both when both fit. Use block on its own whenever you want to.",
        ],
      },
      {
        heading: "When it is more than an app problem",
        body: [
          "If someone threatened you, followed you, or committed a crime, call 911, and then the police non-emergency line for the follow-up. A block protects your next request. It does not investigate anything.",
        ],
      },
      {
        heading: "Walking away is always allowed",
        body: [
          "You do not owe anyone politeness at the cost of your comfort. If a meeting feels off, leave. Meeting in public, in daylight when you can, makes leaving easier. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["glossary/report-and-block", "questions/how-do-i-report-a-problem", "ground-rules", "resources/fargo-police"],
    faqs: [
      {
        q: "Will they be told I blocked them?",
        a: "Blocking is not designed as a message. It is designed to end contact.",
      },
      {
        q: "Can I unblock later?",
        a: "Yes. Manage blocks from your account settings in the app.",
      },
      {
        q: "Does blocking tell the police?",
        a: "No. Blocking is a personal setting, and reports go to our team. If a crime happened, call 911 yourself.",
      },
    ],
  }),
  page({
    slug: "questions/how-does-matching-work",
    kind: "question",
    title: "How does Help Me match requests to neighbors?",
    description:
      "A request is shown privately to helpers who are online, suitable for the category, recently active, and not blocked. The first to say yes gets it.",
    h1: "How does matching actually work?",
    eyebrow: "Answer",
    lead: "Short version: a private offer to a short list of people who could plausibly show up, and the first yes wins.",
    answer:
      "When you post a request, Help Me privately shows it to helpers who are online, suitable for the category, recently active, and not blocked by either of you. The first one to say yes gets the request, and a private chat opens. Distance is judged from your rough area, not a precise pin.",
    takeaways: [
      "Offers are short-lived and private, not a public feed.",
      "Filters: current review, online, category fit, recent activity, no block.",
      "The first eligible yes takes it. There is no bidding.",
      "Distance is judged from a rough area, not a pin.",
    ],
    keywords: ["how Help Me matching works", "Help Me match helpers", "Help Me requests nearby", "Help Me offers"],
    sections: [
      {
        heading: "Why it is private",
        body: [
          "A public list of who needs help turns a bad morning into a permanent record. Offers are short-lived and aimed, so your request reaches the people who could plausibly show up and nobody else. There is nothing to scroll and nothing to browse.",
        ],
      },
      {
        heading: "What makes a yes more likely",
        body: [
          "Timing and place. Near a campus in the evening, more people are awake and nearby than in a quiet part of the metro at three in the morning. Choosing the right category matters too, because who sees your request is filtered by it. Help Me does not promise anyone will be nearby.",
        ],
        bullets: [
          "Pick the category that fits.",
          "Name a public place in a sentence.",
          "Ask during hours when neighbors are likely to be around.",
        ],
      },
      {
        heading: "What happens after a yes",
        body: [
          "A private chat opens between you and that one neighbor, and you decide what location to share and where to meet. Both of you confirm it is done. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["how-it-works", "questions/what-happens-if-nobody-accepts", "questions/who-can-see-my-location", "helpers", "glossary/online-status"],
    faqs: [
      {
        q: "Can helpers browse all requests?",
        a: "No. There is no open list to scroll. Offers are sent, short-lived, and specific.",
      },
      {
        q: "Do helpers see my exact position?",
        a: "Not from an offer. They see a rough area. Precise location comes later, only if you agree.",
      },
      {
        q: "Will someone always say yes?",
        a: "No. Help Me is a place to ask, and a place to answer. Saying yes is voluntary.",
      },
    ],
  }),
  page({
    slug: "questions/where-do-events-come-from",
    kind: "question",
    title: "Where do Help Me event listings come from?",
    description:
      "From a fixed list: NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo, always linked to the source that published them.",
    h1: "Where do the events come from?",
    eyebrow: "Answer",
    lead: "From six named sources, every time, and each event links back to the page that published it.",
    answer:
      "Event listings come from a fixed set of official sources: NDSU, MSUM, Concordia College, M State, the City of West Fargo, and Ticketmaster Fargo. Every listing links back to the source that published it. Help Me does not create or host events, and showing a source is not affiliation with or endorsement by it.",
    takeaways: [
      "Six sources, always attributed with a link.",
      "No invented, rewritten, or user-submitted events.",
      "If a feed is down, the app says so.",
      "To add an event, publish it on the official calendar.",
    ],
    keywords: ["Help Me events source", "NDSU events Help Me", "Fargo events calendar", "West Fargo calendar"],
    sections: [
      {
        heading: "The fixed list",
        body: [
          "NDSU through MyNDSU. MSUM through Campus Labs. Concordia through Cobber Connect. M State through minnesota.edu. West Fargo through its public calendar. Ticketmaster Fargo for regional shows within about 35 miles of Fargo. Nothing else is pulled in.",
        ],
        bullets: [
          "NDSU: myndsu.ndsu.edu/events",
          "MSUM: mnstate.campuslabs.com/engage/events",
          "Concordia: cobberconnect.cord.edu/events",
          "M State: minnesota.edu/events",
        ],
      },
      {
        heading: "What attribution means",
        body: [
          "Every event shows the source name and links to the official page, which is the last word on time and place. Showing a source is not the same as being affiliated with it, and Help Me does not claim to be. If a feed is empty or down, the app says so instead of filling the screen with made-up listings.",
        ],
      },
      {
        heading: "Adding an event",
        body: [
          "You cannot submit an event on this website or in the app. Publish it on the official campus or city calendar, and Help Me will pick it up from that source. That keeps one place as the source of truth.",
          "Help Me is a place to ask your block for the small stuff, and events are one way to show that people here show up.",
        ],
      },
    ],
    related: ["events", "community", "campuses", "guides/campus-events-fargo-moorhead", "lists/fargo-events-guide", "glossary/event-attribution"],
    faqs: [
      {
        q: "Can I submit an event?",
        a: "No. Publish it on the official campus or city calendar and Help Me will pick it up from that source.",
      },
      {
        q: "Does Help Me host these events?",
        a: "No. Help Me lists events from other sources and links back. It is not affiliated with or endorsed by them.",
      },
      {
        q: "What if an event looks wrong?",
        a: "Open the official link. The source is the last word on time and place.",
      },
    ],
  }),
  page({
    slug: "questions/where-should-i-meet-a-helper",
    kind: "question",
    title: "Where should I meet someone from Help Me?",
    description:
      "In a public place, in daylight when you can: a store entrance, a library lobby, a campus union, or a busy lot. Never a doorstep or a stranger's car.",
    h1: "Where should I meet someone?",
    eyebrow: "Answer",
    lead: "Somewhere public, busy, and easy to describe in one sentence, and never somewhere only the two of you can see.",
    answer:
      "Meet in a public, busy place, in daylight when you can: a store entrance, a library lobby, a campus union, or a well-lit lot with other people around. Never meet at a doorstep or in a stranger's car, and keep both people outside the car for anything involving a vehicle. You choose the place, and you can leave any time.",
    takeaways: [
      "Public, busy, and easy to describe.",
      "Daylight when you can.",
      "Never a doorstep, and never inside a stranger's car.",
      "You choose, and you can leave any time.",
    ],
    keywords: ["where to meet Help Me", "meet in public Fargo", "public meeting places Fargo", "meet a stranger Fargo"],
    sections: [
      {
        heading: "What a good place looks like",
        body: [
          "A store entrance with foot traffic. A library lobby. A campus union. A well-lit lot with other cars and people. A coffee shop counter. These are places where other people are around, where it is easy to say where you are, and where leaving takes ten seconds.",
        ],
        bullets: [
          "A store or mall entrance with foot traffic.",
          "A library or campus union lobby.",
          "A busy coffee shop.",
          "A lit lot with other people around, in daylight when possible.",
        ],
      },
      {
        heading: "What a bad place looks like",
        body: [
          "A doorstep. An alley. A far row of an empty lot. A park path after dark. A stranger's car. Somewhere nobody else can see you, or that is hard to leave. If you are not sure, it probably is not right, and a better place is usually a block away.",
        ],
      },
      {
        heading: "The map and the meeting are separate",
        body: [
          "Your request shows as a rough area about 500 meters wide, so you can name the exact public place in chat. Share more location only if you want to. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["guides/meeting-someone-new-in-fargo", "lists/public-meeting-places-fargo", "lists/public-meeting-places-moorhead", "ground-rules", "questions/who-can-see-my-location"],
    faqs: [
      {
        q: "Can I meet at my home?",
        a: "Meeting in public is the default. A doorstep is never the place to meet. Anything beyond that is your own call.",
      },
      {
        q: "What about meeting at night?",
        a: "Daylight is better. If it has to be dark, pick a busy, lit place with other people around, and consider asking a friend to know where you are.",
      },
      {
        q: "Should I get in a stranger's car?",
        a: "No. Keep both people outside the car for anything involving a vehicle.",
      },
    ],
  }),
  page({
    slug: "questions/how-do-i-report-a-problem",
    kind: "question",
    title: "How do I report a problem on Help Me?",
    description:
      "Use report in any request or chat, and block if you want contact to end. For anything criminal or threatening, call 911 as well.",
    h1: "How do I report a problem?",
    eyebrow: "Answer",
    lead: "From any request or chat, in a couple of taps, and you do not need proof or a reason.",
    answer:
      "Open the request or chat and choose report, and block as well if you want contact to end. Reports go to our team privately along with the request context. Reporting is not an emergency line, so for anything criminal, threatening, or urgent, call 911 or your local emergency number first.",
    takeaways: [
      "Report and block are available from every request and chat.",
      "Reports go to our team privately.",
      "Blocking ends contact immediately.",
      "For danger or a crime, call 911.",
    ],
    keywords: ["report problem Help Me", "report a user Help Me", "Help Me support report", "Help Me safety report"],
    sections: [
      {
        heading: "How to report",
        body: [
          "Open the request or the chat, choose report, and say what happened in your own words. You do not need proof, and you do not need to be sure. Block as well if you want contact to end. Both actions are one tap from the request.",
        ],
        bullets: [
          "Open the request or chat.",
          "Choose report and describe what happened.",
          "Block if you want contact to end.",
        ],
      },
      {
        heading: "What happens next",
        body: [
          "Reports go to our team along with the request, and can affect whether someone keeps a current review. Reporting is not an emergency line and does not notify police. If a crime happened, call the police yourself.",
        ],
      },
      {
        heading: "If you need to reach us directly",
        body: [
          "Email support@helpme.fyi and a person will read it. For anything urgent, do not wait on email. Call 911 or your local emergency number. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["glossary/report-and-block", "questions/can-i-block-someone", "support/contact", "ground-rules", "not-911"],
    faqs: [
      {
        q: "Does reporting notify the police?",
        a: "No. Reports go to our team. If a crime happened, call 911 or the police yourself.",
      },
      {
        q: "Do I need proof to report?",
        a: "No. Describe what happened in your own words.",
      },
      {
        q: "Can I report after the request is over?",
        a: "Yes. You can report a member at any time, and you can email support@helpme.fyi too.",
      },
    ],
  }),
  page({
    slug: "questions/who-do-i-contact-for-support",
    kind: "question",
    title: "Who do I contact for Help Me support?",
    description:
      "Email support@helpme.fyi. A person reads it. For emergencies, call 911 instead. Help Me support cannot dispatch anyone.",
    h1: "Who do I contact for support?",
    eyebrow: "Answer",
    lead: "A real person at support@helpme.fyi, for anything about the app, your account, or something that did not go right.",
    answer:
      "Email support@helpme.fyi. A person reads it and writes back. Use it for account questions, app problems, or something that did not go right. Support cannot dispatch anyone, so for an emergency call 911 or your local emergency number. For campus or city services, use the official numbers on the Resources pages.",
    takeaways: [
      "support@helpme.fyi, read by a person.",
      "For emergencies, call 911, not support.",
      "Reports can also be made from inside the app.",
      "Official city and campus numbers are on the Resources pages.",
    ],
    keywords: ["Help Me support", "Help Me contact", "support@helpme.fyi", "Help Me customer service"],
    sections: [
      {
        heading: "What to email about",
        body: [
          "Account trouble, an app that is not working, a question about how something works, feedback, or something that did not go right during a request. The more specific you are, the faster you get a useful answer.",
        ],
        bullets: [
          "Account or sign-in problems.",
          "An app bug or a crash.",
          "A question about how something works.",
          "Feedback, or a request that did not go well.",
        ],
      },
      {
        heading: "What support cannot do",
        body: [
          "Support cannot dispatch police, fire, or medical help, and nobody is watching a queue overnight. For an emergency, call 911 or your local emergency number. For official city and campus services, use the numbers on the Resources pages.",
        ],
      },
      {
        heading: "Inside the app",
        body: [
          "Report and block live in every request and chat, and your account settings include deletion. The Help Center on this site covers the most common questions. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["support/contact", "support/help", "questions/how-do-i-report-a-problem", "resources", "about", "not-911"],
    faqs: [
      {
        q: "How fast do you reply?",
        a: "A person reads every email, but there is no promised reply time. For anything urgent, do not wait on email.",
      },
      {
        q: "Can support reverse a block or a review?",
        a: "Write in with the details and a person will look. Blocks are also yours to manage from account settings.",
      },
      {
        q: "Where do I find official phone numbers?",
        a: "On the Resources pages. They list police, county services, 211, and campus public safety offices.",
      },
    ],
  }),
  page({
    slug: "questions/do-i-need-to-share-my-exact-location",
    kind: "question",
    title: "Do I need to share my exact location on Help Me?",
    description:
      "No. Requests show a rough area about 500 meters wide. Exact location is optional, shared only after someone says yes, and only with that one person.",
    h1: "Do I have to share my exact location?",
    eyebrow: "Answer",
    lead: "No. You can ask, meet, and finish without ever sharing a precise position.",
    answer:
      "No. A request shows as a rough area about 500 meters wide, and you can post one without sharing any location at all. Exact location is optional: it can be shared only after a neighbor says yes and you agree, only with that one person, and it ends when the request is done. You can always just name a public place.",
    takeaways: [
      "Exact location is optional, always.",
      "It is shared only after a yes and only with that one person.",
      "You can name a public place in chat instead.",
      "Sharing ends when the request is done.",
    ],
    keywords: ["Help Me exact location", "share location Help Me", "Help Me location privacy", "location optional Help Me"],
    sections: [
      {
        heading: "The default is blunt on purpose",
        body: [
          "A help app that pinned your exact position for a list of strangers would be a stalking tool with a friendly icon. The rough area is enough for a neighbor to judge whether they can get to you in ten minutes, and not enough to find you without your say-so.",
        ],
      },
      {
        heading: "Ways to meet without sharing",
        body: [
          "Name a public place in chat: the west entrance, the library steps, the second row by the cart return. That is usually clearer than a map pin anyway. If you want to share live location for a short time, you can, and you can stop. Location permission also lives in iOS Settings.",
        ],
        bullets: [
          "Name a public place in the chat.",
          "Share exact location only if you want to.",
          "Stop sharing at any time.",
        ],
      },
      {
        heading: "What ends the sharing",
        body: [
          "Finishing the request ends exact sharing automatically. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["questions/who-can-see-my-location", "glossary/approximate-location", "guides/location-privacy", "ground-rules", "legal/privacy", "questions/where-should-i-meet-a-helper"],
    faqs: [
      {
        q: "Can I ask without any location?",
        a: "Yes. A request without a location can still be seen by suitable helpers. Describe where to find you in your own words.",
      },
      {
        q: "Can I stop sharing mid-meeting?",
        a: "Yes. You can stop sharing any time, and finishing the request ends it automatically.",
      },
      {
        q: "Does revoking location permission lock me out?",
        a: "No. You can change location permission in iOS Settings and keep using the app.",
      },
    ],
  }),
  page({
    slug: "questions/is-help-me-a-gig-app",
    kind: "question",
    title: "Is Help Me a gig app or a marketplace?",
    description:
      "No. Help Me is not a paid marketplace. Nobody bids, nobody is hired, and there are no fees. It is neighbors helping neighbors with the small stuff.",
    h1: "Is Help Me a gig app?",
    eyebrow: "Answer",
    lead: "No. Nobody is hired, nobody bids, and nobody gets paid. It is a place to ask your block for the small stuff.",
    answer:
      "No. Help Me is not a gig app or a paid marketplace. There are no bids, quotes, tips, or fees, and the app does not process payments. Helpers are neighbors who applied and were reviewed by our team, not contractors taking jobs. Helping is unpaid and optional, and a no is always a fine answer.",
    takeaways: [
      "No payments, tipping, bids, or fees.",
      "Helpers are neighbors, not contractors.",
      "Helping is unpaid and optional.",
      "For paid trades, hire a professional.",
    ],
    keywords: ["Help Me gig app", "Help Me vs TaskRabbit", "is Help Me a marketplace", "Help Me paid work"],
    sections: [
      {
        heading: "What a gig app does, and what Help Me does not",
        body: [
          "Gig platforms connect a buyer with a worker, set a price, and take a cut. Help Me does none of that. There is no price to set, no worker to hire, and nothing to take a cut of. The thing being asked for is usually five minutes of someone's day: cables on a battery, an arm under a box.",
        ],
      },
      {
        heading: "Why that matters",
        body: [
          "The moment a favor carries a price, the question changes from would someone stop for me to what is this worth. Payment also brings tax, liability, and worker-classification questions that a neighbor with jumper cables should never have to think about. Keeping money out keeps it simple.",
        ],
        bullets: [
          "No bids or quotes.",
          "No tips or fees.",
          "No contractors, only neighbors.",
        ],
      },
      {
        heading: "If you need a professional",
        body: [
          "Hire one. A licensed electrician, a tow truck, a mover. Help Me is not that, and will not pretend to be. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["questions/can-i-pay-a-helper", "questions/is-help-me-free", "helpers", "about"],
    faqs: [
      {
        q: "Can a helper ask me for money?",
        a: "No. Asking for payment is not what Help Me is for. Report it if it happens.",
      },
      {
        q: "Can I earn money by helping?",
        a: "No. Helping is unpaid, and Help Me is not an income source.",
      },
      {
        q: "What if I want to thank someone?",
        a: "A thank you is always welcome. Anything beyond that is between two adults, and the app does not track or mediate it.",
      },
    ],
  }),
  page({
    slug: "questions/what-does-it-starts-with-me-mean",
    kind: "question",
    title: "What does \"It starts with me\" mean?",
    description:
      "\"It starts with me\" is the Help Me brand line. Asking a neighbor for a hand starts with one person deciding to ask, or to say yes.",
    h1: "What does \"It starts with me\" mean?",
    eyebrow: "Answer",
    lead: "It is the brand line, and the reason the app is built the way it is.",
    answer:
      "\"It starts with me\" is the Help Me brand line. It answers a quiet assumption: that you are on your own, that asking is awkward, that nobody has time. The fix starts with one person deciding to ask a neighbor for something small, or deciding to be the one who says yes. The \"me\" is the same word as the Help Me mark.",
    takeaways: [
      "It is the brand line, not a feature.",
      "It names the person the change starts with: you, asking or answering.",
      "\"Your block is closer than you think\" sits under it as the campaign line.",
      "The \"me\" in the line is the same \"me\" as the Help Me mark.",
    ],
    keywords: ["It starts with me", "Help Me brand line", "Help Me meaning", "Your block is closer than you think"],
    sections: [
      {
        heading: "The assumption it answers",
        body: [
          "Most people already believe their neighbors would help with something small. They just have not tested it in years. The habit of not asking is learned: you manage alone, or pay a service, and the question goes unasked.",
        ],
      },
      {
        heading: "Why it shaped the product",
        body: [
          "If the problem is one person not asking, the answer is a small, easy way to ask and an easy way to say yes. One sentence, a public place, a private chat between two people, and a yes or a no that are both fine.",
        ],
      },
      {
        heading: "Ask, or say yes",
        body: [
          "The line works in both directions. It starts with you when you post a request, and it starts with you when you decide to be the one who answers. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["about", "community", "how-it-works", "for-neighbors", "questions/what-is-help-me", "helpers"],
    faqs: [
      {
        q: "Is \"It starts with me\" a feature in the app?",
        a: "No. It is the brand line and the reasoning behind how the app is built.",
      },
      {
        q: "What happened to \"See Beyond\"?",
        a: "It was the earlier brand line. \"It starts with me\" replaced it.",
      },
      {
        q: "Why is the word \"me\" a logo?",
        a: "The \"me\" in the line is the same \"me\" as the Help Me mark, so the words and the mark share one word.",
      },
    ],
  }),
];
