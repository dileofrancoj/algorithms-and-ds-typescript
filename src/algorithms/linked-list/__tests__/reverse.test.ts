import { Node } from '../Node'
import { reverse } from '../reverse'
import { createBaseLinkedList } from './helpers'

describe('reverse', () => {
  it('should reverse a single linked list', () => {
    const head = createBaseLinkedList()
    const linkedList = reverse(head)
    expect(linkedList).toBeInstanceOf(Node)
    const DNode = linkedList
    const CNode = DNode?.next
    const BNode = CNode?.next
    expect(DNode?.value).toBe('D')

    expect(CNode?.value).toBe('C')
    expect(BNode?.value).toBe('B')
    expect(BNode?.next?.value).toBe('A')
    expect(BNode?.next?.next).toBeNull()
  })
})
