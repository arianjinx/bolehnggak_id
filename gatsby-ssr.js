const React = require("react")
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  let headComponents = getHeadComponents()
  headComponents.forEach(head => {
    if (head.props && head.props["data-react-helmet"]) {
      delete head.props["data-react-helmet"]
    }
  })
  replaceHeadComponents(headComponents)
}
