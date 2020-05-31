# vue-ssr-basic
A Vue.js project basic with vue 2.0, vue-router and vuex for server side rendering.

## Features:
* Vue + vue-router + vuex working together
* Server-side data pre-fetching
* Client-side state & DOM hydration
* Preload / prefetch resource hints
* Route-level code splitting
* Codes can run with or without SSR.
* Lazy loading routes.

## Architecture Overview

<img width="973" alt="screen shot 2016-08-11 at 6 06 57 pm" src="https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png">

**A detailed Vue SSR guide can be found [here](https://ssr.vuejs.org).**

## Initialize
First, download or clone this project.

Then install npm or yarn packages via `(npm | yarn) install`.

## Development

```sh
(npm or yarn) run dev
```

### without SSR
http://localhost:8100

It's served by webpack-dev-server. I recommend developing in this mode at first. So you can focus on your view things, not bother with server side things.


### with SSR
http://localhost:8200

When your pages look fine, then you step into SSR mode to check the server side is OK.

## Some Example Pages
When you start the project, you can visit http://localhost:8100 or http://localhost:8200 to look around.

## Build Distribution

```sh
(npm or yarn) run build
```

## Run in Production
```sh
(npm or yarn) run start
```
In production, instead of serving static assets by SSR server, you should setup a nginx to serve static assets for performance reason.

## Contributing
If you find bugs, please submit issues on github. Pull requests are welcome!

## Reference resources

[vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)

## License
MIT

