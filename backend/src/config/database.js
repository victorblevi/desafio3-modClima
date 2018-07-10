const mongoose = require('mongoose')

mongoose.Promise = Promise

const URL = 'mongodb://localhost/modclima'
//conectando ao mongoDB com api do mongoose
module.exports = mongoose.connect(URL)

