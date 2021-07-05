const mongoose=require(mongoose);

// creating a book schema
const BookSchema=mongoose.Schema({
    isbn:String,
title:String,
authors:[Number],
language:String,
pubdate :String,
noofpages:Number,
category:[String],
publication:Number
})
// create a book model
const BookModel=mongoose.model("books",BookSchema);

module.exports=BookModel