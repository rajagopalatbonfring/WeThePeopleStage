// Navbar scripts
// 
// 
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.wtps-mobile-menu-btn');
    
    if (!mobileNav.contains(event.target) && !menuBtn.contains(event.target)) {
        mobileNav.classList.remove('active');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.wtps-mobile-nav .wtps-nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobileNav').classList.remove('active');
    });
});