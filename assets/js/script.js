const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const userFirstName = document.getElementById("userFirstName");
const userLastName = document.getElementById("userLastName");
const userAddress = document.getElementById("userAddress");
const userPostcode = document.getElementById("userPostcode");
const userCity = document.getElementById("userCity");
const userCountry = document.getElementById("userCountry");
const userPhone = document.getElementById("userPhone");

//Регулярки где-то стащила, но проверяла и отлаживала сама
//Так как нет конкретной страны все, кроме эл.почты и пароля очень лайтово - лишь бы совсем посторонних символов не было
let emailValid = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,3})$/;
let passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;//8-15 знаков, вкл. как минимум, 1 заглавную и 1 прописную букву, 1 цифру и 1 спецсимвол
let nameValid = /^[-a-zàáâäåæçèéêëìíîïñòóôöùúûüA-ZÀÁÂÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÖÙÚÛÜ\s']+$/;//Латиница, дефисы, пробелы, апострофы, необычные буквы
let addressValid =  /^[-a-zàáâäåæçèéêëìíîïñòóôöùúûüA-ZÀÁÂÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÖÙÚÛÜ0-9\s']+$/;//Латиница, цифры, пробелы, дефисы, апострофы, необычные буквы
let postcodeValid = /^[-A-Za-z0-9 ]{4,9}$/;//Латиница, цифры, пробелы, дефисы, от 4 до 9 знаков
let countryValid = /^[-a-zA-Z\s]+$/;//Латиница, пробелы, дефисы
let phoneValid = /^[- ()+.0-9\s]{6,15}$/;//Цифры, пробелы, дефисы, круглые скобки, от 6 до 15 знаков

const cb = document.querySelector('#accept');


/*/Для меня, на всякий случай, тест regex
let text = "alena@mail.rupp"; let pattern = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,3})$/;
let result = pattern.test(text);
console.log(result);*/



//Ниже код, в основном, из лекции: перебирает инпуты и собирает коллекцию ошибок, которую выводит списком в конце

let errors = [];

function checkValidity (input) {

    document.getElementById('successMessage').innerHTML = '';

    let validity = input.validity;

    if(validity.valueMissing) {
        //errors.push(input.placeholder + ' is required!');
        errors++
    }

    if(validity.patternMismatch) {
        //errors.push(input.placeholder + ' format is not valid');
        errors++
    }

    if(validity.tooLong) {
        let maxlength = getAttributeValue(input, 'maxlength');
        //errors.push('Maximum number of symbols is ' + maxlength);
        errors++
    }

    if (cb.checked == '') {//Нужно согласие с условиями
        document.getElementById('acceptRequired').innerHTML = 'You must agree to Terms & Conditions and Privacy Policy';
        errors++
    }

    if(errors.length!=0 || cb.checked == ''){
        document.getElementById('errorsInfo').innerHTML = '';
    }else{
        document.getElementById('successMessage').innerHTML = '';
    }
}


function checkAll() {

    errors = [];

    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        checkValidity(input);
    }

    if(errors.length!=0 || cb.checked == ''){
        document.getElementById('errorsInfo').innerHTML = 'Please make sure all fields are filled in correctly';
    }else{
        document.getElementById('successMessage').innerHTML = '';
        document.getElementById('errorsInfo').innerHTML = '';
    }
    //document.getElementById('errorsInfo').innerHTML = errors.join('. <br>');
}

document.querySelector('#fullSteamAhead').addEventListener('click', function(event){
    event.preventDefault();

    checkAll();

    //НОВЫЙ КОД 21-Й НЕДЕЛИ ОТПРАВКА ФОРМЫ
let user = {
    "first name": userFirstName.value,
    "last name": userLastName.value,
    "e-mail": userEmail.value,
    "password": userPassword.value,
    "address": userAddress.value,
    "postcode": userPostcode.value,
    "city": userCity.value,
    "country": userCountry.value,
    "phone": userPhone.value,
}

    if (errors == 0){
        fetch("https://httpbin.org/post",
        {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type':'application/json; charset=utf-8'
            },
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

});
//КОНЕЦ НОВОГО КОДА 21-Й НЕДЕЛИ ОТПРАВКА ФОРМЫ

//Ниже чуть доработанный код из 15-й недели
//Нужен для оформления: каждое поле проходит валидацию по мере заполнения формы и радует пользователя галочкой
// и жизнерадостным зеленым цветом, в отличие от красного, который появляется только в конце после нажатия на кнопку
//(Ну и жалко было столько кода выкидывать)

document.querySelector('#userEmail').addEventListener('change', function addFilledEmail(){//Эл.почта

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

    document.querySelector('#userEmail').value = userEmail.value.trim().toLowerCase();//чтобы лучше смотрелось

    checkAll();
});


document.querySelector('#userPassword').addEventListener('change', function addFilledPassword(){//Пароль

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

    checkAll();
});


document.querySelector('#userFirstName').addEventListener('change', function addFilledFirstName(){//Имя

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

    document.querySelector('#userFirstName').value = userFirstName.value.trim().toUpperCase();//чтобы везде было одинаково и много кода не писать

    checkAll();
});


document.querySelector('#userLastName').addEventListener('change', function addFilledLastName(){//Фамилия

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

    document.querySelector('#userLastName').value = userLastName.value.trim().toUpperCase();

    checkAll();
});


document.querySelector('#userAddress').addEventListener('change', function addFilledAddress(){//Адрес(необязательный)

    userAddress.classList.add ('filled');
    document.getElementById('addressRequired').innerHTML = '';

    if (userAddress.value == '') {
        userAddress.classList.remove ('input_valid');
        userAddress.classList.remove ('filled');

    } else if(!addressValid.test(userAddress.value)){
        userAddress.classList.remove ('input_valid');
        document.getElementById('addressRequired').innerHTML = 'Please check, if address is correct';

    } else {
        userAddress.classList.add ('input_valid');
    };

    document.querySelector('#userAddress').value = userAddress.value.trim().toUpperCase();

    checkAll();
});


document.querySelector('#userPostcode').addEventListener('change', function addFilledPostcode(){//Индекс

    userPostcode.classList.add ('filled');
    document.getElementById('postcodeRequired').innerHTML = '';

    if (userPostcode.value == '') {
        userPostcode.classList.remove ('input_valid');
        userPostcode.classList.remove ('filled');

    } else if(!postcodeValid.test(userPostcode.value)){
        userPostcode.classList.remove ('input_valid');
        document.getElementById('postcodeRequired').innerHTML = 'Enter a valid postcode';

    } else {
        userPostcode.classList.add ('input_valid');
    };

    document.querySelector('#userPostcode').value = userPostcode.value.trim().toUpperCase();

    checkAll();
});


document.querySelector('#userCity').addEventListener('change', function addFilledCity(){//Город

    userCity.classList.add ('filled');
    document.getElementById('cityRequired').innerHTML = '';

    if (userCity.value == '') {
        userCity.classList.remove ('input_valid');
        userCity.classList.remove ('filled');

    } else if(!nameValid.test(userCity.value)){
        userCity.classList.remove ('input_valid');
        document.getElementById('cityRequired').innerHTML = 'Enter a valid city';

    } else {
        userCity.classList.add ('input_valid');
    };

    document.querySelector('#userCity').value = userCity.value.trim().toUpperCase();

    checkAll();
});


document.querySelector('#userCountry').addEventListener('change', function addFilledCountry(){//Страна

    userCountry.classList.add ('filled');
    document.getElementById('countryRequired').innerHTML = '';

    if (userCountry.value == '') {
        userCountry.classList.remove ('input_valid');
        userCountry.classList.remove ('filled');

    } else if(!countryValid.test(userCountry.value)){
        userCountry.classList.remove ('input_valid');
        document.getElementById('countryRequired').innerHTML = 'Enter a valid country';

    } else {
        userCountry.classList.add ('input_valid');
    };

    document.querySelector('#userCountry').value = userCountry.value.trim().toUpperCase();

    checkAll();
});


document.querySelector('#userPhone').addEventListener('change', function addFilledPhone(){//Тел.

    userPhone.classList.add ('filled');
    document.getElementById('phoneRequired').innerHTML = '';

    if (userPhone.value == '') {
        userPhone.classList.remove ('input_valid');
        userPhone.classList.remove ('filled');

    } else if(!phoneValid.test(userPhone.value)){
        userPhone.classList.remove ('input_valid');
        document.getElementById('phoneRequired').innerHTML = 'Enter a valid phone';

    } else {
        userPhone.classList.add ('input_valid');
    };

    checkAll();
});


document.querySelector('#accept').addEventListener('change', function addAccept(){//Согласие с условиями

    if (cb.checked == ''){
        document.getElementById('acceptRequired').innerHTML = 'You must agree to Terms & Conditions and Privacy Policy';
    } else {
        document.getElementById('acceptRequired').innerHTML = '';
    };

    checkAll();
});


//Еще немного остатков предыдущего кода, главным образом нужного для оформительских целей.
//При нажатии "Создать аккаунт" либо выводит поздравление либо подчеркивает красным и ругается под каждым конкретным полем
//Сделала "на изменение", а не "на клик", чтобы не пугать пользователя большим количеством красного с места в карьер

document.querySelector('#fullSteamAhead').addEventListener('click', function addRequired() {

    if(errors.length==0 && cb.checked != ''){//Все ОК, аккаунт создан
        document.getElementById('successMessage').innerHTML = `Congratulations, ${userFirstName.value}!<br>Your new account has been successfully created!`;
    }

    if (userEmail.value == '') {//Нужна эл.почта
        userEmail.classList.remove ('input_valid');
        userEmail.classList.add ('input_error');
        document.getElementById('emailRequired').innerHTML = 'E-mail is required';
    } else {
        document.getElementById('emailRequired').innerHTML = '';
    };

    if (userPassword.value == '') {//Нужен пароль
        userPassword.classList.remove ('input_valid');
        userPassword.classList.add ('input_error');
        document.getElementById('passwordRequired').innerHTML = 'Password is required';
    } else {
        document.getElementById('passwordRequired').innerHTML = '';
    };

    if (userFirstName.value == '') {//Нужно имя
        userFirstName.classList.remove ('input_valid');
        userFirstName.classList.add ('input_error');
        document.getElementById('firstNameRequired').innerHTML = 'First name is required';
    } else {
        document.getElementById('firstNameRequired').innerHTML = '';
    };

    if (userLastName.value == '') {//Нужна фамилия
        userLastName.classList.remove ('input_valid');
        userLastName.classList.add ('input_error');
        document.getElementById('lastNameRequired').innerHTML = 'Last name is required';
    } else {
        document.getElementById('lastNameRequired').innerHTML = '';
    };

    if (userPostcode.value == '') {//Нужен индекс
        userPostcode.classList.remove ('input_valid');
        userPostcode.classList.add ('input_error');
        document.getElementById('postcodeRequired').innerHTML = 'Postcode is required';
    } else {
        document.getElementById('postcodeRequired').innerHTML = '';
    };

    if (userCity.value == '') {//Нужен город
        userCity.classList.remove ('input_valid');
        userCity.classList.add ('input_error');
        document.getElementById('cityRequired').innerHTML = 'City name is required';
    } else {
        document.getElementById('cityRequired').innerHTML = '';
    };

    if (userCountry.value == '') {//Нужна страна
        userCountry.classList.remove ('input_valid');
        userCountry.classList.add ('input_error');
        document.getElementById('countryRequired').innerHTML = 'Country is required';
    } else {
        document.getElementById('countryRequired').innerHTML = '';
    };

    if (userPhone.value == '') {//Нужен тел.
        userPhone.classList.remove ('input_valid');
        userPhone.classList.add ('input_error');
        document.getElementById('phoneRequired').innerHTML = 'Phone is required';
    } else {
        document.getElementById('phoneRequired').innerHTML = '';
    };

    if (cb.checked == '') {//Нужно согласие с условиями
        document.getElementById('acceptRequired').innerHTML = 'You must agree to Terms & Conditions and Privacy Policy';
    } else {
        document.getElementById('acceptRequired').innerHTML = '';
    };

    /*/Очищаем форму после отправки
    userEmail.value = ''; userEmail.classList.remove ('input_valid'); userEmail.classList.remove ('filled');
    userPassword.value = ''; userPassword.classList.remove ('input_valid'); userPassword.classList.remove ('filled');
    userFirstName.value = ''; userFirstName.classList.remove ('input_valid'); userFirstName.classList.remove ('filled');
    userLastName.value = ''; userLastName.classList.remove ('input_valid'); userLastName.classList.remove ('filled');
    userAddress.value = ''; userAddress.classList.remove ('input_valid'); userAddress.classList.remove ('filled');
    userCity.value = ''; userCity.classList.remove ('input_valid'); userCity.classList.remove ('filled');
    userCountry.value = ''; userCountry.classList.remove ('input_valid'); userCountry.classList.remove ('filled');
    userPostcode.value = ''; userPostcode.classList.remove ('input_valid'); userPostcode.classList.remove ('filled');
    userPhone.value = ''; userPhone.classList.remove ('input_valid'); userPhone.classList.remove ('filled');*/
});


