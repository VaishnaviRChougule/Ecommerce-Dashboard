const mongoose = require('mongoose');

const db = async () =>{
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to DB...');
    }catch(error){
        console.log("Connection Failed",error);
    }
}
module.exports = {db}