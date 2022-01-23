let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let userFirstName = document.getElementById("userFirstName");
let userLastName = document.getElementById("userLastName");
let userAddress = document.getElementById("userAddress");
let userPostcode = document.getElementById("userPostcode");
let userCity = document.getElementById("userCity");
let userCountry = document.getElementById("userCountry");
let userPhone = document.getElementById("userPhone");

/*Для оформления: при присвоении класса filled label поднимается в верхний левый угол,
на старом месте видно placeholder. Как сделать так, чтоб он изменялся сразу, без нажатия на кнопку?*/
document.getElementById("userEmail").className += " filled";
document.getElementById("userPassword").className += " filled";
document.getElementById("userFirstName").className += " filled";
document.getElementById("userLastName").className += " filled";
document.getElementById("userAddress").className += " filled";
document.getElementById("userPostcode").className += " filled";
document.getElementById("userCity").className += " filled";
document.getElementById("userCountry").className += " filled";
document.getElementById("userPhone").className += " filled";
/*Конец оформления*/


let checkValidity = () =>{
    if(userEmail.value == '' || userPassword.value == '' || userFirstName.value == '' || userLastName.value == '' || userCountry.value == '' || userPhone.value == '') {
        document.getElementById('errorMessage').innerHTML = "The information you entered is incorrect or<br>not all required fields are filled. Please check it and try again";
        document.getElementById('successMessage').innerHTML = "";
    }

    else {
        document.getElementById('errorMessage').innerHTML = "";
        document.getElementById('successMessage').innerHTML = `Congratulations, ${userFirstName.value}!<br>Your new account has been successfully created!`;
    };

    /*Украшательство*/
    if(userEmail.value == '') {
        document.getElementById("userEmail").className += " input_error";
    }
    else {
        document.getElementById("userEmail").className += " input_valid";
    };

    if(userPassword.value == '') {
        document.getElementById("userPassword").className += " input_error";
    }
    else {
        document.getElementById("userPassword").className += " input_valid";
    };

    if(userFirstName.value == '') {
        document.getElementById("userFirstName").className += " input_error";
    }
    else {
        document.getElementById("userFirstName").className += " input_valid";
    };

    if(userLastName.value == '') {
        document.getElementById("userLastName").className += " input_error";
    }
    else {
        document.getElementById("userLastName").className += " input_valid";
    };

    if(userAddress.value == '') {
        document.getElementById("userAddress").className += " input_error";
    }
    else {
        document.getElementById("userAddress").className += " input_valid";
    };

    if(userPostcode.value == '') {
        document.getElementById("userPostcode").className += " input_error";
    }
    else {
        document.getElementById("userPostcode").className += " input_valid";
    };

    if(userCity.value == '') {
        document.getElementById("userCity").className += " input_error";
    }
    else {
        document.getElementById("userCity").className += " input_valid";
    };

    if(userCountry.value == '') {
        document.getElementById("userCountry").className += " input_error";
    }
    else {
        document.getElementById("userCountry").className += " input_valid";
    };

    if(userPhone.value == '') {
        document.getElementById("userPhone").className += " input_error";
    }
    else {
        document.getElementById("userPhone").className += " input_valid";
    };
    /*Конец украшательству */
}














