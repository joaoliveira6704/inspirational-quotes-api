const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get All Quotes");
});

router.get("/:quoteId", (req, res) => {
  res.send("Get an existing quote");
});

router.post("/", (req, res) => {
  res.send("Create a new quote");
});

router.patch("/:quoteId", (req, res) => {
  res.send("Update an existing quote");
});

router.delete("/:quoteId", (req, res) => {
  res.send("Delete an existing quote");
});

module.exports = router;
