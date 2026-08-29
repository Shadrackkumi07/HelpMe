import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const NEIGHBORHOOD_PAGES: SeoPage[] = [
  page({
    slug: "neighborhoods",
    kind: "hub",
    title: "Fargo–Moorhead neighborhoods on Help Me",
    description:
      "Help Me neighborhood pages for Fargo, Moorhead, and West Fargo — Broadway, NDSU, Davies, West Acres, Center Avenue, The Lights, and the blocks in between.",
    h1: "Neighborhoods the app is actually built around",
    eyebrow: "places",
    lead: "The metro is not one blob. Broadway is not 52nd Avenue. Center Avenue is not The Lights. These pages name the streets so a search — or a person standing in a parking lot — can tell where they are.",
    priority: 0.85,
    keywords: [
      "Fargo neighborhoods",
      "Moorhead neighborhoods",
      "West Fargo neighborhoods",
      "downtown Fargo",
      "West Acres",
    ],
    geo: { name: "Fargo–Moorhead", type: "Region", lat: 46.8772, lng: -96.7898 },
    sections: [
      {
        heading: "A map with names on it",
        body: [
          "Help Me matching is local to Fargo–Moorhead. Event calendars are local. Neighborhood pages exist so the product can be attached to Broadway, 19th Avenue North, 52nd Avenue South, Sheyenne Street, and Center Avenue instead of a generic “community app” that could be anywhere.",
          "Live help still shows as a coarse area of about 500 meters — not a pin on a driveway, not a house number. These pages describe the public ground you can actually meet on.",
        ],
      },
      {
        heading: "Three cities, a lot of parking lots",
        body: [
          "Fargo holds downtown, NDSU, West Acres, and the south-side growth around Davies and Osgood. Moorhead holds Center Avenue, two campuses, and south-side streets like Village Green. West Fargo holds Sheyenne Street, The Lights, and the newer additions that keep pushing toward Horace.",
          "Winter is the same winter in all three. Batteries die in mall lots, campus ramps, and cul-de-sacs. A grocery vestibule or a well-lit commercial entrance is still a better meeting point than a dark backyard.",
        ],
        bullets: [
          "Fargo: downtown, north side / NDSU, West Acres, south Fargo, older grid neighborhoods",
          "Moorhead: downtown Center Avenue, south Moorhead, Village Green",
          "West Fargo: The Lights, Sheyenne Crossing, Shadow Wood, Independence",
        ],
      },
      {
        heading: "Adults, public places, official help when it is official",
        body: [
          "Help Me is a community app for adults. Neighborhood pages near high schools describe the streets, the winter, and the public lots. They are not invitations for minors to meet strangers. School channels and family stay the right path for students who are not adults.",
          "Fargo Police, Moorhead Police, West Fargo Police, campus public safety, and 911 remain the right numbers for danger, crime, and medical emergencies. The app is the neighbor with a current staff-reviewed approval.",
        ],
      },
    ],
    related: ["cities", "cities/fargo", "cities/moorhead", "cities/west-fargo", "campuses", "for-neighbors", "help/jump-start"],
    faqs: [
      {
        q: "Does Help Me have a different app per neighborhood?",
        a: "No. One iPhone app for Fargo–Moorhead. These pages explain the streets, public meeting places, and official resources around each name.",
      },
      {
        q: "Will a helper see my house from the map?",
        a: "Open help shows a coarse area of about 500 meters, not a driveway. Exact location moves only after a helper accepts and you consent. You can meet in public instead.",
      },
      {
        q: "Are neighborhood pages for high school students?",
        a: "No. Help Me is for adults. Pages near Davies, Sheyenne, or Shanley describe the area for grown neighbors. They are not a youth meetup product.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/downtown-fargo",
    kind: "neighborhood",
    title: "Community help in downtown Fargo",
    description:
      "Ask for everyday help around Broadway and the Fargo Theatre. Public meeting places, coarse location, and winter jump starts — not a pin on your apartment.",
    h1: "Downtown Fargo, where the lights are already on",
    eyebrow: "Fargo, ND",
    lead: "The marquee on Broadway still works. So do the coffee shops under it. If you need a public place to meet someone with jumper cables, start on a street that already has people on it.",
    priority: 0.75,
    keywords: ["downtown Fargo help", "Broadway Fargo", "Fargo Theatre", "Island Park"],
    geo: {
      name: "Downtown Fargo",
      type: "Neighborhood",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.8772,
      lng: -96.7898,
    },
    sections: [
      {
        heading: "Broadway is the obvious meeting ground",
        body: [
          "Downtown Fargo is walkable in a way most of the metro is not. Broadway, Roberts Street, NP Avenue, Island Park, the Fargo Theatre — these are public, lit, and easy to describe in a sentence. Label a coffee shop, a grocery vestibule, or a well-traveled corner. Do not send a first meeting to a third-floor walk-up.",
          "Visitors get lost looking for the Theatre. Residents get stuck with a sofa on a narrow stair. None of that is a 911 call. All of it is why a local help app belongs on this grid instead of a national gig board.",
        ],
      },
      {
        heading: "The map does not drop a pin on 8th Street",
        body: [
          "Live help shows as a coarse circle of about 500 meters. That is an area, not your apartment door and not a parking stall behind a bar. Exact location is optional, after a helper accepts, and only if you say yes. Private chat opens between the two of you. Meet in public by default.",
        ],
      },
      {
        heading: "Winter still eats batteries here",
        body: [
          "Downtown lots and ramps freeze like everywhere else. A jump start is a public category. Meet in a lot with cameras and foot traffic, not an alley. Help Me is not a tow company and not a mechanic. If the car will not start after a jump, call a shop.",
        ],
      },
    ],
    related: [
      "cities/fargo",
      "neighborhoods/hawthorne",
      "neighborhoods/north-fargo",
      "campuses/ndsu",
      "help/jump-start",
      "help/local-guide",
      "resources/fargo-police",
    ],
    faqs: [
      {
        q: "Where should I meet a helper downtown?",
        a: "A named public place: a Broadway coffee shop, a grocery vestibule, Island Park during daylight, a well-lit ramp lobby. You choose the label. Exact location is optional.",
      },
      {
        q: "Can I ask for directions to the Fargo Theatre?",
        a: "Yes. Local guide and directions are everyday categories. Help Me is not a tour company. A neighbor who knows Broadway can still save a visitor a circling loop.",
      },
      {
        q: "Does downtown Fargo have its own helper list?",
        a: "No. Matching is local to the metro and to who is actually online. We do not invent a Broadway roster.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/north-fargo",
    kind: "neighborhood",
    title: "Community help in north Fargo near NDSU",
    description:
      "Everyday help along 19th Avenue North and NDSU — walks to the car, jump starts, directions. Coarse ~500m area on the map, not a pin on a residence hall.",
    h1: "North Fargo, where 19th Avenue does the commuting",
    eyebrow: "Fargo, ND",
    lead: "19th Avenue North is a campus commute, a bus line, and in January a row of parking lots that eat batteries. North Fargo is NDSU’s neighborhood whether you have a student ID or not.",
    priority: 0.74,
    keywords: ["north Fargo", "19th Avenue North", "NDSU neighborhood", "University Drive Fargo"],
    geo: {
      name: "North Fargo",
      type: "Neighborhood",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.91,
      lng: -96.8,
    },
    sections: [
      {
        heading: "Campus traffic, city streets",
        body: [
          "North Fargo holds NDSU, University Drive, 19th Avenue North, and the residential blocks that absorb students, staff, and people who just live here. A printer in a hall, a walk from the library, a dead battery after a night class — those asks belong on Help Me. A threat, a crime, or a medical emergency belongs on 911 or NDSU Police.",
          "Memorial Union is a public, obvious meeting place on campus. Off campus, pick a grocery, a well-lit lot, or a coffee counter — not a dark stretch of 12th Avenue North at 1 a.m.",
        ],
      },
      {
        heading: "Official Bison safety is still official",
        body: [
          "NDSU Police run official campus safety and escort programs. Help Me’s safety escort category is a community walk from an approved helper, not a contracted campus service. Use the university number when you want official response. Use the app when you want a neighbor.",
        ],
      },
      {
        heading: "Coarse location around the campus",
        body: [
          "The live map shows an approximate 500-meter area, not a pin on a residence hall or a house north of campus. Share more only after someone accepts, and only if you want to. Public meeting places stay the default in January the same as in September.",
        ],
      },
    ],
    related: [
      "campuses/ndsu",
      "cities/fargo",
      "neighborhoods/roosevelt",
      "neighborhoods/edgewood",
      "resources/ndsu-safety",
      "help/walk-to-car",
      "help/jump-start",
      "for-students",
    ],
    faqs: [
      {
        q: "Is Help Me an NDSU escort service?",
        a: "No. NDSU Police run official escorts. Help Me is community help from approved neighbors. Call campus police for official safety.",
      },
      {
        q: "Can I request a jump start near 19th Avenue?",
        a: "Yes. Meet in a public lot. A helper is not a tow truck. If the car still will not start, call a shop or campus parking resources.",
      },
      {
        q: "Do NDSU events show up in the app?",
        a: "Yes. Official MyNDSU events are ingested and linked back to myndsu.ndsu.edu/events. We do not invent a concert.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/south-fargo",
    kind: "neighborhood",
    title: "Community help in south Fargo",
    description:
      "Everyday help around Davies, 52nd Avenue South, and the Osgood growth — jump starts, lost items, public meeting spots. Coarse location, not your driveway.",
    h1: "South Fargo, past 32nd and still growing",
    eyebrow: "Fargo, ND",
    lead: "Davies on 52nd. New roofs. Long drives. The south side where a dead battery is a neighborhood problem, not a downtown inconvenience you can walk away from.",
    priority: 0.72,
    keywords: ["south Fargo", "52nd Avenue", "Davies Fargo", "Osgood Fargo"],
    geo: {
      name: "South Fargo",
      type: "Neighborhood",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.822,
      lng: -96.83,
    },
    sections: [
      {
        heading: "52nd Avenue is a city now",
        body: [
          "South Fargo used to be the edge. It is not. 32nd, 40th, 52nd Avenue South, I-29, Davies High School, and the Osgood additions turned farmland into a second commercial strip. People live here, shop here, and get stuck here in the same January as Broadway.",
          "Help Me is for adults. Davies is a high school. This page describes the streets around it. It is not a way for teenagers to meet strangers after a game. Families and official school channels stay the right path for students who are not adults.",
        ],
      },
      {
        heading: "Meet where the lights already are",
        body: [
          "Cul-de-sacs look friendly at noon and empty at 10 p.m. Default to a grocery entrance, a big-box vestibule, or a busy lot on 25th Street or 52nd Avenue. You label the public place. The map still shows a coarse area, not the house three turns off the collector.",
        ],
      },
      {
        heading: "Cars, winter, distance",
        body: [
          "South Fargo is car country. Jump starts belong in public lots. There is no guaranteed helper on every block and no paid ETA. If nobody accepts within two hours, the request closes and you can try again. 911 is still 911 if the situation is actually an emergency.",
        ],
      },
    ],
    related: [
      "cities/fargo",
      "neighborhoods/osgood",
      "neighborhoods/rose-creek",
      "neighborhoods/bennett",
      "neighborhoods/prairie-grove",
      "schools/fargo-davies",
      "help/jump-start",
    ],
    faqs: [
      {
        q: "Is Help Me for Davies students?",
        a: "Help Me is an adult community app. High school students should use official school and family channels, not an app to meet strangers.",
      },
      {
        q: "Can I get a jump start near 52nd Avenue?",
        a: "Yes — that is a core public category. Meet in a public lot. A helper is not a mechanic or a tow company.",
      },
      {
        q: "Will the map show my south Fargo driveway?",
        a: "No. Open help is a coarse ~500 m area. Exact location is opt-in after someone accepts. Public meeting places are the default.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/west-acres",
    kind: "neighborhood",
    title: "Community help around West Acres in Fargo",
    description:
      "West Acres Mall, 13th Avenue and 45th Street — the classic Fargo winter jump-start lot. Everyday help with a coarse ~500m location, not a pin on your stall.",
    h1: "West Acres, where cars go to sleep in January",
    eyebrow: "Fargo, ND",
    lead: "13th Avenue and 45th Street. The mall. The interstate ramps. The parking lot that looks fine until it is 18 below and the battery is done.",
    priority: 0.73,
    keywords: ["West Acres Fargo", "jump start West Acres", "13th Avenue 45th Street", "West Acres Mall help"],
    geo: {
      name: "West Acres",
      type: "Neighborhood",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.8685,
      lng: -96.847,
    },
    sections: [
      {
        heading: "The lot is the neighborhood",
        body: [
          "West Acres is a mall, a commercial strip, hotels, and the housing around 13th Avenue South. It is also the place Fargo people picture when they say “my car died at the mall.” Jump starts are a public Help Me category for a reason. Meet near an entrance with cameras and foot traffic, not the far dark row.",
          "Lost-and-found asks happen here too — a wallet, a set of keys, a phone left at a food court table. The app is not the mall’s lost-and-found desk. It is a way to ask a nearby approved helper without posting your stall number to a Facebook thread.",
        ],
      },
      {
        heading: "Coarse area, not stall 247",
        body: [
          "The live map shows about 500 meters. That is the mall and the streets around it, not your exact parking space. After a helper accepts, you decide whether to share more. A private chat opens between the two of you. You can still just say “west entrance.”",
        ],
      },
      {
        heading: "I-29 and I-94 do not make this a dispatch center",
        body: [
          "The interstates dump traffic here. That does not mean Help Me runs a roadside service. No paid gigs, no tow trucks, no promised arrival time. If you are on the shoulder of I-29, call official help. If you are in a lot and the day is stuck, ask a neighbor.",
        ],
      },
    ],
    related: [
      "cities/fargo",
      "help/jump-start",
      "help/lost-and-found",
      "neighborhoods/south-fargo",
      "cities/west-fargo",
      "guides/how-to-stay-safe",
      "resources/fargo-police",
    ],
    faqs: [
      {
        q: "Can I request a jump start at West Acres?",
        a: "Yes. Post the ask, meet at a public entrance, and do not treat a helper as a mechanic. If the car still will not start, call a shop or a tow.",
      },
      {
        q: "Will helpers see which stall I am in?",
        a: "Not from the open map. They see a coarse area. You share exact location only after they accept, and only if you want to.",
      },
      {
        q: "Is this a paid car service?",
        a: "No. Help Me is not a gig marketplace. Helpers are approved community members, not contractors for hire.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/osgood",
    kind: "neighborhood",
    title: "Community help in Osgood, Fargo",
    description:
      "Osgood’s south Fargo streets, golf course, and cul-de-sacs — everyday neighbor help with public meeting places. Coarse location, not a pin on your driveway.",
    h1: "Osgood, where the south side turns into cul-de-sacs",
    eyebrow: "Fargo, ND",
    lead: "Newer roofs, collector roads, a golf course, and a lot of turns before you reach a front door. Osgood is south Fargo’s planned neighborhood, not a downtown shortcut.",
    priority: 0.68,
    keywords: ["Osgood Fargo", "Osgood neighborhood", "south Fargo Osgood"],
    geo: {
      name: "Osgood",
      type: "Neighborhood",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.815,
      lng: -96.86,
    },
    sections: [
      {
        heading: "Planned streets, real winter",
        body: [
          "Osgood sits in southwest Fargo near 52nd Avenue and the golf course that named it. Homes are newer. Lots are tidy. Side streets go quiet after dark. That last fact matters more than the granite in the kitchen when you are asking a stranger for a jump.",
          "Some addresses here sit in West Fargo school geography even while the mailbox says Fargo. Help Me does not care which district collects the taxes. Matching is metro-local. Official police still follow the city limit.",
        ],
      },
      {
        heading: "Do not meet at the end of the court",
        body: [
          "A cul-de-sac is a poor first meeting place in January. Use a grocery on 52nd, a well-lit commercial lot, or a busy corner you can name. The map shows a coarse ~500 m area, not your driveway three turns off the collector. Exact location waits on your consent after someone accepts.",
        ],
      },
      {
        heading: "Adults on these streets",
        body: [
          "Osgood is family housing. Help Me is still an adult app. It is not a way to arrange for minors to meet people they do not know. School pickup lines and official school channels stay the right tools for kids.",
        ],
      },
    ],
    related: [
      "neighborhoods/south-fargo",
      "neighborhoods/independence",
      "neighborhoods/rose-creek",
      "cities/fargo",
      "cities/west-fargo",
      "help/jump-start",
      "schools/fargo-davies",
    ],
    faqs: [
      {
        q: "Is Osgood in Fargo or West Fargo?",
        a: "The neighborhood is in south Fargo. Some school assignments follow West Fargo Public Schools. Official emergency services follow the city you are standing in.",
      },
      {
        q: "Should I have a helper pull into my cul-de-sac?",
        a: "Meet in public first. Share a driveway only after you have accepted each other and you actually want to. Coarse area is the default map.",
      },
      {
        q: "Is there an Osgood-only helper group?",
        a: "No. One Fargo–Moorhead community. Availability follows real, online, approved helpers — not a subdivision roster.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/rose-creek",
    kind: "neighborhood",
    title: "Community help in Rose Creek, Fargo",
    description:
      "Rose Creek in south Fargo — golf-course streets, family lots, winter cars. Ask nearby adults for everyday help; meet in public, not at the end of the fairway.",
    h1: "Rose Creek, south Fargo with a golf course in the middle",
    eyebrow: "Fargo, ND",
    lead: "Fairways, bigger lots, 40th Avenue gravity. Rose Creek looks settled until a battery dies and the nearest public door is farther than it looked from the kitchen.",
    priority: 0.66,
    keywords: ["Rose Creek Fargo", "Rose Creek neighborhood", "south Fargo golf"],
    geo: {
      name: "Rose Creek",
      type: "Neighborhood",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.84,
      lng: -96.805,
    },
    sections: [
      {
        heading: "A neighborhood wrapped around a course",
        body: [
          "Rose Creek sits in south Fargo around the public golf course and Rose Coulee. Streets are residential. Trees are older than a lot of Osgood. People drive to almost everything. That is fine for groceries. It is a problem when the car will not turn over and you would rather not post the house number on a neighborhood app with a comment thread.",
        ],
      },
      {
        heading: "Public doors beat fairway edges",
        body: [
          "The course is pretty. It is not a great place to meet a stranger after dark. Use a grocery vestibule, a well-lit lot on a collector, or another named public place. Help Me shows a coarse area of about 500 meters — not the driveway that backs to a green.",
        ],
      },
      {
        heading: "Same winter, same rules",
        body: [
          "Jump starts, lost-and-found, a hand with something heavy. Approved helpers only. Private chat. Report, block, or delete the account by typing DELETE. Fargo Police and 911 remain the official path when a neighbor is the wrong tool.",
        ],
      },
    ],
    related: [
      "neighborhoods/south-fargo",
      "neighborhoods/lincoln",
      "neighborhoods/osgood",
      "cities/fargo",
      "help/jump-start",
      "help/lost-and-found",
    ],
    faqs: [
      {
        q: "Can I meet a helper at the golf course?",
        a: "Daylight, populated clubhouse lots are better than an empty cart path. Named, lit public places are still the default. You choose the label.",
      },
      {
        q: "Does the map show my Rose Creek house?",
        a: "Open help is a coarse circle. Exact location is off until a helper accepts and you consent. You can skip exact sharing entirely.",
      },
      {
        q: "Is Help Me a neighborhood watch?",
        a: "No. It is a request sent to approved helpers, not a public feed of suspicious cars. Call Fargo Police for crime.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/edgewood",
    kind: "neighborhood",
    title: "Community help in Edgewood, Fargo",
    description:
      "Edgewood in north Fargo — golf course, river corridor, Trollwood nearby. Everyday adult help with public meeting places and coarse location, not a driveway pin.",
    h1: "Edgewood, north Fargo against the river",
    eyebrow: "Fargo, ND",
    lead: "Golf course on one side, Red River weather on the other. Edgewood is north Fargo’s quieter residential strip — still in the same winter as 19th Avenue, just with fewer buses.",
    priority: 0.64,
    keywords: ["Edgewood Fargo", "Edgewood Golf Course", "north Fargo river"],
    geo: {
      name: "Edgewood",
      type: "Neighborhood",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.917,
      lng: -96.805,
    },
    sections: [
      {
        heading: "North of campus, not on campus",
        body: [
          "Edgewood sits north of NDSU’s core, near Edgewood Golf Course, Trollwood, and the river corridor. It is residential in a way University Drive is not. People who live here still drive south for almost everything, and they still get stuck when a battery quits in a garage that will not open from the street.",
        ],
      },
      {
        heading: "The river is not a meeting plan",
        body: [
          "Parks along the Red River are beautiful and not always the right ground after dark. Meet at a lit commercial door, a grocery, or another place with people. Help Me’s map stays coarse — about 500 meters — so a request is not a pin on a river-lot driveway.",
        ],
      },
      {
        heading: "Official help is still Fargo",
        body: [
          "This is Fargo, Cass County, North Dakota. Fargo Police and 911 handle emergencies. NDSU Police handle campus emergencies south of here. Help Me is everyday, non-emergency help from an approved neighbor. Approval is a staff review of identity evidence, not a criminal background check we pretend to sell.",
        ],
      },
    ],
    related: [
      "neighborhoods/north-fargo",
      "campuses/ndsu",
      "cities/fargo",
      "cities/harwood",
      "help/jump-start",
      "resources/fargo-police",
    ],
    faqs: [
      {
        q: "Is Edgewood close enough for NDSU helpers?",
        a: "Matching considers nearby approved helpers who are online. Distance is real. There is no campus-shift board and no promised drive from Memorial Union.",
      },
      {
        q: "Can I ask for a walk to the car here?",
        a: "Community escort is an everyday category for adults. Meet in public. It is not Fargo Police and not NDSU Police.",
      },
      {
        q: "Does Trollwood change how Help Me works?",
        a: "No. Events at Trollwood are not a Help Me source unless they appear on a calendar we already ingest. The app rules stay the same.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/lincoln",
    kind: "neighborhood",
    title: "Community help in Lincoln, Fargo",
    description:
      "Lincoln in central Fargo, near Lincoln Elementary and I-94 — everyday adult help, public meeting places, and a coarse ~500m map that is not your driveway.",
    h1: "Lincoln, the central Fargo grid that still has yards",
    eyebrow: "Fargo, ND",
    lead: "Between the Country Club and University Drive at I-94. Lincoln is the established middle of Fargo: trees, elementary-school streets, and a commute that is short until the car is dead.",
    priority: 0.65,
    keywords: ["Lincoln Fargo", "Lincoln neighborhood Fargo", "Lincoln Elementary Fargo"],
    geo: {
      name: "Lincoln",
      type: "Neighborhood",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.855,
      lng: -96.798,
    },
    sections: [
      {
        heading: "Central, not downtown",
        body: [
          "Lincoln sits in the older south-central grid — Lincoln Elementary, Rabanus Park, a shot at I-94, University Drive as the spine. You can be downtown in minutes. You can also be stuck in a driveway that Google Maps treats as a through-street and a human treats as home.",
          "Help Me is for adults on these blocks. An elementary school nearby does not make the app a pickup-line tool or a way for children to meet strangers. Official school and family channels stay the right path for kids.",
        ],
      },
      {
        heading: "Name a public door",
        body: [
          "A park at noon is one thing. A park after dark is another. Prefer a grocery, Courts Plus if it is open and populated, or another lit entrance you can describe. The live map shows a coarse area, not the house behind the park.",
        ],
      },
      {
        heading: "I-94 is close. Tow trucks are not us.",
        body: [
          "If you are actually on the interstate, call official help. If you are in a lot off University Drive, a jump start from an approved helper is the everyday version. Private chat. Meet in public. Report and block sit one tap away.",
        ],
      },
    ],
    related: [
      "cities/fargo",
      "neighborhoods/hawthorne",
      "neighborhoods/jefferson",
      "neighborhoods/rose-creek",
      "help/jump-start",
      "help/safety-walk",
      "resources/fargo-police",
    ],
    faqs: [
      {
        q: "Is Lincoln the same as downtown Fargo?",
        a: "No. Downtown is Broadway and the Theatre. Lincoln is the residential grid south of that, toward I-94 and University Drive.",
      },
      {
        q: "Can I use Help Me during a school event?",
        a: "Adults can ask for everyday help. This is not a student meetup. Meet in public, away from school dismissal chaos if you can.",
      },
      {
        q: "How precise is my location on the map?",
        a: "About 500 meters until you consent to share more with the helper who accepted. You can keep it coarse and meet at a labeled public place.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/hawthorne",
    kind: "neighborhood",
    title: "Community help in Hawthorne, Fargo",
    description:
      "Hawthorne is one of Fargo’s oldest neighborhoods, a walk from downtown. Everyday adult help, public meeting places, coarse location — not a pin on a porch.",
    h1: "Hawthorne, old Fargo with glass streetlights",
    eyebrow: "Fargo, ND",
    lead: "Victorian porches, mature trees, a short walk to Broadway. Hawthorne is the neighborhood people mean when they say they live “just south of downtown” and still shovel a real sidewalk.",
    priority: 0.67,
    keywords: ["Hawthorne Fargo", "historic Fargo neighborhood", "Hawthorne Elementary"],
    geo: {
      name: "Hawthorne",
      type: "Neighborhood",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.868,
      lng: -96.792,
    },
    sections: [
      {
        heading: "Close enough to walk, still a neighborhood",
        body: [
          "Hawthorne is one of Fargo’s oldest residential fabrics — Hawthorne Elementary, glass streetlights, houses that predate the mall. Downtown is close. That is a gift for meeting in public: Broadway coffee, Island Park in daylight, a grocery on a collector. It is also a reason not to send a first meeting to a porch that looks friendly from the street and isolated from the sidewalk.",
        ],
      },
      {
        heading: "The grid is small. The circle is still coarse.",
        body: [
          "A 500-meter area covers a lot of historic blocks. That is the point. Open help is not a pin on a specific house. After a helper accepts, you choose whether to share more. Private chat is two people. Nobody else is in it.",
        ],
      },
      {
        heading: "Heavy things, old stairs",
        body: [
          "Move-in weekends and third-floor walk-ups are a Hawthorne specialty. A neighbor with a current approval can help with something heavy. They are not a moving company and not a landlord. Meet at the building entrance, not inside a unit, until you both decide otherwise.",
        ],
      },
    ],
    related: [
      "neighborhoods/downtown-fargo",
      "neighborhoods/jefferson",
      "neighborhoods/lincoln",
      "cities/fargo",
      "help/local-guide",
      "for-neighbors",
    ],
    faqs: [
      {
        q: "Can I meet a helper on Broadway if I live in Hawthorne?",
        a: "Yes. Downtown is close and public. A labeled coffee shop is often better than a quiet residential corner after dark.",
      },
      {
        q: "Will the whole block see my request?",
        a: "No. Eligible approved helpers get a private offer. There is no neighborhood feed of who needed help.",
      },
      {
        q: "Is Help Me a historic-district program?",
        a: "No. It is the same Fargo–Moorhead app. This page exists so the streets have a name in search, not a special partnership.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/roosevelt",
    kind: "neighborhood",
    title: "Community help in Roosevelt, Fargo",
    description:
      "Roosevelt near NDSU — older Fargo houses, student-adjacent streets, everyday adult help. Coarse location, public meeting places, not a residence-hall pin.",
    h1: "Roosevelt, where campus leaks into the grid",
    eyebrow: "Fargo, ND",
    lead: "1910s houses, Roosevelt Elementary, a bike ride to NDSU. Roosevelt is the neighborhood that absorbed the university without becoming a parking ramp.",
    priority: 0.66,
    keywords: ["Roosevelt Fargo", "Roosevelt NDSU", "Horace Mann Fargo"],
    geo: {
      name: "Roosevelt",
      type: "Neighborhood",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.892,
      lng: -96.789,
    },
    sections: [
      {
        heading: "Student-adjacent, still a city neighborhood",
        body: [
          "Roosevelt sits against NDSU’s south and west — older stock, rentals mixed with long-time owners, Horace Mann nearby. A study session, a jump after a night class, directions to a hall: those are Help Me asks. A threat on a street or in a house is 911 or NDSU Police.",
          "Help Me is for adults. It is not a high-school hangout and not a substitute for official campus safety. Memorial Union remains a better first meeting place than a basement apartment on a quiet block.",
        ],
      },
      {
        heading: "Porches are not public enough",
        body: [
          "Front porches look neighborly. They are still someone’s home. Default to a campus union, a coffee counter, or a lit commercial door. The map shows a coarse area, not the address on the rental listing.",
        ],
      },
      {
        heading: "Events are official, help is not campus police",
        body: [
          "NDSU’s MyNDSU calendar is one of the sources Help Me actually ingests. That does not make a helper an employee of the university. Staff-reviewed identity evidence is the helper gate. An old badge grants nothing.",
        ],
      },
    ],
    related: [
      "campuses/ndsu",
      "neighborhoods/north-fargo",
      "neighborhoods/downtown-fargo",
      "resources/ndsu-safety",
      "help/study-buddy",
      "help/walk-to-car",
      "for-students",
    ],
    faqs: [
      {
        q: "Do I need to be an NDSU student to use Help Me in Roosevelt?",
        a: "No. Neighbors, students, and staff use the same app. Helping still requires a current staff approval.",
      },
      {
        q: "Is a walk to the car the same as NDSU Police escort?",
        a: "No. Official escorts go through NDSU Police. Help Me is a community walk from an approved helper.",
      },
      {
        q: "Can I ask for a study buddy from this neighborhood?",
        a: "Yes. Study buddy is a campus category. Meet in a public place like Memorial Union. It is not tutoring-for-hire.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/jefferson",
    kind: "neighborhood",
    title: "Community help in Jefferson, Fargo",
    description:
      "Jefferson and Carl Ben in central Fargo — denser streets, older houses, everyday adult help. Meet in public; the map stays a coarse area, not your stoop.",
    h1: "Jefferson, the dense middle of Fargo’s old grid",
    eyebrow: "Fargo, ND",
    lead: "Jefferson Elementary, Carl Ben Eielson, Fargo South up the line. Smaller lots, more neighbors per block, and less room to pretend a side door is a public place.",
    priority: 0.64,
    keywords: ["Jefferson Fargo", "Carl Ben Fargo", "Jefferson neighborhood"],
    geo: {
      name: "Jefferson",
      type: "Neighborhood",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.863,
      lng: -96.778,
    },
    sections: [
      {
        heading: "More houses, same winter",
        body: [
          "Jefferson / Carl Ben is central Fargo’s denser residential fabric — 1940s–1960s stock, Jefferson Elementary, a path toward Carl Ben Eielson Middle and Fargo South. You hear your neighbors. You also share icy alleys and batteries that fail in the same week.",
          "Help Me is for adults. School names on this page describe geography. They are not a reason to recruit minors into meeting strangers.",
        ],
      },
      {
        heading: "Alleys are not meeting places",
        body: [
          "Fargo alleys are for trash carts and snow piles. Meet on a named commercial street, a grocery vestibule, or downtown if you can walk it. The live map is a coarse ~500 m area — in a dense grid that circle covers many houses, which is the privacy, not a bug.",
        ],
      },
      {
        heading: "Official Fargo is still official",
        body: [
          "Fargo Police, 911, and county services do not change because the lots are smaller. Report and block in the app if something feels wrong. Leave. Do not stay to be polite. Delete your account from inside the app by typing DELETE if you want out.",
        ],
      },
    ],
    related: [
      "neighborhoods/hawthorne",
      "neighborhoods/lincoln",
      "neighborhoods/downtown-fargo",
      "cities/fargo",
      "help/jump-start",
      "help/safety-walk",
      "resources/fargo-police",
    ],
    faqs: [
      {
        q: "Why is the map circle so big on a small block?",
        a: "Because it is supposed to be. About 500 meters keeps your stoop off the open map. Share exact location later, or never.",
      },
      {
        q: "Can I ask for a walk to my car on these streets?",
        a: "Yes, as community escort for adults. Meet in public. It is not Fargo Police.",
      },
      {
        q: "Is Jefferson the same as downtown?",
        a: "No. Downtown is the commercial core. Jefferson is the residential grid east and south of that core.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/downtown-moorhead",
    kind: "neighborhood",
    title: "Community help in downtown Moorhead",
    description:
      "Center Avenue downtown Moorhead — everyday help across the river from Fargo. Public meeting places, coarse location, Minnesota numbers when it is official.",
    h1: "Downtown Moorhead, Center Avenue first",
    eyebrow: "Moorhead, MN",
    lead: "Center Avenue is Moorhead’s public street. The river is a state line. People forget the second fact until they need a police department that is not Fargo’s.",
    priority: 0.72,
    keywords: ["downtown Moorhead", "Center Avenue Moorhead", "Moorhead MN help"],
    geo: {
      name: "Downtown Moorhead",
      type: "Neighborhood",
      city: "Moorhead",
      state: "MN",
      county: "Clay County",
      lat: 46.8738,
      lng: -96.7676,
    },
    sections: [
      {
        heading: "A downtown that is not Broadway",
        body: [
          "Downtown Moorhead along Center Avenue is smaller, Minnesota, and easy to skip if you only ever park on Broadway. It is still a real public meeting place: city buildings, storefronts, the corridor people actually walk. MSUM and Concordia sit minutes south. Students cross the river for food; Fargo people cross back for class.",
          "Gooseberry Park and the river trail are beautiful. They are not automatically the right place to meet a stranger after dark. Pick lit, populated ground. Label it in the request.",
        ],
      },
      {
        heading: "Minnesota services, same app",
        body: [
          "911 still works. Moorhead Police and Clay County are not Fargo Police and Cass County. Help Me matching does not stop at the Red River. Official food, housing, and mental-health resources can. Our resource pages keep that split honest.",
        ],
      },
      {
        heading: "Coarse on Center Avenue too",
        body: [
          "Live help shows about 500 meters, not an apartment above a storefront. Exact location is opt-in after a helper accepts. Private chat is two people. Meet in public by default — a named café, a grocery vestibule, a campus union if that is closer.",
        ],
      },
    ],
    related: [
      "cities/moorhead",
      "campuses/msum",
      "campuses/concordia",
      "neighborhoods/south-moorhead",
      "resources/moorhead-police",
      "help/local-guide",
      "help/jump-start",
    ],
    faqs: [
      {
        q: "Is Help Me available in Moorhead or only Fargo?",
        a: "Moorhead is part of the metro the app is built for. Matching is local, not Fargo-only.",
      },
      {
        q: "Where should I meet a helper downtown Moorhead?",
        a: "Center Avenue public places, a grocery vestibule, or a campus union at MSUM or Concordia. You choose the label.",
      },
      {
        q: "Do I call Fargo Police from Center Avenue?",
        a: "No. You are in Moorhead, Clay County, Minnesota. Use Moorhead Police or 911. Help Me does not dispatch anyone official.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/south-moorhead",
    kind: "neighborhood",
    title: "Community help in south Moorhead",
    description:
      "South Moorhead residential streets — Village Green, newer additions, winter cars. Everyday adult help with public meeting places, not a pin on your driveway.",
    h1: "South Moorhead, where the city keeps adding streets",
    eyebrow: "Moorhead, MN",
    lead: "South of the campuses, south of I-94’s pull, a mix of older houses and new additions. South Moorhead is the Minnesota side’s growth corridor, not a Fargo suburb with a different zip code.",
    priority: 0.66,
    keywords: ["south Moorhead", "Moorhead neighborhoods", "Moorhead MN south"],
    geo: {
      name: "South Moorhead",
      type: "Neighborhood",
      city: "Moorhead",
      state: "MN",
      county: "Clay County",
      lat: 46.85,
      lng: -96.755,
    },
    sections: [
      {
        heading: "The fastest-growing Moorhead corridor",
        body: [
          "South Moorhead holds Village Green, Johnson Farms, Prairie Meadows, Stonemill Estates, and the collector roads that feed them. People who live here still drive to Fargo jobs and still use MSUM and Concordia as landmarks. Help Me treats this as Moorhead, Clay County — because it is.",
        ],
      },
      {
        heading: "Cul-de-sacs need a public door",
        body: [
          "New additions love quiet courts. Quiet courts are a bad first meeting place at night. Use a grocery, a well-lit commercial lot on 20th Street or 30th Avenue, or a campus union if you are headed that way. The map stays a coarse area of about 500 meters, not the house on the circle.",
        ],
      },
      {
        heading: "Winter cars, Minnesota numbers",
        body: [
          "Jump starts belong in public lots. Moorhead Police and 911 handle emergencies. Help Me is not a tow, not a paid gig, and not a youth network for the high schools that serve this side of town. Adults ask adults. Official school channels stay for students who are not adults.",
        ],
      },
    ],
    related: [
      "neighborhoods/village-green",
      "neighborhoods/downtown-moorhead",
      "cities/moorhead",
      "cities/dilworth",
      "campuses/msum",
      "help/jump-start",
      "resources/moorhead-police",
    ],
    faqs: [
      {
        q: "Is south Moorhead in the same Help Me area as Fargo?",
        a: "Yes. One metro app. Official police still follow Moorhead and Clay County when you are on this side of the river.",
      },
      {
        q: "Can I meet a helper at MSUM if I live in south Moorhead?",
        a: "If that is a public, convenient place for both of you, yes. Campus unions are good default ground. MSUM Public Safety is still the official campus number.",
      },
      {
        q: "Will someone drive from Fargo to a south Moorhead court?",
        a: "Only if an approved helper is online and matching allows it. There is no dispatch guarantee and no paid ETA.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/village-green",
    kind: "neighborhood",
    title: "Community help in Village Green, Moorhead",
    description:
      "Village Green in south Moorhead — golf-course streets, family lots, winter jump starts. Public meeting places, coarse location, not a pin on Village Green Dr.",
    h1: "Village Green, Moorhead’s golf-course neighborhood",
    eyebrow: "Moorhead, MN",
    lead: "Village Green Drive, the city golf course, quiet circles south of 30th Avenue. A peaceful street is a selling point until you need a public door that is not your garage.",
    priority: 0.63,
    keywords: ["Village Green Moorhead", "Village Green Golf Course", "south Moorhead Village Green"],
    geo: {
      name: "Village Green",
      type: "Neighborhood",
      city: "Moorhead",
      state: "MN",
      county: "Clay County",
      lat: 46.845,
      lng: -96.745,
    },
    sections: [
      {
        heading: "A course with houses around it",
        body: [
          "Village Green is south Moorhead’s most-named residential development — the municipal 18-hole course, Village Green Drive, townhomes and single-family streets. It is Clay County. It is Minnesota. It is close enough to Dilworth that people confuse the edge, and far enough from Center Avenue that a dead battery feels local.",
        ],
      },
      {
        heading: "The clubhouse is better than the cul-de-sac",
        body: [
          "If the course is open and populated, a public lot there beats the end of a court. A grocery on a collector is even more obvious. Help Me shows a coarse ~500 m area, not a pin on Village Green Lane. Exact location waits on your yes after someone accepts.",
        ],
      },
      {
        heading: "Adults, not a youth meetup",
        body: [
          "This is family housing. Help Me is still for adults. It is not how high school students arrange to meet strangers. Moorhead Public Schools and family channels remain the right path for kids. Report, block, and account deletion (type DELETE) are in the app for everyone else.",
        ],
      },
    ],
    related: [
      "neighborhoods/south-moorhead",
      "cities/moorhead",
      "cities/dilworth",
      "help/jump-start",
      "help/lost-and-found",
      "resources/moorhead-police",
    ],
    faqs: [
      {
        q: "Is Village Green in Dilworth?",
        a: "No. Village Green is in Moorhead. Dilworth starts farther east. Official services follow the city you are standing in.",
      },
      {
        q: "Can I request a jump start on Village Green Drive?",
        a: "Yes. Prefer a public lot over a quiet court. A helper is not a tow company.",
      },
      {
        q: "Does the golf course have its own Help Me page?",
        a: "No. This neighborhood page covers the streets around the course. Meet in public, wherever that public actually is.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/the-lights",
    kind: "neighborhood",
    title: "Community help around The Lights, West Fargo",
    description:
      "The Lights at Sheyenne and 32nd in West Fargo — plaza, lots, winter skating, jump starts. Public meeting ground with coarse location, not your apartment door.",
    h1: "The Lights, West Fargo’s public plaza",
    eyebrow: "West Fargo, ND",
    lead: "Sheyenne Street and 32nd Avenue South. Apartments, restaurants, a plaza that hosts concerts and, in winter, ice. If West Fargo has an obvious public meeting place, this is it.",
    priority: 0.7,
    keywords: ["The Lights West Fargo", "Sheyenne 32nd", "West Fargo events plaza"],
    geo: {
      name: "The Lights",
      type: "Neighborhood",
      city: "West Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.847,
      lng: -96.896,
    },
    sections: [
      {
        heading: "A mixed-use corner that actually has people on it",
        body: [
          "The Lights is apartments, dining, and a plaza — not a cul-de-sac with a fountain. That makes it useful. Label a public entrance, a populated plaza edge, a grocery nearby. Do not send a first meeting to a fourth-floor hallway because the building looks new.",
          "West Fargo’s official community calendar is one of the sources Help Me ingests, at westfargo.org/Calendar.aspx. Concerts at the plaza may show up that way, or through Ticketmaster’s Fargo radius. We do not invent a show to fill the rail.",
        ],
      },
      {
        heading: "Lots freeze here too",
        body: [
          "Jump starts in The Lights lots are a classic January ask. Meet near cameras and foot traffic. Community escort is a walk from an approved helper, not West Fargo Police. If you are in danger, call 911.",
        ],
      },
      {
        heading: "Coarse circle over a busy corner",
        body: [
          "A 500-meter area covers the plaza, the apartments, and a chunk of Sheyenne Street. That is enough for a helper to know the neighborhood without getting your unit number. Share more only after they accept, and only if you want to. Private chat. Report and block stay one tap away.",
        ],
      },
    ],
    related: [
      "cities/west-fargo",
      "neighborhoods/sheyenne-crossing",
      "neighborhoods/shadow-wood",
      "events",
      "help/jump-start",
      "help/safety-walk",
      "resources/west-fargo-police",
      "guides/west-fargo-community-help",
    ],
    faqs: [
      {
        q: "Does Help Me list concerts at The Lights?",
        a: "If they appear on the official West Fargo calendar or Ticketmaster Fargo, they can show up with the source still attached. We do not scrape random flyers.",
      },
      {
        q: "Can I meet a helper at the plaza?",
        a: "Yes — it is public and usually populated. Winter ice and concert nights are crowded; pick a specific entrance so you can find each other.",
      },
      {
        q: "Is The Lights a Fargo neighborhood?",
        a: "No. It is West Fargo. West Fargo Police and the city calendar are the official local pieces. Help Me still treats it as its own place.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/sheyenne-crossing",
    kind: "neighborhood",
    title: "Community help in Sheyenne Crossing, West Fargo",
    description:
      "Sheyenne Street in West Fargo — the city’s real spine. Everyday adult help, public lots, and a coarse ~500m location. Not a pin on a side street off Sheyenne.",
    h1: "Sheyenne Crossing, along the street West Fargo actually uses",
    eyebrow: "West Fargo, ND",
    lead: "Sheyenne Street is West Fargo’s downtown whether the map admits it or not. Crossing it — Main to 32nd, river to the commercial strip — is how this city moves.",
    priority: 0.67,
    keywords: ["Sheyenne Crossing West Fargo", "Sheyenne Street", "West Fargo Sheyenne"],
    geo: {
      name: "Sheyenne Crossing",
      type: "Neighborhood",
      city: "West Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.855,
      lng: -96.905,
    },
    sections: [
      {
        heading: "The spine, not a subdivision logo",
        body: [
          "Sheyenne Crossing here means the Sheyenne Street corridor: residential blocks, commercial doors, the river on one side, the rest of West Fargo on the other. It is 1990s–2010s housing mixed with the places people actually buy milk. That mix is useful. A named storefront is a better meeting label than a court that only exists on a developer’s sign.",
        ],
      },
      {
        heading: "Public doors on Sheyenne",
        body: [
          "Grocery vestibules, busy lots, The Lights a short drive south. Meet where there are already people. The live map shows a coarse area of about 500 meters — not the driveway behind the fence on a side street. Exact location is a later, optional yes.",
        ],
      },
      {
        heading: "City calendar, city police",
        body: [
          "West Fargo publishes a public calendar Help Me actually pulls. West Fargo Police are the official number. Help Me is everyday help from an approved neighbor. It is not a paid marketplace, not 911, and not a program for minors near West Fargo High or Sheyenne High.",
        ],
      },
    ],
    related: [
      "cities/west-fargo",
      "neighborhoods/the-lights",
      "neighborhoods/shadow-wood",
      "schools/west-fargo-high",
      "help/jump-start",
      "help/local-guide",
      "resources/west-fargo-police",
    ],
    faqs: [
      {
        q: "Is Sheyenne Crossing the senior living campus?",
        a: "This page is the Sheyenne Street neighborhood corridor, not a care facility. Meet in public commercial places, not inside a residential campus.",
      },
      {
        q: "Can I get a jump start along Sheyenne Street?",
        a: "Yes. Use a public lot. Helpers are not mechanics. If you are on a fast-moving stretch of road, call official help instead of waiting on an app.",
      },
      {
        q: "Does West Fargo have its own Help Me app?",
        a: "No. One iPhone app. West Fargo has its own city page, neighborhoods, schools, and police resource page because it is not a Fargo appendix.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/shadow-wood",
    kind: "neighborhood",
    title: "Community help in Shadow Wood, West Fargo",
    description:
      "Shadow Wood in West Fargo — 2010s homes, splash-pad park, Sheyenne High nearby. Everyday adult neighbor help; public meeting places, not a cul-de-sac pin.",
    h1: "Shadow Wood, south West Fargo with a park in the name",
    eyebrow: "West Fargo, ND",
    lead: "2010s roofs, ponds, Shadow Wood Park, a bike ride from Sheyenne High. Family streets that go quiet. Quiet is nice until you need a public lot that is not your driveway.",
    priority: 0.64,
    keywords: ["Shadow Wood West Fargo", "Shadow Creek West Fargo", "Shadow Wood Park"],
    geo: {
      name: "Shadow Wood",
      type: "Neighborhood",
      city: "West Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.833,
      lng: -96.888,
    },
    sections: [
      {
        heading: "Newer West Fargo, still January",
        body: [
          "Shadow Wood and the Shadow Creek streets around it are south West Fargo’s 2010s housing — modern homes, trails, Shadow Wood Park with the splash pad in summer. Sheyenne High and Liberty Middle sit close enough that game nights fill the collectors. Help Me is not those games. It is an adult asking another approved adult for everyday help.",
        ],
      },
      {
        heading: "The park is for daylight",
        body: [
          "A splash pad at noon is public. A park path at 10 p.m. is not a good first meeting. Use a grocery on 40th Avenue or Veterans Boulevard, or a populated commercial lot. The map stays coarse — about 500 meters — not a pin on a pond-lot driveway.",
        ],
      },
      {
        heading: "High school nearby is geography, not a feature",
        body: [
          "Sheyenne High is in this part of the city. This page will not recruit students to meet strangers. Official school channels and family stay the path for minors. Adults can still ask for a jump start in a public lot after a late shift.",
        ],
      },
    ],
    related: [
      "cities/west-fargo",
      "neighborhoods/the-lights",
      "neighborhoods/osgood",
      "neighborhoods/independence",
      "schools/sheyenne-high",
      "help/jump-start",
      "resources/west-fargo-police",
    ],
    faqs: [
      {
        q: "Is Help Me for Sheyenne High students?",
        a: "No. Help Me is a community app for adults. High school students should not use it to meet strangers. Use official school and family channels.",
      },
      {
        q: "Can I meet at Shadow Wood Park?",
        a: "Daylight, populated park edges are better than a trail after dark. A grocery vestibule is usually clearer. You choose the public label.",
      },
      {
        q: "Will a helper see my pond-lot address?",
        a: "Not from the open map. Coarse area first. Exact location only after they accept, and only with your consent.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/prairie-grove",
    kind: "neighborhood",
    title: "Community help in Prairie Grove, Fargo",
    description:
      "Prairie Grove in south Fargo at 52nd and 25th — apartments, family streets, winter cars. Everyday adult help, public lots, coarse location not a building pin.",
    h1: "Prairie Grove, south Fargo off 52nd and 25th",
    eyebrow: "Fargo, ND",
    lead: "52nd Avenue South and 25th Street. Apartments with a grove in the name, Shanley across the way, Davies in the wider south-side gravity. A named corner on a busy collector — use that, not a back parking stall.",
    priority: 0.62,
    keywords: ["Prairie Grove Fargo", "52nd Avenue 25th Street", "south Fargo apartments"],
    geo: {
      name: "Prairie Grove",
      type: "Neighborhood",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.82,
      lng: -96.812,
    },
    sections: [
      {
        heading: "A south-side name on a busy corner",
        body: [
          "Prairie Grove sits in south Fargo near 52nd Avenue South and 25th Street — residential streets and apartment buildings that people search by name. Shanley High School is across the area. Davies is the public-school landmark farther along the south side. Those schools describe geography. They are not a reason to put teenagers in a chat with a stranger.",
        ],
      },
      {
        heading: "Collectors, not back lots",
        body: [
          "52nd and 25th have lights, traffic, and commercial doors. That is where a first meeting belongs. Underground ramps and far stall rows are how people get more stuck, not less. Help Me shows a coarse ~500 m area, not a unit number and not a stall.",
        ],
      },
      {
        heading: "Jump starts and lost keys",
        body: [
          "Apartment lots in January are jump-start country. Lost-and-found asks happen in vestibules. Approved helpers, private chat, public meeting places. Fargo Police if it is actually a crime. 911 if it is actually an emergency.",
        ],
      },
    ],
    related: [
      "neighborhoods/south-fargo",
      "neighborhoods/bennett",
      "neighborhoods/osgood",
      "cities/fargo",
      "schools/shanley",
      "help/jump-start",
      "help/lost-and-found",
      "for-neighbors",
    ],
    faqs: [
      {
        q: "Is Prairie Grove the same as Prairiewood?",
        a: "No. Prairiewood is a different Fargo neighborhood near I-29 and I-94. Prairie Grove is the south-side name around 52nd and 25th.",
      },
      {
        q: "Can high school students here use Help Me to find a ride?",
        a: "Help Me is for adults. It is not a student rideshare and not a way for minors to meet strangers. Use family and official school channels.",
      },
      {
        q: "Will the map show my apartment door?",
        a: "No. Open help is a coarse area. Share exact location only after a helper accepts, and only if you want to. A labeled public entrance is enough.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/bennett",
    kind: "neighborhood",
    title: "Community help in Bennett, Fargo",
    description:
      "Bennett in southeast Fargo, Davies-area streets — everyday adult help, public meeting places, winter jump starts. Coarse location, not a pin on your lot.",
    h1: "Bennett, southeast Fargo in the Davies gravity",
    eyebrow: "Fargo, ND",
    lead: "Quiet south-side streets, an elementary school with the same name, newer houses mixed with established ones. Bennett is the neighborhood people mean when they say they live “by Davies” and still want a front yard.",
    priority: 0.62,
    keywords: ["Bennett Fargo", "Bennett neighborhood Fargo", "southeast Fargo"],
    geo: {
      name: "Bennett",
      type: "Neighborhood",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.83,
      lng: -96.808,
    },
    sections: [
      {
        heading: "Southeast, not a downtown annex",
        body: [
          "Bennett sits in southeast Fargo’s Davies-area fabric — family streets, Bennett Elementary as a landmark, a drive to 32nd or 52nd for almost every errand. High-activity for movers. Low-activity at 11 p.m. on a court with no storefront. Plan the meeting for the second fact.",
        ],
      },
      {
        heading: "School names are not a meetup feature",
        body: [
          "An elementary school in the neighborhood name does not make Help Me a parent network for kids, and it does not make it a high-school rideshare. The app is for adults. Official school and family channels stay the right path for students who are not adults.",
        ],
      },
      {
        heading: "Public lot, coarse circle",
        body: [
          "Jump starts belong in a grocery or commercial lot you can name, not at the end of a court. Live help shows about 500 meters. Exact location is opt-in after accept. Private chat. West Acres is a short drive if that public ground is easier than yours.",
        ],
      },
    ],
    related: [
      "neighborhoods/south-fargo",
      "neighborhoods/prairie-grove",
      "neighborhoods/rose-creek",
      "cities/fargo",
      "schools/fargo-davies",
      "help/jump-start",
    ],
    faqs: [
      {
        q: "Is Bennett part of south Fargo?",
        a: "Yes — southeast Fargo in the wider Davies area. This page names the neighborhood so it is not only a pin on 52nd Avenue.",
      },
      {
        q: "Can I ask for help during a school event?",
        a: "Adults can. Meet in public, not at dismissal. Help Me is not for arranging contact with minors.",
      },
      {
        q: "Does matching prefer people on my block?",
        a: "Matching considers nearby approved helpers who are online. We do not run a block-captain list or a HOA board.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/independence",
    kind: "neighborhood",
    title: "Community help in Independence, West Fargo area",
    description:
      "Independence in the south West Fargo / Osgood growth — 54th Street, new schools, new lots. Adult neighbor help with public meeting places, not a driveway pin.",
    h1: "Independence, where the south metro is still being drawn",
    eyebrow: "West Fargo area",
    lead: "Independence Elementary at 54th Street South, new collectors, school boundaries that keep moving. This is the growth belt between Osgood, Sheyenne High, and the next plat.",
    priority: 0.6,
    keywords: ["Independence West Fargo", "Independence Elementary", "54th Street South Fargo"],
    geo: {
      name: "Independence",
      type: "Neighborhood",
      city: "West Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.818,
      lng: -96.868,
    },
    sections: [
      {
        heading: "A school name on a growing map",
        body: [
          "Independence is the West Fargo Public Schools landmark on 54th Street South — an elementary in the south growth belt, geographically tangled with Fargo addresses and West Fargo district lines. Osgood is next door. Sheyenne High is the high-school gravity. People live on streets that were fields recently enough that the GPS still hesitates.",
          "Help Me matching is metro-local. It does not resolve a city-limit argument. If you need police, call the city you are standing in, or 911.",
        ],
      },
      {
        heading: "New courts, old winter",
        body: [
          "New neighborhoods love long drives and unfinished sidewalks. Meet at a grocery on 52nd, a busy lot on Veterans Boulevard, or another named public door. Do not treat a dark cul-de-sac as public because the houses are new. The map shows a coarse ~500 m area, not your garage that still smells like paint.",
        ],
      },
      {
        heading: "Not a school pickup app",
        body: [
          "Independence Elementary, Freedom, Liberty, Sheyenne — those names describe this part of the metro. Help Me will not use them to recruit minors. Adults can ask for a jump start or a hand. Kids stay on official school and family channels.",
        ],
      },
    ],
    related: [
      "cities/west-fargo",
      "neighborhoods/osgood",
      "neighborhoods/shadow-wood",
      "neighborhoods/south-fargo",
      "schools/sheyenne-high",
      "help/jump-start",
      "resources/west-fargo-police",
    ],
    faqs: [
      {
        q: "Is Independence in Fargo or West Fargo?",
        a: "The elementary sits at 3700 54th St S with a Fargo mailing address and West Fargo schools. Official emergency services follow the city you are standing in. Help Me is the metro app either way.",
      },
      {
        q: "Will a helper come to a brand-new street GPS barely knows?",
        a: "Maybe, if they are online and matching allows it. Label a public place you can both find. There is no promised drive time.",
      },
      {
        q: "Can families use Help Me for school-age kids?",
        a: "Adults can ask other adults for everyday help. The app is not for minors to meet strangers, and not a school-issued safety program.",
      },
    ],
  }),
  page({
    slug: "neighborhoods/horace-mann",
    kind: "neighborhood",
    title: "Community help in the Horace Mann neighborhood, Fargo",
    description:
      "Horace Mann sits north of downtown Fargo with the Red River as its eastern edge — two historic districts, the oldest housing stock in the city, and the Oak Grove campus.",
    h1: "Horace Mann, where Fargo’s oldest housing meets the river",
    eyebrow: "Fargo, ND",
    lead: "Two National Register historic districts, a median house built in 1927, and a river trail at the end of the block.",
    answer:
      "Horace Mann is a predominantly residential Fargo neighborhood bordered by downtown to the south and the Red River to the east. It contains two National Register Historic Districts and some of the city’s oldest housing — the median owner-occupied home dates to about 1927 — along with the Oak Grove school campus in its southeast corner and an active neighborhood association.",
    takeaways: [
      "North of downtown Fargo; the Red River forms the eastern boundary.",
      "Two National Register Historic Districts within the neighborhood.",
      "Median owner-occupied home dates to roughly 1927 — the old stock.",
      "Named for Horace Mann Elementary, established in 1915.",
    ],
    priority: 0.62,
    keywords: ["Horace Mann Fargo", "Horace Mann neighborhood association", "historic Fargo neighborhoods", "Oak Grove Fargo"],
    geo: { name: "Horace Mann", type: "Neighborhood", city: "Fargo", state: "ND", county: "Cass County" },
    sections: [
      {
        heading: "Old houses have specific problems",
        body: [
          "A neighborhood whose median home was built in the 1920s is a neighborhood of detached garages down alleys, narrow driveways, steep front steps, and basements that predate every modern assumption. That is charming in September and it is a logistics problem in February, when the steps ice over and the alley is the last thing plowed.",
          "It is also why the help requests here skew toward snow and stairs rather than the parking-lot problems of the newer south side. Getting a car out of an alley-facing garage after a storm is a genuinely two-person job more often than people expect.",
        ],
      },
      {
        heading: "The river is the eastern edge",
        body: [
          "The Red River boundary brings the trail system, parks, and recreational fields right up against the neighborhood — Oak Grove Park, Trefoil Park, Mickelson Park with its softball fields, and Riverside Gardens are all in this orbit. It also means this is one of the neighborhoods that watches the spring water conversation closely, and riverside trail sections close in high-water years.",
        ],
      },
      {
        heading: "Downtown is walking distance",
        body: [
          "Downtown borders the neighborhood to the south, which makes it easy to name a lit, public, busy meeting place at almost any hour a business is open. The Horace Mann schoolyard — playground, open space, and winter ice — is the other landmark everyone here can find without a map.",
        ],
      },
    ],
    related: ["neighborhoods/downtown-fargo", "schools/oak-grove", "glossary/red-river-of-the-north", "help/snow-help", "glossary/plow-berm", "lists/walking-trails-fargo-moorhead"],
    faqs: [
      {
        q: "Is there an active neighborhood association?",
        a: "Yes. The Horace Mann Area Neighborhood Association is one of the registered neighborhood organizations the City of Fargo lists, and it maintains a public presence.",
      },
      {
        q: "Does the app show my house?",
        a: "No. Live help is a coarse area of roughly 500 meters. In a dense old grid that covers a lot of houses, which is the point.",
      },
    ],
  }),

  page({
    slug: "neighborhoods/washington",
    kind: "neighborhood",
    title: "Community help in the Washington neighborhood, Fargo",
    description:
      "Washington is a north Fargo neighborhood built around North High, Ben Franklin, and the VA Medical Center — single-family streets with a hospital shift schedule running through them.",
    h1: "Washington, north Fargo’s school-and-hospital neighborhood",
    eyebrow: "Fargo, ND",
    lead: "Three schools, a VA medical center, a public golf course, and a park with outdoor ice — most of north Fargo’s civic furniture is in this one neighborhood.",
    answer:
      "Washington is a primarily single-family neighborhood on Fargo’s north side, home to Washington Elementary, Ben Franklin Middle School, and North High School, plus the VA Medical Center on Elm Street at 21st Avenue North. Its median owner-occupied home dates to about 1950, and roughly two-thirds of its housing is owner-occupied.",
    takeaways: [
      "North Fargo; mostly single-family with scattered multi-unit housing.",
      "Contains Washington Elementary, Ben Franklin Middle, and North High.",
      "The VA Medical Center sits on Elm Street at 21st Avenue North.",
      "Roosevelt Park and El Zagel golf course are both here.",
    ],
    priority: 0.62,
    keywords: ["Washington neighborhood Fargo", "north Fargo", "Fargo VA Medical Center", "North High Fargo"],
    geo: { name: "Washington", type: "Neighborhood", city: "Fargo", state: "ND", county: "Cass County" },
    sections: [
      {
        heading: "A hospital neighborhood runs on a different clock",
        body: [
          "The VA Medical Center means a meaningful number of people here — staff and visitors both — are moving at shift-change hours rather than office hours. That shapes what help looks like: walks to a car in a lot at eleven at night, a battery that died during a twelve-hour shift, someone leaving a facility in weather they did not plan for.",
          "It also means veterans are neighbors here in real numbers, which is worth naming, because the services that actually matter to them are county veterans service officers and the VA — not a neighbor app.",
        ],
      },
      {
        heading: "Three schools and everything that comes with them",
        body: [
          "Washington Elementary, Ben Franklin Middle, and North High are all inside this neighborhood, which puts school traffic, activity schedules, and evening events into the street pattern most days of the year. North High’s grounds carry a lot of the public recreation load too — an outdoor pool, ball diamonds, football and tennis, and winter ice.",
        ],
      },
      {
        heading: "Parks, and one thing this neighborhood lacks",
        body: [
          "Roosevelt Park has playground and ice skating facilities, Elephant Park is a north Fargo fixture, and El Zagel is a public golf course inside the neighborhood boundary. What Washington does not currently have is a registered neighborhood organization on the city’s list — which, practically, means there is no association meeting to bring a problem to. Neighbor-to-neighbor is the channel that exists.",
        ],
      },
    ],
    related: ["schools/fargo-north", "for-veterans", "resources/veterans-services-fargo", "for-night-shift-workers", "neighborhoods/north-fargo", "help/walk-to-car"],
    faqs: [
      {
        q: "Is there a Washington neighborhood association?",
        a: "The City of Fargo’s list of registered neighborhood organizations does not currently include one for Washington. Several nearby neighborhoods do have them.",
      },
      {
        q: "Is this a good area to meet someone?",
        a: "School grounds during an event, the park, or a lit commercial entrance all work. Pick for the hour you are actually meeting, not for how it looks at noon.",
      },
    ],
  }),

  page({
    slug: "neighborhoods/clara-barton",
    kind: "neighborhood",
    title: "Community help in the Clara Barton neighborhood, Fargo",
    description:
      "Clara Barton sits between 13th Avenue and I-94 on Fargo’s original townsite, with Lindenwood Park on its east side and the Sanford and Essentia campuses on University Drive.",
    h1: "Clara Barton, the neighborhood behind the hospitals",
    eyebrow: "Fargo, ND",
    lead: "Ninety-five percent owner-occupied, bounded by two of the busiest corridors in the city, with a regional park on one edge and two hospital campuses on the other.",
    answer:
      "Clara Barton occupies part of Fargo’s original townsite, bordered by 13th Avenue to the north, Interstate 94 to the south, and the University Drive commercial corridor, with Lindenwood Park anchoring its eastern side. It is overwhelmingly owner-occupied — about 95 percent as of the 2010 census — with a median owner-occupied home dating to roughly 1949.",
    takeaways: [
      "Bounded by 13th Avenue, I-94, and the University Drive corridor.",
      "Lindenwood Park anchors the eastern side of the neighborhood.",
      "Essentia and Sanford Health operate campuses on University Drive.",
      "About 95% owner-occupied — unusually high for a core neighborhood.",
    ],
    priority: 0.62,
    keywords: ["Clara Barton Fargo", "Clara Barton neighborhood association", "Lindenwood Park Fargo", "University Drive Fargo"],
    geo: { name: "Clara Barton", type: "Neighborhood", city: "Fargo", state: "ND", county: "Cass County" },
    sections: [
      {
        heading: "A stable neighborhood with busy edges",
        body: [
          "The interior is quiet and long-settled — a 95 percent homeownership rate means most people here are not moving in August, which makes this one of the few core neighborhoods that does not get rearranged twice a year by student turnover.",
          "The edges are the opposite. 13th Avenue, I-94, and University Drive are three of the corridors this city actually moves on. That combination — calm inside, heavy traffic on every boundary — is what defines daily life here, including where it makes sense to meet somebody.",
        ],
      },
      {
        heading: "The hospital corridor",
        body: [
          "Essentia and Sanford Health both operate campuses along University Drive on this edge of the neighborhood. That means round-the-clock staffing, visitor parking, and a steady population of people arriving stressed, leaving exhausted, or waiting on someone. Ordinary requests here skew toward the parking-lot kind: a battery, a walk out at shift change, directions for someone who is not from Fargo and is not having a good day.",
        ],
      },
      {
        heading: "Lindenwood, and where to meet",
        body: [
          "Lindenwood Park on the east side is a regional draw with trail access along the river, and it is one of the easiest landmarks in Fargo to name without ambiguity. For a winter meet, the lit commercial entrances along the University Drive corridor beat a park bench by a wide margin.",
        ],
      },
    ],
    related: ["neighborhoods/hawthorne", "lists/walking-trails-fargo-moorhead", "for-night-shift-workers", "help/jump-start", "guides/how-to-find-a-safe-meeting-spot", "neighborhoods/south-fargo"],
    faqs: [
      {
        q: "Is there a neighborhood association here?",
        a: "Yes. Clara Barton is one of the registered neighborhood organizations the City of Fargo lists, and it is closely linked with neighboring Hawthorne.",
      },
      {
        q: "Where does the name come from?",
        a: "Clara Barton Elementary School, on 6th Street at 14th Avenue South. Many Fargo neighborhoods north of I-94 take their names and rough boundaries from an elementary school.",
      },
    ],
  }),

  page({
    slug: "neighborhoods/madison-unicorn-park",
    kind: "neighborhood",
    title: "Community help in Madison/Unicorn Park, Fargo",
    description:
      "Madison/Unicorn Park is a north Fargo neighborhood bordering downtown, served by both Madison and Roosevelt elementary schools — mostly single-family with scattered rentals.",
    h1: "Madison/Unicorn Park, north Fargo next to downtown",
    eyebrow: "Fargo, ND",
    lead: "One of the neighborhoods where you can walk to downtown and still have a driveway to shovel.",
    answer:
      "Madison/Unicorn Park is a north Fargo neighborhood bordering downtown, served by both Madison and Roosevelt elementary schools. Its housing is predominantly single-family detached with duplexes, triplexes, converted houses, and small apartment buildings scattered through it — a mix that puts owners and renters on the same blocks.",
    takeaways: [
      "North Fargo, bordering downtown — walkable to the core.",
      "Served by both Madison and Roosevelt elementary schools.",
      "Mostly single-family with scattered duplexes, conversions, and apartments.",
      "The city’s own name for it pairs the school with Unicorn Park.",
    ],
    priority: 0.62,
    keywords: ["Madison Unicorn Park Fargo", "north Fargo neighborhood", "downtown Fargo neighborhoods"],
    geo: { name: "Madison/Unicorn Park", type: "Neighborhood", city: "Fargo", state: "ND", county: "Cass County" },
    sections: [
      {
        heading: "A mixed-tenure neighborhood, which changes the asking",
        body: [
          "Converted houses and small apartment buildings mixed into a single-family grid means the people on one block are not all in the same situation. Some have lived here thirty years and own a snowblower. Some signed a twelve-month lease in August and have never seen a North Dakota winter.",
          "That mix is genuinely the argument for a help app at the neighborhood scale. The snowblower and the newcomer are two hundred feet apart and have no reliable way of finding each other, which is the whole problem See Beyond names.",
        ],
      },
      {
        heading: "Two elementary schools, one neighborhood",
        body: [
          "Being served by both Madison and Roosevelt is unusual, and it is why the city’s own label for this area carries two names. Practically, it means school-run traffic and activity schedules pull in two directions, and that a neighbor’s mental map of the area may not match yours.",
        ],
      },
      {
        heading: "Downtown on the doorstep",
        body: [
          "Bordering downtown makes this one of the easier neighborhoods to arrange a meeting in — Broadway and the surrounding blocks give you lit, busy, unambiguous places during business hours. Walking home from downtown at night in January is its own consideration, and a walk request is a normal thing to ask for.",
        ],
      },
    ],
    related: ["neighborhoods/downtown-fargo", "neighborhoods/roosevelt", "guides/downtown-fargo-at-night", "help/safety-walk", "help/snow-help", "for-renters"],
    faqs: [
      {
        q: "Why does this neighborhood have two names?",
        a: "The City of Fargo labels it Madison/Unicorn Park. Fargo neighborhoods north of I-94 generally follow elementary school boundaries, and this area is served by two schools.",
      },
      {
        q: "Is it walkable to downtown?",
        a: "It borders downtown, so yes for much of the neighborhood — with the usual winter caveat that dark comes before five and sidewalks are only as clear as the owner made them.",
      },
    ],
  }),

  page({
    slug: "neighborhoods/lewis-clark",
    kind: "neighborhood",
    title: "Community help in the Lewis & Clark neighborhood, Fargo",
    description:
      "Lewis & Clark sits inside the triangle of University Drive, I-94, and 13th Avenue South in Fargo, with a genuine mix of housing types and about 70 percent ownership.",
    h1: "Lewis & Clark, inside the triangle",
    eyebrow: "Fargo, ND",
    lead: "Three major thoroughfares draw the border, and everything inside them is quieter than the roads suggest.",
    answer:
      "Lewis & Clark is a Fargo neighborhood bordered by three of the city’s major thoroughfares — University Drive, Interstate 94, and 13th Avenue South. It has a genuine mix of housing types with roughly 70 percent owner-occupied, and it takes its name from Lewis and Clark Elementary School on 16th Street at 17th Avenue South.",
    takeaways: [
      "Bordered by University Drive, I-94, and 13th Avenue South.",
      "Good mix of housing types; roughly 70% owner-occupied.",
      "Named for Lewis and Clark Elementary, 16th Street at 17th Avenue South.",
      "Major-corridor edges make for easy, findable meeting places.",
    ],
    priority: 0.62,
    keywords: ["Lewis and Clark neighborhood Fargo", "13th Avenue South Fargo", "University Drive Fargo neighborhoods"],
    geo: { name: "Lewis & Clark", type: "Neighborhood", city: "Fargo", state: "ND", county: "Cass County" },
    sections: [
      {
        heading: "Bordered by roads people actually name",
        body: [
          "University Drive, 13th Avenue South, and I-94 are landmarks every Fargo resident can locate instantly, which makes this one of the easier neighborhoods to describe to a stranger. If you need someone to find you here, naming the nearest of those three and a cross street does more work than any amount of description.",
          "The trade-off is the usual one for a neighborhood defined by arterials: quiet interior streets, loud edges, and crossings that are less pleasant on foot in winter than the map implies.",
        ],
      },
      {
        heading: "A real housing mix",
        body: [
          "About 70 percent owner-occupied with a genuine variety of housing types means this is neither a student block nor a uniform subdivision. Long-term owners, renters, and everything between share the same streets — and the same February morning where half the cars on the block will not start.",
        ],
      },
      {
        heading: "Where the help requests come from",
        body: [
          "Ordinary ones. Batteries, berms, a hand with something heavy, a walk to a car after dark. Nothing exotic, which is the point — most of what neighbors need from each other is ten minutes and a set of cables, and it is the same in every part of this city.",
        ],
      },
    ],
    related: ["neighborhoods/clara-barton", "neighborhoods/south-fargo", "help/jump-start", "help/heavy-lifting", "guides/how-to-find-a-safe-meeting-spot", "lists/most-common-help-requests-fargo"],
    faqs: [
      {
        q: "Where does the neighborhood name come from?",
        a: "Lewis and Clark Elementary School, on 16th Street at 17th Avenue South. North of I-94, Fargo neighborhoods generally follow elementary school boundaries.",
      },
      {
        q: "How precise is the location the app shows?",
        a: "Live help appears as a coarse area of about 500 meters, never a pin on your address.",
      },
    ],
  }),
];
