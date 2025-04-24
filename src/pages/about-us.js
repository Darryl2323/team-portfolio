document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
