const menuIcon = document.querySelector('.menu i');
const navLinks = document.querySelector('.links');

document.querySelector('.menu').addEventListener('click', () => {
  navLinks.classList.toggle('active');

  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
});
