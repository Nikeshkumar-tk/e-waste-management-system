const mongoose = require('mongoose')

const feedBackSchema = mongoose.Schema({

    userid:{
        type:String,
    },
    desc:{
        type:String
    }

},{timestamps:true})


module.exports = mongoose.model("Feedback", feedBackSchema)