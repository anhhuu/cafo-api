const Address = require('../model/Address');
const Food = require('../model/Food');
const Restaurant = require('../model/Restaurant');
const Menu = require('../model/Menu');
const { mongooseToObject } = require('../../utils/mongoose')
const { multipleMongooseToObject } = require('../../utils/mongoose')

class RestaurantController {
    //[GET] /restaurants/id/:id
    showOneByID(req, res, next) {
        Restaurant.findOne({ _id: req.params.id })
            .populate({
                path: 'menu_id',
                populate: {
                    path: 'foods_id',
                }
            })
            .populate({
                path: 'address_id',
            })
            .then(restaurant => {
                restaurant = mongooseToObject(restaurant);

                delete restaurant.createdAt;
                delete restaurant.updatedAt;
                delete restaurant.__v;

                delete restaurant.address_id.restaurants_id;
                delete restaurant.address_id.createdAt;
                delete restaurant.address_id.updatedAt;
                delete restaurant.address_id.__v;

                for (let i = 0; i < restaurant.menu_id.foods_id.length; i++) {
                    delete restaurant.menu_id.foods_id[i].createdAt;
                    delete restaurant.menu_id.foods_id[i].updatedAt;
                    delete restaurant.menu_id.foods_id[i].__v;
                }

                res.send({ restaurant });
            })
            .catch(next);
    }

    //[GET] /restaurants/:restaurant_url
    showOneByURL(req, res, next) {
        Restaurant.findOne({ restaurant_url: req.params.restaurant_url })
            .populate({
                path: 'menu_id',
                populate: {
                    path: 'foods_id',
                }
            })
            .populate({
                path: 'address_id',
            })
            .then(restaurant => {
                restaurant = mongooseToObject(restaurant);

                delete restaurant.createdAt;
                delete restaurant.updatedAt;
                delete restaurant.__v;

                delete restaurant.address_id.restaurants_id;
                delete restaurant.address_id.createdAt;
                delete restaurant.address_id.updatedAt;
                delete restaurant.address_id.__v;

                for (let i = 0; i < restaurant.menu_id.foods_id.length; i++) {
                    delete restaurant.menu_id.foods_id[i].createdAt;
                    delete restaurant.menu_id.foods_id[i].updatedAt;
                    delete restaurant.menu_id.foods_id[i].__v;
                }

                res.send({ restaurant });
            })
            .catch(next);
    }

    //[GET] /restaurants
    showFull(req, res, next) {
        Restaurant.find()
            .populate({
                path: 'address_id',
            })
            .then(restaurants => {
                restaurants = multipleMongooseToObject(restaurants);
                for (let i = 0; i < restaurants.length; i++) {
                    delete restaurants[i].address_id.restaurants_id;
                    delete restaurants[i].address_id.createdAt;
                    delete restaurants[i].address_id.updatedAt;
                    delete restaurants[i].address_id.__v;
                    delete restaurants[i].createdAt;
                    delete restaurants[i].updatedAt;
                    delete restaurants[i].__v;
                }
                res.send({ restaurants });
            })
            .catch(next);
    }
}

module.exports = new RestaurantController();