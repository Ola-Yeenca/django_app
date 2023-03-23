document.addEventListener("DOMContentLoaded", function() {
  function useTypewriter(words, loop=true, delaySpeed=500) {
    const typewriter = document.querySelector('#typewriter');
    let text = '';
    let count = 0;
    let isDeleting = false;

    setInterval(() => {
      const currentWord = words[count];
      const currentText = text.substring(0, text.length - isDeleting);
      const currentLength = currentText.length;

      if (!isDeleting && currentLength === currentWord.length) {
        isDeleting = true;
      } else if (isDeleting && currentLength === 0) {
        count = (count + 1) % words.length;
        isDeleting = false;
      }

      text = isDeleting
        ? currentWord.substring(0, currentLength - 1)
        : currentWord.substring(0, currentLength + 1);

      typewriter.innerHTML = text;
      if (isDeleting || currentLength < currentWord.length) {
        typewriter.classList.remove('visible');
      } else {
        typewriter.classList.add('visible');
      }
    }, isDeleting ? delaySpeed / 2 : delaySpeed);
  }

  useTypewriter([
    'Hello, I am Ola Yinka ',
    'Developer',
    'Designer',
    'Freelancer'
  ]);
});
