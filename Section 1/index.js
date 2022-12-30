// To run ----> node <filename> in cmd

console.log("Hello JS");

num = 45215

console.log(num)

n = true

console.log(n);
console.log(typeof(n));

s = 'Hello'

console.log(s);



// program to add two numbers

a = 34
b = 43
c = a + b

console.log(c);

// swap two numbers without using third variable

// n1 = 3
// n2 = 4

// n1 = n1 + n2
// n2 = n1 - n2
// n1 = n1 - n2

// console.log(n1, n2)

[x, y] = [3, 4]              //new in ES6

console.log(y);
// [x, y] = [y, x]

// console.log(x,y)




if(x < 4){
    console.log("correct");
    myvar = 'it should be global'
    // let myVar = "it should be local"
    const pi = 3.141;
    // console.log(pi);
    var n = 'it works only in function'
}

else{
    console.log("Not Correct");
}

console.log(myvar);
// console.log(myVar);
// console.log(pi);
console.log(n);