export interface QueueProps<T> {
  enqueue: (item: T) => void // add an item to queue
  dequeue: (item: T) => T | undefined // remove and gets de first item
  peek: () => T | undefined // return the very first item
  isEmpty: () => boolean
  length: () => number
}
