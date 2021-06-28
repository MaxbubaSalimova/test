const News = require('../models/News')

exports.AddNews = async (req,res) => {
    const news = new News
    ({
    title : req.body.title,
    description : req.body.description,
    image:`/public/uploads/${req.file.filename}`
    })
    await news.save()

    .then(() => {
        res.send(news)
        res.status(201).json({
            success: true
        })
    })

    .catch((error) => {
        res.status(400).json({
            success: false,
            data : error
        })
    })
}