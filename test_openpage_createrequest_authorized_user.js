Feature('Тест Открытие страницы создания заявки неавторизованным пользователем');


Before((I) => { // or Background
    I.amOnPage('https://new.nnov.opencity.pro/');
    I.see('Оставить заявку');
    I.click('Вход');
    I.see('Имя пользователя');
    I.seeInCurrentUrl('/sign_in');
    I.fillField('Имя пользователя', 'xafar47486@frost2d.net');
    I.fillField('Пароль', 'e797d644');
    I.click('Войти');
    I.seeInCurrentUrl('/orders');
});

Scenario('Переход на страницу создания заявки через кнопку в списке заявок', (I) => {
    I.click('Создать заявку');
    I.seeInCurrentUrl('/order');
    I.see('Создание заявки')
});

Scenario('Переход на страницу создания заявки с главной страницы по кнопке "Далее"', (I) => {
    I.click('Создать заявку', 'MuiDrawer-docked');
    I.seeInCurrentUrl('/order');
    I.see('Создание заявки')
});

