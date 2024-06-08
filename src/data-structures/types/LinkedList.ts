export class Node<T> {
  public next: Node<T> | null = null
  public prev: Node<T> | null = null
  constructor (public data: T) {}
}

export interface LinkedListProps<T> {
  insertAtBegin: (data: T) => Node<T>
  insertAtEnd: (data: T) => Node<T>
  deleteNode: (node: Node<T>) => void
  traverse: () => T[]
  size: () => number
  search: (comparator: (data: T) => boolean) => Node<T> | null
}
