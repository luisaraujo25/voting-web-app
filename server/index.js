const express = require('express');
const fs = require('fs');
const cors = require("cors");
const mongo = require('mongodb').MongoClient;

async function accessDb(operation, arguments){

    const URL = "mongodb://localhost:27017/votingdb"
    
    try {
        mongo.connect(URL, function(err, db){
            const data = db.db("votingdb");
            console.log(data.collection("cat").find({}).toArray(function(err, res){
                try{
                    console.log(res)
                }
                catch(err){
                    throw err;
                }
            }))
        })
     
    } catch (e) {
        console.error(e);
    }
}

function main(){

    const PORT = 8000;
    
    const app = express();
    
    const corsOptions ={
        origin:'*', 
        credentials:true,            //access-control-allow-credentials:true
        optionSuccessStatus:200,
     } 
    app.use(cors(corsOptions))

    app.get('', (req, res) => {
        res.json("olaaaaaaaaaaaaaaaa")
    })

    //accessDb("", "")
    app.listen(PORT, function (){
        console.log(`Server started running on http://localhost:${PORT}`);
    });
}

main()