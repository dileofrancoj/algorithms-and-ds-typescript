import { type GenericNode } from './Node'

export const traverse = <T>(head: GenericNode<T>): void => {
  let current: GenericNode<T> = head
  while (current !== null) {
    // eslint-disable-next-line no-console
    console.log('Node Value -> ', current.value)
    current = current.next
  }
}
