import React from 'react'
import { NavLink } from "react-router-dom";

class Posts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('/assets/posts/posts.json')
      .then(res => {
        this.checkResponse(res)
        return res.json()
      })
      .then(posts => {
        this.setState({posts})
      })
  }

  render() {
    console.log("Props:", this.props)
    console.log("State:", this.state)
    return(
      <div className="posts">
        <h1>My Posts</h1>
        <div>{
          this.state.posts.map((post, i) => {
            return (
              <div key={i}>
                <NavLink to={`/posts/${post.slug}`} >{post.title}</NavLink>
              </div>
            )
          })
        }</div>
      </div>
    )
  }

  checkResponse(response) {
    if (!response.ok) {
      console.log("CHECKING RESPONSE", response)
      console.log("Error...")
      throw Error("Api fetch failed :(")
    }
  }
}

export default Posts
