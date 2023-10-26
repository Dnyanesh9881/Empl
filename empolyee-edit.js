 let editingOption={
    isEditing:false,
    rowElement:null
}

function onClickReset(event){
    let row=event.target.parentNode.parentNode;

    let cells=row.querySelectorAll("td");
    let employeeInfo={
        Name:cells[0].innerText,
        CompanyName:cells[1].innerText,
        Salary:cells[2].innerText,
        Gender:cells[3].innerText,
        Role:cells[4].innerText,
        Email:cells[5].innerText
    }
    preFillForm(employeeInfo);
    editingOption={
        isEditing:true,
    rowElement:row
    }
   submitButton.innerText="Update";
}

function preFillForm(employee){


    for(let i in employee){
        form[i].value=employee[i];
    }
}

function editForm(employee){

let rowEle=editingOption.rowElement;
 let cells=rowEle.querySelectorAll("td");
  cells[0].innerText=employee.name;
  cells[1].innerText=employee.companyName;
  cells[2].innerText=employee.salary;
  cells[3].innerText=employee.gender;
  cells[4].innerText=employee.role;
  cells[5].innerText=employee.email;

    editingOption={
        isEditing:false,
    rowElement:null
    }
    submitButton.innerText="Submit";
}