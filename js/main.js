let money = prompt('Ваш месячный доход?', '30000'); 

let income = 'фриланс';

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'газ, свет, вотда');

let deposit = confirm('Есть ли у вас депозит в банке?', 'false');

let expenses1 = prompt('Введите обязательную статью расходов?', 'газ, свет, вотда');

let expenses2 = prompt('Введите обязательную статью расходов?', 'газ, свет, вотда');

let amount1 = prompt('Во сколько это обойдется?', '10000');

let amount2 = prompt('Во сколько это обойдется?', '15000');

let mission = 10000000;

let period = 6;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

// 1 задание
const getExpensesMonth = function(amount1, amount2) {
    return Number(amount1) + Number(amount2);
};

let sumExpenses = getExpensesMonth(amount1, amount2);
console.log('все расходы составляют: ' + sumExpenses);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split());

// 4 задание
const getTargetMonth = function(accumulatedMonth, mission){
    return mission / accumulatedMonth;
}

// 2 задание
const getAccumulatedMonth = function(money, sumExpenses) {
    return Number(money) - Number(sumExpenses);
};

// 3 задание
let accumulatedMonth = getAccumulatedMonth(money, sumExpenses);

let TargetMonth = getTargetMonth(accumulatedMonth, mission);
console.log('Cрок достижения цели в месяцах: ' + TargetMonth);

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('бюджет на день: ' + budgetDay);


if (mission / accumulatedMonth === Infinity) {
    console.log('Братан, менять тебе че-то надо в этой жизни, так не достигнешь цели!');
} 
else {
    console.log(Math.ceil(mission / accumulatedMonth) + ' месяцев');
};



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
};







