import express from 'express';
import db from './db';
import authRoutes from './controllers/authRoutes';

const app = express();
const port = process.env.PORT || 1803;

app.use(express.json());

db;

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello Green World!');
})

app.listen(port, () => {
    console.log(`ecoswap server is listening on PORT: ${port}`);
});