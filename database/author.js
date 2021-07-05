const mongoose=require("mongoose");


// create a author schema
const AuthorSchema=mongoose.Schema({
    id:Number,
    name:String,
    book:[Number]
})

// create a model
const AuthorModel=mongoose.model(AuthorSchema);

module.exports=AuthorModel