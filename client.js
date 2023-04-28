/* Weekend Salary Calc by Steve - Planning
** Plan **
** 1 - create files [x]
** 2 - build boilerplates and link all files [x]
** 3 - create basic html elements []
** 4 - style html elements []
** 5 - add form handling in js []
** 6 - tbd []
** x - add extra functionality/styling []
*/

// console.log('js');

// create a function that gets the value of each input when the submit button is clicked.
// the function should store the values as an object with properties. the function should then 
// update the table with the object's data

let totalSal = 0;

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

    tableInput.push({
        firstName: fnVal, 
        lastName: lnVal, 
        id: idVal, 
        title: titleVal, 
        salary: salVal
    });

    let tableEl = document.querySelector('#employees');
    for (let i of tableInput) {
        tableEl.innerHTML += `
        <tr>
            <td>${i.firstName}</td>
            <td>${i.lastName}</td>
            <td>${i.id}</td>
            <td>${i.title}</td>
            <td>${i.salary}</td>
        </tr>`
        
        totalSal += Number(i.salary);

    }

    let salEl = document.querySelector('#totalSalary');
    salEl.innerHTML = `<p>Total Salary: ${totalSal}</p>`;


}


