// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Typescript Markdown Starter',
    description: 'Gatsby Typescript Markdown Starter',
    siteUrl: 'https://gatsby-typescript-markdown-starter.vercel.app/',
  },
  mapping: {
    'MarkdownRemark.frontmatter.categories': 'CategoriesYaml',
  },
  plugins: [
    'gatsby-transformer-yaml',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        quality: 100,
        stripMetadata: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'src', 'content'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2000,
              quality: 100,
            },
          },
        ],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-color-function'), require('cssnano')()],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-XXXX-Y',
        // Puts tracking script in the head instead of the body
        head: true,
        // IP anonymization for GDPR compliance
        anonymize: true,
        // Disable analytics for users with `Do Not Track` enabled
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**'],
        // Specifies what percentage of users should be tracked
        sampleRate: 100,
        // Determines how often site speed tracking beacons will be sent
        siteSpeedSampleRate: 10,
      },
    },
  ],
};
