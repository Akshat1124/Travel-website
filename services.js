document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        // Remove 'active' class from all sections and links
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked link and the corresponding section
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
        this.classList.add('active');

        // Blur the background
        document.querySelector('body').classList.add('blurred');
    });
});

document.querySelectorAll('section').forEach(section => {
    section.addEventListener('click', function() {
        document.querySelector('body').classList.remove('blurred');
    });
});
const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
document.getElementById('icon').src = iconUrl;
