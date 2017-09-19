import React from 'react'
import Link from 'gatsby-link'

const PostIndex = () => (
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
        <Link to='/first-post'>Fist Post</Link>
      </ul>
    </div>
  </div>
)

export default PostIndex
