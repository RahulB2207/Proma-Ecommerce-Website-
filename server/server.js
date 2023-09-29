import express from 'express';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './Routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

const PORT  = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL=process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@ecommerceweb.iyvpxpl.mongodb.net/?retryWrites=true&w=majority`;

Connection(URL);

if(process.env.NODE_ENV === 'production' ){
    app.use(express.static('client/build'))
}

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router)




app.listen(PORT,()=>console.log(`server is running  sucessfully on port `,PORT));

DefaultData();
