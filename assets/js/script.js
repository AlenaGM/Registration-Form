let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let userFirstName = document.getElementById("userFirstName");
let userLastName = document.getElementById("userLastName");
let userAddress = document.getElementById("userAddress");
let userPostcode = document.getElementById("userPostcode");
let userCity = document.getElementById("userCity");
let userCountry = document.getElementById("userCountry");
let userPhone = document.getElementById("userPhone");

/*Для оформления*/
let addFilledEmail = () =>{
    document.getElementById("userEmail").classList.add ('filled');
    document.getElementById('emailRequired').innerHTML = '';

    if (userEmail.value != '') {
        document.getElementById("userEmail").classList.add ('input_valid');
    } else {
        document.getElementById("userEmail").classList.remove ('input_valid');
        document.getElementById("userEmail").classList.remove ('filled');
    };
}

let addFilledPassword = () =>{
    document.getElementById("userPassword").classList.add ('filled');
    document.getElementById('passwordRequired').innerHTML = '';

    if (userPassword.value != '') {
        document.getElementById("userPassword").classList.add ('input_valid');
    } else {
        document.getElementById("userPassword").classList.remove ('input_valid');
        document.getElementById("userPassword").classList.remove ('filled');
    };
}

let addFilledFirstName = () =>{
    document.getElementById("userFirstName").classList.add ('filled');
    document.getElementById('firstNameRequired').innerHTML = '';

    if (userFirstName.value != '') {
        document.getElementById("userFirstName").classList.add ('input_valid');
    } else {
        document.getElementById("userFirstName").classList.remove ('input_valid');
        document.getElementById("userFirstName").classList.remove ('filled');
    };
}

let addFilledLastName = () =>{
    document.getElementById("userLastName").classList.add ('filled');
    document.getElementById('lastNameRequired').innerHTML = '';

    if (userLastName.value != '') {
        document.getElementById("userLastName").classList.add ('input_valid');
    } else {
        document.getElementById("userLastName").classList.remove ('input_valid');
        document.getElementById("userLastName").classList.remove ('filled');
    };
}

let addFilledAddress = () =>{
    document.getElementById("userAddress").classList.add ('filled');

    if (userAddress.value != '') {
        document.getElementById("userAddress").classList.add ('input_valid');
    } else {
        document.getElementById("userAddress").classList.remove ('input_valid');
        document.getElementById("userAddress").classList.remove ('filled');
    };
}

let addFilledPostcode = () =>{
    document.getElementById("userPostcode").classList.add ('filled');

    if (userPostcode.value != '') {
        document.getElementById("userPostcode").classList.add ('input_valid');
    } else {
        document.getElementById("userPostcode").classList.remove ('input_valid');
        document.getElementById("userPostcode").classList.remove ('filled');
    };
}

let addFilledCity = () =>{
    document.getElementById("userCity").classList.add ('filled');

    if (userCity.value != '') {
        document.getElementById("userCity").classList.add ('input_valid');
    } else {
        document.getElementById("userCity").classList.remove ('input_valid');
        document.getElementById("userCity").classList.remove ('filled');
    };
}

let addFilledCountry = () =>{
    document.getElementById("userCountry").classList.add ('filled');
    document.getElementById('countryRequired').innerHTML = '';

    if (userCountry.value != '') {
        document.getElementById("userCountry").classList.add ('input_valid');
    } else {
        document.getElementById("userCountry").classList.remove ('input_valid');
        document.getElementById("userCountry").classList.remove ('filled');
    };
}

let addFilledPhone = () =>{
    document.getElementById("userPhone").classList.add ('filled');
    document.getElementById('phoneRequired').innerHTML = '';

    if (userPhone.value != '') {
        document.getElementById("userPhone").classList.add ('input_valid');
    } else {
        document.getElementById("userPhone").classList.remove ('input_valid');
        document.getElementById("userPhone").classList.remove ('filled');
    };
}
/*Конец оформления*/


function checkValidity() {
    if (userEmail.value == '' || userPassword.value == '' || userFirstName.value == '' || userLastName.value == '' || userCountry.value == '' || userPhone.value == '') {
        document.getElementById('errorMessage').innerHTML = "The information you entered is incorrect or<br>not all required fields are filled. Please check it and try again";
        document.getElementById('successMessage').innerHTML = "";
    }

    else {
        document.getElementById('errorMessage').innerHTML = "";
        document.getElementById('successMessage').innerHTML = `Congratulations, ${userFirstName.value}!<br>Your new account has been successfully created!`;
    };


    /*Украшательство*/
    if (userEmail.value == '') {
        document.getElementById("userEmail").classList.remove ('input_valid');
        document.getElementById("userEmail").classList.add ('input_error');
        document.getElementById('emailRequired').innerHTML = 'Email is required';
    } else {
        document.getElementById('emailRequired').innerHTML = '';
    };

    if (userPassword.value == '') {
        document.getElementById("userPassword").classList.remove ('input_valid');
        document.getElementById("userPassword").classList.add ('input_error');
        document.getElementById('passwordRequired').innerHTML = 'Password is required';
    } else {
        document.getElementById('passwordRequired').innerHTML = '';
    };

    if (userFirstName.value == '') {
        document.getElementById("userFirstName").classList.remove ('input_valid');
        document.getElementById("userFirstName").classList.add ('input_error');
        document.getElementById('firstNameRequired').innerHTML = 'First name is required';
    } else {
        document.getElementById('firstNameRequired').innerHTML = '';
    };

    if (userLastName.value == '') {
        document.getElementById("userLastName").classList.remove ('input_valid');
        document.getElementById("userLastName").classList.add ('input_error');
        document.getElementById('lastNameRequired').innerHTML = 'Last name is required';
    } else {
        document.getElementById('lastNameRequired').innerHTML = '';
    };

    if (userCountry.value == '') {
        document.getElementById("userCountry").classList.remove ('input_valid');
        document.getElementById("userCountry").classList.add ('input_error');
        document.getElementById('countryRequired').innerHTML = 'Country is required';
    } else {
        document.getElementById('countryRequired').innerHTML = '';
    };

    if (userPhone.value == '') {
        document.getElementById("userPhone").classList.remove ('input_valid');
        document.getElementById("userPhone").classList.add ('input_error');
        document.getElementById('phoneRequired').innerHTML = 'Phone is required';
    } else {
        document.getElementById('phoneRequired').innerHTML = '';
    };
    /*Конец украшательству */

}
















