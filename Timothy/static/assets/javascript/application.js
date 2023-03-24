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



//=====================change portfolio header to logo=====================//
