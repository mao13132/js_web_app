// Константы с данными визитки
const clientData = {
    name: "Алексей Морской",
    description: "UI/UX дизайнер | Создаю красивые и удобные интерфейсы | 5 лет опыта в digital-дизайне",
    avatar: "https://picsum.photos/150/150",
    portfolio: [
        {
            title: "Редизайн приложения",
            description: "Банковское приложение",
            icon: "🏦"
        },
        {
            title: "Дизайн-система",
            description: "Корпоративный портал",
            icon: "🎨"
        },
        {
            title: "Мобильное приложение",
            description: "Фитнес-трекер",
            icon: "📱"
        }
    ],
    links: [
        {
            title: "Behance",
            url: "https://behance.net",
            icon: "🎨"
        },
        {
            title: "Dribbble",
            url: "https://dribbble.com",
            icon: "🏀"
        },
        {
            title: "Instagram",
            url: "https://instagram.com",
            icon: "📸"
        }
    ],
    contacts: [
        {
            title: "Telegram",
            value: "@ocean_designer",
            icon: "📱",
            url: "https://t.me/ocean_designer"
        },
        {
            title: "Email",
            value: "alex@design.com",
            icon: "📧",
            url: "mailto:alex@design.com"
        },
        {
            title: "WhatsApp",
            value: "+7 (999) 123-45-67",
            icon: "💬",
            url: "https://wa.me/79991234567"
        }
    ],
    services: [
        {
            title: "UI/UX Дизайн",
            description: "Создание интерфейсов для веб и мобильных приложений",
            price: "от 50,000₽"
        },
        {
            title: "Брендинг",
            description: "Разработка фирменного стиля и брендбука",
            price: "от 80,000₽"
        },
        {
            title: "Консультация",
            description: "Аудит дизайна и UX-рекомендации",
            price: "от 10,000₽"
        }
    ]
};

// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand();

// Функция для отображения портфолио
function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolio');
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = ''; // Очищаем контейнер
    
    clientData.portfolio.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.innerHTML = `
            <span class="portfolio-icon">${item.icon}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Функция для отображения данных
function renderData() {
    // Заполнение профиля
    const avatar = document.getElementById('avatar');
    if (avatar) {
        avatar.src = clientData.avatar;
        avatar.onerror = function() {
            this.src = 'https://picsum.photos/150/150?grayscale';
        };
    }

    const name = document.getElementById('name');
    if (name) {
        name.textContent = clientData.name;
    }

    const description = document.getElementById('description');
    if (description) {
        description.textContent = clientData.description;
    }

    // Создание ссылок
    const linksContainer = document.getElementById('links');
    if (linksContainer) {
        linksContainer.innerHTML = '<h2>Соцсети</h2>';
        clientData.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.className = 'link-item';
            linkElement.innerHTML = `${link.icon} ${link.title}`;
            linkElement.target = '_blank';
            linksContainer.appendChild(linkElement);
        });
    }

    // Создание контактов
    const contactsContainer = document.getElementById('contacts');
    if (contactsContainer) {
        contactsContainer.innerHTML = '<h2>Контакты</h2>';
        clientData.contacts.forEach(contact => {
            const contactElement = document.createElement('a');
            contactElement.href = contact.url;
            contactElement.className = 'contact-item';
            contactElement.innerHTML = `${contact.icon} ${contact.title}: ${contact.value}`;
            contactElement.target = '_blank';
            contactsContainer.appendChild(contactElement);
        });
    }

    // Создание услуг
    const servicesContainer = document.getElementById('services');
    if (servicesContainer) {
        servicesContainer.innerHTML = '<h2>Услуги</h2>';
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

    // Отображение портфолио
    renderPortfolio();
}

// Функция для переключения темы
function toggleTheme() {
    const body = document.documentElement;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Функция для открытия в Telegram
function openInTelegram() {
    if (tg.isExpanded) {
        tg.sendData(JSON.stringify({
            action: 'contact',
            platform: 'telegram'
        }));
    } else {
        window.location.href = 'https://t.me/ocean_designer';
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    // Установка начальной темы
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Обработчики событий
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('openInTelegram').addEventListener('click', openInTelegram);

    // Рендеринг данных
    renderData();
}); 