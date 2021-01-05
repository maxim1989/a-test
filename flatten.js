/*
Написать метод flatten
flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']
*/

function flatten_1(...rest) {
    const result = [];

    for (let i = 0; i < rest.length; i++) {
        const item = rest[i];

        if (Array.isArray(item)) {
            result.push(...flatten_1(...item));
        } else {
            result.push(item);
        }
    }

    return result;
}

console.log('>>> flatten_1()', flatten_1());
console.log('>>> flatten_1(1, [2, 3], 4, 5, [6, [7]])', flatten_1(1, [2, 3], 4, 5, [6, [7]]));
console.log('>>> flatten_1(\'a\', [\'b\', 2], 3, null, [[4], [\'c\']])', flatten_1('a', ['b', 2], 3, null, [[4], ['c']]));
console.log('>>> flatten_1(undefined)', flatten_1(undefined));
console.log('>>> flatten_1([[[]]])', flatten_1([[[]]]));
console.log('>>> flatten_1([[[0]]])', flatten_1([[[0]]]));


function flatten_2(...rest) {
    const queue = [...rest];
    const result = [];

    while (queue.length) {
        const item = queue.shift();

        if (Array.isArray(item)) {
            queue.unshift(...item);
        } else {
            result.push(item);
        }
    }

    return result;
}


console.log('>>> flatten_2()', flatten_2());
console.log('>>> flatten_2(1, [2, 3], 4, 5, [6, [7]])', flatten_2(1, [2, 3], 4, 5, [6, [7]]));
console.log('>>> flatten_2(\'a\', [\'b\', 2], 3, null, [[4], [\'c\']])', flatten_2('a', ['b', 2], 3, null, [[4], ['c']]));
console.log('>>> flatten_2(undefined)', flatten_2(undefined));
console.log('>>> flatten_2([[[]]])', flatten_2([[[]]]));
console.log('>>> flatten_2([[[0]]])', flatten_2([[[0]]]));