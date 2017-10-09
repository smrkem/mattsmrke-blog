import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './components/Routes/Routes'

import 'normalize.css'
import './base.css'

const App = () => (
  <BrowserRouter><Routes /></BrowserRouter>
)

render(<App />, document.getElementById('app'))
