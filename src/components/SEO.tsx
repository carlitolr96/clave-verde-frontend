import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  locale?: string;
}

const SEO = ({
  title,
  description,
  url = "https://www.claveverde.com/",
  image = `${url}/public/Hero.jpg`,
  locale = "es_DO",
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />

      {/* Pinterest (usa Open Graph, pero puedes añadir más señales) */}
      <meta name="pinterest-rich-pin" content="true" />

      {/* Extra (mejora general de SEO) */}
      <meta name="theme-color" content="#00b4fc" />
    </Helmet>
  );
};

export default SEO;

