class EmitFlow {
  constructor() {
    this.events = {}
  }

  on(event, listener) {
    this.events[event] = this.events[event] ? this.events[event] : []
    this.events[event].push(listener)
    return this
  }

  emit(event, ...args) {
    this.events[event]
      ? this.events[event].forEach((listener) => listener(...args))
      : null
    return this
  }

  once(event, listener) {
    const onceWrapper = (...args) => {
      listener(...args)
      this.off(event, onceWrapper)
    }
    this.on(event, onceWrapper)
    return this
  }

  off(event, listener) {
    this.events[event] = this.events[event]
      ? this.events[event].filter((l) => l !== listener)
      : this.events[event]
    return this
  }

  offAll(event) {
    this.events[event] ? delete this.events[event] : null
    return this
  }
}

export const emitflow = new EmitFlow()
