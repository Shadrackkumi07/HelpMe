import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

/**
 * Audience pages. Each describes a real group in Fargo-Moorhead honestly,
 * including where Help Me is the wrong tool for that group.
 */
export const AUDIENCE_PAGES: SeoPage[] = [
  page({
    slug: "for-seniors",
    kind: "audience",
    title: "Help Me for older adults in Fargo-Moorhead",
    description:
      "Small favors for older adults in Fargo, West Fargo, and Moorhead: something heavy, an icy lot, a jump start. Not home care, not medical help.",
    h1: "For older adults who need one thing, not a program",
    eyebrow: "Who it's for",
    lead: "Most of the time the ask is small: the lid that will not budge, the snow the plow left behind the car, the box that is heavier than it looks.",
    answer:
      "Help Me lets older adults in Fargo, West Fargo, and Moorhead ask neighbors for small, one-time favors: a hand with something heavy, company across an icy lot, a jump start in daylight. It is not home care, not medical help, and not a companion service. Aging services, home care agencies, and 211 cover those.",
    takeaways: [
      "Small, one-time favors only, not ongoing care.",
      "No medical help, personal care, or medication help of any kind.",
      "Meeting in public is the default. Anything at a door is your call.",
      "211 connects to aging, disability, and in-home service programs.",
    ],
    keywords: ["senior help Fargo", "older adults Moorhead help", "help for seniors North Dakota", "snow help Fargo"],
    sections: [
      {
        heading: "What fits",
        body: [
          "Clearing the berm the plow left behind a car. Carrying something up a step. A jump start in a lot. Someone walking beside you across a February parking lot where the ice is hard to see. These are the favors that go well, and they end in ten minutes.",
          "You write one sentence, a neighbor can say yes or no, and you meet in a public place. Nobody has to come to the door. If it helps to have a family member nearby, ask them to be there.",
        ],
      },
      {
        heading: "What does not, and where to go instead",
        body: [
          "Anything medical, anything involving medication, bathing, transfers, or daily support belongs to licensed home care and to county aging services. 211 is the front door for both North Dakota and Minnesota programs. A neighbor with an app is not a caregiver and should never be treated as one.",
        ],
        bullets: [
          "211 for aging services, home-delivered meals, and referrals.",
          "911 for a fall with injury, chest pain, or confusion.",
          "Licensed home care for personal or medical support.",
          "Help Me for the small, finishable, one-time thing.",
        ],
      },
      {
        heading: "A word about who says yes",
        body: [
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. A review of identity evidence is not a promise about anyone's character, so meet in a public place when you can and involve a family member if that makes it easier. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["ground-rules", "questions/does-help-me-run-background-checks", "resources/211-north-dakota", "help/snow-help", "help/heavy-lifting", "questions/what-should-i-not-ask-for"],
    faqs: [
      {
        q: "Can someone drive me to an appointment?",
        a: "No. Help Me does not arrange transportation. MATBUS, paratransit programs, and 211 referrals cover that.",
      },
      {
        q: "Is there a cost?",
        a: "No. There is no payment, no tipping, and no fee anywhere in the app.",
      },
      {
        q: "Does a neighbor have to come to my door?",
        a: "No. Meeting in public is the default. You choose where, and a doorstep is never the place to meet.",
      },
    ],
  }),
  page({
    slug: "for-veterans",
    kind: "audience",
    title: "Help Me for veterans in Fargo-Moorhead",
    description:
      "Small neighbor favors for veterans in Fargo, West Fargo, and Moorhead, and the VA, county, and crisis resources that a community app does not replace.",
    h1: "For veterans who would rather ask a neighbor",
    eyebrow: "Who it's for",
    lead: "Sometimes the thing you need is a hand with a dead battery, not an intake appointment.",
    answer:
      "Help Me is a place to ask for small favors in Fargo, West Fargo, and Moorhead, and veterans use it like anyone else. It is not a VA service, not tied to any veterans organization, and not a benefits, housing, or crisis program. The Veterans Crisis Line, the VA, and county veterans service officers handle those.",
    takeaways: [
      "Independent app, with no VA or veterans-organization affiliation.",
      "Veterans Crisis Line: dial 988, then press 1.",
      "County veterans service officers help with benefits and claims.",
      "Help Me covers small, everyday favors only.",
    ],
    keywords: ["veterans Fargo help", "Fargo veteran resources", "Moorhead veterans", "Veterans Crisis Line Fargo"],
    sections: [
      {
        heading: "What a neighbor is good for",
        body: [
          "A jump start. A hand moving something. Snow behind a car. Someone to walk with across a lot. Small tasks that do not need an appointment, a form, or an explanation of why you are asking. You write one sentence, a neighbor can say yes or no, and you meet in a public place.",
        ],
      },
      {
        heading: "What needs the real system",
        body: [
          "Benefits, disability claims, healthcare, housing assistance, and employment programs run through the VA and through county veterans service officers in Cass and Clay Counties. Those people exist to help you work through it, and their help is free.",
        ],
        bullets: [
          "988, then press 1: Veterans Crisis Line.",
          "911: immediate danger or a medical emergency.",
          "County veterans service officer: benefits and claims.",
          "211: housing, food, utilities, and referrals in ND and MN.",
        ],
      },
      {
        heading: "About the helpers",
        body: [
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Helpers are neighbors, not trained responders, counselors, or caseworkers. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/mental-health-fargo", "resources/211-north-dakota", "resources/cass-county-resources", "resources/clay-county-resources", "help/jump-start", "not-911"],
    faqs: [
      {
        q: "Is Help Me a veterans organization?",
        a: "No. It is an independent community app for the Fargo-Moorhead metro, with no VA affiliation.",
      },
      {
        q: "Can a helper assist with a VA form?",
        a: "That belongs with a county veterans service officer, who does it professionally and for free.",
      },
      {
        q: "What number do I call in a crisis?",
        a: "Dial 988, then press 1, for the Veterans Crisis Line. For immediate danger, call 911.",
      },
    ],
  }),
  page({
    slug: "for-new-parents",
    kind: "audience",
    title: "Help Me for new parents in Fargo-Moorhead",
    description:
      "Small favors for new parents in Fargo, West Fargo, and Moorhead: lifting, carrying, a second pair of hands. Not childcare, babysitting, or medical advice.",
    h1: "For parents in the blur",
    eyebrow: "Who it's for",
    lead: "The problem is rarely the baby. It is the car seat, the stairs, the groceries, and the fact that nothing takes ten minutes anymore.",
    answer:
      "Help Me gives new parents in Fargo, West Fargo, and Moorhead a way to ask neighbors for small favors: carrying something heavy, a hand at a car, a task that needs two more arms. It is not childcare, babysitting, or medical advice. Nobody on Help Me is ever left alone with a child.",
    takeaways: [
      "Never childcare or babysitting, even for a few minutes.",
      "No medical, feeding, or health advice from neighbors.",
      "Good for logistics: lifting, carrying, a second pair of hands.",
      "Public meeting places remain the default.",
    ],
    keywords: ["new parents Fargo", "help for parents Moorhead", "postpartum support Fargo", "new baby help Fargo"],
    sections: [
      {
        heading: "The unglamorous asks",
        body: [
          "A stroller box that will not fit through a door alone. A car seat base that needs a second person and a flashlight. Groceries from a trunk to a landing when you cannot carry both at once. Snow behind the car when you have a five-day-old and a pediatrician appointment.",
          "You write one sentence, a neighbor can say yes or no, and you meet in a public place, ideally in daylight, with the handoff over in a few minutes.",
        ],
      },
      {
        heading: "The hard line",
        body: [
          "No one on this app watches a child, holds a child, or is left alone with a child. That is for family, licensed childcare, or a person you know well, not a neighbor matched through an app. If you are struggling with postpartum depression or anxiety, call your clinic, 988, or 911. Those are the right doors, and using them is not a failure.",
        ],
      },
      {
        heading: "Keeping it simple",
        body: [
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Keep meetings short and public, and keep your address to yourself. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["questions/what-should-i-not-ask-for", "resources/mental-health-fargo", "resources/211-north-dakota", "help/heavy-lifting", "ground-rules", "for-neighbors"],
    faqs: [
      {
        q: "Can someone watch my kid for twenty minutes?",
        a: "No. Childcare is never a Help Me request, however short.",
      },
      {
        q: "Can I ask for a meal?",
        a: "Help Me is not a meal service. Food assistance resources are listed on the Resources pages.",
      },
      {
        q: "Where do I meet someone with a baby in tow?",
        a: "Somewhere public and easy: a store entrance or a lit lot. Keep the handoff quick and keep your address private.",
      },
    ],
  }),
  page({
    slug: "for-renters",
    kind: "audience",
    title: "Help Me for renters in Fargo-Moorhead",
    description:
      "Moving in, moving out, and ordinary apartment life in Fargo, West Fargo, and Moorhead, plus where landlord and legal questions actually go.",
    h1: "For people whose lease ends in May",
    eyebrow: "Who it's for",
    lead: "Apartment life in this metro runs on a calendar: everyone moves at once, and everyone needs the same elevator.",
    answer:
      "Help Me gives renters in Fargo, West Fargo, and Moorhead a way to ask neighbors for small favors: a hand with furniture, a jump start in the lot, a shovel after a storm. It is not a repair service and not legal help. Maintenance belongs to your landlord, and disputes belong to tenant resources and legal aid.",
    takeaways: [
      "Lifting and one-time favors, not repairs.",
      "Maintenance requests go to the landlord, in writing.",
      "Tenant rules differ between North Dakota and Minnesota.",
      "Legal aid handles disputes. Neighbors cannot.",
    ],
    keywords: ["Fargo renters", "Moorhead apartments help", "moving help Fargo", "apartment move-in Fargo"],
    sections: [
      {
        heading: "The rhythm of renting here",
        body: [
          "Leases cluster around the same dates, so move-in and move-out are metro-wide events rather than personal ones. Apartment complexes turn over almost all at once. Parking rules change with snowfall. And every building has one door that is actually the loading door.",
          "That is when two more hands are worth the most. Ask in one sentence, name a public meeting place if you are not at home, and keep the favor small: a heavy item, a stuck zipper, a ladder held for two minutes.",
        ],
      },
      {
        heading: "Two states, two sets of rules",
        body: [
          "Fargo and West Fargo are North Dakota. Moorhead and Dilworth are Minnesota. Notice periods, deposit rules, and tenant protections are not the same across the river, and a friend on the other side may be confidently wrong. Legal aid and tenant-resource organizations in each state are the ones to ask.",
        ],
      },
      {
        heading: "What a neighbor cannot fix",
        body: [
          "A leaking sink is plumbing and a licensed trade. A broken lock is your landlord's job. A full move is movers and friends. Help Me is for a few heavy items, not a whole apartment. Helpers can apply to be reviewed by our team. Help Me does not run background checks, so keep any handoff in a public place and keep your address private.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["seasons/move-out-week", "seasons/fall-move-in-season", "help/heavy-lifting", "help/move-in", "resources/cass-county-resources", "resources/clay-county-resources"],
    faqs: [
      {
        q: "Can a helper fix my sink?",
        a: "No. Maintenance is your landlord's job and plumbing is a licensed trade.",
      },
      {
        q: "Can someone help me move out?",
        a: "A hand with a few heavy items, yes. A full move is movers and friends.",
      },
      {
        q: "Where do I take a landlord dispute?",
        a: "To tenant resources and legal aid in your state. The Resources pages list Fargo-Moorhead options for both sides of the river.",
      },
    ],
  }),
  page({
    slug: "for-night-shift-workers",
    kind: "audience",
    title: "Help Me for night shift workers in Fargo-Moorhead",
    description:
      "For people who finish at 2 a.m. in Fargo, West Fargo, or Moorhead: a dead battery in an empty lot, and an honest look at what a neighbor app can do overnight.",
    h1: "For the people who leave when the lot is empty",
    eyebrow: "Who it's for",
    lead: "Nurses, plow drivers, warehouse crews, servers, security. The metro that keeps running while it sleeps.",
    answer:
      "Night shift workers in Fargo, West Fargo, and Moorhead can use Help Me for a dead battery or a small favor at the end of a shift, but overnight there are fewer people awake to say yes. Employer escorts, campus public safety, a roadside assistance plan, and 911 are the dependable options after midnight.",
    takeaways: [
      "Fewer people are awake to say yes overnight. Plan for that.",
      "Employer or campus escorts are the dependable option.",
      "Cold plus an empty lot is the classic 2 a.m. failure.",
      "911 for anything threatening, at any hour.",
    ],
    keywords: ["night shift Fargo", "late night Fargo", "dead battery empty lot Moorhead", "overnight help Fargo"],
    sections: [
      {
        heading: "The 2 a.m. problem",
        body: [
          "The lot is empty, the car will not start, it is fifteen below, and the next person is hours away. That is the scenario worth planning for before it happens: a jump pack in the trunk, roadside assistance saved in your phone, and a coworker who knows your car.",
        ],
      },
      {
        heading: "Where the app helps, and where it does not",
        body: [
          "Evening shifts that end around ten or eleven are realistic, because people are awake. Three in the morning is not, and it is better to say so than to let someone sit in a cold car waiting on a yes that is not coming. Use your employer's escort if you have one, and call 911 if anything feels wrong.",
          "Help Me does not promise anyone is nearby at any hour. It is a place to ask, and a place to answer, and sometimes nobody is awake to answer.",
        ],
      },
      {
        heading: "If you do ask",
        body: [
          "Keep it short, and meet in a lit, public place, ideally with a coworker nearby. Both people stay outside the car. A request closes on its own after two hours, so do not wait on it in the cold. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["help/walk-to-car", "help/walk-with-someone", "help/jump-start", "guides/downtown-fargo-at-night", "seasons/winter-in-fargo-moorhead", "questions/what-happens-if-nobody-accepts"],
    faqs: [
      {
        q: "Will someone say yes overnight?",
        a: "Sometimes, but do not count on it. Saying yes is voluntary and depends on who is awake nearby.",
      },
      {
        q: "What should I keep in the car?",
        a: "A jump pack, a real winter coat, a scraper, and roadside assistance information you can reach with cold hands.",
      },
      {
        q: "Who do I call if something feels wrong?",
        a: "Call 911 or your local emergency number. Help Me is not an emergency service.",
      },
    ],
  }),
  page({
    slug: "for-commuters",
    kind: "audience",
    title: "Help Me for Fargo-Moorhead commuters",
    description:
      "Driving in from Horace, Casselton, Dilworth, Hawley, or Barnesville? What breaks on a metro commute and what a neighbor can help with.",
    h1: "For people who drive in every day",
    eyebrow: "Who it's for",
    lead: "Plenty of people live twenty minutes out and spend their working day inside the metro. The car is the whole plan.",
    answer:
      "Commuters into Fargo-Moorhead from Horace, Casselton, Harwood, Dilworth, Glyndon, Hawley, or Barnesville can use Help Me for everyday problems inside the metro: a dead battery at work, a flat in a lot, two more hands for something heavy. Highway breakdowns need a tow truck, not a neighbor.",
    takeaways: [
      "Neighbors are most likely nearby inside the metro core.",
      "Rural highway breakdowns need roadside assistance.",
      "ND 511 and MN 511 for road conditions before you drive.",
      "Winter commutes need a real emergency kit in the car.",
    ],
    keywords: ["Fargo commute", "Horace to Fargo", "Casselton commuter", "Dilworth to Moorhead", "commuting Fargo winter"],
    sections: [
      {
        heading: "Where a commute actually fails",
        body: [
          "In the lot at work, at minus twenty, at the end of a shift. In a gravel driveway during the thaw. On a two-lane road in a ground blizzard where visibility went from fine to nothing in a mile. The first two are neighbor-sized. The third is not, and never will be.",
        ],
      },
      {
        heading: "Plan around the county line",
        body: [
          "Cell coverage, plow priority, and how long a tow takes all change once you are out of the metro. If your commute crosses open country in winter, drive with a charged phone, a blanket, and the assumption that help is half an hour away rather than five minutes.",
          "Check ND 511 or MN 511 before you leave. If a road is closed, believe it.",
        ],
      },
      {
        heading: "Using Help Me on a commute",
        body: [
          "Help Me is for the small favors inside the metro, where you spend your day. Ask in one sentence, name a public place, and keep both people outside the car for anything involving a vehicle. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["cities/horace", "cities/dilworth", "help/winter-car-help", "seasons/blizzard-day", "cities/towns-around-fargo-moorhead"],
    faqs: [
      {
        q: "Can someone come to me on the highway?",
        a: "No. Highway shoulders are dangerous and Help Me is not roadside assistance. Call a tow service, and 911 if you are exposed.",
      },
      {
        q: "Is Help Me available in my small town?",
        a: "Help Me launches in Fargo, West Fargo, and Moorhead first. Ask in the metro places you already visit, and the app shows what is open.",
      },
      {
        q: "Where do I check winter road conditions?",
        a: "ND 511 for North Dakota and MN 511 for Minnesota. Check before you leave, and believe a closure.",
      },
    ],
  }),
  page({
    slug: "for-people-without-a-car",
    kind: "audience",
    title: "Help Me without a car in Fargo-Moorhead",
    description:
      "Getting around Fargo, West Fargo, and Moorhead without a car: MATBUS, walking distances, winter, and what a neighbor app can and cannot do about it.",
    h1: "For people doing this metro on foot",
    eyebrow: "Who it's for",
    lead: "This is a city built around parking lots. Doing it without a car is a daily logistics exercise.",
    answer:
      "Living car-free in Fargo-Moorhead means MATBUS, walking, and biking across a metro built for driving. Help Me can help with small things where you are headed: directions, a hand carrying something, company on a walk. It is not a rideshare and does not arrange rides. MATBUS and rideshare services cover transportation.",
    takeaways: [
      "Help Me does not arrange transportation of any kind.",
      "MATBUS serves Fargo, West Fargo, Moorhead, and the campuses.",
      "Winter turns a fifteen-minute walk into a real decision.",
      "Ask a local which stop and which door. It saves whole hours.",
    ],
    keywords: ["no car Fargo", "MATBUS routes", "getting around Moorhead without a car", "walk Fargo winter"],
    sections: [
      {
        heading: "The transit reality",
        body: [
          "MATBUS connects the metro and the campuses, and it works well on the corridors it covers. Outside those corridors, and after evening service ends, the metro assumes a car. Knowing which route actually goes where you are headed is the most valuable local knowledge there is.",
        ],
      },
      {
        heading: "Winter is the constraint",
        body: [
          "A fifteen-minute walk in July is nothing. The same walk in a February wind is a real decision, especially if a sidewalk has not been cleared. Plan shorter hops, dress as if it is worse than it looks, and do not be proud about waiting somewhere heated.",
        ],
      },
      {
        heading: "Where a neighbor fits",
        body: [
          "A neighbor can point you to the right door, carry a heavy bag the last block, or keep you company on a walk across a lot. Ask in one sentence and meet in a public place. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/matbus", "help/transit-help", "help/directions", "seasons/winter-in-fargo-moorhead", "questions/what-should-i-not-ask-for"],
    faqs: [
      {
        q: "Can Help Me get me driven somewhere?",
        a: "No. Help Me does not arrange transportation, and asking someone to drive you is not what the app is for.",
      },
      {
        q: "Does MATBUS serve the campuses?",
        a: "MATBUS serves the metro, including campus areas. Check current routes and hours on the official source before you rely on them.",
      },
      {
        q: "What is the best help for a long winter walk?",
        a: "Plan shorter hops, dress for the wind chill, and know a heated place to wait. A neighbor can keep you company, but cannot change the weather.",
      },
    ],
  }),
  page({
    slug: "for-faith-communities",
    kind: "audience",
    title: "Help Me and faith communities in Fargo-Moorhead",
    description:
      "Congregations already run the informal help network here. How Help Me fits alongside it, and why it is not a ministry or a volunteer program.",
    h1: "For congregations that already do this",
    eyebrow: "Who it's for",
    lead: "Long before an app existed, the phone tree at a church, mosque, or synagogue was how a stuck person got unstuck here.",
    answer:
      "Faith communities in Fargo-Moorhead already run informal help networks. Help Me is an independent app that covers a different gap: the moment nobody in your network is nearby or awake. It is not a ministry, not affiliated with any congregation, and it does not run organized outreach or volunteer programs.",
    takeaways: [
      "Independent, with no religious affiliation.",
      "Not a volunteer-management or outreach platform.",
      "Members use it as individuals, not as an organization.",
      "Organized programs need real coordination, not ad-hoc matching.",
    ],
    keywords: ["faith community Fargo", "church help network Moorhead", "congregation volunteers Fargo"],
    sections: [
      {
        heading: "Where the overlap is real",
        body: [
          "Both answer the same question: who is nearby and willing. A congregation knows its people and can commit to sustained care. An app knows who is a few minutes away right now. Those solve different halves of the same problem, and neither replaces the other.",
          "A phone tree works because people know each other. A stranger down the block does not know you yet. That is the gap a small, public, five-minute favor can close, and it is the only gap Help Me is trying to close.",
        ],
      },
      {
        heading: "What Help Me cannot be for a congregation",
        body: [
          "It cannot manage a volunteer roster, schedule meal trains, run a benevolence fund, or coordinate a group project. It has no group accounts and no organizational tools. Individual members can use it individually, and that is the whole extent of the fit.",
        ],
      },
      {
        heading: "If members use it",
        body: [
          "Help Me is a place to ask your block for the small stuff. A member who would stop for a dead battery anyway can apply to help. Helpers can apply to be reviewed by our team. Help Me does not run background checks. Meet in public, keep it short, and report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["for-neighbors", "community", "for-nonprofits", "resources", "about", "questions/is-help-me-a-gig-app"],
    faqs: [
      {
        q: "Is Help Me a religious organization?",
        a: "No. It is an independent community app with no religious affiliation of any kind.",
      },
      {
        q: "Can we run our outreach through it?",
        a: "No. There are no organizational accounts or volunteer-management tools.",
      },
      {
        q: "Can individual members use it?",
        a: "Yes, as individuals. Anyone can join, and helping needs a current review by our team.",
      },
    ],
  }),
  page({
    slug: "for-nonprofits",
    kind: "audience",
    title: "Help Me and Fargo-Moorhead nonprofits",
    description:
      "How a neighbor help app relates to the nonprofits, shelters, and service organizations that do the structural work in Fargo-Moorhead. Different jobs.",
    h1: "For the organizations doing the heavy version",
    eyebrow: "Who it's for",
    lead: "Everyday help is not social services, and pretending otherwise would be worse than useless.",
    answer:
      "Help Me is a neighbor-sized app for one-time, everyday, non-emergency favors. It does not do case management, food or housing programs, crisis response, or volunteer coordination, which is the work Fargo-Moorhead nonprofits and county agencies actually do. It has no organizational accounts, and it sends anything structural to 211 and official services.",
    takeaways: [
      "No case management, intake, or ongoing support of any kind.",
      "No organizational accounts or volunteer-management features.",
      "211 is the referral backbone in North Dakota and Minnesota.",
      "Resource pages here point to official services, not to the app.",
    ],
    keywords: ["Fargo nonprofits", "Moorhead social services", "211 referral Fargo", "Fargo-Moorhead services"],
    sections: [
      {
        heading: "The line between a favor and a service",
        body: [
          "A jump start is a favor. Housing instability, food insecurity, addiction, and domestic violence are not problems a neighbor with an app can hold, and treating them as such delays the real help. Every resource page on this site exists to send those situations to the organizations built for them.",
          "Nonprofits and county agencies carry the long work: intake, follow-up, funding, and trained staff. A neighbor carries a charger and ten minutes. Both matter, and they should never be confused for each other.",
        ],
      },
      {
        heading: "What we ask of ourselves",
        body: [
          "Do not appear as an alternative to services people actually need. Do not collect need data we cannot act on. Do not describe helpers as trained responders, counselors, or caseworkers. They are neighbors whose identity evidence our team reviewed, and that is the whole claim.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
        ],
      },
      {
        heading: "How organizations can help",
        body: [
          "Keep your own listings accurate and keep 211 up to date. Point people to official numbers. If someone is in immediate danger, call 911 or your local emergency number. Help Me is not an emergency service, and it is not where structural need should end up.",
        ],
      },
    ],
    related: ["resources", "resources/211-north-dakota", "resources/211-minnesota", "resources/homeless-services-fargo", "resources/food-assistance-fargo", "not-911"],
    faqs: [
      {
        q: "Can our organization post needs?",
        a: "No. There are no organizational accounts. Requests come from individuals for small, everyday favors.",
      },
      {
        q: "Will Help Me refer people to us?",
        a: "The resource pages point to official services and referral lines by name, on purpose. Keep your 211 listing current.",
      },
      {
        q: "Is Help Me a social service?",
        a: "No. It is a place to ask your block for the small stuff. Structural need belongs with the organizations built for it.",
      },
    ],
  }),
  page({
    slug: "for-people-new-to-winter",
    kind: "audience",
    title: "Help Me for your first Fargo winter",
    description:
      "Never lived through a North Dakota winter? What to own before October, how fast the cold fails a car, and what a neighbor can help with when it does.",
    h1: "For anyone about to meet their first real winter",
    eyebrow: "Who it's for",
    lead: "Everyone tells you it is cold. Nobody explains that the cold has a plan.",
    answer:
      "A first Fargo-Moorhead winter surprises people with how fast it fails a car and how quickly cold turns serious. Get a real coat, a scraper, and a jump pack before October. When something goes wrong in a lot or a driveway, a neighbor with cables and ten minutes is exactly what Help Me is for.",
    takeaways: [
      "Buy the coat, boots, scraper, and jump pack before you need them.",
      "Subzero with wind chill is a health risk, not a complaint.",
      "Batteries fail on the coldest morning, all across the metro.",
      "Highway trouble is a tow and 911 situation, not a neighbor one.",
    ],
    keywords: ["first winter Fargo", "moving to North Dakota winter", "how cold is Fargo", "Fargo winter prep"],
    sections: [
      {
        heading: "What to own before it starts",
        body: [
          "A coat rated for real cold, not a fashion coat. Boots with grip, because ice is as dangerous as temperature. A scraper with a brush in every car. Gloves you can drive in, and warmer ones for standing outside. A jump pack is the single best purchase a new resident can make.",
        ],
        bullets: [
          "Insulated coat, hat, and real gloves.",
          "Boots with traction for ice, not just snow.",
          "Scraper and brush in every vehicle.",
          "Portable jump pack and a blanket in the trunk.",
        ],
      },
      {
        heading: "The rules nobody writes down",
        body: [
          "Plug-in block heaters exist here for a reason. Keep fuel above half in deep winter. Start the car before you clear it. Do not park where the plow will bury you. Tell someone your route if you are driving out of the metro. And when a neighbor offers a jump in a lot, that is normal here, not odd.",
        ],
      },
      {
        heading: "When it goes wrong",
        body: [
          "A dead battery in a busy lot in daylight is the classic small ask. Write one sentence, name a public place, and keep both people outside the car. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["seasons/winter-in-fargo-moorhead", "seasons/first-snow", "guides/winter-help-fargo", "help/jump-start", "help/winter-car-help", "for-newcomers"],
    faqs: [
      {
        q: "How cold does it actually get?",
        a: "Subzero stretches are routine in January and February, and wind chill makes it materially worse. Treat the forecast as instructions.",
      },
      {
        q: "Is it really that dangerous?",
        a: "It is manageable with the right gear and dangerous without it. That is the whole difference.",
      },
      {
        q: "What is the one thing to buy first?",
        a: "A portable jump pack. It turns a dead battery from a crisis into a ten-minute problem.",
      },
    ],
  }),
];
