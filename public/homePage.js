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
ApiConnector.current((response) => {
    console.log(response);
    if(response.success) {
        ProfileWidget.showProfile(response.data);
    }
});

// получение текущих курсов валют
const rates = new RatesBoard();

requestCourses = () => { 
    ApiConnector.getStocks(() => {
    console.log(response);
    if(response.success) {
        rates.cleartable();
        rates.fillTable(response.data);
    }
});
}
setInterval(requestCourses, 60000);

