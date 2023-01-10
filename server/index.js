function main(){

    const express = require('express');
    const fs = require('fs');
    const cors = require("cors");
    const mongo = require('mongodb').MongoClient;
    const bodyParser = require('body-parser');

    const PORT = 8000;
    const mongoURL = "mongodb://localhost:27017/votingdb" 
    
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    let database;
    
    const corsOptions ={
        origin:'*', 
        credentials:true,            //access-control-allow-credentials:true
        optionSuccessStatus:200,
     } 

    app.use(cors(corsOptions))

    app.use(express.static('public'))

    app.get('/', (req, res) => {
        database.collection("cat").find({}).toArray()
            .then( cats => {
                res.json(cats);
            })
            .catch( err => {
                throw err;
            })
    })

    //request the link where CAT_ID image is stored
    app.post('/cat/images', (req, res) => {
        const path = "http://localhost:8000/" + `static/img/cat${req.body.id}.jpg`;
        try{
            //res.set("Content-type", "image/jpg");
            res.set("Content-Type", "text/plain");
            res.send(path);
            res.end();
        } catch(err){
            res.sendStatus(404);
        }
    })

    app.get('/updateVotes/:id', async (req, res) => {
        
        const id = parseInt(req.params.id);
        
        let cat;

        await database.collection("cat").findOne({_id: id})
            .then(res => {
                cat = res;
            })
            .catch( err => {
                console.log("Can't find cat");
                res.sendStatus(404);
            });
        
        const updatedInfo = { $set: {votes: cat.votes + 1}};

        database.collection("cat").updateOne({_id: id}, updatedInfo, (err, res) => {
            if (err) throw err;
            console.log(`Cat${id} has now ${cat.votes+1}`)
        })
        /*
        res.end("Updated!");
        */
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