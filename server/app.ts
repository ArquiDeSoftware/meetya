import express from 'express';
import cors from 'cors';
import api from './routes';
import bodyParser from 'body-parser'

const app = express();

// Static

// Middlewares
app.use(express.json(), cors());

app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())

// Routes
app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Hello world, nice to meetya! 🐹');
});

export default app;
