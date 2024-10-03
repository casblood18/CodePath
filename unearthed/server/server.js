import express from 'express';
import giftsRouter from './routes/gift.js';

const app = express();

app.use('/gifts', giftsRouter);

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>');
} )

const PORT = process.env.port || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
})