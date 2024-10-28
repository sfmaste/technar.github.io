document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Простейшая валидация
    if (name === '' || email === '' || password === '') {
        displayMessage('Пожалуйста, заполните все поля.', 'error');
        return;
    }

    // Здесь можно добавить код для отправки данных на сервер

    displayMessage('Вы успешно зарегистрированы!', 'success');

    // Перенаправление на другую страницу через 2 секунды
    setTimeout(() => {
        window.location.href = 'profile.html'; // Замените на нужную вам страницу
    }, 2000);

    // Очищаем форму
    document.getElementById('registrationForm').reset();
});

function displayMessage(message, type) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;

    if (type === 'success') {
        messageElement.style.color = 'green';
    } else {
        messageElement.style.color = 'red';
    }
}
