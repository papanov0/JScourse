
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
} 

let money; 

let income = 'фриланс';

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'газ, свет, вотда');

let deposit = confirm('Есть ли у вас депозит в банке?', 'false');

// let expenses1 = prompt('Введите обязательную статью расходов?', 'газ, свет, вотда');

// let expenses2 = prompt('Введите обязательную статью расходов?', 'газ, свет, вотда');

// let amount1 = prompt('Во сколько это обойдется?', '10000');

// let amount2 = prompt('Во сколько это обойдется?', '15000');

let mission = 10000000;

let period = 6;

let start = function () {   
    do {
        money = prompt('Ваш месячный доход?', '30000');
    } 
    while (!isNumber(money)) 
}

start();

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

let expenses1, expenses2;

// 1 задание
const getExpensesMonth = function() {
    let sum = 0;

    for (let i =0; i<2; i++) {
        if (i===0) {
            expenses1 = prompt('Введите обязательную статью расходов?', 'газ, свет, вотда');
        } else if(i===1) {
            expenses2 = prompt('Введите обязательную статью расходов?', 'газ, свет, вотда');
        }

        do {
            sum += +prompt('Во сколько это обойдется?');
        } 
        while (!isNumber(sum)) 
    }
    console.log(sum);

    return sum;
};

let ExpensesMonth = getExpensesMonth()


console.log('все расходы составляют: ' + ExpensesMonth);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split());

// 4 задание
const getTargetMonth = function(accumulatedMonth, mission){
    return mission / accumulatedMonth;
}

// 2 задание
const getAccumulatedMonth = function(money, ExpensesMonth) {
    return Number(money) - Number(ExpensesMonth);
};

// 3 задание
let accumulatedMonth = getAccumulatedMonth(money, ExpensesMonth);

let TargetMonth = getTargetMonth(accumulatedMonth, mission);




let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('бюджет на день: ' + budgetDay);


if (TargetMonth === Infinity || TargetMonth < 0) {
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







