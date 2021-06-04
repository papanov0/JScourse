let money = prompt('Ваш месячный доход?', '30000'); 

let income = 'фриланс';

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'газ, свет, вотда');

let deposit = prompt('Есть ли у вас депозит в банке?', 'false');

let expenses1 = prompt('Введите обязательную статью расходов?', 'газ, свет, вотда');

let expenses2 = prompt('Введите обязательную статью расходов?', 'газ, свет, вотда');

let amount1 = prompt('Во сколько это обойдется?', '10000');

let amount2 = prompt('Во сколько это обойдется?', '15000');

let budgetMonth = money - amount1 - amount2;


let mission = 10000000;

let period = 6;


console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split());

let budgetDay = Math.floor(budgetMonth / 30);
console.log('бюджет на день: ' + budgetDay);

console.log('бюджет на месяц: ' + budgetMonth);

console.log(Math.ceil(mission / budgetMonth) + ' месяцев');


if (budgetDay  >= 1200) {
    console.log('У вас высокий уровень дохода');
}
else if (budgetDay >= 600 && budgetDay <1200) {
    console.log('У вас средний уровень дохода');
} 
else if (budgetDay < 600 && budgetDay >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
}
else {
    console.log('Что то пошло не так');
}