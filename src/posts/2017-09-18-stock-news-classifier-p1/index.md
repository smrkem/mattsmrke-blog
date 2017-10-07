---
path: '/stocknews-classifier-part-1'
title: 'Building a data gathering app using React, AWS API Gateway, S3 and Lambda'
published: '2017-09-20'
---

# Local Setup (npm and webpack)  

We'll be using npm and webpack to build the project. I'm not going to go into any depth on these topics - there's plenty of documentation. I've set up a boilerplate webpack project for react that has things configured the way I like.  

<br>
https://github.com/smrkem/react-webpack-boilerplate  
<br>
<br>

Just clone or download the repo and npm install the dependencies. The boilerplate app can be built and started with:  
- `$ npm start`  

and a production build (for live deployments) can be created with:  
- `$ npm run build`  

The generated 'dist' folder can be directly uploaded to an s3 bucket or anywhere else to host the app.  


# Initial React app and skeleton  

Starting with the initial skeleton, I can run `npm start` and see the boilerplate code running in the browser.  

I'll start simple and add a header to the app. Here's the commit:  
- https://github.com/smrkem/stockdata2/commit/d5acf6670aea8d12c5346d7641fcf6ce980e8d96  

Pretty simple - in fact it's mostly some css for the new header. But it shows how simple it is to add new components and how the js and css files get organized.

An `npm start` later and everything is running fine (with some minor styling issues that I'll fix in the next commit...). At this point I want to think a little bit about what the app should be and how it will work.

### Basic app skeleton  

The app needs to take a user input and pass that to the API, which will respond with the results for that query. The app then needs to display the results, and offer controls for labelling each post. Lastly, the app needs to make a final POST to the API, sending it all the labelled results as data.  

A component for the user input, and another one to display the results and allow the user to label them seems natural. I'm thinking it will also be a good idea to wrap both of those in a parent component whose main responsibility will be communicating with the API and passing the results down as props.  I'm thinking something like the following:  

```
<StockNews>
  <CompanyNameInput />
  <Results >
</StockNews>
```  

I'll start with these initially, creating them as 'stateless' components. I'll end up going back and changing them when needed, but I think it's best to start simple and only add complexity when it's required.  

Here's the commit that creates the skeleton for the above components (along with some styling). The CompanyNameInput is built out somewhat, but Results is just placeholder.  
<br>
- https://github.com/smrkem/stockdata2/commit/678be7244cd0aa8d8e4bcc05e9347d5ec5bc645f  

<br>
An `npm start` and everything is running smooth. It doesn't even look half bad...

<br>
I'll be building this app from the outside-in. That is I'll be adding functionality and features along the way - building the app out along the way. With the CompanyNameInput component in place, it's time to take the user's query and send it to the API.

***


# Making the initial query  

The CompanyNameInput component is pretty straightforward.  
```
import React from 'react'
import './CompanyNameInput.css'

const CompanyNameInput = () => (
  <div id="company-name-input">
    <p>Enter the company name to search for:</p>
    <p>
      <input type="text"></input>
      <button>GO</button>
    </p>
  </div>
)
export default CompanyNameInput
```  

We want the user to input some text and then click "GO" (or hit enter) and then we do something useful with the current value.

First, let's see if simply using a form will get us the 'enter' key for free.  
```
@@ -4,10 +4,15 @@ import './CompanyNameInput.css'
  const CompanyNameInput = () => (
    <div id="company-name-input">
      <p>Enter the company name to search for:</p>
 -    <p>
 -      <input type="text"></input>
 -      <button>GO</button>
 -    </p>
 +    <form onSubmit={(e) => {
 +        e.preventDefault()
 +        console.log('submitted')
 +      }}>
 +      <p>
 +        <input type="text"></input>
 +        <button>GO</button>
 +      </p>
 +    </form>
    </div>
  )
  export default CompanyNameInput
```  
yup :)

On every user submit, we want to do something with the input's value - so we need to be able to access that element. React seems to have 2 ways of accomplishing that:  
- keeping an internal state and using that state on submit  
- adding a ref to the input and accessing the element on submit  

I'm going to try the ref method and see where that gets me. Either way, it'll mean upgrading the CompanyNameInput to a proper React Component.  

Here's the commit:  
- https://github.com/smrkem/stockdata2/commit/fe3e58e0a8599c3ba90dbc3e11305633f428fc74  

Turns out I ended up not needing to use state or refs after all, thanks again to sticking things in a form. I can probably keep CompanyNameInput as a stateless component, but I'll refactor it later when I know more.  :fingers_crossed:  

### Passing things to the StockNews component  

It's time to deal with the  
```
// Do something ...  
```

What we want to do is send that query to the API, and listen for results.  The StockNews component's job is to communicate with the API and pass results down. It'll definitely need it's own state, along with a method for changing it when the user submits a query.

Here's the commit.  
- https://github.com/smrkem/stockdata2/commit/997c345cb99c2fcdd5841d79e10d4526cdbd335f  

There's still an error though. I'm not 100% yet on where I need to juggle the context to properly use the `this` keyword. Starting with this, i get the foolowing in the console:  
```
Doing something with: fdsa
changing query with: fdsa
Uncaught TypeError: this.setState is not a function
```  
so it's pretty clear that `this` needs to refer to the StockNews component and it isn't.  
```
<div className="container" id="stocknews-container">
-        <CompanyNameInput setQuery={this.onChangeQuery} />
+        <CompanyNameInput setQuery={(q) => this.onChangeQuery(q)} />
  <Results />
</div>
```
gets us there.

So the StockNews component knows the current state of the 'query' - but it isn't currently doing anything with that.  

### Passing things to Results  
We can pass the query to the Results component and say, customize the header text, but lets be a little more dynamic. The StockNews component should also know the status of each query, and pass that as well. As always, going to start with a very naive implementation and take it from there.

Here's the commit:  
- https://github.com/smrkem/stockdata2/commit/7f1f518837a09112f046ce1270889cfc00532aae  

Excellent. We're successfully passing the query along with the status of the api call to the Results component, and responding appropriately.

We can do one more thing before starting on the API itself, and that's handle the situation when the API is down.  

### Calling the API  

I'll be using the javascript 'Fetch' api to make the Http requests to our custom API. Fetch is a javascript api that most modern browsers can use. It makes HTTP requests using a simple syntax and returns a promise with a 'response' type object which can be inspected and the data passed on.  

When the API is down, there won't be any response object to check, but we can catch these errors too and set a new state flag to pass to the Results component.

*Note*: *Since we want to call our API from any domain - in particular at this point from 'localhost' - we need to pass a config object when calling the Fetch API with 'mode' set to 'cors' (Cross Origin Resource Sharing)*  

With `apiUrl` set to something obviously invalid, the fetch call errors and the user is shown a (helpful?) error message.

Here is the commit to get there:  
- https://github.com/smrkem/stockdata2/commit/c0d025e21a39a02e23cef45cbf1d4f4ed7fbb45d  


I'll leave the code for a successful api call at some useful debugging for now. In particular, I want to make sure that the `checkRespone` function does what it should and errors in a decent way when necessary.

To get that api call working means stepping away from the react app and starting the 'serverless' part of this project!!

### Tidying Up  
One little detail to clean up. The CompanyNameInput compenent is doing it's job well, and triggers a new query with every submit. This is probably all we'll ever need it to do.  

By redefining everythings as 'const' and passing the callback function to the onSumbit handler, we can revert it back to a stateless component.

Here's the last commit for this section.  
- https://github.com/smrkem/stockdata2/commit/08d7666a9f48bdb374bc9f9bc8c777540fc7a6ca  
