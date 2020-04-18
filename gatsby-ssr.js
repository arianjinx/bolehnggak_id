const React = require("react")
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  headComponents
    .sort(a => {
      if (a.props && a.props["data-react-helmet"]) {
        return 0
      }
      return 1
    })
    .forEach(head => {
      if (head.props && head.props["data-react-helmet"]) {
        delete head.props["data-react-helmet"]
      }
    })
  replaceHeadComponents(headComponents)
}
