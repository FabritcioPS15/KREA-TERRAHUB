import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
}: SEOProps) => {
  const siteTitle = 'Krea & Terra Hub';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Hub empresarial especializado en soluciones constructivas integrales y productos agroindustriales de origen.';
  const defaultKeywords = 'Krea & Terra Hub, soluciones constructivas, productos agroindustriales, construcción, agroindustria';
  const siteUrl = 'https://www.kythubx.com';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      <meta property="og:image" content={ogImage || '/assets/og-image.png'} />
      <meta property="og:url" content={`${siteUrl}${canonical || ''}`} />
      <meta property="og:site_name" content="Krea & Terra Hub" />
      <meta property="og:locale" content="es_PE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || fullTitle} />
      <meta name="twitter:description" content={twitterDescription || description || defaultDescription} />
      <meta name="twitter:image" content={twitterImage || '/assets/og-image.png'} />
    </Helmet>
  );
};

export default SEO;
