import express from 'express';
const router = express.Router();
import * as quoteController from '../../controllers/quoteController.js';

router.get('/', quoteController.getAllQuotes);

router.get('/:quoteId', (req, res) => {
  res.send('Get an existing quote');
});

router.post('/', (req, res) => {
  res.send('Create a new quote');
});

router.patch('/:quoteId', (req, res) => {
  res.send('Update an existing quote');
});

router.delete('/:quoteId', (req, res) => {
  res.send('Delete an existing quote');
});

export default router;
