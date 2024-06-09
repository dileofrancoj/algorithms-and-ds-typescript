import { traverse } from '../traverse'
import { createBaseLinkedList } from './helpers'

describe('traverse', () => {
  it('Should traverse a base linked list', () => {
    const head = createBaseLinkedList()

    const cloSpy = vi.spyOn(console, 'log')
    traverse(head)
    expect(cloSpy).toHaveBeenCalledTimes(4)
    expect(cloSpy).toHaveBeenCalledWith('Node Value -> ', 'A')
    expect(cloSpy).toHaveBeenCalledWith('Node Value -> ', 'B')
    expect(cloSpy).toHaveBeenCalledWith('Node Value -> ', 'C')
    expect(cloSpy).toHaveBeenCalledWith('Node Value -> ', 'D')
  })
  it('Should traverse an empty Linked list', () => {
    const cloSpy = vi.spyOn(console, 'log')
    traverse(null)
    expect(cloSpy).toHaveBeenCalledTimes(0)
  })
})
