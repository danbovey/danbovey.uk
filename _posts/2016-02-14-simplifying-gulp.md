---
title: "Simplifying Gulp"
date: 2016-03-03 12:00:00 +0000
---

Gulp is the greatest thing to happen to building websites in a long time. But lately, it feels like all I've been doing as a web developer is building the build processes of my websites. So, obviously, I chose to build a thing which builds the build processes which builds a website.

I've spent so long building unique gulpfiles for each of my projects. And now, working with larger projects with more complex build processes I've spent even longer learning Gulp as a tool. I don't know about you, but each of my early gulpfiles were about [100-150 lines long](https://gist.github.com/danbovey/01ec06195b9202c51e4a) and had loads of dependencies I needed to research. And this wasn't what I wanted to be working on, it was just the process to build the thing I wanted to be working on.

The Solution: [GulpKit](https://github.com/GulpKit/GulpKit). An NPM package which aims to match the simplicity of CodeKit with the power of NPM and Gulp packages. In a matter of minutes, you can get setup with a highly configurable gulpfile that compiles your front-end site(s) and watches for changes.

```js
var GulpKit = require('GulpKit');

GulpKit(function(kit) {
    kit.scss({
        source: './resources/scss/app.scss',
        output: './css/style.css'
    });
});
```

Writing gulpfiles with GulpKit feels so natural and intuitive, in just 7 lines I have defined that I want to compile sass into my CSS directory. And for a simple project, I'm done.

And the future of GulpKit could be amazing. If you want to manage the build process of your website with a GUI, a wrapper around Gulp could help. if you wanted to make an event system for when tasks finish, a wrapper around Gulp could help. It can also be extended, so a task that doesn't exist in the package yet can be easily defined with a new gulp stream and then used over and over again for different files and locations you might have in your project.

For now, I just need to focus on a few basic tasks like JS, browserify and maybe CoffeeScript or Babel.

Just the continuing simplification of writing gulpfiles is enough to motivate me to continue developing GulpKit and use it every day. It was a breakthrough moment when, for the first time,  I was opening up a new project and wrote and compiled the sass with GulpKit.

I'm sure lots of people who are comfortable with the command line or gulp streams will think this is stupid but the truth is, it's a waste of time spending time on something that's just going to get us to the point where we can ship a website.

The main reason I developed GulpKit was seeing my friend Jake agonize over [boilerplate gulpfiles](https://github.com/JakeCobley/Kettle), which although are [beautifully functional gulp streams](https://github.com/GulpKit/GulpKit/blob/master/tasks/scss.js), they had to be saved as a Gist and copied over to projects and might require loads of configuration if you have a different process.

For others, it makes a lot of sense to hide that stuff away and get on with what's really exciting and fun.

[GitHub Repo](https://github.com/GulpKit/GulpKit)

[NPM](https://www.npmjs.com/package/gulpkit)

[Website](https://gulpkit.github.io/GulpKit)