/* Weekend Salary Calc by Steve - Planning
** Plan **
** 1 - create files [x]
** 2 - build boilerplates and link all files [x]
** 3 - create basic html elements [x]
** 4 - add form handling in js [x]
** 5 - style html elements [x]
** 6 - add data validation in the form []
** x - add extra functionality/styling []
*/

// console.log('js');

// create a function that gets the value of each input when the submit button is clicked.
// the function should store the values as an object with properties. the function should then 
// update the table with the object's data

let totalSal = 0;

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function getVals(event) {

    event.preventDefault();

    let tableInput = [];
    let updatedSal = totalSal;


    // let tableInput = [];

    let fnVal = document.querySelector('#firstName').value;
    let lnVal = document.querySelector('#lastName').value;
    let idVal = document.querySelector('#empID').value;
    let titleVal = document.querySelector('#empTitle').value;
    let salVal = document.querySelector('#empSal').value;

    let newVal = removeComma(salVal)

    tableInput.push({
        firstName: fnVal, 
        lastName: lnVal, 
        id: idVal, 
        title: titleVal, 
        salary: newVal
    });

    let tableEl = document.querySelector('#employees');
    for (let i of tableInput) {
        tableEl.innerHTML += `
        <tr>
            <td>${i.firstName}</td>
            <td>${i.lastName}</td>
            <td>${i.id}</td>
            <td>${i.title}</td>
            <td>${formatter.format(i.salary)}</td>
            <td><button onclick="deleteRow(event)">Delete</button></td>
        </tr>`
        
        totalSal += Number(i.salary);

    }



    let salEl = document.querySelector('#totalSalary');
    let formattedTotal = formatter.format(totalSal);
    salEl.innerHTML = `<h3>Total Monthly: ${formattedTotal}</h3>`;


}

function deleteRow(event) {
    event.target.parentElement.parentElement.remove();
}

function removeComma(value) {
    for (let i = 0; i < value.length; i++) {
        if (value[i] === ",") {
            newVal = value.replace(value[i], '');
        }
    }

    return newVal;
}

