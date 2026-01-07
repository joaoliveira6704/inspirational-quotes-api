import * as Quote from '../database/Quote.js';

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

    return allQuotes;
  } catch (error) {
    throw error;
  }
};
