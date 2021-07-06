"use strict";
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
} 

let notNumber = function(n) {
    return isNaN(n) && !isFinite(n);
};


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
    persrntDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    budgetMonth: 0,
    expensesMonth: 0,
    
    asking: function() {
        let cashIncome
        let itemIncome
        if(confirm('Есть ли у вас дополнительный заработок?')) {

            do {
                itemIncome = prompt('Какой у вас дополнительный заработок?' , 'таксую');
                
            } 
            while (!notNumber(itemIncome)) 
            

            
            do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
                
            } 
            while (!isNumber(cashIncome)) 

            appData.income[itemIncome] = cashIncome;
        }




        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'газ свет');
        appData.addExpenses = addExpenses.toLowerCase().split(" ");
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i<2; i++) {
            do {
                appData.expens[i] = prompt('Введите обязательную статью расходов?', 'газ');
                
            } 
            while (!notNumber(appData.expens[i]));
            
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
    getInfoDeposit: function(){
        if(appData.deposit){
            do {
                appData.persrntDeposit = prompt('Какой годовой процент?', '10');
                
            } 
            while (!isNumber(appData.persrntDeposit));

            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', '10000');
                
            } 
            while (!isNumber(appData.moneyDeposit));
            
            
        }
    },
    calcSavedMoney: function(){
        appData.budgetMonth * appData.period;
    }

};

appData.asking();

function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  

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
let i


let appStore = {};

for (i = 0; i< appData.addExpenses.length; i++  ) {
    appStore[i] = ucFirst(appData.addExpenses[i])
    
};

let s = "";
for( i = 0; i< appData.addExpenses.length; i += 1) {
  s += appStore[i] + ", ";
}
console.log(s);


    do {
        console.log('Наша программа включает в себя данные: ')
    }
    while (i = 5 < 3) 
    for (var key in appData) {
    console.log( "Свойство: " + key + ", значение: " + appData[key] );
  };

  

















