// JavaScript for smooth scrolling when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
       e.preventDefault();

       document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
       });
   });
});

// JavaScript for toggling mobile menu
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
   navList.classList.toggle('active');
});

// JavaScript for scrolling to top button
const topButton = document.querySelector('.top-btn');

window.addEventListener('scroll', () => {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       topButton.style.display = 'block';
   } else {
       topButton.style.display = 'none';
   }
});

topButton.addEventListener('click', () => {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
});
