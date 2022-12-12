import * as mongoose from 'mongoose';


export var studentSchema = new mongoose.Schema({
    name: {type:String},
    email: String,
    password: String,
   
});



export interface StudentDocument extends mongoose.Document{
    name: String,
    email: String,
    password: String,
}