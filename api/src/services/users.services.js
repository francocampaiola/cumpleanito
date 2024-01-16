import { MongoClient, ObjectId } from "mongodb";
import 'dotenv/config'

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db(process.env.DB_DBNAME);
const usersCollection = db.collection(process.env.USERS_COLLECTION);

export async function getUsers() {
  await client.connect();
  return usersCollection.find().toArray();
}

export async function getUserById(id) {
    await client.connect();
    return usersCollection.findOne({ _id: new ObjectId(id) });
  }

export default {
  getUsers,
  getUserById
};
