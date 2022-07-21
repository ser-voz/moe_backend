import PhraseService from "../services/PhraseService.js";

class PhraseController {
    async create(req, res) {
        try {
            const word = await PhraseService.create(req.body);
            res.status(200).json(word);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getAll(req, res) {
        try {
            const words = await PhraseService.getAll();
            return res.status(200).json(words);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const updatedWord = await PhraseService.update(req.body);
            return res.status(200).json(updatedWord);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    async delete(req, res) {
        try {
            const word = await PhraseService.delete(req.params.id);
            return res.status(200).json(word);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new PhraseController();