import { Collection } from '../database/collection';
import { Database } from '../database/database';
import { Contact } from './contact.model';

export class ContactsService {
  public readonly db: Database;
  public readonly people: Collection<Contact>;

  constructor() {
    this.db = new Database('address-book');
    this.people = this.db.getCollection('contacts');
  }

  public save() {
    this.people.commit();
    this.db.save();
  }
}
