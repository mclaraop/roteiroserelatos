// scripts/script.js

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica se a preferência de tema está armazenada no localStorage
    const storedTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(storedTheme + '-theme');

    // Ajusta o estado do toggle switch
    themeToggle.checked = storedTheme === 'dark';

    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});
