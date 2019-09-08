import { Contact } from '../address-lib/contact.model';
import { ContactsService } from '../address-lib/contact.service';
import { DbItem } from '../database/models/db-entity.model';

const contacts = new ContactsService();

function printContact(c: DbItem<Contact>) {
  document.write(`
<div style="display: flex; flex-direction: row; margin: 5px 0">
<button class="delete" data-id="${c.id}">X</button>
<div style="padding: 5px" >${c.firstName} ${c.lastName} (${c.email}): ${c.phone}</div>
</div>
`)
}

contacts.people.list().forEach(e => printContact(e));
window.addEventListener('load', () => {
  const btns = document.querySelectorAll('.delete');
  btns.forEach(btn => {
    btn.addEventListener('click', (ev: Event) => {
      const target = <HTMLElement>ev.srcElement;
      if (target) {
        const id = target.dataset['id'];
        if (id) {
          contacts.people.delete(id);
          contacts.save();
          window.location.reload();
        } else { alert('Cant find element'); }
      }
    })
  })
});
