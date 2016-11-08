---
layout: post
title: "Modern HTTP Practices (Fuck the Envelope)"
date: 2016-11-08 00:00:00 +0000
categories: blog
image: "/uploads/blog/modern-http-practices.jpg"
thumbnail: "/uploads/blog/modern-http-practices-thumb.jpg"
tldr: "I made a pagination library for Laravel and Lumen that removes the envelope: <a href='https://github.com/danbovey/laravel-linkheader-paginator'>Laravel LinkHeader Paginator</a>"
---

I put forth this vote to the developer community yesterday, which seems much more important than any other vote going on this week!<!--more-->

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Developer friends! Do you prefer to use/build API&#39;s with an envelope? i.e. { data: [], status: &#39;&#39;, error: &#39;&#39; } Please RT 💌</p>&mdash; Dan Bovey (@danielbovey) <a href="https://twitter.com/danielbovey/status/795675648496992256">November 7, 2016</a></blockquote>

Don't worry, I knew what I was setting myself up for. The envelope is recommended in a [specification for creating JSON APIs](http://jsonapi.org/) which I was quickly linked to by a voter while writing this but there's also a percentage of others who actually believe in using HTTP properly. #shotsfired

I think my favourite web blog/tutorial of all time is Vinay Sahni's [Best Practices for Designing a Pragmatic RESTful API](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api). It's a truly non-biased guide to designing an API and it suggests not using the envelope you're all so clearly attached to!

Here's the important bits:

>Many APIs wrap their responses in envelopes like this:

    {
      "data" : {
        "id" : 123,
        "name" : "John"
      }
    }

>There are a couple of justifications for doing this - it makes it easy to include additional metadata or pagination information, some REST clients don't allow easy access to HTTP headers & [JSONP](http://en.wikipedia.org/wiki/JSONP) requests have no access to HTTP headers. However, with standards that are being rapidly adopted like [CORS](http://www.w3.org/TR/cors/) and the [Link header from RFC 5988](http://tools.ietf.org/html/rfc5988#page-6), enveloping is starting to become unnecessary.

>We can future proof the API by staying envelope free by default and enveloping only in exceptional cases.

Just remember when creating an API, HTTP is your envelope. When calling an endpoint such as `GET /users/{id}` you'd expect the returned resource to be a `user`, so don't pollute the resource with unnecessary extras. Expecting the client to be dumb, not being able to access headers or status codes, is like expecting the user to be on IE6 and therefore not using HTML5.

One top-level member often included is an `errors` object. In the [HTTP RFC](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4), most of the HTTP Error codes advocate that you do return a description of why the error occurred but it doesn't seem very logical to return an empty error object along with every successful response, or be such a pessimist!

If you take a bit of time out for a design process, assigning a little bit of semantics to the URI and HTTP methods adds a lot of simplicity to the overall architecture without requiring an envelope format to exchange data.

So if you haven't closed this page yet in disgust of my blasphemy against clear-cut specifications, then hello! Welcome open minded friend, to:

## LinkHeader pagination

>An API that uses the Link header can return a set of ready-made links so the API consumer doesn't have to construct links themselves. This is especially important when pagination is [cursor based](https://developers.facebook.com/docs/reference/api/pagination/). Here is an example of a Link header used properly, grabbed from [GitHub](http://developer.github.com/v3/#pagination)'s documentation:

    Link: <https://api.github.com/user/repos?page=3&per_page=100>; rel="next", <https://api.github.com/user/repos?page=50&per_page=100>; rel="last"

Currently, there seems to be a lot of implementations for [parsing Link headers](https://github.com/thlorenz/parse-link-header) but not for creating them. One of the most popular Javascript HTTP clients [superagent](https://github.com/visionmedia/superagent) supports Link headers and exposes a `res.links` object in responses. It's not a very well documented feature but if you make a request to an API that uses Link, `res.links.next` would give you the URI of the next page.

Now I could be biased, but I think Laravel and Lumen are becoming the most popular PHP frameworks. It has the easiest pagination system known to man but it creates JSON responses like this:

    {
      "total": 50,
      "per_page": 15,
      "current_page": 1,
      "last_page": 4,
      "next_page_url": "http://laravel.app?page=2",
      "prev_page_url": null,
      "from": 1,
      "to": 15,
      "data": [
        {
          // Result Object
        },
        {
          // Result Object
        }
      ]
    }

The only work I've found that seems to be ushering in modern HTTP practices is the [Dingo API](https://github.com/dingo/api) package. It wraps around a lot of Laravel functionality to make building an API simple.... buuuut they [closed the issue](https://github.com/dingo/api/issues/246#issuecomment-127840826) and gave some mediocre code example of how to add Link pagination.

So, I took it upon myself to build a Laravel paginator that removes the envelope and puts pagination info in the HTTP Link header! I call it the [Laravel LinkHeader Paginator](https://github.com/danbovey/laravel-linkheader-paginator). (so creative)

Create the pagination with the Eloquent/DB Builder and pass it to the `LengthAwarePaginator`.

    $items = User::where('active', 1)->paginate(20);

    $paginator = new LengthAwarePaginator($items);

    return $paginator->toResponse();

Which gives you a response like:

<pre><code class="hljs http">HTTP/1.1 200 OK
Content-Type: application/json
...
Link: &lt;http://api.local/users/?page=1&gt;; rel="current", &lt;http://api.local/users/?page=2&gt;; rel="last", &lt;http://api.local/users/?page=2&gt;; rel="next"

[
  {
    // Result Object
  },
  {
    // Result Object
  }
]
</code></pre>

So to close up:

- Don't use an envelope
- HTTP does a pretty good job if you make common sense endpoints and make full use of headers and status codes
- Go use [that thing I made](https://github.com/danbovey/laravel-linkheader-paginator) if you happen to have the exact set up as me - a JSON API in Laravel or Lumen
- Have a look at how you can [parse Link in Javascript](https://github.com/thlorenz/parse-link-header) generally
- Or use an [XHR client that supports it](https://github.com/visionmedia/superagent)
- Don't use an envelope