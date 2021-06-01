export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr : true,
  generate: {
    fallback: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Oğuzhan Kalelioğlu',
    htmlAttrs: {
      lang: 'tr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Oğuzhan Kalelioğlu Kişisel Web Sitesi' },
      {name: 'robots', content: 'follow, index'},
      {property : 'og:url' , content : 'https://www.oguzhankalelioglu.com'},
      {property : 'og:type' , content : 'website'},
      {property : 'og:title' , content : 'Oğuzhan Kalelioğlu'},
      {property : 'og:description' , content : 'Oğuzhan Kalelioğlu Kişisel Web Sitesi'},
      {name : 'twitter:card' , content : 'summary'},
      {name : 'twitter:url' , content : 'https://www.oguzhankalelioglu.com'},
      {name : 'twitter:title' , content : 'Oğuzhan Kalelioğlu'},
      {name : 'twitter:description', content : 'Oğuzhan Kalelioğlu Kişisel Web Sitesi'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href : 'https://www.oguzhankalelioglu.com'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'vue-notion/nuxt', '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    display: 'swap',
    families: {
      Roboto: true,
      'Homemade Apple': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  robots: {
    UserAgent: '*',
    Disallow: '/'
  },
  sitemap: {
    hostname: 'https://oguzhankalelioglu.com',
    gzip: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
