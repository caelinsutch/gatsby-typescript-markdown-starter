# Gatsby Typescript Markdown Starter Template

Easy to use GatsbyJS template built from Typescript and Markdown. Easy to use project or blog template with individual markdown posts, images, and filterable categories all built in!

## Features
- Eslint/Prettier configured
- Easy to customize
- Typescript pre configured
- Markdown posts with PrismJS code styling
- Categories based off a yaml file
- Preconfigured with Gatsby Image
- High Lighthouse Scores
- Easy to understand product structure
- CSS in JS with Emotion
- Sass stylesheets
- React Helmet for SEO best practices

## Structure
```text
.
├── src
│   └── content              # User generated content - Markdown posts and categories yaml file
│   │   │── assets            # Assets used in the website
│   │   └── thumbnail         # Images for posts
│   ├── components          # Components
│   │   └── styles             # Styles that are used in multiple components
│   └── pages               # Pages
│   └── styles              # Global styles
│   └── templates           # Project page template
└── static                  # favicon & robots.txt
```

## Getting Started

Create a new project by running `gatsby new gatsby-typescript-markdown-starter https://github.com/caelinsutch/gatsby-typescript-markdown-starter`. 

Do the following items to customize the website:

- Replace the favicon with your own
- Edit the `website-config.ts` file to match your information
- Edit the `gatsby-config.js` metadata section to match your information
- Replace the `favicon.ico` file in the `static` folder
- Replace `cover-card.png` and `main-logo.png` files in `src/content/assets`
- Customize the categories in `categories.yaml`
- Start adding projects in the `content` folder

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
