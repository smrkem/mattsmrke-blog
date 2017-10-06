import React from 'react'
import { Route, IndexRoute } from 'react-router-dom'
import Menu from "../Menu/Menu";
import Home from '../Home/Home'


const Page1 = () => (
  <h1>Page 1 content</h1>
)

const Page2 = () => (
  <h1>Page 2 content</h1>
)

const Routes = () => (
  <div>
    <Menu />
    <Route path="/" exact component={Home} />
    <Route path={"/page1"} component={Page1} />
    <Route path={"/page2"} component={Page2} />
  </div>
)

export default Routes
