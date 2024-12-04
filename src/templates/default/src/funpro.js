export function filter(predicateFn, array) {
    if (length(array) === 0) return [];
    const firstItem = head(array);
    const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
    return concat(filteredFirst, filter(predicateFn, tail(array)));
}

export function map(fn, array) {
    if (length(array) === 0) return [];
    return [fn(head(array))].concat(map(fn, tail(array)));
}

export function reduce(reducerFn, initialValue, array) {
    if (length(array) === 0) return initialValue;
    const newInitialValue = reducerFn(initialValue, head(array));
    return reduce(reducerFn, newInitialValue, tail(array));
}

export function sum(array) {
    return reduce(
        (accumulator, value) => accumulator + value,
        0,
        array
    )
}

export function max(array) {
    return reduce(
        ((acc, val) => val > acc
            ? val
            : acc === undefined
                ? val
                : acc),
        undefined,
        array
    )
}

export function pipe(...fns) {
    //// Base cases

    // If we have zero functions, this is a no-op; return the identity fn
    if (length(fns) === 0) return input => input;

    // If we have only 1 fn, the pipeline is equivalent to just that fn
    if (length(fns) === 1) return head(fns);

    //// Recursive case
    // If we have multiple functions, return a function that
    // calls the first fn on the input and passes the result 
    // as input to another pipeline of the remaining fns
    return (input) => pipe(...tail(fns))(head(fns)(input));

}



//// Array helpers

// The functions below let us work with JavaScript arrays using a more functional API (e.g. length(array)), instead of the usual object-oriented method-calling API (e.g. array.length).`

// Concatenate two arrays into a new single array
export function concat(array1, array2) {
    return array1.concat(array2);
}

// Return the number of items in an array
export function length(array) {
    return array.length;
}

// Return the first item in an array
export function head(array) {
    return array[0];
}

// Return the rest of an array after the first item
export function tail(array) {
    return array.slice(1);
}