const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Restaurant = require('./Restaurant')

const Address = new Schema({
    district: { type: String },
    city: { type: String },
    city_url: { type: String },
    restaurants_id: [{ type: Schema.Types.ObjectId, ref: 'Restaurant' }]
}, {
    timestamps: true,
});

module.exports = mongoose.model('Address', Address);

/*
cafo_dev.addresses
+ id
+ district
+ city
+ city_url
+ restaurants_id[]
*/