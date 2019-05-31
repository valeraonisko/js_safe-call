'use strict';

function safeCall(f) {
    try {
      f();  
      return true;
    } catch(e) {
      return false;
    }
}

console.log(safeCall(() => console.log('Hello!'))); // true
console.log(safeCall(() => JSON.parse('abc'))); // false
console.log(safeCall(() => false)); // true
console.log(safeCall(() => abc)); // false
