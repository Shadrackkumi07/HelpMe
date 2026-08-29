import { page } from "./page";
import type { SeoPage } from "@/lib/seo/types";

/**
 * The calendar pages. Fargo–Moorhead help demand is seasonal before it is
 * anything else: batteries in January, boxes in August, quiet in December.
 */
export const SEASON_PAGES: SeoPage[] = [
  page({
    slug: "seasons",
    kind: "hub",
    title: "Help Me through the Fargo–Moorhead year",
    description:
      "What people actually need month by month in Fargo, Moorhead, and West Fargo: dead batteries in January, boxes in August, quiet campuses in December.",
    h1: "The Fargo–Moorhead year, one season at a time",
    eyebrow: "seasons",
    lead: "This metro does not have a flat calendar. It has a battery season, a boxes season, a thaw, and about three weeks of perfect weather everyone talks about all winter.",
    priority: 0.8,
    keywords: ["Fargo seasons", "Fargo winter help", "Moorhead seasonal guide", "Fargo Moorhead calendar"],
    sections: [
      {
        heading: "Help is seasonal here",
        body: [
          "In January the requests are batteries, snowed-in cars, and walks across lots where the wind has teeth. In August they are boxes, wrong buildings, and people who have never driven a U-Haul. In April it is water and the roads that go around it. Same app, completely different week.",
          "These pages describe what the season does to this metro and what a neighbor can reasonably do about it. Everything dangerous still routes to 911, roadside assistance, or the city — a stranger with an app is not a plow, a tow truck, or a first responder.",
        ],
      },
      {
        heading: "How to use them",
        body: [
          "Read the one you are standing in. Each page names the specific failures of that season, the requests that make sense, the requests that do not, and the official number to call when it stops being an inconvenience and starts being a risk.",
        ],
        bullets: [
          "Winter: cold starts, snow, wind chill, dark at five",
          "Spring: thaw, water, potholes, move-out",
          "Summer: storms, outages, construction, moving",
          "Fall: move-in, first week, game days, first freeze",
        ],
      },
    ],
    related: ["guides/winter-help-fargo", "help/winter-car-help", "cities/fargo", "campuses", "resources", "explore"],
    faqs: [
      {
        q: "Does Help Me work in a blizzard?",
        a: "The app works. People should not be driving. When travel is not advised, the honest answer is stay put and call the official line, not post a request.",
      },
      {
        q: "Is there a busiest season?",
        a: "Deep winter and move-in weeks are when this metro stalls the most. Those are also when a neighbor with ten minutes is worth the most.",
      },
    ],
  }),

  page({
    slug: "seasons/winter-in-fargo-moorhead",
    kind: "season",
    title: "Winter in Fargo–Moorhead: what actually goes wrong",
    description:
      "Dead batteries, frozen locks, cars stuck in unplowed lots, and dark at five. What neighbors can help with in a Fargo–Moorhead winter and what needs a tow truck.",
    h1: "Winter here is a logistics problem",
    eyebrow: "season",
    lead: "Five months where an ordinary errand can end with you standing in a parking lot doing math about how far you can walk.",
    answer:
      "A Fargo–Moorhead winter runs roughly November through March, with subzero stretches that kill car batteries, freeze door locks, and turn unplowed lots into traps. Neighbors can genuinely help with jump starts, a push out of a drift, shoveling, and walks across dark lots. Anything involving a highway, a ditch, or exposure risk needs a tow service or 911.",
    takeaways: [
      "Battery failure is the single most common winter request here.",
      "Cold plus wind chill turns a short walk into a real risk.",
      "Neighbors help in lots and driveways, not on highways.",
      "ND 511 and MN 511 are the road-condition authorities.",
    ],
    keywords: ["Fargo winter", "Moorhead winter help", "winter car problems North Dakota", "cold weather Fargo"],
    sections: [
      {
        heading: "What the cold breaks first",
        body: [
          "Batteries, in the order of how old they are. A battery that was fine in October will not turn over at minus twenty-five, usually in a parking lot, usually when you are already late. After that: frozen door seals, wipers welded to glass, tires down ten pounds overnight, and any lot that got plowed into a berm behind your rear wheels.",
          "The second failure is human. It gets dark before five, the wind runs down open streets with nothing to stop it, and walking four blocks stops being a neutral decision.",
        ],
      },
      {
        heading: "What a neighbor can actually do",
        body: [
          "Cables and ten minutes. A push out of a drift in a flat lot. A shovel behind two wheels. Walking beside someone to a car. Being the person who shows up so a stranded stranger does not have to sit in a cold car deciding whether this counts as an emergency.",
        ],
        bullets: [
          "Jump start in a public, plowed lot",
          "A hand pushing a car out of a shallow drift",
          "Shoveling a walk or the berm behind a car",
          "A walk to a car, bus stop, or building entrance",
        ],
      },
      {
        heading: "What it is not",
        body: [
          "It is not roadside assistance. A car in a ditch, a car on I-94 or I-29, a car stuck in a snowbank at the shoulder of a highway — those are tow trucks and, if you are exposed to traffic or cold, 911. Do not sit and wait for an app offer when you are cold and the shoulder is dark.",
        ],
      },
    ],
    related: ["guides/winter-help-fargo", "help/jump-start", "help/winter-car-help", "help/snow-help", "seasons/polar-vortex-cold-snap", "resources/fargo-emergency"],
    faqs: [
      {
        q: "How cold does it actually get?",
        a: "Subzero stretches are normal in January and February, and wind chill makes exposure a real risk rather than a complaint.",
      },
      {
        q: "Should I ask for a ride in a storm?",
        a: "No. Help Me is not a rideshare and nobody should be driving a stranger around in bad conditions. Stay put and use official services.",
      },
    ],
  }),

  page({
    slug: "seasons/first-snow",
    kind: "season",
    title: "First snow in Fargo–Moorhead",
    description:
      "The first real snowfall resets everyone: scrapers are missing, tires are low, lots are unplowed. What to have ready and what neighbors can help with.",
    h1: "The first snow makes everyone a beginner again",
    eyebrow: "season",
    lead: "Every year, the first real one arrives on a Tuesday and half the metro discovers the scraper is in the wrong car.",
    answer:
      "The first significant snowfall of a Fargo–Moorhead season usually arrives before people are equipped for it: no scraper, low tires, summer wipers, an unplowed lot. Neighbors can help with a scrape, a push, a shovel, or a jump. Plowing schedules and snow emergencies come from the city, not from an app.",
    takeaways: [
      "First snow catches newcomers and long-time residents alike.",
      "City snow-emergency rules govern where you can park.",
      "Neighbor help: scraping, shoveling, pushing, jump starts.",
      "Check ND 511 or MN 511 before driving out of the metro.",
    ],
    keywords: ["first snow Fargo", "Fargo snow emergency", "Moorhead snow parking"],
    sections: [
      {
        heading: "The checklist most people run a week late",
        body: [
          "A scraper with a brush in every car you drive. Tire pressure, because a cold snap pulls it down fast. Wipers that are not shredded from summer. Boots that survive slush. A charged phone before you leave, not after.",
        ],
      },
      {
        heading: "Parking is a city rule, not a neighbor rule",
        body: [
          "Fargo, West Fargo, and Moorhead each declare snow emergencies and residential plow schedules, and they tow cars that ignore them. Check your own city’s alerts. No approved helper can move a car for you, and none can tell you where the plow is going next.",
        ],
      },
    ],
    related: ["seasons/winter-in-fargo-moorhead", "help/snow-help", "guides/winter-help-fargo", "cities/fargo", "cities/moorhead", "cities/west-fargo"],
    faqs: [
      {
        q: "Who plows my street?",
        a: "Your city. Fargo, West Fargo, and Moorhead each run their own plow schedule and snow-emergency alerts.",
      },
      {
        q: "Can someone shovel my driveway through the app?",
        a: "A neighbor might help with a walk or the berm behind a car. It is not a paid snow-removal service and nobody is obligated.",
      },
    ],
  }),

  page({
    slug: "seasons/blizzard-day",
    kind: "season",
    title: "Blizzard days in Fargo–Moorhead",
    description:
      "When travel is not advised, the right answer is not an app. What a blizzard closes, who to call, and the small help that still makes sense at home.",
    h1: "A blizzard is the one day to close the app",
    eyebrow: "season",
    lead: "Ground blizzards on open prairie do not care that your errand felt important.",
    answer:
      "During a blizzard or a no-travel advisory in Fargo–Moorhead, the correct move is to stay where you are. Interstates close, visibility drops to nothing on open ground, and a stranded car becomes a survival problem fast. Check ND 511 or MN 511, call 911 if you are stranded and exposed, and save neighbor-scale help for after the wind stops.",
    takeaways: [
      "No-travel advisories and interstate closures are real and enforced.",
      "ND 511 and MN 511 are the road-condition sources.",
      "Stranded and exposed is a 911 situation, not a request.",
      "After the storm is when shoveling and jump starts matter.",
    ],
    keywords: ["Fargo blizzard", "no travel advised North Dakota", "I-29 closed", "Moorhead storm"],
    sections: [
      {
        heading: "What a blizzard actually does here",
        body: [
          "It is wind more than snowfall. Flat open country west and south of the metro means a modest amount of snow plus a hard wind erases the road entirely. Interstates get closed by the state, not by opinion, and driving around a gate is how people end up in a ditch nobody can see.",
        ],
      },
      {
        heading: "If you are already out in it",
        body: [
          "Stay with the vehicle. Call 911 if you are stranded, cold, or in traffic. Do not walk toward lights you think you can see. An app request cannot reach you faster than a dispatcher can, and nobody should be driving out to find you.",
        ],
        bullets: [
          "911 for stranded, injured, or exposed",
          "ND 511 / MN 511 for road status before you leave",
          "Stay with the car; it is shelter and it is visible",
          "Tell someone your route before you drive in winter",
        ],
      },
      {
        heading: "The day after",
        body: [
          "That is when neighbor help is worth something: berms behind cars, batteries that gave up in the cold, walks that need clearing, a hand for someone who cannot shovel. Ask then.",
        ],
      },
    ],
    related: ["seasons/winter-in-fargo-moorhead", "not-911", "resources/fargo-emergency", "help/snow-help", "help/winter-car-help", "seasons/polar-vortex-cold-snap"],
    faqs: [
      {
        q: "Will helpers come out in a blizzard?",
        a: "They should not, and nobody is obligated to. Offers are voluntary and no request is worth a second stranded car.",
      },
      {
        q: "What closes during a blizzard?",
        a: "Campuses, schools, and businesses each decide, and the state closes highways. Check the official source for each rather than assuming.",
      },
    ],
  }),

  page({
    slug: "seasons/polar-vortex-cold-snap",
    kind: "season",
    title: "Cold snaps and polar vortex weeks in Fargo–Moorhead",
    description:
      "At thirty below, cars fail together and exposure is measured in minutes. What neighbors can help with, and when a warming center or 911 is the answer.",
    h1: "Thirty below changes the math",
    eyebrow: "season",
    lead: "There is a temperature where a dead battery stops being annoying and starts being a timeline.",
    answer:
      "During a Fargo–Moorhead cold snap, deep subzero air with wind chill causes batteries to fail in clusters and makes exposure dangerous within minutes. Neighbors can jump a car in a public lot or walk with someone to a door. Anyone without shelter, or stranded and unable to stay warm, needs 911, 211, or a warming shelter — not an app request.",
    takeaways: [
      "Cold snaps cause simultaneous battery failures across the metro.",
      "Frostbite risk with wind chill can be a matter of minutes.",
      "211 connects to shelter and warming resources in ND and MN.",
      "911 for anyone stranded, disoriented, or unable to get warm.",
    ],
    keywords: ["polar vortex Fargo", "cold snap North Dakota", "wind chill Fargo", "warming shelter Fargo"],
    sections: [
      {
        heading: "Why everything fails at once",
        body: [
          "Batteries lose a large share of their cranking power in deep cold, so the marginal ones all quit on the same morning. That is also the morning every tow service in the metro has a queue. A neighbor with cables genuinely fills a gap here — but only in a lit, plowed, public lot, and only if both people can stay warm.",
        ],
      },
      {
        heading: "The part that is not about cars",
        body: [
          "Cold snaps are dangerous for anyone without stable housing, without heat, or walking a route they normally drive. That is a 211 and shelter conversation, and an emergency one if someone is disoriented or unresponsive. Do not route that into a help app.",
        ],
      },
    ],
    related: ["seasons/winter-in-fargo-moorhead", "help/jump-start", "resources/winter-shelters-fargo", "resources/211-north-dakota", "resources/homeless-services-fargo", "not-911"],
    faqs: [
      {
        q: "Is it safe to jump a car at thirty below?",
        a: "It can be, in a plowed public lot, quickly, with both people dressed for it. If either of you is getting cold, stop and call a service.",
      },
      {
        q: "Where do warming shelters get listed?",
        a: "Through 211 and local shelter providers. Hours and locations change, so confirm with the source before sending anyone.",
      },
    ],
  }),

  page({
    slug: "seasons/spring-thaw-and-flooding",
    kind: "season",
    title: "Spring thaw and Red River flooding season",
    description:
      "Melt, overland water, closed roads, and potholes. What spring does to Fargo–Moorhead, and why flood response belongs to the cities, not to a help app.",
    h1: "Spring here arrives as water",
    eyebrow: "season",
    lead: "The Red River flows north, which is exactly the wrong direction when the south end melts first.",
    answer:
      "Spring in Fargo–Moorhead means melt, overland flooding, and closed roads, because the north-flowing Red River thaws downstream last. Cities run official flood response, sandbagging operations, and road closures. A help app is not part of that: follow city announcements, and keep neighbor-scale requests to ordinary things like a stuck car in a soft lot.",
    takeaways: [
      "Flood response is run by Fargo, Moorhead, West Fargo, and the counties.",
      "Official sandbag efforts are coordinated by the cities, not by this app.",
      "Road closures are posted by the cities and by 511.",
      "Potholes and soft shoulders are the season’s quiet car killer.",
    ],
    keywords: ["Red River flooding", "Fargo flood season", "Moorhead spring flooding", "sandbagging Fargo"],
    sections: [
      {
        heading: "Why the river behaves this way",
        body: [
          "The Red River of the North runs north toward Canada. When the southern reaches melt first, the water arrives at ice still in place downstream. Add flat terrain that spreads water sideways for miles, and a modest rise covers an enormous footprint. The cities have spent decades building around this and they run the response.",
        ],
      },
      {
        heading: "How to actually help in a flood year",
        body: [
          "Through the official channel. When cities call for sandbagging volunteers, they announce it themselves with locations, hours, and requirements. That coordination has to be centralized to work. Watch your city’s announcements rather than trying to organize disaster response through a neighbor app.",
        ],
      },
      {
        heading: "The ordinary spring problems",
        body: [
          "Potholes that eat a tire on a Thursday. Gravel lots that turn into soup. Cars sunk to the rims in a thawed shoulder. Those are normal requests, and a neighbor with ten minutes is still the right answer for them.",
        ],
      },
    ],
    related: ["cities/fargo", "cities/moorhead", "resources/cass-county-resources", "resources/clay-county-resources", "help/flat-tire", "not-911"],
    faqs: [
      {
        q: "Does Help Me coordinate sandbagging?",
        a: "No. Cities run official flood operations. Follow their announcements for locations and hours.",
      },
      {
        q: "Are roads closed every spring?",
        a: "Rural and low-lying roads close in higher-water years. Check 511 and city notices rather than driving out to see.",
      },
    ],
  }),

  page({
    slug: "seasons/summer-storms-and-power-outages",
    kind: "season",
    title: "Summer storms and outages in Fargo–Moorhead",
    description:
      "Severe thunderstorms, hail, straight-line winds, and outages. What neighbors can help with after a storm and who to call when lines are down.",
    h1: "Summer arrives loud",
    eyebrow: "season",
    lead: "Flat land, big sky, and storms you can watch coming for forty minutes before they arrive.",
    answer:
      "Fargo–Moorhead summers bring severe thunderstorms with hail, straight-line winds, and occasional tornado warnings. After a storm, neighbors can help with branch cleanup and a hand around a yard. Downed power lines, gas smells, and structural damage are utility and 911 calls — never a neighbor task, and never something to investigate yourself.",
    takeaways: [
      "Take tornado warnings literally; sirens mean go inside and low.",
      "Downed lines: assume live, stay back, call 911 and the utility.",
      "Neighbor help after a storm is cleanup, not repair.",
      "Outage reporting goes to your electric utility.",
    ],
    keywords: ["Fargo summer storm", "Moorhead power outage", "tornado warning Fargo", "hail damage Fargo"],
    sections: [
      {
        heading: "During the storm",
        body: [
          "A warning is not a forecast; it means it is happening near you. Get to a basement or an interior room on the lowest floor. Do not stand in a doorway watching it, no matter how good the sky looks. Campuses and cities run their own alert systems and they are worth enrolling in before you need them.",
        ],
      },
      {
        heading: "After the storm",
        body: [
          "Branches, gutters, a tipped fence, a garage that needs an extra pair of arms. Those are ordinary neighbor things and they are exactly what a small help request is good for. Roof work, chainsaw work at height, anything electrical, or anything touching a line is not — call a contractor and the utility.",
        ],
        bullets: [
          "911 for injuries, gas smells, or downed lines",
          "Your electric utility for outages and line reports",
          "Neighbors for cleanup, lifting, and hauling to the curb",
          "Licensed contractors for roofs, trees at height, and wiring",
        ],
      },
    ],
    related: ["help/heavy-lifting", "resources/fargo-emergency", "cities/west-fargo", "seasons/spring-thaw-and-flooding", "not-911", "resources"],
    faqs: [
      {
        q: "Can I ask for help with storm damage?",
        a: "For cleanup and lifting, yes. For repairs, hire someone licensed — the app has no payments and helpers are not contractors.",
      },
      {
        q: "Who do I call about a downed line?",
        a: "911 and your electric utility. Stay far back and keep others away.",
      },
    ],
  }),

  page({
    slug: "seasons/fall-move-in-season",
    kind: "season",
    title: "Move-in season in Fargo–Moorhead",
    description:
      "Late August turns the metro into a moving truck. What move-in week looks like at NDSU, MSUM, Concordia, and M State, and where a spare set of hands helps.",
    h1: "Late August, and everyone is carrying something",
    eyebrow: "season",
    lead: "Four campuses fill in the same ten days, and every apartment lease in the metro seems to start on the first.",
    answer:
      "Move-in season in Fargo–Moorhead runs through late August, when NDSU, MSUM, Concordia, and M State all fill within days of each other and most apartment leases turn over. It is the peak week for heavy lifting, directions, and being lost on a campus. Universities run their own official move-in logistics, which is the authority on times and routes.",
    takeaways: [
      "Four campuses move in within roughly the same two weeks.",
      "Official move-in instructions come from each university.",
      "Peak requests: lifting, directions, finding the right building.",
      "Parking near campus is the real constraint, not the boxes.",
    ],
    keywords: ["NDSU move in", "MSUM move in", "Fargo apartment move", "move in week Fargo Moorhead"],
    sections: [
      {
        heading: "What actually goes wrong",
        body: [
          "Not the boxes. The logistics: a loading zone that is full, an elevator with a line, a building that shares a name with another building, a parent circling a lot for twenty minutes while a car of belongings sits in the sun. Nobody plans for the third trip up the stairs.",
        ],
      },
      {
        heading: "Where a neighbor fits",
        body: [
          "Ten minutes on the heavy end of a couch. Someone who knows that Minard is not where you think it is. A person who can point at the right lot. Small, finishable, and genuinely the difference between a bad day and a fine one.",
        ],
      },
      {
        heading: "Follow the university, not a rumor",
        body: [
          "Each campus publishes its own move-in windows, routes, and rules, and they change year to year. Check the official page for your campus. Help Me links official campus calendars with attribution; it does not run move-in and is not affiliated with any university.",
        ],
      },
    ],
    related: ["guides/move-in-weekend-ndsu", "help/move-in", "help/heavy-lifting", "campuses/ndsu", "campuses/msum", "seasons/back-to-school-august"],
    faqs: [
      {
        q: "Are helpers available during move-in?",
        a: "Offers are always voluntary. Move-in weekend is busy for everyone, so ask early in the day and be specific about the building.",
      },
      {
        q: "Can someone help me move an entire apartment?",
        a: "No. That is a movers-and-friends job. Requests should be small and finishable in one meeting.",
      },
    ],
  }),

  page({
    slug: "seasons/back-to-school-august",
    kind: "season",
    title: "Back to school in Fargo–Moorhead",
    description:
      "August in the metro: new students, new commutes, full stores, and a week where nobody knows where anything is. What helps and what to read first.",
    h1: "August, when the metro repopulates",
    eyebrow: "season",
    lead: "Traffic patterns change overnight, the grocery stores near campus turn into a scrum, and thousands of people are navigating by screenshot.",
    answer:
      "Back-to-school in Fargo–Moorhead reshapes the metro in a single week: four college campuses and every K–12 district start within days, commutes get slower, and neighborhoods near campus fill up. For newcomers it is the highest-value week to ask a local a simple question — directions, a building, which lot is legal.",
    takeaways: [
      "Traffic and parking near campuses change abruptly in late August.",
      "Newcomers benefit most from small, local knowledge.",
      "Official campus calendars are the authority on dates.",
      "High-school pages here describe adult neighbors, not students.",
    ],
    keywords: ["back to school Fargo", "August Fargo Moorhead", "new student Fargo", "campus traffic Fargo"],
    sections: [
      {
        heading: "What changes in a week",
        body: [
          "University Drive and the streets around NDSU stop being quick. Moorhead fills around MSUM and Concordia. Every apartment complex within walking distance of a campus turns over. And a few thousand people who have never seen a North Dakota winter arrive with summer clothes and confidence.",
        ],
      },
      {
        heading: "The best question to ask a local",
        body: [
          "Where should I park, and which door do I actually use. Not glamorous, and it saves more time than any orientation slide. Local-guide and directions requests exist for exactly this.",
        ],
      },
    ],
    related: ["for-newcomers", "for-students", "guides/new-to-fargo", "help/directions", "help/local-guide", "seasons/fall-move-in-season"],
    faqs: [
      {
        q: "Is Help Me part of orientation?",
        a: "No. It is not affiliated with or endorsed by any campus. Official calendars are linked with attribution, which is a different thing.",
      },
      {
        q: "What should a new student read first?",
        a: "The campus page for where you actually are, then the winter guide before October rather than after.",
      },
    ],
  }),

  page({
    slug: "seasons/game-day-fargo",
    kind: "season",
    title: "Game days in Fargo",
    description:
      "Fargodome game days move traffic, fill lots, and change how long everything takes. What to expect and what a neighbor can help with around a big event.",
    h1: "Game day rearranges the north side",
    eyebrow: "season",
    lead: "On a Bison home Saturday, the sensible move is to assume every route near the Fargodome takes twice as long.",
    answer:
      "On Fargodome event days, traffic and parking around the north side of Fargo and the NDSU area change significantly for hours before and after. Plan extra time, expect full lots, and treat posted event parking rules as real. Official schedules, parking, and ticket information come from NDSU and the venue, not from this site.",
    takeaways: [
      "Fargodome events reshape traffic on Fargo’s north side.",
      "Event parking rules are enforced; read the signs.",
      "Official schedules come from NDSU and the venue.",
      "Common asks: directions, a walk back to a distant lot.",
    ],
    keywords: ["Fargodome game day", "NDSU football parking", "Fargo event traffic"],
    sections: [
      {
        heading: "What to expect",
        body: [
          "Lots fill early, side streets fill after that, and the walk back to wherever you finally parked is longer than you remember — especially in November, in the dark, in a wind that came a long way without hitting anything.",
        ],
      },
      {
        heading: "Where help fits",
        body: [
          "A walk back to a car after a night event. Directions for someone who parked by landmark and lost it. A jump start in a lot that has emptied around a car that will not start. Ordinary things, more likely on a day when twenty thousand people are doing the same thing at once.",
        ],
      },
    ],
    related: ["campuses/ndsu", "help/safety-walk", "help/walk-to-car", "help/directions", "events", "neighborhoods/north-fargo"],
    faqs: [
      {
        q: "Does Help Me sell tickets or list game times?",
        a: "No. Event listings come from official sources including Ticketmaster Fargo and campus calendars, always linked back to the source.",
      },
      {
        q: "Is Help Me affiliated with NDSU athletics?",
        a: "No. Linking a public calendar is not sponsorship or endorsement.",
      },
    ],
  }),

  page({
    slug: "seasons/finals-week",
    kind: "season",
    title: "Finals week in Fargo–Moorhead",
    description:
      "Libraries fill, sleep disappears, and campus lots empty late at night. What helps during finals at NDSU, MSUM, Concordia, and M State — and what needs real support.",
    h1: "Finals week runs on caffeine and bad parking",
    eyebrow: "season",
    lead: "Two weeks where the libraries are full at midnight and the parking lots are empty at two.",
    answer:
      "During finals at NDSU, MSUM, Concordia, and M State, study spaces fill, hours run late, and students walk to cars in the dark far more often than usual. Practical requests spike: study company, printing, a walk across a lot at midnight. Mental-health crises are not a neighbor task — campus counseling, 988, and 911 exist for that.",
    takeaways: [
      "Late-night walks across empty campus lots are the common risk.",
      "Printing failures spike at exactly the worst hour.",
      "Campus counseling centers exist and are the right first call.",
      "988 for a mental-health crisis; 911 for danger.",
    ],
    keywords: ["finals week NDSU", "MSUM finals", "study spots Fargo", "late night campus safety"],
    sections: [
      {
        heading: "The practical asks",
        body: [
          "Someone to sit across a table so you actually stay. A working printer an hour before a deadline. A walk to a car parked much further away than it was at ten in the morning. Small, real, and easy for a neighbor to solve.",
        ],
      },
      {
        heading: "The asks that are not practical",
        body: [
          "If finals week has moved past stress into something heavier — not sleeping, not eating, thoughts of hurting yourself — that is not something to route to a stranger with an app. Campus counseling services exist at every campus in this metro. 988 is the crisis line. 911 is for immediate danger. Use them, and tell someone who can stay with you.",
        ],
      },
    ],
    related: ["help/study-buddy", "help/printing", "help/safety-walk", "resources/mental-health-fargo", "lists/study-spots-fargo", "campuses"],
    faqs: [
      {
        q: "Can I ask someone to tutor me?",
        a: "Study company is a normal request. Actual tutoring belongs to campus tutoring centers, which are free at every campus here.",
      },
      {
        q: "Are campus escorts available?",
        a: "Where a campus offers a safety escort, that is the right first call on campus property. Campus safety pages here point at each one.",
      },
    ],
  }),

  page({
    slug: "seasons/holiday-break-empty-campus",
    kind: "season",
    title: "Holiday break in Fargo–Moorhead",
    description:
      "Campuses empty, buildings close, and the people still here are the ones who could not travel. What changes over winter break and what still helps.",
    h1: "The quiet weeks",
    eyebrow: "season",
    lead: "Between mid-December and January, this metro gets very cold and very empty at the same time.",
    answer:
      "Over winter break the Fargo–Moorhead campuses empty out, many buildings and services run reduced hours, and the people still around are often international students, workers on shift, and anyone who could not travel. Cars still die in the cold, but there are fewer people nearby to help, so plan earlier and lean on official services.",
    takeaways: [
      "Campus buildings, dining, and services cut hours over break.",
      "Fewer people nearby means thinner help coverage.",
      "Cold-weather car failures continue regardless.",
      "211 and shelter resources matter most in these weeks.",
    ],
    keywords: ["winter break Fargo", "campus closed holidays Fargo", "December Fargo Moorhead"],
    sections: [
      {
        heading: "Who is still here",
        body: [
          "International students who did not fly home. Nurses, retail workers, plow drivers, and everyone whose job does not observe a break. People without family to go to. The metro does not empty so much as thin, and the thin version is colder and darker.",
        ],
      },
      {
        heading: "Plan for thinner coverage",
        body: [
          "Ask earlier in the day. Be specific about a public meeting place that is actually open. Confirm hours before you drive somewhere — a campus building that is normally open until midnight may be locked at four. And keep roadside assistance information somewhere you can reach it with cold hands.",
        ],
      },
    ],
    related: ["seasons/winter-in-fargo-moorhead", "for-international-students", "resources/211-north-dakota", "resources/winter-shelters-fargo", "help/jump-start", "campuses"],
    faqs: [
      {
        q: "Are there fewer helpers over break?",
        a: "Realistically yes, especially near campuses. Coverage follows people.",
      },
      {
        q: "What is open?",
        a: "Confirm with the place itself. Campus and city hours over the holidays change every year.",
      },
    ],
  }),

  page({
    slug: "seasons/spring-break-fargo",
    kind: "season",
    title: "Spring break in Fargo–Moorhead",
    description:
      "Campuses thin out in March while winter is still going. What spring break changes for the people who stay, and what still helps.",
    h1: "Spring break, still with snow on the ground",
    eyebrow: "season",
    lead: "March here is not spring. It is winter with better lighting and a week off.",
    answer:
      "Spring break thins the Fargo–Moorhead campuses in March, but the weather has usually not turned yet — icy lots, slush, and cold mornings continue. For students staying in town, campus services run reduced hours and neighborhoods near campus get quiet, which means asking earlier and meeting somewhere that is actually open.",
    takeaways: [
      "March is still winter conditions in this metro.",
      "Campus services and dining reduce hours during break.",
      "Fewer people nearby near campus neighborhoods.",
      "Refreezing overnight makes morning lots genuinely slick.",
    ],
    keywords: ["spring break Fargo", "March weather Fargo", "campus break MSUM"],
    sections: [
      {
        heading: "The freeze-thaw trap",
        body: [
          "March days get above freezing and March nights do not. Meltwater refreezes into sheets across lots and sidewalks by morning. It is the classic season for a fall in a parking lot and for tires spinning in a puddle that turned into a rink overnight.",
        ],
      },
      {
        heading: "If you stayed in town",
        body: [
          "It is a good week to actually see the metro — downtown Fargo, the Moorhead side, the trails when they clear. Local-guide requests are what this week is for, and asking a resident beats guessing from a search result.",
        ],
      },
    ],
    related: ["seasons/spring-thaw-and-flooding", "help/local-guide", "lists/things-to-do-in-fargo", "guides/downtown-fargo-at-night", "for-students", "campuses"],
    faqs: [
      {
        q: "Is the weather nice by spring break?",
        a: "Usually not. Assume winter conditions and be pleasantly surprised.",
      },
      {
        q: "Do campus services close?",
        a: "Hours typically reduce. Check the campus’s own announcement rather than assuming.",
      },
    ],
  }),

  page({
    slug: "seasons/move-out-week",
    kind: "season",
    title: "Move-out week in Fargo–Moorhead",
    description:
      "May turns the metro into a curb full of furniture. What move-out looks like near campus, where a spare set of hands helps, and where donations go.",
    h1: "May, and everything is on the curb",
    eyebrow: "season",
    lead: "Leases end, dorms empty, and a metro’s worth of furniture briefly lives outdoors.",
    answer:
      "Move-out in Fargo–Moorhead concentrates in May, when campus housing closes and most leases end on the same few days. Heavy lifting and hauling requests spike. Furniture that is still good belongs at a donation program rather than a dumpster, and each campus publishes its own move-out schedule and rules.",
    takeaways: [
      "Campus housing close-out dates come from each university.",
      "Lease turnover clusters on the same days across the metro.",
      "Neighbor help: lifting, a hand to a truck, hauling to the curb.",
      "Usable furniture and clothing belong with donation programs.",
    ],
    keywords: ["move out Fargo", "dorm move out NDSU", "May lease end Fargo", "furniture donation Fargo"],
    sections: [
      {
        heading: "The bottleneck is always the stairs",
        body: [
          "Elevators, loading zones, and dumpsters are the constraint, not the volume of stuff. Ten minutes from a second pair of arms at the right moment saves an hour of trips. That is exactly the size of request this app is for.",
        ],
      },
      {
        heading: "Do not dumpster the good stuff",
        body: [
          "Working furniture, kitchenware, and clothing have real destinations in this metro through thrift and donation programs. Check what an organization actually accepts and when they take drop-offs before loading a truck — capacity in May is tight everywhere.",
        ],
      },
    ],
    related: ["help/heavy-lifting", "help/move-in", "seasons/fall-move-in-season", "resources/food-assistance-fargo", "for-renters", "campuses"],
    faqs: [
      {
        q: "Can I get help hauling a couch?",
        a: "A hand carrying it, plausibly. A truck and a haul-away is a paid service, and this app has no payments.",
      },
      {
        q: "When exactly does campus housing close?",
        a: "Each university sets and publishes its own date. Use the campus’s own announcement.",
      },
    ],
  }),

  page({
    slug: "seasons/graduation-weekend",
    kind: "season",
    title: "Graduation weekend in Fargo–Moorhead",
    description:
      "Four campuses graduate within days. Hotels fill, parking disappears, and families arrive from out of town — what to expect and where help fits.",
    h1: "Graduation weekend fills the metro",
    eyebrow: "season",
    lead: "Every hotel between West Fargo and Dilworth is booked, and everyone is looking for the same parking ramp.",
    answer:
      "Graduation ceremonies at NDSU, MSUM, Concordia, and M State fall within a short window each spring. Hotels book out, campus parking fills, and thousands of out-of-town visitors navigate the metro at once. Ceremony details and parking rules come from each university; a neighbor is useful for directions and a hand with logistics.",
    takeaways: [
      "Ceremonies cluster across four campuses in a few days.",
      "Hotels and parking are the constraints, not the ceremonies.",
      "Official times and venues come from each university.",
      "Common asks: directions, a walk, a hand with a car.",
    ],
    keywords: ["NDSU graduation", "Concordia commencement", "graduation weekend Fargo hotels"],
    sections: [
      {
        heading: "For visiting families",
        body: [
          "Assume traffic near the campus takes longer than the map says, arrive earlier than feels necessary, and confirm the venue — commencement is not always in the building you assume. Someone who lives here can answer a parking question in one sentence that would take you three searches.",
        ],
      },
      {
        heading: "For the graduate",
        body: [
          "It usually collides with move-out, which means furniture, a truck, and family in town on the same weekend. Small requests, early in the day, with a specific meeting place.",
        ],
      },
    ],
    related: ["seasons/move-out-week", "help/directions", "help/local-guide", "campuses/ndsu", "campuses/concordia", "lists/things-to-do-in-fargo"],
    faqs: [
      {
        q: "Where is commencement held?",
        a: "Each university announces its own venue and time. Check the campus source rather than a secondhand listing.",
      },
      {
        q: "Is Help Me involved in graduation events?",
        a: "No. Official campus calendars are linked with attribution, which is not affiliation.",
      },
    ],
  }),
];
