const form = document.forms.regForm;

const userEmail = form.elements.email;
const userPassword = form.elements.password;
const userFirstName = form.elements.firstName;
const userLastName = form.elements.lastName;
const userAddress = form.elements.address;
const userPostalCode = form.elements.postalCode;
const userCity = form.elements.city;
const userCountry = form.elements.country;
const userPhone = form.elements.phone;

const agreePP = form.elements.acceptConditions;
const agreeNL = form.elements.signupNewsletter;

let emailRegex =
  /^((([0-9A-Za-z]{1}[-0-9A-z.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,14})$/;
let passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; //8-15 characters, one uppercase letter, one lowercase letter, one numeric digit, and one special character
let namesRegex =
  /^[-a-zàáâäåæçèéêëìíîïñòóôöùúûüA-ZÀÁÂÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÖÙÚÛÜ0-9'\s]+$/; //latin characters, digits, spaces, hyphens, single quotes, uncommon letters
let postalCodeRegex = /^[-A-Za-z0-9\s]+$/; //latin characters, digits, spaces, hyphens
let countryRegex = /^[-a-zA-Z\s]+$/; //latin characters, spaces, hyphens
let phoneRegex = /^[0-9+]{1,}[0-9\-.()\s]{3,29}$/; //digits, spaces, hyphens, dots, parentheses

let errors = [];

//CLICK ON "CREATE ACCOUNT" BUTTON (SUBMIT BUTTON)
form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkAll(); //counts errors
  addRequired(); //empty required fields -> red color and warning
  sendForm(); //sends form and clears inputs after sending
});

//FUNCTIONS ON INPUT CHANGE (lines 48-282)
//* Used for decoration purposes: inputs are validated on as-fill-in basis
//* If input is OK -> we make User happy with check mark and nice green color
//* If input is not OK -> input is colored in red and error message appears
//* Content is transformed to look better

let inputs = document.querySelectorAll("input");

for (const input of inputs) {
  if (input.type != "checkbox")
    input.addEventListener("change", function () {
      if (input.value != "") {
        input.classList.add("filled");
        document.getElementById(`${input.id}__Required`).innerHTML = "";
      } else {
        input.classList.remove("filled");
        input.classList.remove("input_valid");
      }

      if (
        (input.type == "email" && emailRegex.test(input.value)) ||
        (input.type == "password" && passwordRegex.test(input.value)) ||
        (input.type == "tel" && phoneRegex.test(input.value)) ||
        (input.type == "text" &&
          input.id != "userPostalCode" &&
          input.id != "userCountry" &&
          namesRegex.test(input.value)) ||
        (input.id == "userPostalCode" && postalCodeRegex.test(input.value)) ||
        (input.id == "userCountry" && countryRegex.test(input.value))
      ) {
        input.classList.add("input_valid");
      } else {
        input.classList.remove("input_valid");
        document.getElementById(
          `${input.id}__Required`
        ).innerHTML = `Enter a valid ${input.name}`;
      }
      checkAll();
    });
}

//*agree to Terms & Conditions
document
  .querySelector("#acceptConditions")
  .addEventListener("change", function addAccept() {
    if (agreePP.checked == "") {
      document.getElementById("acceptRequired").innerHTML =
        "You must agree to Terms & Conditions and Privacy Policy";
    } else {
      document.getElementById("acceptRequired").innerHTML = "";
    }

    checkAll();
  });

//ERRORS-COUNT FUNCTIONS (lines 284-318)
function checkValidity(input) {
  document.getElementById("successMessage").innerHTML = "";

  let validity = input.validity;

  if (validity.valueMissing) {
    errors++;
  }

  if (validity.patternMismatch) {
    errors++;
  }

  if (agreePP.checked == "") {
    //Accept conditions and privacy required
    document.getElementById("acceptRequired").innerHTML =
      "You must agree to Terms & Conditions and Privacy Policy";
    errors++;
  }
}

//Function that goes though all inputs and check for errors using checkValidity()
function checkAll() {
  errors = [];

  let inputs = document.querySelectorAll("input");

  for (let input of inputs) {
    checkValidity(input);
  }
  if (errors.length == 0 || agreePP.checked != "") {
    document.getElementById("errorsInfo").innerHTML = "";
  }
}

//FUNCTIONS ON "CREATE ACCOUNT" BUTTON CLICK (lines 320-362)
//*All fields are filled correctly, terms&conditions acceptedЕ -> messages "Congrats, account created"
function addSuccess() {
  if (errors.length == 0 && agreePP.checked != "") {
    document.getElementById(
      "successMessage"
    ).innerHTML = `Congratulations, ${userFirstName.value}!<br>Your new account has been successfully created!`;
  }
}

//*Not all fields are filled correctly, terms&conditions not acceptedЕ -> messages "Check if everything is filled correctly"
function addFailure() {
  if (errors.length != 0 || agreePP.checked == "") {
    document.getElementById("errorsInfo").innerHTML =
      "Please make sure all fields are filled in correctly";
  } else {
    document.getElementById("successMessage").innerHTML = "";
    document.getElementById("errorsInfo").innerHTML = "";
  }
}

//*Field is not filled correctly -> delete class 'valid', add class 'error', message under 'field is required'
//*Field is OK -> clear warning message
function addRequired() {
  let inputs = document.querySelectorAll("input");

  inputs.forEach(function (input) {
    if (input.value == "") {
      input.classList.remove("input_valid");
      input.classList.add("input_error");
      document.getElementById(`${input.id}__Required`).innerHTML =
        input.placeholder + ` is required`;
    }
  });

  //*'you need to agree with terms&conditions' message
  if (agreePP.checked == "") {
    document.getElementById("acceptRequired").innerHTML =
      "You must agree to Terms & Conditions and Privacy Policy";
  } else {
    document.getElementById("acceptRequired").innerHTML = "";
  }
}

//FORM SENDING
//1-Check if subscribed to newsletter
form.elements.signupNewsletter.addEventListener("click", function () {
  if (agreeNL.checked == "") {
    agreeNL.value = "no";
  } else {
    agreeNL.value = "yes";
  }
});

//2-form sending
function sendForm() {
  let user = {
    firstname: userFirstName.value,
    lastname: userLastName.value,
    email: userEmail.value,
    password: userPassword.value,
    address: userAddress.value,
    postalCode: userPostalCode.value,
    city: userCity.value,
    country: userCountry.value,
    phone: userPhone.value,
    newsletter: agreeNL.value,
  };

  if (errors == 0) {
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "X-Content-Type-Options": "nosniff",
      },
    })
      .then((response) => response.json())
      .then(() => addSuccess())
      .catch((error) => console.log(error));
    clearForm();
  } else {
    addFailure();
  }
}

//3-form clearing after sending
function clearForm() {
  let inputs = document.querySelectorAll("input");

  inputs.forEach(function (input) {
    input.value = "";
    input.classList.remove("input_valid");
    input.classList.remove("filled");
    input.classList.remove("input_error");
  });
}
