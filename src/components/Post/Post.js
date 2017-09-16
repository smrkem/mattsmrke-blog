import React from 'react'
import ReactMarkdown from 'react-markdown'
import './Post.css'

const Post = (props) => {
    return (
      <div className="post">
        <h1>Post</h1>
        <div>
          <ReactMarkdown source={props.content} />
        </div>
      </div>
    )
}

export default Post
