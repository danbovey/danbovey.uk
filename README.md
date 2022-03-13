# danbovey.uk

> 📈 My personal site built with Gatsby

My stats are loaded dynamically from CloudFlare workers.

There is an issue with the Spotify playlists feature: Workers have a connection limit of 50 and I neeed to load the follower count for each of my playlists which is causing the function to abort. Instead, I am storing my top spotify playlists in [npoint.io](https://npoint.io) (A JSON storage API) at the moment.
