module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-63203221-7",
        },
      },
  ],
}
