export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage?: string;
  logo: string;
  lang: string;
  siteUrl: string;
  facebook?: string;
  twitter?: string;
  googleSiteVerification?: string;
}

const config: WebsiteConfig = {
  title: 'Gatsby Typescript Markdown Starter',
  description: 'Gatsby Typescript Markdown Starter',
  coverImage: 'assets/cover-card.png',
  logo: 'assets/main-logo.png',
  lang: 'en',
  siteUrl: 'https://gatsby-typescript-markdown-starter.vercel.app/',
  facebook: 'https://www.facebook.com/caelinsutch',
  twitter: 'https://twitter.com/caelin_sutch',
  googleSiteVerification: 'GoogleCode',
};

export default config;
