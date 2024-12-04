// This function is TODO
// Because TODO
function getDate() {
    return new Date().toDateString();
}


// This function is TODO
// Because TODO
function compareDateStrings(s1, s2) {
    const d1 = Date(s1);
    const d2 = Date(s2);
    const delta = d2 - d1;
    return `${s1} is ${delta > 0 ? 'after' : 'before'} ${s2}`
}


// This function is TODO
// Because TODO
const stringToJson = (jsonString) => {
    return JSON.parse(jsonString);
}


// This function is TODO
// Because TODO
const fileToJson = (filename) => {
    const fs = require('fs');
    const fileData = fs.readFileSync(filename, 'utf8');
    return JSON.parse(fileData);
}


// This function is TODO
// Because TODO
function add(a, b) {
    return a + b;
};


// This function is TODO
// Because TODO
function sum(numArray) {
    let total = 0;
    for (let value of numArray) {
        total += value;
    }
    return total;
};


// This function is TODO
// Because TODO
const logicalXor = (A, B) => (A || B) && !(A && B);


// This function is TODO
// Because TODO
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


// This function is TODO
// Because TODO
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

// This function is TODO
// Because TODO
function encodeString(stringValue) {
    return encodeURIComponent(stringValue);
}


// This function is TODO
// Because TODO
function encodeArray(arrayValue) {
    return arrayValue.map(encodeURIComponent).join(',');
}


// This function is TODO
// Because TODO
function encodeValue(value) {
    if (Array.isArray(value)) {
        return encodeArray(value);
    }
    return encodeString(String(value));
}
