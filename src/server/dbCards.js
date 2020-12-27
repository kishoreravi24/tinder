const mongoose = require('mongoose');

const schema = mongoose.Schema;
const cardSchema = new schema({
    name: String,
    url: String
})

module.exports = mongoose.model("cards",cardSchema);