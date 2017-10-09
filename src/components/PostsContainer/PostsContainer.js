import React from 'react'
import { Route, NavLink } from "react-router-dom";
import Posts from '../Posts/Posts'
import SinglePost from '../SinglePost/SinglePost'

class PostsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      singlePost: null,
      static: false
    }
    if (props.staticPosts) {
      this.state.static = true
      this.state.posts = props.staticPosts
    }
    if (props.staticSingleContents) {
      const postIndex = props.staticPosts.findIndex(match => props.match.params.slug == match.slug)
      const postData = props.staticPosts[postIndex]
      postData.content = props.staticSingleContents
      this.state.singlePost = postData
    }
  }

  componentDidMount() {
    if (this.state.static) {
      console.log("\n\nSTATIC - returning")
      return
    }

    console.log("\n\nNon-STATIC??\n\n")

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
    console.log("getting posts...");
    return fetch('/assets/posts/posts.json')
      .then(res => {
        console.log('before checking response...')
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
      throw Error("Api fetch failed :(")
    }
  }
}

export default PostsContainer
