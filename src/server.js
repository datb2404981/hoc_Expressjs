import express from 'express'
import exitHook from 'async-exit-hook'
import { env } from './config/environment.js'
import { CONNECT_DB, CLOSE_DB } from './config/mongodb.js'
import { APIs_V1 } from './routes/v1/index.js'

const START_SERVER = () => {
  const app = express()

  app.use(express.json())

  app.use('/v1', APIs_V1)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`Hi ${env.AUTHOR},I am running at http://${ env.APP_HOST }:${ env.APP_PORT }/`)
  })


  exitHook(() => {
    CLOSE_DB()
  });
}

CONNECT_DB()
  .then(() => console.log('Connected to MongoDb Cloud Atlas!'))
  .then(() => START_SERVER())
  .catch(error => {
    console.error(error)
    process.exit(0)
  })