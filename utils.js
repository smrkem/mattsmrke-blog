const path = require("path")
const fs = require('fs')

module.exports = {
  getPosts: () => {
    console.log("\n\n\n+++++++++++++++++++++\n\n\n")
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
    console.log("\n\n\n+++++++++++++++++++++\n\n\n")
  }
}
