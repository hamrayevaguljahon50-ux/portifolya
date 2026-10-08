// Navigation buttons functionality
document.querySelector('.nav-btn').addEventListener('click', () => {
    // Scroll to the footer or a contact section
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
    alert("Bog'lanish bo'limiga o'tildi!");
});

// CV download button functionality
document.querySelector('.header-second--btn').addEventListener('click', () => {
    // Create a dummy link for CV download
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual CV link if available
    link.download = 'Umriuzoq_Rajabov_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('CV yuklab olish boshlandi!');
});

// Simple animation for project cards on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.main-projects li').forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.5s ease-out';
    observer.observe(el);
});

