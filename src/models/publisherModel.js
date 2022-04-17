const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const publisherSchema=new mongoose.Schema({
   
  name : String,
    headQuarter :String
}, {timestamp :true})


module.exports= mongoose.model("publisher",publisherSchema)