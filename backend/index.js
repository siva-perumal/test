const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserRouter = require('./routes/user')
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,err =>{
    if(err) throw err;
})

app.use('/users',UserRouter);

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("mongoDB connect successfully")
})

app.listen(5000,()=> {
    console.log("server running on port 5000")
});