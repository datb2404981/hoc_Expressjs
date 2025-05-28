/* eslint-disable no-unused-vars */
import { MongoClient, ServerApiVersion } from 'mongodb'

let trelloDatabaseInstance = null;

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    eprecationErrors: true }
})

export const CONNECT_DB = async () => {
// Gọi kết nối tới MongoDB Atlas với ỦI dã khai báo trong thân của mongoClinetInstrance
  await mongoClientInstance.connect()

  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connet to Database first!')
  return trelloDatabaseInstance
}

