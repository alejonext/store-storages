import { Storage, BasicStorage } from "./storage";
/**
 * Stores intenal to externals
 * @param  {Storage}  store  Storage where are your data!
 * @param  {meta}     string Name of the where metadata
 * @retrun {Function}
 */
export function Stores(store: Storage = new BasicStorage(), meta:string = 'Metadata') {
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
		if (!target[meta]) {
			target[meta] = {};
		}

		Object.defineProperty(target[meta], propertyKey, {
			get: function () {
				return JSON.parse(store.getItem(propertyKey));
			},
			set: function (val) {
				store.setItem(propertyKey, JSON.stringify(val));
			},
			enumerable: false,
			configurable: true,
		});

		if (descriptor && descriptor.set && descriptor.get) {
			let set = descriptor.set;
			let get = descriptor.get;

			descriptor.set = function (value: any): void {
				target[meta][propertyKey] = value;
				set.call(target, value);
			};

			descriptor.get = function (): any {
				set.call(target, target[meta][propertyKey]);
				return get.call(target);
			};
		} else {
			Object.defineProperty(
				target,
				propertyKey,
				Object.getOwnPropertyDescriptor(target[meta], propertyKey)
			);
		}
	};
}
