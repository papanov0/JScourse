
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
} 

let money;

let start = function () {   
    do {
        money = prompt('Ваш месячный доход?', '30000');
    } 
    while (!isNumber(money)) 
}

start();

let appData = {
    sum: {},
    expens: {},
    budget: money,
    income: {},
    addIncome: [],
    addExpenses: [],
    deposit: false,
    mission: 50000,
    budgetMonth: 0,
    expensesMonth: 0,
    
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'газ, свет');
        appData.addExpenses = addExpenses.toLowerCase().split();
        appData.deposit = confirm('Есть ли у вас депозит в банке?', 'false');
        for (let i = 0; i<2; i++) {
            appData.expens[i] = prompt('Введите обязательную статью расходов?', 'газ');
                do {
                    appData.sum[i] = prompt('Во сколько это обойдется?');
                    
                } 
                while (!isNumber(appData.sum[i])) 

            appData.expenses[appData.expens[i]] = Number(appData.sum[i]);
        };
        for (let prop in appData.expenses) {
            appData.expensesMonth += appData.expenses[prop];
          }
        

    },
    expenses: {

    },
    getTargetMonth: function(){
        return appData.mission / appData.getBudget;
    },
    getBudget: function() {
        return Number(appData.budget) - Number(appData.expensesMonth);
    },
    
    period: function() {
        return Number(appData.mission) / Number(appData.getBudget);
    },

    budgetDay: function() {
        return Math.floor(appData.getBudget() / 30);
    },

};

appData.asking();

console.log('все расходы составляют: ' + Number(appData.expensesMonth));



if (appData.getTargetMonth === Infinity || appData.getTargetMonth < 0) {
    console.log('Братан, менять тебе че-то надо в этой жизни, так не достигнешь цели!');
} 
else {
    console.log(Math.ceil(Number(appData.mission) / Number(appData.getBudget())) + ' месяцев потребуется, чтобы достичь цель!');
};



if (appData.budgetDay()  >= 1200) {
    console.log('У вас высокий уровень дохода');
}
else if (appData.budgetDay() >= 600 && appData.budgetDay() <1200) {
    console.log('У вас средний уровень дохода');
} 
else if (appData.budgetDay() < 600 && appData.budgetDay() >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
}
else {
    console.log('Что то пошло не так');
};



    do {
        console.log('Наша программа включает в себя данные: ')
    }
    while (i = 5 < 3) 
    for (var key in appData) {
    console.log( "Свойство: " + key + ", значение: " + appData[key] );
  };

















