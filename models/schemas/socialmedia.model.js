const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SocialMediaSchema = new Schema({
    type: String,
    enum: ["facebook", "instagram", "github", "website", "twitter", "twitch"],
    required: false,
})

module.exports = SocialMediaSchema