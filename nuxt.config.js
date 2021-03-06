export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'App Club — for students who build apps, or want to.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'description', name: 'description', hid: 'description', content: `App Club — for students who build apps, or want to.` },
      { property: 'og:title', name: 'og:title', content: `App Club — for students who build apps, or want to.` },
      { property: 'og:description', name: 'og:description', content: `The UM App Club is based in University of Malaya. We enable students to develop tech products — and build the tech startup ecosystem in campuses. We're on a mission to rethink tech education in universities — around the idea of autonomy in choosing what we wanna learn.` },
      { property: 'og:type', name: 'og:type', content: 'website' },
      { property: 'og:url', name: 'og:url', content: `https://umapp.club` },
      { property: 'og:image', name: 'og:image', content: `https://umapp.club/ourphoto.jpg` },
      { property: 'twitter:card', name: 'twitter:card', content: `summary_large_image` },
      { property: 'twitter:site', name: 'twitter:site', content: `@umappclub` },
      { property: 'twitter:creator', name: 'twitter:creator', content: `@umappclub` },
      { property: 'twitter:title', name: 'twitter:title', content: `App Club — for students who build apps, or want to.` },
      { property: 'twitter:description', name: 'twitter:description', content: `The UM App Club is based in University of Malaya. We enable students to develop tech products — and build the tech startup ecosystem in campuses. We're on a mission to rethink tech education in universities — around the idea of autonomy in choosing what we wanna learn.` },
      { property: 'twitter:image', name: 'twitter:image', content: `https://umapp.club/ourphoto.jpg` }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  generate: {
    routes: function () {
      const fs = require('fs')
      return fs.readdirSync('./assets/content/blog').map(file => {
        return {
          route: `/blog/${file.slice(2, -5)}`,
          payload: require(`./assets/content/blog/${file}`)
        }
      })
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-160623354-1'
    }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/markdownit', '@nuxtjs/bulma'],
  markdownit: {
    injected: true,
    html: true,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
}