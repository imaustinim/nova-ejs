const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = require("./schemas/order.model");
const SocialMediaSchema = require("./schemas/socialmedia.model")

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        minlength: 3
    },
    loginId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    displayName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },    
    firstName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 2
    },
    lastName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 2
    },
    locale: {
        type: String,
    },
    profilePicture: {
        type: String,
    },
    birthDate: {
        type: Date,
        unique: false,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    phone: {
        type: String,
        unique: false,
        trim: true
    },
    bio: {
        type: String,
        unique: false,
        trim: false,
        minlength: 0,
    },
    socialMedia: [SocialMediaSchema],
    orders: [OrderSchema],
    projects: {
        type: Schema.Types.ObjectId
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema)