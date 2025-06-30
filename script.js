// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const dest = document.querySelector(el.getAttribute('href'));
    if(dest) dest.scrollIntoView({ behavior: 'smooth' });
  });
});
