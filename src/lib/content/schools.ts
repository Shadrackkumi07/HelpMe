import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

export const SCHOOL_PAGES: SeoPage[] = [
  page({
    slug: "schools",
    kind: "hub",
    title: "Fargo–Moorhead high schools, as community geography",
    description:
      "Community pages for adults around Fargo–Moorhead high schools — parents, neighbors, and winter lots. Help Me is not a K–12 student network.",
    h1: "High schools as places, not as a student app",
    eyebrow: "schools",
    lead: "A high school is a building, a parking lot, a Friday night, and a neighborhood that keeps going after the last bus. These pages map that community. They are not a social network for the people who still have a locker.",
    priority: 0.85,
    keywords: [
      "Fargo high schools",
      "West Fargo high schools",
      "Moorhead High",
      "Help Me schools",
      "not a student app",
    ],
    geo: { name: "Fargo–Moorhead", type: "Region", lat: 46.8772, lng: -96.7898 },
    sections: [
      {
        heading: "Community pages, not a student product",
        body: [
          "Help Me is a community app for adults in Fargo–Moorhead. These school URLs exist so a parent, a neighbor, or a search engine can find the honest version of the area around Fargo North, South, Davies, Shanley, Oak Grove, Park Christian, West Fargo, Sheyenne, Horace, Moorhead High, and the Cass and Clay County towns that feed this metro.",
          "They are geographic pages. They are not class-period chat, not a student meetup board, and not a district tool. High school students should use official school and family channels. Do not use this app to arrange for a K–12 student to meet a stranger.",
        ],
      },
      {
        heading: "What a school page is actually for",
        body: [
          "Each page names the school the way the town names it — Spartans, Bruins, Eagles, Packers, Mustangs, Spuds, Deacons, Grovers — then talks about the lots, the corridors, and the adult asks that happen after the gym empties. A jump start. A walk to a car. A sofa that will not turn the corner. Winter, every year.",
          "Official calendars, closures, and activities live on the district site. Help Me’s event feeds are campus and regional sources, not high-school athletics. If you need the school, go to the school.",
        ],
      },
      {
        heading: "Safety stays the same on every page",
        body: [
          "Approved helpers only. Approximate map area of about 500 meters until you consent after someone accepts. Private 1:1 chat. Meet in public. Report and block are always there. 911 is still 911. Identity evidence plus a staff decision is not a criminal background check, and we do not advertise one.",
        ],
      },
    ],
    related: ["for-parents", "safety", "cities", "help", "not-911", "how-it-works"],
    faqs: [
      {
        q: "Is Help Me a student social network for these schools?",
        a: "No. These are community and geography pages. Help Me is an adult app. It is not a K–12 program and not a way for students to meet strangers.",
      },
      {
        q: "Why do high school names have pages at all?",
        a: "Because people search them when they mean the neighborhood, the lot, and the Friday-night traffic. The pages describe the adult community around the building.",
      },
      {
        q: "Do you show high school games and closures?",
        a: "No. Use the official district site for that. Help Me does not ingest high-school calendars.",
      },
    ],
  }),
  page({
    slug: "schools/fargo-north",
    kind: "school",
    title: "Community around Fargo North High School",
    description:
      "Adult neighbor help near Fargo North Spartans — 17th Avenue North lots, NDSU-adjacent winter, jump starts. Help Me is not a K–12 student program.",
    h1: "Around Fargo North, the Spartans neighborhood",
    eyebrow: "Fargo North",
    lead: "Fargo North High sits at 801 17th Avenue North — navy and gold, Spartans, the north side of a city that still thinks of itself as a college town. This page is about the adults who live and work around that building, not a chat for the people inside it.",
    keywords: ["Fargo North High", "Spartans Fargo", "north Fargo help", "17th Avenue Fargo"],
    geo: {
      name: "Fargo North High School",
      type: "School",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.9039,
      lng: -96.7903,
    },
    sections: [
      {
        heading: "North Fargo, next to campus gravity",
        body: [
          "17th Avenue North is a school street and a commute. NDSU sits a few minutes away. Parents, teachers, and neighbors park in the same lots that freeze solid by January. A basketball night fills the building; a dead battery in the lot after is a neighbor problem, not a district one.",
          "Fargo Public Schools runs North. For calendars, closures, and activities, use the district site. Help Me does not ingest high-school calendars, and it does not speak for the Spartans.",
        ],
      },
      {
        heading: "What adults around North actually get stuck on",
        body: [
          "A jump start after a concert. A walk to a car on a dark 19th Avenue lot. Directions for a visitor who thought North was South. Heavy boxes when someone moves onto the north side. Meet in public: a grocery vestibule, a well-lit lot, a place with other people in it. The map shows a coarse area of about 500 meters, not a pin on a driveway.",
        ],
      },
      {
        heading: "Help Me is not a K–12 program",
        body: [
          "This is a community app for adults in Fargo–Moorhead. It is not a Fargo Public Schools product, not a student social network, and not a way for K–12 students to meet strangers. High school students should use official school and family channels. Helpers are adults whose identity evidence a staff member has reviewed. That is not a background check, and it is not a youth-safety program.",
        ],
      },
    ],
    related: [
      "cities/fargo",
      "campuses/ndsu",
      "for-parents",
      "safety",
      "help/jump-start",
      "help/winter-car-help",
      "resources/fargo-police",
    ],
    faqs: [
      {
        q: "Can Fargo North students request help on Help Me?",
        a: "Help Me is an adult community app, not a student meetup product. High school students should use official school and family channels.",
      },
      {
        q: "Does Help Me list Spartans games?",
        a: "No. Use the Fargo Public Schools site and the school’s own channels. Help Me’s event feeds are campus and regional calendars, not high-school athletics.",
      },
      {
        q: "Where should I meet a helper near North?",
        a: "A public, lit place you choose — not a dark residential street. Exact location stays off until you consent after someone accepts.",
      },
    ],
  }),
  page({
    slug: "schools/fargo-south",
    kind: "school",
    title: "Community around Fargo South High School",
    description:
      "Adult community help near Fargo South Bruins — 15th Avenue South, Island Park, and winter lots. Help Me is not a K–12 student network.",
    h1: "Around Fargo South, the Bruins side of town",
    eyebrow: "Fargo South",
    lead: "Fargo South High is at 1840 15th Avenue South — brown and gold, Bruins, the south-central grid that still feels like a city neighborhood instead of a new development. The adults around it still get stuck in the same winter as everyone else.",
    keywords: ["Fargo South High", "Bruins Fargo", "15th Avenue South Fargo", "south Fargo help"],
    geo: {
      name: "Fargo South High School",
      type: "School",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.8558,
      lng: -96.8119,
    },
    sections: [
      {
        heading: "South of Main, still in the older grid",
        body: [
          "15th Avenue South, University Drive, Island Park, the streets that filled before Davies pulled the far south away. Game nights clog the lot. West Acres is a short drive west when a car decides it is done. Downtown Broadway is close enough that a visitor can get lost between a Bruins event and a show.",
          "Fargo Public Schools publishes the official South calendar and closures. That is the district site, not this app.",
        ],
      },
      {
        heading: "Adult help in the lots and on the blocks",
        body: [
          "Jump starts after an evening event. A walk from a dark lot to a car. A sofa that will not pivot a south-side stair. Directions when someone meant Davies and landed at South. Private 1:1 chat after an approved helper accepts. Meet in public. Report and block if anything feels wrong.",
        ],
      },
      {
        heading: "Not a student meetup product",
        body: [
          "Help Me is not a K–12 program, not campus or school police, and not a place designed for children to meet strangers. High school students should stay on official school and family channels. Parents looking for the honest version of the app can start at the parents page. 911 remains 911.",
        ],
      },
    ],
    related: [
      "cities/fargo",
      "neighborhoods/downtown-fargo",
      "for-parents",
      "safety",
      "help/jump-start",
      "help/walk-to-car",
      "resources/fargo-police",
    ],
    faqs: [
      {
        q: "Is this the official Fargo South page?",
        a: "No. The official school lives on the Fargo Public Schools site. This page describes the adult community around the building.",
      },
      {
        q: "Can I ask for a jump start after a Bruins event?",
        a: "Adults can post everyday, non-emergency asks. Meet in a public lot. A helper is a neighbor, not a mechanic or a tow.",
      },
      {
        q: "Does Help Me replace school security?",
        a: "No. School safety, campus police, and 911 stay official. Help Me is community help for adults.",
      },
    ],
  }),
  page({
    slug: "schools/fargo-davies",
    kind: "school",
    title: "Community around Fargo Davies High School",
    description:
      "Adult help near Davies Eagles in south Fargo — 25th Street lots, new housing, Horace-adjacent winter. Help Me is not a K–12 student app.",
    h1: "Around Davies, where south Fargo keeps growing",
    eyebrow: "Fargo Davies",
    lead: "Davies High — the Eagles — opened on 25th Street South because the city ran out of south. Cardinal red, Vegas gold, a campus that still feels new, and a lot of parking that ices over the same as the rest of Cass County.",
    keywords: ["Fargo Davies", "Davies Eagles", "south Fargo high school", "25th Street South Fargo"],
    geo: {
      name: "Fargo Davies High School",
      type: "School",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.7803,
      lng: -96.8172,
    },
    sections: [
      {
        heading: "Far south, still Fargo",
        body: [
          "7150 25th Street South sits in the 58104 growth: new streets, long drives, Horace just beyond the city edge. A Davies event is a traffic event. The commercial strip along 52nd Avenue and 25th Street is where cars die in January, not because anyone did anything wrong — because it is Fargo.",
          "Davies is Fargo Public Schools. Closures, activities, and the official word live on the district site. Help Me does not run the Eagles calendar.",
        ],
      },
      {
        heading: "Winter car help in a big lot",
        body: [
          "Jump starts. A push out of a rutted stall. A walk across a dark lot after a late activity. Heavy lifting when someone is moving into south Fargo housing. Adults post the ask. An approved helper nearby may accept. Chat is private. Exact location is opt-in after accept. Public meeting places stay the default — a grocery vestibule beats a dark cul-de-sac.",
        ],
      },
      {
        heading: "Adults around the school, not students in it",
        body: [
          "Help Me is not a K–12 program. Do not use it to introduce a high school student to a stranger. Official school channels, family, and 911 are the right tools for student safety. This app is everyday, non-emergency help among adults whose identity evidence a staff member has actually reviewed.",
        ],
      },
    ],
    related: [
      "cities/fargo",
      "cities/horace",
      "for-parents",
      "safety",
      "help/jump-start",
      "help/winter-car-help",
      "resources/fargo-police",
    ],
    faqs: [
      {
        q: "Is Davies in Horace or Fargo?",
        a: "Davies High is in south Fargo. Horace is the next city south. People who live in both places use the same metro winter.",
      },
      {
        q: "Will a helper come to a Davies parking lot?",
        a: "If an approved helper is online and matching allows it. There is no dispatch guarantee and no paid ETA. Meet in public.",
      },
      {
        q: "Can Davies students use Help Me to find a ride home?",
        a: "No. This is not a student ride board or a K–12 meetup product. Use official school and family channels.",
      },
    ],
  }),
  page({
    slug: "schools/shanley",
    kind: "school",
    title: "Community around Shanley High School in Fargo",
    description:
      "Adult community help near Shanley Deacons and the JPII campus on 25th Street South. Not a Catholic school app, and not a K–12 network.",
    h1: "Around Shanley, the Deacons campus on 25th",
    eyebrow: "Shanley",
    lead: "Shanley High is the Deacons — red and white, St. John Paul II Catholic Schools, 5600 25th Street South. The building is a faith community and a Friday-night crowd. This page is the adult neighborhood around it.",
    keywords: ["Shanley High School", "Deacons Fargo", "JPII Schools", "25th Street South"],
    geo: {
      name: "Shanley High School",
      type: "School",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.798,
      lng: -96.816,
    },
    sections: [
      {
        heading: "Catholic campus, south Fargo street",
        body: [
          "Shanley shares the 25th Street South corridor with Davies a little farther south. Parents, parish families, and neighbors use the same commercial lots along 32nd and 52nd. Game traffic is real. So is a battery that will not turn over at 9:40 p.m.",
          "Official Shanley and JPII information lives on the JPII Schools site. Help Me is not a parish tool and does not speak for the Deacons.",
        ],
      },
      {
        heading: "Neighbor help after the gym empties",
        body: [
          "Adults can ask for a jump start, a walk to a car, directions, or a hand with something heavy. Helpers are approved community members, not locksmiths, not mechanics, not paid gigs. Chat is 1:1 and private. Meet in public. You can delete your account from the app by typing DELETE.",
        ],
      },
      {
        heading: "Not a youth ministry and not a student app",
        body: [
          "Help Me is not a K–12 program. It is not affiliated with JPII Schools. High school students should not use it to meet people they do not already know. Student safety belongs to family, the school, and official emergency services — 911 first if someone is in danger.",
        ],
      },
    ],
    related: [
      "cities/fargo",
      "schools/fargo-davies",
      "schools/oak-grove",
      "for-parents",
      "safety",
      "help/jump-start",
      "resources/fargo-police",
    ],
    faqs: [
      {
        q: "Is Help Me connected to Shanley or JPII?",
        a: "No. The official school is on the JPII Schools site. This is a community geography page for adults around the campus.",
      },
      {
        q: "Can a Shanley parent ask for a jump start in the lot?",
        a: "Adults can post everyday, non-emergency help. Meet in public. A helper is a neighbor with a current staff-reviewed approval, not a contractor.",
      },
      {
        q: "Do you background-check helpers for school events?",
        a: "Staff review identity evidence. That is not a criminal background check, and we do not claim one. This is not a school safety program.",
      },
    ],
  }),
  page({
    slug: "schools/oak-grove",
    kind: "school",
    title: "Community around Oak Grove Lutheran School",
    description:
      "Adult neighbor help near Oak Grove Grovers on North Terrace in Fargo — river campus, downtown winter. Help Me is not a K–12 student network.",
    h1: "Around Oak Grove, on the river terrace",
    eyebrow: "Oak Grove",
    lead: "Oak Grove Lutheran School’s north campus sits at 124 North Terrace — Grovers, maroon and white, a river school that has watched the Red come up more than once. Downtown is close. The ice is closer.",
    keywords: ["Oak Grove Lutheran", "Grovers Fargo", "North Terrace Fargo", "Oak Grove High"],
    geo: {
      name: "Oak Grove Lutheran School",
      type: "School",
      city: "Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.882,
      lng: -96.778,
    },
    sections: [
      {
        heading: "A river campus next to downtown",
        body: [
          "North Terrace is not a suburban loop. It is trees, the river corridor, and a short walk toward Broadway. Oak Grove’s south campus for younger grades sits on 32nd Avenue South; the 6–12 campus is the historic north site. Visitors mix up the two. Adults get stuck in both parking areas in January.",
          "Official school information is on the Oak Grove Lutheran School site. Help Me does not run Grover athletics or closures.",
        ],
      },
      {
        heading: "Adult asks on a tight, icy campus",
        body: [
          "A jump start on a terrace lot. A walk to a car after an evening event. Directions to Broadway or to NDSU for someone who thought “Fargo school” meant one building. Heavy boxes in older houses nearby. Meet in public — a lit lot, a downtown vestibule — and keep exact location off until you say yes after someone accepts.",
        ],
      },
      {
        heading: "Help Me is not Oak Grove, and not K–12",
        body: [
          "This is an adult community app. It is not a Lutheran school program, not a student chat, and not a way for K–12 students to meet strangers. High school students should use official school and family channels. If it is an emergency, call 911. If it is a dead battery, that is closer to why this app exists.",
        ],
      },
    ],
    related: [
      "cities/fargo",
      "neighborhoods/downtown-fargo",
      "schools/shanley",
      "for-parents",
      "safety",
      "help/jump-start",
      "help/directions",
      "resources/fargo-police",
    ],
    faqs: [
      {
        q: "Which Oak Grove campus is this page about?",
        a: "The community around the historic north campus on North Terrace, where grades 6–12 sit. The south campus on 32nd Avenue is a different site. Official details are on the school site.",
      },
      {
        q: "Can Oak Grove students find a study partner here?",
        a: "No. Help Me is not a K–12 student product. College study-buddy asks are a different audience. High school students should use school and family channels.",
      },
      {
        q: "Is downtown a good place to meet a helper?",
        a: "Broadway and well-lit public indoor spots are better defaults than a dark river path. You choose the label. Exact location is optional.",
      },
    ],
  }),
  page({
    slug: "schools/park-christian",
    kind: "school",
    title: "Community around Park Christian School in Moorhead",
    description:
      "Adult community help near Park Christian Falcons on 17th Street North in Moorhead. Not a school app, and not a K–12 meetup product.",
    h1: "Around Park Christian, north Moorhead",
    eyebrow: "Park Christian",
    lead: "Park Christian School sits at 300 17th Street North in Moorhead — Falcons, a private Christian campus on the Minnesota side. Families drive in from Fargo and West Fargo. The winter does not care which state the lot is in.",
    keywords: ["Park Christian School", "Park Christian Moorhead", "Falcons Moorhead", "17th Street North Moorhead"],
    geo: {
      name: "Park Christian School",
      type: "School",
      city: "Moorhead",
      state: "MN",
      county: "Clay County",
      lat: 46.885,
      lng: -96.755,
    },
    sections: [
      {
        heading: "North Moorhead, two states in one commute",
        body: [
          "17th Street North is a short hop from the river and from people who work in Fargo. MSUM and Concordia sit farther south in the same city. A Park Christian evening still dumps a parking lot full of cold engines onto Clay County streets.",
          "Official school news lives on the Park Christian School site. Help Me is not a campus ministry tool and does not ingest the Falcons calendar.",
        ],
      },
      {
        heading: "Adult help on the Minnesota side",
        body: [
          "Jump starts. A walk to a car. Directions for a Fargo parent who has never parked on 17th Street North. Snow brushed off a windshield is a neighbor; a contracted plow is not. Moorhead Police and Clay County are the official numbers here — not Fargo Police, and not this app.",
        ],
      },
      {
        heading: "Not a K–12 Christian social network",
        body: [
          "Help Me is an adult community app for Fargo–Moorhead. It is not a Park Christian program and not a way for students to meet strangers. High school students should use official school and family channels. Helpers hold a current staff-reviewed approval of identity evidence. That is not a background check.",
        ],
      },
    ],
    related: [
      "cities/moorhead",
      "neighborhoods/downtown-moorhead",
      "schools/moorhead-high",
      "for-parents",
      "safety",
      "help/jump-start",
      "resources/moorhead-police",
    ],
    faqs: [
      {
        q: "Is Park Christian in Fargo or Moorhead?",
        a: "Moorhead, Minnesota. Families often live in Fargo or West Fargo. Official emergency services follow the city you are standing in.",
      },
      {
        q: "Can students arrange rides through Help Me?",
        a: "No. This is not a student ride board. High school students should use official school and family channels.",
      },
      {
        q: "Does Help Me work on the Minnesota side?",
        a: "Moorhead is part of the metro the app is built for. Matching still depends on approved helpers who are actually online.",
      },
    ],
  }),
  page({
    slug: "schools/west-fargo-high",
    kind: "school",
    title: "Community around West Fargo High School",
    description:
      "Adult neighbor help near West Fargo Packers — 9th Street East, Main Avenue lots, winter jump starts. Help Me is not a K–12 student program.",
    h1: "Around West Fargo High, the Packers",
    eyebrow: "West Fargo High",
    lead: "West Fargo High School is at 801 9th Street East — green and white, Packers, the original city high school in a town that had to grow two more. Main Avenue still feels like the spine. The lot still ices over.",
    keywords: ["West Fargo High", "Packers West Fargo", "9th Street East", "West Fargo help"],
    geo: {
      name: "West Fargo High School",
      type: "School",
      city: "West Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.8675,
      lng: -96.8808,
    },
    sections: [
      {
        heading: "Central West Fargo, not a Fargo neighborhood",
        body: [
          "9th Street East sits just south of Main. Sheyenne Street, Veterans Boulevard, and the older West Fargo grid all feed this building. Sheyenne High and Horace High took pressure off the Packers; they did not move the winter. A Friday night here is still a parking problem.",
          "West Fargo Public Schools publishes the official Packers information. Help Me ingests the city’s community calendar — not the high-school activities feed. Use the district site for games and closures.",
        ],
      },
      {
        heading: "What adults ask for after the lights go down",
        body: [
          "A jump start in the 9th Street lot. A walk to a car. Snow off a walk before a morning commute. Heavy boxes in houses that were here before The Lights existed. Approved helpers only. Private chat. Meet in public. Two hours, then the request closes if nobody accepts.",
        ],
      },
      {
        heading: "This is not a Packers student app",
        body: [
          "Help Me is not a K–12 program, not West Fargo Public Schools, and not school police. High school students should not use it to meet strangers. Parents who want the honest product story can read the parents page. Emergencies go to 911 or West Fargo Police.",
        ],
      },
    ],
    related: [
      "cities/west-fargo",
      "schools/sheyenne-high",
      "schools/horizon-high",
      "for-parents",
      "safety",
      "help/jump-start",
      "help/snow-help",
      "resources/west-fargo-police",
    ],
    faqs: [
      {
        q: "Is West Fargo High the only West Fargo high school?",
        a: "No. Sheyenne High and Horace High are the district’s other high schools. This page is the community around the Packers campus on 9th Street East.",
      },
      {
        q: "Do West Fargo community events show in Help Me?",
        a: "The official West Fargo community calendar is one of the app’s event sources. High-school games are not. Use the district site for those.",
      },
      {
        q: "Can I request help in a Packers parking lot?",
        a: "Adults can post everyday, non-emergency asks. Meet in public. A helper is a neighbor, not a tow company.",
      },
    ],
  }),
  page({
    slug: "schools/sheyenne-high",
    kind: "school",
    title: "Community around Sheyenne High School",
    description:
      "Adult help near Sheyenne Mustangs in south West Fargo — 40th Avenue East, The Lights, winter lots. Help Me is not a K–12 student network.",
    h1: "Around Sheyenne High, the Mustangs",
    eyebrow: "Sheyenne High",
    lead: "Sheyenne High School sits at 800 40th Avenue East — royal blue and orange, Mustangs, the south-growth campus West Fargo built when one high school was no longer a serious idea. New neighborhoods, long streets, same January.",
    keywords: ["Sheyenne High", "Mustangs West Fargo", "40th Avenue East", "The Lights West Fargo"],
    geo: {
      name: "Sheyenne High School",
      type: "School",
      city: "West Fargo",
      state: "ND",
      county: "Cass County",
      lat: 46.847,
      lng: -96.868,
    },
    sections: [
      {
        heading: "South West Fargo, still filling in",
        body: [
          "40th Avenue East is a school road and a cut-through. The Lights, Sheyenne Crossing, and the newer plats around Veterans Boulevard are the residential context. A Mustangs event is a lot full of trucks that have been sitting in minus-teens.",
          "Official Sheyenne information is on the West Fargo Public Schools site. Help Me does not publish the Mustangs calendar.",
        ],
      },
      {
        heading: "Jump starts in a growth-corridor lot",
        body: [
          "Adults ask for cables, a walk to a car, a shove out of a rutted stall, a hand moving something heavy into a new house. Matching is local to who is actually online. The map shows a coarse area. Exact location waits on your consent after someone accepts. Cul-de-sacs after dark are a bad meeting place; a grocery vestibule is a better one.",
        ],
      },
      {
        heading: "Not a student app for the Mustangs",
        body: [
          "Help Me is not a K–12 program. Do not invite high school students to meet strangers through it. School safety stays with the district, the family, and 911. This app is everyday adult help — identity evidence reviewed by staff, current approval required, not a background-check company.",
        ],
      },
    ],
    related: [
      "cities/west-fargo",
      "neighborhoods/the-lights",
      "neighborhoods/sheyenne-crossing",
      "schools/west-fargo-high",
      "for-parents",
      "safety",
      "help/winter-car-help",
      "resources/west-fargo-police",
    ],
    faqs: [
      {
        q: "Is Sheyenne High in Fargo or West Fargo?",
        a: "West Fargo. The campus is on 40th Avenue East. Some nearby housing sits in Fargo city limits; the school is West Fargo Public Schools.",
      },
      {
        q: "Can a parent ask for help after a Mustangs game?",
        a: "Adults can post a non-emergency ask. Meet in public. There is no guaranteed response time.",
      },
      {
        q: "Does Help Me walk students to the parking lot?",
        a: "No. This is not a school escort program and not a K–12 meetup product. Official school and family channels stay the right path for students.",
      },
    ],
  }),
  page({
    slug: "schools/horizon-high",
    kind: "school",
    title: "Community around Horace High School",
    description:
      "Adult community help near Horace High Hawks — West Fargo Public Schools’ third high school on Lakeview Drive. Help Me is not a K–12 app.",
    h1: "Around Horace High, the Hawks",
    eyebrow: "Horace High",
    lead: "West Fargo Public Schools’ third high school is Horace High — the Hawks — at 8100 Lakeview Drive in Horace. New building, new streets, a south-metro commute, and a parking lot that still has to survive January.",
    keywords: ["Horace High School", "Hawks Horace", "West Fargo third high school", "Lakeview Drive Horace"],
    geo: {
      name: "Horace High School",
      type: "School",
      city: "Horace",
      state: "ND",
      county: "Cass County",
      lat: 46.761,
      lng: -96.906,
    },
    sections: [
      {
        heading: "The south-growth campus, named for the city it sits in",
        body: [
          "Horace High opened as the district’s answer to south-side growth — Horace, the southern edge of West Fargo, the long drive up to Sheyenne Street. People still search older planning names for “the third West Fargo high school.” The school is Horace High, the Hawks, black and old gold, West Fargo Public Schools.",
          "Official calendars and closures live on the district site. Help Me does not ingest Hawks athletics.",
        ],
      },
      {
        heading: "Adult help on a campus that is still new",
        body: [
          "Jump starts after an evening event. A walk across a dark, windy lot. Directions for a relative who has never been south of 32nd. Heavy lifting in houses that were fields a few years ago. Meet in public. Chat is private. Location stays coarse until you consent. A helper is a neighbor, not a tow, not a locksmith, not a paid gig.",
        ],
      },
      {
        heading: "Help Me is not a K–12 program",
        body: [
          "This page is the adult community around Horace High. It is not a student social network and not a district safety product. High school students should use official school and family channels. Do not arrange for a K–12 student to meet a stranger through the app. 911 and West Fargo or Cass County services remain official.",
        ],
      },
    ],
    related: [
      "cities/horace",
      "cities/west-fargo",
      "schools/west-fargo-high",
      "schools/sheyenne-high",
      "for-parents",
      "safety",
      "help/jump-start",
      "resources/west-fargo-police",
    ],
    faqs: [
      {
        q: "Is this Horizon High or Horace High?",
        a: "The school is Horace High School — the Hawks — in Horace, North Dakota. It is West Fargo Public Schools’ third high school. This URL keeps an older search name so people land on the real campus.",
      },
      {
        q: "Can Horace High students use Help Me?",
        a: "Help Me is an adult community app, not a K–12 program. High school students should use official school and family channels.",
      },
      {
        q: "Will someone drive from Fargo to a Hawks lot?",
        a: "Only if an approved helper is online and matching allows it. There is no dispatch and no paid ETA. Distance is real.",
      },
    ],
  }),
  page({
    slug: "schools/moorhead-high",
    kind: "school",
    title: "Community around Moorhead High School",
    description:
      "Adult neighbor help near Moorhead Spuds — 4th Avenue South lots, Clay County winter, Minnesota side. Help Me is not a K–12 student network.",
    h1: "Around Moorhead High, the Spuds",
    eyebrow: "Moorhead High",
    lead: "Moorhead High School is at 2300 4th Avenue South — orange and black, Spuds, Spuddy, a Minnesota school in a metro that keeps forgetting there is a state line. The potato is the joke. The parking lot in January is not.",
    keywords: ["Moorhead High", "Spuds Moorhead", "4th Avenue South Moorhead", "Moorhead help"],
    geo: {
      name: "Moorhead High School",
      type: "School",
      city: "Moorhead",
      state: "MN",
      county: "Clay County",
      lat: 46.8722,
      lng: -96.7436,
    },
    sections: [
      {
        heading: "South Moorhead, still its own city",
        body: [
          "4th Avenue South, 8th Street, the I-94 edge. MSUM and Concordia sit closer to the river; Moorhead High is the public city’s own building. A Spuds hockey night is a Clay County traffic night. Downtown Center Avenue is a public, obvious meeting place if a car dies after.",
          "Moorhead Area Public Schools runs the official site. Help Me does not publish Spuds schedules. Campus event feeds in the app are MSUM, Concordia, and the other official sources — not this high school.",
        ],
      },
      {
        heading: "Adult help on the Minnesota side of the river",
        body: [
          "Jump starts. Walks to the car. Directions for a Fargo relative who has never parked on 4th Avenue South. Snow off a walk. A sofa in a south Moorhead stair. Official help is Moorhead Police and Clay County, not Fargo Police. Neighbor help is the app, with the same rules as the North Dakota side: approved helpers, coarse map, public meet, private chat.",
        ],
      },
      {
        heading: "Not a Spuds student meetup",
        body: [
          "Help Me is not a K–12 program. High school students should not use it to meet strangers. Parents looking for the honest product can read the parents page. Student safety stays with family, the school, and 911. This app is everyday adult help in Fargo–Moorhead.",
        ],
      },
    ],
    related: [
      "cities/moorhead",
      "neighborhoods/downtown-moorhead",
      "campuses/msum",
      "campuses/concordia",
      "for-parents",
      "safety",
      "help/jump-start",
      "resources/moorhead-police",
    ],
    faqs: [
      {
        q: "Is Moorhead High the same as MSUM?",
        a: "No. Moorhead High is the public high school. MSUM is the university. Concordia is the college. They are different institutions in the same city.",
      },
      {
        q: "Can I ask for a jump start after a Spuds game?",
        a: "Adults can. Meet in public. A helper is a neighbor, not a mechanic. There is no guaranteed wait time.",
      },
      {
        q: "Do you show Moorhead High events in the app?",
        a: "No. Use the Moorhead Area Public Schools site. Help Me’s calendars are official campus and regional sources, not high-school athletics.",
      },
    ],
  }),
  page({
    slug: "schools/dilworth-glyndon-felton",
    kind: "school",
    title: "Community around Dilworth-Glyndon-Felton schools",
    description:
      "Adult community help around DGF — Dilworth, Glyndon, and Felton. Highway 10 winter, Clay County neighbors. Help Me is not a K–12 student app.",
    h1: "Around DGF, three towns and one district",
    eyebrow: "Dilworth-Glyndon-Felton",
    lead: "Dilworth-Glyndon-Felton is a district before it is a single parking lot. The high school sits in Glyndon. Families live in Dilworth, Glyndon, and Felton. Fargo is the job market. The cold does not commute.",
    keywords: ["DGF", "Dilworth-Glyndon-Felton", "Glyndon high school", "Dilworth MN schools"],
    geo: {
      name: "Dilworth-Glyndon-Felton High School",
      type: "School",
      city: "Glyndon",
      state: "MN",
      county: "Clay County",
      lat: 46.8714,
      lng: -96.5814,
    },
    sections: [
      {
        heading: "Highway 10 country, still in the metro",
        body: [
          "DGF High School is at 513 Parke Avenue South in Glyndon — Rebels, black, silver, and white. Dilworth is the closer-in city on the Moorhead edge. Felton is farther. People drive this corridor every day and still get stranded in a school lot after an evening activity.",
          "Official district information is on the Dilworth-Glyndon-Felton district site. Help Me does not run Rebels calendars and does not pretend Glyndon is downtown Fargo.",
        ],
      },
      {
        heading: "Adult help when the lot is dark and the town is small",
        body: [
          "A jump start. A walk to a car. A shove out of snow. Directions for a relative who thought the high school was in Dilworth. Matching is metro-local, not a promise that a Fargo helper is sitting in Glyndon. Meet in public. Keep 911 and Clay County for anything that is actually an emergency.",
        ],
      },
      {
        heading: "Not a student network for DGF",
        body: [
          "Help Me is not a K–12 program. High school students should use official school and family channels. Do not arrange for a minor to meet a stranger through the app. This page exists so adults around Dilworth, Glyndon, and Felton can see how everyday neighbor help fits — and where it stops.",
        ],
      },
    ],
    related: [
      "cities/dilworth",
      "cities/glyndon",
      "cities/moorhead",
      "for-parents",
      "safety",
      "help/jump-start",
      "resources/clay-county-resources",
    ],
    faqs: [
      {
        q: "Where is the DGF high school?",
        a: "In Glyndon. The district also serves Dilworth and Felton. Official details are on the district site.",
      },
      {
        q: "Will Help Me send a Fargo helper to Glyndon?",
        a: "Only if an approved helper is online and matching allows it. There is no dispatch guarantee. Distance is real.",
      },
      {
        q: "Can DGF students post for a ride?",
        a: "No. This is not a student ride board or a K–12 meetup product.",
      },
    ],
  }),
  page({
    slug: "schools/kindred",
    kind: "school",
    title: "Community around Kindred High School",
    description:
      "Adult neighbor help around Kindred Vikings in Cass County — Main Street, a drive to Fargo, winter lots. Help Me is not a K–12 student program.",
    h1: "Around Kindred High, the Vikings",
    eyebrow: "Kindred",
    lead: "Kindred High School sits at 255 Dakota Street — royal blue and white, Vikings, a Cass County town that uses Fargo as its city and still has a Main Street of its own. The drive is short until a battery dies at the far end of it.",
    keywords: ["Kindred High", "Kindred Vikings", "Kindred ND", "Cass County schools"],
    geo: {
      name: "Kindred High School",
      type: "School",
      city: "Kindred",
      state: "ND",
      county: "Cass County",
      lat: 46.6477,
      lng: -97.0165,
    },
    sections: [
      {
        heading: "Small town, metro gravity",
        body: [
          "Kindred is south of Horace and Fargo. A Vikings event still fills a lot. People work the metro and come home to a quieter street. Official Kindred Public Schools information lives on the district site. Help Me does not invent a town helper roster.",
        ],
      },
      {
        heading: "Everyday adult help, without pretending we staff Main Street",
        body: [
          "Jump starts. A walk to a car. Snow off a walk. A hand with something heavy. Offers go to approved helpers who are actually online. There is no guaranteed response time. Public meeting places still matter — a lit lot during an event beats a dark residential block. 911 and Cass County remain official.",
        ],
      },
      {
        heading: "Not a K–12 meetup for Vikings students",
        body: [
          "Help Me is a community app for adults. It is not Kindred Public Schools and not a way for high school students to meet strangers. Use official school and family channels for students. Use this app, if you are an adult, for the non-emergency thing that stalled the day.",
        ],
      },
    ],
    related: [
      "cities/kindred",
      "cities/horace",
      "cities/fargo",
      "for-parents",
      "safety",
      "help/jump-start",
      "resources/cass-county-resources",
    ],
    faqs: [
      {
        q: "Is Kindred in the Help Me service area?",
        a: "It is part of the surrounding Cass County metro we document. Matching still depends on real, online, approved helpers.",
      },
      {
        q: "Can Kindred students find a study buddy in the app?",
        a: "No. Help Me is not a K–12 student product. High school students should use school and family channels.",
      },
      {
        q: "Where should I meet a helper in Kindred?",
        a: "A public, lit place you choose. Exact location is optional and only after someone accepts.",
      },
    ],
  }),
  page({
    slug: "schools/northern-cass",
    kind: "school",
    title: "Community around Northern Cass High School",
    description:
      "Adult community help around Northern Cass in Hunter — north Cass County, Harwood-adjacent winter. Help Me is not a K–12 student network.",
    h1: "Around Northern Cass, north of the metro",
    eyebrow: "Northern Cass",
    lead: "Northern Cass High School sits at 16021 18th Street SE, Hunter — a rural Cass County campus north of Fargo. Harwood is the closer-in town. I-29 is the habit. The lot still has to start in January.",
    keywords: ["Northern Cass", "Hunter ND school", "Harwood schools", "north Cass County"],
    geo: {
      name: "Northern Cass High School",
      type: "School",
      city: "Hunter",
      state: "ND",
      county: "Cass County",
      lat: 47.1906,
      lng: -97.2159,
    },
    sections: [
      {
        heading: "North Cass, not a Fargo neighborhood",
        body: [
          "Northern Cass serves a spread of towns and townships north of the city. People shop and work in Fargo and still come home past Harwood. A school event is a drive. Official information lives on the Northern Cass district site. Help Me does not staff a Hunter night shift.",
        ],
      },
      {
        heading: "Adult help with honest range",
        body: [
          "A jump start after an activity. A walk to a car. Snow off a walk. Directions for a relative who has never been to Hunter. Matching is local to who is online. There is no promise that a Fargo helper will drive the corridor at 10 p.m. Meet in public. Keep Cass County and 911 for anything official.",
        ],
      },
      {
        heading: "Not a K–12 program",
        body: [
          "Help Me is an adult community app. It is not Northern Cass Schools and not a student meetup product. High school students should use official school and family channels. Do not arrange for a minor to meet a stranger through the app.",
        ],
      },
    ],
    related: [
      "cities/harwood",
      "cities/fargo",
      "for-parents",
      "safety",
      "help/jump-start",
      "help/winter-car-help",
      "resources/cass-county-resources",
    ],
    faqs: [
      {
        q: "Does Help Me work in Hunter?",
        a: "Northern Cass is surrounding Cass County. Availability follows real approved helpers, not a town quota.",
      },
      {
        q: "Can Northern Cass students post for help?",
        a: "Help Me is not a K–12 student network. High school students should use official school and family channels.",
      },
      {
        q: "Is this the Harwood school page?",
        a: "Harwood has its own city page. Northern Cass is the district campus in Hunter that serves a wider north-Cass area.",
      },
    ],
  }),
  page({
    slug: "schools/central-cass",
    kind: "school",
    title: "Community around Central Cass High School",
    description:
      "Adult neighbor help around Central Cass Squirrels in Casselton — I-94 corridor winter, Mapleton nearby. Help Me is not a K–12 student app.",
    h1: "Around Central Cass, the Squirrels",
    eyebrow: "Central Cass",
    lead: "Central Cass High School is at 802 North 5th Street in Casselton — red and white, Squirrels, a corridor town that treats I-94 as a habit. Mapleton is next door. Fargo is the job. The battery does not care.",
    keywords: ["Central Cass", "Squirrels Casselton", "Casselton high school", "Mapleton schools"],
    geo: {
      name: "Central Cass High School",
      type: "School",
      city: "Casselton",
      state: "ND",
      county: "Cass County",
      lat: 46.9,
      lng: -97.211,
    },
    sections: [
      {
        heading: "West on 94, still Cass County",
        body: [
          "Casselton is close enough that Fargo feels routine and far enough that a dead battery after a Squirrels event feels farther than the map suggests. Bonanzaville is the postcard. The school lot is the practical geography. Official Central Cass information is on the district site.",
        ],
      },
      {
        heading: "Adult asks on a corridor-town lot",
        body: [
          "Jump starts. A walk to a car. A shove out of packed snow. Heavy lifting. Help Me is metro-local, not a Casselton dispatch desk. Meet in public. Private 1:1 chat after an approved helper accepts. Exact location is consent-only. Cass County and 911 stay official for anything that is not a neighbor job.",
        ],
      },
      {
        heading: "Not a student app for Central Cass",
        body: [
          "Help Me is not a K–12 program. High school students should use official school and family channels. This page describes the adult community around the building — parents, neighbors, winter — not a chat for the people with lockers in it.",
        ],
      },
    ],
    related: [
      "cities/casselton",
      "cities/mapleton",
      "cities/fargo",
      "for-parents",
      "safety",
      "help/jump-start",
      "resources/cass-county-resources",
    ],
    faqs: [
      {
        q: "Is there a Casselton-only helper list?",
        a: "No. Matching is local to the metro and to who is actually online. We do not invent a town roster.",
      },
      {
        q: "Can Central Cass students meet tutors through Help Me?",
        a: "No. This is not a K–12 student product. Use school and family channels.",
      },
      {
        q: "Will someone come from Fargo to Casselton?",
        a: "Only if an approved helper is online and matching allows it. There is no paid ETA and no guarantee.",
      },
    ],
  }),
  page({
    slug: "schools/hawley",
    kind: "school",
    title: "Community around Hawley High School",
    description:
      "Adult community help around Hawley Nuggets — Highway 10 east of Moorhead, Clay County winter. Help Me is not a K–12 student network.",
    h1: "Around Hawley High, the Nuggets",
    eyebrow: "Hawley",
    lead: "Hawley is east of Dilworth on Highway 10 — Nuggets, Clay County, a town that uses Moorhead and Fargo as its city and still fills a school lot on a Friday. The drive is pretty until the temperature is not.",
    keywords: ["Hawley High", "Hawley Nuggets", "Hawley MN", "Highway 10 schools"],
    geo: {
      name: "Hawley High School",
      type: "School",
      city: "Hawley",
      state: "MN",
      county: "Clay County",
      lat: 46.876,
      lng: -96.317,
    },
    sections: [
      {
        heading: "East on 10, still in the orbit",
        body: [
          "Hawley Public Schools is the official source for the Nuggets. Help Me pages exist so a search for help around Hawley gets an honest local product instead of a national marketplace that has never seen Highway 10. The town is surrounding Clay County, not a second Help Me headquarters.",
        ],
      },
      {
        heading: "Adult neighbor help, with distance said out loud",
        body: [
          "A jump start after an activity. A walk to a car. Snow off a walk. Directions. Offers consider nearby approved helpers who are online. A Fargo helper is not a dispatch. Meet in public. Clay County and 911 remain the official path when a neighbor is the wrong tool.",
        ],
      },
      {
        heading: "Not a K–12 program for the Nuggets",
        body: [
          "Help Me is an adult community app. It is not Hawley Public Schools and not a way for high school students to meet strangers. Use official school and family channels for students. Use this app, if you are an adult, for everyday non-emergency help.",
        ],
      },
    ],
    related: [
      "cities/hawley",
      "cities/dilworth",
      "cities/moorhead",
      "for-parents",
      "safety",
      "help/jump-start",
      "resources/clay-county-resources",
    ],
    faqs: [
      {
        q: "Will Help Me send someone from Fargo to Hawley?",
        a: "Only if an approved helper is online and matching allows it. There is no dispatch guarantee and no paid ETA.",
      },
      {
        q: "Can Hawley students use the app to meet people?",
        a: "No. Help Me is not a K–12 student meetup product. High school students should use official school and family channels.",
      },
      {
        q: "Is Hawley on the Dilworth page?",
        a: "Hawley has its own city and school pages. Dilworth is farther west on the same highway. Official city services still follow Hawley and Clay County.",
      },
    ],
  }),
  page({
    slug: "schools/barnesville",
    kind: "school",
    title: "Community around Barnesville High School",
    description:
      "Adult neighbor help around Barnesville Trojans — Clay County southeast of Moorhead, Highway 9 winter. Help Me is not a K–12 student app.",
    h1: "Around Barnesville High, the Trojans",
    eyebrow: "Barnesville",
    lead: "Barnesville sits southeast of the river cities — Trojans, Highway 9, a Clay County town with its own Friday night. Moorhead is the errand. The school lot is still the place a car can die at 10 p.m.",
    keywords: ["Barnesville High", "Barnesville Trojans", "Barnesville MN", "Clay County schools"],
    geo: {
      name: "Barnesville High School",
      type: "School",
      city: "Barnesville",
      state: "MN",
      county: "Clay County",
      lat: 46.652,
      lng: -96.42,
    },
    sections: [
      {
        heading: "Southeast Clay County, said honestly",
        body: [
          "Barnesville Public Schools is the official source for the Trojans. This page is geographic honesty: people search the town with Fargo–Moorhead, the app exists for that metro, and a helper on Front Street at 2 a.m. is not a promise we make.",
        ],
      },
      {
        heading: "Adult help without a fake town forum",
        body: [
          "Jump starts. A walk to a car. Snow. A hand with something heavy. Matching depends on approved helpers who are actually online. Meet in public. Private chat. Coarse map until you consent. Clay County and 911 stay official. There is one Help Me community for the metro — we do not fake a Barnesville-only feed.",
        ],
      },
      {
        heading: "Not a K–12 student network",
        body: [
          "Help Me is not a Barnesville school program and not a way for high school students to meet strangers. High school students should use official school and family channels. Adults around the Trojans campus can use the app for everyday, non-emergency help — or not, if nobody nearby is online. That honesty is the product.",
        ],
      },
    ],
    related: [
      "cities/barnesville",
      "cities/moorhead",
      "cities/hawley",
      "for-parents",
      "safety",
      "help/jump-start",
      "resources/clay-county-resources",
    ],
    faqs: [
      {
        q: "Is there a Barnesville Help Me community?",
        a: "There is one Help Me community for Fargo–Moorhead and surroundings. We do not fake a town forum.",
      },
      {
        q: "Can Barnesville students post a help request?",
        a: "Help Me is an adult app, not a K–12 student product. High school students should use official school and family channels.",
      },
      {
        q: "What if nobody accepts in Barnesville?",
        a: "A request stays open up to two hours, then it closes. You can try again. There is no dispatch and no paid fallback.",
      },
    ],
  }),
];
