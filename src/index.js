require("dotenv").config();
const express = require("express");
const v1QuoteRouter = require("./routes/v1/quoteRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../docs/swagger.json");

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Quotes API online");
});

app.use("/api/v1/quotes", v1QuoteRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(
    `Quotes API listening on port ${PORT}.\nView docs: http:/localhost:${PORT}/api-docs`
  );
});
