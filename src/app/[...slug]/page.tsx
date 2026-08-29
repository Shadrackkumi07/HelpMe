import { notFound } from "next/navigation";
import ContentPage from "@/components/seo/ContentPage";
import { allPages, getPage } from "@/lib/content/registry";
import { pageMetadata } from "@/lib/seo/metadata";

export const dynamicParams = false;

type Params = { slug: string[] };

export function generateStaticParams(): Params[] {
  return allPages()
    .filter((entry) => entry.slug.length > 0)
    .map((entry) => ({ slug: entry.slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getPage(slug.join("/"));
  if (!page) return {};
  return pageMetadata(page);
}

export default async function CatchAllPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getPage(slug.join("/"));
  if (!page) notFound();
  return <ContentPage page={page} />;
}
