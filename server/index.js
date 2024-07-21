import express from 'express';
import TextDb from './config/db.js';
import router from './routes/Router.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const App = express();

const PORT = 8000;


TextDb();


// moddleware

App.use(bodyParser.json());
App.use(cors());

App.get('/',(req,res)=>{
    res.send('welcome to the browser')
})

 App.use('/api/v5/text', router )

App.listen(PORT, ()=>{
    console.log(`your server is running on http://localhost:${PORT}`)
})