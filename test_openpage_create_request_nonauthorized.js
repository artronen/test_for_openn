Feature('Тест Открытие страницы создания заявки неавторизованным пользователем');

Before((I) => { // or Background
    I.amOnPage('https://new.nnov.opencity.pro/');
    I.see('Оставить заявку');
});

Scenario('Переход на страницу создания заявки через главное меню', (I) => {
    I.click('Заявка');
    I.seeInCurrentUrl('/order');
    I.see('Создание заявки')
});

Scenario('Переход на страницу создания заявки с главной страницы по кнопке "Далее"', (I) => {
    I.click('Далее');
    I.seeInCurrentUrl('/order');
    I.see('Создание заявки')
});

Scenario('Переход на страницу создания заявки через форму оставить заявку', (I) => {
    I.click('Подать заявку');
    I.seeInCurrentUrl('/order');
    I.see('Создание заявки')
});
