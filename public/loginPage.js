'use strict';

//объект пользователя
const userLog = new UserForm();

// запрос на сервер на авторизацию
userLog.loginFormCallback = (data) => {
    ApiConnector.login(data, (response) => {
        console.log(response); 
        if(response.success) {
            location.reload();
        }       
    })
    this.setLoginErrorMessage(error);
}

// запрос на сервер на регистрацию
userLog.registerFormCallback = (data) => {
    ApiConnector.register(data, (response) => {
        console.log(response);
        if(responce.ok) {
            location.reload();
        } else {
            userLog.setRegisterErrorMessage(error);
        }
    })
} 