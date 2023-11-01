module.exports = {
  siteMetadata: {
    title: `Estudos do Jamstack com Gatsby`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
}
