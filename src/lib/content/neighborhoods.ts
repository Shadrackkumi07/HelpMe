import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const NEIGHBORHOOD_PAGES: SeoPage[] = [
  page({
    slug: "neighborhoods",
    kind: "hub",
    title: "Fargo-Moorhead neighborhoods: where to meet and ask",
    description:
      "Broadway, North Fargo, West Acres, Center Avenue, The Lights: the parts of Fargo, West Fargo, and Moorhead where favors happen, and where to meet.",
    h1: "Nine parts of the metro, and where to meet in each",
    eyebrow: "Neighborhoods",
    lead: "The metro is not one blob. Broadway is not 52nd Avenue. Center Avenue is not The Lights. These pages name the streets so a person standing in a parking lot can tell where they are.",
    answer:
      "Help Me is a place to ask your block for the small stuff in Fargo, West Fargo, and Moorhead. These neighborhood pages cover nine parts of the metro, from downtown Fargo and West Acres to Center Avenue and The Lights, with public places to meet and the official numbers to call when it is more than a neighbor can handle.",
    takeaways: [
      "Nine areas cover the metro: downtown, north, central, and south Fargo, West Acres, downtown and south Moorhead, The Lights, and Sheyenne Street.",
      "Meet in public places, in daylight when you can.",
      "Your request shows as a rough area about 500 meters wide.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.85,
    keywords: ["Fargo neighborhoods", "Moorhead neighborhoods", "West Fargo neighborhoods", "downtown Fargo", "West Acres", "Help Me neighborhoods"],
    geo: { name: "Fargo–Moorhead", type: "Region", lat: 46.8772, lng: -96.7898 },
    sections: [
      {
        heading: "A map with names on it",
        body: [
          "Help Me is local to Fargo-Moorhead, and these pages make that specific. Each one names the streets, the public places, and the kinds of small favors that come up there, so you know where to meet and what to expect before you ask.",
          "Your request shows as a rough area about 500 meters wide, not a pin on a driveway and not a house number. These pages describe the public ground you can actually meet on.",
        ],
      },
      {
        heading: "Three cities, a lot of parking lots",
        body: [
          "Fargo holds downtown, the area around NDSU, West Acres, and the south side. Moorhead holds Center Avenue, two campuses, and the streets growing south. West Fargo holds Sheyenne Street, The Lights, and the newer neighborhoods that keep pushing toward Horace.",
          "Winter is the same winter in all three. Batteries die in mall lots, campus ramps, and cul-de-sacs. A grocery entrance or a well-lit commercial door is a better place to meet than a dark court.",
        ],
        bullets: [
          "Fargo: downtown, north Fargo, central Fargo, south Fargo, and West Acres.",
          "Moorhead: downtown Center Avenue and south Moorhead.",
          "West Fargo: The Lights and the Sheyenne Street corridor.",
        ],
      },
      {
        heading: "Official help stays official",
        body: [
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. Fargo Police, Moorhead Police, West Fargo Police, and campus public safety offices handle crime, injuries, and anything urgent. Helpers can apply to be reviewed by our team. Help Me does not run background checks.",
        ],
      },
    ],
    related: ["cities", "cities/fargo", "cities/moorhead", "cities/west-fargo", "campuses", "help"],
    faqs: [
      {
        q: "Is there a separate Help Me app for each neighborhood?",
        a: "No. It is one iPhone app for Fargo-Moorhead. These pages explain the streets, the public meeting places, and the official numbers around each area.",
      },
      {
        q: "Will a helper see my house on the map?",
        a: "No. Requests show as a rough area about 500 meters wide. More precise location moves only after someone says yes and you agree, and you can meet in public instead.",
      },
      {
        q: "Is my neighborhood missing?",
        a: "Nearby areas are grouped into the closest page. A favor often crosses neighborhoods anyway, so start with the page nearest to where you will meet.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/downtown-fargo",
    kind: "neighborhood",
    title: "Help Me in downtown Fargo: Broadway and beyond",
    description:
      "Ask for the small stuff around Broadway, the Fargo Theatre, and Island Park. Public places to meet, a rough map area, and winter jump starts.",
    h1: "Downtown Fargo, where the lights are already on",
    eyebrow: "Fargo, ND",
    lead: "The marquee on Broadway still works, and so do the coffee shops under it. If you need a public place to meet a neighbor with jumper cables, start on a street that already has people on it.",
    answer:
      "Downtown Fargo is the easiest place in the metro to meet a neighbor in public. Broadway, Roberts Street, NP Avenue, and Island Park are busy and easy to describe in one sentence. Help Me shows your request as a rough area about 500 meters wide, not a pin on your apartment.",
    takeaways: [
      "Meet on Broadway, at a coffee shop, a store entrance, or Island Park in daylight.",
      "Your request is a rough area, not a pin on your building.",
      "The older streets just south of downtown share the same winter and the same advice.",
      "In danger, call 911 or your local emergency number.",
    ],
    priority: 0.75,
    keywords: ["downtown Fargo help", "Broadway Fargo", "Fargo Theatre", "Island Park Fargo", "ask a neighbor downtown Fargo"],
    geo: { name: "Downtown Fargo", type: "Neighborhood", city: "Fargo", state: "ND", county: "Cass County", lat: 46.8772, lng: -96.7898 },
    sections: [
      {
        heading: "Broadway is the obvious meeting ground",
        body: [
          "Downtown Fargo is walkable in a way most of the metro is not. Broadway, Roberts Street, NP Avenue, Island Park, and the Fargo Theatre are public, lit, and easy to describe. Label a coffee shop, a store entrance, or a well-traveled corner. Do not send a first meeting to a third-floor hallway.",
          "Visitors circle the block looking for the right door. Residents get stuck with a sofa on a narrow stairwell. None of that is a 911 call, and all of it is the kind of thing a neighbor can fix in a few minutes.",
        ],
      },
      {
        heading: "Old streets, heavy things",
        body: [
          "Just south of downtown, the older blocks have porches, mature trees, and walk-up buildings. Move-in weekends and tight stairwells are a specialty here. A neighbor can help carry something heavy. They are not movers. Meet at the building entrance or on the sidewalk, not inside a unit.",
        ],
        bullets: [
          "A phone charger at a Broadway coffee shop.",
          "Directions for a visitor looking for the Theatre.",
          "Two more hands for a couch on a narrow stair.",
          "A jump start in a busy ramp or lot, in daylight.",
        ],
      },
      {
        heading: "Winter and the map",
        body: [
          "Downtown lots and ramps freeze like everywhere else. A jump start is a classic small ask. Meet in a lot with foot traffic, not an alley, and keep both people outside the car. A neighbor is not a tow service or a mechanic.",
          "The map shows about 500 meters, which covers a lot of blocks. That is the point. You choose whether to share more after someone says yes. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["cities/fargo", "neighborhoods/north-fargo", "neighborhoods/central-fargo", "help/jump-start", "help/local-guide", "resources/fargo-police"],
    faqs: [
      {
        q: "Where should I meet someone downtown?",
        a: "A named public place: a Broadway coffee shop, a store entrance, Island Park in daylight, or a busy lobby. You choose the label, and exact location is optional.",
      },
      {
        q: "Can I ask for directions to the Fargo Theatre?",
        a: "Yes. Directions and local guide questions are everyday asks. A neighbor who knows Broadway can save a visitor a loop around the block.",
      },
      {
        q: "Is there a downtown-only group of helpers?",
        a: "No. Help Me is local to the metro and shows your request to helpers nearby who are online. There is no fixed downtown roster.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/north-fargo",
    kind: "neighborhood",
    title: "Help Me in north Fargo, around NDSU",
    description:
      "North Fargo along 19th Avenue North and University Drive: directions, a phone charger, a jump start. Meet at the union or a lit lot, on a rough map area.",
    h1: "North Fargo, where 19th Avenue does the commuting",
    eyebrow: "Fargo, ND",
    lead: "19th Avenue North is a commute, a bus line, and in January a row of parking lots that eat batteries. North Fargo is NDSU's neighborhood whether you have a student ID or not.",
    answer:
      "North Fargo, around NDSU, 19th Avenue North, and University Drive, is a good place to ask for directions, a phone charger, or a jump start in daylight. Meet in a public spot like Memorial Union or a lit lot. Your request shows as a rough area about 500 meters wide, not a pin on a residence hall.",
    takeaways: [
      "Meet at Memorial Union or a busy, lit public place.",
      "Directions and phone chargers are the most common small asks.",
      "NDSU Police handle campus emergencies and official escorts.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.74,
    keywords: ["north Fargo", "19th Avenue North", "NDSU neighborhood", "University Drive Fargo", "ask a neighbor north Fargo"],
    geo: { name: "North Fargo", type: "Neighborhood", city: "Fargo", state: "ND", county: "Cass County", lat: 46.91, lng: -96.8 },
    sections: [
      {
        heading: "Campus traffic, city streets",
        body: [
          "North Fargo holds NDSU, University Drive, 19th Avenue North, and the residential blocks that absorb students, staff, and people who just live here. The older streets south and west of campus mix long-time owners with renters, and farther north, quieter streets run toward the river.",
          "A printer in a hall, directions to a lecture room, a dead battery after a night class: those are good small asks. A threat, a crime, or a medical emergency belongs with 911 or NDSU Police.",
        ],
      },
      {
        heading: "Where to meet",
        body: [
          "Memorial Union is a public, obvious place to meet on campus. Off campus, pick a grocery entrance, a well-lit lot, or a coffee counter. Front porches look neighborly, but they are still someone's home, so keep the first meeting somewhere public. The river parks are lovely in the afternoon and a poor choice after dark.",
        ],
        bullets: [
          "A phone charger in the library or the union.",
          "Directions to the right hall or the right door.",
          "A hand carrying something heavy up the stairs.",
          "A jump start in a busy lot, in daylight.",
        ],
      },
      {
        heading: "Official campus help is still official",
        body: [
          "NDSU Police run official campus public safety and escort programs. Use the university number when you want an official response, and use Help Me when you want a neighbor. NDSU events from the official calendar appear in the app, linked to the source.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["campuses/ndsu", "cities/fargo", "neighborhoods/downtown-fargo", "neighborhoods/central-fargo", "resources/ndsu-safety", "help/jump-start"],
    faqs: [
      {
        q: "Is Help Me an NDSU escort service?",
        a: "No. NDSU Police run official campus escorts. Help Me is a place to ask neighbors for small favors. For official safety, call campus police.",
      },
      {
        q: "Do I need to be an NDSU student?",
        a: "No. Neighbors, staff, and students use the same app. Helping needs a current review by our team.",
      },
      {
        q: "Do NDSU events show up in the app?",
        a: "Yes. Official NDSU events are included and linked back to the source. Help Me does not invent events.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/central-fargo",
    kind: "neighborhood",
    title: "Help Me in central Fargo's older neighborhoods",
    description:
      "Lincoln, Jefferson, Washington, and the older grid between downtown and I-94: a jump start, a heavy box, directions. Public places to meet, rough map area.",
    h1: "Central Fargo, the older grid with real yards",
    eyebrow: "Fargo, ND",
    lead: "Between downtown, University Drive, and I-94 sits the established middle of Fargo: trees, alleys, smaller lots, and a commute that is short until the car is dead.",
    answer:
      "Central Fargo is the older grid of neighborhoods between downtown, University Drive, and I-94, including areas like Lincoln, Jefferson, Washington, Clara Barton, and Horace Mann. Ask for small favors here, meet at a grocery entrance or busy corner rather than an alley, and expect your request to show as a rough 500 meter area.",
    takeaways: [
      "The older grid has denser blocks, shared alleys, and icy side streets.",
      "Meet on a named commercial street or at a grocery entrance, not in an alley.",
      "A 500 meter map area covers many blocks, which keeps your house private.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.7,
    keywords: ["central Fargo", "Lincoln Fargo", "Jefferson Fargo", "Washington Fargo", "Fargo neighborhoods", "ask a neighbor Fargo"],
    geo: { name: "Central Fargo", type: "Neighborhood", city: "Fargo", state: "ND", county: "Cass County", lat: 46.855, lng: -96.798 },
    sections: [
      {
        heading: "More houses, same winter",
        body: [
          "The older central neighborhoods are denser than the south side: smaller lots, mature trees, and more neighbors per block. You can hear the people next door. You also share icy alleys and batteries that fail in the same cold week. Names you will hear here include Lincoln, Jefferson, Washington, Clara Barton, Horace Mann, Lewis and Clark, and Madison.",
          "That density is useful. The person who could say yes is often closer than you think, which is the whole idea behind asking your block.",
        ],
      },
      {
        heading: "Alleys are not meeting places",
        body: [
          "Alleys are for trash carts and snow piles. Meet on a named commercial street, at a grocery entrance, or downtown if you can walk it. In a dense grid, the rough 500 meter map circle covers many houses at once, which is exactly the privacy you want.",
        ],
        bullets: [
          "A jump start in a busy lot off University Drive.",
          "Two more hands for a heavy item up an old staircase.",
          "A phone charger on the way to work.",
          "Directions to a building you have not been to.",
        ],
      },
      {
        heading: "When it is more than a neighbor can do",
        body: [
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. If you are actually on the interstate, call official help rather than waiting on an app. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["cities/fargo", "neighborhoods/downtown-fargo", "neighborhoods/north-fargo", "neighborhoods/south-fargo", "help/jump-start", "resources/fargo-police"],
    faqs: [
      {
        q: "Why is the map circle so big on a small block?",
        a: "Because it is meant to be. About 500 meters keeps your house off the open map. You can share more later, or never.",
      },
      {
        q: "Where should I meet someone in central Fargo?",
        a: "A grocery entrance, a busy corner on a commercial street, or downtown. Skip alleys and side streets, especially after dark.",
      },
      {
        q: "Is central Fargo the same as downtown?",
        a: "No. Downtown is Broadway and the commercial core. Central Fargo is the residential grid south and east of it toward I-94.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/south-fargo",
    kind: "neighborhood",
    title: "Help Me in south Fargo: 32nd to 52nd Avenue",
    description:
      "South Fargo along 32nd, 40th, and 52nd Avenue: Osgood, Rose Creek, Prairie Grove, and the new streets. Meet in a busy lot for a jump start or a hand.",
    h1: "South Fargo, past 32nd and still growing",
    eyebrow: "Fargo, ND",
    lead: "New roofs, long drives, and a dead battery that is a neighborhood problem instead of a downtown inconvenience you can walk away from.",
    answer:
      "South Fargo, from 32nd Avenue to 52nd Avenue, includes areas like Osgood, Rose Creek, and Prairie Grove. It is car country, so jump starts and heavy lifting are the common small asks. Meet at a grocery entrance or busy lot rather than a quiet court, and expect your request to show as a rough 500 meter area.",
    takeaways: [
      "South Fargo is car country, and winter batteries fail here like everywhere.",
      "Meet at a grocery entrance or busy lot on a collector road, not a quiet court.",
      "Your request is a rough area, not your driveway.",
      "In danger, call 911 or your local emergency number.",
    ],
    priority: 0.72,
    keywords: ["south Fargo", "52nd Avenue South", "Osgood Fargo", "Rose Creek Fargo", "Prairie Grove Fargo", "ask a neighbor south Fargo"],
    geo: { name: "South Fargo", type: "Neighborhood", city: "Fargo", state: "ND", county: "Cass County", lat: 46.822, lng: -96.83 },
    sections: [
      {
        heading: "52nd Avenue is a city now",
        body: [
          "South Fargo used to be the edge. It is not anymore. 32nd, 40th, and 52nd Avenue South, I-29, and newer neighborhoods like Osgood turned farmland into a second commercial strip. People live here, shop here, and get stuck here in the same January as everyone else in the metro.",
          "Areas like Rose Creek and Prairie Grove add older trees and apartment buildings to the mix. Names differ, but the advice does not: pick a public place on a busy road.",
        ],
      },
      {
        heading: "Meet where the lights already are",
        body: [
          "Cul-de-sacs look friendly at noon and empty at 10 p.m. Default to a grocery entrance, a big-box vestibule, or a busy lot on 25th Street or 52nd Avenue. You label the public place. The map still shows a rough area, not the house three turns off the collector road.",
        ],
        bullets: [
          "A jump start in a busy lot, in daylight.",
          "A lost set of keys at a store entrance.",
          "Two more hands for a couch or a box.",
          "A phone charger while you wait.",
        ],
      },
      {
        heading: "Distance is real",
        body: [
          "South Fargo is spread out. Help Me does not promise a neighbor is on every block, and there is no estimated arrival time. If nobody says yes within two hours, the request closes and you can try again. If it is an emergency, call 911 instead.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["cities/fargo", "neighborhoods/west-acres", "neighborhoods/central-fargo", "cities/west-fargo", "help/jump-start", "help/lost-and-found"],
    faqs: [
      {
        q: "Can I get a jump start near 52nd Avenue?",
        a: "Yes, it is a classic small ask. Meet in a busy public lot in daylight and keep both people outside the car. A neighbor is not a mechanic or a tow service.",
      },
      {
        q: "Will the map show my south Fargo driveway?",
        a: "No. A request shows as a rough area about 500 meters wide. More precise location is opt-in after someone says yes.",
      },
      {
        q: "What if nobody says yes?",
        a: "The request closes after two hours and you can try again. For anything urgent, call 911 or your local emergency number.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/west-acres",
    kind: "neighborhood",
    title: "Help Me at West Acres, Fargo: jump starts and more",
    description:
      "West Acres, 13th Avenue, and 45th Street: the classic Fargo winter jump-start lot. Meet at an entrance with foot traffic, on a rough map area.",
    h1: "West Acres, where cars go to sleep in January",
    eyebrow: "Fargo, ND",
    lead: "13th Avenue and 45th Street. The mall, the interstate ramps, and a parking lot that looks fine until it is 18 below and the battery is done.",
    answer:
      "West Acres is a mall, a commercial strip, hotels, and the housing around 13th Avenue South, and it is the classic Fargo lot for a winter jump start. Meet at an entrance with foot traffic, not the far dark row. Help Me shows your request as a rough area about 500 meters wide, not your parking stall.",
    takeaways: [
      "Meet at an entrance with cameras and foot traffic, in daylight when you can.",
      "Your request is a rough area, not a stall number.",
      "A neighbor is not a tow truck or a mechanic.",
      "On the interstate or in danger, call 911.",
    ],
    priority: 0.73,
    keywords: ["West Acres Fargo", "jump start West Acres", "13th Avenue 45th Street", "West Acres Mall help", "ask a neighbor West Acres"],
    geo: { name: "West Acres", type: "Neighborhood", city: "Fargo", state: "ND", county: "Cass County", lat: 46.8685, lng: -96.847 },
    sections: [
      {
        heading: "The lot is the neighborhood",
        body: [
          "West Acres is the mall, the stores along 13th Avenue, the hotels, and the housing nearby. It is also the place Fargo people picture when they say my car died at the mall. A jump start is one of the most common small asks. Meet near an entrance with cameras and foot traffic, not the far row.",
          "Lost-and-found happens here too: a wallet, a set of keys, a phone left at a table. Help Me is not the mall's lost-and-found desk, but it is a way to ask someone nearby without posting your stall number to a public thread.",
        ],
        bullets: [
          "A jump start at a busy entrance, in daylight.",
          "A lost wallet, set of keys, or phone.",
          "A phone charger while you wait for someone.",
          "Two more hands for something heavy.",
        ],
      },
      {
        heading: "A rough area, not stall 247",
        body: [
          "The map shows about 500 meters. That covers the mall and the streets around it, not your exact parking space. After someone says yes, a private chat opens between the two of you and you decide whether to share more. You can also just say west entrance.",
        ],
      },
      {
        heading: "The interstates do not make this a roadside service",
        body: [
          "I-29 and I-94 bring a lot of traffic here, but Help Me does not run a roadside service. There is no tow truck, no payment, and no promised arrival time. If you are on a highway shoulder, call official help. If you are in a lot and the day is stuck, ask a neighbor.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["cities/fargo", "help/jump-start", "help/lost-and-found", "neighborhoods/south-fargo", "cities/west-fargo", "guides/meeting-someone-new-in-fargo"],
    faqs: [
      {
        q: "Can I ask for a jump start at West Acres?",
        a: "Yes. Post the ask, meet at a public entrance, and keep both people outside the car. A neighbor is not a mechanic, so if the car still will not start, call a shop or a tow.",
      },
      {
        q: "Will someone see which stall I am in?",
        a: "Not from the open map. It shows a rough area. You share exact location only after someone says yes, and only if you want to.",
      },
      {
        q: "Is this a paid car service?",
        a: "No. Help Me is not a paid marketplace. Helpers are neighbors who applied and were reviewed by our team.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/downtown-moorhead",
    kind: "neighborhood",
    title: "Help Me in downtown Moorhead: Center Avenue",
    description:
      "Center Avenue and downtown Moorhead: a phone charger, directions, a hand with a heavy box. Public places to meet, plus the Minnesota numbers to call.",
    h1: "Downtown Moorhead, Center Avenue first",
    eyebrow: "Moorhead, MN",
    lead: "Center Avenue is Moorhead's public street. The river is a state line, and people forget that until they need a police department that is not Fargo's.",
    answer:
      "Downtown Moorhead along Center Avenue is a good public place to meet a neighbor, with storefronts, city buildings, and the campuses a few minutes south. Help Me shows your request as a rough area about 500 meters wide. Minnesota services apply here: call 911, or Moorhead Police and Clay County for non-emergencies.",
    takeaways: [
      "Meet on Center Avenue, at a store entrance, or at a campus union.",
      "Gooseberry Park and the river trail are better in daylight than after dark.",
      "Moorhead Police and Clay County are separate from Fargo and Cass County.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.72,
    keywords: ["downtown Moorhead", "Center Avenue Moorhead", "Moorhead MN help", "ask a neighbor Moorhead"],
    geo: { name: "Downtown Moorhead", type: "Neighborhood", city: "Moorhead", state: "MN", county: "Clay County", lat: 46.8738, lng: -96.7676 },
    sections: [
      {
        heading: "A downtown that is not Broadway",
        body: [
          "Downtown Moorhead along Center Avenue is smaller than Broadway and easy to skip if you only ever park in Fargo. It is still a real public meeting place: storefronts, city buildings, and the stretch people actually walk. MSUM and Concordia sit minutes south, and students cross the river for food while Fargo residents cross back for class.",
          "Gooseberry Park and the river trail are beautiful. Pick lit, populated ground if you are meeting someone new, and label it in the request.",
        ],
      },
      {
        heading: "Minnesota services, same app",
        body: [
          "911 still works on both sides of the river. Moorhead Police and Clay County are not Fargo Police and Cass County. Matching in Help Me does not stop at the Red River, but official food, housing, and mental-health resources can. The Resources pages keep that split straight.",
        ],
        bullets: [
          "A phone charger at a Center Avenue coffee shop.",
          "Directions to a campus building.",
          "Two more hands for a heavy box.",
          "A jump start in a busy lot, in daylight.",
        ],
      },
      {
        heading: "A rough area on Center Avenue too",
        body: [
          "Requests show as about 500 meters, not an apartment above a storefront. More precise location is opt-in after someone says yes. A private chat opens between two people. Meet in public by default. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["cities/moorhead", "campuses/msum", "campuses/concordia", "neighborhoods/south-moorhead", "resources/moorhead-police", "help/local-guide"],
    faqs: [
      {
        q: "Is Help Me available in Moorhead or only in Fargo?",
        a: "Moorhead is a launch city. Help Me opens one zone at a time across Fargo, West Fargo, and Moorhead, and the app shows whether your area is open.",
      },
      {
        q: "Where should I meet downtown Moorhead?",
        a: "On Center Avenue, at a store entrance, or at a campus union at MSUM or Concordia. You choose the label.",
      },
      {
        q: "Do I call Fargo Police from Center Avenue?",
        a: "No. You are in Moorhead, in Clay County, Minnesota. Call 911, or Moorhead Police for non-emergencies. Help Me does not dispatch anyone.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/south-moorhead",
    kind: "neighborhood",
    title: "Help Me in south Moorhead, MN: Village Green and beyond",
    description:
      "South Moorhead's growing streets, including Village Green: a jump start, a heavy box, directions. Meet in a busy lot on a rough map area.",
    h1: "South Moorhead, where the city keeps adding streets",
    eyebrow: "Moorhead, MN",
    lead: "South of the campuses is a mix of older houses and newer additions. South Moorhead is the Minnesota side's growth corridor, not a Fargo suburb with a different zip code.",
    answer:
      "South Moorhead, including the Village Green area and the newer additions around it, is a growing part of Clay County, Minnesota. It is car country, so jump starts and heavy lifting are common small asks. Meet at a grocery entrance or busy lot rather than a quiet court, and expect your request to show as a rough 500 meter area.",
    takeaways: [
      "South Moorhead is part of the same Help Me area as Fargo.",
      "Meet at a grocery entrance or busy commercial lot, not a quiet court.",
      "Moorhead Police and Clay County cover official services here.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.68,
    keywords: ["south Moorhead", "Village Green Moorhead", "Moorhead neighborhoods", "Moorhead MN south", "ask a neighbor Moorhead"],
    geo: { name: "South Moorhead", type: "Neighborhood", city: "Moorhead", state: "MN", county: "Clay County", lat: 46.85, lng: -96.755 },
    sections: [
      {
        heading: "The fastest-growing Moorhead corridor",
        body: [
          "South Moorhead holds Village Green, with its city golf course and quiet circles, and other newer additions along the collector roads that feed them. People who live here still drive to Fargo for work and still use MSUM and Concordia as landmarks. Help Me treats this as Moorhead, in Clay County, because it is.",
          "A golf course at noon is public ground. A cart path or a cul-de-sac at 10 p.m. is not a good place to meet someone new.",
        ],
      },
      {
        heading: "Cul-de-sacs need a public door",
        body: [
          "New additions love quiet courts, and quiet courts are a poor first meeting place at night. Use a grocery, a well-lit commercial lot on 20th Street or 30th Avenue, or a campus union if you are headed that way. The map shows a rough area about 500 meters wide, not the house on the circle.",
        ],
        bullets: [
          "A jump start in a busy lot, in daylight.",
          "A phone charger on the way to work.",
          "Two more hands for something heavy.",
          "A lost set of keys at a store entrance.",
        ],
      },
      {
        heading: "Winter cars, Minnesota numbers",
        body: [
          "Jump starts belong in public lots. Moorhead Police and 911 handle emergencies, and Help Me is not a tow service. There is no promised arrival time, and nobody is on call. Helpers can apply to be reviewed by our team. Help Me does not run background checks. You can report or block any member at any time.",
          "Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number.",
        ],
      },
    ],
    related: ["neighborhoods/downtown-moorhead", "cities/moorhead", "cities/dilworth", "campuses/msum", "help/jump-start", "resources/moorhead-police"],
    faqs: [
      {
        q: "Is south Moorhead in the same Help Me area as Fargo?",
        a: "Yes. It is one metro app. Official police still follow Moorhead and Clay County when you are on this side of the river.",
      },
      {
        q: "Can I meet someone at MSUM if I live in south Moorhead?",
        a: "If it is a public, convenient place for both of you, yes. Campus unions are good default ground. MSUM Public Safety is still the official campus number.",
      },
      {
        q: "Will someone drive over from Fargo?",
        a: "Only if a helper is online and nearby and chooses to say yes. There is no dispatch and no estimated arrival time.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/the-lights",
    kind: "neighborhood",
    title: "Help Me at The Lights, West Fargo",
    description:
      "The Lights at Sheyenne Street and 32nd Avenue: a public plaza with lots, dining, and winter ice. Meet at the plaza edge on a rough map area.",
    h1: "The Lights, West Fargo's public plaza",
    eyebrow: "West Fargo, ND",
    lead: "Sheyenne Street and 32nd Avenue South. Apartments, restaurants, and a plaza that hosts concerts and, in winter, ice. If West Fargo has an obvious public meeting place, this is it.",
    answer:
      "The Lights, at Sheyenne Street and 32nd Avenue South in West Fargo, is a mixed-use corner with apartments, restaurants, and a public plaza, which makes it an easy place to meet a neighbor in public. Help Me shows your request as a rough area about 500 meters wide, not your apartment unit.",
    takeaways: [
      "Meet at a named plaza edge or entrance, not in a hallway.",
      "Your request is a rough area, not a unit number.",
      "The official West Fargo community calendar appears in the app, linked to its source.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.7,
    keywords: ["The Lights West Fargo", "Sheyenne 32nd", "West Fargo plaza", "ask a neighbor West Fargo"],
    geo: { name: "The Lights", type: "Neighborhood", city: "West Fargo", state: "ND", county: "Cass County", lat: 46.847, lng: -96.896 },
    sections: [
      {
        heading: "A mixed-use corner that actually has people on it",
        body: [
          "The Lights is apartments, dining, and a plaza, not a cul-de-sac with a fountain. That makes it useful. Label a public entrance, a populated edge of the plaza, or a grocery nearby. Do not send a first meeting to a fourth-floor hallway because the building looks new.",
          "West Fargo publishes an official community calendar, and Help Me includes it with the source attached. Plaza events may show up that way, or through Ticketmaster listings in the Fargo area. Help Me does not invent a show to fill the screen.",
        ],
      },
      {
        heading: "Lots freeze here too",
        body: [
          "Jump starts in the nearby lots are a classic January ask. Meet near cameras and foot traffic, in daylight when you can, and keep both people outside the car. A neighbor is not West Fargo Police or a tow service.",
        ],
        bullets: [
          "A jump start in a busy lot, in daylight.",
          "A phone charger at a restaurant or the plaza.",
          "Directions to a building in the area.",
          "Two more hands for a move into an apartment.",
        ],
      },
      {
        heading: "A rough circle over a busy corner",
        body: [
          "A 500 meter area covers the plaza, the apartments, and a stretch of Sheyenne Street. That is enough for a neighbor to know the area without learning your unit number. Share more only after someone says yes, and only if you want to.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. Help Me is not an emergency service. If someone is in immediate danger, call 911 or your local emergency number. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["cities/west-fargo", "neighborhoods/sheyenne-crossing", "events", "help/jump-start", "resources/west-fargo-police", "guides/west-fargo-community-help"],
    faqs: [
      {
        q: "Does Help Me list events at The Lights?",
        a: "If they appear on the official West Fargo calendar or Ticketmaster for the Fargo area, they can show up with the source attached. Help Me does not scrape flyers.",
      },
      {
        q: "Can I meet someone at the plaza?",
        a: "Yes, it is public and usually populated. On busy nights, pick a specific entrance so you can find each other.",
      },
      {
        q: "Is The Lights part of Fargo?",
        a: "No. It is in West Fargo. West Fargo Police and the city calendar are the official local pieces.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/sheyenne-crossing",
    kind: "neighborhood",
    title: "Help Me along Sheyenne Street, West Fargo",
    description:
      "The Sheyenne Street corridor in West Fargo, from Main Avenue to 32nd and the newer neighborhoods nearby: public lots, a rough map area, a jump start.",
    h1: "Sheyenne Street, the street West Fargo actually uses",
    eyebrow: "West Fargo, ND",
    lead: "Sheyenne Street is West Fargo's main street whether the map admits it or not. Crossing it, from Main Avenue to 32nd, is how this city moves.",
    answer:
      "Sheyenne Street is West Fargo's spine, with residential blocks, commercial doors, and newer neighborhoods like Shadow Wood and Independence nearby. Meet at a grocery entrance or busy lot on Sheyenne or Veterans Boulevard, not a quiet court. Help Me shows your request as a rough area about 500 meters wide.",
    takeaways: [
      "Meet at a grocery entrance or busy lot on Sheyenne Street or Veterans Boulevard.",
      "Newer neighborhoods nearby share the same advice: pick a public door.",
      "West Fargo has its own city calendar and its own police.",
      "Help Me is not an emergency service. In danger, call 911.",
    ],
    priority: 0.68,
    keywords: ["Sheyenne Street West Fargo", "Sheyenne Crossing", "Shadow Wood West Fargo", "Independence West Fargo", "West Fargo neighborhoods"],
    geo: { name: "Sheyenne Street corridor", type: "Neighborhood", city: "West Fargo", state: "ND", county: "Cass County", lat: 46.855, lng: -96.905 },
    sections: [
      {
        heading: "The spine, not a subdivision sign",
        body: [
          "Sheyenne Street runs through West Fargo's older blocks, its commercial doors, and the river on one side, and it feeds the newer neighborhoods to the south and west, like Shadow Wood and Independence. The housing here ranges from the 1990s to the 2010s, mixed in with the places people actually buy milk.",
          "That mix is useful. A named storefront is a better meeting label than a court that only exists on a developer's sign.",
        ],
      },
      {
        heading: "Public doors on Sheyenne and Veterans",
        body: [
          "Grocery entrances, busy lots, and The Lights a short drive south. Meet where there are already people. A park at noon is public, but a park path at 10 p.m. is not a good first meeting place. The map shows a rough area about 500 meters wide, not the driveway behind the fence on a side street.",
        ],
        bullets: [
          "A jump start in a busy lot, in daylight.",
          "A phone charger while you wait.",
          "Directions to a building in the area.",
          "Two more hands for something heavy.",
        ],
      },
      {
        heading: "City calendar, city police",
        body: [
          "West Fargo publishes an official community calendar, which Help Me includes with the source attached. West Fargo Police are the official number for non-emergencies. Help Me is a place to ask neighbors for the small stuff. It is not a paid marketplace, and it is not an emergency service.",
          "Helpers can apply to be reviewed by our team. Help Me does not run background checks. If someone is in immediate danger, call 911 or your local emergency number. You can report or block any member at any time.",
        ],
      },
    ],
    related: ["cities/west-fargo", "neighborhoods/the-lights", "cities/horace", "help/jump-start", "help/local-guide", "resources/west-fargo-police"],
    faqs: [
      {
        q: "Where do I meet someone along Sheyenne Street?",
        a: "At a grocery entrance or a busy lot, ideally in daylight. You choose the label, and exact location is optional.",
      },
      {
        q: "Can I get a jump start on Sheyenne Street?",
        a: "Yes, in a public lot. If you are on a fast-moving road, call official help instead of waiting on an app.",
      },
      {
        q: "Does West Fargo have its own Help Me app?",
        a: "No. It is one iPhone app. West Fargo has its own city page, neighborhoods, and police resource page because it is not a Fargo appendix.",
      },
    ],
  }),
];
