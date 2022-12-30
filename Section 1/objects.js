const userdata = {
    name: "Ashu",
    email: "ashu@mail.com",
    password: '9211',
    address: 'Varanasi'
}

// console.log(userdata);
// console.log(userdata.name);
// console.log(userdata['password']);

userdata.password = 'tullu'
// console.log(userdata);

userdata.age = 25
// console.log(userdata);

// console.log('Keys are ',Object.keys(userdata));
// console.log('Values are ',Object.values(userdata));


const phones = [
    {brand: 'Apple', model: 'iphone 13', price: 78000},
    {brand: 'Vivo', model: 'S1', price: 15000},
    {brand: 'Oneplus', model: '10 Pro', price: 55000},
    {brand: 'Xiaomi', model: '11 Pro', price: 35000}
];

// console.log(phones);
// console.log(phones[0]);
console.log(phones[0].model);
console.log(phones[0].price - 10000);

const laptop = {
    brand: 'Asus',
    model: 'Tuf',
    price: 70000,
    colors: ['red','gray','black','blue']
}

console.log(laptop.colors[3]);
laptop.colors.unshift('white');

console.log(laptop);
    

