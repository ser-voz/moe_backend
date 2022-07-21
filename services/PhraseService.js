import Phrase from "../Phrase.js";

class PhraseService {
    async create(word) {
        const createdWord = await Phrase.create(word);
        return createdWord;
    }
    async getAll() {
        const words = await Phrase.find();
        return words;
    }
    async update(word) {
        if(!word._id) {
            throw new Error('не указан ID')
        }
        const updatedWord = await Phrase.findByIdAndUpdate(word._id, word, {new: true});
        return updatedWord;

    }
    async delete(id) {
        if(!id) {
            throw new Error('не указан ID')
        }
        const word = await Phrase.findByIdAndDelete(id);
        return word;
    }
}

export default new PhraseService();