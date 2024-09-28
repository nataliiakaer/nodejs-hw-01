import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, undefined, 2));
    console.log('Дані успішно оновлені у файлі.');
  } catch (error) {
    console.log('Помилка оновлення даних у файлі:', error);
  }
};
