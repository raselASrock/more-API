const user = {id: 1, name: `Gorid Amir`, job: `actor`};
// JavaScript Object Notation(JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: `Alia`,
    address: {
        street: `Khilkhet Boi Goli`,
        city: `Kolkata`,
        country: `India Bharat`,
    },
    products: [`Laptop`, `Mobile`, `Tablet`, `Monitor`, `KeyBoard`],
    revenue: 45000,
    isOpen: true,
    isNew: false, 
}

// console.log(shop);
const shopJSON = JSON.stringify(shop);
// console.log(shopJSON);
const shopOBJ = JSON.parse(shopJSON);
// console.log(shopOBJ);

const type1 =  typeof(shopJSON);
const type2 =  typeof(shopOBJ);
console.log(type1 , type2);