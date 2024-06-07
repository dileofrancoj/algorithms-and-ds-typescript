/*
  Una pila / stack es una estructura de datos se basa en LiFo (Last in first out)

  Definición de interfaz:
  length: devuelve la cantidad de elementos que tiene la Pila
  push: recibe un generico y agrega ese elemento al final del array
  isEmpty: Devuelve un booleano dependiendo si la pila está vacía o no
  top: Devuelve el último elemento del array
  pop: Devuelve y elimina el úlitmo elemento de la pila

*/

import type { StackProps } from './types/Stack'

/* Nota: se agregan comprobaciones respecto al tamaño en memoria que puede tener la pila */
export class Stack<T> implements StackProps<T> {
  private readonly stack: T[] = []
  private readonly limit: number

  constructor (limit: number = Number.MAX_SAFE_INTEGER) {
    this.limit = limit
  }

  length (): number {
    return this.stack.length
  }

  isEmpty (): boolean {
    return this.length() === 0
  }

  push (value: T): void | never {
    if (this.length() + 1 > this.limit) {
      throw new Error('Stack overflow')
    }
    this.stack.push(value)
  }

  top (): T | undefined {
    if (!this.isEmpty()) {
      return this.stack.at(-1)
    }
    return undefined
  }

  pop (): T | never {
    if (this.length() !== 0) {
      return this.stack.pop() as T
    }
    throw new Error('Stack underflow')
  }
}
