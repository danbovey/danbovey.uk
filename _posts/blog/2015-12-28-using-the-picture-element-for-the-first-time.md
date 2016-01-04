---
layout: post
title: "Using the <code>&lt;picture&gt;</code> element for the first time"
subtitle: "(With the help of Pokémon)"
date: 2015-12-04 12:00:00 +0000
categories: blog
image: "/uploads/blog/using-the-picture-element-for-the-first-time.jpg"
thumbnail: "/uploads/blog/using-the-picture-element-for-the-first-time-thumb.jpg"
---

Don't you think it's time we used the <code>&lt;picture&gt;</code> element as an enchancement to responsive sites? I did too, so this week I used it for the first time.<!--more-->

Here's a really really boiled down version of how to get started using it. There are much better tutorials out there but this could be useful if, like me, you spent one way too long figuring out the basics to this.

## The <code>&lt;picture&gt;</code> element

There's not much too it, as it's just a wrapper for the <code>&lt;source&gt;</code> element exactly like <code>&lt;video&gt;</code>.

## The <code>&lt;source&gt;</code> element

When implementing this on our new production site, the first thing that threw me and my team off was the <code>&lt;source&gt;</code> elements. These are the functional parts of picture which define the different image resolutions or aspect ratios that may be more appropriate at different pixel densities or screen sizes.

### srcset

**srcset, not src!** because <code>&lt;source&gt;</code> supports a comma-separated list of images for different pixel densities:

<div class="highlighter-rouge">
    <pre class="highlight"><code class="hljs html">&lt;source srcset="pikachu-medium.jpg, pikachu-large.jpg 2x"&gt;</code></pre>
</div>

as well as the standard:

<div class="highlighter-rouge">
    <pre class="highlight"><code class="hljs html">&lt;source srcset="pikachu.jpg"&gt;</code></pre>
</div>

### media

<code>&lt;source&gt;</code> accepts any valid CSS media query like:

<div class="highlighter-rouge">
    <pre class="highlight"><code class="hljs html">&lt;source media="(min-width: 800px)" srcset="pikachu-large.jpg"&gt;</code></pre>
</div>

Also worth noting is that the position of the source elements with their media attributes matter! If the browser comes across a <code>&lt;source&gt;</code> that matches it's current parameters, it will show that image and not bother checking the other sources below it.

## We gotta have a Plan B

The fallback in case the browser doesn't know what to do with the <code>&lt;picture&gt;</code> element is <code>&lt;img&gt;</code>. The fallback is required because it's the place to write the alternative text for the picture and it's the one that shows up if none of the media queries match in any of the sources.

## Put it together

    <picture>
    	<source media="(min-width: 800px)" srcset="pikachu.jpg">
    	<img src="riachu.jpg" alt="This picture loads on non-supporting browsers">
    </picture>

Resize the page to see the change!

<div class="resize">
	<iframe height='268' scrolling='no' src='//codepen.io/danbovey/embed/PZbmOe/?height=268&theme-id=12992&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;' class="codepen inline">
		See the Pen <a href='http://codepen.io/danbovey/pen/PZbmOe/'>PZbmOe</a> by Dan Bovey (<a href='http://codepen.io/danbovey'>@danbovey</a>) on <a href='http://codepen.io'>CodePen</a>.
	</iframe>
</div>

## But caniuse it?

Yes. The idea behind having the <code>&lt;img&gt;</code> tag is that all browsers should theotically support the <code>&lt;picture&gt;</code> tag.

[![caniuse.com](http://i.imgur.com/56hO93u.png)](http://caniuse.com/#feat=picture)