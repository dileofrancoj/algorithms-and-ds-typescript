/*
  Una Cola / Queue es una estructura de datos se basa en FIFO (First In First OUT)

  Definición de interfaz:
  length: devuelve la cantidad de elementos que tiene la Pila
  push: recibe un generico y agrega ese elemento al final del array
  isEmpty: Devuelve un booleano dependiendo si la pila está vacía o no
  top: Devuelve el último elemento del array
  pop: Devuelve y elimina el úlitmo elemento de la pila

*/

export interface QueueProps<T> {
  enqueue: (item: T) => void // add an item to queue
  dequeue: (item: T) => T | undefined // remove and gets de first item
  peek: () => T | undefined // return the very first item
  isEmpty: () => boolean
  length: () => number
}

export class Queue<T> implements QueueProps<T> {
  private readonly queue: T[] = []

  length (): number {
    return this.queue.length
  }

  isEmpty (): boolean {
    return this.queue.length === 0
  }

  enqueue (item: T): void {
    this.queue.push(item)
  }

  dequeue (): T | never {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue element')
    }

    return this.queue.shift() as T
  }

  peek (): T | undefined {
    if (this.isEmpty()) return undefined
    return this.queue.at(0) as T
  }
}
