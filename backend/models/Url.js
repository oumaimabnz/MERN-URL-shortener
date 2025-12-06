import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema(
{
    originalUrl: {type: String, require: true},
    shortId: {type: String, require: true, unique: true},
    clicks: {type: Number, default: 0},
}, { timestamps: true})

export default mongoose.model("Url", urlSchema)