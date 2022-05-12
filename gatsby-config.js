module.exports = {
  siteMetadata: {
    title: `Justin Aiello`,
    description: `Software Engineer | Asheville, NC`,
    author: `Justin Aiello`,
    siteUrl: 'https://www.justinaiello.com',
    keywords: ['justin aiello', 'software engineer', 'react', 'javascript'],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve('./src/layouts/PrimaryLayout.js'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: 'gatsby-plugin-sharp',
    },
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Oxygen:300,400'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Justin Aiello`,
        short_name: `Justin Aiello`,
        start_url: `/`,
        background_color: `#111219`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
