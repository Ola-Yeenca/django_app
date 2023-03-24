document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (currentScrollPos >= sectionTop - sectionHeight * 0.25 &&
          currentScrollPos < sectionTop + sectionHeight * 0.75) {
        const currentSection = section.getAttribute('id');
        console.log('Current section:', currentSection);

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
            console.log('Active link:', link);
          }
        });
      }
    });
          //==============sticky navbar ====================//

          let header = document.querySelector('header');


          header.classList.toggle('sticky', window.scrollY > 100)

          //=====================toggle icon navbar=====================//
          let menuIcon = document.querySelector('#menu-icon');
          let navbar = document.querySelector('.navbar');

          menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
          }

          //=====================remove toggle icon and navbar when navlink is clicked (scroll) =====================//

          menuIcon.classList.remove('bx-x')
          navbar.classList.remove('active')
  });
});


// scroll reveal

document.addEventListener('DOMContentLoaded', function() {
  ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    // easing: 'ease-in-out',
    delay: 200,
  });

  ScrollReveal().reveal('.home-content, .headings', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .tech-stack-container, .portfolio-box', '.contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.about-img, .home-content h1', { origin: 'left' });
  ScrollReveal().reveal('.about-content, .home-content p', { origin: 'right' });
});

// typed js

document.addEventListener('DOMContentLoaded', function() {
  const typed = new Typed('.multiple-text', {
    strings: ['Hello, I am Ola Yinka', 'Web Developer', 'Web Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
});

// read more paragraaph reveal

document.addEventListener('DOMContentLoaded', function() {
  const paragraph = document.getElementById('paragraph');
  const readMoreBtn = document.getElementById('read-more');

  readMoreBtn.addEventListener('click', () => {
    paragraph.classList.toggle('expanded');
    readMoreBtn.textContent = paragraph.classList.contains('expanded') ? 'Read less' : 'Read more';
  });
});




//=====================change portfolio header to logo=====================//
