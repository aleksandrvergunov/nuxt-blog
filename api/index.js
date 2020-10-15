const { Nuxt, Builder } = require('nuxt')

const config = require('../nuxt.config.js')
const app = require('./app')

config.dev = !(process.env.NODE_ENV === 'production')

async function start () {
  module.exports = app

  const nuxt = new Nuxt(config)
  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(nuxt.render)
  if (require.main === module) {
    app.listen(port, host, () => {
      console.log(`API server listening on port ${port}`)
    })
  }
}
start()
