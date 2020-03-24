const navSlide = () => {
  const burguer = document.querySelector('.navbar__burguer');
  const nav = document.querySelector('.navbar__links');
  const navLinks = document.querySelectorAll('.navbar__links--list');

  burguer.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = ''; 
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      } 
    });

  });
  
} 

navSlide();

