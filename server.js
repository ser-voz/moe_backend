import express from 'express';
import mongoose from "mongoose";
import router from './routers/router.js';
import phrasesRouter from './routers/phrasesRouter.js'
//import cors from 'cors'


const PORT   = 3000;
const DB_URL = 'mongodb+srv://user:user@cluster0.wj8u5wk.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
//регистрация роуетор
app.use('/api', router);
app.use('/api', phrasesRouter);


//cors disable for another localhost port
//app.use(cors({origin: '*'}));



async function startApp() {
    try {
        // options for mongoose.connect
        //{ useUnifiedTopology: true, useNewUrlParser: true }
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => {
            console.log('Server start ed on port '+PORT);
        });
    } catch (e) {
        console.log(e);
    }
}

startApp();

