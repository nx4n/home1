'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    theCash : money,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false,
    theTime : time,
};

for (let i = 0; i < 2; i++) {
    let q1 = prompt('Введите обязательный расход в этом месяце', ''),
        q2 = +prompt('Во сколько обойдется?', '');

    if ( (typeof(q1)) === 'string' && (typeof(q1)) != null && (typeof(q2)) != null
        && q1 != '' && q2 != '' && q1.length < 50) {
        
        console.log('done');
        appData.expenses[q1] = q2;
    } else {
        alert('Введите данные снова!');
        i--;
    }
};

appData.moneyPerDay = +(appData.theCash / 30).toFixed(2);

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка.');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
     console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Ошибка.');
}