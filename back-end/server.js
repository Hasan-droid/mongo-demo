require('dotenv').config();
const mongoose=require('mongoose')
const express=require('express');
const cors=require('cors');
const catsController = require('./Controllers/cats.Controller');
const catsModel=require('./Models/cats.modle')
const app=express()
const port=process.env.PORT;
app.use(cors());
mongoose.connect('mongodb://localhost:27017/cats',
    { useNewUrlParser: true, useUnifiedTopology: true }
);




app.get('/cats' , catsController)
app.get('/',(req,res)=>{
    catsModel();
   
})

app.listen(port,()=>{
    console.log(`listen to port 8000`  )
});

