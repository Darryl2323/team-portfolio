document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    const rectangles = document.querySelectorAll('.rectangle');
    rectangles.forEach(rectangle => {
        rectangle.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const link = rectangle.querySelector('a');
            if (link && link.href) {
                navigateTo(link.href);
            } else {
                console.error('No valid link found in rectangle:', rectangle);
            }
        });
    });
});

function navigateTo(url) {
    if (url) {
        window.location.href = url; // Navigate to the URL in the same tab
    } else {
        console.error('Invalid URL provided to navigateTo:', url);
    }
}