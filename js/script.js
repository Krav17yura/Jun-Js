  'use strict';

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

 

    for(let i = 1; i <= 2; i++){
      let  a = prompt("Введите обязательную статью расходов в этом месяце"),
           b = +prompt("Во сколько обойдется");

           if( typeof(a) === 'string' && typeof(a) !== null && a != '' && 
               typeof(b) !== null && b != '' && a.length < 50  && isNaN(b)){
               console.log("done");
               appData.expenses[a] = b;
           }else{
               console.log("error");
               i = i-1;
           
           }
    }

    appData.moneyPerDay = appData.budget/30;
    alert("Ваш ежидневный бюджет : " + appData.moneyPerDay);
 
   if (appData.moneyPerDay < 100){
       console.log("У вас низкий доход");
   }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
       console.log("У вас средний доход");
   }else if (appData.moneyPerDay > 2000){
       console.log("У вас высокий доход");
   }else{
       console.log("errorrrrrrr");
   }

 