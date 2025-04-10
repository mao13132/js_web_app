// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand();

// Данные шаблонов
const templates = {
    business: [
        {
            id: 1,
            name: "Классический бизнес",
            description: "Профессиональный дизайн для корпоративных клиентов",
            price: "1,500 ₽",
            image: "business1.jpg"
        },
        {
            id: 2,
            name: "Современный бизнес",
            description: "Современный дизайн с акцентом на инновации",
            price: "1,800 ₽",
            image: "business2.jpg"
        }
    ],
    creative: [
        {
            id: 3,
            name: "Креативный дизайн",
            description: "Яркий и запоминающийся стиль",
            price: "2,000 ₽",
            image: "creative1.jpg"
        },
        {
            id: 4,
            name: "Арт-дизайн",
            description: "Уникальный художественный подход",
            price: "2,500 ₽",
            image: "creative2.jpg"
        }
    ],
    minimal: [
        {
            id: 5,
            name: "Минимализм",
            description: "Лаконичный и элегантный дизайн",
            price: "1,500 ₽",
            image: "minimal1.jpg"
        },
        {
            id: 6,
            name: "Ультра-минимализм",
            description: "Максимально простой и стильный",
            price: "1,800 ₽",
            image: "minimal2.jpg"
        }
    ]
};

// Функция для отображения шаблонов
function displayTemplates(category) {
    const templateGrid = document.querySelector('.template-grid');
    templateGrid.innerHTML = '';
    
    templates[category].forEach(template => {
        const templateCard = document.createElement('div');
        templateCard.className = 'template-card';
        templateCard.innerHTML = `
            <img src="images/${template.image}" alt="${template.name}">
            <h3>${template.name}</h3>
            <p>${template.description}</p>
            <div class="price">${template.price}</div>
            <button class="order-button" data-template="${template.id}">Заказать</button>
        `;
        templateGrid.appendChild(templateCard);
    });
}

// Обработчики событий
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        displayTemplates(category);
    });
});

// Обработка заказов
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('order-button')) {
        const templateId = e.target.dataset.template;
        tg.sendData(JSON.stringify({
            action: 'order',
            templateId: templateId
        }));
    }
});

// Инициализация темы
function initTheme() {
    const theme = tg.colorScheme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    // Показываем шаблоны первой категории по умолчанию
    displayTemplates('business');
}); 