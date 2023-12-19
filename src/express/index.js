import express from "express"
// import Fastify from 'fastify'
// import fastifyExpress from '@fastify/express'

export default async () => {
  const app = express()

  // const app = Fastify()
  // await app.register(fastifyExpress)

  return app
}
