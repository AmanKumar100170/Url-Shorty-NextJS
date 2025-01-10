import mongoose, { Document, Schema, Model } from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        unique: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

export interface IUrl extends Document {
    originalUrl: string,
    shortUrl: string
}

// mongoose.models.Url -> If a model named Url already exists (e.g., due to hot-reloading in development), it will use the existing model.
const Url: Model<IUrl> = mongoose.models.Url || mongoose.model<IUrl>('Url', urlSchema);

export default Url;