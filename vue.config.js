module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'common': '@/common',
      }
    }
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
  },
  lintOnSave: false

}