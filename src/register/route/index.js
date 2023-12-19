import _cache from "./cache/index.js"
import _rateLimiter from './rateLimiter.js'
import bodyParser from 'body-parser'

export default ({ servableEngineConfig }) => {
  const item = {}

  item.define = async (options) => {
    const {
      method,
      url,
      schema,
      handler,
      preHandler,
      // rateLimiter = {
      //   windowMs = 60 * 60 * 1000, // 1 hour
      //   max = 1000, // Limit each IP to 5 create account requests per `window` (here, per hour)
      //   message:
      //     'Too many requests from this IP, please try again after an hour',
      //   standardHeaders = true, // Return rate limit info in the `RateLimit-*` headers
      //   legacyHeaders = false, // Disable the `X-RateLimit-*` headers
      // } = {},
      // cache = { type = 'memory', duration = 10 } = {}
    } = options

    // if (cache) {
    //   // const { type = memory, duration = 10 } = cache
    // }

    switch (method.toLowerCase()) {
      case 'get': {
        Servable.AppNative.get(
          url,
          _cache(10),
          _rateLimiter({
            //https://stackoverflow.com/questions/64188573/express-rate-limit-blocking-requests-from-all-users
            windowMs: 60 * 60 * 1000, // 1 hour
            max: 1000, // Limit each IP to 5 create account requests per `window` (here, per hour)
            message:
              'Too many requests from this IP, please try again after an hour',
            standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
            legacyHeaders: false, // Disable the `X-RateLimit-*` headers,
          }),
          async (request, response) => {
            await handler(request, response)
          })
      } break
      case 'post': {
        Servable.AppNative.post(
          url,
          bodyParser.raw({ type: 'application/json' }),
          async (request, response) => {
            await handler(request, response)
          })
      } break
      default: break
    }
  }
  return item
}
