import { type GenericNode } from './Node'

export const getLinkedListValues = <T>(head: GenericNode<T> = null): T[] => {
  const values = []
  let current: GenericNode<T> = head
  while (current !== null) {
    values.push(current.value)
    current = current.next
  }
  return values
}

export const getNodeValueByIndex = <T>(head: GenericNode<T>, index: number): T | null => {
  let current: GenericNode<T> = head
  let count = 0
  while (current !== null) {
    if (count === index) return current.value
    count++
    current = current.next
  }
  return null
}
