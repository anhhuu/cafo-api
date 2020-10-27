//Insert db
const getPrettyObject = require('./getPrettyObject');
const restaurants = require('../resources/raw-data/restaurants.json');

const Address = require('../app/model/Address');
const Food = require('../app/model/Food');
const Restaurant = require('../app/model/Restaurant');
const Menu = require('../app/model/Menu');

function saveData() {
    for (let index = 0; index < restaurants.length; index++) {
        const restaurant = getPrettyObject(restaurants[index]);
        let foodArr_id = new Array();
        for (let i = 0; i < restaurant.menu_infos.length; i++) {
            const food = new Food({
                name: restaurant.menu_infos[i].name,
                decription: restaurant.menu_infos[i].decription,
                price: restaurant.menu_infos[i].price,
                photos: restaurant.menu_infos[i].photos
            });
            foodArr_id.push(food._id);
            food.save(function(err) {
                if (err) return handleError(err);
            });
        }

        //console.log(foodArr_id);

        const menu = new Menu({
            foods_id: foodArr_id
        })

        //console.log(menu);

        menu.save(function(err) {
            if (err) return handleError(err);
        });

        const res = new Restaurant({
                menu_id: menu._id,
                address_id: "5f94486af063054800c5730c",
                single_address: restaurant.address,
                restaurant_url: restaurant.restaurant_url,
                name: restaurant.name,
                photos: restaurant.photos,
                phones: restaurant.phones,
                operating: restaurant.operating,
                position: restaurant.position,
            })
            //console.log(res);

        res.save(function(err) {
            if (err) return handleError(err);
        });
    }
}

module.exports = saveData;