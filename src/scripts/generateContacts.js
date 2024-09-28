import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    for (let i = 0; i < number; i++) {
      const generate = createFakeContact();
      contacts.push(generate);
    }

    console.log('Генерація контактів виконана успішно.');
    await writeContacts(contacts);
  } catch (error) {
    console.log('Помилка під генерації нових контактів', error);
  }
};

generateContacts(5);
