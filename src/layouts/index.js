import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './reset.scss'
import './index.scss'
import './Header.scss'

const Header = () => (
  <header>
    <div className="container">
      <h1 style={{ margin: 0 }}>
        <Link className="site-brand" to="/" >
          matt smrke{`'`}s<br />blog
        </Link>
      </h1>
      <nav>
        <ul>
          <li><Link to='/posts' activeClassName='active'>Posts</Link></li>
          <li><Link to='/about' activeClassName='active'>About</Link></li>
          <li><Link to='/contact' activeClassName='active'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Matt Smrke Blog"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className="container">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
