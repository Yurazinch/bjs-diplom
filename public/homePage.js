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
ApiConnector.current(data => {
    if(result) {
        ProfileWidget.showProfile(data);
    }
});

// получение текущих курсов валют
const rates = new RatesBoard();

requestCourses = (data) => ApiConnector.getStocks(result => {
    if(result) {
        rates.clearTable();
        rates.fillTable(data);
    }
});
setInterval(requestCourses(), 1000);

