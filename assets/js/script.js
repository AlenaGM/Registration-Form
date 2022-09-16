const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const userFirstName = document.getElementById("userFirstName");
const userLastName = document.getElementById("userLastName");
const userAddress = document.getElementById("userAddress");
const userPostcode = document.getElementById("userPostcode");
const userCity = document.getElementById("userCity");
const userCountry = document.getElementById("userCountry");
const userPhone = document.getElementById("userPhone");

//REGEX
// As soon as we do not have an exact country,
//all validation besides password and e-mail is in "light mode":
//I just check that there are no some extraordinary symbols in there
let emailValid =
  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,3})$/;
let passwordValid =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; //8-15 characters, one uppercase letter, one lowercase letter, one numeric digit, and one special character
let nameValid =
  /^[-a-zàáâäåæçèéêëìíîïñòóôöùúûüA-ZÀÁÂÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÖÙÚÛÜ\s']+$/; //latin characters, hyphens, spaces, single quotes, uncommon letters
let addressValid =
  /^[-a-zàáâäåæçèéêëìíîïñòóôöùúûüA-ZÀÁÂÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÖÙÚÛÜ0-9\s']+$/; //latin characters, digits, spaces, hyphens,  single quotes, uncommon letters
let postcodeValid = /^[-A-Za-z0-9 ]{4,9}$/; //latin characters, digits, spaces, hyphens, 4-9 characters
let countryValid = /^[-a-zA-Z\s]+$/; //latin characters, spaces, hyphens
let phoneValid = /^[- ()+.0-9\s]{6,15}$/; //digits, spaces, hyphens, parentheses, 6-15 characters

const agreePP = document.querySelector("#accept");
const agreeNL = document.querySelector("#signupNewsletter");

let errors = [];

//FUNCTION ON "CREATE ACCOUNT" BUTTON CLICK
document
  .querySelector("#fullSteamAhead")
  .addEventListener("click", function (event) {
    event.preventDefault();

    checkAll(); //count errors

    addRequired(); //blank inputs -> red color and warning
    addFailure(); //warning message at the end
    addSuccess(); //ОК message at the end

    sendForm(); //sends form and clears inputs after
  });

//FUNCTIONS ON INPUT CHANGE (lines 48-282)
//* Used for decoration purposes: inputs are validated on as-fill-in basis
//* If input is OK -> we make User happy with check mark and nice green color
//* We do not want to upset our User -> red color appears only after "create account" button is pressed

//*E-mail
document
  .querySelector("#userEmail")
  .addEventListener("change", function addFilledEmail() {
    userEmail.classList.add("filled");
    document.getElementById("userEmail__Required").innerHTML = "";

    if (userEmail.value == "") {
      userEmail.classList.remove("filled");
      userEmail.classList.remove("input_valid");
    } else if (!emailValid.test(userEmail.value)) {
      userEmail.classList.remove("input_valid");
      document.getElementById("userEmail__Required").innerHTML =
        "Enter a valid e-mail address";
    } else {
      userEmail.classList.add("input_valid");
    }

    document.querySelector("#userEmail").value = userEmail.value
      .trim()
      .toLowerCase();

    checkAll();
  });

//*Password
document
  .querySelector("#userPassword")
  .addEventListener("change", function addFilledPassword() {
    userPassword.classList.add("filled");
    document.getElementById("userPassword__Required").innerHTML = "";

    if (userPassword.value == "") {
      userPassword.classList.remove("input_valid");
      userPassword.classList.remove("filled");
    } else if (!passwordValid.test(userPassword.value)) {
      userPassword.classList.remove("input_valid");
      document.getElementById("userPassword__Required").innerHTML =
        "Enter a valid password";
    } else {
      userPassword.classList.add("input_valid");
    }

    checkAll();
  });

//*First Name
document
  .querySelector("#userFirstName")
  .addEventListener("change", function addFilledFirstName() {
    userFirstName.classList.add("filled");
    document.getElementById("userFirstName__Required").innerHTML = "";

    if (userFirstName.value == "") {
      userFirstName.classList.remove("input_valid");
      userFirstName.classList.remove("filled");
    } else if (!nameValid.test(userFirstName.value)) {
      userFirstName.classList.remove("input_valid");
      document.getElementById("userFirstName__Required").innerHTML =
        "Enter a valid first name";
    } else {
      userFirstName.classList.add("input_valid");
    }

    document.querySelector("#userFirstName").value = userFirstName.value
      .trim()
      .toUpperCase();

    checkAll();
  });

//*Last Name
document
  .querySelector("#userLastName")
  .addEventListener("change", function addFilledLastName() {
    userLastName.classList.add("filled");
    document.getElementById("userLastName__Required").innerHTML = "";

    if (userLastName.value == "") {
      userLastName.classList.remove("input_valid");
      userLastName.classList.remove("filled");
    } else if (!nameValid.test(userLastName.value)) {
      userLastName.classList.remove("input_valid");
      document.getElementById("userLastName__Required").innerHTML =
        "Enter a valid last name";
    } else {
      userLastName.classList.add("input_valid");
    }

    document.querySelector("#userLastName").value = userLastName.value
      .trim()
      .toUpperCase();

    checkAll();
  });

//*Address(not required field)
document
  .querySelector("#userAddress")
  .addEventListener("change", function addFilledAddress() {
    userAddress.classList.add("filled");
    document.getElementById("userAddress__Required").innerHTML = "";

    if (userAddress.value == "") {
      userAddress.classList.remove("input_valid");
      userAddress.classList.remove("filled");
    } else if (!addressValid.test(userAddress.value)) {
      userAddress.classList.remove("input_valid");
      document.getElementById("userAddress__Required").innerHTML =
        "Please check, if address is correct";
    } else {
      userAddress.classList.add("input_valid");
    }

    document.querySelector("#userAddress").value = userAddress.value
      .trim()
      .toUpperCase();

    checkAll();
  });

//*Postcode
document
  .querySelector("#userPostcode")
  .addEventListener("change", function addFilledPostcode() {
    userPostcode.classList.add("filled");
    document.getElementById("userPostcode__Required").innerHTML = "";

    if (userPostcode.value == "") {
      userPostcode.classList.remove("input_valid");
      userPostcode.classList.remove("filled");
    } else if (!postcodeValid.test(userPostcode.value)) {
      userPostcode.classList.remove("input_valid");
      document.getElementById("userPostcode__Required").innerHTML =
        "Enter a valid postcode";
    } else {
      userPostcode.classList.add("input_valid");
    }

    document.querySelector("#userPostcode").value = userPostcode.value
      .trim()
      .toUpperCase();

    checkAll();
  });

//*City
document
  .querySelector("#userCity")
  .addEventListener("change", function addFilledCity() {
    userCity.classList.add("filled");
    document.getElementById("userCity__Required").innerHTML = "";

    if (userCity.value == "") {
      userCity.classList.remove("input_valid");
      userCity.classList.remove("filled");
    } else if (!nameValid.test(userCity.value)) {
      userCity.classList.remove("input_valid");
      document.getElementById("userCity__Required").innerHTML =
        "Enter a valid city";
    } else {
      userCity.classList.add("input_valid");
    }

    document.querySelector("#userCity").value = userCity.value
      .trim()
      .toUpperCase();

    checkAll();
  });

//*Country
document
  .querySelector("#userCountry")
  .addEventListener("change", function addFilledCountry() {
    userCountry.classList.add("filled");
    document.getElementById("userCountry__Required").innerHTML = "";

    if (userCountry.value == "") {
      userCountry.classList.remove("input_valid");
      userCountry.classList.remove("filled");
    } else if (!countryValid.test(userCountry.value)) {
      userCountry.classList.remove("input_valid");
      document.getElementById("userCountry__Required").innerHTML =
        "Enter a valid country";
    } else {
      userCountry.classList.add("input_valid");
    }

    document.querySelector("#userCountry").value = userCountry.value
      .trim()
      .toUpperCase();

    checkAll();
  });

//*Phone number
document
  .querySelector("#userPhone")
  .addEventListener("change", function addFilledPhone() {
    userPhone.classList.add("filled");
    document.getElementById("userPhone__Required").innerHTML = "";

    if (userPhone.value == "") {
      userPhone.classList.remove("input_valid");
      userPhone.classList.remove("filled");
    } else if (!phoneValid.test(userPhone.value)) {
      userPhone.classList.remove("input_valid");
      document.getElementById("userPhone__Required").innerHTML =
        "Enter a valid phone";
    } else {
      userPhone.classList.add("input_valid");
    }

    checkAll();
  });

//*agree to Terms & Conditions
document
  .querySelector("#accept")
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
document
  .querySelector("#signupNewsletter")
  .addEventListener("click", function () {
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
    postcode: userPostcode.value,
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
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));

    clearForm();
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
