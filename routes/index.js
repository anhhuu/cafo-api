const siteRouter = require('./site');
const restaurantsRouter = require('./restaurants');
const citiesRouter = require('./cities');

function route(app) {
    app.use('/restaurants', restaurantsRouter);
    app.use('/cities', citiesRouter);
    app.use('/', siteRouter);
}

module.exports = route;