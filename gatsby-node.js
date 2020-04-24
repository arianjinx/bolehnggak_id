/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return (query = graphql(`
    {
      allGoogleSheetCrowdsourceRow(
        sort: { fields: activity, order: ASC }
        filter: { published: { eq: true } }
      ) {
        edges {
          node {
            id
            slug
            answertype
            answertypelabel
            activity
            answercontent
            referencetitle
            reference
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }

    const template = path.resolve("./src/templates/answer.js")

    result.data.allGoogleSheetCrowdsourceRow.edges.forEach(({ node }) => {
      var path = node.slug
      createPage({
        path,
        component: template,
        context: node,
      })
    })
  }))
}
