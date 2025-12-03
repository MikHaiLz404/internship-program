document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'lang-toggle';
    document.body.appendChild(toggleBtn);

    // Check local storage or default to English
    const currentLang = localStorage.getItem('lang') || 'en';
    setLanguage(currentLang);

    toggleBtn.addEventListener('click', () => {
        const newLang = document.body.classList.contains('lang-en') ? 'th' : 'en';
        setLanguage(newLang);
    });

    function setLanguage(lang) {
        document.body.classList.remove('lang-en', 'lang-th');
        document.body.classList.add(`lang-${lang}`);
        localStorage.setItem('lang', lang);
        
        // Button text shows the language you can switch TO
        toggleBtn.textContent = lang === 'en' ? 'TH' : 'EN';
    }
});
