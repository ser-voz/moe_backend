import mongoose from "mongoose";

const Word = new mongoose.Schema({
    eng:              {type: String, required: true},
    transcription:    {type: String, required: true},
    tn:               {type: String, required: true},
    otherTranslation: {type: String, required: false},
    sentences:        {type: Array, required: false},

});


export default mongoose.model('Word', Word);