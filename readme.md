# React-webpack boilerplate  

This is my starting point for new react projects.

I'm still new to webpack, and tired of pasting in config I didn't fully understand. This is built from the ground up. Suggestions welcome.  

### Usage  

Start a new project by cloning the repo and deleting the `.git` folder. Then install the packages:  
- `$ npm install`  
<br>
  
Build the project and start the dev server with:  
- `$ npm start`  
<br>
  
To make a production build run:  
- `$ npm run build`  

This will create a 'dist' folder (.gitignored) with the full app inside. The js and css files are hash-versioned with matching html tags injected in the index.html. The folder is ready to be copied directly to s3 or any other hosting bucket.


### Notes  
- webpack must be installed globally (`$ npm i webpack -g`)  
