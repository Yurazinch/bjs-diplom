'use strict';

//объект пользователя
const userLog = new UserForm();

//объект с логином и паролем - консоль сообщает 'form is not defined'
const data = userLog.getData(form); 

 //функция должна передаваться после авторизации - какая сущность и результат?
collback = () => {
    return console.log('запрос выполнен');
}

// запрос на сервер на авторизацию
userLog.loginFormCallback = (data, collback) => ApiConnector.login(data, collback);

// проверка авторизации
if(userLog.loginFormCallback) {
    location.reload();
} else {
    userLog.setLoginErrorMessage();
}

// запрос на сервер на регистрацию
userLog.registerFormCallback = (data, collback) => ApiConnector.register(data, collback);

// проверка регистрации
if(userLog.registerFormCallback) {
    location.reload();
} else {
    userLog.setRegisterErrorMessage();
}