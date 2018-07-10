const modclima = require('./collection')

modclima.methods(['get', 'post', 'put', 'delete'])
modclima.updateOptions({new: true, runValidators: true})

module.exports = modclima