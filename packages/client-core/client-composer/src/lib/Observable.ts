/**
 * https://blog.jeremylikness.com/blog/client-side-javascript-databinding-without-a-framework/
 */

export type Subscription<T> = (value: T) => void
export type SetValueCallback<T> = (value: T) => Partial<T>

export class Observable<T> {
  protected value: T
  listeners: Subscription<T>[] = []

  constructor(initialValue: T) {
    this.value = initialValue
  }

  protected notify() {
    this.listeners.forEach((listener) => listener(this.value))
  }

  getListenerCount(): number {
    return this.listeners.length
  }

  getValue(): T {
    return this.value
  }

  getState(): T {
    return this.value
  }

  setState(state: Partial<T> | null) {
    this.setValue(state)
  }

  /**
   * This is more of a convenient method, to easy the typing
   * Attention, this is not strictly typed and will throw if the given key could not be found
   *
   * key can be a path annotation
   * or can be a single key
   */
  // setKeyValue(key: string, value: any) {
  // }

  setValue(callback: SetValueCallback<T>, doNotify?: boolean): void
  // null if you want to clear the state
  setValue(value: Partial<T> | null, doNotify?: boolean): void
  setValue(updater: any, doNotify = true): void {
    const currentValue = this.value
    const partialValue =
      updater instanceof Function ? updater(currentValue) : updater

    if (partialValue === null) {
      this.value = {} as T
    } else {
      this.value = {...currentValue, ...partialValue}
    }
    if (doNotify && this.listeners.length > 0) {
      this.notify()
    }
  }

  subscribe(listener: Subscription<T>) {
    this.listeners.push(listener)
    return () => this.unsubscribe(listener)
  }

  unsubscribe(listener: Subscription<T>) {
    const index = this.listeners.indexOf(listener)
    // console.log("Observable", listener, index)
    if (index > -1) {
      this.listeners.splice(index, 1)
    }
  }
}

export abstract class Computed<T> extends Observable<T> {
  protected constructor(value: Function, deps: Array<any>) {
    super(value())
    const listener = () => {
      this.value = value()
      this.notify()
    }
    deps.forEach((dep) => dep.subscribe(listener))
  }
}
