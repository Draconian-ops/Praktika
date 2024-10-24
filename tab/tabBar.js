function setActiveTab(event, element) {
    // Prevent default link behavior for demo
    event.preventDefault();
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to clicked tab
    element.classList.add('active');
    
    // In a real application, you would navigate to the new page here
    console.log('Navigating to:', element.getAttribute('href'));
}