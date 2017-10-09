import React from 'react'
import { render } from 'react-dom'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter, BrowserRouter } from 'react-router-dom'
import Routes from './components/Routes/Routes'
import Template from './Template'
import { paths } from './SiteConfig'
import 'normalize.css'
import './base.css'


const App = ({locals}) => {
  const singleContents = 'staticSingleContent' in locals ? locals.staticSingleContent : null
  return (
    <StaticRouter location={locals.path} context={{}}>
      <Routes
        staticPosts={locals.staticPosts}
        staticSingleContents={singleContents}
      />
    </StaticRouter>
  )
}

module.exports = locals => {
  if (locals.path in locals.staticPostContents) {
    locals['staticSingleContent'] = locals.staticPostContents[locals.path]
  }

  const assets = Object.keys(locals.webpackStats.compilation.assets)
  const templateProps = {
    css: assets.filter(value => value.match(/\.css$/)),
    js: assets.filter(value => value.match(/\.js$/)),
    body: renderToString(<App locals={locals} />),
    title: paths[locals.path].title,
    description: paths[locals.path].description
  }
  return `<!DOCTYPE html>${renderToStaticMarkup(<Template {...templateProps} />)}`
}

if (typeof document != 'undefined') {
  render(<BrowserRouter><Routes /></BrowserRouter>, document.getElementById('app'))
}
