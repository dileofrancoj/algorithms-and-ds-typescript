import { Queue } from '../queue'

describe('queue', () => {
  it('should create an instance of a Queue', () => {
    const queue = new Queue()
    expect(queue).toBeInstanceOf(Queue)
  })
  it('should add an element to the Queue', () => {
    const queue = new Queue<number>()
    queue.enqueue(1)
    expect(queue.length()).toEqual(1)
  })
  it('should add two elements to the Queue and dequeue the first one', () => {
    const queue = new Queue<number>()
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.length()).toEqual(2)
    expect(queue.dequeue()).toEqual(1)
  })

  it('should get the first element and maintain Queue length', () => {
    const queue = new Queue<number>()
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.peek()).toEqual(1)
    expect(queue.length()).toEqual(2)
  })

  it('should return true when queue is empty', () => {
    const queue = new Queue<number>()
    expect(queue.isEmpty()).toBe(true)
  })

  it('should return false when queue has items', () => {
    const queue = new Queue<number>()
    queue.enqueue(1)
    expect(queue.isEmpty()).toBe(false)
  })
})
