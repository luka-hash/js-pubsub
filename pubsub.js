export default class PubSub {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(callbackfn) {
    if (typeof callbackfn !== 'function') {
      throw new TypeError('callbackfn must be a function');
    }
    this.subscribers.add(callbackfn);
    return () => this.subscribers.delete(callbackfn);
  }

  publish(message) {
    this.subscribers.forEach((callbackfn) => callbackfn(message));
  }
}
