//Bank to top logic 

const backToTopBtn = document.getElementById("backToTop");

// When the user scrolls down 100px from the top, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});





//signup page logic 
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const verifyForm = document.getElementById('verifyForm');
    const signupSection = document.getElementById('signup-section');
    const verifySection = document.getElementById('verify-section');
    const dashSection = document.getElementById('dashboard-section');

    // 1. Password Strength Logic
    const passwordInput = document.getElementById('signupPassword');
    const strengthBar = document.getElementById('strength-bar');
    
    passwordInput?.addEventListener('input', () => {
        let val = passwordInput.value;
        if (val.length > 8 && /[A-Z]/.test(val) && /[0-9]/.test(val)) {
            strengthBar.className = "strength-bar strong";
        } else if (val.length > 5) {
            strengthBar.className = "strength-bar medium";
        } else {
            strengthBar.className = "strength-bar weak";
        }
    });

    // 2. Signup -> Verification
    signupForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        signupSection.style.display = 'none';
        verifySection.style.display = 'block';
        // Logic to grab name and set it for dashboard
        const name = document.getElementById('fullName').value;
        document.getElementById('user-display-name').innerText = name.split(' ')[0];
    });

    // 3. Verification -> Dashboard
    verifyForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate code check
        verifySection.style.display = 'none';
        dashSection.style.display = 'block';
        // Remove the login/signup header if it exists
        document.querySelector('.auth-header').style.display = 'none';
    });
});





//hamburger menu logic 
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('active');
    menuLinks.classList.remove('active');
})); 

