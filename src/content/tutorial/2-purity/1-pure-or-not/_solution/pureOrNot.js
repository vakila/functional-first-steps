// This function is IMPURE
// Because it depends on the current time, so it will always return a different output given the same input.
function getTime() {
    return new Date().toLocaleTimeString();
}


// This function is PURE
// Because given the same input strings, it will always return the same output.
function compareDateStrings(s1, s2) {
    const d1 = Date(s1);
    const d2 = Date(s2);
    const delta = d2 - d1;
    return `${s1} is ${delta > 0 ? 'after' : 'before'} ${s2}`
}


// This function is PURE
// Because given the same input string, it will always return the same output.
const stringToJson = (jsonString) => {
    return JSON.parse(jsonString);
}


// This function is IMPURE
// Because it depends on an external file that might change between runs.
const fileToJson = (filename) => {
    const fs = require('fs');
    const fileData = fs.readFileSync(filename, 'utf8');
    return JSON.parse(fileData);
}


// This function is PURE
// Because it has no external dependencies or side effects.
function add(a, b) {
    return a + b;
};


// This function is IMPURE
// Because arrays in JS are mutable, so we can't be sure it will always return the same output when given the same array reference.
function sum(numArray) {
    let total = 0;
    for (let value of numArray) {
        total += value;
    }
    return total;
};


// This function is PURE
// Because it has no external dependencies or side effects.
const logicalXor = (A, B) => (A || B) && !(A && B);


// This function is PURE
// Because it has no external dependencies or side effects.
const truthTable = (logicalOperator) => {
    const values = [true, false];
    const table = [];
    for (const A of values) {
        for (const B of values) {
            table.push([A, B, logicalOperator(A, B)]);
        }
    }
    return table;
};


// This function is IMPURE
// Because it has side effects (logging to the console).
const xorTruthTable = () => {
    console.log('XOR truth table:\n================\n');
    const table = truthTable(logicalXor);
    console.log('\tA\t|\tB\t|\tA xor B');
    console.log('\t-----\t|\t-----\t|\t-----');
    table.map(
        ([A, B]) => console.log(`\t${A}\t|\t${B}\t|\t${logicalXor(A, B)}`)
    );
};


// Examples below adapted from
// https://github.com/mapbox/mapbox-sdk-js/blob/master/lib/helpers/url-utils.js

// This function is PURE
// Because it is deterministic and has no side effects.
function encodeString(stringValue) {
    return encodeURIComponent(stringValue);
}


// This function is IMPURE
// Because Arrays in JS are mutable, so it is not deterministic.
function encodeArray(arrayValue) {
    return arrayValue.map(encodeURIComponent).join(',');
}


// This function is IMPURE
// Because it calls another impure function, encodeArray.
function encodeValue(value) {
    if (Array.isArray(value)) {
        return encodeArray(value);
    }
    return encodeString(String(value));
}
