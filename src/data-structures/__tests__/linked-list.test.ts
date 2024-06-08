import { LinkedList } from '../linked-list'
import { Node } from '../types/LinkedList'

describe('linked list', () => {
  it('should create an instance of LinkedList', () => {
    const linkedList = new LinkedList()
    expect(linkedList).toBeInstanceOf(LinkedList)
  })
  it('Should get an empty linked list', () => {
    const linkedList = new LinkedList()
    expect(linkedList.head).toBeNull()
  })
  it('Should create one Node in the linked list', () => {
    const linkedList = new LinkedList()
    linkedList.insertAtBegin(1)
    expect(linkedList.size()).toEqual(1)
    expect(linkedList.head?.data).toEqual(1)
  })
  it('Should create two Nodes with correct pointers', () => {
    const linkedList = new LinkedList()
    linkedList.insertAtBegin(1)
    linkedList.insertAtEnd(2)
    expect(linkedList.traverse()).toStrictEqual([1, 2])
    expect(linkedList.head).toBeInstanceOf(Node)
    expect(linkedList.head).toHaveProperty('next')
    expect(linkedList.head).toHaveProperty('prev')
    // @ts-expect-error not null
    expect(linkedList.head.prev).toBeNull()
  })
})
