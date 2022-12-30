const languages = ['javascript', 'java','python', 'c', 'c++', 'c#', 'dart'];

// way 1

console.log('------- Traditional Loop -------');

for(let i = 0; i < languages.length; i++){
    console.log(languages[i]);
}

// way 2

console.log('------- For of Loop -------');

for(let lang of languages){
    console.log(lang);
}

// way 3

console.log('------- For each Function -------');

languages.forEach((lang) => {
    console.log(lang);
})