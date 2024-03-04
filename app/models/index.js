const dbConfig = require("../config/database");
const mongoose = require("mongoose");

module.exports = {
    mongoose,
    url: dbConfig.url,
    hiragana: require('./hiragana.model.js')(mongoose)
}