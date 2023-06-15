export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'oxygea',
    htmlAttrs: {
      lang: 'pt-br',
    },
    script: [
      {
        src: 'https://platform.illow.io/banner.js?siteId=7812e876-c218-4bf2-800b-a70e36e43ef4',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-url', property: 'og:url', content: '' },
      { hid: 'og:title', property: 'og:title', content: 'Oxygea' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Somos um Corporate Venture Capital, um hub de aceleração e Venture Building com foco em sustentabilidade e transformação digital na indústria.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://files.fm/thumb_show.php?i=7ecyfm3jp',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
  ],

  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: to.params.offset
            ? document.querySelector(to.hash).offsetTop + to.params.offset
            : document.querySelector(to.hash).offsetTop,
          behavior: 'smooth',
        })
      }
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-slick-carousel.js' },
    { src: '~/plugins/vue-slider-component.js' },
    { src: '~/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/vue-lottie.js', mode: 'client' },
    { src: '~/plugins/vue-rellax.js', mode: 'client' },
    { src: '~/plugins/vuelidate.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/svg-sprite',
    '@nuxt/image',
    'nuxt-gsap-module',
  ],

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },

  modules: ['@nuxtjs/axios', '@nuxtjs/i18n', '@nuxtjs/gtm'],

  gtm: {
    id: 'GTM-KXTFPZC',
  },

  image: {
    provider: 'static',
    dir: 'assets/img',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    config: {},
  },

  svgSprite: {
    input: '~/assets/svg/',
  },

  i18n: {
    locales: [
      {
        name: 'Português',
        code: 'pt',
        iso: 'pt-BR',
        file: 'pt.js',
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
      },
    ],
    langDir: 'locales/',
    defaultLocale: 'pt',
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      },
    },
    static: {
      maxAge: 60 * 60 * 24 * 365 * 1000,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    maxChunkSize: 300000,
    optimization: {
      splitChunks: {
        name: true,
      },
    },
    html: {
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    },
    postcss: {
      postcssOptions: {
        plugins: {
          'postcss-import': {},
          'tailwindcss/nesting': {},
          tailwindcss: {
            content: [
              './src/components/**/*.{js,ts,vue}',
              './src/layouts/**/*.{js,ts,vue}',
              './src/pages/**/*.{js,ts,vue}',
            ],
          },
          autoprefixer: {},
        },
      },
    },
  },
}
