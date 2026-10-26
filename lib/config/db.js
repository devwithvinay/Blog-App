import mongoose from "mongoose";

const dbConnect = async ()=>{
  await  mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('MongoDb Connected Successfully');
    })
    .catch((error)=>{
        console.log('Failed to connect MongoDb',error);
    })
}

export default dbConnect;