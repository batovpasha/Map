'use strict';

const MapByArrays = class {
  constructor() {
    this.keys = [];
    this.values = [];
    this.diff = 1;
  }
  set(key, value) {
    this.keys.push(key);
    this.values.push(value);
  }
  get(key) {
    if (typeof(this.keys[this.keys.indexOf(key)]) === 'undefined') {
      return 'this key not find';
    }
    return this.values[this.keys.indexOf(key)];
  }
  has(key) {
    return this.keys.includes(key);
  }
  delete(key) {
    this.keys.splice(this.keys.indexOf(key), 1);
    this.values.splice(this.keys.indexOf(key) + this.diff, 1);
    this.diff++;
  }
  get size() {
    return this.keys.length;
  }
  clear() {
    this.keys = [];
    this.values = [];
  }
  entries() {
    this.entriesArr = [];
    for (const i in this.keys) {
      this.entriesArr.push([this.keys[i], this.values[i]]);
    }
    return this.entriesArr;
  }
  keys() {
    return this.keys;
  }
  values() {
    return this.values;
  }
};

MapByArrays.prototype[Symbol.iterator] = function* () {  // iterable function
  yield* this.values;
};

const cityPopulation = new MapByArrays();

cityPopulation.set('Shanghai', 24256800);
cityPopulation.set('Beijing',  21516000);
cityPopulation.set('Delhi',    16787941);
cityPopulation.set('Lagos',    16060303);

cityPopulation.delete('Shanghai');

if (cityPopulation.has('Beijing')) {
  console.log('Beijing:', cityPopulation.get('Beijing'));
}

if (!cityPopulation.has('Shanghai')) {
  console.log('no data for Shanghai');
}

console.log('size:', cityPopulation.size);
console.log('keys:', cityPopulation.keys);

console.log([...cityPopulation]);
