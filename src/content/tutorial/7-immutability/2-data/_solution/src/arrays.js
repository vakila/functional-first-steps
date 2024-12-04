import { produce } from 'immer';


// instead of myArray.push(element)
export function push(element, array) {
    return produce(array, draft => {
        draft.push(element);
    });
}


// instead of myArray[index] = value
export function update(index, value, array) {
    return produce(array, draft => {
        draft[index] = value;
    })
}

// instead of myArray.pop();
export function pop(array) {
    return produce(array, draft => {
        draft.pop();
    })
}