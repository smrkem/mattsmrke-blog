import React from 'react'
import { NavLink } from 'react-router-dom'

class CategorizedPosts extends React.Component {
  constructor(props) {
    super(props)
    this.categories = {
      'machine-learning': 'Machine Learning Adventures',
      'statistics': 'Statistics 101',
      'random': 'Random Rants'
    }
    this.state = {
      isLoading: false,
      hasErrored: false,
      posts: []
    }
  }

  fetchData() {
    this.setState({ isLoading: true })
    fetch('/assets/posts/posts.json')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        this.setState({ isLoading: false })
        return response
      })
      .then((response) => response.json())
      .then((posts) => {
        this.setPosts(posts)
      })
      .catch(() => this.setState({ hasErrored: true}))
  }

  setPosts(allPosts) {
    console.log('all posts:', allPosts)
    console.log(this.props.cat)
    const posts = allPosts.filter( post => post.category == this.props.cat)
    this.setState({posts})
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="system-message">
          Something bad happened...
        </div>
      )
    }
    if (this.state.isLoading) {
      return (
        <div className="system-message">
          Loading...
        </div>
      )
    }
    console.log('posts', this.state.posts)


    return (
      <div className="categorized-posts">
        <h1>[{ this.categories[this.props.cat] }]</h1>
        {
          this.state.posts.map((post, i) => (
            <div key={i}>
              <NavLink to={`/posts/${post.slug}`} >{post.title}</NavLink>
            </div>
          ))
        }
      </div>
    )
  }
}

export default CategorizedPosts
