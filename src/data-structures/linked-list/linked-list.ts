/*
    Es una colección lineal de elementos cuyos elementos no siguen un orden en memoria. Cada elemento
    apunta al siguiente. Esta estructura es una colección de nodos en el que juntos representan una sequencia.

    - Single linked list
    - Double linked list

    Estas listas están compuestas por Nodos
    Métodos:
        - insertAtBegin // Devuelve el nodo agregado
        - insertAtEnd // Devuelve el nodo agregado
        - deleteNode
        - traverse
        - size
        - search
*/

import { type LinkedListProps, Node } from '../types/LinkedList'

export class LinkedList<T> implements Partial<LinkedListProps<T>> {
  public head: Node<T> | null = null

  // Devuelve el Nodo insertado
  public insertAtBegin (data: T): Node<T> {
    const node = new Node(data)
    // Si no hay head (vacío), debemos insertar el nodo en el head
    if (this.head === null) {
      this.head = node
    } else {
    // Si el head no está vacío (ya hay un nodo creado) el prev va a tener el nuevo nodo
      this.head.prev = node
      // el siguiente va a tener el actual
      node.next = this.head
      this.head = node
    }
    return node
  }

  // Devuelve el Nodo insertado
  public insertAtEnd (data: T): Node<T> {
    const node = new Node(data)
    // si el head está vacío, se inserta en esa posición
    if (this.head === null) {
      this.head = node
    } else {
      const getLastNode = (node: Node<T>): Node<T> => {
        return node.next !== null ? getLastNode(node.next) : node
      }

      const lastNode = getLastNode(this.head)
      node.prev = lastNode
      lastNode.next = node
    }
    return node
  }

  traverse (): T[] {
    const arr: T[] = []
    // si no está definido el head, está vacío
    if (this.head === null) {
      return arr
    }

    const addToArray = (node: Node<T>): T[] => {
      arr.push(node.data)
      return node.next !== null ? addToArray(node.next) : arr
    }

    return addToArray(this.head)
  }

  public size (): number {
    return this.traverse().length
  }

  public deleteNode (node: Node<T>): void {
    if (node.prev === null) {
      this.head = node.next
    } else {
      const prevNode = node.prev
      prevNode.next = node.next
    }
  }

  public search (comparator: (data: T) => boolean): Node<T> | null {
    const checkNext = (node: Node<T>): Node<T> | null => {
      if (comparator(node.data)) {
        return node
      }
      return node.next !== null ? checkNext(node.next) : null
    }

    return this.head !== null ? checkNext(this.head) : null
  }
}

/*
  interface Post {
    title: string
  }
  Possible Implementation
  const linkedList = new LinkedList<Post>()

  linkedList.insertAtEnd({ title: 'Post A' }) // [{ title: 'Post A' }]
  linkedList.insertAtEnd({ title: 'Post B' }) // [{ title: 'Post A' }, {title: 'Post B'}]
  linkedList.insertAtBegin({ title: 'Post C' }) // [{title: 'Post C'} ,{ title: 'Post A' }, {title: 'Post B'}]
  console.log(linkedList.traverse()) // // [{title: 'Post C'} ,{ title: 'Post A' }, {title: 'Post B'}]
  linkedList.search(({ title }) => title === 'Post A')
  linkedList.size() // 3
*/
