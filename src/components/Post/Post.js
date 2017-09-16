import React from 'react'

const Post = (props) => {
    console.log("props:", props)
    return (
      <div className="post">
        <h1>Post</h1>
        <div>
          { props.content }
        </div>
      </div>
    )
}

export default Post
