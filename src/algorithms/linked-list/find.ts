import { type GenericNode } from './Node'

/*
    n : # Node numbers
    Time: O(n)
    Space: O(1)
*/
export const find = <T>(head: GenericNode<T>, target: T): boolean => {
  let current: GenericNode<T> = head
  while (current !== null) {
    if (current.value === target) return true
    current = current.next
  }
  return false
}
