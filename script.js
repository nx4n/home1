'use strict';

let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    theCash : money,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false,
    theTime : time,
};
    
let q1 = prompt('Введите обязательный расход в этом месяце', ''),
    q2 = prompt('Во сколько обойдется?', ''),
    q3 = prompt('Введите еще один обязательный расход в этом месяце', ''),
    q4 = prompt('Во сколько обойдется?', '');

appData.expenses[q1] = q2;
appData.expenses[q3] = q4;

alert(appData.theCash / 30);