import { Contact } from '../address-lib/contact.model';
import { ContactsService } from '../address-lib/contact.service';

function handleFormSubmit(event: Event) {
  event.preventDefault();

  const c = getFormData();
  if (!c.email || !c.firstName || !c.lastName || !c.phone) {
    console.error('invalid data', c);
    alert('fields are missing');
    return false;
  }

  const service = new ContactsService();
  service.people.set(c);
  service.save();

  window.location.href = '../list.html';

  return false;
}

function getFormData(): Contact {
  const form = document.getElementById('form');
  if (!form) { throw new Error('error on grab form data') }
  const data = new FormData(<HTMLFormElement>form);
  return {
    firstName: <string>data.get('fname') || '',
    lastName: <string>data.get('lname') || '',
    email: <string>data.get('email') || '',
    phone: <string>data.get('phone') || '',
  }
}

window.addEventListener('load', () => {
  const form = document.getElementById('form');
  if (form) { form.addEventListener('submit', handleFormSubmit) }
});
