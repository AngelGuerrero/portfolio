export default {
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    lang: 'es',

    titleTemplate: '%s | ' + 'Ángel Guerrero 🌮',
    title: 'Ángel Guerrero',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Desarrollo aplicaciones a la medida. Cuéntame de tu proyecto para comenzar a trabajar en él. ¡Mira mis aplicaciones! 😍'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/me.png'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Ángel Guerrero Software Developer'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://angelguerrero.vercel.app/'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Desarrollador de software freelance | ✨🏆 Ángel Guerrero 🌮'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Desarrollo aplicaciones a la medida. Cuéntame de tu proyecto para comenzar a trabajar en él. ¡Mira mis aplicaciones! 😍'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Courgette&family=Saira+Semi+Condensed:wght@600&display=swap'
      }
    ]
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/fonts.css'],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',

    // Doc: https://github.com/nuxt/content
    '@nuxt/content',

    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',

    // https://github.com/nuxt-community/sitemap-module#readme
    '@nuxtjs/sitemap',

    // https://firebase.nuxtjs.org/
    '@nuxtjs/firebase'
  ],

  /**
   * Generate Sitemap
   */
  sitemap: {
    hostname: 'https://angelguerrero.vercel.app/'
  },

  /**
   * Firebase configuration
   */
  firebase: {
    config: {
      apiKey: process.env.VUE_APP_API_KEY,
      authDomain: 'portafolio-dec01.firebaseapp.com',
      projectId: 'portafolio-dec01',
      storageBucket: 'portafolio-dec01.appspot.com',
      messagingSenderId: '879159833782',
      appId: '1:879159833782:web:e8a08c807f8f861c706217'
    },
    services: {
      firestore: true
    }
  },

  /**
   * Google Analytics
   */
  googleAnalytics: {
    id: 'G-FTY574R9LV',
    dev: false
  },

  /**
   * Style resources
   */
  styleResources: {
    scss: ['~/assets/scss/global.scss']
  },

  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},

  env: {
    VUE_APP_API_KEY: process.env.VUE_APP_API_KEY
  }
}
