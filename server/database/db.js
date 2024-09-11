import mongoose from 'mongoose';
const DBConnection = async ()=>{
    const MONGODB_URL=`mongodb://ab7810499:MuDJsoOtmkFhvEKg@file-sharing-shard-00-00.rlmdh.mongodb.net:27017,file-sharing-shard-00-01.rlmdh.mongodb.net:27017,file-sharing-shard-00-02.rlmdh.mongodb.net:27017/?ssl=true&replicaSet=atlas-qz96qc-shard-0&authSource=admin&retryWrites=true&w=majority&appName=file-sharing`;
    try{

        await mongoose.connect(MONGODB_URL,{useNewUrlParser:true,});
        console.log('connected to database');

    }catch(error){
        console.error('error while connecting wuth database ',error.message);
    }
}

export default DBConnection;
//MuDJsoOtmkFhvEKg