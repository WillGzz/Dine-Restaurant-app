const minuSign = document.getElementById('minus-sign');
const plusSign = document.getElementById('plus-sign');
const numPeopleSpan = document.querySelector('.number-of-people span');

function countPeople(event) {
    let numPeople = parseInt(numPeopleSpan.textContent); // Convert the text content to an integer

    if (event.target === minuSign) {
        if (numPeople > 0) {
            numPeople -= 1;
            numPeopleSpan.textContent = numPeople; 
            // console.log(numPeople);
        }
    } else if (event.target === plusSign) {
        if (numPeople >= 0) {
            numPeople += 1;
            numPeopleSpan.textContent = numPeople;
            // console.log(numPeople);
        }
        
    }
}

const arrow = document.getElementsByClassName('dropdown-arrow')[0];
const dropdownView = document.getElementsByClassName('dropdown')[0];
const dropDownSelection = document.getElementById('input-time-of-day');
const amSelection = document.getElementsByClassName('am')[0];
const pmSelection = document.getElementsByClassName('pm')[0];
const amCheck = document.getElementById('am-check');
const pmCheck = document.getElementById('pm-check');
/*Event delegation
 Instead of adding individual event listeners to multiple child elements,
  you attach a single event listener to a common parent element. 
 This parent element then handles events that bubble up from its child elements.
*/
function bookingDropdown() {
    arrow.classList.toggle('dropdown-arrow-rotate');
    dropdownView.classList.toggle('dropdown-view');
}

function selectTime(event) {
    if (event.target === amSelection) {
        dropDownSelection.placeholder = amSelection.textContent;
        amCheck.style.visibility= "visible";
        pmCheck.style.visibility ="hidden";
    } else if (event.target === pmSelection) {
        dropDownSelection.placeholder = pmSelection.textContent;
         pmCheck.style.visibility ="visible";
         amCheck.style.visibility ="hidden";

    }
}


minuSign.addEventListener('click', countPeople);
plusSign.addEventListener('click', countPeople);
arrow.addEventListener('click', bookingDropdown);
amSelection.addEventListener('click', selectTime);
pmSelection.addEventListener('click', selectTime);
