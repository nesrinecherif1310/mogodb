const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});

server.listen (3000,()=>{console.log("run")})

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'contact';
MongoClient.connect(url, function(err, client) {  console.log("Connecté à MongoDB"); 
 const db = client.db(dbName);  
 const manydata =([
 {Lastname:"Ben Lahmer",Firstname:"Fares",Email:"fares@gmail.com",age:26},
 {Lastname:"Kefi",Firstname:"Seif",Email:"kefi@gmail.com",age:15},
 {Lastname:"Fatnassi",Firstname:"Sarra",Email:"sarra.f@gmail.com",age:40},
 {Lastname:"Fatnassi",Firstname:"Rym",age:4},
 {Lastname:"Cherif",Firstname:"Sami",age:3}])
 db.collection("listedecontact").insertMany(manydata,function(err,res){
    if(err)throw err
    console.log ("run")
    client.close();
})



});

