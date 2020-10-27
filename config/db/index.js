const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/cafo_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect cafo_dev database successfully!')
    } catch (error) {
        console.log('Connect cafo_dev database failure!')
    }
}

module.exports = { connect };