'use strict'

const mongoose=require('mongoose');

const catSchema=new mongoose.Schema({
    name:{type:String},
})
const catModel=mongoose.model('favCats',catSchema);

const seedCat=()=>{
    const shown= new catModel({
        name:'Shown'
    });
   console.log(shown);
   shown.save();
    
}

module.exports=seedCat