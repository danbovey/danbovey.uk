---
layout: post
title: "The State of Javascript"
date: 2016-05-24 00:00:00 +0000
categories: blog
image: "/uploads/blog/the-state-of-javascript.jpg"
thumbnail: "/uploads/blog/the-state-of-javascript-thumb.jpg"
---

I've spent the better half of a year hopping between Javascript frameworks and boilerplates trying to find the perfect balance of build time and development time to build a JS app. And I still can't decide what that is.
<!--more-->

## v0.0.1 Angular 2

I started with Angular 2 but found it quite hard to get into.

- Coming from a PHP background and more recently Laravel, the documentation was shockingly bad.
- It suggests using TypeScript which is quite a difficult jump for a person relatively new to JS development.
- Creating components feel really hacky because it doesn't allow you to seperate your concerns very well.
- It has a lot of abstractions, so it doesn't feel like *your* code.

Even when trying out boilerplates like [angular-seed](https://github.com/angular/angular2-seed) it was difficult to get started. (Maybe that's biased because the project was just new and I was mainly prototyping stuff, but let's call that v0.0.2)

![](http://i.imgur.com/EAZCqF8.gif)

I then looked into React. At first I was put off by JSX, because it looked like it would have the same problem as Angular. But it's actually really intuitive and there's not a lot of "wrapper" around your code - you can go right ahead and define a component after importing `React`.

So I started with the tutorial and it seemed so simple it looked like I wouldn't need a starter repo.

## v1.0 Vanilla React with Gulp

That obviously didn't work out because I hadn't discovered state containers like Flux or Redux at this point. There was no communication going on between the different things on the page! Did I keep this?

![](http://i.imgur.com/jW9dmih.gif)

## v2.0 [flux-react-router-example](https://github.com/gaearon/flux-react-router-example)

OK, so we have a nice event-driven app that uses Webpack, which means that code from components (modules) are hot reloaded without having to refresh the page. But did I mention it uses Webpack? Every starter repo thinks I want to bundle up all my styles into the JS. That's not very nice, I want to seperate my concerns. How do I get around this using one build process?

![](http://i.imgur.com/KanpAPE.gif)

There's got to be a fix for this...

## v3.0 Trying to mix [frontend-seed](https://github.com/pigoz/frontend-seed) + Webpack

Ah this repo is perfect! It has a gulp build system and I can shove Webpack on top to keep my nice quick JS build process. Turns out this isn't really possible, and if it was it would be like the Frankenstein's monster of build processes.

That was basically my first impressions of Webpack, so I didn't go back to it for quite a while.

![](http://i.imgur.com/i3IfafU.gif)

## v4.0 JSPM

Discovering [JSPM](http://jspm.io/) was a godsend for quite a few months during my mutual seperation with Webpack. It doesn't refresh modules, but it let me run gulp, refresh my browser with BrowserSync and it had a "fast enough" build process that wasn't too much of a loss.

![](http://i.imgur.com/1T7a0Bn.gif)

But as predicted, development was slow. I was waiting 5 seconds to see the changes in the browser. And as I'm fleshing out the communication between components, I find that Flux has some limitations and there's this new kid on the block called [react-redux](https://github.com/reactjs/react-redux) that says it can make all of my problems go away. I don't know whether those were it's intentions but I'm sold, any excuse to switch everything up all over again.

## v5.0 Help?

And that brings me to my current situation. Back to square one, at a very blank `<canvas>`. Sitrep:

- I miss Webpack's hot reloading.
- I have no idea which event system I want, I just want to make cool `Component`s that make up nice looking, interactive pages and have a bit of persistence between `Route`s.
- I need to keep styles seperate because there's a lot of them and it needs SCSS.
- As far as I know, nobody has made any head way in documenting how to do this.

Is this what it feels like to be on the cutting edge of web development? I'm not sure I want to be here.

![](http://i.imgur.com/upe6xt3.gif)

## EDIT - Update

With a little bit of help from [react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example) and a lot of help from the much simpler, [simple-redux-boilerplate](https://github.com/tsaiDavid/simple-redux-boilerplate) I was able to understand Redux reducers and get properly set up!

Another massive, massive help was watching [Dan Abramov talk at React Europe [30:40]](https://www.youtube.com/watch?v=xsSnOQynTHs) about why he built Redux, and demo Hot Loading with React.

I might start another blog post to explain everything I've done and possibly make a fork of the simple boilerplate, with a bit more functionality like routes, modals and SCSS.

![](http://i.imgur.com/fwp9rGi.gif)
