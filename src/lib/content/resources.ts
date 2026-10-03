import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const RESOURCE_PAGES: SeoPage[] = [
  page({
    slug: "resources",
    kind: "hub",
    title: "Official help in Fargo–Moorhead",
    description:
      "Police, 911, 211, campus safety, food, shelter, and county services in Fargo, Moorhead, and West Fargo. Help Me is not these pages.",
    h1: "Official help, listed on purpose",
    eyebrow: "resources",
    lead: "If you are in danger, call 911. These pages exist so a neighbor app never becomes the place people look for an ambulance, a shelter bed, or a police officer.",
    priority: 0.85,
    keywords: ["Fargo resources", "Fargo-Moorhead emergency", "211 Fargo"],
    sections: [
      {
        heading: "Use this directory when the app is the wrong tool",
        body: [
          "Help Me is everyday, non-emergency community help. This hub is the other stack: city police, campus public safety, 211, county human services, food, shelter, and crisis lines. Read the page for the city or campus you are actually standing in.",
        ],
      },
      {
        heading: "Two states, two county systems",
        body: [
          "Fargo and West Fargo are Cass County, North Dakota. Moorhead and Dilworth are Clay County, Minnesota. 911 works on both sides of the Red River. Food assistance, housing, and many health programs do not copy-paste. If a page is labeled Cass or Clay, believe the label.",
        ],
        bullets: [
          "Emergency: 911 in ND and MN",
          "Information and referral: 211",
          "Mental-health crisis: 988",
          "Campus: NDSU, MSUM, Concordia public safety pages",
        ],
      },
      {
        heading: "How we chose what to publish",
        body: [
          "Numbers and URLs here are well-known public contacts we are confident in, or we tell you how to search the official name instead of guessing a phone number. Hours and eligibility change. Confirm on the agency’s own site before you drive across town.",
        ],
      },
    ],
    related: ["not-911", "resources/fargo-emergency", "resources/211-north-dakota", "ground-rules", "guides", "explore"],
    faqs: [
      {
        q: "Will Help Me dispatch police if I request help?",
        a: "No. Call 911 or campus police directly. These resource pages are the official path.",
      },
      {
        q: "Can I use a Fargo number from Moorhead?",
        a: "Not for city or county services. 911 works both sides. Everything else follows the city and county you are in.",
      },
    ],
  }),

  page({
    slug: "resources/fargo-emergency",
    kind: "resource",
    title: "Emergency help in Fargo–Moorhead",
    description:
      "Call 911 in Fargo, West Fargo, Moorhead, and Dilworth. Campus police and 211 are next. Help Me is not emergency response.",
    h1: "Emergencies: 911, then the right local desk",
    eyebrow: "emergency",
    lead: "If you are in danger, threatened, injured, or watching a crime, call 911. Do not wait on an app offer.",
    answer:
      "In Fargo, West Fargo, Moorhead, and Dilworth, call 911 for danger, injury, fire, or a crime in progress. 911 works on both sides of the Red River. For non-urgent police matters, the Red River Regional Dispatch Center publishes 701-451-7660. Help Me is not an emergency service and does not dispatch anyone.",
    takeaways: [
      "911 works in Fargo, West Fargo, Moorhead, and Dilworth.",
      "Stay on the line and give a location a dispatcher can use.",
      "Non-urgent police matters: the published regional dispatch line, 701-451-7660.",
      "Help Me does not dispatch emergency services.",
    ],
    priority: 0.9,
    keywords: ["Fargo 911", "Fargo emergency", "Moorhead emergency"],
    sections: [
      {
        heading: "Call 911",
        body: [
          "911 works in Fargo, West Fargo, and the rest of Cass County, North Dakota. 911 works in Moorhead, Dilworth, and the rest of Clay County, Minnesota. Stay on the line. Give a location a dispatcher can use — a building name, an intersection, a campus landmark.",
        ],
        bullets: [
          "Life-threatening medical emergency: 911",
          "Fire: 911",
          "Crime in progress or immediate threat: 911",
          "Unsure but scared: 911 anyway. Dispatch would rather sort it than lose time.",
        ],
      },
      {
        heading: "Campus emergencies",
        body: [
          "Call 911, and call campus public safety if you can do it without delaying the first call. NDSU University Police publishes 701-231-8998. MSUM Public Safety publishes 218-477-2449. Concordia Public Safety publishes 218-299-3123. Search those office names to confirm before you need them.",
        ],
      },
      {
        heading: "Not an emergency, still official",
        body: [
          "The Red River Regional Dispatch Center publishes a metro non-emergency number, 701-451-7660, used in Fargo, Moorhead, and West Fargo for situations that need an officer and are not urgent. City police pages and 211 sit beside that. Help Me sits much further down the list: jump starts, walks, directions — never dispatch.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is for the small stuff that follows an emergency: a phone charger, a hand with a car, company while you wait. It never comes before a call to 911.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["not-911", "resources/fargo-police", "resources/moorhead-police", "resources/west-fargo-police", "resources/ndsu-safety", "resources/211-north-dakota"],
    faqs: [
      {
        q: "Should I try Help Me first in an emergency?",
        a: "No. Call 911 first. Help Me does not dispatch emergency services.",
      },
      {
        q: "Does 911 work on both sides of the river?",
        a: "Yes. City and county services after that do not automatically match.",
      },
      {
        q: "What should I tell a 911 dispatcher?",
        a: "Say where you are first: a building name, an intersection, or a campus landmark. Then say what is happening, and stay on the line until they tell you to hang up.",
      },
    ],
  }),

  page({
    slug: "resources/cass-county-resources",
    kind: "resource",
    title: "Cass County, ND official resources",
    description:
      "Cass County Human Services, 911, 211, and North Dakota help for Fargo and West Fargo. Clay County programs do not copy-paste here.",
    h1: "Cass County resources (North Dakota)",
    eyebrow: "Cass County",
    lead: "Fargo and West Fargo live in Cass County. If you need a county office, this is the bank of the river to stand on.",
    answer:
      "Fargo and West Fargo are in Cass County, North Dakota. Cass County Human Services handles many basic-needs and family programs, and 211, answered locally by FirstLink, can point you to the right desk. Emergencies are 911. Clay County offices serve Moorhead and Dilworth, not Fargo.",
    takeaways: [
      "Fargo and West Fargo are in Cass County, North Dakota.",
      "Cass County Human Services covers many basic-needs programs.",
      "211 is answered locally by FirstLink.",
      "Office hours are weekday business hours. After hours, call 911 or 211.",
    ],
    priority: 0.7,
    keywords: ["Cass County resources", "Cass County Human Services", "Fargo county help"],
    geo: { name: "Cass County", type: "AdministrativeArea", state: "ND", county: "Cass County" },
    sections: [
      {
        heading: "Start with 911 or 211, then the county",
        body: [
          "Emergencies: 911. Information and referral: 211, answered locally by FirstLink (myfirstlink.org; 701-235-7335 if 211 does not connect). Cass County Human Services is the county office for many basic-needs and family programs.",
        ],
      },
      {
        heading: "Cass County Human Services",
        body: [
          "Published home: casscountynd.gov, Human Services. The Cass County Annex is at 1010 2nd Ave. S., Fargo. Main Human Services line published at 701-241-5747. Economic Assistance and Family Services have their own published lines on the county contact page — use those desks, not a neighbor in an app.",
        ],
        bullets: [
          "Economic Assistance (food, cash, related programs): published 701-241-5761 on casscountynd.gov",
          "Family Services: published 701-241-5765",
          "Child protection intake in North Dakota uses a statewide path — the county family-services page currently lists 1-833-958-3500; confirm on casscountynd.gov",
          "Office hours are weekday business hours, not 24/7. After hours, 911 or 211.",
        ],
      },
      {
        heading: "What Cass County is not",
        body: [
          "It is not Clay County Social Services. It is not Moorhead city hall. It is not Help Me. If you live in Dilworth or Moorhead, open the Clay County page.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is not a county office or a caseworker. A neighbor might point you to the right building, but enrollment and benefits belong to the county.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/clay-county-resources", "resources/211-north-dakota", "resources/fargo-police", "resources/west-fargo-police", "resources/food-assistance-fargo", "cities/fargo"],
    faqs: [
      {
        q: "I live in West Fargo. Is that Cass County?",
        a: "Yes. West Fargo is Cass County, North Dakota. Use Cass County Human Services and West Fargo Police, not Moorhead offices.",
      },
      {
        q: "Can Help Me enroll me in county benefits?",
        a: "No. Call the county or 211. Helpers are neighbors, not caseworkers.",
      },
      {
        q: "What is the difference between Cass and Clay County?",
        a: "Cass County is in North Dakota and includes Fargo and West Fargo. Clay County is in Minnesota and includes Moorhead and Dilworth. Their offices and benefits are separate, so use the county where you live.",
      },
    ],
  }),

  page({
    slug: "resources/clay-county-resources",
    kind: "resource",
    title: "Clay County, MN official resources",
    description:
      "Clay County Social Services in Moorhead: food support, health coverage, child protection, and crisis numbers. Cass County offices do not serve this side.",
    h1: "Clay County resources (Minnesota)",
    eyebrow: "Clay County",
    lead: "Moorhead and Dilworth are Minnesota. The river is pretty. It is also a border for almost every benefit that is not 911.",
    answer:
      "Moorhead and Dilworth are in Clay County, Minnesota. Clay County Social Services administers food support, medical assistance, child and adult protection, and related programs, and the county publishes crisis numbers on its site. Cass County offices serve Fargo, not this side of the river. Emergencies are 911.",
    takeaways: [
      "Moorhead and Dilworth are in Clay County, Minnesota.",
      "Clay County Social Services runs food support and medical assistance.",
      "Crisis lines are published on claycountymn.gov. Confirm them there.",
      "Do not use a Cass County number for a Moorhead case.",
    ],
    priority: 0.7,
    keywords: ["Clay County resources", "Clay County Social Services", "Moorhead county help"],
    geo: { name: "Clay County", type: "AdministrativeArea", state: "MN", county: "Clay County" },
    sections: [
      {
        heading: "Minnesota county, Minnesota programs",
        body: [
          "Clay County Social Services administers food support, medical assistance, child and adult protection, child care, and related programs. Published site: claycountymn.gov (Social Services). Office: 715 11th St. N., Suite 502, Moorhead. Published phones: 218-299-5200 and 800-757-3880. Confirm hours on the county site — weekday business hours, not a crisis dispatch.",
        ],
      },
      {
        heading: "Crisis numbers Clay County itself publishes",
        body: [
          "The county’s social-services page lists a 24-hour mobile mental-health crisis line at 1-800-223-4512, 211 / 701-235-7335, 988, and the Crisis Text Line (text MN to 741741). Confirm on claycountymn.gov because crisis contractors can change. Imminent danger remains 911.",
        ],
        bullets: [
          "Emergency: 911",
          "County office: claycountymn.gov — search Social Services",
          "211: FirstLink serves Clay County for 211; United Way 211 covers Minnesota more broadly at 211unitedway.org",
          "Do not paste a Cass County Human Services number onto a Moorhead case",
        ],
      },
      {
        heading: "Campuses in this county",
        body: [
          "MSUM, Concordia, and M State’s Moorhead campus sit here. Their public-safety pages are the on-campus path. The county is the benefits path. Help Me is neither.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is not a county office. A neighbor can help with a small favor, and the county is the path for benefits and protection services.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/cass-county-resources", "resources/211-minnesota", "resources/moorhead-police", "resources/msum-safety", "cities/moorhead", "resources/mental-health-fargo"],
    faqs: [
      {
        q: "I go to MSUM and live in Fargo. Which county?",
        a: "Benefits usually follow where you live, not where you attend class. Ask the county you live in, or call 211 and say both addresses.",
      },
      {
        q: "Is FirstLink only for North Dakota?",
        a: "FirstLink answers 211 for North Dakota and for Clay County, Minnesota. Still use Clay County offices for Minnesota programs.",
      },
      {
        q: "What is the difference between Clay and Cass County?",
        a: "Clay County is in Minnesota and includes Moorhead and Dilworth. Cass County is in North Dakota and includes Fargo and West Fargo. Use the county where you live.",
      },
    ],
  }),

  page({
    slug: "resources/ndsu-safety",
    kind: "resource",
    title: "NDSU Police and campus safety",
    description:
      "NDSU University Police: 911 for emergencies, 701-231-8998 for campus police and escorts. Help Me is not campus security.",
    h1: "NDSU Police and Safety — official campus help",
    eyebrow: "NDSU",
    lead: "If it is happening on NDSU ground and you need an officer, you want University Police, not a neighbor from an app.",
    answer:
      "NDSU University Police and Safety is the official campus public safety office. Call 911 for an emergency. NDSU publishes 701-231-8998 as a 24-hour line for campus police, reports, and safety escorts. Help Me is not campus security and does not replace these services.",
    takeaways: [
      "Emergency: 911. Campus police line: 701-231-8998.",
      "Safety escorts go through campus police, not an app.",
      "Fargo Police cover the city off campus.",
      "Confirm numbers on the NDSU site before you need them.",
    ],
    priority: 0.72,
    keywords: ["NDSU Police", "NDSU safety escort", "NDSU campus safety"],
    geo: { name: "North Dakota State University", type: "Campus", city: "Fargo", state: "ND" },
    sections: [
      {
        heading: "Call these",
        body: [
          "Life-threatening emergency: 911. NDSU University Police and Safety publishes a 24/7 line at 701-231-8998 and a contact page at ndsu.edu/police_safety. Search NDSU Police to confirm. Text-a-Tip is published at 701-526-6006.",
        ],
        bullets: [
          "Safety escort: call 701-231-8998 and ask. NDSU describes escorts to campus facilities and adjacent locations.",
          "Report crimes and public-safety incidents to the University Police communications center at that same number.",
          "The Safety Office is a separate weekday office (published 701-231-7759) for non-dispatch safety programs.",
          "Fargo Police still exist off campus. NDSU Police will involve them when that is the right city desk.",
        ],
      },
      {
        heading: "What NDSU Police is for",
        body: [
          "Law enforcement on campus, emergency response, escorts, and official reporting. That is a public agency. Help Me will not pretend to be on their radio.",
        ],
      },
      {
        heading: "What to use Help Me for instead",
        body: [
          "A jump in a public lot when you want a neighbor, not a police call. Directions. A study table. Official NDSU events in the app still link back to MyNDSU. Safety stays with the badge.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is for smaller things, like directions or a jump in a lot. The badge handles safety.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/fargo-emergency", "resources/student-health-ndsu", "guides/new-to-ndsu", "resources/fargo-police", "not-911"],
    faqs: [
      {
        q: "Can Help Me send NDSU Police?",
        a: "No. Call 911 or 701-231-8998.",
      },
      {
        q: "Is the escort the same as a Help Me walk?",
        a: "No. The escort is official campus safety. Help Me is a neighbor. Use the official one when you want an officer.",
      },
      {
        q: "Does NDSU Police come off campus?",
        a: "They serve NDSU property and work with Fargo Police when an incident involves the city. Off campus, Fargo Police are the city desk.",
      },
    ],
  }),

  page({
    slug: "resources/msum-safety",
    kind: "resource",
    title: "MSUM Public Safety",
    description:
      "MSUM Public Safety: 218-477-2449, 24/7 escorts, on-campus jump starts, and vehicle unlocks. Call 911 in an emergency. Not Help Me.",
    h1: "MSUM Public Safety — official campus help",
    eyebrow: "MSUM",
    lead: "Minnesota State University Moorhead staffs Public Safety so you do not have to invent a night walk out of a group chat.",
    answer:
      "MSUM Public Safety is the official campus office at Minnesota State University Moorhead, published at 218-477-2449 and staffed around the clock. It offers escorts, on-campus jump starts, and vehicle unlocks within a short radius. Call 911 for emergencies. Help Me is not campus security.",
    takeaways: [
      "Public Safety: 218-477-2449. Emergency: 911.",
      "Escorts and jump starts are published campus services.",
      "Moorhead Police cover the city around campus.",
      "Confirm services on mnstate.edu.",
    ],
    priority: 0.7,
    keywords: ["MSUM Public Safety", "MSUM escort", "MSUM jump start"],
    geo: { name: "Minnesota State University Moorhead", type: "Campus", city: "Moorhead", state: "MN" },
    sections: [
      {
        heading: "Published contacts",
        body: [
          "Public Safety phone, 24/7: 218-477-2449. Email published as dispatch@mnstate.edu. Office: 1616 9th Avenue South, Moorhead. Confirm on mnstate.edu (search Public Safety). Emergency: 911.",
        ],
        bullets: [
          "Safety escorts 24/7, described by MSUM as on campus and about a two-block radius.",
          "Free on-campus jump starts in that same radius.",
          "Vehicle unlocks as a published campus service.",
          "Moorhead Police for the city around campus — general information 218-299-5120, emergency 911.",
        ],
      },
      {
        heading: "Title IX and interpersonal violence",
        body: [
          "MSUM publishes a Title IX / Dean of Students path and points to 911 or Public Safety in an emergency. For advocacy off campus, Sollera (formerly Rape and Abuse Crisis Center) serves this metro. Help Me is not a confidential reporter and not an advocate.",
        ],
      },
      {
        heading: "Neighbor help is a different door",
        body: [
          "If Public Safety will jump the car on campus, call them. If you are in a public Fargo lot, a helper may be the neighbor tool. Do not mix the two in your head when you are scared — official first.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is for a neighbor's help in a public lot or a hallway. For official campus services, call Public Safety.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/moorhead-police", "resources/concordia-safety", "guides/new-to-msum", "resources/domestic-violence-fargo", "not-911"],
    faqs: [
      {
        q: "Will MSUM Public Safety come off campus?",
        a: "They describe a short radius around campus for escorts and jumps. Read the current services page. City police cover the rest of Moorhead.",
      },
      {
        q: "Is Help Me affiliated with MSUM Police?",
        a: "No. We ingest the official MSUM calendar. We are not campus public safety.",
      },
      {
        q: "What does MSUM Public Safety do besides emergencies?",
        a: "The office publishes escorts, on-campus jump starts, and vehicle unlocks within a short radius of campus. Read the current services page for the details.",
      },
    ],
  }),

  page({
    slug: "resources/concordia-safety",
    kind: "resource",
    title: "Concordia College Public Safety",
    description:
      "Concordia Public Safety and SAFEWalk: 218-299-3123, 24/7. Call 911 for emergencies in Moorhead. Help Me is not campus security.",
    h1: "Concordia Public Safety — official campus help",
    eyebrow: "Concordia",
    lead: "A small campus still needs an official number. Concordia publishes one. Use it.",
    answer:
      "Concordia College Public Safety is published at 218-299-3123 and runs SAFEWalk through the same number. Public Safety is staffed around the clock, and 911 reaches Moorhead emergency dispatch. The office is described at Knutson Campus Center. Help Me is not campus security.",
    takeaways: [
      "Public Safety and SAFEWalk: 218-299-3123.",
      "Emergency: 911, which reaches Moorhead dispatch.",
      "The Public Safety office is at Knutson Campus Center.",
      "Confirm details on concordiacollege.edu.",
    ],
    priority: 0.68,
    keywords: ["Concordia Public Safety", "Concordia SAFEWalk", "Concordia College safety"],
    geo: { name: "Concordia College", type: "Campus", city: "Moorhead", state: "MN" },
    sections: [
      {
        heading: "Published contacts",
        body: [
          "Campus Public Safety: 218-299-3123, 24/7. SAFEWalk uses the same number. From a campus phone, Concordia documents 3123 for Public Safety and 9-911 for emergency dispatch. From a cell: 911 and 218-299-3123. Confirm at concordiacollege.edu (search Public Safety or Emergency).",
        ],
        bullets: [
          "Public Safety Office is described at Knutson Campus Center.",
          "Escort services: call Public Safety.",
          "Moorhead Police: 911 for emergency. Do not assume a Fargo desk.",
          "Counseling Center is a separate campus office — search Concordia Counseling; crisis after hours is 988 or 911.",
        ],
      },
      {
        heading: "If you need more than a walk",
        body: [
          "Interpersonal violence: 911, Public Safety, and Sollera (formerly Rape and Abuse Crisis Center). Concordia’s Title IX / Get Help Now page is the official campus path. A Help Me chat is the wrong container.",
        ],
      },
      {
        heading: "Neighbor help, clearly smaller",
        body: [
          "Directions, a study table, a jump in a public lot — that is Help Me. SAFEWalk and Public Safety remain the official night tools on this campus.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is for small favors between neighbors, like directions or a charger. SAFEWalk and Public Safety remain the official tools on this campus.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/msum-safety", "resources/moorhead-police", "guides/new-to-concordia", "resources/domestic-violence-fargo", "not-911"],
    faqs: [
      {
        q: "Is SAFEWalk a Help Me feature?",
        a: "No. SAFEWalk is Concordia Public Safety. Call 218-299-3123.",
      },
      {
        q: "Does Concordia sit in Fargo?",
        a: "No. Moorhead, Minnesota. Clay County. Moorhead Police and campus public safety.",
      },
      {
        q: "How do I use SAFEWalk?",
        a: "Call Public Safety at the published number and ask for a SAFEWalk. It is the official campus walking service.",
      },
    ],
  }),

  page({
    slug: "resources/fargo-police",
    kind: "resource",
    title: "Fargo Police Department",
    description:
      "Fargo Police: 911 for emergencies, 701-451-7660 metro non-emergency. Official site fargond.gov. Help Me does not dispatch officers.",
    h1: "Fargo Police — official city law enforcement",
    eyebrow: "Fargo",
    lead: "If you need an officer in Fargo, you want Fargo Police. Not a helper. Not a Facebook flag.",
    answer:
      "Fargo Police is the official law enforcement agency for Fargo. Call 911 for emergencies. The department's public site is fargond.gov, and the regional dispatch center publishes 701-451-7660 for non-emergency calls. Fargo Police do not serve West Fargo or Moorhead. Help Me does not dispatch officers.",
    takeaways: [
      "Emergency: 911. Non-emergency: published on fargond.gov.",
      "Online reporting exists for some non-urgent incidents.",
      "Fargo Police serve Fargo only.",
      "Help Me cannot take a report or send an officer.",
    ],
    priority: 0.74,
    keywords: ["Fargo Police", "Fargo non-emergency", "Fargo PD"],
    geo: { name: "Fargo", type: "City", city: "Fargo", state: "ND", county: "Cass County" },
    sections: [
      {
        heading: "How to reach Fargo Police",
        body: [
          "Emergency: 911. The Fargo Police Department’s public home is fargond.gov (Police). Fargo Police and the City of Moorhead both publish the Red River Regional Dispatch Center non-emergency number 701-451-7660 for situations that need a response and are not urgent. The city also still publishes 701-235-4493 on some police contact pages — if the two differ on a given day, trust the contact page you are looking at on fargond.gov, or call 911 if you are unsure and it feels urgent.",
        ],
        bullets: [
          "Online reporting for some non-urgent incidents exists on the city police site when there is no known suspect and it happened in Fargo.",
          "Tip411: Fargo Police has published texting FARGOPD plus your tip to 847411. Tips are not a substitute for 911.",
          "Fargo Police serve Fargo, not West Fargo and not Moorhead.",
        ],
      },
      {
        heading: "What to call them for",
        body: [
          "Crime, threats, crashes with injury (911), activity that worries you and that you want an officer to handle, official reports. Delayed reports, noise, and parking issues are the usual non-emergency examples they give — still official, still not an app request.",
        ],
      },
      {
        heading: "What not to send to a helper",
        body: [
          "Anything that belongs in a police report. Help Me cannot take a statement, recover stolen property, or stand in for an officer on Broadway.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is not part of any police process. A neighbor can help with a dead battery, and an officer is for a crime.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/fargo-emergency", "resources/west-fargo-police", "resources/moorhead-police", "resources/ndsu-safety", "guides/downtown-fargo-at-night", "not-911"],
    faqs: [
      {
        q: "Is the non-emergency number the same in Moorhead?",
        a: "The regional dispatch non-emergency 701-451-7660 is published by both Fargo Police and Moorhead Police. City offices and records still differ. Use the city you are in.",
      },
      {
        q: "Can I file a police report in Help Me?",
        a: "No. Use 911, dispatch, or Fargo’s official online reporting for eligible incidents.",
      },
      {
        q: "Can I file a report online?",
        a: "The city publishes online reporting for some non-urgent incidents. Read the current rules on fargond.gov, and call 911 for anything urgent.",
      },
    ],
  }),

  page({
    slug: "resources/moorhead-police",
    kind: "resource",
    title: "Moorhead Police Department",
    description:
      "Moorhead Police: 911 for emergencies, 701-451-7660 non-emergency dispatch, 218-299-5120 general information. Official site moorheadmn.gov.",
    h1: "Moorhead Police — official Minnesota-side law enforcement",
    eyebrow: "Moorhead",
    lead: "Moorhead is a city with a police department. Crossing the river for dinner does not move your 911 call, but it does change which records desk you use tomorrow.",
    answer:
      "Moorhead Police is the official law enforcement agency for Moorhead, Minnesota. Call 911 for emergencies. The city publishes 218-299-5120 for general information and lists the regional dispatch non-emergency line on moorheadmn.gov. Moorhead Police are separate from Fargo Police. Help Me is not a reporting system.",
    takeaways: [
      "Emergency: 911. General information: 218-299-5120.",
      "Anonymous tips and some online reports are published on the city site.",
      "Campus public safety is not a replacement off campus.",
      "File an incident with the city where it happened.",
    ],
    priority: 0.72,
    keywords: ["Moorhead Police", "Moorhead PD", "Moorhead non-emergency"],
    geo: { name: "Moorhead", type: "City", city: "Moorhead", state: "MN", county: "Clay County" },
    sections: [
      {
        heading: "Published contacts",
        body: [
          "Emergency: 911. Non-emergency dispatch: 701-451-7660 (Red River Regional Dispatch Center), listed on moorheadmn.gov. General information / department: 218-299-5120. Address published as 911 11th Street North, Moorhead. Confirm on the city Police page.",
        ],
        bullets: [
          "Online reports: Moorhead publishes an online path for some theft and damage reports under a dollar threshold — read the current rules on the city site. Stolen vehicles are not an online form.",
          "Anonymous tips: the city documents tip411 with the keyword TIPMOORHEAD to 847411, plus an online form. Not for emergencies.",
          "MSUM and Concordia public safety are campus, not a replacement for city police off campus.",
        ],
      },
      {
        heading: "Minnesota city, Minnesota follow-up",
        body: [
          "If the incident happened in Moorhead, do not file it with Fargo Police. Clay County is the county layer. Help Me is not a reporting system on either side.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is for small favors, not reports. For anything that belongs in a police record, use Moorhead Police.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/fargo-police", "resources/msum-safety", "resources/concordia-safety", "resources/clay-county-resources", "resources/fargo-emergency", "cities/moorhead"],
    faqs: [
      {
        q: "I am an NDSU student in Moorhead. Who do I call?",
        a: "911 for emergency. Moorhead Police or the campus public safety for the campus you are standing on. NDSU Police do not automatically cover Moorhead streets.",
      },
      {
        q: "Is Help Me a Moorhead Police partner?",
        a: "No. This page exists so you call the official department.",
      },
      {
        q: "Where do I report something that happened in Moorhead?",
        a: "With Moorhead Police, not Fargo Police. Use 911 for urgent matters and the city's published non-emergency options for the rest.",
      },
    ],
  }),

  page({
    slug: "resources/west-fargo-police",
    kind: "resource",
    title: "West Fargo Police Department",
    description:
      "West Fargo Police: 911 for emergencies, 701-515-5500 department line. Official site westfargond.gov. Not Fargo Police and not Help Me.",
    h1: "West Fargo Police — official city law enforcement",
    eyebrow: "West Fargo",
    lead: "West Fargo has its own officers, its own lobby, and its own website. Use them.",
    answer:
      "West Fargo Police is the official law enforcement agency for West Fargo. Call 911 for emergencies. The department publishes 701-515-5500 on westfargond.gov, and the regional dispatch center handles some non-urgent calls. West Fargo Police are separate from Fargo Police, and Help Me does not dispatch officers.",
    takeaways: [
      "Emergency: 911. Department line: published on westfargond.gov.",
      "West Fargo has its own police and its own lobby.",
      "Cass County covers county human services.",
      "Confirm numbers on the city site.",
    ],
    priority: 0.7,
    keywords: ["West Fargo Police", "West Fargo PD", "West Fargo non-emergency"],
    geo: { name: "West Fargo", type: "City", city: "West Fargo", state: "ND", county: "Cass County" },
    sections: [
      {
        heading: "Published contacts",
        body: [
          "Emergency: 911. West Fargo Police Department line published at 701-515-5500 on westfargond.gov. Address published as 800 Fourth Ave. E., Suite 2, West Fargo. Lobby hours are weekday business hours; patrol is 24/7. Confirm on the city site.",
        ],
        bullets: [
          "Metro non-emergency dispatch 701-451-7660 is used across Fargo–Moorhead–West Fargo for some non-urgent police response — West Fargo has pointed the public there for scam reports and similar. Confirm if you are unsure.",
          "Code enforcement is a different desk on the same campus of buildings. It is not 911.",
          "Cass County still covers county human services. City police are West Fargo Police, not Fargo PD.",
        ],
      },
      {
        heading: "When a neighbor is the wrong tool",
        body: [
          "Threats, break-ins, domestic violence, a crash, a missing person — official. A dead battery in a Veterans Boulevard lot can be a helper. Do not split the difference in a crisis.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is not a police partner. A neighbor can help with a small favor, and officers handle crime, crashes, and threats.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["guides/west-fargo-community-help", "resources/fargo-police", "resources/cass-county-resources", "cities/west-fargo", "resources/fargo-emergency", "not-911"],
    faqs: [
      {
        q: "Can I call Fargo Police from Sheyenne Street?",
        a: "Call 911 and they will route it. For a non-emergency city desk, use West Fargo Police.",
      },
      {
        q: "Does Help Me work with West Fargo Police?",
        a: "No. We ingest the official West Fargo community calendar. We do not dispatch officers.",
      },
      {
        q: "Which police do I call in West Fargo?",
        a: "West Fargo Police. 911 works everywhere, and it will route your call to the right department.",
      },
    ],
  }),

  page({
    slug: "resources/matbus",
    kind: "resource",
    title: "MATBUS Fargo–Moorhead transit",
    description:
      "MATBUS is the official bus in Fargo, West Fargo, Moorhead, and Dilworth. Routes, fares, and hours live on matbus.com — not in a Help Me chat.",
    h1: "MATBUS — official metro transit",
    eyebrow: "transit",
    lead: "A helper is not a bus. When the car is a brick, the official map is matbus.com.",
    answer:
      "MATBUS is the public transit system for Fargo, West Fargo, Moorhead, and Dilworth. Routes, fares, and hours are published at matbus.com, including a trip planner and real-time tracking. Service changes by season, so check the official source before you travel. Help Me does not arrange transportation.",
    takeaways: [
      "MATBUS serves both sides of the river.",
      "The Ground Transportation Center is the main transfer hub.",
      "Fixed-route service is described as Monday through Saturday.",
      "Check matbus.com for current routes, fares, and hours.",
    ],
    priority: 0.6,
    keywords: ["MATBUS", "Fargo bus", "Moorhead bus"],
    sections: [
      {
        heading: "What MATBUS is",
        body: [
          "MATBUS is the public transit system for Fargo and West Fargo, North Dakota, and Moorhead and Dilworth, Minnesota. Official site: matbus.com. They publish fixed routes, a trip planner, real-time tracking, paratransit, and on-demand service. Hours and fares change — read them there.",
        ],
        bullets: [
          "Ground Transportation Center (GTC): 502 NP Avenue, Fargo — main transfer hub.",
          "Service is described as Monday through Saturday for fixed routes. Do not assume a Sunday night bus.",
          "Student and youth pass rules (including U-Pass) are published by MATBUS. Confirm eligibility on their site.",
          "Park-and-go locations are listed by MATBUS, including a Moorhead Center Mall reference.",
        ],
      },
      {
        heading: "How this relates to Help Me",
        body: [
          "Ask a neighbor for a jump. Take the bus when you need transit. Help Me does not arrange transportation, and a neighbor is not a driver.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "A neighbor can answer a quick question about a stop or a route, but MATBUS is the official source for service.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["guides/winter-help-fargo", "cities/fargo", "cities/moorhead", "guides/how-to-use-matbus", "help/transit-help", "for-people-without-a-car"],
    faqs: [
      {
        q: "Can a helper drive me across town?",
        a: "Help Me does not arrange transportation. Use MATBUS or another official option.",
      },
      {
        q: "Does Help Me show live buses?",
        a: "No. Use matbus.com and their tracking tools.",
      },
      {
        q: "Where can I see live bus locations?",
        a: "On matbus.com, which publishes a trip planner and real-time tracking. Help Me does not show buses.",
      },
    ],
  }),

  page({
    slug: "resources/fargo-public-library",
    kind: "resource",
    title: "Fargo Public Library",
    description:
      "Fargo Public Library: Main, Dr. James Carlson, and Northport. Cards, hours, and parking on fargond.gov. A public indoor place — and not a crisis service.",
    h1: "Fargo Public Library — official public indoor ground",
    eyebrow: "library",
    lead: "Three buildings, computers, heat, and a meeting place you can name without dropping a home pin.",
    answer:
      "Fargo Public Library has three locations: the Main Library downtown at 101 4th St. N., the Dr. James Carlson Library in south Fargo, and the Northport Library on North Broadway. Hours differ by building and change, so check fargond.gov. A staffed library is a good public place to meet.",
    takeaways: [
      "Three branches: Main, Dr. James Carlson, and Northport.",
      "Hours differ by building. Check fargond.gov.",
      "Downtown library parking is described as free for patrons.",
      "A library is not a shelter and not a crisis service.",
    ],
    priority: 0.58,
    keywords: ["Fargo Public Library", "Fargo library hours", "downtown Fargo library"],
    geo: { name: "Fargo", type: "City", city: "Fargo", state: "ND" },
    sections: [
      {
        heading: "Locations",
        body: [
          "The City of Fargo publishes three Fargo Public Library locations on fargond.gov: Main Library at 101 4th St. North (downtown), Dr. James Carlson Library at 2801 32nd Ave. South, and Northport Library at 2714 N. Broadway. Circulation questions are published at 701-241-1472. Hours change and differ by building — read the city’s Hours, Locations & Parking page before you go. All three have been closed Sundays in recent city postings; do not assume Sunday hours.",
        ],
        bullets: [
          "Downtown parking: the city describes free patron parking in Civic Center / library lots east and west of Main.",
          "Cards, fines, and digital loans are library rules, not Help Me features.",
          "Moorhead has a separate public library system. Do not mix the catalogs.",
        ],
      },
      {
        heading: "As a meeting place",
        body: [
          "A staffed library is public, indoor, and easy to leave. Fine for a Help Me meet during open hours. Not a shelter, not a police department, not open because you wished it were.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "A library is one of the best public places to meet someone, during open hours. After closing, pick another place.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["lists/public-meeting-places-fargo", "lists/study-spots-fargo", "guides/meet-in-public-fargo", "cities/fargo", "lists/free-community-help-fargo", "resources/matbus"],
    faqs: [
      {
        q: "Can I meet a helper at the library after close?",
        a: "No. Meet during open hours, or pick another public place that is actually open.",
      },
      {
        q: "Is the library a winter shelter?",
        a: "No. It is a library. For shelter, call 211 and see the winter-shelter page.",
      },
      {
        q: "Which Fargo library is open latest?",
        a: "Hours differ by building and by season. Check the city's hours and locations page before you go.",
      },
    ],
  }),

  page({
    slug: "resources/homeless-services-fargo",
    kind: "resource",
    title: "Homeless services in Fargo–Moorhead",
    description:
      "Official shelter and housing help in Fargo–Moorhead: 211, Churches United, New Life Center, Gladys Ray, YWCA. Help Me is not a shelter.",
    h1: "Homeless services — call official programs, not a neighbor app",
    eyebrow: "housing",
    lead: "If you need a bed tonight, this page is the direction. Help Me cannot house you, and a helper cannot be a shelter.",
    answer:
      "If you need shelter in Fargo-Moorhead, call 211 first. FirstLink answers 211 locally and can route you to Churches United, New Life Center, the Gladys Ray Shelter, or the YWCA depending on who you are and what is open. Capacity changes nightly. Help Me is not a shelter.",
    takeaways: [
      "Call 211 first. Capacity and hours change.",
      "Several established shelters serve different groups.",
      "In dangerous cold or an emergency, call 911.",
      "Help Me cannot house anyone.",
    ],
    priority: 0.7,
    keywords: ["Fargo homeless shelter", "Moorhead shelter", "Fargo housing help"],
    sections: [
      {
        heading: "Start with 211",
        body: [
          "Beds, hours, and eligibility change with the night. Dial 211. In this metro, FirstLink answers 211 for North Dakota and Clay County (myfirstlink.org; 701-235-7335). Tell them where you are standing and whether anyone with you is a child, a woman fleeing violence, a man 18+, or a veteran. They will route, not lecture.",
        ],
      },
      {
        heading: "Known local programs (confirm before you go)",
        body: [
          "These organizations are real and public. Capacity is not a promise we can make on a webpage.",
        ],
        bullets: [
          "Churches United — Micah’s Mission emergency shelter, 1901 1st Ave. N., Moorhead. churches-united.org. Published main line 218-656-7495. Serves men, women, and families as they describe it.",
          "New Life Center — 1902 3rd Ave. N., Fargo. fargonlc.org. 701-235-4453. Emergency shelter described for men 18 and over; meals described as open to the public at listed times.",
          "Gladys Ray Shelter — Fargo Cass Public Health / City of Fargo, 1519 1st Ave. S. Search Gladys Ray Shelter on fargond.gov. Published 701-476-4145. Low-barrier adult shelter; hours are set by the city and can change.",
          "YWCA Cass Clay emergency shelter — women and children, including people fleeing violence. 701-232-3449, ywcacassclay.org. 24/7 published line.",
        ],
      },
      {
        heading: "What Help Me is not",
        body: [
          "Not intake. Not a waitlist. Not a place to send someone to “see if a helper has a couch.” If you are trying to help a person who is unhoused, walk with them to 211 or to one of these doors. Do not make them a request on a map.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "If you want to help someone who is unhoused, walk them to 211 or one of these programs. The app is not the place to arrange a bed.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/winter-shelters-fargo", "resources/food-assistance-fargo", "resources/domestic-violence-fargo", "resources/211-north-dakota", "resources/211-minnesota", "not-911"],
    faqs: [
      {
        q: "Can I request housing on Help Me?",
        a: "No. Call 211 or the official shelters on this page.",
      },
      {
        q: "Should I send a helper to check on someone sleeping outside?",
        a: "If they appear in medical danger, 911. Otherwise 211 or an outreach/shelter program. Do not deputize a stranger from an app.",
      },
      {
        q: "What if shelters are full?",
        a: "211 can tell you what else is open that night. In dangerous cold or a medical emergency, call 911.",
      },
    ],
  }),

  page({
    slug: "resources/food-assistance-fargo",
    kind: "resource",
    title: "Food assistance in Fargo–Moorhead",
    description:
      "Food help in Fargo–Moorhead: 211, SNAP through your county, Great Plains Food Bank, pantries, and meal sites. Help Me is not a food program.",
    h1: "Food assistance — official pantries and benefits, not an app request",
    eyebrow: "food",
    lead: "Hungry is a county and a pantry problem. It is not a category a neighbor should have to solve out of their trunk.",
    answer:
      "Food help in Fargo-Moorhead comes from county benefits like SNAP, where the county you live in matters, and from pantries and meal sites supplied by the Great Plains Food Bank. 211 can tell you which door fits and what is open. Help Me is not a food program.",
    takeaways: [
      "Benefits follow the county you live in: Cass in ND, Clay in MN.",
      "Pantry hours change. Use the food bank list or 211.",
      "Meal sites publish their own times.",
      "Help Me is not a food program.",
    ],
    priority: 0.66,
    keywords: ["Fargo food pantry", "food assistance Fargo", "Great Plains Food Bank"],
    sections: [
      {
        heading: "Benefits follow the county you live in",
        body: [
          "SNAP and related food support: Cass County Economic Assistance in North Dakota (casscountynd.gov, published 701-241-5761) or Clay County Social Services in Minnesota (claycountymn.gov, 218-299-5200). 211 can tell you which door. Do not apply in the wrong state because the grocery store was across the bridge.",
        ],
      },
      {
        heading: "Emergency food on the ground",
        body: [
          "Great Plains Food Bank (greatplainsfoodbank.org, 701-232-6219) supplies pantries and publishes a Fargo–Moorhead pantry list. Hours move. Use their list or 211 rather than a screenshot from last year.",
        ],
        bullets: [
          "Emergency Food Pantry — 1101 4th Ave. N., Fargo, published 701-237-9337. Call; hours are limited weekday windows.",
          "Dorothy Day Food Pantry (Churches United) — Moorhead, with a West Fargo pantry as well. churches-united.org or 218-656-7495 for current sites.",
          "Salvation Army Fargo meal site — 304 Roberts St., published 701-232-5565; meal times on Great Plains listings.",
          "New Life Center meals — 1902 3rd Ave. N., Fargo; public meal times on fargonlc.org.",
          "Campus food closets exist at some schools — search NDSU, MSUM, or Concordia food pantry / basic needs.",
        ],
      },
      {
        heading: "Help Me is the wrong pantry",
        body: [
          "Do not post a food-insecurity request and hope a stranger brings groceries. Send people here. If you want to help, donate through these programs, not through an unvetted handoff in a lot.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "If you want to help, donate to these programs. A first-time handoff in a parking lot is not a good substitute.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/cass-county-resources", "resources/clay-county-resources", "resources/homeless-services-fargo", "resources/211-north-dakota", "lists/free-community-help-fargo", "resources/211-minnesota"],
    faqs: [
      {
        q: "Can a helper drop off groceries?",
        a: "Help Me is not a food program. Use pantries and county SNAP. Informal grocery drops belong with people you already know, not a first-time match.",
      },
      {
        q: "I go to school in Moorhead and live in Fargo. Where do I apply?",
        a: "Usually where you live. Call 211 with both facts if you are unsure.",
      },
      {
        q: "Where is the nearest pantry?",
        a: "Use the Great Plains Food Bank pantry list or call 211 for current locations and hours.",
      },
    ],
  }),

  page({
    slug: "resources/mental-health-fargo",
    kind: "resource",
    title: "Mental health help in Fargo–Moorhead",
    description:
      "Mental-health crisis in Fargo–Moorhead: 988, 911 if in danger, FirstLink, campus counseling. Help Me is not a crisis line or a therapist.",
    h1: "Mental health help — official crisis lines, not a neighbor chat",
    eyebrow: "crisis",
    lead: "If you are in danger of hurting yourself or someone else, call 988 or 911. Stay with official, confidential help. This app is the wrong room.",
    answer:
      "For a mental health crisis in Fargo-Moorhead, call or text 988, or call 911 if there is immediate danger. FirstLink answers 988 for North Dakota, and Clay County publishes its own crisis lines. Campus counseling centers serve enrolled students. Help Me is not a crisis line or a therapist.",
    takeaways: [
      "Call or text 988. Call 911 for immediate danger.",
      "FirstLink answers 988 for North Dakota.",
      "Clay County publishes a 24-hour mobile crisis line.",
      "Help Me is not a crisis service.",
    ],
    priority: 0.72,
    keywords: ["Fargo mental health", "988 Fargo", "FirstLink crisis"],
    sections: [
      {
        heading: "Right now",
        body: [
          "988 Suicide & Crisis Lifeline — call or text 988. FirstLink answers 988 for North Dakota and parts of western Minnesota (myfirstlink.org). 911 if there is immediate medical danger or a weapon. You do not have to decide which label fits perfectly. Call.",
        ],
        bullets: [
          "FirstLink 211 / listening line: 211 or 701-235-7335; text your zip code to 898-211 for resources.",
          "Clay County publishes a 24-hour mobile mental-health crisis number at 1-800-223-4512 — confirm on claycountymn.gov.",
          "Crisis Text Line: Clay County lists text MN to 741741.",
          "NDSU Counseling: 701-231-7671 (Ceres Hall); after hours they route to FirstLink.",
          "MSUM and Concordia counseling: search the campus name plus Counseling Center for current appointment numbers. After hours: 988 or 911.",
        ],
      },
      {
        heading: "Not a Help Me category",
        body: [
          "Do not request a helper because you need someone to talk down a panic attack. Helpers are not clinicians. They are not a substitute for 988. If a request starts to sound like a crisis, the right move is to stop and call a crisis line — as the person in it, or as the person who just read the chat.",
        ],
      },
      {
        heading: "Ongoing care",
        body: [
          "211 can refer to local clinics. Sanford and Essentia operate large local health systems — search their behavioral-health intake rather than using a number from memory. Campus student health is for enrolled students. None of that intake happens inside Help Me.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "If a request starts to sound like a crisis, stop and call 988 or 911. A matched neighbor is the wrong kind of company.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/211-north-dakota", "resources/211-minnesota", "resources/student-health-ndsu", "resources/ndsu-safety", "resources/domestic-violence-fargo", "not-911"],
    faqs: [
      {
        q: "Can I ask a helper to sit with me while I am in crisis?",
        a: "No. Call 988 or 911. A matched stranger is the wrong kind of company in a crisis.",
      },
      {
        q: "Is FirstLink the same as Help Me?",
        a: "No. FirstLink is an official crisis and referral center. Help Me is a community help app.",
      },
      {
        q: "Who do I call for someone else's crisis?",
        a: "988 can guide you on how to help another person. For immediate danger, call 911.",
      },
    ],
  }),

  page({
    slug: "resources/domestic-violence-fargo",
    kind: "resource",
    title: "Domestic violence help in Fargo–Moorhead",
    description:
      "If you are in danger, call 911. Local 24/7 help: YWCA Cass Clay, Sollera, national hotline 1-800-799-7233. Help Me is not a shelter.",
    h1: "Domestic violence help — official advocates, not this app",
    eyebrow: "safety",
    lead: "If you are unsafe in your home, this page should send you to people whose job is safety. A community help app is the wrong place to plan an exit.",
    answer:
      "If you are in immediate danger, call 911. Local help includes the YWCA Cass Clay emergency shelter and Sollera, and the National Domestic Violence Hotline at 1-800-799-7233 is available around the clock. Use a device that is not monitored if you can. Help Me is not a shelter or an advocate.",
    takeaways: [
      "Immediate danger: call 911.",
      "YWCA Cass Clay and Sollera serve this metro.",
      "National hotline: 1-800-799-7233.",
      "Help Me cannot help you leave a home.",
    ],
    priority: 0.74,
    keywords: ["domestic violence Fargo", "YWCA Cass Clay", "Sollera Fargo"],
    sections: [
      {
        heading: "If you are in immediate danger",
        body: [
          "Call 911. If you cannot talk, stay on the line if you can. Campus public safety if you are on campus and that is the faster official path.",
        ],
      },
      {
        heading: "24/7 local and national lines",
        body: [
          "These are public, established services. If a device is monitored, use a device that is not monitored, or a public phone. Several local sites include a quick-exit control.",
        ],
        bullets: [
          "YWCA Cass Clay emergency shelter (women and children, including people fleeing violence): 701-232-3449, ywcacassclay.org. Published 24/7. They also publish a help form if calling is unsafe.",
          "Sollera (formerly Rape and Abuse Crisis Center of Fargo–Moorhead): sollera.org. Crisis help published at 701-293-7273; the longstanding 24-hour line 1-800-344-7273 is still cited by local campuses. Confirm on sollera.org.",
          "National Domestic Violence Hotline: 1-800-799-7233 (1-800-799-SAFE). thehotline.org.",
          "211 / FirstLink can also connect you without you having to remember a name.",
        ],
      },
      {
        heading: "Do not use Help Me for this",
        body: [
          "Do not request a helper to “get me out of the house.” Do not share a live location with a matched stranger while you are fleeing. Advocates, police, and shelters know how to do this. We do not pretend to.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Please do not use Help Me for this. Advocates, police, and shelters know how to help you leave safely.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/fargo-emergency", "resources/homeless-services-fargo", "resources/mental-health-fargo", "resources/211-north-dakota", "resources/winter-shelters-fargo", "not-911"],
    faqs: [
      {
        q: "Can a helper walk me out of an unsafe home?",
        a: "No. Call 911 or a 24/7 advocate line. A matched stranger is not an extraction team.",
      },
      {
        q: "What if calling is unsafe?",
        a: "Use a device that is not monitored if you can. YWCA describes an online help form. The national hotline also has chat on thehotline.org. 911 if you are in immediate danger.",
      },
      {
        q: "What if I cannot call?",
        a: "The national hotline has chat on its website, and YWCA describes an online help form. Use a device that is not monitored if you can.",
      },
    ],
  }),

  page({
    slug: "resources/winter-shelters-fargo",
    kind: "resource",
    title: "Winter shelters in Fargo–Moorhead",
    description:
      "Cold-weather shelter in Fargo–Moorhead: call 211 first. Churches United, New Life Center, Gladys Ray, YWCA. Hours change. Help Me is not a shelter.",
    h1: "Winter shelter — official beds, not an app pin",
    eyebrow: "winter",
    lead: "A Fargo night can kill. If someone needs to be inside, call 211 or 911. Do not send them to a stranger from a map.",
    answer:
      "For cold-weather shelter in Fargo-Moorhead, call 211 before you drive, because overflow sites and hours change with the weather. Year-round programs include Churches United, New Life Center, the Gladys Ray Shelter, and the YWCA. If someone is hypothermic or unresponsive, call 911. Help Me is not a shelter.",
    takeaways: [
      "Call 211 before you drive. Hours change.",
      "Year-round shelters still matter in January.",
      "Libraries and malls are not overnight shelter.",
      "Hypothermia or an unresponsive person: 911.",
    ],
    priority: 0.7,
    keywords: ["Fargo winter shelter", "Moorhead emergency shelter", "cold weather shelter Fargo"],
    sections: [
      {
        heading: "Call 211 before you drive",
        body: [
          "Overflow sites, hours, and who they can take change with the weather and with staffing. FirstLink answers 211 here (701-235-7335 / myfirstlink.org). Say it is a cold-weather night and who is with you. If someone is already hypothermic or unresponsive, 911.",
        ],
      },
      {
        heading: "Year-round doors that still matter in January",
        body: [
          "These are public programs. Confirm tonight’s rules with them or with 211. Do not treat a website paragraph as a reserved bed.",
        ],
        bullets: [
          "Micah’s Mission / Churches United — 1901 1st Ave. N., Moorhead. churches-united.org. 218-656-7495. Men, women, families as they operate it.",
          "New Life Center — 1902 3rd Ave. N., Fargo. fargonlc.org. 701-235-4453. Shelter described for men 18+; meals at published times.",
          "Gladys Ray Shelter — 1519 1st Ave. S., Fargo, under Fargo Cass Public Health. Search the name on fargond.gov. 701-476-4145. Low-barrier adults; city-set hours.",
          "YWCA Cass Clay — women and children, including people fleeing violence. 701-232-3449. ywcacassclay.org.",
        ],
      },
      {
        heading: "Libraries, malls, and vestibules are not beds",
        body: [
          "West Acres and Fargo Public Library are public and heated during open hours. They are not overnight shelter. Security will close the building. Plan with 211 in daylight if you can.",
        ],
      },
      {
        heading: "Help Me stays out of this",
        body: [
          "No couch-surfing requests. No “can someone take a person in.” If you are a helper who wants to volunteer, call the shelters and 211 — they have real volunteer desks. The app is for jump starts and walks, not for housing a human through a blizzard.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "If you want to help, volunteer through the shelters or 211. Hosting a stranger overnight through an app is not what Help Me is.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/homeless-services-fargo", "resources/211-north-dakota", "guides/winter-help-fargo", "resources/domestic-violence-fargo", "resources/food-assistance-fargo", "not-911"],
    faqs: [
      {
        q: "Does Fargo open extra winter-only sites?",
        a: "Sometimes, and the list changes. That is why 211 is the first call instead of a static page.",
      },
      {
        q: "Can I list my spare room on Help Me for winter?",
        a: "No. Hosting a stranger overnight is not what this product is. Official shelters and coordinated entry exist for a reason.",
      },
      {
        q: "Where can I warm up during the day?",
        a: "Libraries and some public buildings are heated during open hours. They are not shelter, so plan with 211 for the night.",
      },
    ],
  }),

  page({
    slug: "resources/student-health-ndsu",
    kind: "resource",
    title: "NDSU Student Health Service",
    description:
      "NDSU Student Health Service in the Wallman Wellness Center: 701-231-7331. Clinic and pharmacy for enrolled students. Not an ER. Not Help Me.",
    h1: "NDSU Student Health — official campus clinic",
    eyebrow: "NDSU",
    lead: "Colds, vaccines, a campus pharmacy. If it cannot wait or it is an emergency, 911 — not a walk-in hope and not a helper.",
    answer:
      "NDSU Student Health Service is the campus clinic and pharmacy in the Wallman Wellness Center, published at 701-231-7331 for the clinic. It serves enrolled students and is not an emergency department. For chest pain, trouble breathing, or severe injury, call 911. Counseling is a separate office.",
    takeaways: [
      "Clinic: 701-231-7331. Pharmacy: 701-231-7332.",
      "For enrolled and eligible students.",
      "Not a 24-hour emergency department.",
      "Counseling is a different office in Ceres Hall.",
    ],
    priority: 0.62,
    keywords: ["NDSU Student Health", "NDSU clinic", "Wallman Wellness Center"],
    geo: { name: "North Dakota State University", type: "Campus", city: "Fargo", state: "ND" },
    sections: [
      {
        heading: "Published contacts",
        body: [
          "Student Health Service is NDSU’s campus clinic and pharmacy in the Wallman Wellness Center, 1707 Centennial Blvd. Clinic: 701-231-7331. Pharmacy: 701-231-7332. ndsu.edu/studenthealthservice. Appointments via that number or the Student Health Portal. Confirm hours on their site — weekday clinic hours, shorter on breaks, closed some holidays.",
        ],
        bullets: [
          "Enrolled and eligible students, as NDSU defines eligibility.",
          "Not a 24-hour emergency department. After hours or chest pain, trouble breathing, severe injury: 911.",
          "Counseling is a different office in Ceres Hall, 701-231-7671. After hours they point to FirstLink / 988.",
          "Immunization and records questions go through Student Health, not through a neighbor.",
        ],
      },
      {
        heading: "How this sits next to Help Me",
        body: [
          "A printer problem is a helper. A fever is a clinic. A walk to the Wellness Center in the cold can be a neighbor ask. Diagnosis cannot.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "A neighbor can help with directions to the Wellness Center, but diagnosis belongs to the clinic.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/ndsu-safety", "resources/mental-health-fargo", "guides/new-to-ndsu", "resources/211-north-dakota"],
    faqs: [
      {
        q: "Can a helper pick up my prescription?",
        a: "Do not turn a first-time match into a pharmacy pickup. Use the campus pharmacy desk and official processes.",
      },
      {
        q: "Is Student Health the same as NDSU Police?",
        a: "No. Clinic for health. Police for safety and crime. 911 for emergencies.",
      },
      {
        q: "Is Student Health open on weekends?",
        a: "Hours are weekday clinic hours and shorter on breaks. Check the Student Health site for the current schedule.",
      },
    ],
  }),

  page({
    slug: "resources/211-north-dakota",
    kind: "resource",
    title: "211 North Dakota (FirstLink)",
    description:
      "Dial 211 in North Dakota for food, shelter, heat, and referrals. FirstLink answers 211 at myfirstlink.org or 701-235-7335. Not Help Me.",
    h1: "211 in North Dakota — FirstLink",
    eyebrow: "211",
    lead: "Three digits for the problems that are not 911 and are not a jump start. Food, heat, shelter, a listening line.",
    answer:
      "In North Dakota, dial 211 for food, shelter, heat, and referrals. FirstLink answers 211 for the entire state and for Clay County, Minnesota, and publishes 701-235-7335 if 211 does not connect. It is free, confidential, and not police dispatch. For danger, call 911.",
    takeaways: [
      "Dial 211. Backup number: 701-235-7335.",
      "Text your zip code to 898-211 for resources.",
      "FirstLink also answers 988 for North Dakota.",
      "211 is not police dispatch.",
    ],
    priority: 0.76,
    keywords: ["211 North Dakota", "FirstLink", "211 Fargo"],
    sections: [
      {
        heading: "How to reach 211 here",
        body: [
          "Dial 211. If 211 does not connect, FirstLink publishes 701-235-7335 (701-235-SEEK). Text your zip code to 898-211 for resource text-back. Website: myfirstlink.org. FirstLink is the 211 provider for the entire state of North Dakota and for Clay County, Minnesota.",
        ],
        bullets: [
          "24/7 information and referral, plus supportive listening.",
          "988 is the Suicide & Crisis Lifeline — FirstLink answers 988 for North Dakota and parts of western Minnesota. Call or text 988.",
          "211 is not police dispatch. 911 remains 911.",
          "Help Me is not a 211 client portal. We send you here.",
        ],
      },
      {
        heading: "What to call 211 for",
        body: [
          "You need a pantry, a shelter bed, help with heat, a county office, or you need a human to help you name the next door. They keep a database of nonprofit and government programs. That is their job. It is a better job than asking a matched stranger to become a caseworker.",
        ],
      },
      {
        heading: "Cass County still exists",
        body: [
          "211 will often send Fargo and West Fargo callers toward Cass County Human Services for benefits. That is correct. Open the Cass County resource page if you already know you need the Annex at 1010 2nd Ave. S.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is not a 211 client portal. It sends you here for anything that is not a small favor.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/211-minnesota", "resources/cass-county-resources", "resources/homeless-services-fargo", "resources/food-assistance-fargo", "resources/mental-health-fargo", "resources/fargo-emergency"],
    faqs: [
      {
        q: "Is 211 the same as Help Me support?",
        a: "No. 211 is FirstLink. Help Me support is support@helpme.fyi for the app. Emergencies are 911.",
      },
      {
        q: "Does 211 work in West Fargo?",
        a: "Yes. West Fargo is in North Dakota. Dial 211.",
      },
      {
        q: "Is 211 free?",
        a: "Yes. It is a free, confidential information and referral service.",
      },
    ],
  }),

  page({
    slug: "resources/211-minnesota",
    kind: "resource",
    title: "211 Minnesota",
    description:
      "Dial 211 in Minnesota for health and human services. United Way 211 at 211unitedway.org. FirstLink answers 211 in Clay County. Not Help Me.",
    h1: "211 in Minnesota — including Moorhead",
    eyebrow: "211",
    lead: "Minnesota has 211. Clay County also gets FirstLink. The point is the same: official referral, not a stranger in a chat.",
    answer:
      "In Minnesota, dial 211 for health and human services. United Way 211 publishes 211unitedway.org, and FirstLink states that it also serves Clay County for 211, so a Moorhead or Dilworth call may be answered locally. It is free and confidential. For emergencies, call 911.",
    takeaways: [
      "Dial 211 from Minnesota.",
      "United Way 211 covers the state. FirstLink serves Clay County.",
      "Minnesota programs live in Minnesota.",
      "988 and 911 still work.",
    ],
    priority: 0.72,
    keywords: ["211 Minnesota", "United Way 211", "211 Moorhead"],
    sections: [
      {
        heading: "How 211 works on this side of the river",
        body: [
          "Dial 211 from Minnesota. United Way 211 publishes 211unitedway.org, plus 800-543-7709 and 651-291-0211, and the same zip-code text line 898-211. FirstLink states that it serves Clay County, Minnesota for 211 as well — so a Moorhead or Dilworth call may be answered with local Red River Valley knowledge. Either way, you are in the 211 system, not in Help Me.",
        ],
        bullets: [
          "24/7, confidential information and referral.",
          "Minnesota programs (MFIP, Minnesota food support, Medical Assistance) live in Minnesota. Clay County Social Services is the local office.",
          "988 still works. 911 still works.",
          "Do not assume a Cass County benefit will transfer because you go to class in Fargo.",
        ],
      },
      {
        heading: "When to choose 211 over a campus desk",
        body: [
          "Campus public safety is for campus safety. 211 is for food, housing, utilities, and finding a county program. If you are an MSUM, Concordia, or M State student in crisis, you can use both: 988 / campus counseling for the crisis, 211 for the practical next door.",
        ],
      },
      {
        heading: "Help Me stays secondary",
        body: [
          "A jump start in a Moorhead lot can be a helper. Rent, SNAP, a shelter bed, a sliding-scale clinic — 211 and the county. We will not funnel those into the map.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "A jump start in a Moorhead lot can be a neighbor favor. Rent, food support, and shelter belong to 211 and the county.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/211-north-dakota", "resources/clay-county-resources", "resources/moorhead-police", "resources/homeless-services-fargo", "resources/mental-health-fargo", "cities/moorhead"],
    faqs: [
      {
        q: "I am in Dilworth. Which 211?",
        a: "Dial 211. Dilworth is Clay County, Minnesota. FirstLink serves Clay County for 211; United Way 211 is the statewide Minnesota system.",
      },
      {
        q: "Can Help Me apply for Minnesota benefits for me?",
        a: "No. Clay County Social Services or 211. Helpers are not caseworkers.",
      },
      {
        q: "Can I text for resources?",
        a: "Yes. Text your zip code to 898-211 for resource text-back.",
      },
    ],
  }),

  page({
    slug: "resources/united-way-cass-clay",
    kind: "resource",
    title: "United Way of Cass-Clay",
    description:
      "United Way of Cass-Clay funds and connects health, education, and financial stability programs across Fargo, West Fargo, Moorhead, and Dilworth.",
    h1: "United Way of Cass-Clay",
    eyebrow: "resource",
    lead: "One of the organizations that actually maps this metro’s social services, on both sides of the river at once.",
    answer:
      "United Way of Cass-Clay is a community organization serving the Fargo–Moorhead metro across both Cass County, North Dakota and Clay County, Minnesota. It funds and connects local programs in areas like health, education, and financial stability. For direct service referral, 211 is the fastest front door in either state.",
    takeaways: [
      "Serves both Cass County, ND and Clay County, MN.",
      "Funds and connects health, education, and financial stability programs.",
      "For a direct referral, 211 is the fastest door.",
      "Help Me is not affiliated with United Way.",
    ],
    priority: 0.6,
    keywords: ["United Way Cass Clay", "Fargo Moorhead nonprofit", "community services metro"],
    sections: [
      {
        heading: "Why a two-county organization matters here",
        body: [
          "Most services in this metro stop at the state line. An organization that works across both counties is unusual and useful, because the people living here cross that line every day without changing who they are or what they need.",
        ],
      },
      {
        heading: "How to actually reach services",
        body: [
          "For an immediate need — food, housing, utilities, health — call 211. It is free, confidential, and staffed by people who know the current landscape. Program details, hours, and eligibility change, so confirm with the organization’s own site rather than trusting a summary anywhere, including this one.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is a place to ask your block for small favors. United Way is one of the organizations that maps the bigger picture.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/211-north-dakota", "resources/211-minnesota", "resources/food-assistance-fargo", "for-nonprofits", "resources/cass-county-resources", "resources"],
    faqs: [
      {
        q: "Is Help Me affiliated with United Way?",
        a: "No. This page exists to point at real organizations, not to claim a relationship with them.",
      },
      {
        q: "What if I need help today?",
        a: "Call 211 for referral, or 911 if it is an emergency.",
      },
      {
        q: "Does United Way provide direct services?",
        a: "It funds and connects programs. For direct help, 211 can refer you to the right organization.",
      },
    ],
  }),

  page({
    slug: "resources/great-plains-food-bank",
    kind: "resource",
    title: "Great Plains Food Bank",
    description:
      "Great Plains Food Bank is North Dakota’s food bank, supplying partner pantries and programs across the state including the Fargo area.",
    h1: "Great Plains Food Bank",
    eyebrow: "resource",
    lead: "The supply side of North Dakota’s food assistance network, behind many of the pantries people actually walk into.",
    answer:
      "Great Plains Food Bank is the statewide food bank for North Dakota, distributing food through partner pantries, programs, and agencies including many in the Fargo area. Individuals usually access food through a partner site rather than the food bank directly. 211 can identify current pantry locations and hours.",
    takeaways: [
      "The statewide food bank for North Dakota.",
      "People usually get food through partner pantries.",
      "211 can identify current pantry locations.",
      "Minnesota has its own network for Clay County.",
    ],
    priority: 0.65,
    keywords: ["Great Plains Food Bank", "food pantry Fargo", "North Dakota food assistance"],
    sections: [
      {
        heading: "How the network works",
        body: [
          "A food bank supplies; a pantry distributes. If you need food this week, the practical step is finding a partner pantry near you and checking its hours and requirements — which change, and which 211 tracks better than any static page can.",
        ],
      },
      {
        heading: "On the Minnesota side",
        body: [
          "Clay County residents are served by Minnesota’s own network of food shelves and programs. Minnesota 211 is the right referral line there. The river matters for this the same way it matters for everything except 911.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "If you want to help, donate through the food bank or a partner pantry. Help Me is not a food program.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/food-assistance-fargo", "resources/211-north-dakota", "resources/211-minnesota", "resources/homeless-services-fargo", "resources/clay-county-resources", "for-nonprofits"],
    faqs: [
      {
        q: "Can I get food directly from a food bank?",
        a: "Generally food reaches people through partner pantries and programs. 211 can point you at current locations.",
      },
      {
        q: "Should I ask for food on Help Me?",
        a: "No. Food insecurity is a services question, and this metro has real programs for it. A neighbor app is the wrong door.",
      },
      {
        q: "How do I find a partner pantry?",
        a: "Use the Great Plains Food Bank pantry list or call 211 for current locations and hours.",
      },
    ],
  }),

  page({
    slug: "resources/churches-united-for-the-homeless",
    kind: "resource",
    title: "Churches United for the Homeless",
    description:
      "Churches United for the Homeless operates shelter and housing services in the Fargo–Moorhead area. A real provider, not a neighbor-app substitute.",
    h1: "Churches United for the Homeless",
    eyebrow: "resource",
    lead: "Shelter is infrastructure, not a favor, and this metro has organizations whose entire job it is.",
    answer:
      "Churches United for the Homeless is a Fargo–Moorhead organization providing emergency shelter and housing-related services. Availability, intake times, and requirements change, so contact the organization or call 211 for current information. In a life-threatening situation, especially in extreme cold, call 911.",
    takeaways: [
      "Provides emergency shelter and housing services.",
      "Availability and intake change. Call to confirm.",
      "In dangerous cold, call 911 first.",
      "211 can help find current options.",
    ],
    priority: 0.7,
    keywords: ["Churches United Moorhead", "shelter Fargo Moorhead", "homeless services metro"],
    sections: [
      {
        heading: "When this is the right call",
        body: [
          "Nowhere to sleep tonight. Facing the loss of housing. Needing shelter in dangerous cold. These are the situations where an organization with beds, staff, and a process is the only real answer. A neighbor can keep you company while you call, but only the organization can tell you whether a bed is open tonight, and 211 can confirm what else is available across the metro.",
        ],
      },
      {
        heading: "Winter urgency",
        body: [
          "Fargo–Moorhead winters make exposure a genuine emergency, not a discomfort. If someone is outside in dangerous cold and cannot get warm, that is 911 first and shelter second. Do not route it into a help app.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Shelter is a service, not a favor. Help Me points you to the organization built for it.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/homeless-services-fargo", "resources/winter-shelters-fargo", "resources/211-north-dakota", "seasons/polar-vortex-cold-snap", "not-911", "resources"],
    faqs: [
      {
        q: "How do I find current shelter availability?",
        a: "Contact the provider directly or call 211. Availability changes daily and no static page can be accurate about it.",
      },
      {
        q: "Is Help Me a shelter resource?",
        a: "No. It is everyday non-emergency help between neighbors, and this page exists to point at the real option instead.",
      },
      {
        q: "Can I volunteer there?",
        a: "Contact the organization directly. It runs its own volunteer process.",
      },
    ],
  }),

  page({
    slug: "resources/ywca-cass-clay",
    kind: "resource",
    title: "YWCA Cass Clay",
    description:
      "YWCA Cass Clay provides emergency shelter and services for women and children in the Fargo–Moorhead area, including domestic violence support.",
    h1: "YWCA Cass Clay",
    eyebrow: "resource",
    lead: "One of the metro’s emergency shelter providers, and one of the organizations that exists precisely for the situations an app must never try to hold.",
    answer:
      "YWCA Cass Clay provides emergency shelter and support services for women and children in the Fargo–Moorhead area, including help for people leaving domestic violence. Contact the organization or call 211 for current intake information. If you are in immediate danger, call 911 first.",
    takeaways: [
      "Emergency shelter and services for women and children.",
      "Includes help for people leaving domestic violence.",
      "In immediate danger, call 911 first.",
      "Contact the organization or 211 for current intake.",
    ],
    priority: 0.7,
    keywords: ["YWCA Cass Clay", "women's shelter Fargo", "domestic violence shelter Moorhead"],
    sections: [
      {
        heading: "If you are in danger right now",
        body: [
          "Call 911. Getting out of danger comes before any intake process, any app, and any plan. Advocacy organizations can help with what comes after, and they can help with safety planning before a crisis too.",
        ],
      },
      {
        heading: "Why this is on a help app’s website",
        body: [
          "Because someone will search for help and land here. A community app for jump starts and moving boxes has no business being the last page a person in danger reads. These organizations are the right ones, and naming them is the least this site can do.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is not a shelter and not an advocate. This page exists so someone who needs help finds the right organization.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/domestic-violence-fargo", "resources/homeless-services-fargo", "resources/fargo-emergency", "resources/211-north-dakota", "not-911", "glossary/988-crisis-line"],
    faqs: [
      {
        q: "Is this service free?",
        a: "Emergency shelter and advocacy services in this metro are provided without charge. Confirm details with the organization.",
      },
      {
        q: "Can Help Me connect me to a shelter?",
        a: "No. Contact the provider directly or call 211, and 911 if you are in immediate danger.",
      },
      {
        q: "What if I cannot call?",
        a: "The YWCA describes an online help form, and the national hotline has chat. Use a device that is not monitored if you can.",
      },
    ],
  }),

  page({
    slug: "resources/legal-help-fargo-moorhead",
    kind: "resource",
    title: "Legal help in Fargo–Moorhead",
    description:
      "Legal aid, tenant questions, and where to get real legal help in North Dakota and Minnesota. A neighbor app cannot answer a legal question.",
    h1: "Where to get actual legal help",
    eyebrow: "resource",
    lead: "Two states, two sets of law, and a metro where people routinely get confident advice about the wrong one.",
    answer:
      "Legal help in Fargo–Moorhead follows the state: Legal Services of North Dakota serves eligible North Dakota residents, and Minnesota has its own legal aid organizations for Clay County. Courts also publish self-help resources. Nothing on this site is legal advice, and no helper is a lawyer able to give any.",
    takeaways: [
      "Legal help follows the state: North Dakota or Minnesota.",
      "Legal aid serves eligible people at no cost.",
      "State courts publish self-help resources.",
      "Nothing here is legal advice.",
    ],
    priority: 0.6,
    keywords: ["legal aid Fargo", "tenant rights North Dakota", "Minnesota legal aid Clay County"],
    sections: [
      {
        heading: "The two-states problem, again",
        body: [
          "Tenant notice periods, deposit rules, eviction procedure, and consumer protections are set by state law. Fargo and West Fargo are North Dakota; Moorhead and Dilworth are Minnesota. Advice from a friend across the river may be entirely wrong for your situation.",
        ],
      },
      {
        heading: "Where to start",
        body: [
          "Legal aid organizations in your state, which screen for eligibility. State court self-help resources for procedure and forms. 211 for referral if you are not sure where to begin. A licensed attorney for anything with a deadline attached.",
        ],
        bullets: [
          "Legal Services of North Dakota for eligible ND residents",
          "Minnesota legal aid organizations for Clay County residents",
          "State court self-help resources for forms and procedure",
          "211 for referral in either state",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me cannot give legal advice and neither can a neighbor. Use the organizations on this page.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["for-renters", "guides/apartment-move-out-checklist-fargo", "resources/211-north-dakota", "resources/211-minnesota", "resources/cass-county-resources", "legal/terms"],
    faqs: [
      {
        q: "Can a helper give me legal advice?",
        a: "No, and nobody should. Legal advice requires a licensed attorney who knows your facts and your state.",
      },
      {
        q: "Is legal aid free?",
        a: "Legal aid organizations serve eligible clients at no cost. Eligibility is checked and varies by program.",
      },
      {
        q: "Where do I start with a legal problem?",
        a: "Legal aid in your state, a state court self-help resource, or 211 for a referral. For anything with a deadline, talk to a licensed attorney.",
      },
    ],
  }),

  page({
    slug: "resources/veterans-services-fargo",
    kind: "resource",
    title: "Veterans services in Fargo–Moorhead",
    description:
      "VA healthcare, county veterans service officers, and the Veterans Crisis Line for veterans in Cass County, ND and Clay County, MN.",
    h1: "Veterans services in the metro",
    eyebrow: "resource",
    lead: "Benefits navigation is a job someone does professionally and for free. Use them.",
    answer:
      "Veterans in Fargo–Moorhead have three main doors: the VA health care system for healthcare and enrollment, county veterans service officers in Cass and Clay counties for benefits and claims navigation at no cost, and the Veterans Crisis Line at 988 then press 1. For immediate danger, call 911.",
    takeaways: [
      "County veterans service officers help with benefits at no cost.",
      "The VA health care system handles healthcare and enrollment.",
      "Veterans Crisis Line: 988, then press 1.",
      "For immediate danger, call 911.",
    ],
    priority: 0.65,
    keywords: ["Fargo VA", "veterans service officer Cass County", "Veterans Crisis Line"],
    sections: [
      {
        heading: "County veterans service officers",
        body: [
          "Both Cass County, North Dakota and Clay County, Minnesota have veterans service officers whose job is helping veterans and families navigate benefits and claims. It is free, it is local, and it is dramatically more effective than filling out forms alone. Bring discharge papers if you have them, and ask what you may be eligible for beyond the benefit you came in about. Many veterans are surprised by how much exists.",
        ],
      },
      {
        heading: "Crisis support",
        body: [
          "988 then press 1 reaches the Veterans Crisis Line, by call or text. It is staffed, free, and appropriate well before things reach the worst possible moment.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is for small favors between neighbors, and veterans use it like anyone else. Benefits and crisis support belong to the organizations above.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["for-veterans", "glossary/988-crisis-line", "resources/mental-health-fargo", "resources/cass-county-resources", "resources/clay-county-resources", "resources/211-north-dakota"],
    faqs: [
      {
        q: "Is Help Me connected to the VA?",
        a: "No. It is an independent community app with no VA affiliation.",
      },
      {
        q: "Do I need to pay a service officer?",
        a: "No. County veterans service officers assist at no charge, and you should never pay someone to file a basic claim for you.",
      },
      {
        q: "Is help from a veterans service officer free?",
        a: "Yes. County veterans service officers help veterans and families navigate benefits at no cost.",
      },
    ],
  }),
];
