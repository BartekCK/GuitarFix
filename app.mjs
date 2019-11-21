import express from 'express';
import { router } from './routes/index.mjs';
import {join} from'path';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'pug');

app.set('views', join('./views'));
app.use(express.static(join('./public')));

app.use('/', router);