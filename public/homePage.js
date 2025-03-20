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
    if(response.success) {
        ProfileWidget.showProfile(response.data);
    }
});

// получение текущих курсов валют
const rates = new RatesBoard();
requestCourses = () => { 
    ApiConnector.getStocks((response) => {
    if(response.success) {
        rates.clearTable();
        rates.fillTable(response.data);
    }
});
}
requestCourses();
setInterval(requestCourses, 60000);

// операции с деньгами - пополнение баланса
const moneyMgr = new MoneyManager();
addMoneyCallback = () => {
    ApiConnector.addMoney((response) => {
        console.log(response);
        if(response.success) {
            moneyMgr.showProfile(response.data);
            moneyMgr.setMessage(response.success);
        }
        moneyMgr.setMessage(response.error());        
    })
}

// операции с деньгами - конвертирование валюты
conversionMoneyCallback = () => {
    ApiConnector.convertMoney((response) => {
        console.log(response);
        if(response.success) {
            moneyMgr.showProfile(response.data);
            moneyMgr.setMessage(response.success);
        }
        moneyMgr.setMessage(response.error());
    })
}

// операции с деньгами - перевод валюты
sendMoneyCallback = () => {
    ApiConnector.transferMoney((response) => {
        console.log(response);
        if(response.success) {
            moneyMgr.showProfile(response.data);
            moneyMgr.setMessage(response.success);
        }
        moneyMgr.setMessage(response.error());
    })
}

