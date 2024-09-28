import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    console.log('Всі контакти видалено.');
    await writeContacts([]);
  } catch (error) {
    console.log('Помилка при видаленні всіх контаків:', error);
  }
};

removeAllContacts();
