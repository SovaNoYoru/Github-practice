const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Проверяем сохраненную тему в localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-theme');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  
  // Сохраняем выбор пользователя
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

console.log('Script loaded successfully');