const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Menu = require('./Menu')
const Address = require('./Address')

const Restaurant = new Schema({
    menu_id: { type: Schema.Types.ObjectId, ref: 'Menu' },
    address_id: { type: Schema.Types.ObjectId, ref: 'Address' },
    single_address: { type: String },
    restaurant_url: { type: String },
    name: { type: String },
    photos: { type: Array },
    phones: { type: Array },
    operating: { type: Array },
    position: { type: Array },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Restaurant', Restaurant);

/*
cafo_dev.restaurants
+ id
+ menu_id
+ address_id
+ restaurant_url
+ photos[]
+ phones[]
+ close_time
+ open_time

+ single_address
+ latitude 
+ longitude
+ name
*/