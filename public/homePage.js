const { response } = require("express");

// объект для выхода из личного кабинета
const logoutUser = new LogoutButton();

logoutUser.action = (callback) => {
    ApiConnector.logout(callback, (response) => {
        if(response.success) {
            location.reload();
        }
    })
}

// получение информации о пользователе
ApiConnector.current(callback, (response) => {
    if(response.success) {
        ProfileWidget.showProfile(response);
    }
});

    