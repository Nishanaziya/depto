import { MongoClient, ObjectId } from 'mongodb'

// Connection URL
const client = new MongoClient(
  process.env.MONGO_DB_URL ||
  'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
)
const db = client.db(process.env.MONGO_DB_NAME || 'depto')

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    let member = req.body
    // console.log(member)
    let result = await db.collection('members').insertOne(member)

    res.status(200).json(result)
  } else if (req.method === 'GET') {
    // Handle any other HTTP method
    let members = await db.collection('members').find().toArray()
    // console.log(members)
    res.status(200).json(members)
  }
  else if (req.method === 'DELETE') {
    // Get User ID from request body
    let address = req.body.address
    // console.log(walletAddress)
    // Delete the Patent
    let result = await db.collection('members').deleteMany({ address: address })
    res.status(200).json(result)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
