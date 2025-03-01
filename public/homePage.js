// объект для выхода из личного кабинета
const logoutUser = new LogoutButton();

logoutUser.action = () => {
    ApiConnector.logout(response => {
        if(response.success) {
            location.reload();
        }
    })
}

// получение информации о пользователе
ApiConnector.current(response => {
    if(response.success) {
        ProfileWidget.showProfile(userId);
    }
});

// получение текущих курсов валют
const rates = new RatesBoard();

requestCourses = (data) => ApiConnector.getStocks(response => {
    if(response.success) {
        rates.clearTable();
        rates.fillTable(data);
    }
});

setInterval(requestCourses(), 1000);

