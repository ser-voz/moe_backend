import WordService from "../services/WordService.js";

class WordController {
    async create(req, res) {
        //получить квери параметры со строки url
        //console.log(req.query);
        try {
            const word = await WordService.create(req.body);
            res.status(200).json(word);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getAll(req, res) {
        try {
            const words = await WordService.getAll();
            return res.status(200).json(words);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    // async getOne(req, res) {
    //     try {
    //         const post = await WordService.getOne(req.params.id);
    //         return res.status(200).json(post);
    //     } catch (e) {
    //         res.status(500).json(e);
    //     }
    // }
    async update(req, res) {
        try {
            const updatedWord = await WordService.update(req.body);
            return res.status(200).json(updatedWord);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    async delete(req, res) {
        try {
            const word = await WordService.delete(req.params.id);
            return res.status(200).json(word);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new WordController();