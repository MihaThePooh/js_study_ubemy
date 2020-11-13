// урок 14 ООП

// let solder = {
//     health: 400,
//     armor: 100
// };

// let john = {
//     health: 100
// };

// john.__proto__ = solder; // наследование свойств через прототип

// console.log(john);
// console.log(john.armor);












// урок 015 Breakpoints
/*
    чаще используй консоль разработчика и следи за выполнением кода построчно!
*/











// урок 016 Получение элементов со страницы
// CSS-селекторы самое удобное и частоиспользуемое
/*
    если мы используем селектор, то обязательно нужно указывать правильно:
    классы через ".", айди через "#", атрибут - "[ ]"

*/

let box = document.getElementById('box'), // тут мы получаем один элемент по уникальному id, 
    // такой id должен быть уникальным на всей странице!
    btn = document.getElementsByTagName('button'), // тут мы получаем коллекцию (псевдо-массив)
    // псевдо-массив это обычный массив, только у него нет функций push, pop и так далее.
    // у обычных массивов эти методы есть
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'), // query селектор поддерживает вложенность и можно
    // указывать вот так: document.querySelectorAll('.wrapper .content .heart')
    // используя query селектор, мы получаем псевдо-массив, который имеет один метод forEach, т.е.
    // полученную коллекцию можно перебрать (каждый элемент один за другим) и видоизменять их
    oneHeart = document.querySelector('.heart'); // это тоже query селектор,
    // только он выдает первый попавшийся на странице элемент
/*
console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle);
console.log(circle[2]);
console.log(heart);
console.log(oneHeart); // в консоль выйдет самый первый элемент с классом .heart
*/

box.style.backgroundColor = 'blue'; // присваивание нового стиля
btn[1].style.borderRadius = '100%'; // выбираем вторую кнопку из всех кнопок и закругляем углы

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
}

heart.forEach(function(item, i, hearts) {
    item.style.backgroundColor = 'green';
});
/*
    item - это любое название для каждого элемента из обрабатываемого массива heart
    i - это итератор (счетчик) классический. если он нужен в этой функции, то пиши, если он
    не нужен, никаких задач не решает, то можно не указывать его вообще в аргументах
    hearts - это как бы псевдоним нашего обрабатываемого массива heart. он как бы 
    объявлен внутри этой же функции, чтобы понимать что где, чтобы было с чем работать
*/


























// создаем элемент на лету

let div = document.createElement('div'), // создаем пустой тэг див
    text = document.createTextNode('Here I am'); // создаем текстовую ноду (просто текст)
console.log(div);
console.log(text);


div.classList.add('black'); // программно добавляем class="black" нашему диву
// конкретно в этом случае класс black уже прописан в файле css (это черный прямоугольник)
console.log(div);


document.body.appendChild(div); // добавляем наш див в конец тега body нашего html-документа
document.body.insertBefore(div, heart[1]);
document.body.removeChild(circle[1]); // удаляем элемент.
// ОБРАЩАТСЯ НУЖНО К РОДИТЕЛЬСКОМУ ТЭГУ!!!!!
document.body.replaceChild(btn[1], circle[1]); // заменяем один элемент на другой
// поставить btn на место circle
div.innerHTML = 'Hello World!'; // добавляем обычный текст в наш div
div.innerHTML = '<h4>Hello World!</h4>'; // можно так добавлять даже тэги в наш div (ЭТО НЕ БЕЗОПАСНЫЙ МЕТОД ДОБАВЛЕНИЯ ТЕКСТА!!!!!!)
div.textContent = 'HeY!!!'; // это добавление текста БЕЗОПАСТНЫМ методом


/*
    чтобы вставить какой-то созданный на лету элемент не в body, а в другой родительский элемент, нужно
    прописать, например: 
    let wrapper = document.querySelectorAll('.wrapper'); - берем родителя со страницы нашего документа
    wrapper.appendChild(div); - вставляем нашего ребенка div в КОНЕЦ родителя wrapper
    wrapper.insertBefore(div, heart[1]); - тут мы вставляем наш элемент в определенное место
    первый аргумент div - это то, ЧТО мы вставляем, второй аргумент - КУДА. в данном случае
    мы вставляем перед вторым сердечком. если второй параметр не указать вообще, то наш div встанет
    в самом начале родителя
*/


