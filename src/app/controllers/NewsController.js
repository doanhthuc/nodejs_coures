class NewsController {
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('news Detail');
    }
}

module.exports = new NewsController();
