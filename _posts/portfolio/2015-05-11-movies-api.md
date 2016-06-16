---
layout: project
title:  "Movies API"
date:   2015-05-11 10:00:00 +0000
categories: portfolio
image: "/uploads/portfolio/movies-api.jpg"
thumbnail: "/uploads/portfolio/movies-api-thumb.jpg"

skills: "Javascript / jQuery / Design"
type: "Uni Assignment"
completed: "11 May 2015"
---

An API I wrote with node.js for an assignment based on big data sets during my Web Development degree. It uses [csv-parser](https://www.npmjs.com/package/csv-parser) to lookup movies in a json file containing 2.3 million records. The node server also runs [express](https://www.npmjs.com/package/express) for the front-end which displays an infographic style page with the movie information. It looks up similar movies based on genre and similar ratings using [alike](https://www.npmjs.com/package/alike), actor/actresses images using the [flickrapi](https://www.npmjs.com/package/flickrapi) and the latest five tweets about those people using the Twitter Search API.