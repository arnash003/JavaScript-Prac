function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    let clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}

// Usage example
const original = { a: 1, b: { c: 2 } };
const copied = deepClone(original);
console.log(copied); // { a: 1, b: { c: 2 } }
