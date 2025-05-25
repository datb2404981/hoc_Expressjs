import express from 'express'
import exitHook from 'async-exit-hook'
import { CONNECT_DB, CLOSE_DB } from './config/mongodb.js'
import { env } from './config/environment.js'

const START_SERVER = () => {
  const app = express()

  app.get('/', async (req, res) => {

    console.log(process.env)
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(env.APP_PORT, env.APP_HORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Hi ${env.AUTHOR},I am running at http://${ env.APP_HORT }:${ env.APP_PORT }/`)
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