document.body.classList.add('light-theme');

const switchThemeToggle = document.querySelector('#theme-switch-toggle');

switchThemeToggle.addEventListener('change', onToggleChange);

function onToggleChange(evt) {
  document.body.classList.remove('light-theme');

  document.body.classList.add('dark-theme');
}
