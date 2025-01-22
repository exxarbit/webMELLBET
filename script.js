document.getElementById('saveButton').addEventListener('click', function() {
    const partyNumber = document.getElementById('partyNumber').value;
    const errorMessage = document.getElementById('errorMessage');

    // Проверка на ввод числа и ограничение до 400
    if (partyNumber === '' || isNaN(partyNumber) || Number(partyNumber) < 1 || Number(partyNumber) > 400) {
        errorMessage.style.display = 'block'; // Показываем сообщение об ошибке
        return; // Прерываем выполнение функции, если ввод не корректен
    }

    // Скрыть ввод и показать новую "страницу"
    document.getElementById('inputContainer').style.display = 'none';
    document.getElementById('newPageContainer').style.display = 'block';

    // Отобразить номер партии в углу контейнера
    document.getElementById('partyDisplay').textContent = partyNumber; 
    errorMessage.style.display = 'none'; // Скрываем сообщение об ошибке
});

// Обработчик события для кнопки "Получить сигнал"
document.getElementById('signalButton').addEventListener('click', function() {
    const suits = ['Червы', 'Бубны', 'Трефы', 'Пики']; // Масти карт
    const randomSuit = suits[Math.floor(Math.random() * suits.length)]; // Случайная масть
    document.getElementById('signalText').textContent = `Диллер получит карту (масть): ${randomSuit}`; // Обновляем текст
    document.getElementById('signalText').style.display = 'block'; // Показать текст
    document.getElementById('newPartyButton').style.display = 'block'; // Показать кнопку "Новая партия"

    // Блокируем кнопку "Получить сигнал"
    document.getElementById('signalButton').disabled = true; 
});

// Обработчик события для кнопки "Новая партия"
document.getElementById('newPartyButton').addEventListener('click', function() {
    document.getElementById('inputContainer').style.display = 'block'; // Показать контейнер для ввода
    document.getElementById('newPageContainer').style.display = 'none'; // Скрыть новую страницу
    document.getElementById('partyNumber').value = ''; // Очистить поле ввода
    document.getElementById('signalText').style.display = 'none'; // Скрыть текст
    document.getElementById('newPartyButton').style.display = 'none'; // Скрыть кнопку "Новая партия"
    document.getElementById('errorMessage').style.display = 'none'; // Скрыть сообщение об ошибке

    // Разблокируем кнопку "Получить сигнал" снова
    document.getElementById('signalButton').disabled = false; 
});
