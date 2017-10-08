import React from 'react'
import { NavLink } from 'react-router-dom'

const Posts = (props) => {
  console.log("Posts props:", props)
  return(
    <div className="posts">
      <h1>My Posts</h1>
      <div>
      {
        props.posts.map((post, i) => {
          return (
            <div key={i}>
              <NavLink to={`/posts/${post.slug}`} >{post.title}</NavLink>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Posts
