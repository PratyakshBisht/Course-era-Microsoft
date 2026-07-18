// Mobile Menu Toggle Functionality
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinksItems = navLinks.querySelectorAll('a');
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Get Started Button - Scroll to Projects Section
const ctaButton = document.getElementById('ctaButton');
ctaButton.addEventListener('click', () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation
    if (name === '' || email === '' || message === '') {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Simulate form submission
    showFormMessage('Sending your message...', 'info');

    setTimeout(() => {
        showFormMessage('Thank you! Your message has been sent successfully.', 'success');
        contactForm.reset();

        // Clear message after 4 seconds
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = '';
        }, 4000);
    }, 1500);
});

// Email Validation Function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show Form Message Function
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate Skills Progress Bars on Scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target.querySelector('.skill-progress');
            if (skillProgress && !skillProgress.classList.contains('animated')) {
                const width = skillProgress.style.width;
                skillProgress.style.width = '0';
                setTimeout(() => {
                    skillProgress.style.width = width;
                    skillProgress.classList.add('animated');
                }, 100);
            }
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill items
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    observer.observe(item);
});

// Add animation for project cards on scroll
const projectObserverOptions = {
    threshold: 0.3,
    rootMargin: '0px'
};

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            projectObserver.unobserve(entry.target);
        }
    });
}, projectObserverOptions);

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    projectObserver.observe(card);
});

// Add scroll event to highlight active navigation link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200 && window.pageYOffset < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.style.color = '#fff';
            });

            const activeLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.style.color = '#3498db';
            }
        }
    });
});

// Log page load for debugging
console.log('Portfolio website loaded successfully!');
