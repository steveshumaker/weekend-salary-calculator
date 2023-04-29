/* Weekend Salary Calc by Steve - Planning
** Plan **
** 1 - create files [x]
** 2 - build boilerplates and link all files [x]
** 3 - create basic html elements [x]
** 4 - add form handling in js [x]
** 5 - style html elements [x]
** 6 - add data validation in the form []
** x - add extra functionality/styling []
** TODO **
** - Remove row's salary from total when deleting a row
** -- Update the formating if < budget again
** - 
*/




// initial variable declarations
let totalSal = 0;
let count = 0;
const budget = 20000;
let employeeTracker = [];
const resetForm = document.getElementById('myForm');
let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


// main function
function getVals(event) {

    // prevents the default behavior of the form
    event.preventDefault();

    // create an empty array to store our employee objects
    let tableInput = [];

    // init value variables for each input
    let fnVal = document.querySelector('#firstName').value;
    let lnVal = document.querySelector('#lastName').value;
    let idVal = document.querySelector('#empID').value;
    let titleVal = document.querySelector('#empTitle').value;
    let salVal = document.querySelector('#empSal').value;

    // remove the comma from the salary, if there is one
    let newVal = removeComma(salVal)

    // create an employee object and push that object to the input array
    tableInput.push({
        firstName: fnVal, 
        lastName: lnVal, 
        id: idVal, 
        title: titleVal, 
        salary: newVal
    });

    employeeTracker.push({
        firstName: fnVal, 
        lastName: lnVal, 
        id: idVal, 
        title: titleVal, 
        salary: newVal
    });

    // grab the employees table element
    let tableEl = document.querySelector('#employees');

    // loop to add each item in the array to the table
    for (let i of tableInput) {
        tableEl.innerHTML += `
        <tr id="tr${count}">
            <td>${i.firstName}</td>
            <td>${i.lastName}</td>
            <td>${i.id}</td>
            <td>${i.title}</td>
            <td id="salId">${formatter.format(i.salary)}</td>
            <td><button onclick="deleteRow(event)">Delete</button></td>
        </tr>`
        
        count++;
        // increment the total salary by the employee's salary
        totalSal += Number(i.salary);

    }


    // grab the total salary element
    let salEl = document.querySelector('#totalSalary');

    // format the salary with our formatter variable
    let formattedTotal = formatter.format(totalSal);

    // update the monthly salary element with our formatted total salary
    salEl.innerHTML = `<h3 id="h3Sal">Total Monthly: ${formattedTotal}</h3>`;

    // call formatTotal to format if we are over budget
    formatTotal(totalSal);

    // clear the form entries
    resetForm.reset();

    console.log(employeeTracker);

}


// function to handle delete button clicks
function deleteRow(event) {
    // this needs work lol
    // // console.log(event.target.parentElement.parentElement);
    // // get html of current row, salary block
    // let removeSal = document.querySelector('#salId').innerHTML;
    // // convert the html into a number variable
    // removeSal = Number(removeSal.slice(1));
    // console.log('removed: ', removeSal);
    // // get total salary html
    // let salEl = document.querySelector('#totalSalary').innerHTML;
    // // console.log(salEl);
    // let startCash = salEl.indexOf('$');
    // let endCash = salEl.lastIndexOf('<');
    // // create a variable to hold the total salary, sliced
    // let cash = salEl.slice(startCash + 1, endCash);
    // //convert the var to a number
    // totalSal = Number(cash);
    // console.log('previous total: ', totalSal);
    // // remove the deleted row from the total
    // let newTotal = totalSal-removeSal;
    // console.log('new total: ', newTotal);
    // // update the total salary with the new value
    // document.querySelector('#totalSalary').innerHTML = `<h3 id="h3Sal">Total Monthly: ${newTotal}</h3>`;


    event.target.parentElement.parentElement.remove();
}

// function to remove commas if the user includes them in salary input
function removeComma(value) {
    if (value.indexOf(',') > 0) {
        for (let i = 0; i < value.length + 1; i++) {
            if (value[i] === ",") {
                newVal = value.replace(value[i], '');
            } // end if
        } // end for 
        return newVal;
    } // end if

    return value;
}

// function to format the total value if > our budget
function formatTotal(val) {
    if (val > budget) {
        let el = document.getElementById('h3Sal');
        el.style.backgroundColor = 'red';
        el.style.marginLeft = '75%';
    }
}

// archiving in case resetForm.reset turns out bad
// function clearVals() {
//     let allInputs = document.querySelectorAll('.inputField');
//     allInputs.forEach(input => input.value = '');
// }

