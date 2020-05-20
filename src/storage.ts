/**
 * Interface the all Storages
 */
export interface Storage {
	clear(): void;
	getItem(key: string): string;
	setItem(key: string, data: string): void;
	removeItem(key: string): void;
	key(key: number): string;
}

/**
 * BasicStorage
 *   This is a basicStorage to Storage
 *
 * Example:
 *  window.temporal = new BasicStorage();
 *  window.temporal.setItem('MyData', 'Data');
 *  window.temporal.getItem('MyData');
 *  window.temporal.removeItem('MyData');
 *  window.temporal.clear();
 *
 */
export class BasicStorage implements Storage {
	private data = {};
	/**
	 * Clear data
	 */
	clear() {
		this.data = {};
	}
	/**
	 * Get a Item
	 * @param  {string} key Key of the item
	 * @return {any}        Data
	 */
	getItem(key: string): string {
		return this.data[key];
	}
	/**
	 * Set item
	 * @param {string} key  Key of the item
	 * @param {any}    data Data save
	 */
	setItem(key: string, data: string) {
		this.data[key] = data;
	}
	/**
	 * Remove Item
	 * @param {string} key Key of the item
	 */
	removeItem(key: string) {
		delete this.data[key];
	}
	/**
	 * Key
	 * @param  {number} key Number
	 * @return {string}     Name of key
	 */
	key(key: number): string {
		return Object.keys(this.data)[key];
	}
	/**
	 * Length of the Store
	 */
	get length() {
		return Object.values(this.data).length;
	}
}
