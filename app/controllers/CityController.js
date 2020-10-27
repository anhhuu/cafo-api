const Address = require('../model/Address');
const Restaurant = require('../model/Restaurant');
const { mongooseToObject } = require('../../utils/mongoose')
const { multipleMongooseToObject } = require('../../utils/mongoose')

class CityController {
    //[GET] /cities/id/:id
    showOneByID(req, res, next) {
        Address.findOne({ _id: req.params.id })
            .populate({
                path: 'restaurants_id',
            })
            .then(city => {
                city = mongooseToObject(city);

                delete city.createdAt;
                delete city.updatedAt;
                delete city.__v;

                for (let i = 0; i < city.restaurants_id.length; i++) {
                    delete city.restaurants_id[i].createdAt;
                    delete city.restaurants_id[i].updatedAt;
                    delete city.restaurants_id[i].__v;
                }

                res.send({ city });
            })
            .catch(next);
    }

    //[GET] /cities/:city_url
    showOneByURL(req, res, next) {
        Address.findOne({ city_url: req.params.city_url })
            .populate({
                path: 'restaurants_id',
            })
            .then(city => {
                city = mongooseToObject(city);

                delete city.createdAt;
                delete city.updatedAt;
                delete city.__v;

                for (let i = 0; i < city.restaurants_id.length; i++) {
                    delete city.restaurants_id[i].createdAt;
                    delete city.restaurants_id[i].updatedAt;
                    delete city.restaurants_id[i].__v;
                }

                res.send({ city });
            })
            .catch(next);
    }

    //[GET] /cities
    showFull(req, res, next) {
        Address.find()
            .populate({
                path: 'restaurants_id',
            })
            .then(cities => {
                cities = multipleMongooseToObject(cities);

                res.send({ cities });
            })
            .catch(next);
    }
}

module.exports = new CityController();