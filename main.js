const titles = document.querySelectorAll('.event-title');
const infoSections = document.querySelectorAll('.info');

titles.forEach((title, index) => {
    title.addEventListener('click', () => {
        infoSections.forEach(section => section.style.display = 'none');
        infoSections[index].style.display = 'block';
    });
});