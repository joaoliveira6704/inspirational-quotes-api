import 'dotenv/config';
import express from 'express';
import v1QuoteRouter from './src/routes/v1/quoteRoutes.js';
/* import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read swagger.json directly
const swaggerDocument = JSON.parse(
  readFileSync(join(__dirname, './docs/swagger.json'), 'utf-8')
);
 */
const app = express();

app.get('/', (req, res) => {
  res.send('Quotes API online');
});

app.use('/api/v1/quotes', v1QuoteRouter);
/* app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); */

export default app;
