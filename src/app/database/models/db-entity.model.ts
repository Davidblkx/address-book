export type DbItem<T> = T & { id: string }

export function isDbItem<T>(itm: unknown): itm is DbItem<T> {
  // TODO: add logic to check if is DbItem
  return false; // remove this
}
