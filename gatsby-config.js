const dotenv = require('dotenv')
if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: 'My Gatsby Site',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.spaceID,
        accessToken: process.env.accessToken,
      },
    },
  ],
}
