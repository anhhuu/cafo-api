function getPrettyObject(restaurant) {
    let restaurantRet = new Object();

    restaurantRet.phones = restaurant.phones;
    restaurantRet.restaurant_url = restaurant.restaurant_url;
    restaurantRet.photos = restaurant.photos;
    restaurantRet.address = restaurant.address;

    let operating = new Object();
    operating.close_time = restaurant.operating.close_time;
    operating.open_time = restaurant.operating.open_time;
    restaurantRet.operating = operating;

    //let position = new Object();
    //position.latitude = restaurant.location.latitude;
    //position.longitude = restaurant.location.longitude;
    restaurantRet.position = restaurant.position;

    restaurantRet.name = restaurant.name;

    let menu_infos = new Array();

    for (let i = 0; i < restaurant.menu_infos.length; i++) {
        for (let j = 0; j < restaurant.menu_infos[i].dishes.length; j++) {
            let food = new Object();
            food.name = restaurant.menu_infos[i].dishes[j].name;
            food.description = restaurant.menu_infos[i].dishes[j].description;
            food.price = restaurant.menu_infos[i].dishes[j].price;
            food.photos = restaurant.menu_infos[i].dishes[j].photos;
            menu_infos.push(food);
        }
    }

    restaurantRet.menu_infos = menu_infos;

    return restaurantRet;
}


module.exports = getPrettyObject;