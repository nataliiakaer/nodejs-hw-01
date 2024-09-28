import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Контактів у списку немає.');
      return;
    }

    contacts.pop();
    console.log('Останній контакт видалено.');
    await writeContacts(contacts);
  } catch (error) {
    console.log('Помилка під час видалення останнього контакту', error);
  }
};

removeLastContact();
