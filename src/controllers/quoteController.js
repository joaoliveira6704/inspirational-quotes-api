import * as quoteService from '../services/quoteService.js';

export const getAllQuotes = (req, res) => {
  // Extract filters from query strng
  const { category, random } = req.query;

  try {
    // Send object with both filters
    const allQuotes = quoteService.getAllQuotes({ category, random });

    res.send({ status: 'OK', data: allQuotes });
  } catch (error) {
    res.status(500).send({ status: 'FAILED', data: { error: error?.message } });
  }
};
