import { getLinkedListValues, getNodeValueByIndex } from '../getValues'
import { createBaseLinkedList } from './helpers'

describe('getLinkedListValues', () => {
  it('Should return the values of the base linked list', () => {
    const head = createBaseLinkedList()
    expect(getLinkedListValues(head)).toStrictEqual(['A', 'B', 'C', 'D'])
  })
  it('Should return the values of an empty linked list', () => {
    expect(getLinkedListValues()).toStrictEqual([])
  })
})

describe('getNodeValueByIndex', () => {
  it('should get the value with index = 1', () => {
    const head = createBaseLinkedList()
    expect(getNodeValueByIndex(head, 1)).toBe('B')
  })
  it('should return null when index is not founded', () => {
    const head = createBaseLinkedList()
    expect(getNodeValueByIndex(head, 5)).toBeNull()
  })
})
