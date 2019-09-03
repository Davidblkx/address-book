import { cloneDeep } from 'lodash';

import { Database } from './database';
import { DatabaseCollection } from './models/database-data.model';
import { DbItem, isDbItem } from './models/db-entity.model';
import { generateUniqueId } from './tools/id-generator';

/** Collection of data */
export class Collection<T> {

  /** get copy of current collection */
  public get DbCollection() {
    return cloneDeep(this._data);
  }

  /**
   * init a collection for a DB
   * @param name collection name
   * @param _data source data
   * @param _db source database
   */
  constructor(
    public readonly name: string,
    private _data: DatabaseCollection<T>,
    private readonly _db: Database,
  ) {}

  /** return all values in collection */
  public list(): DbItem<T>[] {
    // TODO: Add logic to return items
    return [];
  }

  /** return item for an id */
  public get(id: string): DbItem<T> | undefined {
    // TODO: return item with id
    return undefined;
  }

  /** insert/update item to collection */
  public set(item: DbItem<T> | T): DbItem<T> {
    // TODO: insert or update item, and return it
    return <any>{}
  }

  /** delete an entity with id */
  public delete(id: string) {
    // TODO: delete entity if the provided ID
  }

  /** commit changes to database */
  public commit() {
    this._db.setCollection(this);
  }

  /** revert changes */
  public rollback() {
    this._data = this._db.getCollection<T>(this.name).DbCollection;
  }

  // used to append ID to an item
  private buildDbItem(item: T): DbItem<T> {
    return {
      ...item,
      id: generateUniqueId(),
    };
  }
}
