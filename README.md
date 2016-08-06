# danbovey.uk
My personal site built with Jekyll, so that it can be hosted on GitHub Pages.

## Install

The Gemfile uses the [github-pages](https://github.com/github/pages-gem) gem so that the site always works on GitHub.

#### Set up a dev server

```
bundle install
```

#### Start the dev server

```
jekyll server
```

#### Health check

Checks the GitHub Pages site for common DNS configuration issues.

```
$ github-pages health-check
Checking domain foo.invalid...
Uh oh. Looks like something's fishy: A record points to deprecated IP address
```

See the [GitHub Pages Health Check](https://github.com/github/pages-health-check) documentation for more information.

## Updating

To update to the latest version of Jekyll and associated dependencies, simply run `gem update github-pages`.