const mongoose = require('mongoose');

const bookcollectSchema = new mongoose.Schema( {
   
    bookName : {
        type : String,
       required : true,
      
    },
    price:{
        INR: Number,
        Dollar: Number,
    },
    authorName: String,
    tags: {
        Array,
    },
    TotalPages: Number,

    category : String,
    Year : Number,
    stockavailable: Boolean,

}, { timestamps: true });

module.exports = mongoose.model('Bookcollect', bookcollectSchema) 