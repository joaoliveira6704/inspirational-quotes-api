import 'dotenv/config';
import express from 'express';
import v1QuoteRouter from './src/routes/v1/quoteRoutes.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Quotes API online');
});

app.listen(PORT, () => 'App Listening on port');

app.use('/api/v1/quotes', v1QuoteRouter);

export default app;
