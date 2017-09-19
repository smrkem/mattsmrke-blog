const path = require('path')

exports.createPages = ({boundActionCreators, graphql}) => {
  // console.log(boundActionCreators);
  // console.log("+++++++++++++++++++++++++++++++\n\n\n\n\n\n\n")
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve('src/templates/post.js')

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }`)
  .then(res => {
    if(res.errors) {
      return Promise.refect(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach( ({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })
  })

}
