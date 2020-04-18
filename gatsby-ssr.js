const React = require("react")
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  headComponents.sort((a, b) => {
    if (a.type === "meta") {
      return -1
    } else if (b.type === "meta") {
      return 1
    }
    return 0
  })
  headComponents.forEach(head => {
    if (head.props && head.props["data-react-helmet"]) {
      delete head.props["data-react-helmet"]
    }
  })
  replaceHeadComponents(headComponents)
}
