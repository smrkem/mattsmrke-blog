import React from 'react'
import { Route, IndexRoute } from 'react-router-dom'
import Menu from "../Menu/Menu"
import Home from '../Home/Home'
import PostsContainer from '../PostsContainer/PostsContainer'
import CategorizedPosts from '../CategorizedPosts/CategorizedPosts'


const Page1 = () => (
  <h1>Page 1 content</h1>
)

const Page2 = () => (
  <h1>Page 2 content</h1>
)

const Routes = (props) => (
  <div id="app-root">
    <Menu />
    <Route path="/" exact component={Home} />
    <Route path={"/posts/:slug"} render={(routeProps) => {
        const staticPosts = "staticPosts" in props ? props.staticPosts : null
        const staticSingleContents = ("staticSingleContents" in props && props.staticSingleContents) ? props.staticSingleContents : null
        return <PostsContainer
          staticSingleContents={staticSingleContents}
          staticPosts={staticPosts}
          {...routeProps}
        />
      }}
    />
    <Route path={"/posts"} exact render={(routeProps) => {
        const staticPosts = "staticPosts" in props ? props.staticPosts : null
        return <PostsContainer
          staticPosts={staticPosts}
          {...routeProps}
        />
      }}
    />
  <Route path={"/machine-learning-posts"} render={(routeProps) => {
        return <CategorizedPosts
          cat={"machine-learning"}
          {...routeProps}
        />
      }}
    />
  </div>
)

export default Routes
