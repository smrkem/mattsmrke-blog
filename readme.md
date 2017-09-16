# My blog is a serverless react app  

I have a github account and am decently comfortable writing in markdown, so I'm going to use github as the backend to my site. Essentially, I'll be using GitHub instead of Wordpress.

GitHub also has an api. I haven't looked at it or what you can do yet so this may be a non-starter.

There's probably a better way use GitHub as my backend, but this is just a cool little proof-of-concept project.

***  

I'm a web developer who knows how to use git, has an AWS account and can deploy a live app. If this doesn't describe you, and you're interested in setting up this kind of a blog - send a link over to that person in your life who handles the computer stuff.

***

I'm going to start with a simple react app that uses fetch to grab a markdown file from one of my public git repos. If that works, I'm gonna set up a new mattsmrke-blog repo with that app in it and a 'posts' folder, cause from there I think this whole things is going to be pretty straightforward.  

- https://github.com/rexxars/react-markdown  

***

Yup, we're good. This repo contains an initial app that grabs some markdown using the github api.

Specifically I'm grabbing the file at:
- https://api.github.com/repos/smrkem/mattsmrke-blog/contents/posts/sample-post-1.md  

which is a simple markdown file.  Adding in the ReactMarkdown component and functionality was a breeze, and so far everything's working fine. This is all coming together easier than I'd hoped.

***  

Current Situation:
- need a way to either store or fetch the different posts and the relevant repo paths
- current embedded images, stored in github, must use the rawgithubuser path. This isn't the end of the world. The rawgithubuser url for the image looks like
```
https://raw.githubusercontent.com/smrkem/mattsmrke-blog/master/posts/images/logging-result
```  
Pretty predictable and not too bad.  

At this point it's occurring to me that I may not even need to use the github api if I can just fetch content from raw.githubusercontent, but I'll keep it as is for now. I may want to see if I can list directory contents or something using the API, if it'll save me from a storage / organizational solution for how to keep track of my posts.

Here's the commit:  
- https://github.com/smrkem/mattsmrke-blog/commit/2ef307c24e70cbf31e61e3d4a797909fcba10006  

***
