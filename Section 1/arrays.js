let marks = [45,78,35,96,47]
let fruits = ['banana', 'apple', 'lichi', 'mango', 'kiwi']

// accessing array elements -------> indexing

// console.log(fruits[2]);

// console.log(fruits.at(-2));

// getting number of element
// console.log(fruits.length);

// console.log(fruits[fruits.length - 2]);


// slicing
// console.log(fruits.slice(1,4));
// console.log(fruits.slice(1,10));
// console.log(fruits.slice(2));                      starts from index 2


// add to end
fruits.push('papaya')

// add to start
fruits.unshift('berry')

console.log(fruits);


// array destructuring     -------->       new in ES6
fruits = ['tomato', ...fruits, 'guava', 'strawberry']
console.log(fruits);


//remove from end
fruits.pop()

//remove from start
fruits.shift()

console.log(fruits);

//remove more than one element
fruits.splice(3,2);             // splice(start_index, number of elements)
console.log(fruits);