const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Food = new Schema({
    name: { type: String },
    decription: { type: String },
    price: { type: Object },
    photos: { type: Array }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Food', Food);

/*
cafo_dev.foods
+ id
+ description
+ name
+ price
+ photos[]
*/