import React from 'react'
import Link from 'gatsby-link'

const socialLinks = [
  {
    'name': 'github',
    'url': 'https://github.com/smrkem'
  },
  {
    'name': 'linkedIn',
    'url': 'http://linkedin.com'
  }
]

const Contact = () => (
  <div>
    <h1>Drop me a message:</h1>
    <p>
      Conatact me at <a href="mailto:smrkem@gmail.com" target="_blank" rel="nofollow">smrkem@gmail.com</a> or connect with me on:
      <ul>
        {socialLinks.map((link) => (
          <li><a href={link.url} target="_blank" rel="nofollow" >{link.name}</a></li>
        ))}
      </ul>
    </p>
  </div>
)

export default Contact
