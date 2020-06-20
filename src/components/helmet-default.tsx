import React from 'react';
import { Image } from '../interfaces';
import { Helmet } from 'react-helmet';
import config from '../website-config';

interface HelmetDefaultProps {
  title: string;
  description: string;
  pageUrl?: string;
  image?: Image;
}

const HelmetDefault: React.FC<HelmetDefaultProps> = ({ title, description, image, pageUrl, children }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:site_name" content={config.title} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={pageUrl ? pageUrl : config.siteUrl} />
    {
      image ?

        <meta
          property="og:image"
          content={`${config.siteUrl}${image.childImageSharp.fixed.src}`}
        /> :
        null
    }
    {config.facebook && (
      <meta property="article:publisher" content={config.facebook} />
    )}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:url" content={`${config.siteUrl}/about`} />
    {
      image ?
        <meta
          name="twitter:image"
          content={`${config.siteUrl}${image.childImageSharp.fixed.src}`}
        /> :
        null
    }
    {config.twitter && (
      <meta
        name="twitter:site"
        content={`@${config.twitter.split('https://twitter.com/')[1]}`}
      />
    )}
    {children}
  </Helmet>
);

export default HelmetDefault;
