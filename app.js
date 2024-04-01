// ------------------ Task 1 ------------------ //
const number2 = document.getElementById("number2");
const number1 = document.getElementById("number1");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const totalText = document.querySelector(".calculator h3");
let total = 0;

document.querySelectorAll(".calculator button").forEach((btn) => {
	btn.addEventListener("click", function () {
		totalText.innerText = "Total: ";

		switch (this.id) {
			case "add":
				total = Number(number1.value) + Number(number2.value);
				totalText.innerText += total;
				break;
			case "subtract":
				total = Number(number1.value) - Number(number2.value);
				totalText.innerText += total;
				break;
			case "multiply":
				total = Number(number1.value) * Number(number2.value);
				totalText.innerText += total;
				break;
			case "divide":
				total = Number(number1.value) / Number(number2.value);
				totalText.innerText += total;
				break;
			default:
				break;
		}

		number1.value = "";
		number2.value = "";
	});
});

// ------------------ Task 2 ------------------ //
const reverseInput = document.getElementById("reverseInput");
const reverseBtn = document.getElementById("reverseBtn");

reverseBtn.addEventListener("click", () =>
	alert(reverseInput.value.split("").reverse().join(""))
);

// ------------------ Task 3 ------------------ //
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const borderWidthInput = document.getElementById("borderWidth");
const borderStyle = document.getElementById("borderStyle");
const borderColor = document.getElementById("borderColor");
const color = document.getElementById("color");
const backgroundColor = document.getElementById("backgroundColor");
const changeDivBtn = document.getElementById("changeDivBtn");
const targetDiv = document.getElementById("targetDiv");

changeDivBtn.addEventListener("click", () => {
	targetDiv.style.width = widthInput.value + "px";
	targetDiv.style.height = heightInput.value + "px";
	targetDiv.style.borderWidth = borderWidthInput.value + "px";
	targetDiv.style.borderStyle = borderStyle.value;
	targetDiv.style.borderColor = borderColor.value;
	targetDiv.style.color = color.value;
	targetDiv.style.backgroundColor = backgroundColor.value;
});

// Bu kod niye ishlemir?(((

// targetDiv.style = {
//     ...targetDiv.style,
//     width: widthInput.value + 'px',
//     height: heightInput.value + 'px',
//     borderWidth: borderWidthInput.value + 'px',
//     borderStyle: borderStyle.value,
//     borderColor: borderColor.value,
//     color: color.value,
//     backgroundColor: backgroundColor.value
// }

// ------------------ Task 4 ------------------ //
const defaultWidth = 200,
	defaultHeigth = 200;
const width4 = document.getElementById("width-4");
const height4 = document.getElementById("height-4");
const borderWidth4 = document.getElementById("borderWidth-4");
const btn4 = document.getElementById("task-4-btn");
const div4 = document.querySelector(".targetDiv4");

btn4.addEventListener("click", () => {
	div4.style.width = +defaultWidth + +width4.value + "px";
	div4.style.height = +defaultHeigth + +height4.value + "px";
	div4.style.borderWidth = borderWidth4.value + "px";
});

// ------------------ Task 5 ------------------ //
const operations = document.querySelectorAll(".operation");
const calculatorInput = document.querySelector("#calculatorInput");
const clearInputBtn = document.querySelector("#clearInput");
const equalsBtn = document.querySelector("#equals");
const deleteBtn = document.querySelector('#delete');
let inputMaxLength = 8;
let inputFontSize = 40;

function revertInputSize() {
	inputFontSize = 40;
	calculatorInput.style.fontSize = inputFontSize + "px";
}

function changeInputSize(inputValue) {
	inputFontSize = 40;

	if (inputValue.length > inputMaxLength && inputFontSize > 24) {
		inputFontSize -= calculatorInput.value.length;
		calculatorInput.style.fontSize = inputFontSize + "px";
	}
}

function disableOtherOperations(target, status) {
	operations.forEach((op) => {
		if (op != target) {
			op.disabled = status;
		}
	});
}

function calculate(operation) {
	let numbers;

	if (operation) {
		numbers = calculatorInput.value.split(operation).map((n) => +n);

		switch (operation) {
			case "+":
				calculatorInput.value = sum(numbers);
				break;
			case "-":
				calculatorInput.value = subtract(numbers);
				break;
			case "x":
				calculatorInput.value = multiply(numbers);
				break;
			case "/":
				calculatorInput.value = divide(numbers);
				break;
			default:
				break;
		}

		disableOtherOperations(this, false);
		changeInputSize(calculatorInput.value);
	}
}

function sum(numbers) {
	let total = 0;

	numbers.forEach((n) => (total += n));

	return total;
}

function subtract(numbers) {
	let total = 0;

	numbers.forEach((n, i) => {
		if (i == 0) {
			total = n;
		} else {
			total -= n;
		}
	});

	return total;
}

function multiply(numbers) {
	let total = 1;

	numbers.forEach((n) => (total *= n));

	return total;
}

function divide(numbers) {
	let total = 1;

	numbers.forEach((n, i) => {
		if (i == 0) {
			total = n;
		} else {
			total /= n;
		}
	});

	return total;
}

document.querySelectorAll(".inputBtn").forEach((btn) => {
	btn.addEventListener("click", function () {
		if (this.classList.value.includes("operation")) {
			if (
				calculatorInput.value.length === 0 ||
				calculatorInput.value[calculatorInput.value.length - 1] === this.innerText
			) {
				return;
			}

			disableOtherOperations(this, true);
		}

		calculatorInput.value += this.innerText;
		changeInputSize(calculatorInput.value);
	});
});

calculatorInput.addEventListener("keyup", function () {
	changeInputSize(this.value);
});

equalsBtn.addEventListener("click", () => {
	const operation = calculatorInput.value.substring(1).match(/[+\-x/]/g)[0];

	calculate(operation);
});

clearInputBtn.addEventListener("click", () => {
	revertInputSize();
	calculatorInput.value = "";
});

deleteBtn.addEventListener('click', () => {
	calculatorInput.value = calculatorInput.value.slice(0, -1);
})

// ------------------ Task 6 ------------------ //
const navMenu = document.querySelector('.task-6-inner');
const navMenuBtn = document.querySelector('.task-6-inner .burger-menu');
let navMenuStatus = false;

navMenuBtn.addEventListener('click', () => {
	navMenuStatus = !navMenuStatus;

	if (navMenuStatus){
		navMenu.classList.add('active')
	} else {
		navMenu.classList.remove('active');
	}
})