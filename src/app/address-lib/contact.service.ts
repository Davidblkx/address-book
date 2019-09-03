import { Collection } from '../database/collection';
import { Database } from '../database/database';
import { Contact } from './contact.model';

// Class to handle contacts
export class ContactsService {
  public readonly db: Database; // database to store contacts
  public readonly people: Collection<Contact>; // list of contacts

  constructor() {
    this.db = new Database('address-book'); // start DB
    this.people = this.db.getCollection('contacts'); // Load contacts
  }

  // save changes
  public save() {
    this.people.commit();
    this.db.save();
  }
}
