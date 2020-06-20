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
  title: 'Website Title',
  description: 'Website Description.',
  coverImage: 'assets/cover-card.png',
  logo: 'assets/main-logo.png',
  lang: 'en',
  siteUrl: 'https://example.com',
  facebook: 'https://www.facebook.com/example',
  twitter: 'https://twitter.com/example',
  googleSiteVerification: 'GoogleCode',
};

export default config;
