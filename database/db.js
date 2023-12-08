import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async() => {
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-tj88kom-shard-00-00.xhzg4hs.mongodb.net:27017,ac-tj88kom-shard-00-01.xhzg4hs.mongodb.net:27017,ac-tj88kom-shard-00-02.xhzg4hs.mongodb.net:27017/?ssl=true&replicaSet=atlas-w1v2ad-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
   await mongoose.connect(URL,{ useUnifiedTopology: true});
   console.log('database connected successfully');
  } catch (error) {
    console.log('error while connecting database',error.message);
  }
};


export default Connection;