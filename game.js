// Переменные для игры
let clickCount = 0; // Счетчик кликов
let multiplier = 1; // Множитель
let upgradeAvailable = false; // Проверка доступности улучшения

// Элементы HTML
const clickButton = document.getElementById("click-button");
const clickCountElement = document.getElementById("click-count");
const upgradeSection = document.getElementById("upgrade-section");
const buyUpgradeButton = document.getElementById("buy-upgrade");
const multiplierElement = document.getElementById("multiplier");
const gameOverSection = document.getElementById("game-over");

// Обработчик клика по кнопке
clickButton.addEventListener("click", () => {
    clickCount += multiplier; // Увеличиваем количество кликов в зависимости от множителя
    clickCountElement.textContent = clickCount;

    // Проверяем, если кликов 100, показываем улучшение
    if (clickCount >= 100 && !upgradeAvailable) {
        upgradeAvailable = true;
        upgradeSection.style.display = "block"; // Показываем кнопку улучшения
    }

    // Если кликов 500, игра закончена
    if (clickCount >= 500) {
        gameOverSection.style.display = "block"; // Показываем сообщение о победе
        clickButton.disabled = true; // Блокируем кнопку кликов
    }
});

// Обработчик для покупки улучшения
buyUpgradeButton.addEventListener("click", () => {
    if (clickCount >= 100) {
        clickCount -= 100; // Снимаем 100 кликов за покупку
        multiplier = 5; // Устанавливаем множитель x5
        multiplierElement.textContent = "5x"; // Обновляем отображение множителя
        clickCountElement.textContent = clickCount; // Обновляем счетчик кликов
        upgradeSection.style.display = "none"; // Скрываем раздел с улучшением
    }
});
