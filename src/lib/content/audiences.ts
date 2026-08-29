import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

/**
 * Audience pages. Each describes a real group in Fargo–Moorhead honestly,
 * including where Help Me is the wrong tool for that group.
 */
export const AUDIENCE_PAGES: SeoPage[] = [
  page({
    slug: "for-seniors",
    kind: "audience",
    title: "Help Me for older adults in Fargo–Moorhead",
    description:
      "Everyday help for older adults in Fargo, Moorhead, and West Fargo: a hand with something heavy, a walk across an icy lot, a jump start. Not care, not medical.",
    h1: "For older adults who need one thing, not a program",
    eyebrow: "who it’s for",
    lead: "Most of the time the ask is small: the lid, the snow behind the car, the box that is heavier than it looks.",
    answer:
      "Help Me connects older adults in Fargo–Moorhead with approved neighbors for small, everyday, non-emergency tasks — a hand with something heavy, a walk across an icy lot, a jump start. It is not home care, not medical help, and not a companion service. Aging and disability services, home care agencies, and 211 handle those.",
    takeaways: [
      "Small, one-visit tasks only — not ongoing care.",
      "No medical, personal care, or medication help of any kind.",
      "Meeting in public is the default; help at a door is your call.",
      "211 connects to aging, disability, and in-home service programs.",
    ],
    keywords: ["senior help Fargo", "older adults Moorhead help", "help for seniors North Dakota"],
    sections: [
      {
        heading: "What fits",
        body: [
          "Clearing the berm the plow left behind a car. Carrying something up a step. A jump start in a lot. Someone walking beside you across a February parking lot where the ice is invisible. These are the requests that go well, and they end in ten minutes.",
        ],
      },
      {
        heading: "What does not, and where to go instead",
        body: [
          "Anything medical, anything involving medication, bathing, transfers, or ongoing daily support belongs to licensed home care and to county aging services. 211 is the front door for both North Dakota and Minnesota programs. A neighbor with an app is not a caregiver and should never be treated as one.",
        ],
        bullets: [
          "211 for aging services, home-delivered meals, and referral",
          "911 for a fall with injury, chest pain, or confusion",
          "Licensed home care for personal or medical support",
          "Help Me for the small, finishable, one-time thing",
        ],
      },
      {
        heading: "A word about who shows up",
        body: [
          "Helpers submit identity evidence and a staff member reviews it before they can accept anything. That is a real gate. It is not a criminal background check and we will not describe it as one, so meet in a public place when you can and involve a family member if that makes it easier.",
        ],
      },
    ],
    related: ["safety", "questions/are-helpers-background-checked", "resources/211-north-dakota", "help/snow-help", "help/heavy-lifting", "questions/what-should-i-not-ask-for"],
    faqs: [
      {
        q: "Can someone drive me to an appointment?",
        a: "No. Help Me is not a rideshare or a medical transport service. MATBUS, paratransit programs, and 211 referrals cover that.",
      },
      {
        q: "Is there a cost?",
        a: "No. There is no payment, no tipping, and no fee anywhere in the app.",
      },
    ],
  }),

  page({
    slug: "for-international-students",
    kind: "audience",
    title: "Help Me for international students in Fargo–Moorhead",
    description:
      "New country, new winter, no car, no local network. How Help Me works for international students at NDSU, MSUM, Concordia, and M State — and what it is not.",
    h1: "For students who arrived with two suitcases",
    eyebrow: "who it’s for",
    lead: "Nobody warns you enough about the winter, and nobody explains which door of the building is the one that is unlocked.",
    answer:
      "Help Me lets international students in Fargo–Moorhead ask approved neighbors for small everyday help — directions, a building, a hand moving in, a jump start, company on a walk. It is free and does not involve payment. It is not immigration advice, not legal help, and not affiliated with any university’s international office.",
    takeaways: [
      "Free, with no payment between people, ever.",
      "Ask for small, practical, local things.",
      "Your international student office is the authority on visas and status.",
      "Winter here is a safety topic, not small talk.",
    ],
    keywords: ["international students Fargo", "NDSU international student help", "new to North Dakota winter"],
    sections: [
      {
        heading: "The things that are genuinely hard at first",
        body: [
          "Distances that assume a car. Buildings named after people nobody introduced you to. A grocery run that turns into a two-hour bus problem. A first winter that arrives faster and harder than any description prepared you for. None of this is a failure on your part; the metro is simply built for people who already know it.",
        ],
      },
      {
        heading: "What to ask a local",
        body: [
          "Which bus actually gets there. Which door is open after six. Where to buy a real winter coat and what real means at minus twenty-five. Where to park without a ticket. These are ten-second answers for a resident and lost afternoons without one.",
        ],
        bullets: [
          "Directions and finding a specific campus building",
          "A local guide question about how something works here",
          "A hand with move-in or something heavy",
          "Company walking to a car or a bus stop at night",
        ],
      },
      {
        heading: "Where Help Me is the wrong door",
        body: [
          "Visa status, work authorization, taxes, and anything involving immigration law belong to your university’s international student office and to a qualified attorney. Health issues belong to student health. Emergencies are 911 — it is free to call, and using it does not affect your status.",
        ],
      },
    ],
    related: ["for-students", "for-newcomers", "guides/new-to-fargo", "seasons/winter-in-fargo-moorhead", "campuses/ndsu", "resources/matbus"],
    faqs: [
      {
        q: "Do I need to pay a helper?",
        a: "No. There are no payments in Help Me at all, and nobody should ask you for money.",
      },
      {
        q: "Is Help Me run by my university?",
        a: "No. It is independent. Campus event calendars are linked with attribution, which is not affiliation or endorsement.",
      },
    ],
  }),

  page({
    slug: "for-veterans",
    kind: "audience",
    title: "Help Me for veterans in Fargo–Moorhead",
    description:
      "Everyday neighbor help for veterans in Fargo, Moorhead, and West Fargo — and the official VA, county, and crisis resources that a community app does not replace.",
    h1: "For veterans who would rather ask a neighbor",
    eyebrow: "who it’s for",
    lead: "Sometimes the thing you need is a hand with a battery, not an intake appointment.",
    answer:
      "Help Me is everyday, non-emergency neighbor help in Fargo–Moorhead, available to veterans like anyone else in the metro. It is not a VA service, not affiliated with any veterans organization, and not a benefits, housing, or crisis program. The Veterans Crisis Line, VA services, and county veterans service officers handle those.",
    takeaways: [
      "Independent app — no VA or veterans-organization affiliation.",
      "Veterans Crisis Line: dial 988, then press 1.",
      "County veterans service officers help with benefits navigation.",
      "Help Me covers the small everyday things only.",
    ],
    keywords: ["veterans Fargo help", "Fargo veteran resources", "Moorhead veterans"],
    sections: [
      {
        heading: "What a neighbor is good for",
        body: [
          "A jump start. A hand moving something. Snow behind a car. Someone to walk with. Small tasks that do not need an appointment, a form, or an explanation of why you are asking.",
        ],
      },
      {
        heading: "What needs the real system",
        body: [
          "Benefits, disability claims, healthcare, housing assistance, and employment programs run through the VA and through county veterans service officers in Cass and Clay County. Those people exist specifically to navigate it with you, and they are free.",
        ],
        bullets: [
          "988 then 1: Veterans Crisis Line",
          "911: immediate danger or medical emergency",
          "County veterans service officer: benefits and claims",
          "211: housing, food, utilities, and referral in ND and MN",
        ],
      },
    ],
    related: ["resources/mental-health-fargo", "resources/211-north-dakota", "resources/cass-county-resources", "resources/clay-county-resources", "help/jump-start", "not-911"],
    faqs: [
      {
        q: "Is Help Me a veterans organization?",
        a: "No. It is a general community help app for the Fargo–Moorhead metro with no VA affiliation.",
      },
      {
        q: "Can helpers assist with a VA form?",
        a: "That belongs with a county veterans service officer, who does it professionally and for free.",
      },
    ],
  }),

  page({
    slug: "for-new-parents",
    kind: "audience",
    title: "Help Me for new parents in Fargo–Moorhead",
    description:
      "Everyday help for new parents in Fargo, Moorhead, and West Fargo. Not childcare, not babysitting, not medical advice — a hand with the logistics around all that.",
    h1: "For parents in the blur",
    eyebrow: "who it’s for",
    lead: "The problem is rarely the baby. It is the car seat, the stairs, the groceries, and the fact that nothing takes ten minutes anymore.",
    answer:
      "Help Me offers new parents in Fargo–Moorhead small, everyday neighbor help — carrying something heavy, a hand at a car, a task that needs two arms. It is explicitly not childcare, babysitting, or medical advice. Nobody on Help Me should ever be left alone with a child, and licensed childcare and your clinic cover what this does not.",
    takeaways: [
      "Never childcare or babysitting — that is not what this app is.",
      "No medical, feeding, or health advice from strangers.",
      "Good for logistics: lifting, carrying, a second set of hands.",
      "Public meeting places remain the default.",
    ],
    keywords: ["new parents Fargo", "help for parents Moorhead", "postpartum support Fargo"],
    sections: [
      {
        heading: "The unglamorous asks",
        body: [
          "A stroller box that will not fit through a door alone. A car seat base that needs a second person and a flashlight. Groceries from a trunk to a landing when you cannot carry both at once. Snow behind a car when you have a five-day-old and a pediatrician appointment.",
        ],
      },
      {
        heading: "The hard line",
        body: [
          "No one on this app watches a child, holds a child, or is left alone with a child. That is licensed childcare, family, or a person you know well — not a stranger matched by software. If you are struggling with postpartum depression or anxiety, call your clinic, 988, or 911. Those are the right doors and using them is not a failure.",
        ],
      },
    ],
    related: ["questions/what-should-i-not-ask-for", "resources/mental-health-fargo", "resources/211-north-dakota", "help/heavy-lifting", "safety", "for-neighbors"],
    faqs: [
      {
        q: "Can someone watch my kid for twenty minutes?",
        a: "No. Childcare is never a Help Me request, regardless of how short it is.",
      },
      {
        q: "Can I ask for a meal?",
        a: "The app is not a meal-delivery service. Food assistance resources are listed under Resources.",
      },
    ],
  }),

  page({
    slug: "for-renters",
    kind: "audience",
    title: "Help Me for renters in Fargo–Moorhead",
    description:
      "Moving in, moving out, and the ordinary problems of apartment life in Fargo, Moorhead, and West Fargo — plus where landlord and legal issues actually go.",
    h1: "For people whose lease ends in May",
    eyebrow: "who it’s for",
    lead: "Apartment life in this metro runs on a calendar: everyone moves at once, and everyone needs the same elevator.",
    answer:
      "Help Me gives renters in Fargo–Moorhead a way to ask approved neighbors for small tasks — a hand with furniture, a jump start in the lot, a scrape and shovel after a storm. It is not a repair service and not legal help: maintenance belongs to your landlord, and disputes belong to tenant resources and legal aid.",
    takeaways: [
      "Lifting and one-visit help, not repairs.",
      "Maintenance requests go to the landlord, in writing.",
      "Tenant rights differ between North Dakota and Minnesota.",
      "Legal aid organizations handle disputes; neighbors cannot.",
    ],
    keywords: ["Fargo renters", "Moorhead apartments help", "moving help Fargo"],
    sections: [
      {
        heading: "The rhythm of renting here",
        body: [
          "Leases cluster around the same dates, so move-in and move-out are metro-wide events rather than personal ones. Complexes near campus turn over almost entirely. Parking rules change with snowfall. And every building has one door that is actually the loading door.",
        ],
      },
      {
        heading: "Two states, two sets of rules",
        body: [
          "Fargo and West Fargo are North Dakota. Moorhead and Dilworth are Minnesota. Notice periods, deposit rules, and tenant protections are not the same across the river, and advice from a friend on the other side may be confidently wrong. Legal aid and tenant-resource organizations in each state are the ones to ask.",
        ],
      },
    ],
    related: ["seasons/move-out-week", "seasons/fall-move-in-season", "help/heavy-lifting", "help/move-in", "resources/cass-county-resources", "resources/clay-county-resources"],
    faqs: [
      {
        q: "Can a helper fix my sink?",
        a: "No. Maintenance is your landlord’s job and plumbing is a licensed trade.",
      },
      {
        q: "Can someone help me move out?",
        a: "A hand with a few heavy items, yes. A full move is movers and friends.",
      },
    ],
  }),

  page({
    slug: "for-night-shift-workers",
    kind: "audience",
    title: "Help Me for night shift workers in Fargo–Moorhead",
    description:
      "For people who finish at 2 a.m. in Fargo, Moorhead, or West Fargo: walks to the car, dead batteries in empty lots, and honest limits on overnight help.",
    h1: "For the people who leave when the lot is empty",
    eyebrow: "who it’s for",
    lead: "Nurses, plow drivers, warehouse crews, servers, security. The metro that keeps running while it sleeps.",
    answer:
      "Night shift workers in Fargo–Moorhead can use Help Me for a walk to a car, a jump start, or a hand at the end of a shift — but overnight coverage is genuinely thin, because offers depend on approved helpers being awake and nearby. Employer security escorts, campus safety, and 911 remain the reliable options after midnight.",
    takeaways: [
      "Fewer approved helpers are online overnight — plan for that.",
      "Employer or campus security escorts are the reliable option.",
      "Cold plus an empty lot is the classic 2 a.m. failure.",
      "911 for anything threatening, at any hour.",
    ],
    keywords: ["night shift Fargo", "late night safety Fargo", "walk to car at night Moorhead"],
    sections: [
      {
        heading: "The 2 a.m. problem",
        body: [
          "The lot is empty, the car will not start, it is fifteen below, and the next person is not coming for four hours. That is the scenario worth planning for before it happens: a jump pack in the trunk, roadside assistance saved in your phone, and a coworker who knows your car.",
        ],
      },
      {
        heading: "Where the app helps and where it does not",
        body: [
          "Evening shifts ending at ten or eleven are realistic — people are awake. Three in the morning is not, and it is better to say so than to let someone sit in a cold car waiting on an offer that is not coming. Use your employer’s escort if you have one. Use 911 if anything feels wrong.",
        ],
      },
    ],
    related: ["help/walk-to-car", "help/safety-walk", "help/jump-start", "guides/downtown-fargo-at-night", "seasons/winter-in-fargo-moorhead", "questions/what-happens-if-nobody-accepts"],
    faqs: [
      {
        q: "Are helpers available overnight?",
        a: "Sometimes, but do not count on it. Offers are voluntary and coverage follows who is awake nearby.",
      },
      {
        q: "What should I keep in the car?",
        a: "A jump pack, a real winter coat, a scraper, and roadside assistance information you can reach with cold hands.",
      },
    ],
  }),

  page({
    slug: "for-commuters",
    kind: "audience",
    title: "Help Me for Fargo–Moorhead commuters",
    description:
      "Driving in from Horace, Casselton, Dilworth, Hawley, or Barnesville? What breaks on a metro commute and what a neighbor can help with.",
    h1: "For people who drive in every day",
    eyebrow: "who it’s for",
    lead: "Thousands of people live twenty minutes out and spend their working life inside the metro. The car is the whole plan.",
    answer:
      "Commuters into Fargo–Moorhead from Horace, Casselton, Harwood, Dilworth, Glyndon, Hawley, or Barnesville can use Help Me for everyday problems that happen in the metro — a dead battery at work, a flat in a lot, a hand with something. Rural highway breakdowns are a tow-truck and 511 problem, not a neighbor one.",
    takeaways: [
      "Help density is highest inside the metro core.",
      "Rural highway breakdowns need roadside assistance, not an app.",
      "ND 511 and MN 511 for road conditions before you drive.",
      "Winter commutes need a real emergency kit in the car.",
    ],
    keywords: ["Fargo commute", "Horace to Fargo", "Casselton commuter", "Dilworth to Moorhead"],
    sections: [
      {
        heading: "Where a commute actually fails",
        body: [
          "In the lot at work, at minus twenty, at the end of a shift. In a gravel driveway during the thaw. On a two-lane in a ground blizzard where visibility went from fine to nothing in a mile. The first two are neighbor-scale. The third is not, and never will be.",
        ],
      },
      {
        heading: "Plan around the county line",
        body: [
          "Cell coverage, plow priority, and how long a tow takes all change once you are out of the metro. If your commute crosses open country in winter, drive with a charged phone, a blanket, and the assumption that help is thirty minutes away rather than five.",
        ],
      },
    ],
    related: ["cities/horace", "cities/casselton", "cities/dilworth", "cities/hawley", "help/winter-car-help", "seasons/blizzard-day"],
    faqs: [
      {
        q: "Can someone come to me on the highway?",
        a: "No. Highway shoulders are dangerous and this is not roadside assistance. Call a tow service, and 911 if you are exposed.",
      },
      {
        q: "Do the small-town pages mean helpers live there?",
        a: "They describe the metro people actually drive. Coverage is genuinely thinner the further out you are.",
      },
    ],
  }),

  page({
    slug: "for-people-without-a-car",
    kind: "audience",
    title: "Help Me without a car in Fargo–Moorhead",
    description:
      "Getting around Fargo, Moorhead, and West Fargo without a car: MATBUS, walking distances, winter, and what a neighbor app can and cannot do about it.",
    h1: "For people doing this metro on foot",
    eyebrow: "who it’s for",
    lead: "This is a city built around parking lots. Doing it without a car is a daily logistics exercise.",
    answer:
      "Living car-free in Fargo–Moorhead means MATBUS, walking, and biking across a metro built for driving. Help Me can help with small things at your destination — directions, a hand carrying something, company on a walk — but it is not a rideshare and helpers are not drivers. MATBUS and rideshare services cover transportation.",
    takeaways: [
      "Help Me is not a rideshare and never arranges rides.",
      "MATBUS serves Fargo, West Fargo, Moorhead, and the campuses.",
      "Winter turns a fifteen-minute walk into a real decision.",
      "Ask locals which stop and which door — it saves whole hours.",
    ],
    keywords: ["no car Fargo", "MATBUS routes", "getting around Moorhead without a car"],
    sections: [
      {
        heading: "The transit reality",
        body: [
          "MATBUS connects the metro and the campuses, and it works well for the corridors it covers. Outside those corridors, and after evening service ends, the metro assumes a car. Knowing which route actually goes where you are going is the single most valuable local knowledge there is.",
        ],
      },
      {
        heading: "Winter is the constraint",
        body: [
          "A fifteen-minute walk in July is nothing. The same walk in a February wind is a genuine exposure decision, especially if a sidewalk has not been cleared. Plan shorter hops, dress like it is worse than it looks, and do not be proud about waiting somewhere heated.",
        ],
      },
    ],
    related: ["resources/matbus", "help/transit-help", "help/directions", "seasons/winter-in-fargo-moorhead", "questions/what-should-i-not-ask-for", "for-international-students"],
    faqs: [
      {
        q: "Can I get a ride through Help Me?",
        a: "No. It is not a rideshare, and asking someone to drive you is not what the app is for.",
      },
      {
        q: "Does MATBUS serve the campuses?",
        a: "MATBUS serves the metro including campus areas. Check current routes and hours on the official source before relying on them.",
      },
    ],
  }),

  page({
    slug: "for-faith-communities",
    kind: "audience",
    title: "Help Me for faith communities in Fargo–Moorhead",
    description:
      "Congregations already run the informal help network in this metro. How Help Me fits alongside that — and why it is not a religious organization or a ministry.",
    h1: "For congregations that already do this",
    eyebrow: "who it’s for",
    lead: "Long before an app existed, the phone tree at a church, mosque, or synagogue was how a stuck person got unstuck here.",
    answer:
      "Faith communities in Fargo–Moorhead already run informal help networks. Help Me is a secular, independent app that covers a different gap: the moment when nobody in your network is nearby or awake. It is not a ministry, not affiliated with any congregation, and it does not coordinate organized outreach or volunteer programs.",
    takeaways: [
      "Independent and secular — no religious affiliation.",
      "Not a volunteer-management or outreach platform.",
      "Individual members use it as individuals, not as an organization.",
      "Organized programs need real coordination, not ad-hoc matching.",
    ],
    keywords: ["faith community Fargo", "church help network Moorhead", "congregation volunteers Fargo"],
    sections: [
      {
        heading: "Where the overlap is real",
        body: [
          "Both are answers to the same question: who is nearby and willing. A congregation knows its people and can commit to sustained care. An app knows who is within a few minutes right now. Those solve different halves of the same problem and neither replaces the other.",
        ],
      },
      {
        heading: "What Help Me cannot be for a congregation",
        body: [
          "It cannot manage a volunteer roster, schedule meal trains, run a benevolence fund, or coordinate a group project. It has no group accounts and no organizational tools. Individual members can use it individually — that is the whole extent of the fit.",
        ],
      },
    ],
    related: ["for-neighbors", "community", "for-nonprofits", "resources", "about", "questions/is-help-me-a-gig-app"],
    faqs: [
      {
        q: "Is Help Me a religious organization?",
        a: "No. It is a secular community app with no religious affiliation of any kind.",
      },
      {
        q: "Can we run our outreach through it?",
        a: "No. There are no organizational accounts or volunteer-management tools.",
      },
    ],
  }),

  page({
    slug: "for-nonprofits",
    kind: "audience",
    title: "Help Me and Fargo–Moorhead nonprofits",
    description:
      "How a neighbor help app relates to the nonprofits, shelters, and service organizations that do the structural work in Fargo–Moorhead. Different jobs, no overlap.",
    h1: "For the organizations doing the heavy version",
    eyebrow: "who it’s for",
    lead: "Everyday help is not social services, and pretending otherwise would be worse than useless.",
    answer:
      "Help Me is a neighbor-scale app for one-off, everyday, non-emergency help. It does not do case management, food and housing programs, crisis response, or volunteer coordination — the work Fargo–Moorhead nonprofits and county agencies actually do. It has no organizational accounts, and it routes anything structural to 211 and official services.",
    takeaways: [
      "No case management, intake, or ongoing support of any kind.",
      "No organizational accounts or volunteer-management features.",
      "211 is the referral backbone in both North Dakota and Minnesota.",
      "Resource pages here point at official services, not at the app.",
    ],
    keywords: ["Fargo nonprofits", "Moorhead social services", "211 referral Fargo"],
    sections: [
      {
        heading: "The line between a favor and a service",
        body: [
          "A jump start is a favor. Housing instability, food insecurity, addiction, and domestic violence are not problems a stranger with an app can hold, and treating them as such delays the real help. Every resource page on this site exists to send those situations to the organizations built for them.",
        ],
      },
      {
        heading: "What we ask of ourselves",
        body: [
          "Do not appear in results as an alternative to services people actually need. Do not collect need data we cannot act on. Do not describe helpers as trained responders, counselors, or caseworkers. They are neighbors whose identity a staff member reviewed, and that is the whole claim.",
        ],
      },
    ],
    related: ["resources", "resources/211-north-dakota", "resources/211-minnesota", "resources/homeless-services-fargo", "resources/food-assistance-fargo", "not-911"],
    faqs: [
      {
        q: "Can our organization post needs?",
        a: "No. There are no organizational accounts. Requests come from individuals for small, everyday help.",
      },
      {
        q: "Will Help Me refer people to us?",
        a: "The resource pages here point at official services and referral lines by name, on purpose.",
      },
    ],
  }),

  page({
    slug: "for-graduate-students",
    kind: "audience",
    title: "Help Me for graduate students in Fargo–Moorhead",
    description:
      "Long hours, late labs, thin social networks, and a metro you may not have chosen. How Help Me fits graduate life at NDSU and MSUM.",
    h1: "For people who moved here for one program",
    eyebrow: "who it’s for",
    lead: "You came for a lab, a cohort of six, and a schedule that does not overlap with anyone else’s.",
    answer:
      "Graduate students in Fargo–Moorhead often live here with a very small local network and a schedule that peaks at odd hours. Help Me covers the practical gaps — a walk from a late lab, a jump start, a hand moving in — without needing a friend group you have not built yet. It is not academic, immigration, or mental-health support.",
    takeaways: [
      "Late-night campus departures are the most common real need.",
      "Free, with no payment and no obligation to reciprocate.",
      "Campus counseling and advisors handle the heavy things.",
      "International grad students should also read the international page.",
    ],
    keywords: ["NDSU graduate students", "grad student Fargo", "MSUM graduate programs"],
    sections: [
      {
        heading: "The specific loneliness of it",
        body: [
          "Undergraduates arrive with a class of thousands. A graduate cohort might be six people who are also exhausted. The metro is welcoming and it is also a place where you can go a week without anyone noticing your schedule — which makes the small asks feel disproportionately large.",
        ],
      },
      {
        heading: "Practical, not therapeutic",
        body: [
          "Help Me is for the ten-minute problems: the lot at eleven, the battery, the couch. Advisor conflicts, funding stress, and burnout belong with your department, your campus counseling center, and 988 if it gets heavy. Those are not weaker options; they are the correct ones.",
        ],
      },
    ],
    related: ["for-students", "for-international-students", "seasons/finals-week", "help/safety-walk", "resources/mental-health-fargo", "campuses/ndsu"],
    faqs: [
      {
        q: "Can I get help with research or writing?",
        a: "Study company is fine. Actual academic support belongs with campus writing and tutoring centers.",
      },
      {
        q: "Is it awkward to ask?",
        a: "There is no audience. A request goes privately to a few approved people nearby, and it disappears when it is done.",
      },
    ],
  }),

  page({
    slug: "for-people-new-to-winter",
    kind: "audience",
    title: "Help Me for people facing their first Fargo winter",
    description:
      "If you have never lived through a North Dakota winter: what actually happens, what to own before October, and what a neighbor can help with when it goes wrong.",
    h1: "For anyone about to meet their first real winter",
    eyebrow: "who it’s for",
    lead: "Everyone tells you it is cold. Nobody explains that the cold has a plan.",
    answer:
      "A first Fargo–Moorhead winter surprises people with how fast it fails a car and how quickly exposure becomes serious. Get a real coat, a scraper, and a jump pack before October. When something does go wrong in a lot or a driveway, a neighbor with cables and ten minutes is exactly what Help Me is for.",
    takeaways: [
      "Buy the coat, boots, scraper, and jump pack before you need them.",
      "Subzero with wind chill is an exposure risk, not a complaint.",
      "Batteries fail on the coldest morning, all across the metro.",
      "Highway trouble is a tow and 911 situation, not a neighbor one.",
    ],
    keywords: ["first winter Fargo", "moving to North Dakota winter", "how cold is Fargo"],
    sections: [
      {
        heading: "What to own before it starts",
        body: [
          "A coat rated for actual cold, not a fashion coat. Boots with grip, because the danger is ice as much as temperature. A scraper with a brush in every car. Gloves you can drive in and warmer ones for standing outside. A jump pack, which is the single best forty dollars a new resident here can spend.",
        ],
        bullets: [
          "Insulated coat, hat, and real gloves",
          "Boots with traction for ice, not just snow",
          "Scraper and brush in every vehicle",
          "Portable jump pack and a blanket in the trunk",
        ],
      },
      {
        heading: "The rules nobody writes down",
        body: [
          "Plug-in block heaters exist here for a reason. Fuel above half in deep winter. Start the car before you clear it. Do not park where the plow will bury you. Tell someone your route if you are driving out of the metro. And when a stranger offers a jump in a lot, that is normal here rather than suspicious.",
        ],
      },
    ],
    related: ["seasons/winter-in-fargo-moorhead", "seasons/first-snow", "guides/winter-help-fargo", "help/jump-start", "help/winter-car-help", "for-newcomers"],
    faqs: [
      {
        q: "How cold does it actually get?",
        a: "Subzero stretches are routine in January and February, and wind chill makes it materially worse. Treat forecasts as instructions.",
      },
      {
        q: "Is it really that dangerous?",
        a: "It is manageable with the right gear and genuinely dangerous without it. That is the whole difference.",
      },
    ],
  }),
];
