document.addEventListener("DOMContentLoaded", function() {
    const results = document.querySelectorAll('.animated-text');

    results.forEach((result, index) => {
        setTimeout(() => {
            result.classList.add('show'); // Добавляем класс для анимации
        }, index * 500); // Задержка между появлениями
    });
});
