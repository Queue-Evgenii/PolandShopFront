const path = require('path');

module.exports = {
  publicPath: '/shop',
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
    config
      .plugin('copy')
      .tap(args => {
        args[0].push({
          from: 'public/.htaccess',
          to: ''
        })
        return args
      })
  }
  
}
