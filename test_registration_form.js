Feature('Тест регистрации пользователя в системе');

Before((I) => { // or Background
    I.amOnPage('https://new.nnov.opencity.pro/');
    I.see('Оставить заявку');
    I.click('Регистрация');
    I.seeInCurrentUrl('/sign_up');
});

Scenario('Регистрация нового пользователя', async (I) => {
	const mailbox = await I.haveNewMailbox();
	let mymail = mailbox
    I.fillField('Электронная почта', mymail.emailAddress);
    I.click('Зарегистрироваться');
    I.see('Вы зарегистрированы');
    const email = await I.waitForEmailMatching({
        from: '@opencity.pro', // find anything from opencity.pro
        subject: 'Регистрация',
    }, 30);
});

Scenario('Ошибка при попытке повторной регистрации пользователя по зарегистрированному e-mail', async (I) => {
    I.fillField('Электронная почта', 'xafar47486@frost2d.net');
    I.click('Зарегистрироваться');
    I.see('Ошибка! Пользователь с таким email уже существует.');
});

Scenario('Ошибка при попытке повторной регистрации пользователя с невалидным e-mail', async (I) => {
    I.fillField('Электронная почта', 'xafar4 7486@frost2d.net');
    I.click('Зарегистрироваться');
    I.see('Укажите корректный адрес электронной почты');
});