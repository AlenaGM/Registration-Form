const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const userFirstName = document.getElementById("userFirstName");
const userLastName = document.getElementById("userLastName");
const userAddress = document.getElementById("userAddress");
const userPostcode = document.getElementById("userPostcode");
const userCity = document.getElementById("userCity");
const userCountry = document.getElementById("userCountry");
const userPhone = document.getElementById("userPhone");

//Регулярки
//Так как нет конкретной страны все, кроме эл.почты и пароля очень лайтово - лишь бы совсем посторонних символов не было
let emailValid = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,3})$/;
let passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;//8-15 знаков, вкл. как минимум, 1 заглавную и 1 прописную букву, 1 цифру и 1 спецсимвол
let nameValid = /^[-a-zàáâäåæçèéêëìíîïñòóôöùúûüA-ZÀÁÂÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÖÙÚÛÜ\s']+$/;//Латиница, дефисы, пробелы, апострофы, необычные буквы
let addressValid =  /^[-a-zàáâäåæçèéêëìíîïñòóôöùúûüA-ZÀÁÂÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÖÙÚÛÜ0-9\s']+$/;//Латиница, цифры, пробелы, дефисы, апострофы, необычные буквы
let postcodeValid = /^[-A-Za-z0-9 ]{4,9}$/;//Латиница, цифры, пробелы, дефисы, от 4 до 9 знаков
let countryValid = /^[-a-zA-Z\s]+$/;//Латиница, пробелы, дефисы
let phoneValid = /^[- ()+.0-9\s]{6,15}$/;//Цифры, пробелы, дефисы, круглые скобки, от 6 до 15 знаков

const agreePP = document.querySelector('#accept');
const agreeNL = document.querySelector('#signupNewsletter');

let errors = [];

/*/Для меня, на всякий случай, тест regex
let text = "alena@mail.rupp"; let pattern = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,3})$/;
let result = pattern.test(text);
console.log(result);*/

document.querySelector('#fullSteamAhead').addEventListener('click', function(event){

    event.preventDefault();

    checkAll();//Ищем и считаем ошибки в полях формы

    addRequired();//Если поля не заполнены -> выделяем красным и делаем замечание
    addFailure();//Сообщение в конце с просьбой все проверить
    addSuccess();//Сообщение в конце с сообщением, что все ОК

    sendForm();//Отправка формы и очищение ее полей после
    //Все эти ф-ии со стр.271 и ниже
});


//ФУНКЦИИ КОТОРЫЕ РАБОТАЮТ ПРИ ИЗМЕНЕНИИ ИМПУТОВ стр.50-262
//Нужны для оформления: каждое поле проходит валидацию по мере заполнения формы и радует пользователя галочкой
// и жизнерадостным зеленым цветом, в отличие от красного, который появляется только в конце после нажатия на кнопку

document.querySelector('#userEmail').addEventListener('change', function addFilledEmail(){//Эл.почта

    userEmail.classList.add ('filled');
    document.getElementById('userEmail__Required').innerHTML = '';

    if (userEmail.value == '') {
        userEmail.classList.remove ('filled');
        userEmail.classList.remove ('input_valid');

    } else if (!emailValid.test(userEmail.value)) {
        userEmail.classList.remove ('input_valid');
        document.getElementById('userEmail__Required').innerHTML = 'Enter a valid e-mail address';

        } else {
            userEmail.classList.add ('input_valid');
    }

    document.querySelector('#userEmail').value = userEmail.value.trim().toLowerCase();//чтобы лучше смотрелось

    checkAll();
});


document.querySelector('#userPassword').addEventListener('change', function addFilledPassword(){//Пароль

    userPassword.classList.add ('filled');
    document.getElementById('userPassword__Required').innerHTML = '';

    if (userPassword.value == '') {
        userPassword.classList.remove ('input_valid');
        userPassword.classList.remove ('filled');

    } else if(!passwordValid.test(userPassword.value)){
        userPassword.classList.remove ('input_valid');
        document.getElementById('userPassword__Required').innerHTML = 'Enter a valid password';

    } else {
        userPassword.classList.add ('input_valid');
    };

    checkAll();
});


document.querySelector('#userFirstName').addEventListener('change', function addFilledFirstName(){//Имя

    userFirstName.classList.add ('filled');
    document.getElementById('userFirstName__Required').innerHTML = '';

    if (userFirstName.value == '') {
        userFirstName.classList.remove ('input_valid');
        userFirstName.classList.remove ('filled');

    } else if(!nameValid.test(userFirstName.value)){
        userFirstName.classList.remove ('input_valid');
        document.getElementById('userFirstName__Required').innerHTML = 'Enter a valid first name';

    } else {
        userFirstName.classList.add ('input_valid');
    };

    document.querySelector('#userFirstName').value = userFirstName.value.trim().toUpperCase();//чтобы везде было одинаково и много кода не писать

    checkAll();
});


document.querySelector('#userLastName').addEventListener('change', function addFilledLastName(){//Фамилия

    userLastName.classList.add ('filled');
    document.getElementById('userLastName__Required').innerHTML = '';

    if (userLastName.value == '') {
        userLastName.classList.remove ('input_valid');
        userLastName.classList.remove ('filled');

    } else if(!nameValid.test(userLastName.value)){
        userLastName.classList.remove ('input_valid');
        document.getElementById('userLastName__Required').innerHTML = 'Enter a valid last name';

    } else {
        userLastName.classList.add ('input_valid');
    };

    document.querySelector('#userLastName').value = userLastName.value.trim().toUpperCase();

    checkAll();
});


document.querySelector('#userAddress').addEventListener('change', function addFilledAddress(){//Адрес(необязательный)

    userAddress.classList.add ('filled');
    document.getElementById('userAddress__Required').innerHTML = '';

    if (userAddress.value == '') {
        userAddress.classList.remove ('input_valid');
        userAddress.classList.remove ('filled');

    } else if(!addressValid.test(userAddress.value)){
        userAddress.classList.remove ('input_valid');
        document.getElementById('userAddress__Required').innerHTML = 'Please check, if address is correct';

    } else {
        userAddress.classList.add ('input_valid');
    };

    document.querySelector('#userAddress').value = userAddress.value.trim().toUpperCase();

    checkAll();
});


document.querySelector('#userPostcode').addEventListener('change', function addFilledPostcode(){//Индекс

    userPostcode.classList.add ('filled');
    document.getElementById('userPostcode__Required').innerHTML = '';

    if (userPostcode.value == '') {
        userPostcode.classList.remove ('input_valid');
        userPostcode.classList.remove ('filled');

    } else if(!postcodeValid.test(userPostcode.value)){
        userPostcode.classList.remove ('input_valid');
        document.getElementById('userPostcode__Required').innerHTML = 'Enter a valid postcode';

    } else {
        userPostcode.classList.add ('input_valid');
    };

    document.querySelector('#userPostcode').value = userPostcode.value.trim().toUpperCase();

    checkAll();
});


document.querySelector('#userCity').addEventListener('change', function addFilledCity(){//Город

    userCity.classList.add ('filled');
    document.getElementById('userCity__Required').innerHTML = '';

    if (userCity.value == '') {
        userCity.classList.remove ('input_valid');
        userCity.classList.remove ('filled');

    } else if(!nameValid.test(userCity.value)){
        userCity.classList.remove ('input_valid');
        document.getElementById('userCity__Required').innerHTML = 'Enter a valid city';

    } else {
        userCity.classList.add ('input_valid');
    };

    document.querySelector('#userCity').value = userCity.value.trim().toUpperCase();

    checkAll();
});


document.querySelector('#userCountry').addEventListener('change', function addFilledCountry(){//Страна

    userCountry.classList.add ('filled');
    document.getElementById('userCountry__Required').innerHTML = '';

    if (userCountry.value == '') {
        userCountry.classList.remove ('input_valid');
        userCountry.classList.remove ('filled');

    } else if(!countryValid.test(userCountry.value)){
        userCountry.classList.remove ('input_valid');
        document.getElementById('userCountry__Required').innerHTML = 'Enter a valid country';

    } else {
        userCountry.classList.add ('input_valid');
    };

    document.querySelector('#userCountry').value = userCountry.value.trim().toUpperCase();

    checkAll();
});


document.querySelector('#userPhone').addEventListener('change', function addFilledPhone(){//Тел.

    userPhone.classList.add ('filled');
    document.getElementById('userPhone__Required').innerHTML = '';

    if (userPhone.value == '') {
        userPhone.classList.remove ('input_valid');
        userPhone.classList.remove ('filled');

    } else if(!phoneValid.test(userPhone.value)){
        userPhone.classList.remove ('input_valid');
        document.getElementById('userPhone__Required').innerHTML = 'Enter a valid phone';

    } else {
        userPhone.classList.add ('input_valid');
    };

    checkAll();
});


document.querySelector('#accept').addEventListener('change', function addAccept(){//Согласие с условиями

    if (agreePP.checked == ''){
        document.getElementById('acceptRequired').innerHTML = 'You must agree to Terms & Conditions and Privacy Policy';
    } else {
        document.getElementById('acceptRequired').innerHTML = '';
    };

    checkAll();
});


//ФУНКЦИИ, КОТОРЫЕ ПОДСЧИТЫВАЮТ КОЛИЧЕСТВО ОШИБОК
//Ниже код, который перебирает конкретный инпут и собирает количество ошибок в нем
//(УБРАНО В //: коллекция ошибок выводится общим списком в конце после отправки)
//Сама не работает, включается в другие функции по мере надобности связана с ф-ей checkAll()

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

    if (agreePP.checked == '') {//Нужно согласие с условиями
        document.getElementById('acceptRequired').innerHTML = 'You must agree to Terms & Conditions and Privacy Policy';
        errors++
    }
}

function checkAll() {
    //Ниже код, который перебирает все инпуты и ишет ошибки функцией checkValidity
    errors = [];

    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        checkValidity(input);
    }

    if(errors.length==0 || agreePP.checked != ''){
        document.getElementById('errorsInfo').innerHTML = '';
    }
    //Коллекция ошибок в конце
    //document.getElementById('errorsInfo').innerHTML = errors.join('. <br>');
}

//ФУНКЦИИ КОТОРЫЕ РАБОТАЮТ ПО КЛИКУ НА КНОПКУ "ОТПРАВИТЬ"

function addSuccess() {
    //Если все поля заролнены верно и с условиями согласны, выдает сообщение "Поздравляю, аккаунт создан"
    //Работает по клику
    //Оформительская функция

    if(errors.length==0 && agreePP.checked != ''){//Все ОК, аккаунт создан
        document.getElementById('successMessage').innerHTML = `Congratulations, ${userFirstName.value}!<br>Your new account has been successfully created!`;
    }
}

function addFailure(){
    //Если все поля заролнены c ошибками или с условиями не согласны, выдает сообщение "Проверьте, все ли верно заполнено"
    //Работает по клику
    //Оформительская функция
    if(errors.length!=0 || agreePP.checked == ''){
        document.getElementById('errorsInfo').innerHTML = 'Please make sure all fields are filled in correctly';
    }else{
        document.getElementById('successMessage').innerHTML = '';
        document.getElementById('errorsInfo').innerHTML = '';
    }
}

function addRequired() {
    //Если поле не заполнено, удаляет класс valid, добавляет класс error, пишет прямо под полем, чего не хватает
    //Если поле заполнено, очищает надпись под полем
    //Работает по клику
    //Оформительская функция

    let arr = document.querySelectorAll('input');

    arr.forEach(function(element) {
        if (element.value == '') {//Нужна xxx
            element.classList.remove ('input_valid');
            element.classList.add ('input_error');
            document.getElementById(`${element.id}__Required`).innerHTML = element.placeholder + ` is required`;
        }
    });

    if (agreePP.checked == '') {//Нужно согласие с условиями
        document.getElementById('acceptRequired').innerHTML = 'You must agree to Terms & Conditions and Privacy Policy';
    } else {
        document.getElementById('acceptRequired').innerHTML = '';
    };
};

document.querySelector('#signupNewsletter').addEventListener('click', function(){//Проверяем, есть ли подписка на рассылку
    if (agreeNL.checked=='')
        {
            agreeNL.value="no"
        } else {
            agreeNL.value="yes"
        };
});

function sendForm(){
    //НОВЫЙ КОД 21-Й НЕДЕЛИ ОТПРАВКА ФОРМЫ
    //Отправляем форму
    //Работает по клику
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
    "newsletter": agreeNL.value,
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

        clearForm();
    }
}

function clearForm() {
    //Очищаем форму после отправки
    //Работает по клику
    //Работает строго после отправки формы
    userEmail.value = ''; userEmail.classList.remove ('input_valid'); userEmail.classList.remove ('filled'); userEmail.classList.remove ('input_error');
    userPassword.value = ''; userPassword.classList.remove ('input_valid'); userPassword.classList.remove ('filled'); userPassword.classList.remove ('input_error');
    userFirstName.value = ''; userFirstName.classList.remove ('input_valid'); userFirstName.classList.remove ('filled'); userFirstName.classList.remove ('input_error');
    userLastName.value = ''; userLastName.classList.remove ('input_valid'); userLastName.classList.remove ('filled'); userLastName.classList.remove ('input_error');
    userAddress.value = ''; userAddress.classList.remove ('input_valid'); userAddress.classList.remove ('filled'); userAddress.classList.remove ('input_error');
    userCity.value = ''; userCity.classList.remove ('input_valid'); userCity.classList.remove ('filled'); userCity.classList.remove ('input_error');
    userCountry.value = ''; userCountry.classList.remove ('input_valid'); userCountry.classList.remove ('filled'); userCountry.classList.remove ('input_error');
    userPostcode.value = ''; userPostcode.classList.remove ('input_valid'); userPostcode.classList.remove ('filled'); userPostcode.classList.remove ('input_error');
    userPhone.value = ''; userPhone.classList.remove ('input_valid'); userPhone.classList.remove ('filled');  userPhone.classList.remove ('input_error');
}

/// TEST TEST TEST


