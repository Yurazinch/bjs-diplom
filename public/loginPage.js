'use strict';

// добавилось после авторизации
const { response } = require("express");

//объект пользователя
const userLog = new UserForm();

// запрос на сервер на авторизацию
userLog.loginFormCallback = (data) => {
    ApiConnector.login(data, (response) => {
        console.log(response);
    })
}

// проверка авторизации
if(response.success) {
    location.reload();
} else {
    setLoginErrorMessage();
}

// запрос на сервер на регистрацию
userLog.registerFormCallback = (data) => {
    ApiConnector.register(data, (response) => {
        console.log(response);
    })
} 

// проверка авторизации
if(response.success) {
    location.reload();
} else {
    setRegisterErrorMessage();
}