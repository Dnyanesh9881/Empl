
const form=document.querySelector("form");
const tbody=document.querySelector("tbody");
const submitButton=document.querySelector(".form>button");

function onClickDelete(event){
        let deleteRef = event.target;
        const row=deleteRef.parentNode.parentNode;
        row.remove();
}

function addEmployee(employee){
          
    const tr=document.createElement("tr");
    for(let key in employee){
        const td=document.createElement("td");
        td.innerText=employee[key];
        tr.appendChild(td);
    }
    const option=document.createElement("td");
    const deleteButton=document.createElement("button");
    const resetButton=document.createElement("button");
    deleteButton.innerText="Delete";
    resetButton.innerText="Reset";
    deleteButton.addEventListener("click" , onClickDelete);
    resetButton.addEventListener("click", onClickReset);
    option.appendChild(deleteButton);
    option.appendChild(resetButton);
    tr.appendChild(option);
    tbody.appendChild(tr)
}

function onsubmition(event){
    event.preventDefault();
    let employeeData={
        name : form["Name"].value,
        companyName: form["CompanyName"].value,
        salary: form["Salary"].value,
        gender: form["Gender"].value,
        role: form["Role"].value,
        email: form["Email"].value
    }
    if(editingOption.isEditing){
        editForm(employeeData);
    }else{
        addEmployee(employeeData);
    }
     
    form.reset();
}

form.addEventListener("submit", onsubmition);
