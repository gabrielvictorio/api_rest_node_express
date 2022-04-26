const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/lumedb")
mongoose.Promise = global.Promise

module.exports = mongoose