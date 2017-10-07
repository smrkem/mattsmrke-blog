import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './components/Routes/Routes'

import 'normalize.css'
import './base.css'

const posts = [
  {
    slug: 'stocknews-classifier-part-1',
    title: 'Building a data gathering app using React, AWS API Gateway, S3 and Lambda - Introduction and Setup',
    published: '2017-09-20'
  },
  {
    slug: 'stocknews-classifier-part-2',
    title: 'Building a data gathering app using React, AWS API Gateway, S3 and Lambda: Building the API',
    published: '2017-09-21'
  },
  {
    slug: 'stocknews-classifier-part-3',
    title: 'Building a data gathering app using React, AWS API Gateway, S3 and Lambda: Displaying the Results',
    published: '2017-09-22'
  }
]

const App = () => (
  <BrowserRouter><Routes posts={posts} /></BrowserRouter>
)

render(<App />, document.getElementById('app'))
