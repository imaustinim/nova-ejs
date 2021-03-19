const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = require("./schemas/order.model");
const SocialMediaSchema = require("./schemas/socialmedia.model")

const detailsSchema = new Schema({
    loginId: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        minlength: 1
    },
    displayName: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    position: {
        type: String,
        trim: true,
    },
    genres: {
        type: Array,
    },
    profilePicture: {
        type: String,
    },
    location: {
        type: String,
        trim: true,
    },
    birthDate: {
        type: Date,
    },
    bio: {
        type: String,
        unique: false,
        trim: false,
    },
})

const userSchema = new Schema({
    details: detailsSchema,
    socialMedia: SocialMediaSchema,
    orders: [OrderSchema],
    projects: [{
        type: Schema.Types.ObjectId
    }],
}, {
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema)