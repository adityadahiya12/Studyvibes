document.addEventListener('DOMContentLoaded', function() {
      // DOM Elements
      const darkModeToggle = document.getElementById('darkModeToggle');
      const scrollToTopBtn = document.getElementById('scrollToTopBtn');
      const feedbackBtn = document.getElementById('feedbackBtn');
      const aiChatbot = document.querySelector('.ai-chatbot');
      const searchInput = document.querySelector('.search-input');
      const heroImages = document.querySelectorAll('.hero-image img');
      
      // State variables
      let isDarkMode = localStorage.getItem('darkMode') === 'true';
      let userCount = 4000;
      let currentImageIndex = 0;

      // Initialize the page
      function init() {
        // Set dark mode if enabled
        if (isDarkMode) {
          document.body.classList.add('dark-mode');
          darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
          darkModeToggle.title = 'Toggle Light Mode';
        }

        // Update user count randomly
        updateUserCount();

        // Set up event listeners
        setupEventListeners();

        // Animate elements when they come into view
        setupScrollAnimations();

        // Start hero image rotation
        rotateHeroImages();
      }

      // Rotate hero images
      function rotateHeroImages() {
        setInterval(() => {
          // Hide current image
          heroImages[currentImageIndex].classList.remove('active');
          
          // Move to next image
          currentImageIndex = (currentImageIndex + 1) % heroImages.length;
          
          // Show next image
          heroImages[currentImageIndex].classList.add('active');
        }, 3000); // Change image every 3 seconds
      }

      // Set up all event listeners
      function setupEventListeners() {
        // Theme toggle
        darkModeToggle.addEventListener('click', toggleDarkMode);

        // Scroll to top
        scrollToTopBtn.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });

        // Feedback button
        feedbackBtn.addEventListener('click', () => {
          alert('Thank you for your feedback! Please email us at feedback@studyvibes.com');
        });

        // AI Chatbot
        aiChatbot.addEventListener('click', () => {
          alert('StudyBuddy: Hi there! How can I help you with your learning today?');
        });

        // Search input focus
        searchInput.addEventListener('focus', function() {
          this.style.width = '250px';
        });

        searchInput.addEventListener('blur', function() {
          if (this.value === '') {
            this.style.width = '200px';
          }
        });

        // Show scroll to top button when scrolling
        window.addEventListener('scroll', () => {
          if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
          } else {
            scrollToTopBtn.style.display = 'none';
          }
        });
      }

      // Toggle dark/light mode
      function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode');
        
        if (isDarkMode) {
          darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
          darkModeToggle.title = 'Toggle Light Mode';
          localStorage.setItem('darkMode', 'true');
        } else {
          darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
          darkModeToggle.title = 'Toggle Dark Mode';
          localStorage.setItem('darkMode', 'false');
        }
      }

      // Update user count randomly
      function updateUserCount() {
        setInterval(() => {
          const change = Math.floor(Math.random() * 10) - 3; // -3 to +6
          userCount = Math.max(4000, userCount + change);
          document.querySelector('.user-counter span').textContent = `${userCount.toLocaleString()}+ students learning now`;
        }, 5000);
      }

      // Set up scroll animations
      function setupScrollAnimations() {
        const animateOnScroll = () => {
          const elements = document.querySelectorAll('.feature-card, .testimonial-card, .blog-card');
          
          elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }
          });
        };

        // Initial check
        animateOnScroll();
        
        // Check on scroll
        window.addEventListener('scroll', animateOnScroll);
      }

      // Initialize the page
      init();
    });
