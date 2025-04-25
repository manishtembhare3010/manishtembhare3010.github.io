// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// AI Particles Animation
function createAIParticles() {
    const container = document.getElementById('ai-particles');
    const particleCount = 30;
    
    if (!container) return;
    
    // Clear previous particles
    container.innerHTML = '';
    
    // Generate random particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('span');
        particle.className = 'ai-particle';
        
        // Random properties
        const size = Math.random() * 8 + 2; // 2-10px
        const posX = Math.random() * 100; // 0-100%
        const posY = Math.random() * 100; // 0-100%
        const duration = Math.random() * 20 + 10; // 10-30s
        const delay = Math.random() * 5; // 0-5s
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        // Random color
        const colors = [
            'rgba(59, 130, 246, 0.6)', // Blue
            'rgba(139, 92, 246, 0.6)',  // Purple
            'rgba(6, 182, 212, 0.6)',   // Cyan
            'rgba(20, 184, 166, 0.6)',  // Teal
            'rgba(255, 255, 255, 0.4)'  // White
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = color;
        
        container.appendChild(particle);
    }
}

// Create neural network connections between skills
function createNeuralConnections() {
    const aiSkills = document.querySelectorAll('.skill-item[data-ai="true"]');
    
    aiSkills.forEach(skill => {
        // Add a slight glow to AI-related skills
        skill.style.boxShadow = '0 0 5px rgba(139, 92, 246, 0.3)';
        
        // Add pulsing animation
        const pulse = document.createElement('span');
        pulse.className = 'skill-pulse';
        skill.appendChild(pulse);
    });
}

// Highlight AI-related terms
function highlightAITerms() {
    const highlights = document.querySelectorAll('.highlight');
    
    highlights.forEach(highlight => {
        highlight.style.color = '#3b82f6';
        highlight.style.fontWeight = '500';
    });
}

// Load projects from JSON
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const data = await response.json();
        const projectsSection = document.querySelector('#projects .container');
        
        // Clear existing content except the section title
        const sectionTitle = projectsSection.querySelector('.section-title');
        projectsSection.innerHTML = '';
        projectsSection.appendChild(sectionTitle);
        
        // Add each project
        data.projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.style.animationDelay = `${index * 0.2}s`;
            
            let techStackHtml = '';
            project.technologies.forEach(tech => {
                const isAI = ['ML', 'AI', 'NLP', 'Machine Learning', 'Deep Learning', 'LLMs', 'TensorFlow', 'PyTorch'].includes(tech);
                techStackHtml += `<span ${isAI ? 'data-ai="true"' : ''}>${tech}</span>`;
            });
            
            let detailsHtml = '';
            project.details.forEach(detail => {
                detailsHtml += `<li>${detail}</li>`;
            });
            
            let linksHtml = '';
            if (project.repoUrl) {
                linksHtml += `<a href="${project.repoUrl}" target="_blank" class="project-link repo-link">
                    <i class="fab fa-github"></i> View Code
                </a>`;
            }
            if (project.liveUrl) {
                linksHtml += `<a href="${project.liveUrl}" target="_blank" class="project-link live-link">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>`;
            }
            
            projectCard.innerHTML = `
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <ul>
                        ${detailsHtml}
                    </ul>
                    <div class="project-links">
                        ${linksHtml}
                    </div>
                    <div class="tech-stack">
                        ${techStackHtml}
                    </div>
                </div>
            `;
            
            projectsSection.appendChild(projectCard);
        });
        
        // Add data-ai attribute to tech stack items after they're added to DOM
        document.querySelectorAll('.tech-stack span').forEach(span => {
            const tech = span.textContent;
            if (['ML', 'AI', 'NLP', 'Machine Learning', 'Deep Learning', 'LLMs', 'TensorFlow', 'PyTorch', 'Hugging Face'].includes(tech)) {
                span.setAttribute('data-ai', 'true');
            }
        });
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Add typing animation to hero text
function addTypingAnimation() {
    const heroH2 = document.querySelector('.hero-content h2');
    if (!heroH2) return;
    
    const text = heroH2.textContent;
    heroH2.textContent = '';
    
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            heroH2.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            // Add blinking cursor at the end
            heroH2.innerHTML += '<span class="cursor">|</span>';
            
            // Add blinking animation to cursor
            const cursor = document.querySelector('.cursor');
            setInterval(() => {
                cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
            }, 500);
        }
    }, 100);
}

// AI Brain Animation
function initAIBrainAnimation() {
    const neuralParticles = document.querySelector('.neural-particles');
    if (!neuralParticles) return;
    
    // Create animated connection lines
    for (let i = 0; i < 15; i++) {
        const line = document.createElement('div');
        line.className = 'neural-connection';
        line.style.left = `${Math.random() * 100}%`;
        line.style.top = `${Math.random() * 100}%`;
        line.style.width = `${Math.random() * 50 + 20}px`;
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        line.style.animationDelay = `${Math.random() * 5}s`;
        neuralParticles.appendChild(line);
    }

    // Add this styling for neural connections
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .neural-connection {
                position: absolute;
                height: 2px;
                background: linear-gradient(90deg, rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0));
                opacity: 0.6;
                z-index: 2;
                animation: pulse-connection 3s infinite alternate;
            }
            
            @keyframes pulse-connection {
                0% { opacity: 0.2; width: 30px; }
                50% { opacity: 0.8; width: 40px; }
                100% { opacity: 0.2; width: 30px; }
            }
        </style>
    `);
}

// Initialize all animations and effects
function initializeAnimations() {
    createAIParticles();
    createNeuralConnections();
    highlightAITerms();
    addTypingAnimation();
    initAIBrainAnimation();
    
    // Add data attributes to section titles
    document.querySelectorAll('.section-title').forEach(title => {
        if (!title.getAttribute('data-text')) {
            title.setAttribute('data-text', title.textContent);
        }
    });
}

// Load projects when the page loads
window.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initializeAnimations();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the form data to a server
        // For this example, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Add active class to nav links based on scroll position
function highlightNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = sectionId;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Listen for scroll events to highlight active nav link
window.addEventListener('scroll', highlightNavLink);

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.timeline-item, .project-card, .education-card, .skill-category, .cert-item, .contact-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

// Add animation class to CSS
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .timeline-item, .project-card, .education-card, .skill-category, .cert-item, .contact-item {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease-out;
        }
        
        .animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .project-links {
            display: flex;
            gap: 15px;
            margin-top: 15px;
        }
        
        .project-link {
            display: inline-flex;
            align-items: center;
            padding: 8px 16px;
            border-radius: 5px;
            font-size: 14px;
            transition: var(--transition);
        }
        
        .repo-link {
            background-color: #333;
            color: white;
        }
        
        .live-link {
            background-color: var(--primary-color);
            color: white;
        }
        
        .project-link i {
            margin-right: 8px;
        }
        
        .project-link:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .project-description {
            color: #555;
            margin-bottom: 15px;
            font-style: italic;
        }
        
        .highlight {
            position: relative;
            display: inline-block;
        }
        
        .cursor {
            display: inline-block;
            width: 2px;
            height: 1em;
            background-color: currentColor;
            margin-left: 2px;
            vertical-align: middle;
            animation: blink 1s infinite;
        }
        
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        
        .skill-pulse {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            background: transparent;
            top: 0;
            left: 0;
            z-index: -1;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4);
            }
            70% {
                transform: scale(1);
                box-shadow: 0 0 0 10px rgba(139, 92, 246, 0);
            }
            100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
            }
        }
    </style>
`);

// Listen for scroll events to animate elements
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Recreate AI particles on window resize
window.addEventListener('resize', createAIParticles);

// Theme toggle functionality (light/dark mode)
// This is a bonus feature that can be implemented later 