const form = document.forms.regForm;

let inputs = document.querySelectorAll("input");
let errors;

// 1 - FORM VALIDATION
function checkInputValidity(input) {
  let validity = input.validity;

  if (validity.valueMissing) {
    errors++;
    input.classList.add("input_error");
    document.getElementById(
      `${input.id}__Required`
    ).textContent = `${input.placeholder} can not be empty`;
  }

  if (validity.patternMismatch) {
    errors++;
    input.classList.add("input_error");
    document.getElementById(
      `${input.id}__Required`
    ).textContent = `${input.placeholder} is invalid`;
  }
}

function checkAllInputs() {
  errors = [];

  for (let input of inputs) {
    checkInputValidity(input);
  }
}

// 2 - FORM SENDING
form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkAllInputs();
  sendForm();
});

function sendForm() {
  let user = {
    firstname: form.elements.firstName.value,
    lastname: form.elements.lastName.value,
    email: form.elements.email.value,
    password: form.elements.password.value,
    address: form.elements.address.value,
    postalCode: form.elements.postalCode.value,
    city: form.elements.city.value,
    country: form.elements.country.value,
    phone: form.elements.phone.value,
    newsletter: form.elements.signupNewsletter.checked == "" ? "no" : "yes",
  };

  const request = new Request("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: JSON.stringify(user),
  });

  if (errors == 0 && form.elements.acceptConditions.checked != "") {
    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          document.getElementById(
            "successMessage"
          ).innerHTML = `Congratulations, ${user.firstname}!<br>Your new account has been successfully created!`;
          document.getElementById("errorsInfo").textContent = "";
          clearForm();
          setTimeout(() => {
            document.getElementById("successMessage").innerHTML = "";
          }, "10000");
        }
      })
      .catch((error) => {
        console.log(error.message);
        document.getElementById("errorsInfo").textContent =
          "An error has occurred. Please try again later!";
      });
  }
}

// 4 - FORM CLEARING
function clearForm() {
  inputs.forEach(function (input) {
    input.value = "";
    input.classList.remove("input_valid");
    input.classList.remove("filled");
    input.classList.remove("input_error");
  });

  form.elements.signupNewsletter.checked = "";
}

// 5 - FORM RESET
form.addEventListener("reset", function () {
  clearForm();

  document.getElementById("errorsInfo").textContent = "";
  document.getElementById("successMessage").textContent = "";

  document
    .querySelectorAll(".form__required")
    .forEach((element) => (element.textContent = ""));
});

// 6 - INPUT DECORATION
//  * green check symbol if input is filled & valid;
//  * red color and warning message if input is invalid;

let emailRegex =
  /^((([0-9A-Za-z]{1}[-0-9A-z.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,14})$/;
let passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; //8-15 characters, one uppercase letter, one lowercase letter, one numeric digit, and one special character
let namesRegex =
  /^[-a-zàáâäåæçèéêëìíîïñòóôöùúûüA-ZÀÁÂÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÖÙÚÛÜ0-9.'\s]+$/; //latin characters, digits, spaces, hyphens, single quotes, uncommon letters
let postalCodeRegex = /^[-A-Za-z0-9\s]+$/; //latin characters, digits, spaces, hyphens
let countryRegex = /^[-a-zA-Z\s]+$/; //latin characters, spaces, hyphens
let phoneRegex = /^[0-9+]{1,}[0-9\-.()\s]{3,29}$/; //digits, spaces, hyphens, dots, parentheses

for (const input of inputs) {
  if (input.type != "checkbox")
    input.addEventListener("input", function () {
      input.value != ""
        ? input.classList.add("filled")
        : input.classList.remove("filled");

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
        input.classList.remove("input_error");
        document.getElementById(`${input.id}__Required`).textContent = "";
      } else {
        input.classList.remove("input_valid");
        input.classList.add("input_error");
        document.getElementById(
          `${input.id}__Required`
        ).textContent = `${input.placeholder} is invalid`;
      }
    });
}

// 7 - AGREE TO PRIVACY & CONDITIONS
document
  .querySelector("#acceptConditions")
  .addEventListener("change", function addAccept() {
    if (form.elements.acceptConditions.checked == "") {
      document.getElementById("acceptRequired").textContent =
        "You must agree to the Terms & Conditions and Privacy Policy.";
    } else {
      document.getElementById("acceptRequired").textContent = "";
    }
  });

// 8 - INPUT TEXT TRANSFORMATION
form.elements.email.addEventListener("change", function () {
  form.elements.email.value = form.elements.email.value.trim().toLowerCase();
});

form.elements.firstName.addEventListener("change", function () {
  form.elements.firstName.value = capitalizeNames(
    form.elements.firstName.value
  );
});

form.elements.lastName.addEventListener("change", function () {
  form.elements.lastName.value = capitalizeNames(form.elements.lastName.value);
});

form.elements.address.addEventListener("change", function () {
  form.elements.address.value = capitalizeNames(form.elements.address.value);
});

form.elements.postalCode.addEventListener("change", function () {
  form.elements.postalCode.value = form.elements.postalCode.value
    .trim()
    .toUpperCase();
});

form.elements.city.addEventListener("change", function () {
  const cityParts = form.elements.city.value.trim().toLowerCase().split(" ");

  const cityUpper = [];
  for (const part of cityParts) {
    cityUpper.push(part[0].toUpperCase() + part.slice(1));
  }

  const city = cityUpper.join(" ");
  const cityIndex = city.lastIndexOf("-") + 1;

  form.elements.city.value =
    city.slice(0, cityIndex) +
    city[cityIndex].toUpperCase() +
    city.slice(cityIndex + 1);
});

form.elements.phone.addEventListener("change", function () {
  form.elements.phone.value = form.elements.phone.value.trim();
});

form.elements.country.addEventListener("change", function () {
  const country = capitalizeNames(form.elements.country.value)
    .replaceAll(" And ", " and ")
    .replaceAll(" Of ", " of ")
    .replaceAll(" The ", " the ");
  form.elements.country.value = country;
});

const capitalizeNames = function (name) {
  const namesInit = name.trim().toLowerCase().split("-");

  let namesUpper = [];

  for (const n of namesInit) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  namesUpper = namesUpper.join("-").split(" ");

  let names = [];

  for (const n of namesUpper) {
    names.push(n[0].toUpperCase() + n.slice(1));
  }

  return names.join(" ");
};
