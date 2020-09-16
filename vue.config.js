const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  publicPath: './',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        }
      },
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ]
      }
    }
  },
}
