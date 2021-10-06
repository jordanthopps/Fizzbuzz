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

    //get the table body element from the page
    let startValue = numbers[0];
    let endIndex = numbers.length;
    let tableBody = document.getElementById("results")

    //get the template to make the table
    let rowTemplate = document.getElementById("fbTemplate");

    //clear the table first
    tableBody.innerHTML = ""


    for (let index = 0; index < endIndex; index += 5) {
        let number = numbers[index];
        const tableRow = document.importNode(rowTemplate.contentEditable, true)

        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(endIndex[i]);
        rowCols[0].textContent = endIndex[i];

        rowCols[1].classList.add(endIndex[i + 1]);
        rowCols[1].textContent = endIndex[i + 1];

        rowCols[2].classList.add(endIndex[i + 2]);
        rowCols[2].textContent = endIndex[i + 2];

        rowCols[3].classList.add(endIndex[i + 3]);
        rowCols[3].textContent = endIndex[i + 3];

        rowCols[4].classList.add(endIndex[i + 4]);
        rowCols[4].textContent = endIndex[i + 4];

        tableBody.appendChild(tableRow);


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