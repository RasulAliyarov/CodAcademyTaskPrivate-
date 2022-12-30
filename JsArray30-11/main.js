// 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return
//  the first 'n' elements of the array. (must use filter() or forEach() or map() or slice() functions)

const internal = require("stream")
const { isNumberObject } = require("util/types")

let numbersArray = [1, 73, 99, 20]
let result = numbersArray.slice(0, 1)
console.log(result)

// 2. Write a simple JavaScript program to join all elements of the following array into a string.

let joinmark = numbersArray.join("+")
console.log(joinmark)

// 3. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example,
//  if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

let sentence = "The Quick Brown Fox"
function uppercase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toLowerCase() + array1[x].slice(1).toUpperCase());
    }
    return newarray1.join(' ');
}
console.log(uppercase(sentence));

// 4. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, 
// zero, null.  (must use filter() function)
// console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]

let garbageArray = [0, 1, false, 2, undefined, '', 3, null]

let clear = garbageArray.filter(item => item != String() && item != null)
console.log(clear)


// 5. Write a method that returns a duplicate-free array.
// console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]
let massive = ['a', 2, 'd', 2, 'a', 14, 14, 's', false]

function removeDub(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}

console.log(removeDub(massive))


// 6. Write a function that compares two arrays and returns true if they are identical.
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true

let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3, 4]
let arr3 = [1, 2, 3, 4, 5, 6, 7]
let arr4 = [1, 2, 3, 4, 32, 43, 54]

function compares(arr, arrsec) {
    // arr.concat(arrsec)
    if (arr.toString() == arrsec.toString()) {
        return true
    }
    else {
        return false
    }
}

console.log(compares(arr2, arr3))