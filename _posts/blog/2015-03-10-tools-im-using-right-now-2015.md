---
layout: post
title: "Tools I'm Using Right Now 2015"
date: 2015-03-10 18:00:00 +0000
categories: blog
image: "/uploads/blog/tools-im-using-right-now-2015.jpg"
thumbnail: "/uploads/blog/tools-im-using-right-now-2015-thumb.jpg"
---

Here's some of the software and tools that I'm using right now to manage, develop and test my projects.<!--more-->

## Gulp

![Gulp](https://danbovey.uk/wp-content/uploads/2015/03/gulp.png)

[Gulp](http://gulpjs.com) is now the center of my development workflow. The fact that it's built right into Laravel sort of pushed me into using it 100% of the time. Gulp is a build system which allows you to automate tasks like combining SCSS and JS, minifying them and moving them into production ready files. Previously, I used CodeKit to do this on my Mac, but just the advantage of Gulp being able to run on any environment was enough reason because if you have colleagues on Windows, you can't share the configurations for your workflow.

Also, on Laravel, this is the length of the "gulpfile" you need to compile SCSS into the public css folder and it'll watch the file for any changes.

<pre><code class="js">elixir(function(mix) {
	mix.sass("app.scss");
});</code></pre>

When I discovered how easy it is to concatenate javascript into one minified production file, it helped tremendously when I was working with the different modules that are included with [Tabbed.io](https://danbovey.uk/portfolio/tabbed-io).

## Bourbon

![Bourbon](http://i.imgur.com/UQz5kIg.jpg)

The harder decisions about workflows always come down to which CSS framework to use, or whether to use one at all. Recently, I've been using [Bourbon](http://bourbon.io) It's like Bootstrap or any other CSS framework but its built from scratch with Sass, so it plays nicely into your project setup if you're already working with SCSS and it doesn't make you bend to a frameworks design pattern and system of doing things.

Bourbon is lightweight because they've split up essential things like a grid system into Bourbon Neat and typography and element styles into a project called Bitters so you can pick and choose what you need. With Bootstrap, you don't really get a choice outside of which Javascript plugins you want. Talking about picking and choosing, their site also includes a project called Refills which has copy/pastable code snippets for useful components or layouts like pagination markup and styles or accordion tabs with the working javascript.

## InstantClick

![InstantClick Speed Test](http://i.imgur.com/gWkW0Li.jpg)

Not really a tool, but [InstantClick](http://instantclick.io) is worth having in this list as it's a Javascript library that speeds up your website by allowing the client to preload the link they are hovering over. I'm using it on this site and it usually saving up to 500ms of load time could effectively make navigating between pages instantaneous as long as your page speeds are good, which brings me on to...

## Pingdom Tools

![Pingdom Speed Test (1.13s Load Time)](http://i.imgur.com/iZYIABV.jpg)

Pingdom, the website monitoring site, has some useful tools as [http://tools.pingdom.com/fpt/](tools.pingdom.com) which can test the performance of your site. My goal is to get that load time way down below 1 second!

## Nibbler

![Nibbler Report](http://i.imgur.com/nqxuwNO.jpg)

Another brilliant site tester is [Nibbler](http://nibbler.silktide.com). Give it a URL and it will print out a report on SEO, accessibility, responsiveness and code quality. I don't know what it's based on but I got a 7.6 in code quality and beat all of my web friends in that category, so that's nice.

## Trello

![Trello](http://i.imgur.com/SBbN0N7.png)

[Trello](http://trello.com) is a brilliant organisation app which can be used as a project management tool if you're working in a team or a simple to-do list if you're working on your own. Has brilliant integration with many other things like Slack.

## Slack

![Slack app](http://i.imgur.com/qQkvze6.jpg)

[Slack](http://slack.com) is a chat application which is killing off the need for email in thousands of tech companies everywhere. It integrates with loads of other apps like Dropbox, GitHub, Trello and Twitter and you can even add your own with chat bots and incoming &amp; outgoing webhooks. If you're in a team and you work on the web, switch over to this now.

Shout out to [Panda app](https://usepanda.com/app) for being my new go-to place to read news about the web and get inspiration from Dribbble and other design news sites.