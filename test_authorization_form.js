Feature('Тест Авторизация в систему');

Before((I) => { // or Background
    I.amOnPage('https://new.nnov.opencity.pro/');
    I.see('Оставить заявку');
});

Scenario('Проверка входа в систему пользователем', (I) => {
    I.click('Вход');
    I.see('Имя пользователя');
    I.seeInCurrentUrl('/sign_in');
    I.fillField('Имя пользователя', 'xafar47486@frost2d.net');
    I.fillField('Пароль', 'e797d644');
    I.click('Войти');
    I.seeInCurrentUrl('/orders');
    I.see('Макколей Калкин Вениаминович');
});

Scenario('Попытка входа в систему незарегистрированным пользователем', (I) => {
    I.click('Вход');
    I.see('Имя пользователя');
    I.seeInCurrentUrl('https://new.nnov.opencity.pro/sign_in');
    I.fillField('Имя пользователя', 'xafar47486@frost2d.net');
    I.fillField('Пароль', 'e797d6443');
    I.click('Войти');
    I.see('Имя пользователя или пароль введены неверно');
});

Scenario('Проверка отображаения сообщения об ошибке при незаполненном поле Логин', (I) => {
    I.click('Вход');
    I.see('Имя пользователя');
    I.seeInCurrentUrl('https://new.nnov.opencity.pro/sign_in');
    I.fillField('Пароль', 'e797d6443');
    I.click('Войти');
    I.see('Введите имя пользователя');
});

Scenario('Проверка отображаения сообщения об ошибке при незаполненном поле Пароль', (I) => {
    I.click('Вход');
    I.see('Имя пользователя');
    I.seeInCurrentUrl('https://new.nnov.opencity.pro/sign_in');
    I.fillField('Имя пользователя', 'xafar47486@frost2d.net');
    I.click('Войти');
    I.see('Введите пароль');
});
