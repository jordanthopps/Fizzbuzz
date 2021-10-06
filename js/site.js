function getNumbers() {
    let startValue = 0;
    let endValue = 100;

    startValue = document.getElementById("startValue").value;
    endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        let numbers = generateNumbers(startValue, endValue);

        displayNumbers(numbers)
    } else {

    }

}

function generateNumbers(startValue, endValue) {
    let numbers = []

    for (let index = startValue; index <= endValue; index++) {

        numbers.push(index);
    }
    return numbers;
}

function displayNumbers(numbers) {

    let startValue = numbers[0];
    let endIndex = numbers.length;
    let tableBody = document.getElementById("results")
    tableBody.innerHTML = ""
    for (let index = 0; index < endIndex; index++) {
        let number = numbers[index];

        //Order matters here. Start with the most stringent case.
        if (number % 15 == 0) {
            tableRow = `<tr><td>FizzBuzz</td></tr>`
        } else if (number % 3 == 0) {
            tableRow = `<tr><td>Fizz</td></tr>`
        } else if (number % 5 == 0) {
            tableRow = `<tr><td>Buzz</td></tr>`
        } else {
            tableRow = `<tr><td>${number}</td></tr>`
        }

        tableBody.innerHTML += tableRow;
    }
}

/* function checkInputs(startValue, endValue) {

    let errorMessage = "";

    if (startValue < 1 || endValue < 1) {
        errorMessage += "Please enter an integer between 1 and 100.";
    }
    if (startValue > 100 || endValue > 100) {
        errorMessage += "Please enter an integer between 1 and 100.";
    }
    if (errorMessage.length > 0) {
        alert("errorMessage");
    }
    break;
}*/