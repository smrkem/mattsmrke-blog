import React from 'react'

const SinglePost = ({post}) => {
  console.log("SinglePost post: ", post)
  return (
    <div className="single-post">
      <h1>{ post.title }</h1>
    </div>
  )
}

export default SinglePost
