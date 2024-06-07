import { Stack } from '../stack'

describe('Stack', () => {
  it('should create an instance of a Stack', () => {
    const stack = new Stack()
    expect(stack).toBeInstanceOf(Stack)
  })
  it('should add an element to the stack', () => {
    const stack = new Stack<number>()
    stack.push(1)
    expect(stack.length()).toEqual(1)
    expect(stack.top()).toEqual(1)
  })
  it('should add two elements to the stack and remove the last one', () => {
    const stack = new Stack<number>()
    stack.push(1)
    stack.push(2)
    expect(stack.length()).toEqual(2)
    expect(stack.pop()).toEqual(2)
  })

  it('should return true when stack is empty', () => {
    const stack = new Stack<number>()
    expect(stack.isEmpty()).toBe(true)
  })

  it('should return false when stack has items', () => {
    const stack = new Stack<number>()
    stack.push(1)
    expect(stack.isEmpty()).toBe(false)
  })
})
