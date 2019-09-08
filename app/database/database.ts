import { DatabaseData } from './models/database-data.model';

const DEFAULT_DATA: DatabaseData = {
  name: 'unkown',
  collections: {},
}

export class Database {
  private readonly _data: DatabaseData;

  constructor(data: DatabaseData = DEFAULT_DATA) {
    this._data = data;
  }


}
