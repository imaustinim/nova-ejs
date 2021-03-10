const mongoose = require("mongoose");
const genreSchema = require("./other/genres.model");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    },
    description: {
        type: String,
        required: false,
        unique: false,
        trim: false,
        minlength: 3
    },
    details: {
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
        numUsers: {
            type: Number,
            required: true,
            default: 0
        }
    },
    scores: {
        trending: {
            type: Number,

        }
    },
    genres: [genreSchema]
}, {
    timestamps: true,
});

module.exports = mongoose.model("Project", projectSchema)