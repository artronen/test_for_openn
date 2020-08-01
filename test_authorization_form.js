Feature('Тест Авторизация в систему');

Before((I) => { // or Background
    I.amOnPage();
    I.see('Оставить заявку');
});

Scenario('Проверка входа в систему пользователем', (I) => {
    I.click('Вход');
    //I.see('Имя пользователя');
    I.seeInCurrentUrl('/sign_in');
    I.fillField('Электронная почта или логин', 'xafar47486@frost2d.net');
    I.fillField('Пароль', 'e797d644');
    I.click('Войти');
    I.seeInCurrentUrl('/orders');
    I.see('Макколей Калкин Вениаминович');
});