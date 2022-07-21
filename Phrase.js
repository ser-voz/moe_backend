import mongoose from "mongoose";

const Phrase = new mongoose.Schema({
    eng: {type: String, required: true},
    tn: {type: String, required: true},
});

export default mongoose.model('Phrase', Phrase);