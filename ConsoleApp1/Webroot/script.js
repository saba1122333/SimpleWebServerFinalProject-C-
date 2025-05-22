document.addEventListener('DOMContentLoaded', function () {
    console.log('Web server page loaded!');

    // Add click effect to title
    const title = document.querySelector('.animated-title');
    title.addEventListener('click', function () {
        this.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    });
});