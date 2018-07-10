const restful = require('node-restful')
const mongoose = restful.mongoose

//mongoose schema
const modclima = new mongoose.Schema({
    value: {type: String, require: true },
})

module.exports = restful.model('modclima', modclima)