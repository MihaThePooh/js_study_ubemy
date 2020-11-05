// Приложение по подсчету бюджета

let money, time;

function start () {
    money = Number(prompt("Ваш бюджет на месяц?", ""));
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) { // команда isNaN возвращает true в том случае когда в нее попадают не цифры
        money = Number(prompt("Ваш бюджет на месяц?", ""));
    }
}

start();   

// let i = 0; // раскоментировать чтобы использовать цикл while или do вместо for

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

/*
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?");

        if ( typeof(a === "string") && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            // console.log("sdfasf");
        }
        i++;
}
while (i < 2);
*/

/*
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?");

        if ( typeof(a === "string") && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            // console.log("sdfasf");
        }
        i++;
}
*/
    


function chooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = Number(prompt("Во сколько обойдется?"));
    
        if ( typeof(a === "string") && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            // console.log("sdfasf");
        }
    }
}

chooseExpenses();

// appData.moneyPerDay = (appData.budget / 30).toFixed(); // toFixed убирает цифры после запятой. и этот метот возвращает СТРОКОВОЕ значение, а не число

function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed(); // toFixed убирает цифры после запятой. и этот метот возвращает СТРОКОВОЕ значение, а не число

}

detectDayBudget();

alert("Ваш бюджет на 1 день: " + appData.moneyPerDay);

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000 ) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка");
    }
}

detectLevel();

function checkSavings () {
    if (appData.savings == true) {
        let save = Number(prompt("Какова сумма накоплений?")),
            percent = Number(prompt("Под какой процент?"));

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses () {
    for (i = 1; i < 4; i++) {
        appData.optionalExpenses[i] = prompt("Статья необязательных расходов?", "");
    }
}

