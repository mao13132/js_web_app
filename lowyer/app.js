// Функция для отображения шаблонов
function displayTemplates() {
    const templatesContainer = document.getElementById('templates');
    if (templatesContainer) {
        templatesContainer.innerHTML = `
            <div class="template">
                <h3>Шаблон визитки</h3>
                <p>Выберите один из доступных шаблонов</p>
            </div>
        `;
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    displayTemplates();
    
    // Добавляем обработчики событий для кнопок
    const buttons = document.querySelectorAll('.button, .free-card-button, .back-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = '0 0 30px rgba(233, 69, 96, 0.6)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = '0 0 20px rgba(233, 69, 96, 0.2)';
        });
    });
}); 