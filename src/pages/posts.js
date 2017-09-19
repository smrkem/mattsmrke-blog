import React from 'react'
import Link from 'gatsby-link'

const PostIndex = ({data}) => {
  let posts = data.allMarkdownRemark.edges
  return (
    <div>
      <h1>This will be a listing of recent posts.</h1>
      <div>
        <p>toDo:</p>
        <ul>
          <li>sorted by most recent, 'pinned'</li>
        </ul>
      </div>
      <div>
        <ul>
          { posts.map( ({node}) => (
            <li key={node.frontmatter.path}>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const postsQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          frontmatter {
            title
            path
            published
          }
        }
      }
    }
  }
`

export default PostIndex
