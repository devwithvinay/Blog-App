import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    email:{
        type: String,
        required:true
    },
},{timestamps:true})

const EmailModel =mongoose.models.email ||  mongoose.model('email' , Schema)
export default EmailModel;