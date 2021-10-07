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

        if (index % 15 == 0) {
            numbers.push("FizzBuzz");
        } else if (index % 3 == 0) {
            numbers.push("Fizz");
        } else if (index % 5 == 0) {
            numbers.push("Buzz");
        } else {
            numbers.push(index);
        }
    }
    return numbers;
}

function displayNumbers(numbers) {

    //get the table body element from the page
    let tableBody = document.getElementById("results")

    //get the template to make the table
    let rowTemplate = document.getElementById("fbTemplate");

    //clear the table first
    tableBody.innerHTML = ""


    for (let index = 0; index < numbers.length; index += 5) {

        const tableRow = document.importNode(rowTemplate.content, true)

        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(numbers[index]);
        rowCols[0].textContent = numbers[index];

        rowCols[1].classList.add(numbers[index + 1]);
        rowCols[1].textContent = numbers[index + 1];

        rowCols[2].classList.add(numbers[index + 2]);
        rowCols[2].textContent = numbers[index + 2];

        rowCols[3].classList.add(numbers[index + 3]);
        rowCols[3].textContent = numbers[index + 3];

        rowCols[4].classList.add(numbers[index + 4]);
        rowCols[4].textContent = numbers[index + 4];

        tableBody.appendChild(tableRow);


    }
}

/* function displayNumbers(numbers) {

    let startValue = numbers[0];
    let numbers = numbers.length;
    let tableBody = document.getElementById("results")

    //get the template to make the table
    let rowTemplate = document.getElementById("fbTemplate");

    //clear the table first

    tableBody.innerHTML = ""
    for (let index = 0; index < numbers; index++) {
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
}*/

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