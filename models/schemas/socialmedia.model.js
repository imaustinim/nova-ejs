const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SocialMediaSchema = new Schema({
    platform: {
        type: String,
        enum: ["Facebook", "Instagram", "Github", "Website", "Twitter", "Twitch", "Other"],
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true
    },
    style: {
        svg: {
            type: String,
            required: true,
        },
        iconId: {
            type: String,
            required: true,
        }
    }
})

module.exports = SocialMediaSchema