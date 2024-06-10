import { Node } from '../Node'

export function createBaseLinkedList (): Node<unknown> {
  const a = new Node<string>('A')
  const b = new Node<string>('B')
  const c = new Node<string>('C')
  const d = new Node<string>('D')

  a.next = b
  b.next = c
  c.next = d
  return a
}
