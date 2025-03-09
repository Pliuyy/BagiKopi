// Toggle class active

const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Close menu when link is clicked

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

document.getElementById("search-btn").addEventListener("click", function() {
    let searchBox = document.getElementById("search-box");
    searchBox.classList.toggle("active");
});