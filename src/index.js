import 'dotenv/config';
import express from 'express';
import v1QuoteRouter from './routes/v1/quoteRoutes.js';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'module';

// JSON imports require a special trick in ESM or using createRequire
const require = createRequire(import.meta.url);
const swaggerDocument = require('../docs/swagger.json');

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Quotes API online');
});

app.use('/api/v1/quotes', v1QuoteRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
}
export default app;
