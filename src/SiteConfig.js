const siteTitle = "Demo Static React Site"
import posts from './assets/posts/posts.json'

let temp = {
  '/': {
    title: siteTitle,
    description: "Site meta description",
  },
  '/page1': {
    title: "Page1 | " + siteTitle,
    description: "Page 1 meta description"
  },
  '/page2': {
    title: "Page2 | " + siteTitle,
    description: "Page 2 meta description"
  },
  '/posts': {
    title: "My Posts | " + siteTitle,
    description: "A listing of my posts"
  }
}
posts.map(post => {
  temp[`/posts/${post.slug}`] = {
    title: `${post.title} | ${siteTitle}`,
    description: "A single post n my blog"
  }
})

export const paths = temp
