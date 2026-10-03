import { GEO, ORGANIZATION, SITE_NAME, SITE_TAGLINE, SITE_URL, SOFTWARE, absoluteUrl } from "./site";
import type { SeoPage } from "./types";

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: ORGANIZATION.name,
    legalName: ORGANIZATION.legalName,
    url: ORGANIZATION.url,
    email: ORGANIZATION.email,
    description: ORGANIZATION.description,
    logo: {
      "@type": "ImageObject",
      url: ORGANIZATION.logo,
      width: 512,
      height: 512,
    },
    image: ORGANIZATION.logo,
    slogan: SITE_TAGLINE,
    foundingLocation: {
      "@type": "Place",
      name: ORGANIZATION.foundingLocation,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: GEO.regionName,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: ORGANIZATION.email,
      contactType: "customer support",
      areaServed: ["US"],
      availableLanguage: ["English"],
    },
  };
}

export function websiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: [`${SITE_NAME} app`, "HelpMe", "Help Me Fargo"],
    description: ORGANIZATION.description,
    inLanguage: "en-US",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function softwareSchema(): Json {
  return {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#app`,
    name: SOFTWARE.name,
    applicationCategory: SOFTWARE.applicationCategory,
    operatingSystem: SOFTWARE.operatingSystem,
    offers: {
      "@type": "Offer",
      price: SOFTWARE.offersPrice,
      priceCurrency: "USD",
    },
    downloadUrl: SOFTWARE.downloadUrl,
    installUrl: SOFTWARE.downloadUrl,
    url: SITE_URL,
    image: ORGANIZATION.logo,
    description: ORGANIZATION.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    featureList: [
      "Ask neighbors nearby for quick, everyday, non-emergency favors",
      "A rough area on the map until you agree to share more",
      "Private chat between requester and accepted helper",
      "Official Fargo–Moorhead campus and regional event calendars",
      "Report or block any member at any time; delete your own account",
    ],
    countriesSupported: ["US"],
    areaServed: GEO.areaServed,
  };
}

export function breadcrumbSchema(page: SeoPage): Json {
  const parts = page.slug ? page.slug.split("/") : [];
  const items: Json[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ];
  let acc = "";
  parts.forEach((part, index) => {
    acc += `/${part}`;
    const isLast = index === parts.length - 1;
    items.push({
      "@type": "ListItem",
      position: index + 2,
      name: isLast ? page.h1 : titleCase(part),
      item: absoluteUrl(acc),
    });
  });
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(page.slug ? `/${page.slug}` : "/")}#breadcrumb`,
    itemListElement: items,
  };
}

/**
 * FAQPage, not QAPage: QAPage is reserved for pages where users submit answers.
 * On question pages the page's own question and answer lead the list.
 */
export function faqSchema(page: SeoPage): Json | null {
  const items: { q: string; a: string }[] = [];
  if (page.kind === "question" && page.answer) items.push({ q: page.h1, a: page.answer });
  for (const faq of page.faqs ?? []) items.push({ q: faq.q, a: faq.a });
  if (!items.length) return null;
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(page.slug ? `/${page.slug}` : "/")}#faq`,
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function webpageSchema(page: SeoPage): Json {
  const path = page.slug ? `/${page.slug}` : "/";
  const type =
    page.kind === "glossary"
      ? "DefinedTerm"
      : page.kind === "guide" || page.kind === "list" || page.kind === "season"
        ? "Article"
        : "WebPage";

  const base: Json = {
    "@type": type === "DefinedTerm" ? ["WebPage", "DefinedTerm"] : type,
    "@id": `${absoluteUrl(path)}#page`,
    url: absoluteUrl(path),
    name: page.title,
    headline: page.h1,
    description: page.description,
    inLanguage: "en-US",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    dateModified: page.updated,
    datePublished: page.updated,
    speakable: SPEAKABLE,
    breadcrumb: { "@id": `${absoluteUrl(path)}#breadcrumb` },
    potentialAction: {
      "@type": "ReadAction",
      target: [absoluteUrl(path)],
    },
  };

  if (page.answer) {
    base.abstract = page.answer;
  }
  if (page.keywords?.length) {
    base.keywords = page.keywords.join(", ");
  }

  if (type === "Article") {
    base.author = { "@id": `${SITE_URL}/#organization` };
    base.datePublished = page.updated;
  }

  if (page.kind === "glossary" && page.term) {
    base.name = page.term.name;
    base.description = page.term.shortDefinition;
  }

  if (page.geo) {
    base.about = {
      "@type": page.geo.type === "Campus" || page.geo.type === "School" ? "EducationalOrganization" : "Place",
      name: page.geo.name,
      address: page.geo.city
        ? {
            "@type": "PostalAddress",
            addressLocality: page.geo.city,
            addressRegion: page.geo.state,
            addressCountry: "US",
          }
        : undefined,
      geo:
        page.geo.lat && page.geo.lng
          ? {
              "@type": "GeoCoordinates",
              latitude: page.geo.lat,
              longitude: page.geo.lng,
            }
          : undefined,
    };
  }

  return base;
}


/** GEO: a plain statement of what is offered, where, and to whom. */
export function serviceSchema(): Json {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}/#service`,
    name: "Community help matching",
    serviceType: "Everyday non-emergency community help",
    description:
      "Help Me matches a person who needs everyday, non-emergency help with neighbors nearby in the Fargo\u2013Moorhead area who applied to help and were reviewed by our team. It is not an emergency service and not a paid gig marketplace.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "City", name: "Fargo", address: { "@type": "PostalAddress", addressRegion: "ND", addressCountry: "US" } },
      { "@type": "City", name: "West Fargo", address: { "@type": "PostalAddress", addressRegion: "ND", addressCountry: "US" } },
      { "@type": "City", name: "Moorhead", address: { "@type": "PostalAddress", addressRegion: "MN", addressCountry: "US" } },
      { "@type": "AdministrativeArea", name: GEO.regionName },
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Adults in the Fargo\u2013Moorhead metropolitan area",
      geographicArea: { "@type": "AdministrativeArea", name: GEO.regionName },
    },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    isRelatedTo: { "@id": `${SITE_URL}/#app` },
  };
}

/** AEO: the answer capsule and headline are the parts worth reading aloud. */
const SPEAKABLE = {
  "@type": "SpeakableSpecification",
  cssSelector: ["h1", "[data-speakable]"],
};

export function howToSchema(page: SeoPage): Json | null {
  if (!page.steps?.length) return null;
  const url = absoluteUrl(page.slug ? `/${page.slug}` : "/");
  return {
    "@type": "HowTo",
    "@id": `${url}#howto`,
    name: page.h1,
    description: page.answer ?? page.description,
    totalTime: "PT10M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
    supply: { "@type": "HowToSupply", name: "An iPhone running iOS 15 or later" },
    step: page.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${url}#step-${index + 1}`,
    })),
  };
}

export function itemListSchema(page: SeoPage): Json | null {
  if (!page.listItems?.length) return null;
  const url = absoluteUrl(page.slug ? `/${page.slug}` : "/");
  return {
    "@type": "ItemList",
    "@id": `${url}#list`,
    name: page.h1,
    description: page.description,
    numberOfItems: page.listItems.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: page.listItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
      ...(item.href ? { url: absoluteUrl(item.href) } : {}),
    })),
  };
}

export function graphFor(page: SeoPage): Json {
  const graph: unknown[] = [
    organizationSchema(),
    websiteSchema(),
    softwareSchema(),
    serviceSchema(),
    webpageSchema(page),
    breadcrumbSchema(page),
  ];
  for (const node of [howToSchema(page), itemListSchema(page), faqSchema(page)]) {
    if (node) graph.push(node);
  }
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function homeGraph(): Json {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), websiteSchema(), softwareSchema(), serviceSchema()],
  };
}

function titleCase(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}
