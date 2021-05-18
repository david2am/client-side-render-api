module.exports = function (config) {

  config.setBrowserSyncConfig({
    https: {
      key: 'C:/Program Files/OpenSSL-Win64/bin/localhost.key',
      cert: 'C:/Program Files/OpenSSL-Win64/bin/localhost.crt'
    }
  })

  config.addPassthroughCopy('src/js')
  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: "_data"
    }
  }
}