window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.backgroundColor = '#222';
  } else {
    header.style.backgroundColor = '#999';
  }
});
