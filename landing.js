const aboutLink = document.querySelector('a[href="#home"]');
aboutLink.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.getElementById('home');
    targetSection.scrollIntoView({ behavior: 'smooth' });
});
