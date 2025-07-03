class HashTable {
  data: number[];
  constructor(size) {
    this.data = new Array(size);
  }

  get(key) {
    const index: number = this._hash(key);
    return this.data[index];
  }

  set(key: string, value: any) {
    const index: number = this._hash(key);
    this.data[index] = value;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
console.log(myHashTable.get("grapes"));
myHashTable.set("apples", 9);
console.log(myHashTable.get("apples"));
