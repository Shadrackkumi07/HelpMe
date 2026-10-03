import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

/**
 * The small stuff. Every page here is a favor a neighbor can finish in a few
 * minutes, in a public place, in daylight when possible. Nothing that needs a
 * license, a tow truck, or 911 belongs here.
 */
export const HELP_PAGES: SeoPage[] = [
  page({
    slug: "help",
    kind: "hub",
    title: "The small stuff you can ask for on Help Me",
    description:
      "A phone charger, directions, a jump start in daylight, two more hands for a couch. The everyday favors Help Me is for in Fargo, West Fargo, and Moorhead.",
    h1: "The small stuff you can ask for",
    eyebrow: "The small stuff",
    lead: "The day stalls. Nobody is in danger. You still need a hand. These pages are the honest list of what that looks like in Fargo-Moorhead, and the equally honest list of what a neighbor is not.",
    answer:
      "Help Me is for small favors that take under five minutes in a public place: a phone charger, directions, a jump start in daylight, saving a seat, two more hands for something heavy. It is not for emergencies, repairs that need a license, or anything that needs a tow truck. Those have their own official help.",
    takeaways: [
      "One sentence is enough to ask. Details are optional.",
      "Favors are small, public, and done in minutes.",
      "Nothing that needs a license, a tow, or 911 belongs here.",
      "Help Me is not an emergency service.",
    ],
    priority: 0.9,
    keywords: ["ask for help Fargo", "jump start Fargo", "small favors Fargo-Moorhead", "ask a neighbor Moorhead", "Help Me favors"],
    sections: [
      {
        heading: "A sentence is enough",
        body: [
          "Open the map, choose I need help, pick a category, and add a sentence if you want. A category on its own still makes sense to a neighbor. Details and a public meeting-place label are optional. Your request is not posted to a timeline or argued over in a group thread. It is shown to helpers nearby who are online and suitable for the category.",
          "When someone says yes, a private chat opens between the two of you, you meet in public, and both of you mark it done. A request closes on its own after two hours, and you can have only one live request at a time.",
        ],
      },
      {
        heading: "Neighbors, not a marketplace",
        body: [
          "Help Me is not an emergency service, not campus police, not a paid marketplace, and not a locksmith or tow dispatch. A jump start is someone with cables. A flat tire is a spare and a jack, not a shop. If you need a contractor, hire a contractor.",
        ],
        bullets: [
          "Cars: a jump start in daylight, a flat tire, a shove out of snow.",
          "Walking: a walk to the car, a walk with someone, directions.",
          "Around town: a phone charger, a seat held, a lost item, a local guide.",
          "Hands: something heavy, a move-in, groceries up the stairs, tech help.",
        ],
      },
      {
        heading: "The ground rules do not change by topic",
        body: [
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Requests show as a rough area about 500 meters wide, and exact location is opt-in after someone says yes. You can report or block any member at any time, and delete your account from inside the app by typing DELETE. Help Me is in beta on TestFlight for iPhone (iOS 15 or later).",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["how-it-works", "ground-rules", "cities/fargo", "not-911", "helpers", "questions/what-can-i-ask-for"],
    faqs: [
      {
        q: "Is this a list of paid services?",
        a: "No. Help Me is not a paid marketplace. Helpers are neighbors who applied and were reviewed by our team. Do not expect a professional, an invoice, or an arrival time.",
      },
      {
        q: "What if my need is not listed?",
        a: "If it is small, public, and a neighbor could actually do it, ask in a sentence. If it needs a license, a tow truck, or 911, use that instead.",
      },
      {
        q: "What if nobody says yes?",
        a: "A request stays open up to two hours and then closes. You can try again. Only one live request at a time.",
      },
    ],
  }),
  page({
    slug: "help/jump-start",
    kind: "help",
    title: "Jump start help in Fargo-Moorhead, in daylight",
    description:
      "Ask a neighbor with jumper cables in Fargo, West Fargo, or Moorhead. Busy public lots, both people outside the car. Not a mechanic, a tow, or 911.",
    h1: "A jump start, from someone nearby",
    eyebrow: "The small stuff",
    lead: "The click. The dash that looks like a rumor of electricity. A Fargo winter kills batteries in public lots all over the metro, and the fix is usually a neighbor with cables, not a career.",
    answer:
      "To get a jump start through Help Me, post jump start with a sentence naming a busy public lot. A neighbor nearby can say yes, and you meet in daylight when you can, with both people outside the car. A neighbor is not a mechanic or a tow service, so call one if the car still will not start.",
    takeaways: [
      "Meet in a busy public lot, in daylight when you can.",
      "Both people stay outside the car, and follow the owner's manual.",
      "A neighbor is not a mechanic. If the jump does not work, call a shop or a tow.",
      "A car in a traffic lane or anyone hurt is a 911 call.",
    ],
    priority: 0.8,
    keywords: ["jump start Fargo", "dead battery Fargo", "jumper cables Fargo", "dead battery Moorhead", "jump start West Fargo"],
    sections: [
      {
        heading: "Where cars actually sit down",
        body: [
          "West Acres lots. Broadway street parking after a show. A campus ramp after a night class. The lots along 13th Avenue and Veterans Boulevard. A Moorhead lot off campus. A neighbor with cables can meet you in a public place like that and be done in ten minutes, long before a tow truck could arrive.",
          "A dead battery is the classic January ask, and also the classic August ask after a door was left ajar overnight. Cold makes it more common, not exclusive.",
        ],
      },
      {
        heading: "How the ask works",
        body: [
          "Post jump start. Add a sentence if you want, like West Acres, north lot. A helper nearby can say yes, and a private chat opens between the two of you. You decide what location to share. Meet in public, keep both people outside the car, and check the owner's manual for how to connect cables on your vehicle.",
          "When the engine runs, mark it done. If it does not, that is a battery or alternator problem, and the next step is a shop or a tow, not a longer conversation in a cold lot.",
        ],
        bullets: [
          "Name a busy public lot, not an alley or a quiet court.",
          "Daylight is better than dark, and a lit entrance is better than a far row.",
          "Keep a jump pack in the trunk if you can. It makes you independent of anyone.",
        ],
      },
      {
        heading: "What this is not",
        body: [
          "It is not roadside assistance you pay for, and nobody promises to arrive. If the car is in a traffic lane, if someone is hurt, or if it is more than a battery, call 911 or a tow, not an app. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["help/winter-car-help", "help/flat-tire", "how-it-works", "guides/how-to-jump-start-a-car", "cities/fargo", "neighborhoods/west-acres"],
    faqs: [
      {
        q: "Do I have to share my exact parking stall?",
        a: "No. The map shows a rough area about 500 meters wide. Exact location stays off until someone says yes and you agree. A public lot label is enough.",
      },
      {
        q: "What if the jump does not work?",
        a: "Then it was not only a cables problem. Call a shop or a tow. A neighbor is not obligated to diagnose an alternator in a windy lot.",
      },
      {
        q: "Is it okay to ask at a campus lot?",
        a: "Yes. Campus lots are a common place for it. Campus police still handle campus emergencies. Help Me is for small favors between neighbors.",
      },
    ],
  }),
  page({
    slug: "help/winter-car-help",
    kind: "help",
    title: "Winter car help in Fargo-Moorhead: doors, snow, batteries",
    description:
      "Frozen doors, a car packed in by snow, a windshield that will not clear, a dead battery. Winter car help from neighbors in Fargo, West Fargo, and Moorhead.",
    h1: "Winter car help, which is just Fargo from November on",
    eyebrow: "The small stuff",
    lead: "The season here is a mechanical fact. Doors freeze. Tires sit in ruts. Batteries quit. You need a person in a hat, not a metaphor about resilience.",
    answer:
      "Winter car help on Help Me means small favors from a neighbor: cables for a dead battery, a shovel or a push for a car stuck in a stall, a second pair of gloves for a frozen door. It is not a plow, a tow, or a thawing service. If anyone is in danger or the car is in a lane, call 911.",
    takeaways: [
      "Cables, a shovel, a push, and ten minutes are what a neighbor offers.",
      "A neighbor is not a plow, a tow, or a professional thawing service.",
      "Meet in a public lot, even when the weather is the story.",
      "A car in a traffic lane or anyone in danger is a 911 call.",
    ],
    priority: 0.78,
    keywords: ["winter car help Fargo", "frozen car door Fargo", "car stuck in snow Fargo", "frozen windshield", "dead battery winter Moorhead"],
    sections: [
      {
        heading: "What winter does to a car here",
        body: [
          "A packed-in stall behind a shopping center. A door that will not unstick on 13th Avenue. A campus ramp that looks plowed until you try to leave it. A driveway in West Fargo that is a neighbor job, not a city contract. A windshield with ice you cannot get off with a card. Winter car help is the bundle: cables, a shovel, a push, a second pair of gloves, and someone who will stand with you while you try the key again.",
        ],
        bullets: [
          "A dead battery on the coldest morning.",
          "A car stuck in a stall or a rut.",
          "A frozen door or a windshield that will not clear.",
          "A shove out of a drift in a public lot.",
        ],
      },
      {
        heading: "A neighbor is not a fleet",
        body: [
          "Help Me does not send a plow, a tow, or a professional with thawing tools. A neighbor nearby might have cables, a shovel, or ten minutes. If the car is in a lane, if someone is trapped, or if it is actually dangerous, call 911. If you need a contracted plow or a tow, call one.",
          "Keep the basics in the trunk: a jump pack, a shovel, a scraper, a blanket, and warm gloves. Those turn most winter car problems into your own problem to solve.",
        ],
      },
      {
        heading: "Meet in public, even when the weather is the story",
        body: [
          "A grocery entrance is still better than a dark residential street. Your request shows as a rough area about 500 meters wide until someone says yes. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["help/jump-start", "help/snow-help", "help/flat-tire", "guides/what-to-keep-in-your-car-in-winter", "seasons/winter-in-fargo-moorhead", "cities/fargo"],
    faqs: [
      {
        q: "Can someone dig my car out?",
        a: "A neighbor might shovel or push. They are not a plow service and not on a clock. Say what you need in one sentence.",
      },
      {
        q: "Is a frozen door a Help Me ask?",
        a: "If a neighbor can reasonably help and nobody is in danger, yes. If someone is trapped in a dangerous situation, call 911.",
      },
      {
        q: "Does this work in Moorhead and West Fargo too?",
        a: "Yes. Winter does not stop at the river or at Sheyenne Street. Help Me is local to the whole metro and shows your request to helpers nearby.",
      },
    ],
  }),
  page({
    slug: "help/flat-tire",
    kind: "help",
    title: "Flat tire help in Fargo-Moorhead: spare, jack, tire pressure",
    description:
      "A flat tire or low tire pressure in Fargo, West Fargo, or Moorhead: a neighbor with a jack, a pump, and a few minutes in a public lot. Not a shop or a tow.",
    h1: "A flat tire, in a lot where you can stop",
    eyebrow: "The small stuff",
    lead: "You hear it before you see it. Then you are in a grocery lot with a tire that looks like a deflated balloon and a spare you have never touched. Two more hands can change a small afternoon.",
    answer:
      "Help Me can connect you with a neighbor who has a jack, a pump, or a few minutes in a public lot to help with a flat tire or low tire pressure. Do it in a busy, lit lot, not on a road shoulder. A neighbor is not a tire shop or a tow truck, so call one if the tire is beyond a spare.",
    takeaways: [
      "Change a tire in a lot, not on a road shoulder or a traffic lane.",
      "A neighbor with a jack, a pump, or a gauge can save an hour.",
      "Cold lowers tire pressure, so check it when the weather drops.",
      "A neighbor is not a shop. Call one if the spare is not enough.",
    ],
    priority: 0.65,
    keywords: ["flat tire Fargo", "tire pressure Fargo winter", "low tire pressure cold", "flat tire Moorhead", "spare tire help"],
    sections: [
      {
        heading: "Where flats happen",
        body: [
          "A grocery lot. A campus ramp. The edge of a parking row at a mall. A driveway after a nail from a construction season. The good news about a lot is that it is flat, lit, and public, which is where a flat tire should be dealt with. The bad news is that most people have not changed a tire in years, and a spare can be as flat as the tire it replaces.",
        ],
        bullets: [
          "Two more hands to loosen stubborn lug nuts.",
          "A jack that actually works on your car.",
          "A portable pump or a gauge for low pressure.",
          "Someone who has done this before and knows the order.",
        ],
      },
      {
        heading: "Low pressure in the cold",
        body: [
          "Cold air lowers tire pressure, which is why the warning light often comes on during the first deep freeze of the season. Check your pressure against the number on the sticker inside your driver's door, not the number on the tire. A neighbor with a gauge or a pump can help, and a gas station air pump is usually nearby.",
        ],
      },
      {
        heading: "What a neighbor cannot do",
        body: [
          "A neighbor is not a tire shop or a tow service, and nobody promises a tire fix. If the tire is damaged beyond a spare, or if you are on a road shoulder, call roadside assistance or a tow, and call 911 if you are in a traffic lane. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["help/jump-start", "help/winter-car-help", "help/bike-help", "guides/what-to-do-if-your-car-wont-start", "cities/fargo", "how-it-works"],
    faqs: [
      {
        q: "Can a neighbor change my tire on the side of the road?",
        a: "No. Do not change a tire on a road shoulder or in a traffic lane. Move to a busy, lit lot if you can, and call roadside assistance or 911 if you cannot.",
      },
      {
        q: "Why does my tire light come on in the cold?",
        a: "Cold air lowers tire pressure. Check it against the number on the sticker inside the driver's door, and add air if it is low.",
      },
      {
        q: "What if the spare is flat too?",
        a: "Then it needs a shop or a tow. A neighbor can keep you company while you call, but cannot fix a damaged spare.",
      },
    ],
  }),
  page({
    slug: "help/bike-help",
    kind: "help",
    title: "Bike help in Fargo-Moorhead: pump, chain, a quick fix",
    description:
      "A flat bike tire, a slipped chain, a loose seat in Fargo or Moorhead. A neighbor with a pump and a few minutes. Not a bike shop, and not a repair service.",
    h1: "Bike help, from someone with a pump",
    eyebrow: "The small stuff",
    lead: "Fargo-Moorhead is flat, which is why so many people bike, and why a flat tire on the way to class feels so unfair. Sometimes all you need is someone with a pump.",
    answer:
      "Help Me is a place to ask a neighbor for quick bike help in Fargo, West Fargo, or Moorhead: a pump for a flat tire, a hand with a slipped chain, a seat that needs tightening. Meet in a public place. A neighbor is not a bike shop, so a bent wheel or a broken part needs a real repair.",
    takeaways: [
      "A pump, a hex key, or a minute of experience is what a neighbor offers.",
      "Meet in a public place, like a bike rack by a library or a union.",
      "A bent wheel or a broken part needs a bike shop.",
      "In danger, call 911.",
    ],
    priority: 0.5,
    keywords: ["bike help Fargo", "flat bike tire Moorhead", "bike pump Fargo", "bike repair near me Fargo", "bike chain help"],
    sections: [
      {
        heading: "The ordinary bike problems",
        body: [
          "A tire that went soft overnight. A chain that slipped off the gear. A seat that dropped. A brake that rubs. Most of these take five minutes and a small tool, and most people do not carry the tool. A neighbor who bikes probably does.",
          "The metro is built for riding more than most places its size: the Red River trails, the paths along the river, and campus routes between NDSU and the Minnesota side. A quick fix keeps a commute going.",
        ],
        bullets: [
          "A pump for a soft tire.",
          "A hex key for a loose seat or handlebar.",
          "A hand putting a chain back on a gear.",
          "A second opinion on whether it needs a shop.",
        ],
      },
      {
        heading: "Where to meet",
        body: [
          "Meet in a public place with other people around, like a bike rack at a library, a union, or a store. Your request shows as a rough area about 500 meters wide, and you choose when to share more. Bikes and winter do not mix well, so in deep cold the right answer is often a bus, not a repair.",
        ],
      },
      {
        heading: "What a neighbor is not",
        body: [
          "A neighbor is not a bike shop. A bent wheel, a broken derailleur, or anything that needs parts is a shop job. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["help/flat-tire", "help/directions", "help/transit-help", "cities/fargo", "cities/moorhead", "how-it-works"],
    faqs: [
      {
        q: "Can someone repair my bike for me?",
        a: "A neighbor might help with a pump or a loose seat. Anything bigger is a bike shop job, and nobody on Help Me is paid or promises a repair.",
      },
      {
        q: "Where should we meet for a bike fix?",
        a: "A public spot with people around, like a bike rack at a library or a union. You choose the label.",
      },
      {
        q: "Does this work in winter?",
        a: "It can, but deep cold is hard on bikes and riders. Often the better answer is a bus. See the MATBUS page for routes.",
      },
    ],
  }),
  page({
    slug: "help/snow-help",
    kind: "help",
    title: "Snow help in Fargo-Moorhead: shoveling, berms, a push",
    description:
      "A berm behind your car, a long sidewalk, a driveway after the plow: snow help from neighbors in Fargo, West Fargo, and Moorhead. Not a plow or a service.",
    h1: "Snow help, when the plow leaves a gift",
    eyebrow: "The small stuff",
    lead: "The plow came through and left a wall of packed snow behind your car. It is not a big job. It is a heavy one, and a second shovel makes it half as long.",
    answer:
      "Help Me can connect you with a neighbor who has a shovel and a few minutes to help with snow in Fargo, West Fargo, or Moorhead: a berm behind a car, a walk to the door, a push out of a rut. A neighbor is not a plow service or a snow-removal contractor, and nobody is on a clock.",
    takeaways: [
      "A shovel and ten minutes is what a neighbor offers.",
      "A neighbor is not a plow or a snow-removal contractor.",
      "Heavy snow is hard on backs, so ask for a hand early.",
      "In danger, call 911.",
    ],
    priority: 0.6,
    keywords: ["snow help Fargo", "shovel snow Fargo", "plow berm Fargo", "snow removal help Moorhead", "digging out Fargo"],
    sections: [
      {
        heading: "The jobs that fit",
        body: [
          "The berm the plow leaves behind a parked car. The last stretch of a walk to the door. A push for a car stuck in a rut. Most of these are small, heavy, and over faster with two people. They are the kind of job people used to do for each other without thinking about it.",
          "After a big storm, the whole metro digs out at the same time. A neighbor who finishes early might have a few minutes for someone else, and a request can reach them without anyone having to knock on a door.",
        ],
        bullets: [
          "Shoveling a berm behind a car.",
          "Clearing a short walk or a set of steps.",
          "A push for a car stuck in a rut.",
          "Two more hands for heavy, wet snow.",
        ],
      },
      {
        heading: "Safety on the shovel",
        body: [
          "Heavy snow is hard on the heart and back, especially for older adults. If a job is more than a few minutes, hire a contractor. If someone is having chest pain or trouble breathing, call 911. A request for a hand is a good use of Help Me. A request for something that could hurt you is not.",
        ],
      },
      {
        heading: "Meet in public, work in public",
        body: [
          "Snow help often happens in public lots, shared driveways, or on a street in front of your own door. Your request shows as a rough area about 500 meters wide until someone says yes. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["help/winter-car-help", "guides/digging-out-after-a-snowstorm", "seasons/winter-in-fargo-moorhead", "for-seniors", "cities/fargo", "how-it-works"],
    faqs: [
      {
        q: "Will someone plow my driveway?",
        a: "No. Help Me is not a plow or snow-removal service. A neighbor might shovel a small area with you, for free, if they have a few minutes.",
      },
      {
        q: "Is it okay to ask if I have health problems?",
        a: "Yes, and it is a good reason to ask. Heavy snow is hard on the heart. If you are having chest pain or trouble breathing, call 911.",
      },
      {
        q: "Where does this happen?",
        a: "Usually in a public lot or in front of your own place. You choose whether to share more of your location after someone says yes.",
      },
    ],
  }),
  page({
    slug: "help/locked-out",
    kind: "help",
    title: "Locked out in Fargo-Moorhead: neighbors, not locksmiths",
    description:
      "Locked out of a car or building in Fargo, West Fargo, or Moorhead? A neighbor might keep you company while you call. They are not a locksmith.",
    h1: "Locked out. A neighbor is not a locksmith.",
    eyebrow: "The small stuff",
    lead: "Keys in the ignition, you on the sidewalk, Broadway going by like nothing happened. Someone nearby might have a spare minute. That is not the same as a licensed locksmith, and nobody pretends it is.",
    answer:
      "If you are locked out in Fargo, West Fargo, or Moorhead, a neighbor on Help Me might keep you company, lend you a phone charger, or help you reach a locksmith, but cannot be expected to open your car or door. For a locked car with a child or pet inside, call 911 immediately.",
    takeaways: [
      "A neighbor is not a locksmith and should not force a lock.",
      "Company, a charger, and a phone call are fair asks.",
      "A child or pet in a locked car is a 911 call.",
      "Apartment locks belong to the landlord or a locksmith.",
    ],
    priority: 0.55,
    keywords: ["locked out Fargo", "locked out of car Fargo", "locksmith Fargo", "locked out Moorhead", "keys locked in car"],
    sections: [
      {
        heading: "Say the limitation before the hope",
        body: [
          "A helper on Help Me is a neighbor who applied and was reviewed by our team. They might hold a spare key you already gave them. They might stand with you while you call a locksmith. They might lend you a charger so your phone survives the wait. They probably cannot get into your car, and that is the usual case. Do not post this ask expecting professional tools.",
        ],
      },
      {
        heading: "Cars and apartments are different problems",
        body: [
          "A car in a busy lot is a public, visible problem. It is still not a license to force a door. An apartment lock belongs to a landlord, a locksmith, or the person you live with. Help Me is not a way around that. If a child or a pet is in danger inside a locked car, call 911 immediately, not an app.",
        ],
        bullets: [
          "A phone charger while you wait on a locksmith.",
          "Company in a public lot until help arrives.",
          "Directions to the nearest place with a spare key.",
        ],
      },
      {
        heading: "How to ask without fooling yourself",
        body: [
          "Post locked out and write the honest sentence: keys in the car, need company and a charger while I wait. Meet in public. Chat is private, and exact location stays off until you agree. If the real need is a locksmith, call a locksmith. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["help/jump-start", "help/walk-to-car", "how-it-works", "ground-rules", "not-911", "cities/fargo"],
    faqs: [
      {
        q: "Will a neighbor open my car?",
        a: "Probably not, and they should not be asked to force a lock. They are neighbors, not locksmiths. Call a professional if you need the door opened.",
      },
      {
        q: "What if a child is locked in the car?",
        a: "Call 911 immediately. Do not wait on an app. Help Me is not emergency response.",
      },
      {
        q: "Can I get a spare key from someone nearby?",
        a: "Only from someone you already trust with one. Help Me does not hold keys, and a neighbor you just met should not be handed one.",
      },
    ],
  }),
  page({
    slug: "help/walk-with-someone",
    kind: "help",
    title: "A walk with someone in Fargo-Moorhead, at night or day",
    description:
      "Ask a neighbor to walk with you on a public route in Fargo, West Fargo, or Moorhead. Company, not a patrol. Not an official campus escort and not 911.",
    h1: "A walk with someone, on purpose",
    eyebrow: "The small stuff",
    lead: "The block is lit and still feels long. You want a second pair of feet, not a squad car. That is a walk with someone: a neighbor, a public sidewalk, a destination you both understand.",
    answer:
      "On Help Me you can ask a neighbor to walk with you on a public route in Fargo, West Fargo, or Moorhead. It is company, not a patrol. A neighbor is not a guard, an officer, or an official campus escort. If someone is in danger, call 911. Campus public safety offices run official escorts.",
    takeaways: [
      "It is company on a public route, not a patrol.",
      "Meet in a public place and walk a public route.",
      "Official campus escorts go through campus public safety.",
      "In danger, call 911 or your local emergency number.",
    ],
    priority: 0.65,
    keywords: ["walk with someone Fargo", "walk to car Fargo", "walking company Moorhead", "campus escort Fargo", "walk home Fargo"],
    sections: [
      {
        heading: "Public ground, two people, one destination",
        body: [
          "Downtown Broadway. A stretch from a library to a lot. A walk from a bus stop to a lit door. You post the ask and a neighbor can say yes. A private chat opens, you meet in a public place, and you walk a public route. If someone is following you or threatening you, call 911 first. Help Me is the everyday version of company.",
        ],
        bullets: [
          "A walk from a library to a parking lot.",
          "A stretch from a bus stop to your door.",
          "Company on a long, dark block.",
        ],
      },
      {
        heading: "This is not a patrol",
        body: [
          "Help Me does not dispatch security. Helpers are not guards, not off-duty officers, and not a watch program. They are neighbors who applied and were reviewed by our team, and who said they could walk with someone. Helpers can apply to be reviewed by our team. Help Me does not run background checks. Leave if anything feels off. You can report or block any member at any time.",
        ],
      },
      {
        heading: "Campus walks have an official option",
        body: [
          "NDSU Police, MSUM Public Safety, and Concordia Public Safety run official campus escort programs. Use those when you want the institution. A walk with someone through Help Me is a neighbor favor, not campus police.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["help/walk-to-car", "ground-rules", "not-911", "how-it-works", "cities/fargo", "campuses/ndsu"],
    faqs: [
      {
        q: "Is a walk with someone an emergency response?",
        a: "No. If you are in danger, call 911. A walk with someone is everyday company on a public route.",
      },
      {
        q: "Can I see the neighbor's exact location first?",
        a: "The open map shows a rough area about 500 meters wide. Exact sharing is opt-in after someone says yes, and only with that person.",
      },
      {
        q: "What if I want an official campus escort?",
        a: "Call NDSU Police, MSUM Public Safety, or Concordia Public Safety. Help Me is not those offices.",
      },
    ],
  }),
  page({
    slug: "help/walk-to-car",
    kind: "help",
    title: "Walk to the car in Fargo-Moorhead: ramps, lots, malls",
    description:
      "A walk from the library, the mall, or a ramp to your car in Fargo or Moorhead. Company from a neighbor in a public place. Not campus police, and not 911.",
    h1: "Walk me to the car",
    eyebrow: "The small stuff",
    lead: "The building was full and the lot is not. A campus ramp after a late class, West Acres after the stores close, a Moorhead lot off campus. A walk to the car is the smallest ask that still changes the walk.",
    answer:
      "On Help Me you can ask a neighbor to walk with you to your car from a library, mall, or ramp in Fargo or Moorhead. Name a public meeting point, like the union doors or a mall entrance. It is company, not security. For an official campus escort, call campus public safety. In danger, call 911.",
    takeaways: [
      "Name a public meeting point, like an entrance or a lobby.",
      "It is company on a short walk, not security.",
      "Official campus escorts go through campus public safety.",
      "In danger, call 911.",
    ],
    priority: 0.62,
    keywords: ["walk to car Fargo", "ramp walk NDSU", "West Acres parking lot", "walk me to my car", "late class Moorhead"],
    sections: [
      {
        heading: "The lots this metro actually uses",
        body: [
          "Campus ramps after a late class. West Acres when the stores have thinned out. A Broadway garage. A lot at MSUM or Concordia. The commercial strip on 13th Avenue. You want someone to walk the distance with you, not a debate about streetlights in a group chat.",
        ],
        bullets: [
          "A campus ramp after a late class.",
          "A mall lot after closing.",
          "A downtown garage after an event.",
          "A library lot on a winter evening.",
        ],
      },
      {
        heading: "Ask it as a neighbor walk",
        body: [
          "Post walk to the car and name a public meeting point if you want: the union doors, a mall entrance, the library steps. A neighbor can say yes, and a private chat opens. Your request shows as a rough area about 500 meters wide. You walk together in public and you are done. They are not a driver, a guard, or on a shift.",
        ],
      },
      {
        heading: "If it is more than a walk",
        body: [
          "If someone is following you, a threat is involved, or someone needs medical help, call 911 or campus police. NDSU, MSUM, and Concordia each have an official public safety number. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["help/walk-with-someone", "ground-rules", "not-911", "how-it-works", "cities/fargo", "campuses/ndsu"],
    faqs: [
      {
        q: "Can a neighbor walk me through a campus ramp?",
        a: "Yes, if someone says yes. For an official campus escort, call campus public safety instead.",
      },
      {
        q: "Do I share my stall number?",
        a: "Only if you want to, after someone says yes. A building entrance is a better meeting label.",
      },
      {
        q: "What about West Acres specifically?",
        a: "A mall lot is a common public place for this ask. Meet inside a vestibule first if the lot looks empty.",
      },
    ],
  }),
  page({
    slug: "help/study-buddy",
    kind: "help",
    title: "Find a study buddy in Fargo-Moorhead: library or union",
    description:
      "Ask for a study session near NDSU, MSUM, or Concordia: a union table, a library floor, a coffee shop. Not paid tutoring, and not a dating app.",
    h1: "A study buddy, without a group chat of 200",
    eyebrow: "The small stuff",
    lead: "You need another person at the table, not a performance in a class chat. Help Me can ask neighbors nearby for a study session. It cannot sell you a grade.",
    answer:
      "On Help Me you can ask for a study buddy in Fargo or Moorhead: post study buddy, add the subject in a sentence if you want, and meet in a public place like a union table or a library floor. It is not paid tutoring and not a dating app. Meet in public, and report or block anyone at any time.",
    takeaways: [
      "Meet at a union, a library, or a coffee shop.",
      "It is a person at a table, not paid tutoring.",
      "Help Me is for adults.",
      "Report or block any member at any time.",
    ],
    priority: 0.55,
    keywords: ["study buddy Fargo", "study partner NDSU", "study group Moorhead", "study session MSUM", "library study Fargo"],
    sections: [
      {
        heading: "The tables this is built for",
        body: [
          "A union. A library floor. A campus building you can actually find. A coffee shop on Broadway or Center Avenue. Post study buddy, add the subject in a sentence if you want, and meet in public. The point is a table with another adult, not a private apartment and not a paid tutoring shop.",
          "Sometimes the goal is a person who knows the class. Sometimes the goal is just a person who is there, so you stay. Both are fine.",
        ],
      },
      {
        heading: "Not a tutor marketplace",
        body: [
          "Helpers are neighbors who applied and were reviewed by our team. They might be good at the class, or they might only be good at sitting there so you stay. They are not contractors. If you want a professional tutor, use the official academic resources at your college. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
        ],
      },
      {
        heading: "Adults, public places",
        body: [
          "Help Me is an adult community app. It is not designed for children and it is not a homework network. Public places, private chat, report and block work the same way as every other ask. Your request shows as a rough area about 500 meters wide.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["campuses/ndsu", "campuses/msum", "campuses/concordia", "help/tech-support", "how-it-works", "ground-rules"],
    faqs: [
      {
        q: "Is this a paid tutor?",
        a: "No. Help Me is not a paid marketplace. If you need professional tutoring, use your college's academic resources.",
      },
      {
        q: "Where should we meet?",
        a: "A public place like a union, a library, or a coffee shop. Exact location is optional after someone says yes.",
      },
      {
        q: "Can I ask for a specific subject?",
        a: "Yes, in a sentence. A neighbor who knows it can say yes, but nobody is promised to be an expert.",
      },
    ],
  }),
  page({
    slug: "help/tech-support",
    kind: "help",
    title: "Tech help from a neighbor in Fargo-Moorhead: Wi-Fi, printing",
    description:
      "A Wi-Fi setting, a printer queue, a phone login: ask a neighbor in Fargo, West Fargo, or Moorhead. Meet in public. Not campus IT, and not a repair shop.",
    h1: "Tech help, the neighbor kind",
    eyebrow: "The small stuff",
    lead: "The laptop is a brick and the assignment is due. Someone nearby might know the setting. They are not campus IT, and they are not a repair shop.",
    answer:
      "On Help Me you can ask a neighbor for small tech help in Fargo, West Fargo, or Moorhead: a Wi-Fi setting, a printer queue, a phone login. Meet in a public place and look at the screen together. Never share passwords. A neighbor is not campus IT or a repair shop, so hardware problems need a real fix.",
    takeaways: [
      "Meet in public and look at the screen together.",
      "Never share passwords or install remote-control software for someone you just met.",
      "Campus IT and repair shops still exist for bigger problems.",
      "A hardware problem needs a shop.",
    ],
    priority: 0.55,
    keywords: ["tech help Fargo", "printer help NDSU", "Wi-Fi help Moorhead", "laptop help Fargo", "phone help neighbor"],
    sections: [
      {
        heading: "What a neighbor can actually fix",
        body: [
          "A Wi-Fi toggle. A printer queue that is stuck. An iPhone setting. A login screen that looks haunted. Meet in a public place like a union, a library, or a coffee shop and look at the thing together. A neighbor might solve it in ten minutes. They might tell you it is hardware and walk away. Both are honest outcomes.",
          "Campus print stations and Wi-Fi networks cause a surprising share of the problems, and the fix is often one setting. Knowing which setting is the whole favor.",
        ],
        bullets: [
          "A Wi-Fi or network setting.",
          "A stuck print queue.",
          "A phone or laptop login problem.",
          "A second opinion on whether it needs a shop.",
        ],
      },
      {
        heading: "Campus IT still exists",
        body: [
          "NDSU, MSUM, and Concordia run official technology help. Use those offices for accounts, campus systems, and anything that needs an employee. A neighbor on Help Me is not a trained technician, not a student worker on a shift, and not a replacement for the help desk.",
        ],
      },
      {
        heading: "Do not hand over the keys to your life",
        body: [
          "Do not share passwords. Do not install remote-access tools for someone you just met. Watch the screen together, in public. If it feels wrong, leave, and report or block the member. If you think you are being scammed, contact the official channels. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["campuses/ndsu", "campuses/msum", "how-it-works", "ground-rules", "cities/fargo", "help/study-buddy"],
    faqs: [
      {
        q: "Will a neighbor fix my laptop for money?",
        a: "No. Help Me is not paid tech support. A neighbor might look at a setting with you. For a real repair, use a shop.",
      },
      {
        q: "Is this campus IT?",
        a: "No. Campus technology offices stay the official source for campus accounts and systems.",
      },
      {
        q: "Should I give them my password?",
        a: "No. Sit together in public and keep your logins to yourself. If someone asks for remote control of your device, leave and report.",
      },
    ],
  }),
  page({
    slug: "help/directions",
    kind: "help",
    title: "Directions in Fargo-Moorhead: campuses, Broadway, bridges",
    description:
      "Lost on campus, looking for Broadway, or new to Moorhead? Ask a neighbor for directions. Not a tour company, and not campus police.",
    h1: "Directions, because this grid only looks simple",
    eyebrow: "The small stuff",
    lead: "Numbered streets, a river that is a state line, and several campuses that all have something called the union. A person standing there still beats a blue dot that thinks 12th is 13th.",
    answer:
      "On Help Me you can ask a neighbor for directions in Fargo, West Fargo, or Moorhead: the right hall on a campus, the right side of the river, the right door on Broadway. Meet in a public place, and a neighbor can walk you to the entrance. A neighbor is not a tour company or campus police.",
    takeaways: [
      "Directions are a classic small ask, answered in a minute.",
      "Meet in a public, obvious place, like a union door.",
      "A neighbor can point you or walk you to the entrance.",
      "Help Me is not an emergency service.",
    ],
    priority: 0.55,
    keywords: ["directions Fargo", "lost on campus NDSU", "find building Moorhead", "Broadway Fargo directions", "new in Fargo directions"],
    sections: [
      {
        heading: "The places people actually miss",
        body: [
          "A lecture hall on a campus that is not where the map pin claimed. Concordia versus MSUM when you are new to Moorhead. Downtown Broadway when GPS drops you on a one-way. West Acres from campus without the scenic loop on I-29. Post directions and meet in a public, obvious place, like a union door, a coffee shop, or a well-lit corner.",
          "Circling a building twice and walking in late is one of the most common small frustrations in the metro, and one of the easiest to fix with a person.",
        ],
      },
      {
        heading: "A neighbor is not a tour",
        body: [
          "A neighbor can point, or walk with you to the entrance, which is often enough. They are not a tour guide, not campus staff, and not a paid service. If you need an official campus map, use the college's own site. If you are lost and in danger, call 911.",
        ],
        bullets: [
          "The right hall or the right door on a campus.",
          "Which side of the river an address is on.",
          "Where to park for a Broadway event.",
          "How to find a bus stop.",
        ],
      },
      {
        heading: "Quick and public",
        body: [
          "This is the smallest ask there is. Your request shows as a rough area about 500 meters wide, and a neighbor can say yes in a minute. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["help/local-guide", "help/transit-help", "campuses/ndsu", "campuses/msum", "cities/fargo", "guides/new-to-fargo"],
    faqs: [
      {
        q: "Is a neighbor a better guide than a map app?",
        a: "Sometimes. A neighbor knows which door is open and which entrance is locked, which no map can tell you.",
      },
      {
        q: "Can someone walk me to the building?",
        a: "Yes, if a neighbor says yes. Meet in a public place and walk a public route.",
      },
      {
        q: "Is this an official campus service?",
        a: "No. Campus offices have official maps and visitor information. Help Me is a neighbor favor.",
      },
    ],
  }),
  page({
    slug: "help/local-guide",
    kind: "help",
    title: "A local guide in Fargo-Moorhead: ask someone who lives here",
    description:
      "New to Fargo, West Fargo, or Moorhead? Ask a neighbor where to park, where to eat, and which side of the river to be on. Not a tour, and not a review site.",
    h1: "A local guide, for a minute",
    eyebrow: "The small stuff",
    lead: "You know the big names. You do not know where to park on Broadway on a game weekend, which entrance is open at night, or why everyone says the river is the line. Someone who lives here can tell you in a sentence.",
    answer:
      "On Help Me you can ask a neighbor for a quick local tip in Fargo, West Fargo, or Moorhead: where to park for an event, which entrance is open, where to find a pharmacy. It is a minute of local knowledge, not a tour or a review. For official information, use the city or the venue.",
    takeaways: [
      "A minute of local knowledge from someone who lives here.",
      "Good for parking, entrances, and which side of the river to be on.",
      "Not a tour, a review site, or official information.",
      "For emergencies, call 911.",
    ],
    priority: 0.5,
    keywords: ["local guide Fargo", "new to Fargo tips", "where to park Fargo", "Moorhead tips", "ask a local Fargo"],
    sections: [
      {
        heading: "The kind of question this is for",
        body: [
          "Where to park downtown during a show. Which entrance is open after hours. Which pharmacy is open late. How the bridge works between Fargo and Moorhead. Which bus actually goes where you are headed. These are one-sentence answers for someone who lives here and a half-hour of confusion for someone who does not.",
          "Everyone was new here once. Most people remember who helped them find their way, and are glad to pass it on.",
        ],
        bullets: [
          "Where to park for an event.",
          "Which entrance or door to use.",
          "Which side of the river a place is on.",
          "A quick tip on a bus stop or a route.",
        ],
      },
      {
        heading: "What it is not",
        body: [
          "A local guide is not a tour, a review site, or an official source. If you need hours, rates, or rules, check the venue or the city. If you need a map, use a map. Help Me is for a neighbor's minute of context, in a public place, at no cost.",
        ],
      },
      {
        heading: "Quick, public, and free",
        body: [
          "Ask in a sentence and meet in a public place if it needs a meeting at all. Your request shows as a rough area about 500 meters wide. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["help/directions", "help/transit-help", "guides/new-to-fargo", "for-newcomers", "lists/things-to-do-in-fargo", "cities/fargo"],
    faqs: [
      {
        q: "Is this like a travel guide?",
        a: "No. It is a minute of local knowledge from a neighbor, not a tour or a review.",
      },
      {
        q: "Can I ask where to eat?",
        a: "Yes, as a casual question. A neighbor's opinion is just that, and Help Me does not rank businesses.",
      },
      {
        q: "Who pays?",
        a: "Nobody. There is no payment, tipping, or fee in the app.",
      },
    ],
  }),
  page({
    slug: "help/transit-help",
    kind: "help",
    title: "Bus help in Fargo-Moorhead: MATBUS stops and routes",
    description:
      "Which bus, which stop, which side of the river? Ask a neighbor in Fargo, West Fargo, or Moorhead about MATBUS. Not the transit agency, and not a driver.",
    h1: "Which bus, and where does it stop?",
    eyebrow: "The small stuff",
    lead: "MATBUS covers the metro and the campuses, and it is easy to use once you know it. The first week is the hard part. A neighbor can save you a missed bus.",
    answer:
      "On Help Me you can ask a neighbor about MATBUS in Fargo, West Fargo, or Moorhead: which route goes where, where a stop is, how a transfer works. It is local knowledge, not official schedule information. For current routes and times, use MATBUS directly. Help Me does not arrange transportation.",
    takeaways: [
      "A neighbor can tell you which bus and which stop.",
      "MATBUS is the official source for routes and times.",
      "Help Me does not arrange transportation.",
      "Winter changes how long you can wait at a stop.",
    ],
    priority: 0.5,
    keywords: ["MATBUS help", "bus stop Fargo", "MATBUS routes", "transit Moorhead", "bus campus Fargo"],
    sections: [
      {
        heading: "The first-week questions",
        body: [
          "Which route goes to campus. Where the stop actually is. How to transfer between the Fargo and Moorhead sides. What the last bus is on a weeknight. These are small questions with big consequences for someone without a car, and a neighbor who takes the bus can answer them in a sentence.",
        ],
        bullets: [
          "Which route to take to campus or work.",
          "Where the stop actually is.",
          "How to transfer across the river.",
          "When the last bus of the evening runs.",
        ],
      },
      {
        heading: "MATBUS is the official source",
        body: [
          "MATBUS publishes routes, schedules, and updates. Check the official source for current information, especially in winter, when delays and detours happen. A neighbor can describe how a route feels in practice, but only MATBUS can tell you what it runs today.",
          "Winter changes the calculation. A bus that runs every half hour is a real wait at fifteen below. Dress for the stop, not the trip.",
        ],
      },
      {
        heading: "Not a driver",
        body: [
          "Help Me does not arrange transportation of any kind. A neighbor is not a driver, and asking for a lift is not what the app is for. Meet in a public place if the question needs a meeting at all. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["resources/matbus", "help/directions", "guides/how-to-use-matbus", "for-people-without-a-car", "cities/fargo", "cities/moorhead"],
    faqs: [
      {
        q: "Can a neighbor drive me somewhere?",
        a: "No. Help Me does not arrange transportation. MATBUS and rideshare services cover that.",
      },
      {
        q: "Is a neighbor's answer official?",
        a: "No. MATBUS is the official source for routes and times. A neighbor can share what a route is like in practice.",
      },
      {
        q: "Does MATBUS serve both Fargo and Moorhead?",
        a: "Yes, MATBUS serves the metro. Check the official source for current routes and hours.",
      },
    ],
  }),
  page({
    slug: "help/lost-and-found",
    kind: "help",
    title: "Lost and found in Fargo-Moorhead: wallets, keys, phones",
    description:
      "Left a wallet, keys, or a phone behind in Fargo, West Fargo, or Moorhead? Ask neighbors nearby. Not an official lost-and-found, and not a search party.",
    h1: "Lost something? Ask the block.",
    eyebrow: "The small stuff",
    lead: "The wallet was on the table, and then it was not. The phone is somewhere between the library and the car. Someone nearby might have seen it, or might be holding it right now.",
    answer:
      "On Help Me you can ask neighbors nearby about a lost wallet, keys, or phone in Fargo, West Fargo, or Moorhead. Name the public place you were last, and a neighbor may be able to look. It is not an official lost-and-found, so also contact the venue, campus, or police non-emergency line.",
    takeaways: [
      "Name the public place you were last.",
      "Also contact the venue, campus, or police non-emergency line.",
      "Do not offer a reward or share more than you need to.",
      "Help Me is not an emergency service.",
    ],
    priority: 0.5,
    keywords: ["lost wallet Fargo", "lost keys Moorhead", "lost phone Fargo", "lost and found Fargo", "found phone West Fargo"],
    sections: [
      {
        heading: "Where things get lost here",
        body: [
          "A mall food court at West Acres. A campus library table. A coffee shop on Broadway. A bus seat. A parking lot after a game. Most lost items end up one of two places: with a venue that has a lost-and-found, or with a person who picked them up and wants to return them.",
          "A request on Help Me can reach that second group, without posting your phone number or your wallet's contents to a public thread.",
        ],
      },
      {
        heading: "Do the official things too",
        body: [
          "Contact the venue, the campus public safety office, or the police non-emergency line, and call your bank if a card is involved. Help Me is not an official lost-and-found, and a neighbor nearby cannot replace a call to the place that may actually be holding the item.",
        ],
        bullets: [
          "Call the venue or campus lost-and-found.",
          "Call the police non-emergency line for anything valuable.",
          "Freeze a card if a wallet is gone.",
          "Describe the item, not what is inside it.",
        ],
      },
      {
        heading: "Share the least you need to",
        body: [
          "Describe the item and where you were. Do not post an ID number, a card number, or an address. Meet in a public place for any return. Your request shows as a rough area about 500 meters wide. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["help/directions", "neighborhoods/west-acres", "how-it-works", "ground-rules", "cities/fargo", "resources/fargo-police"],
    faqs: [
      {
        q: "Will someone find my lost item?",
        a: "Maybe. A neighbor nearby might have seen it or might be holding it. Also contact the venue, campus, or police non-emergency line.",
      },
      {
        q: "Should I offer a reward?",
        a: "No. Rewards attract the wrong attention. Ask in a sentence and meet in public for a return.",
      },
      {
        q: "What if my phone is lost?",
        a: "Use your phone's own find-my feature first, and contact your carrier. A neighbor can look around the last public place you were.",
      },
    ],
  }),
  page({
    slug: "help/heavy-lifting",
    kind: "help",
    title: "Heavy lifting help in Fargo-Moorhead: couches and boxes",
    description:
      "Two more hands for a couch, a box of books, or a flat-pack desk in Fargo, West Fargo, or Moorhead. Neighbors, not movers. Meet at a public entrance.",
    h1: "Two more hands for something heavy",
    eyebrow: "The small stuff",
    lead: "The couch will not turn the corner. The desk is flat-packed and the instructions are in a language that is mostly arrows. Almost anything gets easier with a second person.",
    answer:
      "On Help Me you can ask a neighbor for two more hands with something heavy in Fargo, West Fargo, or Moorhead: a couch, a box of books, a flat-pack desk. Meet at a public entrance or a ground floor, not inside a unit. A neighbor is not a mover, so large or fragile jobs need professionals.",
    takeaways: [
      "A few heavy items, not a whole move.",
      "Meet at a public entrance or the ground floor, not inside a unit.",
      "A neighbor is not a mover, and nobody covers damage to your things.",
      "Hire movers for fragile or very large jobs.",
    ],
    priority: 0.6,
    keywords: ["heavy lifting help Fargo", "couch move Fargo", "furniture assembly Fargo", "two hands help Moorhead", "carry help West Fargo"],
    sections: [
      {
        heading: "What two hands changes",
        body: [
          "A couch on a narrow stairwell. A mattress in a hallway. A box of books that is heavier than it looks. A flat-pack desk that needs someone to hold the other end. A fridge that needs a dolly and a second set of arms. Most of these are ten-minute jobs for two people and an hour-long argument for one.",
          "In a metro where everyone moves at the same time of year, the person with a free ten minutes is probably already carrying something nearby.",
        ],
        bullets: [
          "A couch or chair on stairs.",
          "A box of books or a heavy bag.",
          "A flat-pack desk, shelf, or bed frame.",
          "A mattress in a tight hallway.",
        ],
      },
      {
        heading: "Keep it small and public",
        body: [
          "Meet at the building entrance or the ground floor, not inside a unit, until you both decide otherwise. Name the public place in your request. A neighbor is not a mover, and nobody covers damage to your things, so for a whole apartment, a fridge on an upper floor, or anything fragile, hire professionals.",
        ],
      },
      {
        heading: "Be kind to backs",
        body: [
          "Heavy lifting hurts people. Bend your knees, use a dolly if you have one, and stop if something feels wrong. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["help/move-in", "help/carrying-groceries", "for-renters", "seasons/fall-move-in-season", "cities/fargo", "how-it-works"],
    faqs: [
      {
        q: "Can someone help me move out?",
        a: "A hand with a few heavy items, yes. A full move is movers and friends.",
      },
      {
        q: "Does anyone cover damage to my things?",
        a: "No. Help Me does not cover damage to belongings. For valuable or fragile items, hire professional movers.",
      },
      {
        q: "Should I invite them inside?",
        a: "Meet at the entrance or ground floor first. Go inside only if you both decide it makes sense.",
      },
    ],
  }),
  page({
    slug: "help/move-in",
    kind: "help",
    title: "Move-in weekend help in Fargo-Moorhead: stairs and boxes",
    description:
      "Moving into a Fargo, West Fargo, or Moorhead apartment, house, or residence hall? Two more hands for a few heavy items. Neighbors, not a moving company.",
    h1: "Move-in weekend, and everyone needs the same elevator",
    eyebrow: "The small stuff",
    lead: "The metro moves on a calendar. Late August, the first of the month, the end of a lease in May. Everyone needs the same two hands at the same time.",
    answer:
      "On Help Me you can ask a neighbor for a few extra hands during a move in Fargo, West Fargo, or Moorhead: a box-laden stairwell, a heavy bookshelf, a futon that will not fit. It is not a moving company. Meet at the building entrance, and keep the job small. For a full move, hire movers.",
    takeaways: [
      "Late August and the first of the month are the busiest move days.",
      "A neighbor helps with a few heavy items, not a whole move.",
      "Meet at the entrance, not inside a unit.",
      "A full move needs movers, friends, or both.",
    ],
    priority: 0.55,
    keywords: ["move-in help Fargo", "move in weekend NDSU", "apartment move Moorhead", "move help West Fargo", "residence hall move in"],
    sections: [
      {
        heading: "The calendar everyone shares",
        body: [
          "Move-in weekend at a campus. The first of the month. May, when leases end. The metro's rental calendar is tight, so everyone is moving at once, and the elevator has a line. A second person for twenty minutes is the difference between a day and a mess.",
          "The small jobs add up: a bookshelf to carry up, a futon frame that needs turning, a mini-fridge that needs two sets of hands.",
        ],
        bullets: [
          "A few boxes up a stairwell.",
          "A bookshelf or a futon frame.",
          "A mini-fridge to a residence hall.",
          "A door held while you carry.",
        ],
      },
      {
        heading: "Keep it small and public",
        body: [
          "Meet at the building entrance or a ground-floor door. Name the public place in your request. A neighbor is not a moving company, and nobody covers damage to your things, so for a full apartment, call movers or ask friends. The map shows a rough area about 500 meters wide until someone says yes.",
        ],
      },
      {
        heading: "Two states, same chaos",
        body: [
          "Moving across the river changes more than the address. Fargo and West Fargo are in North Dakota and Moorhead and Dilworth are in Minnesota, with different rules for deposits and notices. Tenant resources in each state can tell you what applies. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["help/heavy-lifting", "for-renters", "seasons/fall-move-in-season", "seasons/move-out-week", "cities/fargo"],
    faqs: [
      {
        q: "Can someone help me move out?",
        a: "A hand with a few heavy items, yes. A full move is movers and friends.",
      },
      {
        q: "When is the busiest move weekend?",
        a: "Late August around campuses, and the first of each month across the metro. Ask early if you need an extra pair of hands.",
      },
      {
        q: "Where do I meet someone at a residence hall?",
        a: "At the entrance or a lobby, not in a room. Keep the first meeting public.",
      },
    ],
  }),
  page({
    slug: "help/carrying-groceries",
    kind: "help",
    title: "Help carrying groceries in Fargo-Moorhead, in any weather",
    description:
      "Groceries from the trunk to the landing when your hands are full: a neighbor in Fargo, West Fargo, or Moorhead can help. Meet at the lot. Not delivery.",
    h1: "Groceries up the stairs, from the trunk",
    eyebrow: "The small stuff",
    lead: "The bags are in the trunk, the stairs are not shoveled, and you cannot carry everything and a baby. A second pair of hands makes it one trip instead of four.",
    answer:
      "On Help Me you can ask a neighbor for a hand carrying groceries in Fargo, West Fargo, or Moorhead: from the trunk to a landing, up a flight of stairs, across an icy lot. Meet at the store lot or your building entrance. It is a hand, not a delivery service, and nobody is on a clock.",
    takeaways: [
      "A hand from the trunk to the landing, not a delivery service.",
      "Meet at the store lot or the building entrance.",
      "Winter ice makes carrying harder, so ask early.",
      "Help Me is not an emergency service.",
    ],
    priority: 0.45,
    keywords: ["carrying groceries help Fargo", "groceries up stairs Moorhead", "grocery help neighbor", "icy parking lot help"],
    sections: [
      {
        heading: "The smallest favor",
        body: [
          "Carrying groceries is the oldest favor between neighbors, and the easiest to do. It is also the one people hesitate to ask for, because it feels too small to bother anyone with. It is exactly the size Help Me is for.",
          "In winter, a short walk from the lot to the building can be an icy gauntlet. In summer, it is just hot and heavy. In both, a second pair of hands is a gift.",
        ],
        bullets: [
          "From the trunk to a landing.",
          "Up a flight of stairs.",
          "Across an icy lot.",
          "With a stroller or a baby in tow.",
        ],
      },
      {
        heading: "Where to meet",
        body: [
          "Meet at the store lot or at your building's entrance, not inside your home. A neighbor does not need to come in. Set the bags down at the door and say thanks. Your request shows as a rough area about 500 meters wide, and you decide when to share more.",
        ],
      },
      {
        heading: "What this is not",
        body: [
          "It is not delivery, and nobody is paid or on call. For groceries delivered to your door, use a store's own service. For ongoing help, county aging services and 211 can connect you. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["help/heavy-lifting", "help/snow-help", "for-new-parents", "for-seniors", "cities/fargo", "how-it-works"],
    faqs: [
      {
        q: "Do I have to let someone into my home?",
        a: "No. Meet at the entrance and set the bags at the door. A doorstep is never required for a handoff.",
      },
      {
        q: "Is this a delivery service?",
        a: "No. Nobody is paid and nobody promises to come. It is a neighbor with a free few minutes.",
      },
      {
        q: "What about regular help with groceries?",
        a: "County aging services and 211 can connect you with programs for ongoing help.",
      },
    ],
  }),
];
