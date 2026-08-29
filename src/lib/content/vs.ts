import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const VS_PAGES: SeoPage[] = [
  page({
    slug: "vs",
    kind: "hub",
    title: "Help Me compared with other tools",
    description:
      "Help Me compared with tools people actually use in Fargo–Moorhead — Nextdoor, TaskRabbit, Facebook groups, campus safety, AAA, and more. Honest, not a trophy room.",
    h1: "Help Me compared with tools people actually use in Fargo–Moorhead",
    eyebrow: "compare",
    lead: "You already have Nextdoor, a GroupMe, AAA, and 911. This is not a claim that one app should replace all of them. It is a map of which tool is for which stuck day.",
    keywords: [
      "Help Me vs Nextdoor",
      "Help Me vs TaskRabbit",
      "Fargo help apps compared",
      "community help vs gig apps",
    ],
    sections: [
      {
        heading: "Comparisons, not a scoreboard",
        body: [
          "People in this metro already ask for jumper cables in a Facebook group, post a sofa on Craigslist, call AAA from a West Acres lot, and text an iMessage thread that went quiet. Help Me is a Fargo–Moorhead community app for everyday, non-emergency help from approved helpers. It is not a national network, not a paid marketplace, and not 911.",
          "Each page names the other tool fairly, names Help Me honestly, and then says when to use which. We do not win every category. Campus safety, 911, and AAA win at their jobs. Use them when they are the right tool.",
        ],
      },
      {
        heading: "What stays true on every versus page",
        body: [
          "Helping on Help Me is gated by current, staff-reviewed identity evidence — not a background check we do not run. Live help shows as a coarse ~500 m area until accept and consent. Chat is private. Meeting in public is the default. One live request at a time. Official FM campus and city events are ingested with attribution. The iPhone app is on TestFlight.",
        ],
        bullets: [
          "Neighborhood feeds: Nextdoor, Nextdoor Help, Facebook groups, Reddit, Buy Nothing",
          "Paid work: TaskRabbit, Thumbtack, Angi, Craigslist, Marketplace, Uber, Lyft",
          "Chats you already have: GroupMe, Discord, WhatsApp, iMessage, Bumble BFF",
          "Official tools that should win: campus safety, AAA, and 911 — linked from Resources",
        ],
      },
      {
        heading: "If you wanted a list instead",
        body: [
          "The Alternatives pages are listicles with a specific intent — jump starts in Fargo, student help, neighbor apps — and they include Help Me as one option among official and familiar ones. Versus is one-to-one. Alternatives is a short field guide. Neither is a doorway of thin pages that all say “we are better.”",
        ],
      },
    ],
    related: ["alternatives", "about", "safety", "not-911", "glossary", "explore"],
    faqs: [
      {
        q: "Does Help Me replace Nextdoor or Facebook groups here?",
        a: "No. Those remain where a lot of this metro already talks. Help Me is a private, gated ask — not a neighborhood broadcast.",
      },
      {
        q: "Should I use Help Me instead of 911 or campus safety?",
        a: "Never for an emergency. Call 911 or campus police first. Help Me is everyday, non-emergency help.",
      },
      {
        q: "Do you claim more users than these tools?",
        a: "No. We do not invent market share. We describe what each tool is built to do in Fargo–Moorhead.",
      },
    ],
  }),
  page({
    slug: "vs/nextdoor",
    kind: "vs",
    title: "Help Me vs Nextdoor",
    description:
      "Nextdoor is a public neighborhood network Fargo–Moorhead already uses. Help Me is a private, gated ask to approved helpers — not a replacement feed.",
    h1: "Help Me vs Nextdoor",
    eyebrow: "versus",
    lead: "Nextdoor is where a lot of this metro already argues about fireworks and lost dogs. Help Me is what you open when you need a hand, not a thread.",
    keywords: ["Help Me vs Nextdoor", "Nextdoor alternative Fargo", "neighborhood app Fargo"],
    compare: { them: "Nextdoor" },
    sections: [
      {
        heading: "What Nextdoor is",
        body: [
          "Nextdoor is a national neighborhood social network. In Fargo, Moorhead, and West Fargo it is a real place people already are: local groups, for-sale listings, city and police posts, lost pets, recommendations, and the comment pile that follows. Public agencies in this metro use it. That reach is a genuine strength. A post is a broadcast to a neighborhood, with the social texture — and the pile-on — that comes with a feed.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "Help Me is a Fargo–Moorhead community app, not a national neighborhood OS. You post a short ask on the live map. Eligible approved helpers — current staff-reviewed identity evidence, online, suitable, not blocked — may get a private offer. There is no public feed of your dead battery. Chat is two people. Meet in public. Location stays a coarse ~500 m area until you consent after accept.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use Nextdoor when you want the neighborhood to see it: a found cat, a plumber recommendation, a city notice, a thing you are giving away. Use Help Me when you want a gated, private ask for everyday help from someone nearby who is actually allowed to accept. Use both if you want. Do not use either as 911. For a walk that is about personal safety on campus, NDSU, MSUM, and Concordia public safety still win.",
        ],
      },
    ],
    related: [
      "alternatives/nextdoor-alternatives",
      "vs/nextdoor-help",
      "vs/facebook-groups",
      "for-neighbors",
      "glossary/help-request",
      "safety",
    ],
    faqs: [
      {
        q: "Is Help Me trying to replace Nextdoor in Fargo?",
        a: "No. Nextdoor is a neighborhood feed with real local use. Help Me is a private matching ask with approved helpers.",
      },
      {
        q: "Does Nextdoor already let neighbors help each other?",
        a: "Yes — people offer help in public threads all the time. The difference is broadcast versus a gated private offer, plus Help Me’s current staff approval to help.",
      },
      {
        q: "Which is safer?",
        a: "Different designs. Nextdoor is a public neighborhood network. Help Me hides the ask, gates helping, and defaults to public meeting places. Neither is 911, and staff-reviewed identity evidence is not a background check.",
      },
    ],
  }),
  page({
    slug: "vs/taskrabbit",
    kind: "vs",
    title: "Help Me vs TaskRabbit",
    description:
      "TaskRabbit is a paid home-services marketplace that now lists Fargo. Help Me is unpaid community help from approved neighbors — not a gig board.",
    h1: "Help Me vs TaskRabbit",
    eyebrow: "versus",
    lead: "If you want to hire a tasker, hire a tasker. If you want a neighbor with jumper cables, that is a different product — and we will not pretend otherwise.",
    keywords: ["Help Me vs TaskRabbit", "TaskRabbit Fargo", "gig app vs community help"],
    compare: { them: "TaskRabbit" },
    sections: [
      {
        heading: "What TaskRabbit is",
        body: [
          "TaskRabbit is a paid marketplace. You choose a tasker by price, skills, and reviews, schedule work, chat, pay, and tip in the app. Categories are home-services heavy: furniture assembly, mounting, cleaning, moving help, yard work, handyman jobs. The company expanded nationwide, including North Dakota, and publishes a Fargo location with same-day booking language. Taskers set rates. That is a real gig product, and it is useful when you want to buy the work.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "Help Me is not a paid gig marketplace. Helpers are approved community members in Fargo–Moorhead, not contractors for hire. A staff member reviews identity evidence; that is not the background-check language TaskRabbit uses for its own marketplace, and we do not copy it. There is no in-app payment, no hourly rate, no tip flow. One live request, private offer, public meeting place, TestFlight on iPhone.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use TaskRabbit when you want to pay someone to assemble the IKEA, mount the TV, or clean the apartment on a schedule. Use Help Me when the ask is everyday and unpaid — a jump start, a walk to the car, directions, a study session, a box up a stair. If you need a licensed trade, hire a licensed trade. If the car is unsafe to sit with, AAA or 911, not a neighbor and not a tasker you have not booked yet.",
        ],
      },
    ],
    related: [
      "alternatives/taskrabbit-alternatives",
      "vs/thumbtack",
      "vs/angi",
      "for-helpers",
      "glossary/approved-helper",
      "helpers",
    ],
    faqs: [
      {
        q: "Can I pay a Help Me helper like a Tasker?",
        a: "Help Me is not a paid gig marketplace. Do not expect a paycheck from the app. If you want paid work, use a marketplace built for it.",
      },
      {
        q: "Does TaskRabbit work in Fargo?",
        a: "TaskRabbit lists Fargo and surrounding areas as a market. Coverage still depends on which taskers are actually available for your job and time.",
      },
      {
        q: "Which one background-checks people?",
        a: "Help Me does not. We review identity evidence with a staff decision. If a paid marketplace’s screening is the reason you are hiring, use that marketplace and read their current policy — we will not speak it for them.",
      },
    ],
  }),
  page({
    slug: "vs/craigslist",
    kind: "vs",
    title: "Help Me vs Craigslist",
    description:
      "Craigslist Fargo is still the open classifieds board. Help Me is not a listing site. It is a private ask to approved helpers in this metro.",
    h1: "Help Me vs Craigslist",
    eyebrow: "versus",
    lead: "Craigslist will sell a couch, a labor gig, and a warning story in the same afternoon. Help Me will not try to be that board.",
    keywords: ["Help Me vs Craigslist", "Craigslist alternative Fargo", "Fargo classifieds"],
    compare: { them: "Craigslist" },
    sections: [
      {
        heading: "What Craigslist is",
        body: [
          "The Fargo Craigslist is the open classifieds: for sale, housing, gigs, community, labor. It is old, local enough, and mostly anonymous until you email. People here still use it because it is simple and it does not require a neighborhood identity. It is also a public board, with all the scams, no-shows, and “is this person real?” that come with an open listing.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "Help Me does not list goods, apartments, or paid gigs. You post one live help request. Eligible approved helpers may receive a private offer. Accounts exist; helping is gated by current staff review of identity evidence. Chat is private. Location is coarse until you consent. There is no public “labor gig” page to bid on your afternoon.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use Craigslist to sell the bike, find a sublet, or post a paid gig you intend to pay. Use Help Me when you need a neighbor’s hand in Fargo–Moorhead without putting the ask on a public classifieds page. Meet in public on either. For anything that smells like fraud or danger, walk away and use official channels. 911 still wins at emergencies. AAA still wins at membership roadside.",
        ],
      },
    ],
    related: [
      "alternatives/craigslist-alternatives-fargo",
      "vs/facebook-marketplace",
      "vs/taskrabbit",
      "glossary/approved-helper",
      "safety",
      "for-neighbors",
    ],
    faqs: [
      {
        q: "Can I sell something on Help Me?",
        a: "No. Help Me is community help, not a classifieds site. Use Craigslist, Marketplace, or Buy Nothing for goods — depending on whether you want to sell, list, or gift.",
      },
      {
        q: "Is Help Me safer than Craigslist?",
        a: "It is a different design: accounts, a helper gate, private offers, coarse location. It is still strangers. Meet in public. It is not a background check and not 911.",
      },
      {
        q: "What about Craigslist gigs for helpers who want to be paid?",
        a: "If you want paid work, Craigslist gigs or TaskRabbit are built for that. Help Me will not turn a jump start into an invoice.",
      },
    ],
  }),
  page({
    slug: "vs/facebook-groups",
    kind: "vs",
    title: "Help Me vs Facebook groups",
    description:
      "Fargo–Moorhead Facebook groups are public-to-the-group broadcasts. Help Me sends an everyday ask to approved helpers without the comment thread.",
    h1: "Help Me vs Facebook groups",
    eyebrow: "versus",
    lead: "The Facebook group will argue for forty comments before anyone picks up a jumper cable. That is not a moral failing. It is a feed doing what feeds do.",
    keywords: ["Help Me vs Facebook groups", "Fargo Facebook group alternative", "NDSU Facebook group"],
    compare: { them: "Facebook groups" },
    sections: [
      {
        heading: "What Facebook groups are",
        body: [
          "This metro runs on them: neighborhood groups, NDSU and MSUM class groups, Buy Nothing, yard-sale pages, “is this your dog,” apartment-hunting threads. You already have an account. The audience is whoever the admins admitted. A help post is a broadcast. Help sometimes arrives. So do debates, side comments, and a permanent-ish post with your name on the need.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "Help Me is not a group you join by answering three questions. It is a request with a gated offer list. Approved helpers who are online and suitable may see a private offer. Your dead battery does not need a public debate about which auto shop is best. Community posts exist in the app for local conversation; they are not how a live request is fulfilled.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use a Facebook group when you want the group’s memory — a landlord warning, a used textbook, a ride to the Cities this Friday from people you already half-know. Use Help Me when the ask is now, local, and better as a private match than as a wall post. Keep campus safety and 911 for anything that is actually unsafe. Keep the group for the social graph Help Me does not pretend to replace.",
        ],
      },
    ],
    related: [
      "alternatives/facebook-group-alternatives",
      "vs/facebook-marketplace",
      "vs/nextdoor",
      "for-neighbors",
      "glossary/community-posts",
      "for-students",
    ],
    faqs: [
      {
        q: "Are Help Me community posts just another Facebook group?",
        a: "Updates are a local, signed-in conversation, and Community opens on official events first. Live help still happens on the map as a private offer, not as a wall post.",
      },
      {
        q: "Do I need Facebook to use Help Me?",
        a: "No. Accounts are email or Sign in with Apple. The iPhone app is on TestFlight.",
      },
      {
        q: "Which is better for finding a roommate?",
        a: "A Facebook group or Craigslist housing is built for that listing. Help Me is not a roommate board.",
      },
    ],
  }),
  page({
    slug: "vs/facebook-marketplace",
    kind: "vs",
    title: "Help Me vs Facebook Marketplace",
    description:
      "Facebook Marketplace is how Fargo–Moorhead buys and sells. Help Me is not a marketplace. It is unpaid help from approved people nearby.",
    h1: "Help Me vs Facebook Marketplace",
    eyebrow: "versus",
    lead: "Marketplace will move a couch for money. Help Me will help you lift a couch, once, as a neighbor — if someone online accepts.",
    keywords: ["Help Me vs Marketplace", "Facebook Marketplace Fargo", "not a marketplace"],
    compare: { them: "Facebook Marketplace" },
    sections: [
      {
        heading: "What Marketplace is",
        body: [
          "Facebook Marketplace is a massive buy/sell layer on top of Facebook. Local pickup in Fargo–Moorhead is a genuine habit: furniture, textbooks, bikes, cars, the mysterious Instant Pot. You message a seller, you meet in a parking lot, you pay. It is commerce. It is also public-ish listings and the usual “is this still available.”",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "Help Me does not list goods and does not take a cut. There is no cart. A help request is one unpaid ask to approved helpers. If the need is “carry this sofa up a downtown stair,” that can be a Help Me category-style ask. If the need is “buy my sofa,” that is Marketplace, Craigslist, or a garage sale. Staff-reviewed helpers are not sellers.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use Marketplace to buy and sell. Use Help Me to ask for a hand. Use a public, well-lit lot for either kind of stranger meeting. Use 911 if a meetup goes dangerous. Do not treat a Help Me helper as a moving company you did not hire, and do not treat a Marketplace seller as a vetted contractor.",
        ],
      },
    ],
    related: [
      "vs/craigslist",
      "vs/buy-nothing",
      "vs/facebook-groups",
      "glossary/what-is-help-me",
      "help",
      "safety",
    ],
    faqs: [
      {
        q: "Can I list an item for sale on Help Me?",
        a: "No. Use Marketplace, Craigslist, or another listing tool. Help Me is not a store.",
      },
      {
        q: "Can I ask a helper to pick up something I bought?",
        a: "Only as everyday community help if someone accepts — not as paid errand work. If you need a paid run, use a gig or delivery product built for that.",
      },
      {
        q: "Which is the right tool for free stuff?",
        a: "Buy Nothing groups and some Marketplace free listings are built for gifting. Help Me is a help request, not a giveaway board.",
      },
    ],
  }),
  page({
    slug: "vs/reddit",
    kind: "vs",
    title: "Help Me vs Reddit",
    description:
      "r/Fargo and related subreddits are public forums. Help Me is a private, local help request — not a thread, not a roast, not a recommendation dump.",
    h1: "Help Me vs Reddit",
    eyebrow: "versus",
    lead: "Reddit is where you ask what to do on a Saturday and get seven restaurant fights. It is a bad jumper-cable dispatcher.",
    keywords: ["Help Me vs Reddit", "r/Fargo help", "Reddit alternative Fargo"],
    compare: { them: "Reddit" },
    sections: [
      {
        heading: "What Reddit is",
        body: [
          "Reddit is a public forum network. Local subs — Fargo, NDSU, sometimes Moorhead — are where people ask for dentist recs, apartment warnings, and what is happening this weekend. Posts are public, searchable, and often immortal. Help, when it happens, is a comment. Anonymity is a feature and a mess.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "Help Me does not karma your jump start. Eligible approved helpers get a short-lived private offer. There is no comment section on the request. Official events come from campus and city feeds with attribution, not from a thread titled “anything fun tonight?” The product is Fargo–Moorhead and iPhone TestFlight, not a national forum.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use Reddit for research, opinions, and the long tail of “has anyone dealt with this landlord.” Use Help Me when you need a person, nearby, now-ish, without putting the ask in a searchable public archive. Use official calendars — in Help Me or on the school site — for actual event times. Use 911 for emergencies. Reddit moderators are not campus police.",
        ],
      },
    ],
    related: [
      "vs/facebook-groups",
      "vs/nextdoor",
      "events",
      "glossary/campus-events",
      "for-newcomers",
      "cities/fargo",
    ],
    faqs: [
      {
        q: "Can I post a Help Me request on Reddit instead?",
        a: "You can post anything on Reddit. It will be public. Help Me’s design is a private offer to approved helpers. Different tool.",
      },
      {
        q: "Does Help Me replace r/Fargo for newcomers?",
        a: "No. r/Fargo is a forum. Help Me is a neighbor ask plus official event calendars. Newcomers often want both, plus city resource pages.",
      },
      {
        q: "Are helpers anonymous like Reddit accounts?",
        a: "Helpers submit identity evidence and wait on a staff decision. Requesters and helpers still meet as people. Chat is private, not nameless on purpose.",
      },
    ],
  }),
  page({
    slug: "vs/groupme",
    kind: "vs",
    title: "Help Me vs GroupMe",
    description:
      "Campus GroupMe threads are how NDSU, MSUM, and Concordia orgs already talk. Help Me is for the ask you should not perform in a chat of two hundred.",
    h1: "Help Me vs GroupMe",
    eyebrow: "versus",
    lead: "GroupMe is the org chat you cannot mute without missing the meeting. It is a terrible place to admit you need a jump start at 11 p.m.",
    keywords: ["Help Me vs GroupMe", "NDSU GroupMe", "campus group chat alternative"],
    compare: { them: "GroupMe" },
    sections: [
      {
        heading: "What GroupMe is",
        body: [
          "GroupMe is a group-messaging app campuses actually use: residence halls, student orgs, group projects, intramurals. It is fast, noisy, and full of people you sort of know. If your ask is “who is going to the rec,” the thread is the right room. If your ask is “my battery is dead in the stadium lot,” you are performing need in front of an audience that did not opt into being your roadside plan.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "Help Me is not another org chat. You post one request. Up to ten eligible approved helpers may get a private offer. Nobody else is in the chat that opens. You do not need a .edu to join, and a .edu does not skip helper review. Campus calendars still come from official sources, not from a GroupMe event that got lost in GIFs.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use GroupMe for the people you already organized with. Use Help Me when you need a nearby approved helper and you do not want the hall thread to become a referendum. Use NDSU’s campus safety escort — 701-231-8998, 24/7 — when the walk is a safety concern, not a neighbor favor. MSUM and Concordia public safety own the same job on their campuses. 911 still wins if you are in danger.",
        ],
      },
    ],
    related: [
      "for-students",
      "vs/imessage-group",
      "vs/discord",
      "vs/campus-safety",
      "alternatives/student-help-apps",
      "campuses/ndsu",
    ],
    faqs: [
      {
        q: "Is Help Me a replacement for my class GroupMe?",
        a: "No. Keep the class chat. Help Me is for a gated neighbor ask, not course logistics.",
      },
      {
        q: "Can I only get help from people in my org?",
        a: "Matching considers approved helpers who are online and suitable, not your GroupMe roster. Friends you already have can still help the old way: you text them.",
      },
      {
        q: "What about official campus alerts?",
        a: "Those stay official — campus safety, email, the school’s own apps. Help Me does not dispatch police and does not replace those channels.",
      },
    ],
  }),
  page({
    slug: "vs/discord",
    kind: "vs",
    title: "Help Me vs Discord",
    description:
      "Discord servers are communities you opt into. Help Me is not a server. It is a Fargo–Moorhead help request with approved helpers and private chat.",
    h1: "Help Me vs Discord",
    eyebrow: "versus",
    lead: "Discord is a house you keep visiting. Help Me is a doorbell for a specific, everyday need — then you both go home.",
    keywords: ["Help Me vs Discord", "Discord alternative Fargo", "campus Discord"],
    compare: { them: "Discord" },
    sections: [
      {
        heading: "What Discord is",
        body: [
          "Discord is a server-based hangout: channels, roles, voice, games, study servers, city hangouts. Some Fargo–Moorhead people already live there. It is excellent at ongoing community and terrible at “who is physically near West Acres with cables in the next hour” unless you built a server for that — and even then, helping is not gated by a staff identity review.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "No roles, no mods, no always-on voice. A help request, a private match, a public meeting place. Community in the app is events first, then local posts — not a Discord replacement. Helpers go online when they can and drop out of matching when they leave. It is a Fargo–Moorhead product on iPhone TestFlight.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use Discord for the server you already belong to — games, a club, a long-running study group. Use Help Me when the need is local, physical, and better as a one-off match than as a ping in #general. Use campus safety for official escorts. Use 911 for danger. A Discord mod is not a first responder.",
        ],
      },
    ],
    related: [
      "vs/groupme",
      "vs/whatsapp",
      "community",
      "for-students",
      "glossary/private-chat",
      "how-it-works",
    ],
    faqs: [
      {
        q: "Is there a Help Me Discord?",
        a: "The product is the iPhone app. Community and help live there. We do not route requests through a Discord server.",
      },
      {
        q: "Can a Discord community be a helper pool?",
        a: "It can be a group of friends. It is not Help Me matching: current staff approval, private offers, coarse location, one live request.",
      },
      {
        q: "Which is better for study help?",
        a: "A standing study server can be great for ongoing work. Help Me can match a study-session ask when you need a person nearby this afternoon. Different timescales.",
      },
    ],
  }),
  page({
    slug: "vs/campus-safety",
    kind: "vs",
    title: "Help Me vs campus safety",
    description:
      "NDSU, MSUM, and Concordia public safety win at escorts, emergencies, and official response. Help Me is a neighbor. It is not campus police.",
    h1: "Help Me vs campus safety",
    eyebrow: "versus",
    lead: "This is not a contest. Campus police and public safety own safety. Help Me owns a jump start and a study ask. Mixing them up is how people get hurt.",
    keywords: ["Help Me vs campus safety", "NDSU escort", "MSUM public safety", "Concordia safety"],
    compare: { them: "campus safety" },
    priority: 0.7,
    sections: [
      {
        heading: "What campus safety is",
        body: [
          "NDSU Police run a 24/7 Campus Safety Escort — call 701-231-8998 from a place of safety, walk-along or vehicle, officers on duty. They also offer Personal Safety and Security Assist (Pathlight) so dispatch can follow a trip you start on purpose. MSUM Public Safety and Concordia Public Safety are the official offices on the Moorhead campuses. They exist to handle crime, emergencies, and official escorts. That is their job. They should win at it.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "Help Me can cover a walk-to-the-car style ask as community help from an approved helper — a neighbor, not an officer, not a contracted campus service. Location is coarse until you consent. Chat is private. It does not dispatch police. It does not replace Clery notices, Title IX offices, or a silent alarm. Staff-reviewed identity evidence is not a badge.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use campus safety when you feel unsafe, want an official escort, need an officer, or anything that might be a crime or emergency. Call 911 if it is immediate danger — on campus or off. Use Help Me when the night is ordinary and you want a neighbor: directions to a lecture hall, a dead battery, a study partner, a printer. If you are choosing between them because you are scared, choose campus safety. We will not be offended. We will be glad.",
        ],
      },
    ],
    related: [
      "not-911",
      "resources/ndsu-safety",
      "resources/msum-safety",
      "resources/concordia-safety",
      "for-students",
      "alternatives/campus-help-apps",
    ],
    faqs: [
      {
        q: "Does Help Me replace the NDSU escort?",
        a: "No. The official escort is the right tool for campus safety walks. Help Me is community help, not University Police.",
      },
      {
        q: "Can I use Help Me on campus anyway?",
        a: "Yes, for everyday non-emergency asks. Keep official numbers for official jobs. Do not wait on a two-hour offer window when you need an officer.",
      },
      {
        q: "Will Help Me call campus police for me?",
        a: "No. Help Me does not dispatch emergency services. You call 911 or campus police directly.",
      },
    ],
  }),
  page({
    slug: "vs/aaa",
    kind: "vs",
    title: "Help Me vs AAA",
    description:
      "AAA wins at membership roadside: tow, lockout, battery service you already paid for. Help Me is a neighbor with cables — not a fleet, not a membership.",
    h1: "Help Me vs AAA",
    eyebrow: "versus",
    lead: "If you have AAA, call AAA. A neighbor in Help Me is a kindness, not a tow truck, and we will not pretend we dispatched one.",
    keywords: ["Help Me vs AAA", "AAA Fargo", "jump start Fargo AAA"],
    compare: { them: "AAA" },
    priority: 0.7,
    sections: [
      {
        heading: "What AAA is",
        body: [
          "AAA is a membership club. Roadside assistance — battery jump, lockout, tow, tire — is the product people pay for, plus insurance and travel desks. There is a AAA Fargo presence, including a branch on 13th Avenue South. When you are a member in a West Acres lot at 9 p.m., the membership is the right lever. They win at being a roadside organization. That is the point of paying them.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "A jump start is a core public category in Help Me because January in this metro kills batteries. An approved helper may accept, meet you in a public lot, and share cables. They are not a mechanic, not a tow, not a locksmith, and not on a service-level clock. No membership number. No guaranteed ETA. Two hours and the request closes if nobody accepts.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Call AAA (or your insurer’s roadside) when you have it, when you need a tow, when the car will not move, or when you want a professional service you already pay for. Use Help Me when a neighbor with cables would be enough and someone online accepts. If you are stranded in a way that is dangerous — injury, threat, extreme cold you cannot handle — 911. Do not sit in a dark lot out of stubbornness toward any of these numbers.",
        ],
      },
    ],
    related: [
      "alternatives/fargo-jump-start-apps",
      "help/jump-start",
      "vs/uber",
      "glossary/not-an-emergency",
      "not-911",
      "cities/fargo",
    ],
    faqs: [
      {
        q: "Will a Help Me helper tow my car?",
        a: "No. Helpers are community members, not a tow fleet. Call AAA, a shop, or another roadside service for a tow.",
      },
      {
        q: "I have AAA. Why would I use Help Me?",
        a: "You often should not, for roadside. Help Me is still useful for non-car asks — a walk, directions, a study session — that AAA does not do.",
      },
      {
        q: "Is a dead battery 911?",
        a: "Usually no. AAA or a neighbor. Call 911 if the situation is unsafe, someone is hurt, or you cannot stay with the car safely.",
      },
    ],
  }),
  page({
    slug: "vs/uber",
    kind: "vs",
    title: "Help Me vs Uber",
    description:
      "Uber is paid ride-hail. Help Me is not a taxi, not a driver network, and not a way to skip a licensed ride home in Fargo–Moorhead.",
    h1: "Help Me vs Uber",
    eyebrow: "versus",
    lead: "If you need a ride, get a ride. A Help Me helper is not an unlicensed Uber, and we will not become one by accident in a sentence.",
    keywords: ["Help Me vs Uber", "Uber Fargo", "ride vs help Fargo"],
    compare: { them: "Uber" },
    sections: [
      {
        heading: "What Uber is",
        body: [
          "Uber is a paid ride-hail network: a driver, a fare, GPS on purpose, a trip you can share. In Fargo–Moorhead it is one of the ways people get home from Broadway, the FARGODOME, or a night class when the bus is done. It is transportation. It is regulated as that kind of business, not as a neighbor app.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "Help Me does not take you across town for a fare. There is no driver mode. There is no surge. A walk to the car is a walk, in public, with an approved helper who accepted a request — not a ride-hail substitute. Jump starts and directions are help, not a trip product. Coarse location until consent is the opposite of a live driver pin.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use Uber (or Lyft, a bus, a friend, a campus-safe ride if your school runs one) when the need is transportation. Use Help Me when the need is a hand where you already are. If you have been drinking, do not recruit a stranger in a help app to drive you — get a real ride or official option. If you are in danger, 911. Campus escorts remain the official walk when safety is the reason.",
        ],
      },
    ],
    related: ["vs/lyft", "vs/aaa", "vs/campus-safety", "help", "glossary/meet-in-public", "not-911"],
    faqs: [
      {
        q: "Can I request a ride on Help Me?",
        a: "Help Me is not ride-hail. Do not treat an approved helper as an Uber driver. Use Uber, Lyft, transit, or a friend.",
      },
      {
        q: "What about a jump start instead of a ride?",
        a: "A jump start is a Help Me-style ask or an AAA-style service. A ride home is Uber/Lyft. Different stuck days.",
      },
      {
        q: "Is Help Me cheaper than Uber?",
        a: "Help Me is free and unpaid — that is not a price war. If you need a ride, pay for a ride. Do not make a neighbor into a free taxi.",
      },
    ],
  }),
  page({
    slug: "vs/lyft",
    kind: "vs",
    title: "Help Me vs Lyft",
    description:
      "Lyft is paid ride-hail, same job as Uber. Help Me is Fargo–Moorhead community help. Use Lyft for a ride. Use Help Me for a neighbor’s hand.",
    h1: "Help Me vs Lyft",
    eyebrow: "versus",
    lead: "Lyft will take you home for a fare. Help Me will not quietly become a second, unpaid, unlicensed Lyft. That line stays bright.",
    keywords: ["Help Me vs Lyft", "Lyft Fargo", "ride hail vs community help"],
    compare: { them: "Lyft" },
    sections: [
      {
        heading: "What Lyft is",
        body: [
          "Lyft is paid ride-hail: request a car, pay a fare, get a trip. In this metro it sits next to Uber as a way to move across Fargo, Moorhead, and West Fargo without parking, without a bus, without a designated driver. Drivers are doing a job. The app is built around that job.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "Approved helpers, one live request, private chat, public meeting places, coarse ~500 m location until you say otherwise. No fares. No driver ratings as a transportation marketplace. No “Help Me Line” to the airport. The walk-to-the-car category is an escort-style neighbor ask, not a ride across town.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Need a ride? Lyft, Uber, a bus, a friend, or an official campus option. Need a hand where you are standing? Help Me, if an approved helper is online and accepts. Need an official safety walk on campus? Campus public safety wins. Need emergency response? 911. If you are choosing Help Me because you do not want to pay for Lyft, that is not a reason to put a stranger in the driver’s seat.",
        ],
      },
    ],
    related: ["vs/uber", "vs/campus-safety", "vs/aaa", "for-students", "glossary/not-an-emergency", "download"],
    faqs: [
      {
        q: "Are Help Me helpers like Lyft drivers without pay?",
        a: "No. They are not drivers for hire, paid or unpaid. Do not request a ride. Request everyday help, meet in public.",
      },
      {
        q: "Which should I use after a late class?",
        a: "A ride-hail or official campus escort if the need is getting somewhere safely. Help Me if the need is a neighbor walk or a jump, and it is not an emergency.",
      },
      {
        q: "Does Help Me show driver ETAs?",
        a: "No. There is no guaranteed response time. A request can sit up to two hours with no accept, then it closes.",
      },
    ],
  }),
  page({
    slug: "vs/thumbtack",
    kind: "vs",
    title: "Help Me vs Thumbtack",
    description:
      "Thumbtack matches you with paid local pros. Help Me matches you with approved neighbors in Fargo–Moorhead. Hire a pro when you need a pro.",
    h1: "Help Me vs Thumbtack",
    eyebrow: "versus",
    lead: "A quote for a deck is a project. A dead battery is an afternoon. We will not sell the second as the first.",
    keywords: ["Help Me vs Thumbtack", "Thumbtack Fargo", "hire a pro vs neighbor"],
    compare: { them: "Thumbtack" },
    sections: [
      {
        heading: "What Thumbtack is",
        body: [
          "Thumbtack is a paid marketplace for local professionals: you describe a project, pros respond with quotes, you hire one. Home repair, cleaning, events, lessons — the categories assume money, a scope, and someone who wants the job. That is a good tool when the work should be a job.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "No quotes. No project brief. No pro dashboard. Staff-reviewed identity evidence lets someone help; it does not license them to rewire a kitchen. Help Me is everyday community help in this metro. If a helper happens to know printers, that is a neighbor who said yes — not a contracted IT company.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use Thumbtack (or Angi, or a name you got from a neighbor) when you want to hire. Use Help Me when you want a hand that is not a hire. Use licensed trades for licensed work. Use 911 for danger. A Help Me accept is not a contract, and a Thumbtack quote is not a jumper cable in the next twenty minutes unless that pro says so.",
        ],
      },
    ],
    related: [
      "vs/angi",
      "vs/taskrabbit",
      "alternatives/taskrabbit-alternatives",
      "glossary/approved-helper",
      "for-helpers",
      "about",
    ],
    faqs: [
      {
        q: "Can I hire Help Me helpers through Thumbtack-style quotes?",
        a: "No. Help Me has no quote flow and is not a paid marketplace.",
      },
      {
        q: "What if my “small ask” is actually a repair?",
        a: "Hire a pro. Helpers are not a way around a plumber, electrician, or contractor.",
      },
      {
        q: "Does staff review equal Thumbtack’s pro screening?",
        a: "No. We review identity evidence. We do not claim a professional credential. Read any marketplace’s current screening on that marketplace.",
      },
    ],
  }),
  page({
    slug: "vs/bumble-bff",
    kind: "vs",
    title: "Help Me vs Bumble BFF",
    description:
      "Bumble BFF is for making friends. Help Me is for a specific everyday ask in Fargo–Moorhead. A helper who accepted is not a new best friend by default.",
    h1: "Help Me vs Bumble BFF",
    eyebrow: "versus",
    lead: "Want a friend? Say so in a friendship app. Want a jump start? Do not swipe on it.",
    keywords: ["Help Me vs Bumble BFF", "make friends Fargo", "not a dating app"],
    compare: { them: "Bumble BFF" },
    sections: [
      {
        heading: "What Bumble BFF is",
        body: [
          "Bumble BFF is a friendship mode of a dating-company app: profiles, matching, chat, hangouts. People in Fargo–Moorhead use it to meet friends after a move, after graduation, after the group chat thinned out. That is a social product. It is trying to start a relationship, even a platonic one.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "No profiles to swipe. No “looking for a gym buddy” card as the core loop. You ask for a defined, everyday thing. An approved helper may accept. You meet in public, finish, confirm completion, optionally review, and get on with your day. Community posts and events exist, but they are local conversation and official calendars — not a dating-adjacent friend finder.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use Bumble BFF (or clubs, intramurals, church, a Buy Nothing coffee, campus orgs) when the goal is friendship. Use Help Me when the goal is help. If a study-session ask turns into people who would study again, that is human — still meet in public, still use report/block, still do not treat the app as a dating pool. Help Me is an adult community app, not a place for minors to meet anyone.",
        ],
      },
    ],
    related: [
      "for-newcomers",
      "for-students",
      "community",
      "glossary/meet-in-public",
      "vs/buy-nothing",
      "safety",
    ],
    faqs: [
      {
        q: "Is Help Me a dating or BFF app?",
        a: "No. It is community help. There is no swipe deck. Meet in public, finish the ask, carry on.",
      },
      {
        q: "Can I use a help request to make friends?",
        a: "Do not disguise a social hunt as a jump start. If you want friends, use a friendship tool or an in-person community. If you want help, ask for help.",
      },
      {
        q: "What if someone chats past the request?",
        a: "You can ignore, block, and report. Completion ends the job. You do not owe a second hang.",
      },
    ],
  }),
  page({
    slug: "vs/buy-nothing",
    kind: "vs",
    title: "Help Me vs Buy Nothing",
    description:
      "Buy Nothing is a local gift economy — Fargo already has groups. Help Me is a help request, not a giveaway. Use both without collapsing them.",
    h1: "Help Me vs Buy Nothing",
    eyebrow: "versus",
    lead: "Give away the lamp. Ask for a hand carrying the lamp. Those are two different kinds of neighbor, and both can be good.",
    keywords: ["Help Me vs Buy Nothing", "Buy Nothing Fargo", "gift economy vs help"],
    compare: { them: "Buy Nothing" },
    sections: [
      {
        heading: "What Buy Nothing is",
        body: [
          "The Buy Nothing Project is a hyper-local gift economy: give, receive, lend, share, no selling. Fargo has neighborhood groups — including long-running Facebook groups such as Buy Nothing Fargo (North) — and there is a Buy Nothing app as another door. Membership is usually one group, adults in the boundary, personal profiles. The wealth is the stuff and the thanks.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "Help Me is not a gift feed. You do not list a slow cooker. You post a help request for an action: jump, walk, directions, study, tech, a heavy thing. Helpers are staff-reviewed to help, not to source free goods. Community posts are not a Buy Nothing replacement. Official events still come from campus and city calendars.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use Buy Nothing when the need is an item or a lend — a pan, a costume, a drill for an afternoon. Use Help Me when the need is a person showing up. Use Marketplace if you intend to sell. Meet in public for pickups either way. Neither group is 911, and neither is a youth program.",
        ],
      },
    ],
    related: [
      "vs/facebook-groups",
      "vs/facebook-marketplace",
      "vs/nextdoor",
      "for-neighbors",
      "alternatives/neighbor-help-apps",
      "community",
    ],
    faqs: [
      {
        q: "Can I give something away on Help Me?",
        a: "Help Me is not a giveaway board. Use Buy Nothing or a free listing tool. You can still ask for a hand carrying what you already have.",
      },
      {
        q: "Is Help Me competing with Buy Nothing Fargo?",
        a: "No. Different jobs: gifts versus a gated help request. Plenty of people will use both.",
      },
      {
        q: "Do I need Facebook for Help Me?",
        a: "No. Buy Nothing groups often live there; Help Me is an iPhone app with email or Sign in with Apple.",
      },
    ],
  }),
  page({
    slug: "vs/be-my-eyes",
    kind: "vs",
    title: "Help Me vs Be My Eyes",
    description:
      "Be My Eyes wins at visual assistance for blind and low-vision people via live video. Help Me is local in-person help in Fargo–Moorhead. Use the right one.",
    h1: "Help Me vs Be My Eyes",
    eyebrow: "versus",
    lead: "Be My Eyes is a specialist tool that already works worldwide. We will not claim their job. We will point at them.",
    keywords: ["Help Me vs Be My Eyes", "visual assistance vs community help", "accessibility help"],
    compare: { them: "Be My Eyes" },
    sections: [
      {
        heading: "What Be My Eyes is",
        body: [
          "Be My Eyes connects blind and low-vision people with sighted volunteers (and AI) over live video so someone can read a label, check a display, or describe a scene. Volunteers take daytime calls in their language. It is free, global, and built for that access job. If that is the need, Be My Eyes is the tool. They win at it.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "Help Me is in-person, Fargo–Moorhead, everyday help from approved helpers who accept a request and meet in public. It is not a video-description network. It is not trained as an accessibility service. A helper might help with a practical task in person; that is not the same product as a worldwide volunteer video call designed for low vision.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use Be My Eyes for visual interpretation at a distance — packaging, screens, colors, a scene in front of the camera. Use Help Me for a local, physical hand if that is actually what you want and someone accepts. Use official disability and campus access services for anything institutional. Use 911 for emergencies. Do not wait on a neighbor app for a need Be My Eyes already meets well.",
        ],
      },
    ],
    related: [
      "about",
      "glossary/what-is-help-me",
      "vs/campus-safety",
      "for-helpers",
      "safety",
      "alternatives/volunteer-apps-fargo",
    ],
    faqs: [
      {
        q: "Is Help Me an accessibility video app?",
        a: "No. Be My Eyes is. Help Me is local in-person community help.",
      },
      {
        q: "Can I volunteer for both?",
        a: "Yes. They are different commitments: Be My Eyes is remote video; Help Me is in-person, staff-approved, Fargo–Moorhead, when you go online.",
      },
      {
        q: "Should a blind user pick Help Me over Be My Eyes?",
        a: "For visual interpretation, pick Be My Eyes. For a local in-person ask, Help Me might apply — still meet in public, still not 911. Use whichever job matches.",
      },
    ],
  }),
  page({
    slug: "vs/whatsapp",
    kind: "vs",
    title: "Help Me vs WhatsApp",
    description:
      "WhatsApp is messaging you already have. Help Me is not a messenger. It opens a private chat only after an approved helper accepts a local request.",
    h1: "Help Me vs WhatsApp",
    eyebrow: "versus",
    lead: "WhatsApp is a pipe. Help Me is a match. If you already have the person in your phone, you do not need us for that text.",
    keywords: ["Help Me vs WhatsApp", "WhatsApp group vs help app"],
    compare: { them: "WhatsApp" },
    sections: [
      {
        heading: "What WhatsApp is",
        body: [
          "WhatsApp is end-to-end encrypted messaging: one-to-one, groups, calls, status. Families use it across the river and across oceans. International students in this metro live in it. It assumes you already know who you are talking to, or you have a group that exists for another reason.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "The private chat is a consequence of a match, not the product you open to browse friends. Nobody is in the thread except you and the helper who accepted. There is no group invite, no broadcast list, no status. Helping is gated. Location stays coarse on the map. WhatsApp will not staff-review a stranger before they offer jumper cables — and it should not have to; it is a messenger.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use WhatsApp (or iMessage, or GroupMe) when the person is already yours to text. Use Help Me when you need to find an approved helper nearby without pasting the ask into a family group. Use official channels for emergencies. Do not move a Help Me meetup into a random WhatsApp number if that makes you less able to report in-app — keep safety actions where they live, and call 911 if you need them.",
        ],
      },
    ],
    related: [
      "vs/imessage-group",
      "vs/groupme",
      "glossary/private-chat",
      "glossary/safety-actions",
      "how-it-works",
      "safety",
    ],
    faqs: [
      {
        q: "Can I message helpers in WhatsApp instead?",
        a: "Help Me chat is in the request on purpose, with report and block attached. You choose what you share. We do not require WhatsApp.",
      },
      {
        q: "Is Help Me chat encrypted like WhatsApp?",
        a: "Private messages stay between the two people in the request and are not sold or used to train models. For the current TestFlight privacy summary, read the Privacy Policy. We will not borrow WhatsApp’s marketing claims.",
      },
      {
        q: "My family is on WhatsApp. Should they install Help Me?",
        a: "If they live here and want a local neighbor ask, yes. If they only need to text you, WhatsApp already does that.",
      },
    ],
  }),
  page({
    slug: "vs/imessage-group",
    kind: "vs",
    title: "Help Me vs iMessage groups",
    description:
      "An iMessage group is the people you already have. Help Me is for the Fargo–Moorhead ask that should not wait on a silent thread.",
    h1: "Help Me vs an iMessage group",
    eyebrow: "versus",
    lead: "The blue bubbles are your people. When they are in class, asleep, or in another city, a silent group is not a helper network.",
    keywords: ["Help Me vs iMessage", "iMessage group alternative", "text friends vs help app"],
    compare: { them: "iMessage groups" },
    sections: [
      {
        heading: "What an iMessage group is",
        body: [
          "It is the hallmates, the cousins, the high-school people who still tap in. On iPhone it is the default. It is intimate and it is fragile: mute, leave, forget. Asking for help there is honest when those people can actually come. It is awkward when they cannot, and it trains you to not ask.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "A way to ask without performing the need to the group chat. Approved helpers nearby, private offer, private chat after accept. You still have iMessage. You still should text the friend who would come if they could. Help Me is the other door when that friend is not the map.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Text your people first if they are the right people. Use Help Me when you need a local, approved neighbor and you do not want to wait on read receipts. Use campus safety when the walk is about fear. Use 911 when it is danger. An iMessage group cannot escort you officially, and Help Me cannot be your family.",
        ],
      },
    ],
    related: [
      "vs/groupme",
      "vs/whatsapp",
      "for-students",
      "how-it-works",
      "glossary/help-request",
      "for-newcomers",
    ],
    faqs: [
      {
        q: "Should I stop texting friends for jumper cables?",
        a: "No. Friends are the original Help Me. The app is for when that thread is the wrong room or the wrong city.",
      },
      {
        q: "Can I add a helper to my iMessage group?",
        a: "You choose what you share. The product’s chat, report, and block tools live in the request. Meet in public either way.",
      },
      {
        q: "Does Help Me use iMessage under the hood?",
        a: "No. Chat is in the app, between you and the helper who accepted.",
      },
    ],
  }),
  page({
    slug: "vs/nextdoor-help",
    kind: "vs",
    title: "Help Me vs Nextdoor Help",
    description:
      "Nextdoor has help, offers, and free items inside a public neighborhood feed. Help Me is a dedicated, gated private match in Fargo–Moorhead.",
    h1: "Help Me vs Nextdoor Help",
    eyebrow: "versus",
    lead: "Nextdoor already has a help-shaped corner. The difference is not that neighbors never help there. The difference is the room it happens in.",
    keywords: ["Help Me vs Nextdoor Help", "Nextdoor offers Fargo", "neighborhood help feed"],
    compare: { them: "Nextdoor Help" },
    sections: [
      {
        heading: "What Nextdoor Help is",
        body: [
          "Inside Nextdoor, neighbors post asks, offers, and free items to people in the area who are already on the neighborhood network. It sits beside crime talk, recommendations, and city posts. The strength is the same as Nextdoor’s strength: a lot of households in Fargo, Moorhead, and West Fargo already have the app, and public agencies already post there. The ask is still happening in a neighborhood social product.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "Help is the whole product, not a tab next to a feed. Helping is gated by current staff-reviewed identity evidence. Offers go privately to eligible helpers who are online — up to ten, short-lived — instead of to the neighborhood wall. Coarse ~500 m location, private chat, public meeting default, one live request, official campus calendars in the same iPhone app. Not national. Not a classifieds layer.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use Nextdoor Help / offers / free when you want the neighborhood you already live in on Nextdoor to see it — especially goods, recommendations, and “anyone have a ladder.” Use Help Me when you want a dedicated, gated match without the neighborhood audience. Keep using Nextdoor for city notices if that is where you hear them. Keep 911 and campus safety for their jobs. Two neighbor tools can exist; only one of them is a public feed.",
        ],
      },
    ],
    related: [
      "vs/nextdoor",
      "alternatives/nextdoor-alternatives",
      "vs/buy-nothing",
      "glossary/matching",
      "for-neighbors",
      "how-it-works",
    ],
    faqs: [
      {
        q: "Isn’t this the same as Nextdoor’s help posts?",
        a: "Same human instinct, different room. Nextdoor help is a neighborhood social post. Help Me is a private offer to currently approved helpers.",
      },
      {
        q: "Which has more neighbors in West Fargo?",
        a: "Nextdoor is a national network with real local membership. We do not invent a bigger roster than we have. Use the tool that matches the ask.",
      },
      {
        q: "Can I cross-post a Help Me request to Nextdoor?",
        a: "You can post on Nextdoor anytime — that makes it public. The Help Me request itself is still one live, privately offered ask in the app.",
      },
    ],
  }),
  page({
    slug: "vs/angi",
    kind: "vs",
    title: "Help Me vs Angi",
    description:
      "Angi (once Angie’s List) is a paid home-pro directory Fargo homeowners already use. Help Me is unpaid neighbor help — not a contractor lead mill.",
    h1: "Help Me vs Angi",
    eyebrow: "versus",
    lead: "If the job needs a licensed, reviewed pro, hire one on a platform built for that. A neighbor with a current approval is not a remodeler.",
    keywords: ["Help Me vs Angi", "Angie List Fargo", "home pro vs neighbor help"],
    compare: { them: "Angi" },
    sections: [
      {
        heading: "What Angi is",
        body: [
          "Angi is a home-services marketplace and directory — the current name for what many people still call Angie’s List, now combined with HomeAdvisor. In Fargo you can find Angi-listed cleaners, handypeople, remodelers, and other pros, often with reviews and a quote flow. The assumption is a project you will pay for. That is a legitimate way to hire in this metro.",
        ],
      },
      {
        heading: "What Help Me is",
        body: [
          "Not a lead generator. Not a pro directory. Not a place to collect three quotes on a roof. Help Me is Fargo–Moorhead community help: a short ask, approved helpers, private match, public meet. Identity evidence is staff-reviewed. It is not Angi Approved. We do not inspect insurance certificates. We do not want your remodel.",
        ],
      },
      {
        heading: "When to use which",
        body: [
          "Use Angi (or Thumbtack, or a local company you trust) when you are hiring home work. Use Help Me when you need an everyday hand — jump start, walk, directions, a box, a printer — and a neighbor is the right scale. Use 911 if a household emergency is actually an emergency. A Help Me helper who “knows a guy” is a conversation, not a credential.",
        ],
      },
    ],
    related: [
      "vs/thumbtack",
      "vs/taskrabbit",
      "alternatives/taskrabbit-alternatives",
      "glossary/identity-evidence",
      "for-neighbors",
      "about",
    ],
    faqs: [
      {
        q: "Are Help Me helpers Angi-style approved pros?",
        a: "No. Staff review identity evidence so someone may help as a neighbor. That is not a trade credential or an Angi listing.",
      },
      {
        q: "Can I find a plumber on Help Me?",
        a: "Do not use the app as a contractor directory. Hire a plumber. Help Me is not licensed trade dispatch.",
      },
      {
        q: "Why compare them at all?",
        a: "Because people search “help around the house” and land on both. We would rather send the paid project to Angi than fake a pro network.",
      },
    ],
  }),

  page({
    slug: "vs/citizen",
    kind: "vs",
    title: "Help Me vs Citizen",
    description:
      "Citizen broadcasts incidents and alerts. Help Me is a private, gated request for everyday, non-emergency help. Different products with opposite instincts.",
    h1: "Help Me vs Citizen",
    eyebrow: "versus",
    lead: "One tells you what went wrong nearby. The other quietly asks someone nearby for ten minutes.",
    answer:
      "Citizen is an incident-alert app built around broadcasting emergencies and public-safety events to everyone nearby. Help Me is the opposite instinct: a private request for everyday, non-emergency help, offered to a small set of approved helpers with no public feed and no alerts about other people’s bad days.",
    compare: { them: "Citizen" },
    keywords: ["Help Me vs Citizen", "Citizen app alternative", "safety alert app Fargo"],
    sections: [
      {
        heading: "Broadcast versus private ask",
        body: [
          "Citizen’s value is awareness at scale — many people learn about one incident. Help Me’s value is the reverse — one person’s small problem reaches a few people who could actually solve it, and nobody else ever knows it happened.",
        ],
      },
      {
        heading: "Neither one is 911",
        body: [
          "Alerts do not dispatch anyone and neither do help requests. If you are in danger, injured, or watching a crime, call 911. That holds for both products and it is worth stating plainly on both.",
        ],
      },
      {
        heading: "What that means for privacy",
        body: [
          "Help Me shows live help as a coarse area of about 500 meters, chats privately between two people, and leaves nothing public behind. If a permanent, browsable record of local incidents is what you want, this is not that app.",
        ],
      },
    ],
    related: ["not-911", "safety", "questions/who-can-see-my-location", "questions/how-does-matching-work", "vs/facebook-groups", "resources/fargo-emergency"],
    faqs: [
      {
        q: "Does Help Me send safety alerts?",
        a: "No. It has no alert feed. It is a request-and-accept product for everyday help.",
      },
      {
        q: "Can I report a crime through Help Me?",
        a: "No. Report and block handle problems with a person in a request. Crimes go to police, and 911 if it is in progress.",
      },
    ],
  }),

  page({
    slug: "vs/ring-neighbors",
    kind: "vs",
    title: "Help Me vs Ring Neighbors",
    description:
      "Ring Neighbors is built around cameras and suspicion. Help Me is built around asking for help. Same street, completely different assumption about it.",
    h1: "Help Me vs Ring Neighbors",
    eyebrow: "versus",
    lead: "One assumes the person on your street is a problem. The other assumes they might be the solution.",
    answer:
      "Ring Neighbors organizes a neighborhood around doorbell camera footage and suspicious-activity posts. Help Me organizes it around requests for everyday help, offered privately to approved helpers. There is no video, no public posting, and no permanent feed of who was on your block.",
    compare: { them: "Ring Neighbors" },
    keywords: ["Help Me vs Ring Neighbors", "Neighbors app alternative", "neighborhood camera app"],
    sections: [
      {
        heading: "Two different default assumptions",
        body: [
          "A camera feed trains you to catalog strangers. A help request trains you to ask one. Both are real ways to relate to a street, and they produce very different neighborhoods over time.",
        ],
      },
      {
        heading: "What Help Me does not collect",
        body: [
          "No video, no footage sharing, no public posts, and no browsable history of activity near you. Live help is a coarse area of about 500 meters and the conversation is private between two people.",
        ],
      },
      {
        heading: "Where each is actually useful",
        body: [
          "If a package went missing, a camera is the tool. If your battery is dead in a lot, a camera is useless and a neighbor is not. They do not compete so much as answer different questions.",
        ],
      },
    ],
    related: ["vs/nextdoor", "vs/facebook-groups", "safety", "questions/who-can-see-my-location", "community", "for-neighbors"],
    faqs: [
      {
        q: "Does Help Me use cameras?",
        a: "No. There is no video anywhere in the product.",
      },
      {
        q: "Can I post about suspicious activity?",
        a: "No. There is no public posting. Suspicious activity goes to police non-emergency, or 911 if it is happening now.",
      },
    ],
  }),

  page({
    slug: "vs/mutual-aid",
    kind: "vs",
    title: "Help Me vs mutual aid networks",
    description:
      "Mutual aid is organized, sustained, and often meets material needs. Help Me is a one-off, ten-minute favor between neighbors. They are not substitutes.",
    h1: "Help Me vs mutual aid",
    eyebrow: "versus",
    lead: "Mutual aid networks do work that a matching app genuinely cannot, and pretending otherwise would be a disservice to both.",
    answer:
      "Mutual aid networks are organized, ongoing efforts where community members meet each other’s material needs — food, rent, transportation, care — usually through sustained relationships and pooled resources. Help Me is a one-off matching tool for small everyday favors. It does not distribute resources, coordinate campaigns, or provide sustained support.",
    compare: { them: "mutual aid networks" },
    keywords: ["mutual aid Fargo", "community support network", "mutual aid vs app"],
    sections: [
      {
        heading: "Different time horizons",
        body: [
          "Mutual aid works because people commit over time and know each other. An app match lasts one request and ends. That is a feature for a dead battery and a limitation for someone who needs rent help this month and next month.",
        ],
      },
      {
        heading: "What Help Me deliberately cannot do",
        body: [
          "No money moves through it. There is no fund, no distribution, and no organizational account. It cannot coordinate a group effort or run a campaign. Anything structural belongs to mutual aid groups, nonprofits, and county services.",
        ],
      },
      {
        heading: "Living alongside each other",
        body: [
          "Someone deep in a mutual aid network still gets a dead battery at eleven at night when nobody in that network is nearby. That is the gap this app fills, and it is a narrow one on purpose.",
        ],
      },
    ],
    related: ["for-nonprofits", "resources/211-north-dakota", "resources/food-assistance-fargo", "questions/can-i-pay-a-helper", "community", "for-faith-communities"],
    faqs: [
      {
        q: "Can I organize a group effort through Help Me?",
        a: "No. There are no group or organizational features. One person asks, one person accepts.",
      },
      {
        q: "Can money be shared?",
        a: "No. There is no payment layer of any kind in the app.",
      },
    ],
  }),

  page({
    slug: "vs/doordash",
    kind: "vs",
    title: "Help Me vs DoorDash",
    description:
      "DoorDash is paid delivery by contract drivers. Help Me has no payments, no delivery, and no drivers. The overlap people imagine does not exist.",
    h1: "Help Me vs DoorDash",
    eyebrow: "versus",
    lead: "People search for these together because both involve someone showing up. That is where the similarity stops.",
    answer:
      "DoorDash is a paid delivery marketplace where contract drivers bring food and goods for a fee. Help Me has no payments, no delivery, and no drivers — helpers are approved community members giving everyday non-emergency help in person, usually meeting in a public place. Nobody buys, transports, or delivers anything on your behalf.",
    compare: { them: "DoorDash" },
    keywords: ["Help Me vs DoorDash", "delivery app alternative Fargo", "free help vs delivery"],
    sections: [
      {
        heading: "Money is the whole difference",
        body: [
          "A delivery platform exists because payment makes the trip worth someone’s time, and it brings fees, tips, and worker-classification questions with it. Help Me has none of that infrastructure, which is why the requests it supports are small enough that nobody needs paying.",
        ],
      },
      {
        heading: "What to use when",
        body: [
          "Need food brought to you: a delivery service. Need a hand carrying groceries from your car up an icy stairwell: that is a neighbor favor and a reasonable Help Me request. The line is whether someone is being asked to buy, transport, or be compensated.",
        ],
      },
    ],
    related: ["questions/can-i-pay-a-helper", "questions/is-help-me-a-gig-app", "help/carrying-groceries", "vs/taskrabbit", "resources/food-assistance-fargo", "questions/what-should-i-not-ask-for"],
    faqs: [
      {
        q: "Can a helper pick up my order?",
        a: "No. There is no payment, no reimbursement, and no delivery in Help Me.",
      },
      {
        q: "What if I cannot afford food?",
        a: "That is a food assistance question, and this metro has real programs for it. The resource pages point at them.",
      },
    ],
  }),

  page({
    slug: "vs/meetup",
    kind: "vs",
    title: "Help Me vs Meetup",
    description:
      "Meetup is for finding groups and events to join. Help Me is for asking one nearby person for a hand right now. Different problems entirely.",
    h1: "Help Me vs Meetup",
    eyebrow: "versus",
    lead: "One is about building a social life over months. The other is about the next twenty minutes.",
    answer:
      "Meetup helps people find groups and recurring events to join over time. Help Me is a request-and-accept tool for an immediate, small, everyday need — no groups, no events to join, no profiles to browse. Help Me does list official Fargo–Moorhead campus and regional events, but always attributed to the source that published them.",
    compare: { them: "Meetup" },
    keywords: ["Help Me vs Meetup", "meet people Fargo", "community events app Fargo"],
    sections: [
      {
        heading: "Belonging versus getting unstuck",
        body: [
          "Loneliness and a dead battery are both real, and they need different tools. Meetup is a good answer to the first. Help Me deliberately does not try to be, because a help app that turns into a social network stops being a help app.",
        ],
      },
      {
        heading: "The events difference",
        body: [
          "Help Me shows official events from NDSU, MSUM, Concordia College, M State, West Fargo, and Ticketmaster Fargo, always linked back to the source. It does not host events, does not let users create them, and is not affiliated with those organizations.",
        ],
      },
    ],
    related: ["events", "community", "questions/where-do-events-come-from", "glossary/event-attribution", "for-newcomers", "vs/facebook-groups"],
    faqs: [
      {
        q: "Can I find friends on Help Me?",
        a: "It is not built for that. There are no profiles to browse and no groups to join.",
      },
      {
        q: "Can I create an event?",
        a: "No. Listings come from a fixed set of official sources, which is what keeps them accurate.",
      },
    ],
  }),
];
