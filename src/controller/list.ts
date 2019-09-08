import { Contact } from '../address-lib/contact.model';
import { ContactsService } from '../address-lib/contact.service';

export function ControlList() {
  const contacts = new ContactsService();

  function printContact(c: Contact) {
    document.writeln(`${c.firstName} ${c.lastName} (${c.email}): ${c.phone}`)
  }

  contacts.people.list().forEach(e => printContact(e));
}
