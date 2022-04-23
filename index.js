const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//middleware

app.use(cors());
app.use(express.json());



//mongodb 


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9x7m2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");

    console.log("Car genius db connect");
    // perform actions on the collection object
    client.close();
});




// create Api

app.get('/', (req, res) => {
    res.send("hello I am Mehedi Hassan");

});

app.listen(port, () => {
    console.log("server is running ...", port);
})