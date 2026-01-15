window.addEventListener('DOMContentLoaded', () => {
    const elementiDaAnimare = document.querySelectorAll('.img, .testo, .titoloPar');

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

/*VIDEO*/
const video = document.getElementById('mioVideo');
const btn = document.getElementById('audioToggle');

btn.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        btn.innerText = "SOUND OFF";
    } else {
        video.muted = true;
        btn.innerText = "SOUND ON";
    }
});