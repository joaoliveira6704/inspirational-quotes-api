import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import v1QuoteRouter from './src/routes/v1/quoteRoutes.js';

const app = express();

app.use(cors());

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Quotes API online');
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => 'App Listening on port');
}
app.use('/api/v1/quotes', v1QuoteRouter);

export default app;
