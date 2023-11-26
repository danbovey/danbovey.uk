require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Dan Bovey',
    description: 'Senior Software Engineer at Trainline',
    subtitle: 'React, TypeScript, Node.js, PHP, Python, C# & Go.'
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'work',
        path: `${__dirname}/src/work`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-pnpm'
  ]
};
