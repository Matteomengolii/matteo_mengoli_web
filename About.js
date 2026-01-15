window.addEventListener('DOMContentLoaded', () => {
    const elementiDaAnimare = document.querySelectorAll('.img, .testo');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementiDaAnimare.forEach(el => {
        observer.observe(el);
    });
});