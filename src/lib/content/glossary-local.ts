import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

const NOT_911 = "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.";

/** Local terms. Official numbers and rules stay with the official source. */
export const GLOSSARY_LOCAL: SeoPage[] = [
  page({
    slug: "glossary/211-referral",
    kind: "glossary",
    title: "211 in North Dakota and Minnesota: what it is",
    description:
      "211 is the free referral line for food, housing, utilities, and health services. North Dakota and Minnesota each run their own, which matters here.",
    h1: "211",
    eyebrow: "Glossary",
    lead: "When the problem is bigger than a favor, 211 is the front door to the people whose job it is.",
    answer:
      "211 is a free, confidential information and referral line that connects people to local help with food, housing, utilities, health care, and social services. North Dakota and Minnesota each run their own, so the referrals follow the state you call from, which matters in a metro split by a river.",
    term: {
      name: "211",
      shortDefinition:
        "A free information and referral service for food, housing, utility, and health services. North Dakota and Minnesota run their own.",
    },
    takeaways: [
      "Free and confidential.",
      "ND and MN each run their own, so call from the right side of the river.",
      "It connects you to services, but is not an emergency line.",
      "For danger, call 911.",
    ],
    priority: 0.55,
    keywords: ["211 North Dakota", "211 Minnesota", "211 Fargo", "211 referral", "help finding services Fargo"],
    sections: [
      {
        heading: "What 211 is for",
        body: [
          "Food insecurity, an eviction notice, a utility shutoff, a need for shelter, help finding mental health care, or simply not knowing which agency handles a situation. Trained staff know the local landscape, and it costs nothing.",
        ],
        bullets: [
          "Food, housing, and utility help.",
          "Health and mental health referrals.",
          "Not sure who to call? Start here.",
        ],
      },
      {
        heading: "Two states, two services",
        body: [
          "North Dakota and Minnesota each run their own 211, so the referrals you get follow the state you are calling from. Fargo and West Fargo are in North Dakota, and Moorhead and Dilworth are in Minnesota. The Resources pages list both.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is for small favors between neighbors: a charger, directions, a hand with something heavy. It does not do intake, case management, or benefits help, and pointing someone in crisis to a neighbor with an app can delay the help they need. For bigger problems, call 211.",
          NOT_911,
        ],
      },
    ],
    related: ["resources/211-north-dakota", "resources/211-minnesota", "resources", "not-911", "for-nonprofits", "glossary/988-crisis-line"],
    faqs: [
      {
        q: "Is 211 an emergency number?",
        a: "No. It is for information and referral. For immediate danger, call 911.",
      },
      {
        q: "Which 211 do I call in Moorhead?",
        a: "Minnesota's. Fargo and West Fargo use North Dakota's. Referrals follow the state you call from.",
      },
      {
        q: "Does it cost anything?",
        a: "No. 211 is free and confidential.",
      },
    ],
  }),
  page({
    slug: "glossary/511-road-conditions",
    kind: "glossary",
    title: "511 road conditions in North Dakota and Minnesota",
    description:
      "511 is the official traveler information service for road conditions and closures. ND and MN each run their own, and both matter around Fargo-Moorhead.",
    h1: "511 road conditions",
    eyebrow: "Glossary",
    lead: "In a Fargo winter storm, the authority on whether a highway is open is not a rumor or a group thread. It is 511.",
    answer:
      "511 is the official traveler information service for road conditions, closures, and travel advisories, run separately by each state. North Dakota and Minnesota each have their own, and drivers around Fargo-Moorhead often need both. Check before you leave, not while driving, and believe a no-travel advisory.",
    term: {
      name: "511",
      shortDefinition:
        "State-run traveler information for road conditions and closures. North Dakota and Minnesota each run one, and both matter in this metro.",
    },
    takeaways: [
      "ND and MN each run their own 511.",
      "Check before you leave, not while driving.",
      "A no-travel advisory is an answer, not a suggestion.",
      "For danger on the road, call 911.",
    ],
    priority: 0.5,
    keywords: ["511 Fargo", "ND 511", "MN 511", "road conditions Fargo", "I-94 closed", "travel not advised Fargo"],
    sections: [
      {
        heading: "What it tells you",
        body: [
          "Whether roads are covered, icy, or closed, where travel is not advised, and where crews and crashes are. In a winter storm here, no-travel advisories and interstate closures are real, official, and enforced.",
        ],
      },
      {
        heading: "How to use it",
        body: [
          "Check before you leave. If it says travel is not advised, that is the answer, and the right move is to stay where you are. No help request replaces a plowed road, and no neighbor can reopen a closed interstate.",
        ],
        bullets: [
          "Check the state for each side of your route.",
          "Check again before a return trip.",
          "Keep a winter kit in the car anyway.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is for small favors in a lot or at a curb, not for highway trouble. If you are stuck on a road, call roadside assistance, and call 911 if you are in danger.",
          NOT_911,
        ],
      },
    ],
    related: ["seasons/blizzard-day", "seasons/winter-in-fargo-moorhead", "guides/winter-help-fargo", "guides/what-to-keep-in-your-car-in-winter", "for-commuters", "resources/fargo-emergency"],
    faqs: [
      {
        q: "Is there one 511 for the whole metro?",
        a: "No. North Dakota and Minnesota each run their own. Check the one for each state your route crosses.",
      },
      {
        q: "Should I drive if travel is not advised?",
        a: "No. Treat it as an instruction. Stay where you are, and keep warm.",
      },
      {
        q: "Can a neighbor help on a closed highway?",
        a: "No. Highway shoulders are dangerous. Call roadside assistance, and 911 if you are in danger.",
      },
    ],
  }),
  page({
    slug: "glossary/988-crisis-line",
    kind: "glossary",
    title: "988 Suicide and Crisis Lifeline: call or text",
    description:
      "988 is the national Suicide and Crisis Lifeline, by call or text. Veterans press 1. For a mental health crisis it is the right number, not an app.",
    h1: "988",
    eyebrow: "Glossary",
    lead: "Someone will search for help at two in the morning and land here. This page exists to point them to the right door.",
    answer:
      "988 is the Suicide and Crisis Lifeline, reachable by call or text from anywhere in the United States, including both sides of the Fargo-Moorhead metro. It connects to trained crisis counselors. Veterans can press 1 for the Veterans Crisis Line. For immediate physical danger, call 911 instead.",
    term: {
      name: "988",
      shortDefinition:
        "The national Suicide and Crisis Lifeline, by call or text. Veterans press 1. For immediate danger, call 911.",
    },
    takeaways: [
      "Call or text 988.",
      "Veterans press 1.",
      "For immediate danger, call 911.",
      "Help Me is not a crisis service.",
    ],
    priority: 0.5,
    keywords: ["988", "suicide and crisis lifeline", "988 Fargo", "mental health crisis Fargo", "Veterans Crisis Line"],
    sections: [
      {
        heading: "When to call or text",
        body: [
          "Thoughts of suicide or self-harm, a mental health or substance use crisis, or serious worry about someone else. You do not have to be at the worst possible moment to be allowed to call.",
        ],
        bullets: [
          "Call or text 988.",
          "Veterans: press 1.",
          "Immediate danger: call 911.",
        ],
      },
      {
        heading: "Why this page exists",
        body: [
          "A community help app is not equipped for a crisis and should never be the last page someone reads. Campus counseling centers, local mental health services, 988, and 911 are the real options. The Resources pages list the local ones.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is for small, everyday favors. It does not provide counseling or crisis response, and nobody on it is a counselor. If you are struggling, please call or text 988 now. If you are worried about someone else, you can call 988 for guidance too, and if there is immediate danger, call 911 first.",
          NOT_911,
        ],
      },
    ],
    related: ["resources/mental-health-fargo", "not-911", "resources", "for-veterans", "glossary/211-referral", "resources/fargo-emergency"],
    faqs: [
      {
        q: "Can I text 988?",
        a: "Yes. 988 works by call or text.",
      },
      {
        q: "Is 988 the same as 911?",
        a: "No. 988 is for a mental health crisis. For immediate physical danger, call 911.",
      },
      {
        q: "Is Help Me a crisis service?",
        a: "No. Help Me is for small favors between neighbors. Please call or text 988 for a crisis.",
      },
    ],
  }),
  page({
    slug: "glossary/block-heater",
    kind: "glossary",
    title: "Block heater: why Fargo cars have a plug",
    description:
      "A block heater is an electric heater in the engine that makes cold starts easier. Why Fargo-Moorhead cars have a plug on the grille, and when to use it.",
    h1: "Block heater",
    eyebrow: "Glossary",
    lead: "If you have ever wondered why half the cars in a Fargo lot have a cord sticking out of the grille, this is why.",
    answer:
      "A block heater is an electric heater built into a car's engine that warms it before you start, which makes cold starts far easier in deep cold. Plug it into an outdoor outlet a few hours before you leave. Many Fargo-Moorhead cars have one, and it is one of the cheapest ways to avoid a dead battery.",
    term: {
      name: "Block heater",
      shortDefinition:
        "An electric heater in the engine that warms it before you start, making cold starts easier in deep cold.",
    },
    takeaways: [
      "It warms the engine before you start.",
      "Plug in a few hours before you leave in deep cold.",
      "Not every car has one. Check the owner's manual.",
      "It helps, but a dead battery can still happen.",
    ],
    priority: 0.4,
    keywords: ["block heater Fargo", "engine block heater", "plug in car winter", "cold start Fargo"],
    sections: [
      {
        heading: "What it does",
        body: [
          "Cold thickens engine oil and drains a battery. A block heater warms the engine so it turns over more easily. In the deep cold of January, that can be the difference between a start and a click. Many cars here come with the cord already installed, tucked in the grille.",
        ],
      },
      {
        heading: "How to use it",
        body: [
          "Plug it into a proper outdoor outlet using a cord rated for outdoor use, a few hours before you need the car. Unplug before you drive away. Do not leave a cord across a walkway where people can trip. Check the owner's manual for your vehicle, and ask a shop if you are not sure whether yours has one.",
        ],
        bullets: [
          "Use an outdoor-rated cord.",
          "Plug in a few hours before you leave.",
          "Unplug before driving.",
        ],
      },
      {
        heading: "It still might not start",
        body: [
          "A block heater helps with the engine, not the battery's age. Keep a jump pack in the trunk, and know that a neighbor with cables is a short ask away. " + "Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
          NOT_911,
        ],
      },
    ],
    related: ["guides/what-to-keep-in-your-car-in-winter", "glossary/jump-pack", "help/jump-start", "seasons/winter-in-fargo-moorhead", "for-people-new-to-winter", "help/winter-car-help"],
    faqs: [
      {
        q: "Does every car have a block heater?",
        a: "No. Many vehicles in this area do, but check the owner's manual or ask a shop.",
      },
      {
        q: "How long should I plug it in?",
        a: "A few hours before you need the car is a common guideline. Check the manual for your vehicle.",
      },
      {
        q: "Will a block heater stop my battery dying?",
        a: "No. It helps the engine start. A weak battery can still fail in deep cold.",
      },
    ],
  }),
  page({
    slug: "glossary/jump-pack",
    kind: "glossary",
    title: "Jump pack: the best forty dollars in a Fargo winter",
    description:
      "A jump pack is a portable battery booster that starts a dead car without another vehicle. Why Fargo-Moorhead drivers keep one in the trunk, and how to use it.",
    h1: "Jump pack",
    eyebrow: "Glossary",
    lead: "It turns a dead battery from a crisis into a ten-minute problem, and it means you do not have to ask anyone.",
    answer:
      "A jump pack is a portable battery booster that can start a dead car without needing another vehicle. Keep one charged in the trunk, follow the instructions for your car, and recharge it a few times a year. It is one of the most useful things a Fargo-Moorhead driver can carry.",
    term: {
      name: "Jump pack",
      shortDefinition:
        "A portable battery booster that starts a dead car without another vehicle.",
    },
    takeaways: [
      "It starts a dead car without a second vehicle.",
      "Keep it charged, and recharge it periodically.",
      "Follow the instructions for your car.",
      "It does not fix a failed battery for good.",
    ],
    priority: 0.4,
    keywords: ["jump pack Fargo", "portable jump starter", "jump starter winter", "dead battery winter Fargo"],
    sections: [
      {
        heading: "Why people carry one here",
        body: [
          "Batteries fail on the coldest morning, in a lot with no one around. A jump pack lets you start the car yourself in a couple of minutes. It also means a neighbor with cables is a nice-to-have, not a necessity.",
        ],
      },
      {
        heading: "Using one",
        body: [
          "Read the instructions that came with the pack and check your owner's manual for how to connect it to your vehicle. Turn everything off first. Keep it charged, because a dead jump pack is just a brick, and cold drains it too. Keep it in the cabin during deep cold if you can.",
        ],
        bullets: [
          "Charge it every few months.",
          "Keep it somewhere that is not frozen.",
          "Follow the manual for your vehicle.",
        ],
      },
      {
        heading: "If it does not work",
        body: [
          "A jump may not fix a battery that has failed for good, or a different problem. Then it is a shop or a tow, not another try in the cold. If you would rather ask a neighbor, post a jump start request and meet in a busy lot in daylight. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
          NOT_911,
        ],
      },
    ],
    related: ["help/jump-start", "glossary/block-heater", "guides/how-to-jump-start-a-car", "guides/what-to-keep-in-your-car-in-winter", "for-people-new-to-winter", "help/winter-car-help"],
    faqs: [
      {
        q: "Do I still need a neighbor with cables?",
        a: "Not if you have a charged jump pack. It is the best way to be independent of anyone.",
      },
      {
        q: "How often should I charge it?",
        a: "Every few months, and after each use. Check the instructions that came with yours.",
      },
      {
        q: "What if the car still will not start?",
        a: "Then it is likely more than a dead battery. Call a shop or a tow.",
      },
    ],
  }),
  page({
    slug: "glossary/plow-berm",
    kind: "glossary",
    title: "Plow berm: the wall of snow behind your car",
    description:
      "A plow berm is the ridge of heavy snow a plow leaves at the curb or the end of a driveway. Why it is so hard to move in Fargo-Moorhead, and how to handle it.",
    h1: "Plow berm",
    eyebrow: "Glossary",
    lead: "You shoveled the driveway. Then the plow came by and left a wall of packed snow across the end. That wall has a name.",
    answer:
      "A plow berm is the ridge of heavy, packed snow a plow leaves at the curb or across the end of a driveway after it clears the street. It is dense, often icy, and the hardest part of digging out. Clear it in layers, take breaks, and ask for a second shovel before you hurt your back.",
    term: {
      name: "Plow berm",
      shortDefinition:
        "The ridge of heavy, packed snow a plow leaves at the curb or across the end of a driveway.",
    },
    takeaways: [
      "It is dense and heavy, often icy.",
      "Clear it in layers, and take breaks.",
      "Heavy shoveling is hard on the heart and back.",
      "A second shovel makes it half the work.",
    ],
    priority: 0.4,
    keywords: ["plow berm Fargo", "snow berm driveway", "plow left snow driveway", "shoveling Fargo"],
    sections: [
      {
        heading: "Why it is so hard",
        body: [
          "The plow scrapes snow from the street and packs it into a ridge at the curb. By the time it reaches your driveway it has been compressed, often with slush that freezes solid. It can be knee-high and as dense as concrete. It arrives right after you finished shoveling, which is the unfair part.",
        ],
      },
      {
        heading: "Handling it without hurting yourself",
        body: [
          "Take it a layer at a time rather than trying to lift the whole block. Push, do not throw, where you can. Take breaks. If you have heart trouble or you are older, do not push through it: heavy snow removal is a known strain on the heart. If you feel chest pain or trouble breathing, stop and call 911.",
        ],
        bullets: [
          "Clear in layers.",
          "Push instead of lifting when you can.",
          "Rest often.",
          "Stop and call 911 for chest pain.",
        ],
      },
      {
        heading: "Ask for a hand",
        body: [
          "This is exactly the size of favor Help Me is for. Ask for a second shovel for ten minutes. A neighbor is not a plow service, and nobody is on call. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
          NOT_911,
        ],
      },
    ],
    related: ["help/snow-help", "guides/digging-out-after-a-snowstorm", "help/winter-car-help", "seasons/winter-in-fargo-moorhead", "for-seniors", "glossary/snow-emergency"],
    faqs: [
      {
        q: "Who is supposed to clear the berm?",
        a: "In most places it is the property owner's job to clear the end of their driveway. Check your city's rules.",
      },
      {
        q: "Is it okay to ask a neighbor to help?",
        a: "Yes. It is a classic small favor. Meet your helper at the curb, not inside your home.",
      },
      {
        q: "Is shoveling dangerous?",
        a: "It can be, especially heavy snow. If you have heart or breathing problems, ask for help. For chest pain, call 911.",
      },
    ],
  }),
  page({
    slug: "glossary/snow-emergency",
    kind: "glossary",
    title: "Snow emergency in Fargo, West Fargo, and Moorhead",
    description:
      "A snow emergency is a declared period of special parking rules so plows can clear streets. Each city here declares its own, and cars can be towed.",
    h1: "Snow emergency",
    eyebrow: "Glossary",
    lead: "The text arrives, and the car is on the wrong side of the street. A snow emergency is how a city clears the roads, and each one here has its own rules.",
    answer:
      "A snow emergency is a declaration by a city that triggers special parking rules so plows can fully clear the streets. Fargo, West Fargo, and Moorhead each declare and enforce their own, with their own rules and alerts. A car parked in violation can be ticketed or towed, so follow the rules for the city you are in.",
    term: {
      name: "Snow emergency",
      shortDefinition:
        "A declared period when a city enforces special parking rules for plowing. Each city here declares its own, and violations can be towed.",
    },
    takeaways: [
      "Each city declares its own.",
      "Special parking rules apply, and cars can be towed.",
      "Sign up for your city's alerts.",
      "Check the official source for current rules.",
    ],
    priority: 0.55,
    keywords: ["snow emergency Fargo", "snow emergency Moorhead", "snow emergency West Fargo", "snow parking rules Fargo"],
    sections: [
      {
        heading: "Three cities, three declarations",
        body: [
          "Fargo, West Fargo, and Moorhead are separate cities with separate plowing operations and separate alert systems. A declaration in one is not a declaration in another. If you live near a boundary, know which city your street belongs to before winter, not during it.",
        ],
      },
      {
        heading: "What to do",
        body: [
          "Sign up for your city's alerts. Read the residential plowing rules once in the fall. When a declaration lands, move the car where the rule says, not where it is convenient. The city, not an app, is the source for current rules.",
        ],
        bullets: [
          "Sign up for your city's alerts.",
          "Read the parking rules before winter.",
          "Move the car when the declaration says to.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "A neighbor cannot move your car for you, and nobody on Help Me knows the current declaration better than your city does. A neighbor can help dig out a car, which is a small favor. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
          NOT_911,
        ],
      },
    ],
    related: ["seasons/winter-in-fargo-moorhead", "seasons/blizzard-day", "guides/digging-out-after-a-snowstorm", "help/snow-help", "cities/fargo", "glossary/plow-berm"],
    faqs: [
      {
        q: "Where do I find the current snow emergency rules?",
        a: "On your city's official website or alert system. Rules differ between Fargo, West Fargo, and Moorhead.",
      },
      {
        q: "Can a neighbor move my car?",
        a: "No. Moving your car is your responsibility. A neighbor can help dig it out.",
      },
      {
        q: "Will I get towed?",
        a: "You can be ticketed or towed if you are parked in violation. Check your city's rules.",
      },
    ],
  }),
  page({
    slug: "glossary/wind-chill",
    kind: "glossary",
    title: "Wind chill in Fargo: why the number matters more",
    description:
      "Wind chill is how cold the air feels on exposed skin. In Fargo-Moorhead winters it decides how long you can stand outside. What to know before you do.",
    h1: "Wind chill",
    eyebrow: "Glossary",
    lead: "The thermometer says five below. The wind says otherwise. Here, the second number is the one that decides how long you can stand outside.",
    answer:
      "Wind chill is how cold the air feels on exposed skin when wind is added to the temperature. In Fargo-Moorhead winters it is the number that matters for how long you can safely stand outside. At very cold wind chills, exposed skin can freeze in under half an hour. Check the forecast and dress for the wind.",
    term: {
      name: "Wind chill",
      shortDefinition:
        "How cold the air feels on exposed skin when wind is added to the temperature.",
    },
    takeaways: [
      "It is how cold it feels, not the thermometer reading.",
      "Very low wind chills can freeze exposed skin quickly.",
      "Dress for the wind, and cover exposed skin.",
      "Do not wait outside for help in deep cold.",
    ],
    priority: 0.4,
    keywords: ["wind chill Fargo", "wind chill advisory", "frostbite Fargo", "how cold is Fargo"],
    sections: [
      {
        heading: "Why it matters here",
        body: [
          "The metro sits on flat open ground, so wind has room to run. A day at five below with a steady wind can feel far colder, and the forecast will show both numbers. The wind chill is what your skin experiences, so it is the one that decides your risk.",
        ],
      },
      {
        heading: "What to do",
        body: [
          "Cover exposed skin. Wear layers, a hat, and gloves rated for the cold, not fashion gloves. Limit time outside when the wind chill is low, and go indoors if your fingers or face start to go numb. Keep a blanket and warm gear in the car.",
        ],
        bullets: [
          "Cover your face and hands.",
          "Wear layers and real gloves.",
          "Do not wait outside for a neighbor.",
          "Go inside if skin goes numb.",
        ],
      },
      {
        heading: "Do not wait outside",
        body: [
          "A request on Help Me can take time, and a closed request is a bad reason to stand in the wind. In deep cold, wait inside a store or a lobby and ask from there. If you are in danger from the cold, call 911. " + "Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
          NOT_911,
        ],
      },
    ],
    related: ["seasons/polar-vortex-cold-snap", "seasons/winter-in-fargo-moorhead", "for-people-new-to-winter", "guides/what-to-keep-in-your-car-in-winter", "help/winter-car-help", "resources/winter-shelters-fargo"],
    faqs: [
      {
        q: "Is wind chill the same as the temperature?",
        a: "No. It is how cold it feels on exposed skin. Both numbers matter, but the wind chill decides your risk.",
      },
      {
        q: "How long can I stay outside?",
        a: "In very low wind chills, exposed skin can freeze in under half an hour. Cover up, and go inside early.",
      },
      {
        q: "Where do I get warm if I am stuck?",
        a: "A store, a library, or a lobby. The Resources pages list winter shelter options.",
      },
    ],
  }),
  page({
    slug: "glossary/fargo-moorhead-metro",
    kind: "glossary",
    title: "Fargo-Moorhead metro: two states, one place",
    description:
      "The Fargo-Moorhead metro spans Cass County, ND and Clay County, MN: Fargo, West Fargo, Moorhead, Dilworth, and the towns around them. How to read the map.",
    h1: "The Fargo-Moorhead metro",
    eyebrow: "Glossary",
    lead: "People work on one side of the river and sleep on the other. The metro is two states, two counties, and one lived-in place.",
    answer:
      "The Fargo-Moorhead metropolitan area covers Cass County, North Dakota and Clay County, Minnesota. Its core cities are Fargo and West Fargo in North Dakota and Moorhead and Dilworth in Minnesota, with commuter towns like Horace, Harwood, Casselton, Glyndon, and Hawley inside its daily orbit. Help Me is launching here, one zone at a time.",
    term: {
      name: "Fargo-Moorhead metro",
      shortDefinition:
        "The two-state metropolitan area centered on Fargo and West Fargo, ND and Moorhead and Dilworth, MN, spanning Cass and Clay Counties.",
    },
    takeaways: [
      "Two states: North Dakota and Minnesota.",
      "Two counties: Cass and Clay.",
      "911 works everywhere, but little else copies across the river.",
      "Help Me launches in Fargo, West Fargo, and Moorhead first.",
    ],
    priority: 0.55,
    keywords: ["Fargo-Moorhead metro", "Fargo Moorhead area", "Cass County Clay County", "FM area"],
    geo: { name: "Fargo–Moorhead", type: "Region", lat: 46.8772, lng: -96.7898 },
    sections: [
      {
        heading: "Why the river matters",
        body: [
          "911 works everywhere. Almost nothing else copies across. Police, city services, county human services, tenant law, and many assistance programs follow the state and county you are standing in. A phone number that solves a problem in Fargo may be irrelevant in Moorhead, six minutes away.",
        ],
      },
      {
        heading: "As one place",
        body: [
          "People live it as one place: they work on one side and sleep on the other. City and neighborhood pages describe that lived geography, while the Resources pages stay strict about which side of the river a service belongs to.",
        ],
        bullets: [
          "Fargo and West Fargo: Cass County, North Dakota.",
          "Moorhead and Dilworth: Clay County, Minnesota.",
          "Nearby towns grouped on one page.",
        ],
      },
      {
        heading: "Where Help Me fits",
        body: [
          "Help Me is a place to ask your block for the small stuff, and the block here sometimes sits across a river. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
          NOT_911,
        ],
      },
    ],
    related: ["cities", "cities/fargo", "cities/moorhead", "cities/west-fargo", "seasons/spring-thaw-and-flooding", "neighborhoods"],
    faqs: [
      {
        q: "Is Moorhead part of the Fargo metro?",
        a: "Yes. The Fargo-Moorhead metro includes Moorhead and Dilworth in Minnesota. They share jobs, schools, and roads with Fargo.",
      },
      {
        q: "Which towns count?",
        a: "Fargo, West Fargo, Moorhead, and Dilworth are the core, with Horace, Harwood, Casselton, Glyndon, Hawley, and others in the daily orbit.",
      },
      {
        q: "Why do I need to know which side of the river I am on?",
        a: "Police, county services, and many programs follow the state and county. 911 works everywhere, but other numbers differ.",
      },
    ],
  }),
];
