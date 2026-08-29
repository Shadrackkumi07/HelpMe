import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const CITY_PAGES: SeoPage[] = [
  page({
    slug: "cities",
    kind: "hub",
    title: "Help Me cities in Fargo–Moorhead",
    description:
      "Community help pages for Fargo, Moorhead, West Fargo, Dilworth, Horace, and surrounding Cass and Clay County towns.",
    h1: "Cities and towns Help Me is built around",
    eyebrow: "places",
    lead: "The Fargo–Moorhead metro is one labor market, two states, and a lot of parking lots that freeze. These pages are the geographic map of the product.",
    priority: 0.9,
    keywords: ["Fargo", "Moorhead", "West Fargo", "Dilworth", "Horace", "Cass County", "Clay County"],
    geo: { name: "Fargo–Moorhead", type: "Region", lat: 46.8772, lng: -96.7898 },
    sections: [
      {
        heading: "The metro, said accurately",
        body: [
          "Fargo and West Fargo sit in Cass County, North Dakota. Moorhead and Dilworth sit in Clay County, Minnesota. The Red River is the state line. People cross it for class, work, groceries, and jumper cables without thinking about it — until they need a county service.",
          "Help Me matching is local. Event calendars are local. These city pages exist so search, maps, and answer engines can attach that fact to the right place name instead of a generic “community app” blur.",
        ],
      },
    ],
    related: ["neighborhoods", "campuses", "schools", "explore", "for-newcomers"],
    faqs: [
      {
        q: "Does Help Me have a different app per city?",
        a: "No. One iPhone app. The city pages explain how help, events, and official resources work in each place.",
      },
    ],
  }),
  page({
    slug: "cities/fargo",
    kind: "city",
    title: "Community help in Fargo, North Dakota",
    description:
      "Ask approved Helpers in Fargo for everyday help — jump starts, walks to the car, directions, campus tech — and see official NDSU and regional events.",
    h1: "Help in Fargo, when the day stalls",
    eyebrow: "Fargo, ND",
    lead: "Fargo is the largest city in North Dakota, the home of NDSU, and the place Help Me is built in. Broadway, West Acres, 19th Avenue, a river that ices over, and a lot of people who would help if they could see the need.",
    priority: 0.95,
    keywords: ["Fargo help", "Fargo ND app", "jump start Fargo", "NDSU Fargo", "community help Fargo"],
    geo: { name: "Fargo", type: "City", city: "Fargo", state: "ND", county: "Cass County", lat: 46.8772, lng: -96.7898 },
    sections: [
      {
        heading: "What Fargo people actually get stuck on",
        body: [
          "January batteries. Parking ramps after a late class at NDSU. A printer in a residence hall. A sofa that will not pivot around a downtown stair. A visitor who cannot find the Fargo Theatre. None of that is a 911 call. All of it is why a local help app exists here instead of a national gig board.",
          "Downtown Broadway is walkable and public — a good default meeting place. West Acres and the 13th Avenue / 45th Street commercial strip are where cars die in the cold. North Fargo holds NDSU. South Fargo holds Davies and a lot of new housing. The map in Help Me shows a coarse area, not your driveway on 8th Street.",
        ],
      },
      {
        heading: "Campus and city, on the same phone",
        body: [
          "NDSU’s official events feed into Help Me with attribution. Ticketmaster Fargo listings cover shows at the FARGODOME, Scheels Arena, and nearby venues. West Fargo and Moorhead calendars sit beside them, because a Saturday here ignores the city limit.",
        ],
      },
      {
        heading: "Official Fargo help is still official",
        body: [
          "Fargo Police, Cass County, NDSU Police, and 911 are the right numbers for danger, crime, and medical emergencies. Help Me is the neighbor with a current approval. Use both in the correct order.",
        ],
      },
    ],
    related: [
      "neighborhoods/downtown-fargo",
      "campuses/ndsu",
      "help/jump-start",
      "guides/new-to-fargo",
      "resources/fargo-police",
      "cities/west-fargo",
      "cities/moorhead",
    ],
    faqs: [
      {
        q: "Can I request a jump start in Fargo on Help Me?",
        a: "Yes — that is a core public category. Post the ask, meet in a public lot, and do not treat a helper as a mechanic or a tow company.",
      },
      {
        q: "Does Help Me replace NDSU Police?",
        a: "No. Campus emergencies and official escorts go through NDSU Police / campus safety. Help Me is community help.",
      },
      {
        q: "Where should I meet a helper in Fargo?",
        a: "Public places: a grocery vestibule, a campus union, a well-lit lot, a coffee shop on Broadway. You choose the label. Exact location is optional.",
      },
    ],
  }),
  page({
    slug: "cities/moorhead",
    kind: "city",
    title: "Community help in Moorhead, Minnesota",
    description:
      "Help Me in Moorhead, MN — everyday help near MSUM and Concordia College, plus official campus calendars, across the Red River from Fargo.",
    h1: "Help in Moorhead, on the Minnesota side",
    eyebrow: "Moorhead, MN",
    lead: "Moorhead is not a suburb of Fargo. It is a city with two campuses, its own police, Clay County services, and a river that is also a state line.",
    priority: 0.93,
    keywords: ["Moorhead help", "Moorhead MN", "MSUM help", "Concordia College help"],
    geo: { name: "Moorhead", type: "City", city: "Moorhead", state: "MN", county: "Clay County", lat: 46.8738, lng: -96.7676 },
    sections: [
      {
        heading: "Two campuses, one city",
        body: [
          "Minnesota State University Moorhead and Concordia College sit minutes apart. Students cross into Fargo for work and food; Fargo students cross back for class. Help Me shows both official calendars with the source still attached.",
          "Downtown Moorhead along Center Avenue is a public, obvious meeting place. So are campus unions. Gooseberry Park and the river corridor are beautiful and not always the right place to meet a stranger after dark — pick lit, populated ground.",
        ],
      },
      {
        heading: "Minnesota numbers, Minnesota services",
        body: [
          "911 still works. Moorhead Police and Clay County are not Fargo Police and Cass County. Food assistance, mental-health, and housing resources can differ across the river. Our resource pages keep that split honest.",
        ],
      },
    ],
    related: [
      "campuses/msum",
      "campuses/concordia",
      "neighborhoods/downtown-moorhead",
      "resources/moorhead-police",
      "resources/msum-safety",
      "cities/fargo",
      "cities/dilworth",
    ],
    faqs: [
      {
        q: "Is Help Me available in Moorhead or only Fargo?",
        a: "Moorhead is part of the metro the app is built for. Matching is local, not Fargo-only.",
      },
      {
        q: "Do MSUM and Concordia events show up?",
        a: "Yes. Official MSUM and Concordia calendars are ingested and attributed. Open the official link for details.",
      },
    ],
  }),
  page({
    slug: "cities/west-fargo",
    kind: "city",
    title: "Community help in West Fargo, North Dakota",
    description:
      "Help Me in West Fargo — jump starts, neighbor help, and the official West Fargo community calendar, from Sheyenne Street to The Lights.",
    h1: "Help in West Fargo",
    eyebrow: "West Fargo, ND",
    lead: "West Fargo is the fast-growing western side of this metro: Sheyenne Street, 32nd Avenue, Veterans Boulevard, new neighborhoods, and a city calendar Help Me actually ingests.",
    priority: 0.92,
    keywords: ["West Fargo help", "West Fargo ND", "Sheyenne", "West Fargo events"],
    geo: { name: "West Fargo", type: "City", city: "West Fargo", state: "ND", county: "Cass County", lat: 46.8772, lng: -96.8998 },
    sections: [
      {
        heading: "A city with its own calendar",
        body: [
          "West Fargo publishes a public community calendar. Help Me pulls it, labels it West Fargo, and links back to westfargo.org. That is rare for a “campus app,” and it is why West Fargo is not treated as a Fargo neighborhood in our information architecture.",
        ],
      },
      {
        heading: "Where the asks happen",
        body: [
          "Big commercial lots along Veterans Boulevard and 13th Avenue. High-school events at West Fargo, Sheyenne, and Horizon. Neighborhoods like The Lights, Sheyenne Crossing, and Shadow Wood. Winter here is the same winter as Fargo — batteries still die, and a public grocery vestibule is still a better meeting point than a dark cul-de-sac.",
        ],
      },
    ],
    related: [
      "neighborhoods/the-lights",
      "neighborhoods/sheyenne-crossing",
      "schools/west-fargo-high",
      "schools/sheyenne-high",
      "guides/west-fargo-community-help",
      "resources/west-fargo-police",
      "cities/fargo",
    ],
    faqs: [
      {
        q: "Does Help Me include West Fargo events?",
        a: "Yes. The official West Fargo community calendar is one of the fixed sources in the app.",
      },
      {
        q: "Is West Fargo on the Fargo page?",
        a: "West Fargo has its own city page, neighborhoods, schools, and police resource page. It is not a Fargo appendix.",
      },
    ],
  }),
  page({
    slug: "cities/dilworth",
    kind: "city",
    title: "Community help in Dilworth, Minnesota",
    description:
      "Dilworth sits on the east edge of Moorhead. Help Me covers everyday neighbor help in this Clay County city next to Fargo–Moorhead.",
    h1: "Help in Dilworth",
    eyebrow: "Dilworth, MN",
    lead: "Dilworth is small, close, and easy to skip on a map of “Fargo.” People who live here still get stuck in the same winter.",
    priority: 0.7,
    keywords: ["Dilworth MN", "Dilworth help", "Clay County"],
    geo: { name: "Dilworth", type: "City", city: "Dilworth", state: "MN", county: "Clay County", lat: 46.876, lng: -96.703 },
    sections: [
      {
        heading: "Next to Moorhead, not inside it",
        body: [
          "Dilworth-Glyndon-Felton schools serve the area. Highway 10 and the rail corridor define the town. Moorhead and Fargo jobs are a short drive. Help Me does not run a separate Dilworth product — it is part of the metro matching area, with Clay County official resources when something is more than a neighbor can do.",
        ],
      },
    ],
    related: ["cities/moorhead", "schools/dilworth-glyndon-felton", "resources/clay-county-resources", "help/jump-start"],
    faqs: [
      {
        q: "Is Dilworth included in Help Me?",
        a: "Yes, as part of the Fargo–Moorhead area the app is built for. Official emergency services remain Dilworth / Clay County.",
      },
    ],
  }),
  page({
    slug: "cities/horace",
    kind: "city",
    title: "Community help in Horace, North Dakota",
    description:
      "Horace is the fast-growing Cass County city south of West Fargo. Help Me is the Fargo–Moorhead help app neighbors here can actually use.",
    h1: "Help in Horace",
    eyebrow: "Horace, ND",
    lead: "Horace grew up along 81 and the southern edge of the metro. New streets, long drives to campus, and the same dead batteries as everyone north of you.",
    priority: 0.68,
    keywords: ["Horace ND", "Horace North Dakota", "south Fargo metro"],
    geo: { name: "Horace", type: "City", city: "Horace", state: "ND", county: "Cass County", lat: 46.758, lng: -96.904 },
    sections: [
      {
        heading: "South of the metro, still in it",
        body: [
          "Horace residents work and shop in Fargo and West Fargo. Matching is local to the metro, not a promise that a helper is standing on Main Street at midnight. Meet in a public, lit place — a school lot during an event, a grocery, a well-traveled corner — and keep 911 for anything that is actually an emergency.",
        ],
      },
    ],
    related: ["cities/west-fargo", "cities/fargo", "schools/fargo-davies", "help/jump-start"],
    faqs: [
      {
        q: "Does Help Me serve Horace?",
        a: "Horace is part of the surrounding Cass County metro the product is built around. It is not a separate city app.",
      },
    ],
  }),
  page({
    slug: "cities/mapleton",
    kind: "city",
    title: "Community help in Mapleton, North Dakota",
    description:
      "Mapleton is a Cass County town west of Fargo. How Help Me fits a smaller community that still drives the I-94 corridor.",
    h1: "Help in Mapleton",
    eyebrow: "Mapleton, ND",
    lead: "Mapleton is close enough that Fargo is the job market and far enough that a dead battery feels farther than it looks on a map.",
    priority: 0.62,
    keywords: ["Mapleton ND", "Cass County help"],
    geo: { name: "Mapleton", type: "City", city: "Mapleton", state: "ND", county: "Cass County", lat: 46.889, lng: -97.053 },
    sections: [
      {
        heading: "A corridor town",
        body: [
          "I-94 and Highway 10 make Mapleton part of the daily Fargo draw. Help Me is metro-local. Do not expect a national dispatch. Do expect the same rules: approved helpers, coarse location, public meeting places, and 911 for emergencies.",
        ],
      },
    ],
    related: ["cities/casselton", "cities/fargo", "cities/west-fargo", "help/jump-start"],
    faqs: [
      {
        q: "Will a Fargo helper come to Mapleton?",
        a: "Offers consider nearby approved helpers who are online. Distance is real. A public meeting place and a two-hour window still apply. There is no guaranteed response time.",
      },
    ],
  }),
  page({
    slug: "cities/casselton",
    kind: "city",
    title: "Community help in Casselton, North Dakota",
    description:
      "Casselton, ND sits west of Fargo on I-94. Help Me is the Fargo–Moorhead community help app for everyday, non-emergency asks.",
    h1: "Help in Casselton",
    eyebrow: "Casselton, ND",
    lead: "Bonanzaville is the postcard. I-94 is the habit. Casselton people still need jumper cables and a way to ask without posting to a town Facebook thread of three hundred comments.",
    priority: 0.6,
    keywords: ["Casselton ND", "Casselton help"],
    geo: { name: "Casselton", type: "City", city: "Casselton", state: "ND", county: "Cass County", lat: 46.900, lng: -97.211 },
    sections: [
      {
        heading: "West on 94",
        body: [
          "Casselton is part of the surrounding metro, not a second product. Central Cass schools serve the area. Official help is Cass County. Neighbor help is the app, with the same privacy rules as Fargo.",
        ],
      },
    ],
    related: ["cities/mapleton", "schools/central-cass", "cities/fargo", "resources/cass-county-resources"],
    faqs: [
      {
        q: "Is there a Casselton-only helper list?",
        a: "No. Matching is local to the metro and to who is actually online. We do not invent a town roster.",
      },
    ],
  }),
  page({
    slug: "cities/harwood",
    kind: "city",
    title: "Community help in Harwood, North Dakota",
    description:
      "Harwood sits north of Fargo along the I-29 corridor. Help Me covers everyday community help in this Cass County town.",
    h1: "Help in Harwood",
    eyebrow: "Harwood, ND",
    lead: "North of Fargo, still in the Cass County gravity well. Short drive. Long winter.",
    priority: 0.58,
    keywords: ["Harwood ND"],
    geo: { name: "Harwood", type: "City", city: "Harwood", state: "ND", county: "Cass County", lat: 46.979, lng: -96.836 },
    sections: [
      {
        heading: "North metro",
        body: [
          "Harwood residents shop and work in Fargo. Northern Cass schools cover a wider rural area nearby. Help Me remains a metro community app — public meeting places, approved helpers, no emergency dispatch.",
        ],
      },
    ],
    related: ["cities/fargo", "schools/northern-cass", "help/jump-start"],
    faqs: [
      {
        q: "Does Help Me work in Harwood?",
        a: "Harwood is part of the surrounding Fargo metro. Availability depends on approved helpers who are actually online.",
      },
    ],
  }),
  page({
    slug: "cities/kindred",
    kind: "city",
    title: "Community help in Kindred, North Dakota",
    description:
      "Kindred is a Cass County community south of Fargo. How the Help Me app fits a smaller town that still uses the Fargo–Moorhead metro.",
    h1: "Help in Kindred",
    eyebrow: "Kindred, ND",
    lead: "Kindred High Vikings, a Main Street, and a drive to Fargo for almost everything else.",
    priority: 0.55,
    keywords: ["Kindred ND", "Kindred High"],
    geo: { name: "Kindred", type: "City", city: "Kindred", state: "ND", county: "Cass County", lat: 46.648, lng: -97.017 },
    sections: [
      {
        heading: "Small town, metro gravity",
        body: [
          "Kindred is surrounding, not downtown. Do not expect a helper on every block. Do use the same safety rules, and official Cass County services when a neighbor is the wrong tool.",
        ],
      },
    ],
    related: ["schools/kindred", "cities/horace", "cities/fargo"],
    faqs: [
      {
        q: "Is Kindred in the Help Me service area?",
        a: "It is part of the surrounding Cass County area we document. Matching still depends on real, online, approved helpers.",
      },
    ],
  }),
  page({
    slug: "cities/hawley",
    kind: "city",
    title: "Community help in Hawley, Minnesota",
    description:
      "Hawley, MN is east of Moorhead on Highway 10. Help Me is the Fargo–Moorhead community help app for the wider metro people actually drive.",
    h1: "Help in Hawley",
    eyebrow: "Hawley, MN",
    lead: "Highway 10 east of Dilworth. Clay County. A town that uses Moorhead and Fargo as its city.",
    priority: 0.55,
    keywords: ["Hawley MN"],
    geo: { name: "Hawley", type: "City", city: "Hawley", state: "MN", county: "Clay County", lat: 46.876, lng: -96.317 },
    sections: [
      {
        heading: "East on 10",
        body: [
          "Hawley is surrounding Clay County, not a second HQ. Help Me pages here exist so people searching “help in Hawley MN” get an honest local product instead of a national marketplace that does not know Highway 10.",
        ],
      },
    ],
    related: ["cities/dilworth", "cities/moorhead", "schools/hawley", "resources/clay-county-resources"],
    faqs: [
      {
        q: "Will Help Me send someone from Fargo to Hawley?",
        a: "Only if an approved helper is online and the matching rules allow it. There is no dispatch guarantee and no paid ETA.",
      },
    ],
  }),
  page({
    slug: "cities/barnesville",
    kind: "city",
    title: "Community help in Barnesville, Minnesota",
    description:
      "Barnesville, MN is a Clay County city southeast of Moorhead. Help Me documents the surrounding metro the Fargo–Moorhead app is built for.",
    h1: "Help in Barnesville",
    eyebrow: "Barnesville, MN",
    lead: "Southeast of the river cities, still in the orbit. Potato days, Highway 9, and a drive to Moorhead for a lot of errands.",
    priority: 0.52,
    keywords: ["Barnesville MN"],
    geo: { name: "Barnesville", type: "City", city: "Barnesville", state: "MN", county: "Clay County", lat: 46.652, lng: -96.420 },
    sections: [
      {
        heading: "Surrounding, not downtown",
        body: [
          "Barnesville pages are geographic SEO done honestly: this is the metro people search, this is the app that exists, this is not a promise of a helper on Front Street at 2 a.m.",
        ],
      },
    ],
    related: ["cities/moorhead", "schools/barnesville", "cities/hawley"],
    faqs: [
      {
        q: "Is there a Barnesville Help Me community?",
        a: "There is one Help Me community for Fargo–Moorhead and surroundings. We do not fake a town forum.",
      },
    ],
  }),
  page({
    slug: "cities/glyndon",
    kind: "city",
    title: "Community help in Glyndon, Minnesota",
    description:
      "Glyndon, MN sits between Dilworth and Hawley. Help Me is the Fargo–Moorhead help app for Clay County communities on Highway 10.",
    h1: "Help in Glyndon",
    eyebrow: "Glyndon, MN",
    lead: "Part of Dilworth-Glyndon-Felton. Close to Moorhead. Easy to miss if you only search “Fargo app.”",
    priority: 0.52,
    keywords: ["Glyndon MN", "DGF"],
    geo: { name: "Glyndon", type: "City", city: "Glyndon", state: "MN", county: "Clay County", lat: 46.875, lng: -96.579 },
    sections: [
      {
        heading: "DGF country",
        body: [
          "Glyndon shares a school district with Dilworth and Felton. Help Me treats it as surrounding Clay County. Official youth and school channels remain the right place for student safety.",
        ],
      },
    ],
    related: ["schools/dilworth-glyndon-felton", "cities/dilworth", "cities/hawley", "cities/moorhead"],
    faqs: [
      {
        q: "Is Glyndon on the Dilworth page?",
        a: "Glyndon has its own city page and shares a school page with Dilworth-Glyndon-Felton. Official city services still follow Glyndon and Clay County.",
      },
    ],
  }),
  page({
    slug: "cities/wahpeton",
    kind: "city",
    title: "Help Me and Wahpeton, North Dakota",
    description:
      "Wahpeton and Breckenridge sit down the Red River at NDSCS. How they relate to the Fargo–Moorhead Help Me app.",
    h1: "Wahpeton, down the river",
    eyebrow: "Wahpeton, ND",
    lead: "Wahpeton is not Fargo. NDSCS is not NDSU. We still document it because students, families, and search queries treat the Red River Valley as one region.",
    priority: 0.58,
    keywords: ["Wahpeton ND", "NDSCS", "Breckenridge MN"],
    geo: { name: "Wahpeton", type: "City", city: "Wahpeton", state: "ND", county: "Richland County", lat: 46.265, lng: -96.606 },
    sections: [
      {
        heading: "Honest range",
        body: [
          "Help Me is built for Fargo–Moorhead. Wahpeton is surrounding region — about an hour south. Matching is not a promise that Fargo helpers will drive to NDSCS. The campus page explains NDSCS. This page exists so we do not pretend the Valley stops at Horace.",
        ],
      },
    ],
    related: ["campuses/ndscs", "cities/fargo", "for-students"],
    faqs: [
      {
        q: "Is Help Me a Wahpeton app?",
        a: "No. It is a Fargo–Moorhead app. Wahpeton is documented as surrounding region so students and families can see the difference.",
      },
    ],
  }),
  page({
    slug: "cities/detroit-lakes",
    kind: "city",
    title: "Help Me and Detroit Lakes, Minnesota",
    description:
      "Detroit Lakes is a lakes city east of Fargo–Moorhead. How it sits in the surrounding region for Help Me, events, and travel.",
    h1: "Detroit Lakes, on the edge of the map",
    eyebrow: "Detroit Lakes, MN",
    lead: "People in Fargo weekend here. People here drive to Fargo for shows and airports. That does not make Detroit Lakes a Help Me launch city.",
    priority: 0.5,
    keywords: ["Detroit Lakes MN", "Fargo lakes"],
    geo: { name: "Detroit Lakes", type: "City", city: "Detroit Lakes", state: "MN", lat: 46.817, lng: -95.845 },
    sections: [
      {
        heading: "Surrounding, on purpose",
        body: [
          "Ticketmaster’s Fargo radius can include shows people in Detroit Lakes drive to. Help Me matching is still Fargo–Moorhead-first. Use this page for orientation, not as a claim that we operate a lakes-city helper network.",
        ],
      },
    ],
    related: ["cities/fargo", "events", "cities/fergus-falls"],
    faqs: [
      {
        q: "Can I use Help Me in Detroit Lakes?",
        a: "The product is built for Fargo–Moorhead. We do not advertise a Detroit Lakes helper grid we do not operate.",
      },
    ],
  }),
  page({
    slug: "cities/fergus-falls",
    kind: "city",
    title: "Help Me and Fergus Falls, Minnesota",
    description:
      "Fergus Falls sits southeast of Fargo–Moorhead. Surrounding-region context for the Help Me community app.",
    h1: "Fergus Falls, surrounding region",
    eyebrow: "Fergus Falls, MN",
    lead: "I-94 southeast. A regional center of its own. Not a Fargo neighborhood, and not a Help Me metro we pretend to run.",
    priority: 0.48,
    keywords: ["Fergus Falls MN"],
    geo: { name: "Fergus Falls", type: "City", city: "Fergus Falls", state: "MN", lat: 46.284, lng: -96.078 },
    sections: [
      {
        heading: "Why this page exists",
        body: [
          "People search regional city names together. We answer with a boundary. Help Me is Fargo–Moorhead. Fergus Falls is surrounding. Official local services in Otter Tail County are the right emergency and social-service path there.",
        ],
      },
    ],
    related: ["cities/fargo", "cities/wahpeton", "cities/detroit-lakes"],
    faqs: [
      {
        q: "Is Fergus Falls in the Fargo–Moorhead app?",
        a: "It is surrounding region. We do not list it as a launch city.",
      },
    ],
  }),
  page({
    slug: "cities/grand-forks",
    kind: "city",
    title: "Help Me and Grand Forks, North Dakota",
    description:
      "Grand Forks and UND are up I-29 from Fargo. How they relate to Help Me, which is built for Fargo–Moorhead, not a statewide network.",
    h1: "Grand Forks is not Fargo",
    eyebrow: "Grand Forks, ND",
    lead: "UND, the other I-29 city, a rivalry people in this state can recite. Help Me still launches as a Fargo–Moorhead product.",
    priority: 0.55,
    keywords: ["Grand Forks ND", "UND", "Fargo vs Grand Forks"],
    geo: { name: "Grand Forks", type: "City", city: "Grand Forks", state: "ND", lat: 47.925, lng: -97.033 },
    sections: [
      {
        heading: "A different city, a different campus",
        body: [
          "Grand Forks has UND. Fargo has NDSU. Help Me’s official event sources are NDSU, MSUM, Concordia, M State, West Fargo, and Ticketmaster Fargo — not UND. We document Grand Forks so a search for “North Dakota campus help app” does not get a fake statewide claim.",
        ],
      },
    ],
    related: ["campuses/und", "campuses/ndsu", "cities/fargo", "for-students"],
    faqs: [
      {
        q: "Does Help Me work in Grand Forks?",
        a: "The app is built for Fargo–Moorhead. We do not operate a Grand Forks helper network and do not ingest the UND calendar.",
      },
    ],
  }),
  page({
    slug: "cities/oxbow",
    kind: "city",
    title: "Community help in Oxbow, North Dakota",
    description:
      "Oxbow is a small Cass County community south of Fargo. Surrounding-metro context for Help Me.",
    h1: "Help in Oxbow",
    eyebrow: "Oxbow, ND",
    lead: "A small residential community on the south edge of the Fargo metro, with the same winter and the same need for public meeting places.",
    priority: 0.45,
    keywords: ["Oxbow ND"],
    geo: { name: "Oxbow", type: "City", city: "Oxbow", state: "ND", county: "Cass County", lat: 46.674, lng: -96.803 },
    sections: [
      {
        heading: "South metro residential",
        body: [
          "Oxbow is surrounding Cass County. Help Me does not staff a town-specific team. Use public, well-lit meeting places and official emergency services when a neighbor is the wrong tool.",
        ],
      },
    ],
    related: ["cities/horace", "cities/fargo", "help/jump-start"],
    faqs: [
      {
        q: "Is Oxbow supported?",
        a: "It is documented as surrounding metro. Availability follows real helpers, not a city quota.",
      },
    ],
  }),
  page({
    slug: "cities/valley-city",
    kind: "city",
    title: "Community help in Valley City, North Dakota",
    description:
      "Valley City is the Barnes County seat on the Sheyenne River, known as the City of Bridges and home to VCSU. An hour west of Fargo — and outside Help Me’s coverage.",
    h1: "Help in Valley City",
    eyebrow: "Valley City, ND",
    lead: "A river town in a genuine valley, which makes it the rare North Dakota city where the landscape does something other than lie flat.",
    answer:
      "Valley City is the Barnes County seat, about an hour west of Fargo on I-94, built along the Sheyenne River rather than the Red. It is nicknamed the City of Bridges for the historic crossings that give the town its shape, and it is home to Valley City State University. Help Me is a Fargo–Moorhead product, so there are unlikely to be approved helpers here.",
    takeaways: [
      "Barnes County seat, roughly an hour west of Fargo on I-94.",
      "Sits on the Sheyenne River, not the Red — different watershed, different flooding.",
      "Home to Valley City State University.",
      "Outside Help Me’s metro coverage; local services are the real answer.",
    ],
    priority: 0.55,
    keywords: ["Valley City ND", "City of Bridges North Dakota", "Valley City State University", "Barnes County"],
    geo: { name: "Valley City", type: "City", city: "Valley City", state: "ND", county: "Barnes County", lat: 46.923, lng: -98.003 },
    sections: [
      {
        heading: "The bridges are the town",
        body: [
          "Valley City earned the City of Bridges name honestly — the Sheyenne cuts through it and the crossings, several of them historic, are what stitch the place together. The Hi-Line Railroad Bridge is the one people drive out to see: a single-track trestle built in the early 1900s for the Northern Pacific, roughly 3,860 feet long and over 160 feet above the river, among the longest and highest of its kind in the country.",
          "That valley is also why the town looks nothing like Fargo. Fargo is flat to the horizon in every direction. Here there are actual hills, actual river bends, and a scenic byway that follows the Sheyenne south.",
        ],
      },
      {
        heading: "A different river, a different flood story",
        body: [
          "This is not the Red River Valley’s overland flooding. The Sheyenne is its own system with its own behavior, and Valley City’s high-water years follow that river rather than the one running north through Fargo–Moorhead. If you moved here from the metro, the spring conversation is genuinely a different one.",
        ],
      },
      {
        heading: "What to use instead of an app",
        body: [
          "911 for emergencies. Valley City State public safety for anything on campus. Barnes County and city services for everything local. North Dakota 211 for referral. Those are staffed and they work here, which is more than can be said for a matching app whose helpers are all an hour east.",
        ],
      },
    ],
    related: ["campuses/valley-city-state", "cities/jamestown", "questions/does-help-me-work-outside-fargo", "resources/211-north-dakota", "glossary/511-road-conditions", "not-911"],
    faqs: [
      {
        q: "Why does Help Me have a page for a town it does not serve?",
        a: "So the answer is accurate instead of implied. Someone searching from Valley City deserves to be told the coverage is not here rather than to download an app and find an empty map.",
      },
      {
        q: "Is the drive to Fargo bad in winter?",
        a: "That stretch of I-94 crosses open country and closes in serious storms. Check ND 511 before you go and treat a no-travel advisory as an instruction.",
      },
    ],
  }),

  page({
    slug: "cities/jamestown",
    kind: "city",
    title: "Community help in Jamestown, North Dakota",
    description:
      "Jamestown is the Stutsman County seat on I-94, home to the University of Jamestown and the National Buffalo Museum. Ninety minutes from Fargo, outside Help Me’s coverage.",
    h1: "Help in Jamestown",
    eyebrow: "Jamestown, ND",
    lead: "The Buffalo City: a college town with a hospital, a reservoir, and a very large concrete bison on the hill above the interstate.",
    answer:
      "Jamestown is the Stutsman County seat, roughly ninety minutes west of Fargo on I-94. It is home to the University of Jamestown, the National Buffalo Museum and the well-known monumental buffalo statue, and the Jamestown Reservoir north of town. Help Me’s matching is built around the Fargo–Moorhead metro, so approved helpers are unlikely to be nearby.",
    takeaways: [
      "Stutsman County seat, about ninety minutes west of Fargo.",
      "University of Jamestown is the city’s four-year institution.",
      "Regional healthcare and services draw from a wide rural area.",
      "Outside Help Me’s coverage; use local and campus resources.",
    ],
    priority: 0.55,
    keywords: ["Jamestown ND", "University of Jamestown", "National Buffalo Museum", "Stutsman County"],
    geo: { name: "Jamestown", type: "City", city: "Jamestown", state: "ND", county: "Stutsman County", lat: 46.910, lng: -98.708 },
    sections: [
      {
        heading: "A regional hub, not a suburb",
        body: [
          "This is the important distinction. Towns like Horace or Harwood are metro satellites — people sleep there and live their day in Fargo. Jamestown is not that. It has its own university, its own healthcare, its own downtown, and it serves the rural counties around it. People here drive to Fargo for specific things, not by default.",
          "That independence is exactly why an app built for Fargo–Moorhead density does not transfer. The social fabric here already works; it just does not run through software written for a metro ninety minutes east.",
        ],
      },
      {
        heading: "The interstate is the variable",
        body: [
          "Everything about the Fargo relationship runs through I-94, and in winter that is a real dependency. Ground blizzards close this corridor. If you are planning a medical appointment, a flight out of Hector, or a move in January, the road status is the plan, not a detail of it.",
        ],
      },
      {
        heading: "The right resources here",
        body: [
          "911 for emergencies. University of Jamestown campus safety for campus incidents. City police and Stutsman County for local matters. North Dakota 211 for referral to services. All of those are staffed locally and none of them depend on who happens to have an app open.",
        ],
      },
    ],
    related: ["campuses/university-of-jamestown", "cities/valley-city", "questions/does-help-me-work-outside-fargo", "resources/211-north-dakota", "seasons/blizzard-day", "glossary/511-road-conditions"],
    faqs: [
      {
        q: "Is Jamestown part of the Fargo metro?",
        a: "No. It is its own city with its own institutions, about ninety minutes away, and it functions as a regional center rather than a suburb.",
      },
      {
        q: "Could Help Me work here eventually?",
        a: "It would take approved helpers living here in real numbers. Nothing is announced, and this page will say so plainly if that ever changes.",
      },
    ],
  }),

  page({
    slug: "cities/hillsboro",
    kind: "city",
    title: "Community help in Hillsboro, North Dakota",
    description:
      "Hillsboro is the Traill County seat on the Goose River, halfway up I-29 between Fargo and Grand Forks. What that midpoint position actually means day to day.",
    h1: "Help in Hillsboro",
    eyebrow: "Hillsboro, ND",
    lead: "Forty minutes from two different metros, which sounds convenient until you need something from one of them at nine at night.",
    answer:
      "Hillsboro is the Traill County seat, sitting on the south bank of the Goose River along I-29 roughly midway between Fargo and Grand Forks. That midpoint position defines it: residents split their shopping, healthcare, and commuting between two metros. Help Me is built for Fargo–Moorhead, and forty minutes of interstate is well outside a help request’s useful radius.",
    takeaways: [
      "Traill County seat, on the Goose River, directly on I-29.",
      "Roughly equidistant between Fargo and Grand Forks.",
      "Traill County also contains Mayville and Mayville State University.",
      "Too far from either metro for neighbor-scale app matching.",
    ],
    priority: 0.55,
    keywords: ["Hillsboro ND", "Traill County seat", "Goose River", "I-29 between Fargo and Grand Forks"],
    geo: { name: "Hillsboro", type: "City", city: "Hillsboro", state: "ND", county: "Traill County", lat: 47.402, lng: -97.060 },
    sections: [
      {
        heading: "The midpoint problem",
        body: [
          "Being halfway between two cities is not the same as being near either. A dead battery in a Fargo parking lot at lunchtime is a normal, solvable request, because that is where you actually are during the day. The same battery in a Hillsboro driveway on a Sunday is a different problem entirely, and no amount of app coverage fixes forty minutes of interstate.",
          "It also means residents genuinely split their loyalties — some households do healthcare in Grand Forks and shopping in Fargo, or the reverse. Neither metro fully claims Traill County.",
        ],
      },
      {
        heading: "Traill County has its own college town",
        body: [
          "Mayville, and Mayville State University, are in this county too. That matters for anyone assuming the nearest campus is an hour away in Fargo — the county has a four-year institution inside it, with its own campus safety and its own calendar.",
        ],
      },
      {
        heading: "Winter on this stretch of I-29",
        body: [
          "Flat, open, and exposed, running straight north with nothing to break the wind. It is one of the first corridors to become genuinely dangerous in a ground blizzard and one of the stretches that closes. Check ND 511 before committing to the drive in either direction.",
        ],
      },
    ],
    related: ["campuses/mayville-state", "cities/grand-forks", "cities/fargo", "for-commuters", "glossary/511-road-conditions", "seasons/blizzard-day"],
    faqs: [
      {
        q: "Would a Fargo helper drive up to Hillsboro?",
        a: "Requests go to approved helpers nearby, and forty minutes of interstate is not nearby. Assume no.",
      },
      {
        q: "Is Hillsboro in the Fargo metro?",
        a: "No. It is in Traill County, north of the Cass–Clay metropolitan area.",
      },
    ],
  }),

  page({
    slug: "cities/ada",
    kind: "city",
    title: "Community help in Ada, Minnesota",
    description:
      "Ada is the Norman County seat near the Wild Rice River — a town whose recent history is largely a flood-mitigation story. What that means and where to get help.",
    h1: "Help in Ada",
    eyebrow: "Ada, MN",
    lead: "A small county seat that has spent decades being very good at one specific thing: getting ready for water.",
    answer:
      "Ada is the Norman County seat in northwestern Minnesota, a town of roughly 1,600 people near the Wild Rice River, which flows on to join the north-running Red. Norman County has been included in a striking number of federally declared disasters over the past few decades, almost all of them flooding, and Ada’s modern infrastructure reflects that history.",
    takeaways: [
      "Norman County seat; population roughly 1,600.",
      "The Wild Rice River runs near town and drains into the Red.",
      "Flooding dominates the county’s disaster history, including 1997.",
      "Minnesota services apply here — not North Dakota ones.",
    ],
    priority: 0.55,
    keywords: ["Ada MN", "Norman County Minnesota", "Wild Rice River flooding", "Red River Valley towns"],
    geo: { name: "Ada", type: "City", city: "Ada", state: "MN", county: "Norman County", lat: 47.299, lng: -96.515 },
    sections: [
      {
        heading: "A town shaped by water",
        body: [
          "Norman County has been included in well over a dozen declared disasters in the last few decades, almost exclusively for flooding. The 1997 Red River Valley flood is the one everyone outside the region remembers, and communities here spent the years afterward on mitigation — infrastructure, backup power, and planning that a town of this size would not otherwise carry.",
          "The Wild Rice River runs near Ada rather than through the middle of it, which has not spared the town. Overland flooding on this terrain does not need a river view to reach you; on land this flat, water spreads sideways for miles.",
        ],
      },
      {
        heading: "Emergency management is the local expertise",
        body: [
          "In a flood year, the authority is Norman County emergency management and the city — not a neighbor app, and not a metro organization forty-five minutes southwest. When they call for sandbagging or issue road closures, that is coordinated work with locations and hours, and it has to run centrally to function.",
        ],
      },
      {
        heading: "Which state’s services apply",
        body: [
          "Minnesota’s. Norman County human services, Minnesota 211, and Minnesota programs — not the Cass County, North Dakota versions a search engine may surface first simply because Fargo is bigger and louder. 911 works regardless of which side of the valley you are on.",
        ],
      },
    ],
    related: ["cities/moorhead", "seasons/spring-thaw-and-flooding", "resources/211-minnesota", "resources/clay-county-resources", "glossary/red-river-of-the-north", "questions/does-help-me-work-outside-fargo"],
    faqs: [
      {
        q: "Does Help Me serve Norman County?",
        a: "Not meaningfully. Helper density follows population, and this is a rural county well outside the metro.",
      },
      {
        q: "Which 211 do I call from Ada?",
        a: "Minnesota’s. Services follow the state and county you are standing in, and the state line is a real boundary for everything except 911.",
      },
    ],
  }),

  page({
    slug: "cities/sabin",
    kind: "city",
    title: "Community help in Sabin, Minnesota",
    description:
      "Sabin is a small Clay County city about 14 miles southeast of Moorhead, served by the Moorhead school district — genuinely inside the metro’s daily life.",
    h1: "Help in Sabin",
    eyebrow: "Sabin, MN",
    lead: "Small enough that everyone knows the plow driver, close enough that the kids go to school in Moorhead.",
    answer:
      "Sabin is a city of roughly 600 people in Clay County, Minnesota, about 14 miles southeast of Moorhead. It is served by the Moorhead school district, which is a good indicator of how tightly it is woven into metro life — residents work, shop, and attend school across the Fargo–Moorhead area rather than in town.",
    takeaways: [
      "Clay County, Minnesota; population around 600.",
      "About 14 miles southeast of Moorhead.",
      "Served by the Moorhead school district.",
      "Minnesota county services apply; 911 works metro-wide.",
    ],
    priority: 0.6,
    keywords: ["Sabin MN", "Clay County Minnesota", "small towns near Moorhead", "Moorhead school district"],
    geo: { name: "Sabin", type: "City", city: "Sabin", state: "MN", county: "Clay County", lat: 46.780, lng: -96.652 },
    sections: [
      {
        heading: "The school district tells you what this place is",
        body: [
          "A town this size could easily be its own world. Sabin is not — it sits inside the Moorhead district, which means the daily rhythm here is metro rhythm: buses toward Moorhead in the morning, activities and games on the metro schedule, parents driving the same corridor everyone else drives.",
          "That is the practical difference between Sabin and a town like Ada or Hillsboro. Sabin is not a place near the metro. It is a small piece of it.",
        ],
      },
      {
        heading: "Where a request actually finds someone",
        body: [
          "Wherever you spend your day, which for most people here means Moorhead or Fargo. A dead battery in a Moorhead lot is an ordinary request with people nearby. The same battery in a Sabin driveway on a Sunday morning is a neighbor-you-already-know situation, which is what small towns have always been good at.",
        ],
      },
      {
        heading: "Clay County rules, not Cass County",
        body: [
          "Sabin is Minnesota. County human services, tenant law, and assistance programs follow Clay County and the state of Minnesota, not the North Dakota equivalents across the river. It is a short drive and a completely different legal stack.",
        ],
      },
    ],
    related: ["cities/moorhead", "cities/dilworth", "cities/glyndon", "schools/moorhead-high", "resources/clay-county-resources", "resources/211-minnesota"],
    faqs: [
      {
        q: "Is Sabin in the Fargo–Moorhead metro?",
        a: "It is in Clay County and functions as part of the metro’s daily life — school, work, and shopping all run through Moorhead and Fargo.",
      },
      {
        q: "Which police respond in Sabin?",
        a: "Clay County and Minnesota law enforcement. 911 is the emergency number on both sides of the river.",
      },
    ],
  }),

  page({
    slug: "cities/argusville",
    kind: "city",
    title: "Community help in Argusville, North Dakota",
    description:
      "Argusville is a small Cass County city at I-29 and County Road 4, north of Fargo — a quiet rural community inside the metro’s commuting shed.",
    h1: "Help in Argusville",
    eyebrow: "Argusville, ND",
    lead: "An interstate exit, a grain elevator’s worth of sky, and a twenty-minute drive to everything.",
    answer:
      "Argusville is a small Cass County city in the Red River Valley, sitting at the intersection of Interstate 29 and Cass County Road 4 north of Fargo. It is a quiet rural community within easy commuting distance of the metro, which means residents’ everyday needs mostly arise where they spend the day — in Fargo or West Fargo.",
    takeaways: [
      "Cass County, North Dakota, at I-29 and County Road 4.",
      "North of Fargo, inside the metro commuting shed.",
      "Same Cass County services as Fargo and West Fargo.",
      "Helper coverage in town itself is thin; the metro is where it works.",
    ],
    priority: 0.58,
    keywords: ["Argusville ND", "Cass County small towns", "north of Fargo I-29", "Red River Valley"],
    geo: { name: "Argusville", type: "City", city: "Argusville", state: "ND", county: "Cass County", lat: 47.052, lng: -96.947 },
    sections: [
      {
        heading: "An interstate town, for better and worse",
        body: [
          "Sitting on I-29 is what makes Argusville commutable — twenty-odd minutes to north Fargo on a clear day, which is why small towns along this corridor have held their population better than towns off it.",
          "It is also the vulnerability. This is the flattest, most exposed stretch of the valley, and the interstate that makes the commute easy is the same one that closes in a ground blizzard. The convenience and the risk are the same road.",
        ],
      },
      {
        heading: "Same county, different density",
        body: [
          "Argusville is Cass County, exactly like Fargo and West Fargo — the same sheriff, the same county human services, the same North Dakota programs. What differs is not the rules but the number of people within ten minutes of you, and an app that matches neighbors is entirely a function of that number.",
        ],
      },
      {
        heading: "What small towns already do well",
        body: [
          "The thing an app is trying to manufacture — knowing who nearby would help — mostly already exists in a town this size. The gap Help Me fills is a metro gap: being new, being alone at an odd hour, being somewhere nobody knows you. In Argusville the gap is usually smaller, and the honest thing is to say so.",
        ],
      },
    ],
    related: ["cities/harwood", "cities/fargo", "cities/west-fargo", "for-commuters", "resources/cass-county-resources", "glossary/511-road-conditions"],
    faqs: [
      {
        q: "Will helpers come out to Argusville?",
        a: "Requests are offered to approved helpers nearby. In a small town north of the metro, assume coverage is thin and the drive is real.",
      },
      {
        q: "Which county services apply?",
        a: "Cass County, North Dakota — the same ones that serve Fargo and West Fargo.",
      },
    ],
  }),
];
