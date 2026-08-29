type JsonLdProps = {
  data: unknown;
};

/** Renders JSON-LD. Angle brackets are escaped so the payload cannot break out of the script. */
export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
