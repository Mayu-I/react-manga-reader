import mongoose from "mongoose";

export const mongooseSchema = new mongoose.Schema({
    alias: String,
    categories: [String],
    hits: Number,
    image: String,
    // lastUpdated: Number,
    status: Number,
    title: String
});

const Manga = mongoose.model("Manga", mongooseSchema);

export default Manga;