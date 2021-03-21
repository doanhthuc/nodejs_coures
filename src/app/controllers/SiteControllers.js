class SiteController {
    index(req, res) {
        res.render('news');
    }

    // [GET] /search/:slug
    search(req, res) {
        res.send('search Detail');
    }
}

module.exports = new SiteController();
