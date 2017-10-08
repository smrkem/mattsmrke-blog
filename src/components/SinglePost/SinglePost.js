import React from 'react'
import ReactMarkdown from 'react-markdown'

const SinglePost = ({post}) => {
  console.log("SinglePost post: ", post)
  return (
    <div className="single-post">
      <h1>{ post.title }</h1>
      <div><small>{ post.published }</small></div>
      <div><ReactMarkdown source={post.content} /></div>
    </div>
  )
}

export default SinglePost
