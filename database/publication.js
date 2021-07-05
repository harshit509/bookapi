const mongoose=require("mongoose");
// create a publication schema
const PublicationSchema=mongoose.Schema({
    id:Number,
    name:String,
    book:[Number]
})

// create a model
const PublicationModel=mongoose.model(PublicationSchema);

module.exports=PublicationModel;