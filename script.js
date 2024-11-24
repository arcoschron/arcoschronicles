// Ожидаем, пока весь контент загрузится
document.addEventListener('DOMContentLoaded', () => {
    // Получаем все кнопки "Показать"
    const revealButtons = document.querySelectorAll('.reveal-button');

    // Проходим по всем кнопкам и добавляем обработчик
    revealButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Находим ближайший к кнопке элемент с классом "hidden-text"
            const hiddenText = this.previousElementSibling;
            
            // Переключаем видимость текста
            if (hiddenText.classList.contains('hidden-text')) {
                hiddenText.classList.remove('hidden-text');
                this.textContent = 'Скрыть';
            } else {
                hiddenText.classList.add('hidden-text');
                this.textContent = 'Показать';
            }
        });
    });
});
