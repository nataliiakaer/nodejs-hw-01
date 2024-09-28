import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    contacts.push(createFakeContact());
    console.log('Один новий контакт записаний в кінець списку.');
    await writeContacts(contacts);
  } catch (error) {
    console.log('Помилка: ', error);
  }
};

addOneContact();
