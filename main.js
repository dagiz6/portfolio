// Theme management
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // Skip if href is just '#' (invalid selector)
        if (href === '#') {
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
        }
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        }
    }
});

// Intersection Observer for animations
const observeElements = document.querySelectorAll('.skill-category, .project-card, .stat, .education-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

observeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    contactForm.reset();
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease-out;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Generate CV content function
function generateCVContent() {
    return `DAGIM TAMIRAT
Computer Science Student & Aspiring Web Developer

CONTACT INFORMATION
Email: dagimt369@gmail.com
Phone: +251 993 941 832
Location: Addis Ababa, Ethiopia
GitHub: https://github.com/dagiz6
LinkedIn: https://www.linkedin.com/in/dagiz6/
Instagram: https://www.instagram.com/dagiz_6/

EDUCATION
Bachelor of Science in Computer Science
Jimma University (2023 - Present)
- Focus on software development, database management, network security, and system analysis
- Active participation in coding competitions and tech clubs
- Strong academic performance with emphasis on practical application

TECHNICAL SKILLS

Programming Languages:
- JavaScript, TypeScript, Java, C++, PHP, SQL

Web Technologies:
- HTML5, CSS3, React, Next.js, Express.js, Node.js

Tools & Frameworks:
- Git, VS Code, Tailwind CSS, Bootstrap, Zustand

Other Skills:
- Problem Solving, Team Collaboration, Agile Methodology
- Project Management, Technical Writing

PROJECTS

Netflix Clone
- Responsive Netflix-inspired streaming platform built with React
- Features user authentication, movie browsing, and trailer previews
- Integrated Firebase for authentication and TMDB API for dynamic content
- Technologies: React, Node.js, MySQL, Bootstrap
- GitHub: https://github.com/dagiz6/netflix-clone

Donation App
- Secure donation platform developed with React
- Seamless contribution via Chapa payment gateway
- Real-time transaction tracking and user-friendly UI
- Technologies: React, Chapa API, Node.js, Tailwind
- GitHub: https://github.com/dagiz6/donation-web-app

E-menu
- Digital restaurant menu built with React
- Interactive interface for browsing food items
- Category filtering and elegant UI
- Technologies: React, CSS3, JavaScript
- GitHub: https://github.com/dagiz6/E-menu

Event Registration System
- PHP-based event registration system
- Secure login/logout functionality
- Automated email confirmations via EmailJS
- Technologies: PHP, EmailJS, CSS, JavaScript
- GitHub: https://github.com/dagiz6/event-registration

Tic-Tac-Toe App
- Classic Tic-Tac-Toe game built with JavaScript
- Interactive gameplay and engaging UI
- Two-player mode with instant win detection
- Technologies: HTML5, CSS3, JavaScript
- GitHub: https://github.com/dagiz6/PRODIGY_WD_03

Weather App
- Minimalistic weather application using vanilla JavaScript
- Real-time weather data via API integration
- Clean UI displaying temperature, humidity, and forecasts
- Technologies: HTML5, CSS3, JavaScript
- GitHub: https://github.com/dagiz6/PRODIGY_WD_05

ABOUT ME
I'm a dedicated Computer Science student at Jimma University with a passion for technology and innovation. My journey in computing began with curiosity about how software works and has evolved into a deep commitment to building meaningful digital solutions.

Throughout my studies, I've developed a strong foundation in programming, web development, and software engineering principles. I believe in the power of technology to solve real-world problems and improve people's lives.

When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, collaborating with fellow students on innovative projects, or playing chess. I'm always eager to learn and take on new challenges.

ACHIEVEMENTS
- 6+ Projects Completed
- 3+ Years of Study
- 8+ Technologies Learned
- Active contributor to open-source projects
- Strong problem-solving and analytical skills
- Excellent team collaboration abilities

INTERESTS
- Web Development
- Software Engineering
- Open Source Contribution
- Chess
- Technology Innovation
- Continuous Learning

Generated on: ${new Date().toLocaleDateString()}
`;
}

// CV download functionality
const downloadCV = document.getElementById('download-cv');

downloadCV.addEventListener('click', function (e) {
    e.preventDefault();

    try {
        // Generate CV content
        const cvContent = generateCVContent();
        
        // Create blob with CV content
        const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
        
        // Create download URL
        const url = window.URL.createObjectURL(blob);
        
        // Create temporary download link
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'Dagim_Tamirat_CV.txt';
        downloadLink.style.display = 'none';
        
        // Add to DOM, click, and remove
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        // Clean up the URL object
        window.URL.revokeObjectURL(url);
        
        // Show success notification
        showNotification('CV downloaded successfully!', 'success');
        
    } catch (error) {
        console.error('Error downloading CV:', error);
        showNotification('Error downloading CV. Please try again.', 'error');
    }
});

// Typing animation for hero section
const heroTitle = document.querySelector('.hero-title');
const text = "Hi, I'm Dagim Tamirat";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        if (text.substring(index, index + 13) === 'Dagim Tamirat') {
            heroTitle.innerHTML = text.substring(0, index) + 
                '<span class="highlight">' + 'Dagim Tamirat' + '</span>';
            index += 13;
        } else {
            heroTitle.innerHTML = text.substring(0, index + 1);
            index++;
        }
        setTimeout(typeWriter, 100);
    }
}

// Initialize typing animation after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (heroSection && heroContent) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Add smooth reveal animation to sections
const revealSections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, {
    threshold: 0.15
});

revealSections.forEach(section => {
    sectionObserver.observe(section);
});

// Add CSS for section reveal animation
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero {
        opacity: 1 !important;
        transform: none !important;
    }
`;
document.head.appendChild(style);