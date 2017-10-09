const path = require("path")
const fs = require('fs')

module.exports = {
  getPosts: () => {
    console.log("\n+++++++++++++++++++++")
    console.log("In getPaths")
    const dir = './src/'
    fs.readdirSync(dir).forEach(file => {
      if (fs.statSync(dir + file).isDirectory()) {
        console.log(`d: ${file}`)
      }
      else {
        console.log(`f: ${file}`)
      }
    })
    console.log("+++++++++++++++++++++\n")
  },

  getPostContents: (post) => {
    const path = `./src/assets/posts/${post.published}/${post.slug}.md`
    return fs.readFileSync(path, "utf8")
  }
}
