const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware

app.use(cors());
app.use(express.json());


// create Api

app.get('/', (req, res) => {
    res.send("hello I am Mehedi Hassan");

});

app.listen(port, () => {
    console.log("server is running ...", port);
})