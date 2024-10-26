document.querySelector('.next-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const contentContainer = document.querySelector('.onboard_container');
    
    // Add fade-out effect
    contentContainer.classList.add('fade-out');
    
    // Get the href directly from the clicked link instead of using pathname logic
    const nextPage = this.getAttribute('href');
    
    setTimeout(() => {
        window.location.href = nextPage;
    }, 500); // Match this with your CSS transition time
});
