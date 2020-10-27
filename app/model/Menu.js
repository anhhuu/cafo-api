const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Food = require('./Food')

const Menu = new Schema({
    foods_id: [{ type: Schema.Types.ObjectId, ref: 'Food' }]
}, {
    timestamps: true,
});

module.exports = mongoose.model('Menu', Menu);

/*
cafo_dev.menus
+ id
+ foods_id[]
*/