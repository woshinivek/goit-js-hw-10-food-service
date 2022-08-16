const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchThemeToggle = document.querySelector('#theme-switch-toggle');

switchThemeToggle.addEventListener('change', onToggleChange);

setThemeColor();

function onToggleChange(evt) {
  const isThemeDark = document.body.classList.contains(Theme.DARK);

  if (isThemeDark) {
    setLightTheme();

    return;
  }

  setDarkTheme();
}

function setThemeColor() {
  document.body.classList.add(localStorage.getItem('theme'));

  if (localStorage.getItem('theme') === Theme.DARK) {
    switchThemeToggle.checked = true;
  }
}

function setDarkTheme() {
  document.body.classList.replace(Theme.LIGHT, Theme.DARK);

  localStorage.setItem('theme', Theme.DARK);
}

function setLightTheme() {
  document.body.classList.replace(Theme.DARK, Theme.LIGHT);

  localStorage.setItem('theme', Theme.LIGHT);
}
