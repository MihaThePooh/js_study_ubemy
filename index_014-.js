// урок 14 ООП
/*

*/
let solder = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = solder; // наследование свойств через прототип

console.log(john);
console.log(john.armor);