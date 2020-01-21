  'use strict';
let money,
    time;

    function Start() {

        money = +prompt("Ваш бюджет на месяц?");
        time = prompt("Введите дату в формате YYYY-MM-DD");

        while(isNaN(money) || money == "" || money == null){
            money = +prompt("Ваш бюджет на месяц?");
        }
}

Start();
 
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

 

    function chooseExpenses() {

        for(let i = 1; i <= 2; i++){
            let  a = prompt("Введите обязательную статью расходов в этом месяце"),
                 b = +prompt("Во сколько обойдется");
      
                 if( typeof(a) === 'string' && typeof(a) != null && a != '' && 
                     typeof(b) != null && b != '' && a.length < 50) {
                     console.log("done");
                     appData.expenses[a] = b;
                 }else{
                     console.log("error");
                     i = i-1;
                 
                 }
          }
    }

    chooseExpenses();

        function detectDayBudget() {

        appData.moneyPerDay = (appData.budget/30).toFixed(1);
        alert("Ваш ежидневный бюджет : " + appData.moneyPerDay);
     }

    detectDayBudget();
    

     function detectLevel( ) {

        if (appData.moneyPerDay < 100){
            console.log("У вас низкий доход");
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("У вас средний доход");
        }else if (appData.moneyPerDay > 2000){
            console.log("У вас высокий доход");
        }else{
            console.log("errorrrrrrr");
        }
     }
     detectLevel();
 
   

   function checkSavings() {

       if(appData.savings == true){
        let save = +prompt('Введите суму сбережений'),
            percent = prompt("Под какой процент?");

            appData.monthIncome = (save/100/12*percent).toFixed(1);
            alert("Доход за месяц з вашего депозита : " + appData.monthIncome);
       }
      
   }
   checkSavings();

   function chooseOptExpenses() {
       for(let i = 0; i < 3; i++){
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
           console.log(appData.optionalExpenses);

       }
       
   }
 