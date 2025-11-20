// Dark/Light Theme Toggle
document.getElementById('themeToggle').onclick = () => {
    document.body.classList.toggle('dark');
};

// Simple AOS (scroll animation)
const aosElements = document.querySelectorAll('.aos');
function aosCheck() {
    aosElements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
}
window.addEventListener('scroll', aosCheck);
window.addEventListener('load', aosCheck);