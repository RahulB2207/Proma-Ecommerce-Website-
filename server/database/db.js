 import mongoose from 'mongoose';
 import dontenv from 'dotenv';

dontenv.config();

 const Connection = async(username,password) =>{

  const URL=`mongodb+srv://${username}:${password}@ecommerceweb.iyvpxpl.mongodb.net/?retryWrites=true&w=majority`;
    try{

      await  mongoose.connect(URL,{useunifiedTopology:true, useNewUrlParser:true});
      console.log('database connected sucessfully ')
    }catch(error){
        console.log("error while connecting the database" ,error.message)
    }
}

export default Connection;