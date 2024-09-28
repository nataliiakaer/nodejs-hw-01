import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    return await readContacts();
  } catch (error) {
    console.log('Помилка під час отримання всіх контактів ', error);
    return [];
  }
};

console.log(await getAllContacts());
