import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

import * as db from './utils/DataBaseUtils';

import { serverPort } from '../etc/config.json';

db.setUpConnection();

const app = express();

app.use( bodyParser.json() );
app.use( cors({origin:'*'}) );

app.get('/tables', (req, res) => {
	db.listTables().then(data => res.send(data));
});

app.post('/tables', (req, res) => {
	db.createTable(req.body).then(data => res.send(data));
});

app.delete('/tables/:id', (req, res) => {
	db.deleteTable(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
	console.log(`Server is up and running on port ${ serverPort }`)
});
