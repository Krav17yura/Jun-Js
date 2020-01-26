'use strict';

let statrButton = document.getElementById("start"),

	budgetValue = document.querySelector(".budget-value"),
	dayBudgetValue = document.querySelector(".daybudget-value"),
	levelValue = document.querySelector(".level-value"),
	expensesValue = document.querySelector(".expenses-value"),
	optionalExpensesValue = document.querySelector(".optionalexpenses-value"),
	incomValue = document.querySelector(".income-value"),
	monthsavingsValue = document.querySelector(".monthsavings-value"),
	yearsavingsValue = document.querySelector(".yearsavings-value"),

	expensesItem = document.getElementsByClassName("expenses-item"),

	buttonExpenses = document.getElementsByTagName("button")[0],
	buttonOptionalExpenses = document.getElementsByTagName("button")[1],
	buttonCountBudget = document.querySelector(".count-budget-btn"),

	optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
	chooseIncome = document.querySelector(".choose-income"),
	savings = document.querySelector("#savings"),
	chooseSum = document.querySelector(".choose-sum"),
	choosePercent = document.querySelector(".choose-percent"),
	year = document.querySelector(".year-value"),
	month = document.querySelector(".month-value"),
	day = document.querySelector(".day-value");






let money,
	time;

	buttonExpenses.disabled = true;
	buttonOptionalExpenses.disabled = true;
	buttonCountBudget.disabled = true;

statrButton.addEventListener('click', function () {
	time = prompt("Введите дату в формате YYYY-MM-DD");
	money = +prompt("Ваш бюджет на месяц?");

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?");
	}
	appData.timeData = time;
	appData.budget = money;
	budgetValue.textContent = money.toFixed();
	year.value = new Date(Date.parse(time)).getFullYear();
	month.value = new Date(Date.parse(time)).getMonth() + 1;
	day.value = new Date(Date.parse(time)).getDay();

	buttonExpenses.disabled = false;
	buttonOptionalExpenses.disabled = false;
	buttonCountBudget.disabled = false;
});


buttonExpenses.addEventListener('click', function () {
	let sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;

		if (typeof (a) === 'string' && typeof (a) != null && a != '' &&
			typeof (b) != null && b != '' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
			sum += +b;
		} else {
			console.log("error");
			i = i - 1;

		}
	}
	expensesValue.textContent = sum;
});

buttonOptionalExpenses.addEventListener('click', function () {
	for (let i = 0; i < optionalexpensesItem.length; i++) {
		let opt = optionalexpensesItem[i].value;
		appData.optionalExpenses[i] = opt;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
	}

});

buttonCountBudget.addEventListener("click", function () {
	if (appData.budget != undefined) {
		appData.moneyPerDay = ((appData.budget - +expensesValue.textContent )/ 30).toFixed(1);
		dayBudgetValue.textContent = appData.moneyPerDay;


		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "У вас низкий доход";
		} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "У вас средний доход";
		} else if (appData.moneyPerDay >= 2000) {
			levelValue.textContent = "У вас высокий доход";
		} else {
			levelValue.textContent = "Произошла ошибка";
		}
	} else {
		budgetValue.textContent = "Произошла ошибка";
	}

});

chooseIncome.addEventListener("input", function () {

	let items = chooseIncome.value;

	appData.income = items.split(',');
	incomValue.textContent = appData.income;

});

savings.addEventListener('click', function () {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

chooseSum.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = chooseSum.value,
			percent = choosePercent.value;
		appData.monthIncome = (sum / 100 / 12 * percent).toFixed(1);
		appData.yearIncome = (sum / 100 * percent).toFixed(1);

		monthsavingsValue.textContent = appData.monthIncome;
		yearsavingsValue.textContent = appData.yearIncome;

	}
});

choosePercent.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = chooseSum.value,
			percent = choosePercent.value;
		appData.monthIncome = (sum / 100 / 12 * percent).toFixed(1);
		appData.yearIncome = (sum / 100 * percent).toFixed(1);

		monthsavingsValue.textContent = appData.monthIncome;
		yearsavingsValue.textContent = appData.yearIncome;

	}
});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};


for (let key in appData) {
	console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}