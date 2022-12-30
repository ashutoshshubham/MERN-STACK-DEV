// function definition

// function addNums(){
//     let [a, b] = [34, 73]
//     var c = a + b

//     console.log(c);
// }


// function calling

// addNums()
// console.log(c);





// function addNums2(x, y, z){
//     let c = x + y + z
//     console.log(x, y, z);
//     console.log(c);
// }


// addNums2(13, 23, 34, 100)
// addNums2(13, 23, 34)
// addNums2(12, 23)
// addNums2(12)
// addNums2()





// function average(n1, n2, n3, n4, n5){
//     let avg = (n1 + n2 + n3 + n4 + n5) / 5
//     console.log(avg);
// }

// average(5, 4, 3, 2, 2)







// const average = function(n1, n2, n3, n4, n5){
//     let avg = (n1 + n2 + n3 + n4 + n5) / 5
//     console.log(avg);
// }

// average(5, 4, 3, 2, 2)




// arrow function     ------->    new in ES6
// const giveGrade = (marks) => {
//     if (marks >= 90 && marks <= 100){
//         console.log('Grade A');
//     }
//     else if (marks >= 70 && marks < 90){
//         console.log('Grade B');
//     }
//     else if (marks >= 50 && marks < 70){
//         console.log('Grade C');
//     }
//     else if (marks >= 0 && marks < 50){
//         console.log('Fail');
//     }
//     else {
//         console.log('Invalid Marks');
//     }

// }

// giveGrade('tulllu')



const fact = (a) => {
    let f = 1
    for(let i = 2; i <= a; i++){
        f = f * i;
    }
    console.log(f);
    return f;
}

let ans = fact(5);
console.log(ans);





