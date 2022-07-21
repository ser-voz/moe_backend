import Word from "../Word.js";

class WordService {
    async create(word) {
        console.log(word);
        const createdWord = await Word.create(word);
        return createdWord;
    }
    async getAll() {
        const words = await Word.find();
        return words;
    }
    // async getOne(id) {
    //     if(!id) {
    //         throw new Error('не указан ID')
    //     }
    //     const word = await Word.findById(id);
    //     return word;
    // }
    async update(word) {
        if(!word._id) {
            throw new Error('не указан ID')
        }
        const updatedWord = await Word.findByIdAndUpdate(word._id, word, {new: true});
        return updatedWord;

    }
    async delete(id) {
        if(!id) {
            throw new Error('не указан ID')
        }
        const word = await Word.findByIdAndDelete(id);
        return word;
    }
}

export default new WordService();