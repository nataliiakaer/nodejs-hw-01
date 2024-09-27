import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

import { createFakeContact } from './createFakeContact.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = await fs.appendFile(PATH_DB, updatedContacts, 'utf-8');
    console.log('Дані успішно записані у файл.', data);
  } catch (error) {
    console.log('Помилка запису у файл:', error);
  }
};

console.log(createFakeContact());
// writeContacts(createFakeContact());
