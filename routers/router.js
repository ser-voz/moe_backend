import Router from 'express';
import WordController from "../controllers/WordController.js";

const router = new Router();

//название create, getAll и тд из WordController
router.post('/vocabulary', WordController.create);
router.get('/vocabulary', WordController.getAll);
//router.get('/vocabulary/:id', WordController.getOne);
router.put('/vocabulary', WordController.update);
router.delete('/vocabulary/:id', WordController.delete);




export default router;