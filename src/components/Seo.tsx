import { SITE_URL } from '../config';

type Props = {
  title: string;
  description: string;
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Per-page SEO/GEO metadata. Uses React 19 native document metadata hoisting —
 * these tags are rendered directly in the tree and React moves them into
 * <head> automatically, so no react-helmet or similar is needed.
 */
export function Seo({ title, description, path, jsonLd }: Props) {
  const url = `${SITE_URL}${path}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
}
