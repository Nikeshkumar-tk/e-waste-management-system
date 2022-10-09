const mongoose = require('mongoose')

const feedBackSchema = mongoose.Schema({

    username:{
        type:String,
    },
    desc:{
        type:String
    }

},{timestamps:true})


module.exports = mongoose.model("Feedback", feedBackSchema)