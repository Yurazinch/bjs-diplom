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

const moneyMgr = new MoneyManager();

// операции с деньгами - пополнение баланса
moneyMgr.addMoneyCallback = (data) => {
    ApiConnector.addMoney(data, response => {        
        if(response.success) {
            ProfileWidget.showProfile(response.data);
            moneyMgr.setMessage(response.success);
        }
        moneyMgr.setMessage(response.error);        
    })
}

// операции с деньгами - конвертирование валюты
moneyMgr.conversionMoneyCallback = (data) => {
    ApiConnector.convertMoney(data, response => {        
        if(response.success) {
            ProfileWidget.showProfile(response.data);
            moneyMgr.setMessage(response.success);
        }
        moneyMgr.setMessage(response.error);
    })
}

// операции с деньгами - перевод валюты
moneyMgr.sendMoneyCallback = (data) => {
    ApiConnector.transferMoney(data, response => {
        if(response.success) {
            ProfileWidget.showProfile(response.data);
            moneyMgr.setMessage(response.success);
        }
        moneyMgr.setMessage(response.error);
    })
}

const favorites = new FavoritesWidget();

// начальный список избранного
ApiConnector.getFavorites = (data, response) => {
    console.log(response);
    if(response.success) {
        favorites.clearTable();
        favorites.fillTable(response.data);
        moneyMgr.updateUsersList(data);
    }    
       
}

// добавления пользователя в список избранных
favorites.addUserCallback = (data) => {
    ApiConnector.addUserToFavorites(data, response => {
        if(response.success) {
            favorites.clearTable();
            favorites.fillTable(response.data);
            moneyMgr.updateUsersList(data);
        }        
    })
}

// удаление пользователя из избранного
favorites.removeUserCallback = (data) => {
    ApiConnector.removeUserFromFavorites(data, response => {
        if(response.success) {
            favorites.clearTable();
            favorites.fillTable(response.data);
            moneyMgr.updateUsersList(data);
        }
    })
}
