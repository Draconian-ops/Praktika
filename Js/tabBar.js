document.addEventListener('DOMContentLoaded', function() {
    // Set the active tab on page load
    const activeTabHref = localStorage.getItem('activeTab');
    const currentPath = window.location.pathname;

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('href') === activeTabHref || (activeTabHref === '/html/home.html' && tab.getAttribute('href') === '/html/home.html')) {
            tab.classList.add('active');
        }
    });

    // If no tab is stored in localStorage, set home as active by default
    if (!activeTabHref) {
        const homeTab = document.querySelector('.tab[href="/html/home.html"]');
        if (homeTab) {  // Add null check
            homeTab.classList.add('active');
        }
    }
});

function setActiveTab(event, element) {
    // Prevent the default link behavior initially
    event.preventDefault();
    
    // Get the href value
    const href = element.getAttribute('href');
    
    // Store the active tab's href in localStorage
    if (href) {
        localStorage.setItem('activeTab', href);
    }
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to clicked tab
    element.classList.add('active');
    
    // Navigate to the new page
    if (href) {
        window.location.href = href;
    }
}

