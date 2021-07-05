const mongoose=require("mongoose");
// create a publication schema
const PublicationSchema=mongoose.Schema({
    id:Number,
    name:String,
    book:[String]
})

// create a model
const PublicationModel=mongoose.model("publication",PublicationSchema);

module.exports=PublicationModel;