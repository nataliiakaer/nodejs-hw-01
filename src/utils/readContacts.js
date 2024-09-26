import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await PATH_DB.readFile('../db/db.json', 'utf8');
    console.log('Вміст файлу: ', data);
  } catch (error) {
    console.log('Помилка читання файлу: ', error);
  }
};
