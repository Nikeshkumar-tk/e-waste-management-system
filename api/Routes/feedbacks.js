const router = require('express').Router()
const Feedback = require('../models/feedback')


// posting new feedback

router.post("/", async(req,res) => {

    const newFeedback = new Feedback({
        userid:req.body.userid,
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

