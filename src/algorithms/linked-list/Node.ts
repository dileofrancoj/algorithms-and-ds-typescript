export type GenericNode<T> = Node<T> | null

export class Node<T> {
  public next: GenericNode<T>
  constructor (public value: T) {
    this.value = value
    this.next = null
  }
}
