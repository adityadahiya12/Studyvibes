// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('.navbar1');
    
    menuButton.addEventListener('click', function() {
        mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.news-form');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="text"]');
            if(emailInput.value.trim() !== '') {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
});

// Function to create roadmap cards
function createRoadmapCard(title, description, link) {
    return `
        <div class="roadmap-card">
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="${link}" target="_blank" class="roadmap-button">Start Learning</a>
        </div>
    `;
}

// Auth functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the auth page
    if (document.querySelector('.auth-container')) {
        // Handle form submissions
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const forgotForm = document.getElementById('forgot-password-form');
        
        if (loginForm) {
            loginForm.addEventListener('submit', handleLogin);
        }
        
        if (registerForm) {
            registerForm.addEventListener('submit', handleRegister);
        }
        
        if (forgotForm) {
            forgotForm.addEventListener('submit', handleForgotPassword);
        }
    }
});

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Here you would typically make an API call to your backend
    console.log('Login attempt with:', email, password);
    
    // For demo purposes, just show a success message
    alert('Login successful! (This is a demo - backend integration needed)');
    
    // Redirect to dashboard or home page
    // window.location.href = 'studyvibes.html';
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Here you would typically make an API call to your backend
    console.log('Registration attempt with:', name, email, password);
    
    // For demo purposes, just show a success message
    alert('Registration successful! (This is a demo - backend integration needed)');
    
    // Switch to login form
    showForm('login-form');
}

function handleForgotPassword(e) {
    e.preventDefault();
    const email = document.getElementById('forgot-email').value;
    
    // Here you would typically make an API call to your backend
    console.log('Password reset requested for:', email);
    
    // For demo purposes, just show a success message
    alert('Password reset link sent to your email! (This is a demo - backend integration needed)');
    
    // Switch back to login form
    showForm('login-form');
    document.querySelector('.auth-tabs').style.display = 'flex';
}
// Pomodoro Timer
let studyTime = 25 * 60; // 25 minutes
let breakTime = 5 * 60;
let timer;

function startTimer(duration, display) {
    timer = setInterval(() => {
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;
        display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (--duration < 0) {
            clearInterval(timer);
            new Audio('bell.mp3').play(); // Alarm sound
        }
    }, 1000);
}

// Usage: 
startTimer(studyTime, document.getElementById('timer-display'));
// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotContainer = document.getElementById('chatbotContainer');
    const toggleChatbot = document.getElementById('toggleChatbot');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendChatbotMessage = document.getElementById('sendChatbotMessage');
    const quickOptions = document.querySelectorAll('.quick-option-btn');
    const notepadModal = document.getElementById('notepadModal');
    const closeNotepad = document.getElementById('closeNotepad');
    const saveNotepad = document.getElementById('saveNotepad');
    const clearNotepad = document.getElementById('clearNotepad');
    const notepadText = document.getElementById('notepadText');

    // Toggle chatbot visibility
    toggleChatbot.addEventListener('click', function() {
        chatbotContainer.classList.toggle('active');
    });

    closeChatbot.addEventListener('click', function() {
        chatbotContainer.classList.remove('active');
    });

    // Send message function
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatbotInput.value = '';
            
            // Simulate bot response after a short delay
            setTimeout(() => {
                handleBotResponse(message);
            }, 500);
        }
    }

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chatbot-message', sender + '-message');
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Handle bot responses
    function handleBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        let response = '';
        
        if (lowerMessage.includes('roadmap') || lowerMessage.includes('path') || lowerMessage.includes('career')) {
            response = "We offer several career roadmaps:\n\n" +
                       "🔹 MERN Stack Developer\n" +
                       "🔹 Data Structures & Algorithms\n" +
                       "🔹 Frontend Development\n" +
                       "🔹 Data Analytics\n" +
                       "🔹 Android App Development\n" +
                       "🔹 Ethical Hacking\n\n" +
                       "Which one interests you? You can also explore them in our Roadmaps section.";
        } 
        else if (lowerMessage.includes('resource') || lowerMessage.includes('learn') || lowerMessage.includes('study')) {
            response = "Here are some learning resources we provide:\n\n" +
                       "📚 Comprehensive courses with projects\n" +
                       "🎥 Video tutorials and walkthroughs\n" +
                       "📝 Practice exercises and challenges\n" +
                       "🧠 Interview preparation materials\n\n" +
                       "Would you like resources for a specific topic?";
        }
        else if (lowerMessage.includes('guidance') || lowerMessage.includes('tip') || lowerMessage.includes('advice')) {
            response = "Here are some expert tips for your tech career:\n\n" +
                       "💡 Build real projects for your portfolio\n" +
                       "💡 Practice coding daily, even for just 30 minutes\n" +
                       "💡 Master fundamentals before frameworks\n" +
                       "💡 Contribute to open source projects\n" +
                       "💡 Network with other developers\n" +
                       "💡 Prepare for interviews regularly\n\n" +
                       "Would you like more specific advice?";
        }
        else if (lowerMessage.includes('newsletter') || lowerMessage.includes('subscribe') || lowerMessage.includes('update')) {
            response = "You can subscribe to our newsletter to get:\n\n" +
                       "📩 Latest course updates\n" +
                       "🎓 Learning tips and tricks\n" +
                       "💼 Career opportunities\n" +
                       "📅 Event announcements\n\n" +
                       "Just scroll down to the newsletter section at the bottom of the page to sign up!";
        }
        else if (lowerMessage.includes('contact') || lowerMessage.includes('support') || lowerMessage.includes('help')) {
            response = "You can contact our support team through:\n\n" +
                       "📧 Email: support@studyvibes.com\n" +
                       "📞 Phone: +1 (555) 123-4567\n" +
                       "💬 Live chat (available in the Support section)\n\n" +
                       "Or visit our 'Contact Us' page for more options.";
        }
        else if (lowerMessage.includes('feature') || lowerMessage.includes('offer') || lowerMessage.includes('provide')) {
            response = "StudyVibes offers these key features:\n\n" +
                       "🌟 Personalized Learning paths\n" +
                       "💰 Affordable pricing\n" +
                       "🤝 Industry partnerships\n" +
                       "🚀 Innovative technology\n" +
                       "🛟 Responsive support\n" +
                       "📊 Analytics and insights\n\n" +
                       "You can learn more in our Features section.";
        }
        else if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
            response = "Hello there! 😊 How can I assist you with your learning journey today?";
        }
        else if (lowerMessage.includes('thank')) {
            response = "You're welcome! 😊 Is there anything else I can help you with?";
        }
        else {
            response = "I'm here to help with:\n\n" +
                       "🔹 Exploring career paths\n" +
                       "🔹 Finding learning resources\n" +
                       "🔹 Providing career advice\n" +
                       "🔹 Taking notes in the Notepad\n" +
                       "🔹 Newsletter subscription\n" +
                       "🔹 Connecting with support\n\n" +
                       "Could you tell me more about what you're looking for?";
        }
        
        addMessage(response, 'bot');
    }

    // Quick options functionality
    quickOptions.forEach(option => {
        option.addEventListener('click', function() {
            const optionType = this.getAttribute('data-option');
            
            if (optionType === 'notepad') {
                openNotepad();
                return;
            }
            
            let message = '';
            switch(optionType) {
                case 'roadmaps':
                    message = "Tell me about your career roadmaps";
                    break;
                case 'resources':
                    message = "What learning resources do you offer?";
                    break;
                case 'guidance':
                    message = "I need some career guidance";
                    break;
            }
            
            addMessage(message, 'user');
            setTimeout(() => {
                handleBotResponse(message);
            }, 500);
        });
    });

    // Notepad functionality
    function openNotepad() {
        notepadModal.style.display = 'flex';
        // Load saved notes if any
        const savedNotes = localStorage.getItem('studyvibes_notes');
        if (savedNotes) {
            notepadText.value = savedNotes;
        }
    }

    closeNotepad.addEventListener('click', function() {
        notepadModal.style.display = 'none';
    });

    saveNotepad.addEventListener('click', function() {
        localStorage.setItem('studyvibes_notes', notepadText.value);
        addMessage("I've saved your notes in the notepad. You can access them anytime!", 'bot');
        notepadModal.style.display = 'none';
    });

    clearNotepad.addEventListener('click', function() {
        if (confirm("Are you sure you want to clear all notes?")) {
            notepadText.value = '';
            localStorage.removeItem('studyvibes_notes');
        }
    });

    // Send message on Enter key
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Send message on button click
    sendChatbotMessage.addEventListener('click', sendMessage);

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === notepadModal) {
            notepadModal.style.display = 'none';
        }
    });
});