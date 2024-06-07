export interface StackProps<T> {
  length: () => number
  push: (value: T) => void
  isEmpty: () => boolean
  top: () => T | undefined
  pop: () => T | never
}
