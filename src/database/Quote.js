import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, './db.json');

export const getAllQuotes = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data).quotes;
  } catch (error) {
    console.error(' Error reading database:', error);
    return [];
  }
};
