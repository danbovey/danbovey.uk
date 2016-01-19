---
layout: post
title: "Making the perfect header with position:sticky and Headroom.js"
date: 2016-01-19 22:00:00 +0000
categories: blog
image: "/uploads/blog/making-the-perfect-header.gif"
thumbnail: "/uploads/blog/making-the-perfect-header-thumb.gif"
---

Yes. You read that correctly, position:sticky! Just another blog post about HTML/CSS features that aren't available in a lot of modern browsers yet!<!--more-->

The good news is that we're going to rely heavily on a polyfill called [stickyfill](https://github.com/wilddeer/stickyfill), which does the stick-to-top effect with JS.

[Headroom.js](http://wicky.nillia.ms/headroom.js) is the other JS enhancement in the mix, which gives the user more vertical space by hiding the header when it's not needed, which is really helpful on mobile. This solves the problem many sites have where their header takes up a major proportion of your screen (or just makes you feel a little claustrophobic).

In my opinion, the combination of both makes a "pretty-standard-these-days" fixed navigation look quite sleek. I haven't seen this done before and a project I'm currently working on needed this solution, so here's a freebie.

## See for yourself

<p data-height="268" data-theme-id="12992" data-slug-hash="bEYwZQ" data-default-tab="result" data-user="danbovey" class='codepen'>See the Pen <a href='http://codepen.io/danbovey/pen/bEYwZQ/'>Making the perfect header with position:sticky and headroom.js</a> by Dan Bovey (<a href='http://codepen.io/danbovey'>@danbovey</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## Let's get sticky...

### The Scripts

If you're using jQuery:

<div class="highlighter-rouge">
    <pre class="highlight"><code class="hljs js">$(primaryNav).Stickyfill();</code></pre>
</div>

Or if, like me, you're kinda moving away from the "JQUERY ALL THE THINGS!" mindset.

<div class="highlighter-rouge">
    <pre class="highlight"><code class="hljs js">Stickyfill.add(primaryNav);</code></pre>
</div>

### The Styles

Set up a few variables for the project, define global styles and what the header looks like and then we'll get to the slightly interesting bit.

<div class="highlighter-rouge">
    <pre class="highlight"><code class="hljs css">.nav {
    position: -webkit-sticky;
    position: sticky;
    z-index: 999999999999999500; /* Some puzzling number that your front-end devs came up with + 500 for good measure */
    top: 0;
}</code></pre>
</div>

Stickyfill also recommend having a clearfix:

<div class="highlighter-rouge">
    <pre class="highlight"><code class="hljs css">.nav:before,
.nav:after {
    display: table;
    content: '';
}</code></pre>
</div>

## There's so much more room for activities!

### The Scripts

jQuery is looking [mighty pretty](http://www.commitstrip.com/en/2015/02/11/the-day-i-abandoned-jquery) in this example...

<div class="highlighter-rouge">
    <pre class="highlight"><code class="hljs js">$("#header").headroom();</code></pre>
</div>

Vanilla JS:

<div class="highlighter-rouge">
    <pre class="highlight"><code class="hljs js">var myElement = document.querySelector("header");
var headroom  = new Headroom(primaryNav, {
    offset: 250,
    classes: {
            initial: 'headroom--top',
            pinned: 'slideDown',
            unpinned: 'slideUp'
    }
});
headroom.init();</code></pre>
</div>

### The Styles

Headroom just adds the classes you tell it to (in this case slideDown and slideUp) so we can style the behaviour of the nav in different states with CSS. Headroom.js works best on mobile because that's where the problem lies, so a media query for max-height would be best. Therefore, if a user has an appropriate amount of vertical screen space we won't hide the header.

<div class="highlighter-rouge">
    <pre class="highlight"><code class="hljs css">.nav {
    transition: transform 0.4s ease;
}
@media(max-height: 500px) {
    .nav.slideUp {
        transform: translateY(-100%);
    }
}</code></pre>
</div>

## Add a cool logo thing

It's easy to forget the site if you're visiting a scroll-heavy site on mobile, so let's drag in a logo if the nav is "stuck". By adding <code>.headroom--top</code> to the initial option above, we're relying on Headroom to remove that class when it's hidden or static, so the opposite of that is when we want our brand to slide in:

<div class="highlighter-rouge">
    <pre class="highlight"><code class="hljs css">&:not(.headroom--top) { /* Our initial class when initializing Headroom above */
	.brand {
		display: inline-block;
		transform: translateX(0);
	}
	.nav-left {
		transform: translateX(120px);
	}
}</code></pre>
</div>

## The Result

<p data-height="500" data-theme-id="12992" data-slug-hash="bEYwZQ" data-default-tab="result" data-user="danbovey" class='codepen'>See the Pen <a href='http://codepen.io/danbovey/pen/bEYwZQ/'>Making the perfect header with position:sticky and headroom.js</a> by Dan Bovey (<a href='http://codepen.io/danbovey'>@danbovey</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

>Something to note is that I haven't done anything when you reach mobile and the nav starts stacking. Going down the route of the hamburger menu wouldn't be so perfect as it's so controversial. In the example you could stack the links but IRL there's going to be more than 5 navigation items.

Go visit the full [project on CodePen](http://codepen.io/danbovey/pen/bEYwZQ) and give it some love/make a hamburger fork/make it even more perfect!
