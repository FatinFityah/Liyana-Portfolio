document.addEventListener('DOMContentLoaded', () => {
    
    // --- Feature 1: Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });


    // --- Feature 2: Dynamic Typing Effect for Hero Section ---
    const textElement = document.querySelector('.typing-text');
    
    // UPDATED: This line controls the animated text in the Hero section
    const textToType = "Web Development | Car Rental Systems | AR Unity Specialist";
    
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < textToType.length) {
            textElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100); // Speed of typing (ms)
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);


    // --- Feature 3: Smooth Scroll with Active Link Highlighting ---
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Check if we have scrolled down to this section
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.style.color = ''; // Reset color
            if (a.getAttribute('href').includes(current) && current !== '') {
                a.style.color = '#d4af37'; // Highlight active link with gold
            }
        });
    });


    // --- Feature 4: Form Submission (Front-end only) ---
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop actual page reload
            
            const name = document.getElementById('name').value;
            const btn = document.querySelector('.submit-btn');
            const originalText = btn.textContent;

            // Simulate sending state
            btn.textContent = 'Sending...';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                alert(`Thank you, ${name}! Your message has been "sent" (This is a demo).`);
                contactForm.reset();
                btn.textContent = originalText;
                btn.style.opacity = '1';
            }, 1500);
        });
    }
});
