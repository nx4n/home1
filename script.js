"use strict";

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        alert("Укажите обязательную информацию!");
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    theCash : money,
    theTime : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true
};

function chooseExpenses() {
    for(let i = 0; i < 2; i++) {
        let qe1 = prompt('Введите обязательный расход в этом месяце', ''),
            qe2 = +prompt('Во сколько обойдется?', '');
    
        if ((typeof(qe1)) === 'string' && (typeof(qe1)) != null && 
            (typeof(qe2)) != null && qe1 != '' && qe2 != '' && qe1.length < 50){
            
                appData.expenses[qe1] = qe2;
        } else {
            alert('Введите данные снова!');
            i--;
        }
    }
}

chooseExpenses();


function chooseOptExpenses() {
    let j = 0;
    do {
        j++;
        let qoe1 = +prompt('Укажите номер желаемого необязательного расхода.', ''),
            qoe2 = prompt('Опишите его в двух словах.');

        if ((typeof(qoe1)) === 'number' && (typeof(qoe1)) != null && 
            qoe1 != '' && (typeof(qoe2)) != null &&
            qoe2 != '' && qoe2.length < 50) {

            appData.optionalExpenses[qoe1] = qoe2;
        } else {
            alert('Введите данные снова!');
            j--;
        }
    }while (j < 3);
}

chooseOptExpenses();


function detectDayBudget() {
    appData.moneyPerDay = +(appData.theCash / 30).toFixed(2);
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        alert('Минимальный уровень достатка.');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert('Средний уровень достатка.');
    } else if (appData.moneyPerDay > 2000) {
        alert('Высокий уровень достатка.');
    } else {
        alert('Ошибка.');
    }
}

detectLevel();

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');
           
        appData.monthInCome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthInCome);
    }
}

checkSavings();
console.log(appData);