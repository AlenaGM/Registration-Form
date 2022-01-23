let userEmail = document.getElementById("userEmail").value;
let userPassword = document.getElementById("userPassword").value;
let userFirstName = document.getElementById("userFirstName").value;
let userLastName = document.getElementById("userLastName").value;
let userAddress = document.getElementById("userAddress").value;
let userPostcode = document.getElementById("userPostcode").value;
let userCity = document.getElementById("userCity").value;
let userCountry = document.getElementById("userCountry").value;
let userPhone = document.getElementById("userPhone").value;


if (userEmail == '') {;
    document.getElementById("userEmail").className += " filled";
};

if (userPassword == '') {;
    document.getElementById("userPassword").className += " filled";
};

if (userFirstName == '') {;
    document.getElementById("userFirstName").className += " filled";
};

if (userLastName == '') {;
    document.getElementById("userLastName").className += " filled";
};

if (userAddress == '') {;
    document.getElementById("userAddress").className += " filled";
};

if (userPostcode == '') {;
    document.getElementById("userPostcode").className += " filled";
};

if (userCity == '') {;
    document.getElementById("userCity").className += " filled";
};

if (userCountry == '') {;
    document.getElementById("userCountry").className += " filled";
};

if (userPhone == '') {;
    document.getElementById("userPhone").className += " filled";
};


/*document.getElementById("userPassword").className += " filled";
document.getElementById("userFirstName").className += " filled";
document.getElementById("userLastName").className += " filled";
document.getElementById("userAddress").className += " filled";
document.getElementById("userPostcode").className += " filled";
document.getElementById("userCity").className += " filled";
document.getElementById("userCountry").className += " filled";
document.getElementById("userPhone").className += " filled";*/
/*
let userEmail = document.getElementById("userEmail").value;
let userPassword = document.getElementById("userPassword").value;
let userFirstName = document.getElementById("userFirstName").value;
let userLastName = document.getElementById("userLastName").value;
let userAddress = document.getElementById("userAddress").value;
let userPostcode = document.getElementById("userPostcode").value;
let userCity = document.getElementById("userCity").value;
let userCountry = document.getElementById("userCountry").value;
let userPhone = document.getElementById("userPhone").value;

function check(){

    let userEmail = document.getElementById("userEmail").value;
let userPassword = document.getElementById("userPassword").value;
let userFirstName = document.getElementById("userFirstName").value;
let userLastName = document.getElementById("userLastName").value;
let userAddress = document.getElementById("userAddress").value;
let userPostcode = document.getElementById("userPostcode").value;
let userCity = document.getElementById("userCity").value;
let userCountry = document.getElementById("userCountry").value;
let userPhone = document.getElementById("userPhone").value;

if (userEmail == '' || userPassword == '' || userFirstName == '' || userLastName == '' || userAddress == '' || userPostcode == '' || userCity == '' || userCountry == ''|| userPhone == '') {
    alert('hihihihihihi');
};

  };


/*
let check = () => {

    let username = document.getElementById("userFirstname").value;
    let userphone = document.getElementById("userPhone").value;
    let usermail = document.getElementById("userEmail").value;
    let servicetype = document.getElementById("userLastName").value;
    let comment = document.getElementById("userPassword").value;
    document.getElementById('errorMessage').innerHTML = '';

    if (userphone == '' || username == '' || usermail == '' || servicetype == '' || comment == '') {
        document.getElementById('errorMessage').innerHTML = "Не все поля ввода заполнены!<br>";
    };

    else {
        document.getElementById('errorMessage').innerHTML = `${username} , Ваш запрос отправлен!<br>`;
    };
}*/

/*
"use strict"
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {

        e.preventDefault();

        let error = formValidate(form);

        let formData = new formData(form);

        if (error===0){
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });

            if(response.ok){
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');
            }else{
                alert("Ошибка");
                form.classList.remove('_sending');
            }
        }else{
            alert('Заполните обязательные поля');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }

            } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                error++;
            } else if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
        /*return /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/.test(input.value);
    }
});*/







