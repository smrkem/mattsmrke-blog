import React from 'react'
import './App.css'
import Post from '../Post/Post'

const url = "https://api.github.com/repos/smrkem/mattsmrke-blog/contents/posts/sample-post-1.md"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: "Loading content from github..."
    }
  }

  componentDidMount() {
    this.getMarkdown(url)
  }

  getMarkdown(url) {
    fetch(url, {mode: 'cors'})
      .then(response => response.json())
      .then((markdown) => {
        this.setState({
          post: atob(markdown.content)
        })
      })
  }

  render() {
    return (
      <div className="container">
        <h1>Using Fetch to grab a markdown file.</h1>
        
        <Post content={this.state.post} />
      </div>
    )
  }
}


export default App
