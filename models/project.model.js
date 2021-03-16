const mongoose = require("mongoose");
const genreSchema = require("./schemas/genres.model");
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    description: {
        type: String,
        required: false,
        unique: false,
        trim: false,
        minlength: 3
    },
    status: {
        type: String,
        default: "private",
        enum: ["private", "public"]
    },
})

const statSchema = new Schema({
    novaScore: {
        type: Number,
        default: 0
    },
    trendScore: {
        type: Number,
        default: 0
    },
    numUsers: {
        type: Number,
        default: 0
    },
    like: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    followers: {
        type: Number,
        default: 0
    }

})

const contractSchema = new Schema({
    amountRequired: {
        type: Number,
        required: true,
        default: 0,
    },
    amountRaised: {
        type: Number,
        required: true,
        default: 0,
    },
    returnRate: {
        type: Number,
        required: true,
        default: 0.10,
    }
})

const projectSchema = new Schema({
    details: [detailSchema],
    contract: [contractSchema],
    genres: [genreSchema],
    stats: [statSchema],
}, {
    timestamps: true,
});

module.exports = mongoose.model("Project", projectSchema)