const router = require('express').Router()
const Feedback = require('../models/feedback')


// posting new feedback

router.post("/", async(req,res) => {

    const newFeedback = new Feedback({
        username:req.body.username,
        desc:req.body.desc,
    })
    const feedback = await newFeedback.save()
    res.status(200).json(feedback)


})


router.get("/", async(req,res) => {

    const feedbacks = await Feedback.find()

    res.status(200).json(feedbacks)

})
module.exports = router

