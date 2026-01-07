import * as Quote from '../database/Quote.js';
import { getRandomNumber } from '../utils/utils.js';

export const getAllQuotes = (filterParams) => {
  try {
    let allQuotes = Quote.getAllQuotes();

    if (filterParams.category) {
      const targetCategories = filterParams.category.toLowerCase().split(',');

      allQuotes = allQuotes.filter((quote) => {
        const quoteCats = quote.categories.map((cat) => cat.toLowerCase());

        return targetCategories.every((cat) => quoteCats.includes(cat));
      });
    }

    // If user asks for random using flag ?random=true
    if (filterParams.random === 'true' && allQuotes.length > 0) {
      const randomIndex = getRandomNumber(allQuotes.length);
      return [allQuotes[randomIndex]];
    }

    return allQuotes;
  } catch (error) {
    throw error;
  }
};
