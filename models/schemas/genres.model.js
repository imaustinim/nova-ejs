const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genreSchema = new Schema({
    type: String,
    enum: ["Rock", "Pop", "Jazz", "R&B", "Classical"],
    required: false,
})

module.exports = genreSchema