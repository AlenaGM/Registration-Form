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
}

let addFilledPassword = () =>{
    document.getElementById("userPassword").classList.add ('filled');
}

let addFilledFirstName = () =>{
    document.getElementById("userFirstName").classList.add ('filled');
}

let addFilledLastName = () =>{
    document.getElementById("userLastName").classList.add ('filled');
}

let addFilledAddress = () =>{
    document.getElementById("userAddress").classList.add ('filled');
    document.getElementById("userAddress").classList.add ('input_valid');
}

let addFilledPostcode = () =>{
    document.getElementById("userPostcode").classList.add ('filled');
    document.getElementById("userPostcode").classList.add ('input_valid');
}

let addFilledCity = () =>{
    document.getElementById("userCity").classList.add ('filled');
    document.getElementById("userCity").classList.add ('input_valid');
}

let addFilledcountry = () =>{
    document.getElementById("userCountry").classList.add ('filled');
}

let addFilledPhone = () =>{
    document.getElementById("userPhone").classList.add ('filled');
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
        document.getElementById("userEmail").className += " input_error";
    }
    else {
        document.getElementById("userEmail").className += " input_valid";
    };

    if (userPassword.value == '') {
        document.getElementById("userPassword").className += " input_error";
    }
    else {
        document.getElementById("userPassword").className += " input_valid";
    };

    if (userFirstName.value == '') {
        document.getElementById("userFirstName").className += " input_error";
    }
    else {
        document.getElementById("userFirstName").className += " input_valid";
    };

    if (userLastName.value == '') {
        document.getElementById("userLastName").className += " input_error";
    }
    else {
        document.getElementById("userLastName").className += " input_valid";
    };


    if (userCountry.value == '') {
        document.getElementById("userCountry").className += " input_error";
    }
    else {
        document.getElementById("userCountry").className += " input_valid";
    };

    if (userPhone.value == '') {
        document.getElementById("userPhone").className += " input_error";
    }
    else {
        document.getElementById("userPhone").className += " input_valid";
    };
    /*Конец украшательству */
}














