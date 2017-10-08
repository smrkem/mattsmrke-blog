import React from 'react'
import { Route, NavLink } from "react-router-dom";
import Posts from '../Posts/Posts'
import SinglePost from '../SinglePost/SinglePost'

class PostsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      slug: null,
      posts: [],
      singlePost: null
    }
  }

  componentDidMount() {
    const params = this.props.match.params
    console.log('DidMount params:', params)
    this.getPosts()
      .then(() => {
        if ("slug" in params) {
          this.getPostWithSlug(params.slug)
        }
      })
  }

  // componentWillReceiveProps(nextProps) {
  //   const match = nextProps.match
  //   console.log("WillReceive:", match, match.params)
  // }

  render() {
    if (this.state.singlePost) {
      return <SinglePost post={this.state.singlePost} />
    }
    else {
      return <Posts posts={this.state.posts} />
    }
  }

  getPosts() {
    return fetch('/assets/posts/posts.json')
      .then(res => {
        this.checkResponse(res)
        return res.json()
      })
      .then(posts => {
        this.setState({posts})
        return posts
      })
  }

  getPostWithSlug(slug) {
    const index = this.state.posts.findIndex(match => match.slug == slug)
    if (index == -1) {
      this.setState({
        singlePost: null
      })
    }
    else {
      const postData = this.state.posts[index]
      const url = `/assets/posts/${postData.published}/${postData.slug}.md`
      fetch(url)
        .then(res => {
          this.checkResponse(res)
          return res.text()
        })
        .then(post => {
          postData.content = post
          this.setState({
            singlePost: postData
          })
        })
    }

  }

  checkResponse(response) {
    if (!response.ok) {
      console.log("CHECKING RESPONSE", response)
      console.log("Error...")
      throw Error("Api fetch failed :(")
    }
  }
}

export default PostsContainer
