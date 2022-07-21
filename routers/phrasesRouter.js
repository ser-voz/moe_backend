import Router from "express";
import PhraseController from "../controllers/PhraseController.js";


const router = new Router();

//название create, getAll и тд из WordController
router.post('/phrases', PhraseController.create);
router.get('/phrases', PhraseController.getAll);
router.put('/phrases', PhraseController.update);
router.delete('/phrases/:id', PhraseController.delete);




export default router;