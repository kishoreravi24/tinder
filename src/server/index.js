const express = require('express');
const mongoose = require('mongoose')
const cards = require('./dbCards');
const cors = require('cors');

//App config
const app = express();
const port = process.env.PORT || 8001
const URI = "mongodb+srv://kishoreravi24:Password1@cluster0.sunuv.mongodb.net/tinderdb?retryWrites=true&w=majority"

//DB config
mongoose.connect(URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
},()=>{
    console.log("Db connected")
})

//middlewares
app.use(express.json());
app.use(cors());

//API Endpoints
app.get('/', (req,res) => {
    res.send("Hello world!")
})

app.post('/tinder',(req,res) => {
    const db_cards = req.body;
    cards.create(db_cards, (err,data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

app.get('/tinder', (req,res) => {
    cards.find((err,data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            console.log("calling")
            res.status(200).send(data);
        }
    })
})
//Listener
app.listen(port,()=>{
    console.log("Server started!");
})