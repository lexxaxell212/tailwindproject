// Flowbite v3 + Custom JS
// Taruh di ./js/app.js

document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 Flowbite v3 + Termux Ready!');
    
    // ===== FLOWBITE DROPDOWN =====
    const toggleButton = document.getElementById('dropdownButton');
    const dropdown = document.getElementById('dropdown');
    
    if (toggleButton && dropdown) {
        toggleButton.addEventListener('click', function() {
            dropdown.classList.toggle('hidden');
        });
        
        // Close dropdown saat click outside
        document.addEventListener('click', function(e) {
            if (!toggleButton.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.add('hidden');
            }
        });
    }

    // ===== FLOWBITE MODAL =====
    const modalTriggers = document.querySelectorAll('[data-modal-toggle]');
    const modalHides = document.querySelectorAll('[data-modal-hide]');
    const modals = document.querySelectorAll('[id^="default-modal"], [id$="Modal"]');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-modal-toggle');
            const modal = document.getElementById(targetId);
            if (modal) {
                modal.classList.remove('hidden');
                document.body.classList.add('overflow-hidden');
            }
        });
    });
    
    modalHides.forEach(hideBtn => {
        hideBtn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal-hide');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
        });
    });

    // Close modal on backdrop click
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
        });
    });

    // ===== NAVBAR MOBILE =====
    const navbarToggle = document.querySelector('[data-collapse-toggle]');
    const navbarCollapse = document.getElementById('navbar-default');
    
    if (navbarToggle && navbarCollapse) {
        navbarToggle.addEventListener('click', function() {
            navbarCollapse.classList.toggle('hidden');
        });
    }

    // ===== DARK MODE TOGGLE =====
    const darkToggle = document.querySelector('[data-theme-toggle]');
    if (darkToggle) {
        darkToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== SCROLL TO TOP =====
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.remove('opacity-0', 'invisible');
                scrollTopBtn.classList.add('opacity-100', 'visible');
            } else {
                scrollTopBtn.classList.remove('opacity-100', 'visible');
                scrollTopBtn.classList.add('opacity-0', 'invisible');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== SEARCH ANIMATION =====
    const searchInput = document.querySelector('input[type="search"], input[placeholder*="cari"]');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.classList.add('ring-4', 'ring-blue-500/20', 'scale-105');
        });
        searchInput.addEventListener('blur', function() {
            this.parentElement.classList.remove('ring-4', 'ring-blue-500/20', 'scale-105');
        });
    }

    console.log('✅ All Flowbite components initialized!');
});
