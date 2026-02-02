/**
 * Security & Performance Module - Academia360°
 * Protection contre le spam et optimisations techniques
 */

// 1. Protection basique contre les bots spammeurs (Honeypot technique)
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter un champ honeypot caché aux formulaires
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const honeypot = document.createElement('input');
        honeypot.type = 'text';
        honeypot.name = 'website'; // Nom attirant pour les bots
        honeypot.style.display = 'none';
        honeypot.setAttribute('tabindex', '-1');
        honeypot.setAttribute('autocomplete', 'off');
        honeypot.classList.add('honeypot-field');
        form.appendChild(honeypot);
        
        // Vérification avant envoi
        form.addEventListener('submit', function(e) {
            if(honeypot.value !== '') {
                e.preventDefault();
                console.warn('Bot detected');
                return false;
            }
        });
    });
});

// 2. Protection contre le clic droit (optionnel, décommentez si besoin)
/*
document.addEventListener('contextmenu', function(e) {
    if(e.target.tagName === 'IMG') {
        e.preventDefault();
        alert('Les images sont protégées par copyright © Academia360°');
    }
});
*/

// 3. Détection des DevTools (protection contre le scraping avancé)
let devtoolsOpen = false;
setInterval(() => {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    
    if(widthThreshold || heightThreshold) {
        if(!devtoolsOpen) {
            console.clear();
            console.log('%cStop!', 'color: red; font-size: 50px; font-weight: bold;');
            console.log('%cCette console est réservée aux développeurs.', 'color: #1a365d; font-size: 16px;');
            devtoolsOpen = true;
        }
    } else {
        devtoolsOpen = false;
    }
}, 1000);

// 4. Lazy Loading natif pour les images (Performance SEO)
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
if('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// 5. Protection formulaire : Délai minimum de remplissage (anti-bot)
const formStartTime = Date.now();
window.formSecurity = {
    getTimeSpent: () => Date.now() - formStartTime,
    isHuman: () => (Date.now() - formStartTime) > 3000 // Minimum 3 secondes
};

// 6. Gestion sécurisée des liens externes (Sécurité + SEO)
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    if(!link.rel.includes('noopener')) {
        link.rel += ' noopener noreferrer';
    }
    // Protection contre l'onglet inversé
    link.addEventListener('click', function(e) {
        window.opener = null;
    });
});

// 7. Console branding (Professionnel)
console.log('%cAcademia360° Expert Qualiopi', 'color: #1a365d; font-size: 24px; font-weight: bold;');
console.log('%cSite web sécurisé - Tous droits réservés © 2026', 'color: #ed8936; font-size: 12px;');