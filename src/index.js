require('dotenv').config();
const express = require('express');
const v1QuoteRouter = require('./routes/v1/quoteRoutes');
const swaggerUi = require('swagger-ui-express');
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
module.exports = app;
