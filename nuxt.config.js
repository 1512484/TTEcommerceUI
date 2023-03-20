const routerBase = "/";
const isProduction = process.env.NODE_ENV === "production";
export default {
  mode:'universal',
  server: {
    port: 3001,
    host: '0.0.0.0'
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "TTEcommerce",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lorem ipsum dolor sit amet' },
      { hid: 'keywords', name: 'keywords', content: 'Lorem ipsum dolor sit amet' },
      { hid: "og:title", name:"og:title", property: "og:title", content: "TTEcommerce" },
      { hid: "apple-mobile-web-app-title", name: "apple-mobile-web-app-title", content: "TTEcommerce" },
      { hid: "og:site_name", name: "og:site_name", property: "og:site_name", content: "TTEcommerce" },
      { hid: "og:description", name: "og:description", property: "og:description", content: "Lorem ipsum dolor sit amet" },
      { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 't-type', name: 'twitter:title', content: 'TTEcommerce' },
      { hid: 't-type', name: 'twitter:description', content: 'Lorem ipsum dolor sit amet' },
      { hid: 'og:image', property: 'og:image', content:  "/banner.svg" },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["ant-design-vue/dist/antd.css", "~/assets/scss/styles.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/antd-ui",
    "@/plugins/repositories.client.js",
    "@/plugins/axios.client.js",
    // "@/plugins/services.client.js",
    "@/plugins/vue-agile.js",
    "@/plugins/vue2-google-maps.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/composition-api/module", "@nuxtjs/dotenv"],

  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  proxy: {
    "/api": {
      target: process.env.MD_BACKEND_URL,
      pathRewrite: { "^/api": "/" },
    },
  },

  axios: {
    prefix: !isProduction ? "/api" : "",
    withCredentials: true,
  },

  env: {
    baseURL: process.env.MD_BACKEND_URL,
  },

  publicRuntimeConfig: {
    appSpaceUrl: routerBase,
    autoWorkshopAppUrl: `${process.env.MD_BACKEND_URL}`,
    axios: {
      browserBaseURL: !isProduction ? "" : "/",
      baseURL: !isProduction ? "" : "/",
    },
  },

  router: {
    base: routerBase,
  },
};
