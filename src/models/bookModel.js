const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "NewAuthor"
    },
    publisher_id:{
        type: ObjectId,
        ref: "Publisher",
    },
    isHardCover:{
        type:Boolean,
        default:false

    },
    
    price: Number,
    ratings: Number


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
