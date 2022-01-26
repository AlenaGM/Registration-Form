let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let userFirstName = document.getElementById("userFirstName");
let userLastName = document.getElementById("userLastName");
let userAddress = document.getElementById("userAddress");
let userPostcode = document.getElementById("userPostcode");
let userCity = document.getElementById("userCity");
let userCountry = document.getElementById("userCountry");
let userPhone = document.getElementById("userPhone");

let emailValid = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
let passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
let nameValid = /^[a-z ,.'-]+$/i;

const cb = document.querySelector('#accept');

/*Для оформления*/
let addFilledEmail = () =>{
    userEmail.classList.add ('filled');
    document.getElementById('emailRequired').innerHTML = '';

    if (userEmail.value == '') {
        userEmail.classList.remove ('filled');
        userEmail.classList.remove ('input_valid');

    } else if (!emailValid.test(userEmail.value)) {
        userEmail.classList.remove ('input_valid');
        document.getElementById('emailRequired').innerHTML = 'Enter a valid e-mail address';

        } else {
            userEmail.classList.add ('input_valid');
    }
}

let addFilledPassword = () =>{
    userPassword.classList.add ('filled');
    document.getElementById('passwordRequired').innerHTML = '';

    if (userPassword.value == '') {
        userPassword.classList.remove ('input_valid');
        userPassword.classList.remove ('filled');

    } else if(!passwordValid.test(userPassword.value)){
        userPassword.classList.remove ('input_valid');
        document.getElementById('passwordRequired').innerHTML = 'Enter a valid password';

    } else {
        userPassword.classList.add ('input_valid');
    };
}

let addFilledFirstName = () =>{
    userFirstName.classList.add ('filled');
    document.getElementById('firstNameRequired').innerHTML = '';

    if (userFirstName.value == '') {
        userFirstName.classList.remove ('input_valid');
        userFirstName.classList.remove ('filled');

    } else if(!nameValid.test(userFirstName.value)){
        userFirstName.classList.remove ('input_valid');
        document.getElementById('firstNameRequired').innerHTML = 'Enter a valid first name';

    } else {
        userFirstName.classList.add ('input_valid');
    };
}

let addFilledLastName = () =>{
    userLastName.classList.add ('filled');
    document.getElementById('lastNameRequired').innerHTML = '';

    if (userLastName.value == '') {
        userLastName.classList.remove ('input_valid');
        userLastName.classList.remove ('filled');

    } else if(!nameValid.test(userLastName.value)){
        userLastName.classList.remove ('input_valid');
        document.getElementById('lastNameRequired').innerHTML = 'Enter a valid last name';

    } else {
        userLastName.classList.add ('input_valid');
    };
}

let addFilledAddress = () =>{
    userAddress.classList.add ('filled');

    if (userAddress.value != '') {
        userAddress.classList.add ('input_valid');
    } else {
        userAddress.classList.remove ('input_valid');
        userAddress.classList.remove ('filled');
    };
}

let addFilledPostcode = () =>{
    userPostcode.classList.add ('filled');

    if (userPostcode.value != '') {
        userPostcode.classList.add ('input_valid');
    } else {
        userPostcode.classList.remove ('input_valid');
        userPostcode.classList.remove ('filled');
    };
}

let addFilledCity = () =>{
    userCity.classList.add ('filled');

    if (userCity.value != '') {
        userCity.classList.add ('input_valid');
    } else {
        userCity.classList.remove ('input_valid');
        userCity.classList.remove ('filled');
    };
}

let addFilledCountry = () =>{
    userCountry.classList.add ('filled');
    document.getElementById('countryRequired').innerHTML = '';

    if (userCountry.value == '') {
        userCountry.classList.remove ('input_valid');
        userCountry.classList.remove ('filled');

    } else if(!nameValid.test(userCountry.value)){
        userCountry.classList.remove ('input_valid');
        document.getElementById('countryRequired').innerHTML = 'Enter a valid country';

    } else {
        userCountry.classList.add ('input_valid');
    };
}

let addFilledPhone = () =>{
    userPhone.classList.add ('filled');
    document.getElementById('phoneRequired').innerHTML = '';

    if (userPhone.value != '') {
        userPhone.classList.add ('input_valid');
    } else {
        userPhone.classList.remove ('input_valid');
        userPhone.classList.remove ('filled');
    };
}

let addAccept = () =>{
    if (cb.checked == '') {

    } else {
        document.getElementById('acceptRequired').innerHTML = '';
    };
}

/*Конец оформления*/

function checkValidity() {
    if (userEmail.classList.contains('input_valid') && userPassword.classList.contains('input_valid') && userFirstName.classList.contains('input_valid') && userLastName.classList.contains('input_valid') && userCountry.classList.contains('input_valid') && userPhone.classList.contains('input_valid') && cb.checked != '') {
        document.getElementById('errorMessage').innerHTML = "";
        document.getElementById('successMessage').innerHTML = `Congratulations, ${userFirstName.value}!<br>Your new account has been successfully created!`;
    } else {
        document.getElementById('errorMessage').innerHTML = "The information you entered is incorrect or<br>not all required fields have been entered.<br> Please check it and try again";
        document.getElementById('successMessage').innerHTML = "";
    };

    if (userEmail.value == '') {
        userEmail.classList.remove ('input_valid');
        userEmail.classList.add ('input_error');
        document.getElementById('emailRequired').innerHTML = 'E-mail is required';
    } else {
        document.getElementById('emailRequired').innerHTML = '';
    };

    if (userPassword.value == '') {
        userPassword.classList.remove ('input_valid');
        userPassword.classList.add ('input_error');
        document.getElementById('passwordRequired').innerHTML = 'Password is required';
    } else {
        document.getElementById('passwordRequired').innerHTML = '';
    };

    if (userFirstName.value == '') {
        userFirstName.classList.remove ('input_valid');
        userFirstName.classList.add ('input_error');
        document.getElementById('firstNameRequired').innerHTML = 'First name is required';
    } else {
        document.getElementById('firstNameRequired').innerHTML = '';
    };

    if (userLastName.value == '') {
        userLastName.classList.remove ('input_valid');
        userLastName.classList.add ('input_error');
        document.getElementById('lastNameRequired').innerHTML = 'Last name is required';
    } else {
        document.getElementById('lastNameRequired').innerHTML = '';
    };

    if (userCountry.value == '') {
        userCountry.classList.remove ('input_valid');
        userCountry.classList.add ('input_error');
        document.getElementById('countryRequired').innerHTML = 'Country is required';
    } else {
        document.getElementById('countryRequired').innerHTML = '';
    };

    if (userPhone.value == '') {
        userPhone.classList.remove ('input_valid');
        userPhone.classList.add ('input_error');
        document.getElementById('phoneRequired').innerHTML = 'Phone is required';
    } else {
        document.getElementById('phoneRequired').innerHTML = '';
    };

    if (cb.checked == '') {
        console.log('hihihi')
        document.getElementById('acceptRequired').innerHTML = 'You must agree to Terms & Conditions and Privacy Policy';
    } else {
        console.log('ok')
        document.getElementById('acceptRequired').innerHTML = '';
    };

}

