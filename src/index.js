const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchThemeToggle = document.querySelector('#theme-switch-toggle');

switchThemeToggle.addEventListener('change', onToggleChange);

document.body.classList.add(Theme.LIGHT);

// localStorage.setItem('theme', Theme.LIGHT);
// document.body.classList.add(localStorage.getItem('theme'));

// console.log(localStorage);

function onToggleChange(evt) {
  const isThemeDark = document.body.classList.contains(Theme.DARK);
  const isThemeLight = document.body.classList.contains(Theme.LIGHT);
  console.log('isThemeDark', isThemeDark);

  if (isThemeDark) {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);

    return;
  }

  if (isThemeLight) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);

    return;
  }
}

console.log(localStorage);
