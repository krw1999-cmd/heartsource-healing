// Navigation HTML
const navigationHTML = `
<nav>
    <a href="index.html">
        <img src="images/Logo.png" alt="Heart Source Logo" class="logo">
    </a>
    <div class="hamburger" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <ul id="nav-menu">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li class="dropdown">
            <a href="personal-instruction.html">Coaching</a>
            <div class="dropdown-content">
                <a href="personal-instruction.html">Overview</a>
                <a href="individual-life-coaching.html">Individual Life Coaching</a>
                <a href="couples-life-coaching.html">Couples Life Coaching</a>
                <a href="pain-free-yoga.html">Private Pain-Free Yoga</a>
                <a href="health-coaching.html">One-on-One Health Coaching</a>
            </div>
        </li>
        <li class="dropdown">
            <a href="upkeep.html">Upkeep</a>
            <div class="dropdown-content">
                <a href="upkeep.html">Overview</a>
                <a href="weekly-yoga-classes.html">Weekly Pain-Free Yoga Classes</a>
                <a href="mens-coaching.html">3 Month Men's Group Coaching</a>
                <a href="group-nutrition-coaching.html">3 Month Group Nutrition & Health Coaching</a>
                <a href="community-coaching.html">3 Month Community Coaching</a>
            </div>
        </li>
        <li class="dropdown">
            <a href="education.html">Education</a>
            <div class="dropdown-content">
                <a href="education.html">Overview</a>
                <a href="health-counseling-training.html">Health Counseling Training Program</a>
                <a href="yoga-teacher-training.html">Pain-Free Yoga Teacher Training</a>
                <a href="somatic-trauma-training.html">Somatic Trauma Teacher Training</a>
                <a href="additional-training.html">Additional Training Programs</a>
            </div>
        </li>
        <li class="dropdown">
            <a href="immersion.html">Immersion</a>
            <div class="dropdown-content">
                <a href="immersion.html">Overview</a>
                <a href="workshops.html">Workshops</a>
                <a href="retreats.html">Retreats</a>
            </div>
        </li>
        <li class="dropdown">
            <a href="resources.html">Resources</a>
            <div class="dropdown-content">
                <a href="newsletter.html">Newsletter</a>
                <a href="faq.html">FAQ</a>
                <a href="testimonials.html">Testimonials</a>
                <a href="contact.html">Contact</a>
            </div>
        </li>
    </ul>
</nav>
`;

// Footer HTML
const footerHTML = `
<footer class="footer">
    <div class="footer-content">
        <div>
            <h3>Subscribe to Our Newsletter</h3>
            <p style="margin-bottom: 1rem;">Stay connected with healing insights, upcoming events, and exclusive offerings.</p>
            <form class="newsletter-form" action="#" method="post">
                <input type="email" placeholder="Enter your email" required class="newsletter-input">
                <button type="submit" class="newsletter-button">Subscribe</button>
            </form>
        </div>
        <div>
            <h3>Quick Links</h3>
            <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="faq.html">FAQ</a></li>
            </ul>
        </div>
        <div>
            <h3>Connect</h3>
            <ul>
                <li><a href="#">Email Us</a></li>
                <li><a href="newsletter.html">Newsletter</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 Heart Source Healing. All rights reserved.</p>
    </div>
</footer>

<script>
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 1200) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });

    // Dropdown toggle for mobile
    if (window.innerWidth <= 1200) {
        document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
            dropdownLink.addEventListener('click', function(e) {
                e.preventDefault();
                const dropdown = this.parentElement;
                dropdown.classList.toggle('active');
            });
        });
    }
</script>
`;

// Function to load navigation
function loadNavigation() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navigationHTML;
    }
}

// Function to load footer
function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    }
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadNavigation();
    loadFooter();
});
