function loadTabbar() {
    const tabbarHTML = `
        <nav class="tabbar">
            <a href="home.html" class="tab active" onclick="setActiveTab(event, this)">
                <i class="material-icons-outlined">home</i>
                <i class="material-icons">home</i>
                <span>Home</span>
            </a>
            <a href="search.html" class="tab" onclick="setActiveTab(event, this)">
                <i class="material-icons-outlined">search</i>
                <i class="material-icons">search</i>
                <span>Search</span>
            </a>
            <a href="learning.html" class="tab" onclick="setActiveTab(event, this)">
                <i class="material-icons-outlined">school</i>
                <i class="material-icons">school</i>
                <span>Learning</span>
            </a>
            <a href="courses.html" class="tab" onclick="setActiveTab(event, this)">
                <i class="material-icons-outlined">book</i>
                <i class="material-icons">book</i>
                <span>Courses</span>
            </a>
            <a href="profile.html" class="tab" onclick="setActiveTab(event, this)">
                <i class="material-icons-outlined">person</i>
                <i class="material-icons">person</i>
                <span>Profile</span>
            </a>
        </nav>
    `;
    document.body.insertAdjacentHTML('beforeend', tabbarHTML);
}

function setActiveTab(event, element) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    element.classList.add('active');
}

// Load tabbar when the document is ready
document.addEventListener('DOMContentLoaded', loadTabbar);
