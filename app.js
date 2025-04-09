// Константы с данными визитки
const clientData = {
    name: "Анна Смирнова",
    description: "Сертифицированный инструктор по йоге и фитнесу | Персональный тренер",
    avatar: "https://picsum.photos/150/150", // Более надежный сервис для временных изображений
    links: [
        {
            title: "Instagram",
            url: "https://instagram.com",
            icon: "📸"
        },
        {
            title: "YouTube",
            url: "https://youtube.com",
            icon: "▶️"
        },
        {
            title: "Расписание занятий",
            url: "https://schedule.com",
            icon: "📅"
        }
    ],
    contacts: [
        {
            title: "WhatsApp",
            value: "+7 (999) 123-45-67",
            icon: "📱",
            url: "https://wa.me/79991234567"
        },
        {
            title: "Email",
            value: "anna@fitness.ru",
            icon: "📧",
            url: "mailto:anna@fitness.ru"
        },
        {
            title: "Адрес студии",
            value: "г. Москва, ул. Фитнесная, 15",
            icon: "📍",
            url: "https://yandex.ru/maps"
        }
    ],
    services: [
        {
            title: "Групповые занятия",
            description: "Йога, пилатес, стретчинг",
            price: "от 800₽/занятие"
        },
        {
            title: "Персональные тренировки",
            description: "Индивидуальный подход",
            price: "от 2000₽/занятие"
        },
        {
            title: "Онлайн-курсы",
            description: "Доступ 24/7",
            price: "от 3000₽/месяц"
        }
    ]
};

// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand();

// Функция для переключения темы
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Функция для отображения данных
function renderData() {
    // Заполнение профиля
    const avatar = document.getElementById('avatar');
    avatar.src = clientData.avatar;
    // Обработка ошибки загрузки изображения
    avatar.onerror = function() {
        this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2YwZjJmNSIvPjx0ZXh0IHg9Ijc1IiB5PSI3NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMzMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QW5uYTwvdGV4dD48L3N2Zz4=';
    };
    
    document.getElementById('name').textContent = clientData.name;
    document.getElementById('description').textContent = clientData.description;

    // Создание ссылок
    const linksContainer = document.getElementById('links');
    clientData.links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'link-item';
        linkElement.innerHTML = `${link.icon} ${link.title}`;
        linkElement.target = '_blank';
        linksContainer.appendChild(linkElement);
    });

    // Создание контактов
    const contactsContainer = document.getElementById('contacts');
    clientData.contacts.forEach(contact => {
        const contactElement = document.createElement('a');
        contactElement.href = contact.url;
        contactElement.className = 'contact-item';
        contactElement.innerHTML = `${contact.icon} ${contact.title}: ${contact.value}`;
        contactElement.target = '_blank';
        contactsContainer.appendChild(contactElement);
    });

    // Создание услуг
    const servicesContainer = document.getElementById('services');
    clientData.services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.className = 'service-item';
        serviceElement.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <span class="price">${service.price}</span>
        `;
        servicesContainer.appendChild(serviceElement);
    });
}

// Функция для открытия в Telegram
function openInTelegram() {
    if (tg.isExpanded) {
        tg.close();
    } else {
        window.location.href = 'https://t.me/your_bot_username';
    }
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    // Установка начальной темы
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);

    // Обработчики событий
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('openInTelegram').addEventListener('click', openInTelegram);

    // Рендеринг данных
    renderData();
}); 