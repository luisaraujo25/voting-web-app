function main(){

    const express = require('express');
    const fs = require('fs');
    const cors = require("cors");
    const mongo = require('mongodb').MongoClient;
    
    const PORT = 8000;
    const mongoURL = "mongodb://localhost:27017/votingdb" 
    
    const app = express();
    let database;
    
    const corsOptions ={
        origin:'*', 
        credentials:true,            //access-control-allow-credentials:true
        optionSuccessStatus:200,
     } 
    app.use(cors(corsOptions))

    app.get('/', (req, res) => {
        let cats;
        database.collection("cat").find({}).toArray()
            .then( result => {
                cats = result;
                res.json(cats);
                console.log(cats)
            })
            .catch( err => {
                throw err;
            })
    })

    app.listen(PORT, function (){
        console.log(`Server started running on http://localhost:${PORT}`);
        mongo.connect(mongoURL)
        .then( (client) => {
            database = client.db();
        })
        .catch( err => {
            throw err;
        })
    });
}

main()