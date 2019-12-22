module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    css: {
      modules: false,
      sourceMap: process.env.NODE_ENV !== 'production',
      loaderOptions: {
          sass: {
              data: `
                  $fa-font-path: ${process.env.NODE_ENV !== 'production' ? '"~/fonts"' : '"/myapp/things/fonts"'};
                  @import "@/scss/base/index.scss";
                  @import "@/scss/helpers/index.scss";
              `
          }
      }
  },
}
