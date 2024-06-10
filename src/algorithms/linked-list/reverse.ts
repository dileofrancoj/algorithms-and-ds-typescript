import { type GenericNode } from './Node'
/*
    n: # Nodos
    Time:  O(n)
    Space: O(1)
*/
export const reverse = <T>(head: GenericNode<T>): GenericNode<T> => {
  let current: GenericNode<T> = head
  let prev: GenericNode<T> | null = null
  while (current !== null) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}
