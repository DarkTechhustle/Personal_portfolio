/* ============================================
   MATRIX FALLING CODE EFFECT
   ============================================ */

const matrixCharacters = '01ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾙﾚﾜﾝ';

function createMatrixEffect() {
    const container = document.getElementById('matrixContainer');
    if (!container) return;

    // Create falling characters periodically
    setInterval(() => {
        const char = matrixCharacters.charAt(Math.floor(Math.random() * matrixCharacters.length));
        const element = document.createElement('div');
        element.className = 'matrix-char falling';
        element.textContent = char;
        
        const randomLeft = Math.random() * window.innerWidth;
        const randomDuration = 8 + Math.random() * 5; // 8-13 seconds
        
        element.style.left = randomLeft + 'px';
        element.style.animationDuration = randomDuration + 's';
        element.style.animationDelay = (Math.random() * 2) + 's';
        
        container.appendChild(element);
        
        // Remove element after animation completes
        setTimeout(() => element.remove(), (randomDuration * 1000) + 2000);
    }, 100); // Create a new character every 100ms
}

// Start matrix effect when page loads
document.addEventListener('DOMContentLoaded', createMatrixEffect);

/* ============================================
   CONTACT FORM VALIDATION & SUBMISSION
   ============================================ */

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Simple validation
        if (name && email && subject && message) {
            // Show success message
            alert(`Thank you ${name}! Your message has been sent successfully. I'll get back to you soon at ${email}.`);
            
            // Reset form
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
}

/* ============================================
   SMOOTH SCROLLING ENHANCEMENT
   ============================================ */

// Add smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* ============================================
   NAVBAR ACTIVE STATE
   ============================================ */

// Highlight current page in navbar
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

// Fade in elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to project cards and timeline items
document.querySelectorAll('.project-card, .timeline-item, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
