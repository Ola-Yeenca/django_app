document.addEventListener('DOMContentLoaded', function() {
  var themeToggle = document.querySelector('#toggle-theme');
  var themeStyle = document.querySelector('#theme-style');
  themeToggle.addEventListener('click', function () {
    if (themeStyle.getAttribute('href') == "{% static 'assets/stylesheet/light-mode.css' %}") {
      themeStyle.href = "{% static 'assets/stylesheet/dark-mode.css' %}";
    } else {
      themeStyle.href = "{% static 'assets/stylesheet/light-mode.css' %}";
    }
  });
});
