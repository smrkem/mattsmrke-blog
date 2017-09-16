import React from 'react'
import './App.css'
import Post from '../Post/Post'

const url = "https://api.github.com/repos/smrkem/react-webpack-boilerplate/contents/readme.md"

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
        console.log(atob(markdown.content))
        this.setState({
          post: atob(markdown.content)
        })
      })
  }

  render() {
    return (
      <div className="container">
        <h1>Using Fetch to grab a markdown file.</h1>
        <img width="30%"  src="https://raw.githubusercontent.com/smrkem/stockdata2/master/docs/images/lambda-created-1.png" />
        <Post content={this.state.post} />
      </div>
    )
  }
}


export default App
