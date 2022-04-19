const mongoose = require('mongoose');
const ObjectId= mongoose.Schema.Types.ObjectId

const batchSchema = new mongoose.Schema( {
    name: String,
    Size: Number,

    Program:{
        type:String,
        enum:["Frontend", "Backend"]
    }, 
    
}, {timestamps:true});

module.exports = mongoose.model('batchData', batchSchema)
