let createBtn = document.querySelector("#search");
let nameField = document.querySelector("#name");
let phoneField = document.querySelector("#phone");
let emailField = document.querySelector("#email");
let showAllBtn = document.querySelector("#show-all");
let myEntries = document.querySelector(".entries")

let customers = []

createBtn.addEventListener("click", function () {


    let cName = nameField.value;
    let cPhone = phoneField.value;
    let cEmail = emailField.value;

    let customer = {
        name: cName,
        phone: cPhone,
        email: cEmail
    }

    let found = false;
    for (let i = 0; i < customers.length; i++) {
        if (customers[i].email == cEmail) {
            alert("This customer is already registered.")
            found = true;
            break;
        }
    }






    // alert("One customer is created.")




    if (nameField.value == "") { alert("Please enter your name.") }
    else if (phoneField.value == "") { alert("Please enter your phone.") }
    else if (emailField.value == "") { alert("Please enter your email.") }
    else {
        nameField.value = ""
        phoneField.value = ""
        emailField.value = ""

        if (found == false) {
            customers.push(customer)
            alert("One customer is created.")


        }


    }
})

showAllBtn.addEventListener("click", function () {
    showAllCustomers();
})

//How to not add array when when create button is clicked
function showAllCustomers() {
    if (customers.length == 0) { alert("You don't have any Customers.") }
    else {
        for (let i = 0; i < customers.length; i++) { console.log(customers[i]) }
    }
}

