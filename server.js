import 'dotenv/config';
import express from 'express';
import v1QuoteRouter from './src/routes/v1/quoteRoutes.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Quotes API online');
});

app.use('/api/v1/quotes', v1QuoteRouter);

export default app;
