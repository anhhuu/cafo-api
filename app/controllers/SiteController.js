class SiteController {
    //[GET] /
    index(req, res, next) {
        res.send('CAFO API');
    }
}

module.exports = new SiteController;