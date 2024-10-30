const titles = document.querySelectorAll('.event-title');
const eventImg = document.getElementById('event-img');
const eventTitle = document.getElementById('event-title');
const eventDescription = document.getElementById('event-description');

const eventDetails = {
    'Family Gathering': {
        imgSrc: './SRC/images/homepage/family-gathering-tablet.jpg',
        imgSrcset: './SRC/images/homepage/family-gathering-mobile@2x.jpg 2x',
        title: 'Family Gathering',
        description: 'We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.'
    },
    'Special Events': {
        imgSrc: './SRC/images/homepage/special-events-tablet.jpg',
        imgSrcset: './SRC/images/homepage/special-events-mobile@2x.jpg 2x',
        title: 'Special Events',
        description: 'Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.'
    },
    'Social Events': {
        imgSrc: './SRC/images/homepage/social-events-tablet.jpg',
        imgSrcset: './SRC/images/homepage/social-events-mobile@2x.jpg 2x',
        title: 'Social Events',
        description: 'Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.'
    }
};

titles.forEach(title => {
    title.addEventListener('click', () => {
        const text = title.textContent;
        const details = eventDetails[text]; //if the title matches the name of the nested object

        if (details) { //details is the nested event object
            eventImg.src = details.imgSrc;
            eventImg.srcset = details.imgSrcset;
            eventTitle.textContent = details.title;
            eventDescription.textContent = details.description;
        }
    });
});