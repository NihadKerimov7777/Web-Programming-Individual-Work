let cars = [];
let cart = [];
let currentFilter = 'all';
let isLoading = false;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const carData = [
    {
        id: 1,
        name: "BMW 320i",
        price: 45000,
        category: "sedan",
        year: 2022,
        brand: "BMW",
        fuel: "Benzin",
        engine: "2.0L Turbo",
        power: "200 a.g.",
        transmission: "Avtomatik",
        image: "/api/placeholder/400/250",
        features: ["Avtomatik", "Benzin", "200 a.g.", "Sunroof", "Dəri salon"],
        description: "Sportiv dizayn və əla performans. Şəhər və yol üçün ideal.",
        mileage: "15,000 km",
        condition: "Əla",
        location: "Bakı",
        seller: "AutoLux Dealership",
        views: 245,
        isFeatured: true
    },
    {
        id: 2,
        name: "Mercedes GLE 350",
        price: 85000,
        category: "suv",
        year: 2023,
        brand: "Mercedes",
        fuel: "Hibrid",
        engine: "3.0L V6",
        power: "350 a.g.",
        transmission: "Avtomatik",
        image: "/api/placeholder/400/250",
        features: ["Avtomatik", "Hibrid", "350 a.g.", "AWD", "Premium Audio"],
        description: "Lüks SUV, ailəvi istifadə üçün ideal. Ən son texnologiyalarla.",
        mileage: "8,500 km",
        condition: "Yeni",
        location: "Bakı",
        seller: "Mercedes Authorized",
        views: 412,
        isFeatured: true
    },
    {
        id: 3,
        name: "Audi A4 Quattro",
        price: 52000,
        category: "sedan",
        year: 2023,
        brand: "Audi",
        fuel: "Benzin",
        engine: "2.0L TFSI",
        power: "245 a.g.",
        transmission: "Avtomatik",
        image: "/api/placeholder/400/250",
        features: ["Avtomatik", "Benzin", "245 a.g.", "Quattro AWD", "Virtual Cockpit"],
        description: "Müasir texnologiya və komfort. Premium segment.",
        mileage: "12,000 km",
        condition: "Əla",
        location: "Bakı",
        seller: "Audi Center",
        views: 189,
        isFeatured: false
    },
    {
        id: 4,
        name: "Toyota RAV4 Hybrid",
        price: 35000,
        category: "suv",
        year: 2022,
        brand: "Toyota",
        fuel: "Hibrid",
        engine: "2.5L Hybrid",
        power: "220 a.g.",
        transmission: "CVT",
        image: "/api/placeholder/400/250",
        features: ["CVT", "Hibrid", "220 a.g.", "AWD", "Təhlükəsizlik paketi"],
        description: "Etibarlı və qənaətcil SUV. Ailə üçün mükəmməl seçim.",
        mileage: "22,000 km",
        condition: "Yaxşı",
        location: "Bakı",
        seller: "Toyota Azerbaijan",
        views: 156,
        isFeatured: false
    },
    {
        id: 5,
        name: "Volkswagen Golf GTI",
        price: 28000,
        category: "hatchback",
        year: 2022,
        brand: "Volkswagen",
        fuel: "Benzin",
        engine: "2.0L Turbo",
        power: "245 a.g.",
        transmission: "Manual",
        image: "/api/placeholder/400/250",
        features: ["Manual", "Benzin", "245 a.g.", "Sport moda", "Alcantara salon"],
        description: "Sportiv hatchback, gənclər üçün ideal. Yüksək performans.",
        mileage: "18,000 km",
        condition: "Əla",
        location: "Bakı",
        seller: "VW Dealership",
        views: 134,
        isFeatured: false
    },
    {
        id: 6,
        name: "Porsche Panamera 4S",
        price: 120000,
        category: "luxury",
        year: 2023,
        brand: "Porsche",
        fuel: "Benzin",
        engine: "2.9L V6 Twin-Turbo",
        power: "440 a.g.",
        transmission: "PDK",
        image: "/api/placeholder/400/250",
        features: ["PDK", "V6 Twin-Turbo", "440 a.g.", "Air suspension", "Bose Audio"],
        description: "Sportif lüks sedan. Ən yüksək performans və komfort.",
        mileage: "5,000 km",
        condition: "Yeni",
        location: "Bakı",
        seller: "Porsche Center",
        views: 98,
        isFeatured: true
    },
    {
        id: 7,
        name: "Honda Civic Type R",
        price: 45000,
        category: "sedan",
        year: 2023,
        brand: "Honda",
        fuel: "Benzin",
        engine: "2.0L Turbo",
        power: "320 a.g.",
        transmission: "Manual",
        image: "/api/placeholder/400/250",
        features: ["Manual", "Benzin", "320 a.g.", "Limited Edition", "Racing paketi"],
        description: "Yüksək performanslı sportif sedan. Track üçün hazır.",
        mileage: "3,000 km",
        condition: "Yeni",
        location: "Bakı",
        seller: "Honda Official",
        views: 287,
        isFeatured: true
    },
    {
        id: 8,
        name: "Range Rover Sport P400",
        price: 95000,
        category: "luxury",
        year: 2023,
        brand: "Land Rover",
        fuel: "Benzin",
        engine: "3.0L I6 Turbo",
        power: "400 a.g.",
        transmission: "Avtomatik",
        image: "/api/placeholder/400/250",
        features: ["Avtomatik", "I6 Turbo", "400 a.g.", "Terrain Response", "Meridian Audio"],
        description: "Premium off-road təcrübəsi. Lüks və güc birləşməsi.",
        mileage: "7,500 km",
        condition: "Əla",
        location: "Bakı",
        seller: "Land Rover Baku",
        views: 167,
        isFeatured: true
    },
    {
        id: 9,
        name: "Hyundai Tucson",
        price: 32000,
        category: "suv",
        year: 2023,
        brand: "Hyundai",
        fuel: "Benzin",
        engine: "2.0L",
        power: "159 a.g.",
        transmission: "Avtomatik",
        image: "/api/placeholder/400/250",
        features: ["Avtomatik", "Benzin", "159 a.g.", "Smartsense", "Panoramik dam"],
        description: "Müasir dizayn və yüksək təhlükəsizlik. Ailəvi SUV.",
        mileage: "5,200 km",
        condition: "Yeni",
        location: "Bakı",
        seller: "Hyundai Official",
        views: 201,
        isFeatured: false
    },
    {
        id: 10,
        name: "Kia Sportage",
        price: 30000,
        category: "suv",
        year: 2022,
        brand: "Kia",
        fuel: "Benzin",
        engine: "2.0L",
        power: "161 a.g.",
        transmission: "Avtomatik",
        image: "/api/placeholder/400/250",
        features: ["Avtomatik", "Benzin", "161 a.g.", "Smart Key", "Dual Zone AC"],
        description: "Rahat və iqtisadi SUV. Şəhər sürüşü üçün mükəmməl.",
        mileage: "28,000 km",
        condition: "Yaxşı",
        location: "Bakı",
        seller: "Kia Motors",
        views: 178,
        isFeatured: false
    },
    {
        id: 11,
        name: "Ford Mustang GT",
        price: 75000,
        category: "luxury",
        year: 2023,
        brand: "Ford",
        fuel: "Benzin",
        engine: "5.0L V8",
        power: "450 a.g.",
        transmission: "Manual",
        image: "/api/placeholder/400/250",
        features: ["Manual", "V8", "450 a.g.", "Brembo brakes", "Recaro seats"],
        description: "Klassik Amerika muscle car. Güclü performans və stil.",
        mileage: "2,100 km",
        condition: "Yeni",
        location: "Bakı",
        seller: "Ford Performance",
        views: 324,
        isFeatured: true
    },
    {
        id: 12,
        name: "Nissan Altima",
        price: 25000,
        category: "sedan",
        year: 2022,
        brand: "Nissan",
        fuel: "Benzin",
        engine: "2.5L",
        power: "188 a.g.",
        transmission: "CVT",
        image: "/api/placeholder/400/250",
        features: ["CVT", "Benzin", "188 a.g.", "ProPilot", "Bose Audio"],
        description: "Iqtisadi sedan, gündəlik istifadə üçün ideal seçim.",
        mileage: "35,000 km",
        condition: "Yaxşı",
        location: "Bakı",
        seller: "Nissan Center",
        views: 142,
        isFeatured: false
    }
];

function formatPrice(price) {
    return price.toLocaleString('en-US');
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function generateOrderId() {
    return 'ORDER-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

function showLoader() {
    isLoading = true;
    const existingLoader = document.querySelector('.loading-overlay');
    if (existingLoader) return;
    
    const loader = document.createElement('div');
    loader.className = 'loading-overlay';
    loader.innerHTML = `
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    `;
    document.body.appendChild(loader);
}

function hideLoader() {
    isLoading = false;
    const loader = document.querySelector('.loading-overlay');
    if (loader) {
        loader.remove();
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        z-index: 1002;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        max-width: 300px;
    `;

    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(45deg, #f44336, #d32f2f)';
            break;
        case 'warning':
            notification.style.background = 'linear-gradient(45deg, #ff9800, #f57c00)';
            break;
        default:
            notification.style.background = 'linear-gradient(45deg, #2196F3, #1976D2)';
    }
    
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

function animateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.style.animation = 'bounce 0.6s ease';
        setTimeout(() => {
            cartIcon.style.animation = '';
        }, 600);
    }
}

function displayCars(carsToShow = cars) {
    const carsGrid = document.getElementById('carsGrid');
    if (!carsGrid) return;
    
    carsGrid.innerHTML = '';
    
    if (carsToShow.length === 0) {
        carsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🔍</div>
                <h3>Heç bir avtomobil tapılmadı</h3>
                <p>Axtarış kriteriyalarınızı dəyişdirməyi yoxlayın</p>
                <button class="btn" onclick="clearFilters()" style="margin-top: 1rem;">
                    Filterləri təmizlə
                </button>
            </div>
        `;
        return;
    }
    
    carsToShow.forEach((car, index) => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card fade-in';
        carCard.style.animationDelay = `${index * 0.1}s`;
        carCard.dataset.carId = car.id;
        
        const isFavorite = favorites.includes(car.id);
        const isInCart = cart.some(item => item.id === car.id);
        
        carCard.innerHTML = `
            <div class="car-image-container" style="position: relative; overflow: hidden;">
                <img src="${car.image}" alt="${car.name}" class="car-image" loading="lazy">
                <div class="car-overlay" style="position: absolute; top: 10px; right: 10px;">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                            onclick="toggleFavorite(${car.id})" 
                            style="background: rgba(255,255,255,0.9); border: none; font-size: 1.5rem; cursor: pointer; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;"
                            title="${isFavorite ? 'Favoridən çıxar' : 'Favoriyə əlavə et'}">
                        ${isFavorite ? '❤️' : '🤍'}
                    </button>
                </div>
                ${car.isFeatured ? '<div class="featured-badge" style="position: absolute; top: 10px; left: 10px; background: linear-gradient(45deg, #ffd700, #ff8c00); color: #333; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem; font-weight: bold;">Seçilmiş</div>' : ''}
                <div class="car-status" style="position: absolute; bottom: 10px; left: 10px; background: rgba(0,0,0,0.7); color: white; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem;">
                    ${car.condition}
                </div>
            </div>
            <div class="car-info">
                <div class="car-price">${formatPrice(car.price)} AZN</div>
                <div class="car-name">${car.name}</div>
                <div class="car-details">${car.year} il • ${car.mileage} • ${car.location}</div>
                <div class="car-features">
                    ${car.features.slice(0, 3).map(feature => 
                        `<span class="feature">${feature}</span>`
                    ).join('')}
                </div>
                <div class="car-actions" style="margin-top: 1rem;">
                    <button class="btn ${isInCart ? 'in-cart' : ''}" 
                            onclick="addToCart(${car.id})" 
                            style="width: 100%; ${isInCart ? 'background: #28a745; color: white;' : ''}"
                            ${isInCart ? 'disabled' : ''}>
                        ${isInCart ? '✓ Səbətdə' : 'Səbətə əlavə et'}
                    </button>
                </div>
                <div class="car-meta" style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
                    <small style="color: #666;">Satıcı: ${car.seller}</small>
                    <small style="color: #666;">👁️ ${car.views}</small>
                </div>
            </div>
        `;
        
        carsGrid.appendChild(carCard);
    });
}

function searchCars() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    let filteredCars = getFilteredCars();
    
    if (searchTerm) {
        filteredCars = filteredCars.filter(car => 
            car.name.toLowerCase().includes(searchTerm) ||
            car.brand.toLowerCase().includes(searchTerm) ||
            car.description.toLowerCase().includes(searchTerm) ||
            car.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
            car.fuel.toLowerCase().includes(searchTerm) ||
            car.transmission.toLowerCase().includes(searchTerm)
        );
    }
    
    displayCars(filteredCars);

    const resultsCount = filteredCars.length;
    const searchInfo = document.querySelector('.search-info');
    if (searchInfo) {
        searchInfo.remove();
    }
    
    if (searchTerm) {
        const info = document.createElement('div');
        info.className = 'search-info';
        info.style.cssText = `
            text-align: center;
            margin: 1rem 0;
            padding: 0.5rem;
            background: rgba(255, 215, 0, 0.1);
            border-radius: 8px;
            color: #333;
        `;
        info.textContent = `"${searchTerm}" üçün ${resultsCount} nəticə tapıldı`;
        
        const container = document.querySelector('.cars .container');
        const filtersDiv = document.querySelector('.filters');
        container.insertBefore(info, filtersDiv.nextSibling);
    }
}

function filterCars(category) {
    currentFilter = category;
    const filteredCars = getFilteredCars();
    displayCars(filteredCars);

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });

    const url = new URL(window.location);
    if (category !== 'all') {
        url.searchParams.set('category', category);
    } else {
        url.searchParams.delete('category');
    }
    window.history.replaceState({}, '', url);
}

function getFilteredCars() {
    if (currentFilter === 'all') {
        return cars;
    }
    return cars.filter(car => car.category === currentFilter);
}

function clearFilters() {
    currentFilter = 'all';
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === 'all') {
            btn.classList.add('active');
        }
    });

    const searchInfo = document.querySelector('.search-info');
    if (searchInfo) {
        searchInfo.remove();
    }
    
    displayCars(cars);
}

function addToCart(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) {
        showNotification('Avtomobil tapılmadı', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === carId);
    
    if (existingItem) {
        showNotification('Bu avtomobil artıq səbətdədir', 'warning');
        return;
    }

    cart.push({ ...car, quantity: 1, addedAt: new Date().toISOString() });

    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartDisplay();
    updateCarCardInCart(carId, true);
    
    showNotification(`${car.name} səbətə əlavə edildi!`, 'success');
    animateCartIcon();
}

function removeFromCart(carId) {
    const carIndex = cart.findIndex(item => item.id === carId);
    if (carIndex === -1) return;
    
    const car = cart[carIndex];
    cart.splice(carIndex, 1);
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    updateCarCardInCart(carId, false);
    
    showNotification(`${car.name} səbətdən silindi`, 'info');
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (!cartSidebar) return;
    
    cartSidebar.classList.toggle('open');
    
    if (cartSidebar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
        const backdrop = document.createElement('div');
        backdrop.className = 'cart-backdrop';
        backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
            backdrop-filter: blur(2px);
        `;
        backdrop.onclick = toggleCart;
        document.body.appendChild(backdrop);
    } else {
        document.body.style.overflow = '';
        const backdrop = document.querySelector('.cart-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    }
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    
    if (!cartCount || !cartItems || !totalPrice) return;

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'block' : 'none';

    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart" style="text-align: center; padding: 2rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🛒</div>
                <p style="color: #666; margin-bottom: 1rem;">Səbətiniz boşdur</p>
                <button class="btn" onclick="toggleCart()" style="padding: 0.5rem 1rem;">Alış-verişə davam et</button>
            </div>
        `;
        totalPrice.textContent = '0';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div style="flex: 1;">
                <div style="font-weight: bold; margin-bottom: 0.5rem; font-size: 0.9rem;">${item.name}</div>
                <div style="color: #666; font-size: 0.8rem; margin-bottom: 0.3rem;">
                    ${item.year} il • ${item.mileage}
                </div>
                <div style="color: #1e3c72; font-weight: bold; font-size: 0.9rem;">
                    ${formatPrice(item.price)} AZN
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" 
                    style="background: #ff4444; color: white; border: none; padding: 8px 10px; 
                           border-radius: 5px; cursor: pointer; margin-left: 1rem; font-size: 0.8rem;"
                    title="Səbətdən sil">
                ✕
            </button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    totalPrice.textContent = formatPrice(total);
}

function updateCarCardInCart(carId, isInCart) {
    const carCard = document.querySelector(`[data-car-id="${carId}"]`);
    if (!carCard) return;
    
    const addButton = carCard.querySelector('.btn');
    if (addButton) {
        if (isInCart) {
            addButton.textContent = '✓ Səbətdə';
            addButton.classList.add('in-cart');
            addButton.disabled = true;
            addButton.style.background = '#28a745';
            addButton.style.color = 'white';
        } else {
            addButton.textContent = 'Səbətə əlavə et';
            addButton.classList.remove('in-cart');
            addButton.disabled = false;
            addButton.style.background = '';
            addButton.style.color = '';
        }
    }
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Səbətiniz boşdur!', 'warning');
        return;
    }
    
    const orderTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const modal = document.createElement('div');
    modal.className = 'checkout-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 15px; max-width: 500px; width: 90%; max-height: 80vh; overflow-y: auto;">
            <h3 style="color: #1e3c72; margin-bottom: 1.5rem; text-align: center;">Sifarişi Təsdiqləyin</h3>
            <div style="margin-bottom: 1.5rem;">
                <h4 style="color: #333; margin-bottom: 1rem;">Səbətinizdə:</h4>
                ${cart.map(item => `
                    <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #eee;">
                        <span>${item.name}</span>
                        <span style="font-weight: bold;">${formatPrice(item.price)} AZN</span>
                    </div>
                `).join('')}
            </div>
            <div style="border-top: 2px solid #1e3c72; padding-top: 1rem; margin-bottom: 1.5rem;">
                <div style="display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: bold; color: #1e3c72;">
                    <span>Ümumi məbləğ:</span>
                    <span>${formatPrice(orderTotal)} AZN</span>
                </div>
            </div>
            <form id="checkoutForm" style="margin-bottom: 1.5rem;">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Ad və Soyad *</label>
                    <input type="text" id="customerName" required style="width: 100%; padding: 0.8rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Telefon nömrəsi *</label>
                    <input type="tel" id="customerPhone" required style="width: 100%; padding: 0.8rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem;" placeholder="+994 XX XXX XX XX">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold;">E-mail</label>
                    <input type="email" id="customerEmail" style="width: 100%; padding: 0.8rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem;">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold;">Əlavə qeydlər</label>
                    <textarea id="orderNotes" rows="3" style="width: 100%; padding: 0.8rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem; resize: vertical;" placeholder="Xüsusi tələbləriniz varsa qeyd edin..."></textarea>
                </div>
            </form>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button onclick="closeCheckoutModal()" style="background: #6c757d; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 25px; cursor: pointer; font-weight: bold;">
                    Ləğv et
                </button>
                <button onclick="confirmOrder()" style="background: linear-gradient(45deg, #ffd700, #ff8c00); color: #333; border: none; padding: 0.8rem 1.5rem; border-radius: 25px; cursor: pointer; font-weight: bold;">
                    Sifarişi təsdiqləyin
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);

    setTimeout(() => {
        const nameInput = document.getElementById('customerName');
        if (nameInput) nameInput.focus();
    }, 100);
}

function closeCheckoutModal() {
    const modal = document.querySelector('.checkout-modal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => modal.remove(), 300);
    }
}

function confirmOrder() {
    const form = document.getElementById('checkoutForm');
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const email = document.getElementById('customerEmail').value.trim();
    const notes = document.getElementById('orderNotes').value.trim();

    if (!name) {
        showNotification('Ad və soyad daxil edin', 'error');
        document.getElementById('customerName').focus();
        return;
    }
    
    if (!phone) {
        showNotification('Telefon nömrəsi daxil edin', 'error');
        document.getElementById('customerPhone').focus();
        return;
    }

    const phoneRegex = /^(\+994|0)(50|51|55|70|77|99)\d{7}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        showNotification('Düzgün telefon nömrəsi daxil edin', 'error');
        document.getElementById('customerPhone').focus();
        return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showNotification('Düzgün e-mail ünvanı daxil edin', 'error');
        document.getElementById('customerEmail').focus();
        return;
    }
    
    const orderTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const orderData = {
        id: generateOrderId(),
        customer: {
            name: name,
            phone: phone,
            email: email || null
        },
        items: [...cart],
        total: orderTotal,
        notes: notes || null,
        date: new Date().toISOString(),
        status: 'pending'
    };

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    showNotification('Sifarişiniz qəbul edildi! Ən qısa müddətdə sizinlə əlaqə saxlanılacaq.', 'success');

    closeCheckoutModal();

    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    toggleCart();

    setTimeout(() => {
        displayCars();
    }, 1000);
}

function toggleFavorite(carId) {
    const index = favorites.indexOf(carId);
    
    if (index === -1) {
        favorites.push(carId);
        showNotification('Favorilərə əlavə edildi', 'success');
    } else {
        favorites.splice(index, 1);
        showNotification('Favorilərdən silindi', 'info');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

    const favoriteBtn = document.querySelector(`[data-car-id="${carId}"] .favorite-btn`);
    if (favoriteBtn) {
        const isFavorite = favorites.includes(carId);
        favoriteBtn.textContent = isFavorite ? '❤️' : '🤍';
        favoriteBtn.classList.toggle('active', isFavorite);

        favoriteBtn.style.transform = 'scale(1.3)';
        setTimeout(() => {
            favoriteBtn.style.transform = '';
        }, 200);
    }
}

function filterByPriceRange(minPrice, maxPrice) {
    let filteredCars = getFilteredCars();
    
    if (minPrice !== undefined && maxPrice !== undefined) {
        filteredCars = filteredCars.filter(car => 
            car.price >= minPrice && car.price <= maxPrice
        );
    }
    
    displayCars(filteredCars);
}

function sortCars(sortBy) {
    let filteredCars = [...getFilteredCars()];
    
    switch(sortBy) {
        case 'price-low':
            filteredCars.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredCars.sort((a, b) => b.price - a.price);
            break;
        case 'year-new':
            filteredCars.sort((a, b) => b.year - a.year);
            break;
        case 'year-old':
            filteredCars.sort((a, b) => a.year - b.year);
            break;
        case 'name':
            filteredCars.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'popular':
            filteredCars.sort((a, b) => b.views - a.views);
            break;
        case 'featured':
            filteredCars.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
            break;
        default:
            filteredCars.sort((a, b) => {
                if (a.isFeatured && !b.isFeatured) return -1;
                if (!a.isFeatured && b.isFeatured) return 1;
                return b.views - a.views;
            });
            break;
    }
    
    displayCars(filteredCars);
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    
    if (navLinks && mobileBtn) {
        navLinks.classList.toggle('mobile-open');
        mobileBtn.classList.toggle('active');
        
        if (navLinks.classList.contains('mobile-open')) {
            navLinks.style.cssText = `
                position: fixed;
                top: 80px;
                left: 0;
                width: 100%;
                background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
                flex-direction: column;
                padding: 2rem;
                box-shadow: 0 5px 20px rgba(0,0,0,0.3);
                z-index: 999;
                animation: slideDown 0.3s ease;
            `;
        } else {
            navLinks.style.cssText = '';
        }
    }
}

function handleKeyboardNavigation(event) {
    if (event.key === 'Escape') {
        const cartSidebar = document.getElementById('cartSidebar');
        const checkoutModal = document.querySelector('.checkout-modal');
        
        if (checkoutModal) {
            closeCheckoutModal();
        } else if (cartSidebar && cartSidebar.classList.contains('open')) {
            toggleCart();
        }
    }

    if (event.ctrlKey && event.key === 'f') {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
            searchInput.select();
        }
    }

    if (event.key === 'Enter' && event.target.id === 'searchInput') {
        searchCars();
    }
}

function handleClickOutside(event) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (cartSidebar && cartSidebar.classList.contains('open')) {
        if (!cartSidebar.contains(event.target) && !cartIcon?.contains(event.target)) {
            if (event.target.classList.contains('cart-backdrop')) {
                toggleCart();
            }
        }
    }
}

function handleScroll() {
    const cards = document.querySelectorAll('.car-card:not(.visible)');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
            card.classList.add('visible');
        }
    });

    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(135deg, rgba(30, 60, 114, 0.95) 0%, rgba(42, 82, 152, 0.95) 100%)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)';
            header.style.backdropFilter = 'blur(10px)';
        }
    }
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });

                const navLinks = document.querySelector('.nav-links');
                if (navLinks && navLinks.classList.contains('mobile-open')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

function showSearchSuggestions() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    const popularSearches = ['BMW', 'Mercedes', 'Audi', 'SUV', 'Sedan', 'Hibrid'];

    const existingSuggestions = document.querySelector('.search-suggestions');
    if (existingSuggestions) {
        existingSuggestions.remove();
        return;
    }
    
    const allSuggestions = [...new Set([...searchHistory, ...popularSearches])].slice(0, 8);
    
    if (allSuggestions.length === 0) return;
    
    const suggestions = document.createElement('div');
    suggestions.className = 'search-suggestions';
    suggestions.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #ddd;
        border-top: none;
        border-radius: 0 0 20px 20px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        z-index: 1000;
        max-height: 200px;
        overflow-y: auto;
    `;
    
    allSuggestions.forEach((term, index) => {
        const suggestion = document.createElement('div');
        suggestion.style.cssText = `
            padding: 0.8rem 1.5rem;
            cursor: pointer;
            border-bottom: 1px solid #eee;
            transition: background 0.2s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        `;
        
        const isFromHistory = searchHistory.includes(term);
        suggestion.innerHTML = `
            <span style="color: #666;">${isFromHistory ? '🕒' : '🔍'}</span>
            <span>${term}</span>
        `;
        
        suggestion.addEventListener('mouseenter', () => {
            suggestion.style.background = '#f8f9fa';
        });
        
        suggestion.addEventListener('mouseleave', () => {
            suggestion.style.background = '';
        });
        
        suggestion.addEventListener('click', () => {
            searchInput.value = term;
            searchCars();
            suggestions.remove();
            saveSearchHistory(term);
        });
        
        suggestions.appendChild(suggestion);
    });

    const searchContainer = searchInput.parentElement;
    searchContainer.style.position = 'relative';
    searchContainer.appendChild(suggestions);

    setTimeout(() => {
        document.addEventListener('click', function removeSuggestions(e) {
            if (!searchContainer.contains(e.target)) {
                suggestions.remove();
                document.removeEventListener('click', removeSuggestions);
            }
        });
    }, 100);
}

function saveSearchHistory(searchTerm) {
    if (!searchTerm || searchTerm.length < 2) return;
    
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    searchHistory = searchHistory.filter(term => term.toLowerCase() !== searchTerm.toLowerCase());

    searchHistory.unshift(searchTerm);

    if (searchHistory.length > 10) {
        searchHistory = searchHistory.slice(0, 10);
    }
    
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

document.addEventListener('DOMContentLoaded', function() {
    try {
        console.log('🚗 AutoLux loading...');

        cars = [...carData];

        const savedCart = localStorage.getItem('cart');
        const savedFavorites = localStorage.getItem('favorites');
        
        if (savedCart) {
            try {
                cart = JSON.parse(savedCart);
            } catch (e) {
                console.warn('Cart data corrupted, resetting...');
                cart = [];
                localStorage.removeItem('cart');
            }
        }
        
        if (savedFavorites) {
            try {
                favorites = JSON.parse(savedFavorites);
            } catch (e) {
                console.warn('Favorites data corrupted, resetting...');
                favorites = [];
                localStorage.removeItem('favorites');
            }
        }

        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        if (categoryParam && ['sedan', 'suv', 'hatchback', 'luxury'].includes(categoryParam)) {
            currentFilter = categoryParam;
        }

        displayCars();
        updateCartDisplay();

        document.querySelectorAll('.filter-btn').forEach(btn => {
            if (btn.dataset.filter === currentFilter) {
                btn.classList.add('active');
            }
        });

        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', debounce(searchCars, 300));
            searchInput.addEventListener('focus', showSearchSuggestions);
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    searchCars();
                    const term = searchInput.value.trim();
                    if (term) saveSearchHistory(term);
                }
            });
        }

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                filterCars(filter);
            });
        });

        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        }

        const cartIcon = document.querySelector('.cart-icon');
        if (cartIcon) {
            cartIcon.addEventListener('click', toggleCart);
        }

        document.addEventListener('keydown', handleKeyboardNavigation);
        document.addEventListener('click', handleClickOutside);
        window.addEventListener('scroll', debounce(handleScroll, 100));

        setupSmoothScrolling();

        handleScroll();

        setTimeout(() => {
            showNotification('AutoLux-a xoş gəldiniz! 🚗', 'success');
        }, 1000);
        
        console.log('✅ AutoLux uğurla yükləndi!');
        console.log(`📊 ${cars.length} avtomobil, ${cart.length} səbətdə, ${favorites.length} favorit`);
        
    } catch (error) {
        console.error('❌ Aplikasiya yüklənərkən xəta:', error);
        showNotification('Səhifə yüklənərkən xəta baş verdi', 'error');
    }
});

const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes slideDown {
        from { transform: translateY(-20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes heartBeat {
        0% { transform: scale(1); }
        25% { transform: scale(1.3); }
        50% { transform: scale(1.1); }
        75% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
    
    .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        backdrop-filter: blur(2px);
    }
    
    .spinner {
        width: 70px;
        text-align: center;
    }
    
    .spinner > div {
        width: 18px;
        height: 18px;
        background-color: #1e3c72;
        border-radius: 100%;
        display: inline-block;
        animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        margin: 0 2px;
    }
    
    .spinner .bounce1 {
        animation-delay: -0.32s;
    }
    
    .spinner .bounce2 {
        animation-delay: -0.16s;
    }
    
    @keyframes sk-bouncedelay {
        0%, 80%, 100% { 
            transform: scale(0);
        } 40% { 
            transform: scale(1.0);
        }
    }
    
    .car-card.visible {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .favorite-btn:hover {
        transform: scale(1.2);
        background: rgba(255, 215, 0, 0.2) !important;
    }
    
    .favorite-btn.active {
        animation: heartBeat 0.6s ease;
    }
    
    .cart-item {
        transition: all 0.3s ease;
    }
    
    .cart-item:hover {
        background: rgba(255, 215, 0, 0.1);
        transform: translateX(5px);
        border-radius: 8px;
        margin: 0 -0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    
    .no-results {
        animation: fadeIn 0.5s ease;
    }
    
    .search-suggestions {
        animation: slideDown 0.2s ease;
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    /* Responsive improvements */
    @media (max-width: 768px) {
        .notification {
            right: 10px !important;
            left: 10px !important;
            max-width: none !important;
        }
        
        .checkout-modal > div {
            width: 95% !important;
            padding: 1.5rem !important;
        }
        
        .search-suggestions {
            border-radius: 0 0 15px 15px !important;
        }
    }
    
    /* Accessibility improvements */
    .btn:focus,
    .filter-btn:focus,
    .search-box:focus,
    .favorite-btn:focus {
        outline: 3px solid var(--accent-color);
        outline-offset: 2px;
    }
    
    /* Print styles */
    @media print {
        .cart-sidebar,
        .mobile-menu-btn,
        .favorite-btn,
        .notification,
        .loading-overlay {
            display: none !important;
        }
    }
`;

document.head.appendChild(dynamicStyles);

function trackPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`📊 Səhifə yüklənmə vaxtı: ${loadTime}ms`);
            
            if (loadTime > 3000) {
                console.warn('⚠️ Səhifə yüklənmə vaxtı yavaşdır');
            }
        });
    }
}

function trackUserActivity() {
    const activity = {
        pageViews: parseInt(localStorage.getItem('pageViews')) || 0,
        searchCount: parseInt(localStorage.getItem('searchCount')) || 0,
        cartActions: parseInt(localStorage.getItem('cartActions')) || 0,
        favoriteActions: parseInt(localStorage.getItem('favoriteActions')) || 0,
        lastVisit: new Date().toISOString()
    };
    
    activity.pageViews++;
    localStorage.setItem('pageViews', activity.pageViews.toString());
    localStorage.setItem('userActivity', JSON.stringify(activity));
}

function incrementCarViews(carId) {
    const car = cars.find(c => c.id === carId);
    if (car) {
        car.views++;
        console.log(`🔍 ${car.name} görüntüləndi (${car.views} dəfə)`);
    }
}

function showStatistics() {
    const stats = {
        totalCars: cars.length,
        totalValue: cars.reduce((sum, car) => sum + car.price, 0),
        averagePrice: cars.reduce((sum, car) => sum + car.price, 0) / cars.length,
        categories: {
            sedan: cars.filter(car => car.category === 'sedan').length,
            suv: cars.filter(car => car.category === 'suv').length,
            hatchback: cars.filter(car => car.category === 'hatchback').length,
            luxury: cars.filter(car => car.category === 'luxury').length
        },
        brands: {},
        cartValue: cart.reduce((sum, item) => sum + item.price, 0),
        userActivity: JSON.parse(localStorage.getItem('userActivity')) || {}
    };

    cars.forEach(car => {
        stats.brands[car.brand] = (stats.brands[car.brand] || 0) + 1;
    });
    
    console.log('📊 AutoLux Statistikası:');
    console.log(`Ümumi avtomobil sayı: ${stats.totalCars}`);
    console.log(`Orta qiymət: ${formatPrice(Math.round(stats.averagePrice))} AZN`);
    console.log(`Kategoriyalar:`, stats.categories);
    console.log(`Səbət dəyəri: ${formatPrice(stats.cartValue)} AZN`);
    console.log(`İstifadəçi aktivliyi:`, stats.userActivity);
    
    return stats;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark.toString());
    showNotification(isDark ? 'Qaranlıq rejim aktivləşdirildi' : 'İşıqlı rejim aktivləşdirildi', 'info');
}

function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'AutoLux - Premium Avtomobillər',
            text: 'Ən yaxşı qiymətlərlə keyfiyyətli avtomobillər',
            url: window.location.href
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('Səhifə linki kopyalandı!', 'success');
        }).catch(() => {
            showNotification('Link kopyalanmadı', 'error');
        });
    }
}

let compareList = JSON.parse(localStorage.getItem('compareList')) || [];

function addToCompare(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;
    
    if (compareList.find(c => c.id === carId)) {
        showNotification('Bu avtomobil artıq müqayisə siyahısındadır', 'warning');
        return;
    }
    
    if (compareList.length >= 3) {
        showNotification('Maksimum 3 avtomobil müqayisə edə bilərsiniz', 'warning');
        return;
    }
    
    compareList.push(car);
    localStorage.setItem('compareList', JSON.stringify(compareList));
    showNotification(`${car.name} müqayisəyə əlavə edildi`, 'success');
    updateCompareCounter();
}

function removeFromCompare(carId) {
    compareList = compareList.filter(car => car.id !== carId);
    localStorage.setItem('compareList', JSON.stringify(compareList));
    updateCompareCounter();
}

function updateCompareCounter() {
    const counter = document.querySelector('.compare-counter');
    if (counter) {
        counter.textContent = compareList.length;
        counter.style.display = compareList.length > 0 ? 'block' : 'none';
    }
}

function showCompareModal() {
    if (compareList.length < 2) {
        showNotification('Müqayisə üçün ən azı 2 avtomobil seçin', 'warning');
        return;
    }
    
    const modal = document.createElement('div');
    modal.className = 'compare-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    `;
    
    const compareTable = compareList.map(car => `
        <div style="flex: 1; background: white; margin: 0 0.5rem; border-radius: 10px; overflow: hidden;">
            <img src="${car.image}" alt="${car.name}" style="width: 100%; height: 200px; object-fit: cover;">
            <div style="padding: 1rem;">
                <h4>${car.name}</h4>
                <div style="color: #1e3c72; font-weight: bold; font-size: 1.2rem; margin: 0.5rem 0;">
                    ${formatPrice(car.price)} AZN
                </div>
                <div style="font-size: 0.9rem; color: #666; margin-bottom: 1rem;">
                    <div>İl: ${car.year}</div>
                    <div>Yanacaq: ${car.fuel}</div>
                    <div>Güc: ${car.power}</div>
                    <div>Transmissiya: ${car.transmission}</div>
                    <div>Kilometerli: ${car.mileage}</div>
                    <div>Vəziyyət: ${car.condition}</div>
                </div>
                <button onclick="removeFromCompare(${car.id}); closeCompareModal();" 
                        style="background: #ff4444; color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer; width: 100%;">
                    Sil
                </button>
            </div>
        </div>
    `).join('');
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 15px; max-width: 90%; width: 800px; max-height: 80vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h3 style="color: #1e3c72;">Avtomobil Müqayisəsi</h3>
                <button onclick="closeCompareModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">✕</button>
            </div>
            <div style="display: flex; gap: 1rem; overflow-x: auto;">
                ${compareTable}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function closeCompareModal() {
    const modal = document.querySelector('.compare-modal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => modal.remove(), 300);
    }
}

function showCarDetails(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;

    incrementCarViews(carId);
    
    const modal = document.createElement('div');
    modal.className = 'car-details-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
        overflow-y: auto;
        padding: 2rem;
    `;
    
    const isFavorite = favorites.includes(car.id);
    const isInCart = cart.some(item => item.id === car.id);
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 15px; max-width: 600px; width: 100%; max-height: 90vh; overflow-y: auto;">
            <div style="position: relative;">
                <img src="${car.image}" alt="${car.name}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px 15px 0 0;">
                <button onclick="closeCarDetailsModal()" 
                        style="position: absolute; top: 1rem; right: 1rem; background: rgba(0,0,0,0.7); color: white; border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; font-size: 1.2rem;">
                    ✕
                </button>
                ${car.isFeatured ? '<div style="position: absolute; top: 1rem; left: 1rem; background: linear-gradient(45deg, #ffd700, #ff8c00); color: #333; padding: 0.5rem 1rem; border-radius: 20px; font-weight: bold;">Seçilmiş</div>' : ''}
            </div>
            <div style="padding: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div>
                        <h2 style="color: #1e3c72; margin-bottom: 0.5rem;">${car.name}</h2>
                        <div style="color: #1e3c72; font-size: 1.5rem; font-weight: bold;">
                            ${formatPrice(car.price)} AZN
                        </div>
                    </div>
                    <button onclick="toggleFavorite(${car.id})" 
                            style="background: none; border: none; font-size: 2rem; cursor: pointer;"
                            title="${isFavorite ? 'Favoridən çıxar' : 'Favoriyə əlavə et'}">
                        ${isFavorite ? '❤️' : '🤍'}
                    </button>
                </div>
                
                <p style="color: #666; margin-bottom: 1.5rem; line-height: 1.6;">
                    ${car.description}
                </p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                    <div>
                        <strong>İl:</strong> ${car.year}
                    </div>
                    <div>
                        <strong>Marka:</strong> ${car.brand}
                    </div>
                    <div>
                        <strong>Yanacaq:</strong> ${car.fuel}
                    </div>
                    <div>
                        <strong>Güc:</strong> ${car.power}
                    </div>
                    <div>
                        <strong>Transmissiya:</strong> ${car.transmission}
                    </div>
                    <div>
                        <strong>Kilometerli:</strong> ${car.mileage}
                    </div>
                    <div>
                        <strong>Vəziyyət:</strong> ${car.condition}
                    </div>
                    <div>
                        <strong>Yerləşmə:</strong> ${car.location}
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <strong style="display: block; margin-bottom: 0.5rem;">Xüsusiyyətlər:</strong>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${car.features.map(feature => 
                            `<span style="background: #f0f8ff; color: #1e3c72; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.9rem;">${feature}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding: 1rem; background: #f8f9fa; border-radius: 10px;">
                    <div>
                        <strong>Satıcı:</strong> ${car.seller}
                    </div>
                    <div style="color: #666;">
                        👁️ ${car.views} görüntülənmə
                    </div>
                </div>
                
                <div style="display: flex; gap: 1rem;">
                    <button onclick="addToCart(${car.id})" 
                            style="flex: 1; background: linear-gradient(45deg, #ffd700, #ff8c00); color: #333; border: none; padding: 1rem; border-radius: 25px; font-weight: bold; cursor: pointer; ${isInCart ? 'opacity: 0.5;' : ''}"
                            ${isInCart ? 'disabled' : ''}>
                        ${isInCart ? '✓ Səbətdə' : 'Səbətə əlavə et'}
                    </button>
                    <button onclick="addToCompare(${car.id})" 
                            style="background: #6c757d; color: white; border: none; padding: 1rem; border-radius: 25px; cursor: pointer;">
                        Müqayisə et
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function closeCarDetailsModal() {
    const modal = document.querySelector('.car-details-modal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => modal.remove(), 300);
    }
}

let viewMode = localStorage.getItem('viewMode') || 'grid';

function toggleViewMode() {
    viewMode = viewMode === 'grid' ? 'list' : 'grid';
    localStorage.setItem('viewMode', viewMode);
    
    const carsGrid = document.getElementById('carsGrid');
    if (carsGrid) {
        if (viewMode === 'list') {
            carsGrid.style.display = 'flex';
            carsGrid.style.flexDirection = 'column';
            carsGrid.style.gap = '1rem';
        } else {
            carsGrid.style.display = 'grid';
            carsGrid.style.flexDirection = '';
            carsGrid.style.gap = '2.5rem';
        }
    }
    
    displayCars();
}

function addSortControls() {
    const container = document.querySelector('.cars .container');
    const filtersDiv = document.querySelector('.filters');
    
    if (!container || !filtersDiv) return;
    
    const sortControls = document.createElement('div');
    sortControls.className = 'sort-controls';
    sortControls.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
        padding: 1rem;
        background: white;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    `;
    
    sortControls.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem;">
            <label for="sortSelect" style="font-weight: bold;">Sıralama:</label>
            <select id="sortSelect" style="padding: 0.5rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem;">
                <option value="default">Standart</option>
                <option value="price-low">Qiymət: Aşağıdan yuxarı</option>
                <option value="price-high">Qiymət: Yuxarıdan aşağı</option>
                <option value="year-new">İl: Yenidən köhnəyə</option>
                <option value="year-old">İl: Köhnədən yeniyə</option>
                <option value="name">Ad: A-Z</option>
                <option value="popular">Populyarlıq</option>
                <option value="featured">Seçilmişlər</option>
            </select>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
            <button onclick="toggleViewMode()" style="background: #6c757d; color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer;">
                📱 ${viewMode === 'grid' ? 'Siyahı' : 'Grid'}
            </button>
            <span style="color: #666; font-size: 0.9rem;">
                ${cars.length} nəticə
            </span>
        </div>
    `;
    
    container.insertBefore(sortControls, filtersDiv.nextSibling);

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            sortCars(e.target.value);
        });
    }
}

window.addEventListener('load', () => {
    trackPerformance();
    trackUserActivity();

    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
    }

    setTimeout(() => {
        addSortControls();
        updateCompareCounter();
    }, 100);

    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        setTimeout(showStatistics, 2000);
    }
});

window.addEventListener('beforeunload', () => {
    const activity = JSON.parse(localStorage.getItem('userActivity')) || {};
    activity.lastVisit = new Date().toISOString();
    activity.sessionDuration = Date.now() - parseInt(sessionStorage.getItem('sessionStart') || Date.now());
    localStorage.setItem('userActivity', JSON.stringify(activity));
});

sessionStorage.setItem('sessionStart', Date.now().toString());

window.AutoLux = {
    cars,
    cart,
    favorites,
    addToCart,
    removeFromCart,
    toggleFavorite,
    searchCars,
    filterCars,
    sortCars,
    showStatistics,
    toggleDarkMode,
    sharePage,
    showCarDetails,
    addToCompare,
    showCompareModal,
    closeCheckoutModal,
    confirmOrder,
    toggleCart,
    checkout
};

console.log('🚗 AutoLux JavaScript tamamlandı!');
console.log('📋 Mövcud funksiyalar:', Object.keys(window.AutoLux));
console.log('🎯 Hazırdır: Avtomobil axtarışı, filterlənmə, səbət, favorilər, müqayisə və s.');

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('📱 Service Worker qeydiyyatdan keçdi');
            })
            .catch(error => {
                console.log('❌ Service Worker qeydiyyatı uğursuz:', error);
            });
    });
}

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        }
    });
});

function trackWebVitals() {
    if ('performance' in window && 'PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log(`📊 ${entry.name}: ${entry.duration.toFixed(2)}ms`);
            }
        });
        
        observer.observe({ entryTypes: ['measure', 'navigation'] });
    }
}

trackWebVitals();

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('📱 Səhifə gizləndi');
    } else {
        console.log('📱 Səhifə görünür');
    }
});

window.addEventListener('online', () => {
    showNotification('İnternet bağlantısı bərpa olundu', 'success');
});

window.addEventListener('offline', () => {
    showNotification('İnternet bağlantısı kəsildi', 'warning');
});

console.log('🎉 AutoLux hazırdır! Xoş gəldiniz!');
