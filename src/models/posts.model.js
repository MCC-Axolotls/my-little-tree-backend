import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 200,
        trim: true
    },
    description: {
        type: String
    },
    plainTags: {
        type: String,
    },
    tags: {
        type: String,
    },
    imageUrl:{
        type: String
    },
    plantId:{
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: "Plants",
                required: true,
            },
        ],
    }
})

const Post = mongoose.model('posts', postSchema)


export { Post } 