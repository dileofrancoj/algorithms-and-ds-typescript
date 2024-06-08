type GenericNode<T> = Node<T> | null

export class Node<T> {
  public next: GenericNode<T>
  constructor (public value: T) {
    this.value = value
    this.next = null
  }
}

const a = new Node<string>('A')
const b = new Node<string>('B')
const c = new Node<string>('C')
const d = new Node<string>('D')

a.next = b
b.next = c
c.next = d

export const traverse = <T>(head: GenericNode<T>): void => {
  let current: GenericNode<T> = head
  while (current !== null) {
    // eslint-disable-next-line no-console
    console.log('Node Value -> ', current.value)
    current = current.next
  }
}

export const getLinkedListValues = <T>(head: GenericNode<T>): T[] => {
  const values = []
  let current: GenericNode<T> = head
  while (current !== null) {
    values.push(current.value)
    current = current.next
  }
  return values
}
