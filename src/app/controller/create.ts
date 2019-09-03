import { Contact } from '../address-lib/contact.model';

// Control form actions in create page

// action on form submit
function handleFormSubmit(event: Event) {
  event.preventDefault();

  const contact = getFormData();

  // TODO: Add logic to validate contact and insert value

  window.location.href = '../list.html';

  return false;
}

// return data from form, in Conatct format
function getFormData(): Contact {
  // grab form
  const form = document.getElementById('form');
  if (!form) { throw new Error('error on grab form data') }
  const data = new FormData(<HTMLFormElement>form);
  return {
    // TODO: add missing fields, ex:
    // firstName: <string>data.get('fname') || '',
  }
}

window.addEventListener('load', () => {
  const form = document.getElementById('form');
  if (form) { form.addEventListener('submit', handleFormSubmit) }
});
