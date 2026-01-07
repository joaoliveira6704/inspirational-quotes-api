import * as Quote from '../database/Quote.js';
import { getRandomNumber } from '../utils/utils.js';

export const getAllQuotes = (filterParams) => {
  try {
    let allQuotes = Quote.getAllQuotes();

    if (filterParams.category) {
      // Convert string into array (split by comma)
      const targetCategories = filterParams.category.toLowerCase().split(',');

      return allQuotes.filter((quote) => {
        const quoteCats = quote.categories.map((cat) => cat.toLowerCase());

        // Returns true only if every target category is present in the quote
        return targetCategories.every((cat) => quoteCats.includes(cat));
      });
    }

    let randomQuoteIndex = getRandomNumber(allQuotes.length);

    return allQuotes[randomQuoteIndex];
  } catch (error) {
    throw error;
  }
};
