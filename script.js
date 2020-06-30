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
    for (let i = 0; i < 2; i++) {
        let q1 = prompt('Введите обязательный расход в этом месяце', ''),
            q2 = +prompt('Во сколько обойдется?', '');
    
        if ( (typeof(q1)) === 'string' && (typeof(q1)) != null && 
            (typeof(q2)) != null && q1 != '' && q2 != '' && q1.length < 50) {
            
            console.log('done');
            appData.expenses[q1] = q2;
        } else {
            alert('Введите данные снова!');
            i--;
        }
    }
}

chooseExpenses();


appData.moneyPerDay = +(appData.theCash / 30).toFixed(2);
alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    alert('Минимальный уровень достатка.');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    alert('Средний уровень достатка.');
} else if (appData.moneyPerDay > 2000) {
    alert('Высокий уровень достатка.');
} else {
    alert('Ошибка.');
}

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');
           
        appData.monthInCome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthInCome);
    }
}

checkSavings();