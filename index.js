var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");
var budget_for_1_day;

console.log(money, time, budget_for_1_day);

var appData = {
    budget: money,
    timeData: time,
    expenses: {
        answer_on_first_question: answer_on_second_question
    },
    optionalExpenses: {},
    income: [],
    savings: false
}

console.log(appData.budget, appData.timeData, appData.expenses.answer_on_first_question, appData.expenses.optionalExpenses, appData.income, appData.savings);

var answer_on_first_question = prompt("Введите обязательную статью расходов в этом месяце");
appData.expenses = answer_on_first_question;
console.log(appData.expenses);

var answer_on_second_question = prompt("Во сколько обойдется?");
appData.expenses.answer_on_first_question = answer_on_second_question;
console.log(appData.expenses.answer_on_first_question);

budget_for_1_day = money / 30;
console.log(budget_for_1_day);

alert("Ваш бюджет на 1 день: " + budget_for_1_day);