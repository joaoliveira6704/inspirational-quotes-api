import * as quoteService from '../services/quoteService.js';

export const getAllQuotes = (req, res) => {
  const { category } = req.query;

  try {
    const allQuotes = quoteService.getAllQuotes({ category });
    res.send({ status: 'OK', data: allQuotes });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};
