import mongoose, { Schema } from "mongoose";

const plantSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 200,
        trim: true
    },
    plantType: {
        type: String
    },
    description: {
        type: String,
    },
    wateringFrequency: {
        type: Number,
    },
    lastWatered: {
        type: Date,
    },
    nextWatering: {
        type: Date,
    },
    dismissedWatering:{
        type: Boolean
    },

    fertilizerFrequency: {
        type: Number,
    },
    lastFertitlizer: {
        type: Date,
    },
    nextFertilizer: {
        type: Date,
    },
    dismissedFertilizer:{
        type: Boolean
    },
    imageUrl:{
        type: String
    },
    userId: {
        type: String
    },
})

const Plant = mongoose.model('plants', plantSchema)


export { Plant } 