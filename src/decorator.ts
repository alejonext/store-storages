import { Storage, TemporalStorage } from "./storage";
/**
 * Stores intenal to externals
 *
 * @param  {nameKey}   string  Name of the key
 * @param  {Storage}    store  Storage where are your data!
 * @retrun {Function}
 */
export function Stores(metaString:string, store: Storage = new TemporalStorage()) {
  /**
   * Decorator
   * @param {any}                target      Target class
   * @param {string}             propertyKey Name of the storage
   * @param {PropertyDescriptor} descriptor  Element save
   */
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    let metaKey = metaString || propertyKey;

    if (!target[store.constructor.name]) {
      target[store.constructor.name] = {};
    }

    Object.defineProperty(target[store.constructor.name], metaKey, {
      get: function () {
        return JSON.parse(store.getItem(metaKey));
      },
      set: function (val) {
        store.setItem(metaKey, JSON.stringify(val));
      },
      enumerable: false,
      configurable: true,
    });

    if (descriptor?.set && descriptor?.get) {
      let set = descriptor.set;
      let get = descriptor.get;

      descriptor.set = function (value: any): void {
        target[store.constructor.name][metaKey] = value;
        set.call(target, value);
      };

      descriptor.get = function (): any {
        set.call(target, target[store.constructor.name][metaKey]);
        return get.call(target);
      };
    } else {
      Object.defineProperty(
        target,
        propertyKey,
        Object.getOwnPropertyDescriptor(target[store.constructor.name], metaKey)
      );
    }
  };
}
