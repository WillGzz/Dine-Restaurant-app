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



const pickTimeDiv = document.getElementById('pick-time-div');
const dropdownView = document.getElementsByClassName('dropdown')[0];
const dropDownSelection = document.getElementById('input-time-of-day');
const amCheck = document.getElementsByClassName('am-check')[0];
const pmCheck = document.getElementsByClassName('pm-check')[0];

/*Event delegation
 Instead of adding individual event listeners to multiple child elements,
  you attach a single event listener to a common parent element. 
 This parent element then handles events that bubble up from its child elements to the 
 top of the dom tree.
*/

function bookingDropdown(event) {  //event.target refers to the element that actually triggered the event
   

    if (event.target.classList.contains('dropdown-arrow')) {
        event.target.classList.toggle('dropdown-arrow-rotate');
        dropdownView.classList.toggle('dropdown-view'); //dropdown state is independent of am/pm state
   
    } 
    if (event.target.classList.contains('am')) {
        dropDownSelection.placeholder = event.target.textContent;
        amCheck.classList.remove('am-check-hidden');  //default is visible
        pmCheck.classList.remove('pm-check-visible');
    } 
    if (event.target.classList.contains('pm')) {
        dropDownSelection.placeholder = event.target.textContent;
        pmCheck.classList.add('pm-check-visible');
        amCheck.classList.add('am-check-hidden');
    }
   
    const isDropdownOpen =  dropdownView.classList.contains('dropdown-view');
    if (!isDropdownOpen && dropDownSelection.placeholder === "PM"){
        pmCheck.classList.remove('pm-check-visible');
    }
    else if (isDropdownOpen && dropDownSelection.placeholder === "PM"){
        pmCheck.classList.add('pm-check-visible');
    }



}

function formValidation(event){
  
    event.preventDefault();
  
    let isValid = true;

    const name = document.querySelector('.input-name').value;
    const nameError = document.getElementById('name-error');
    if (!name) {
      nameError.textContent = "This field is required";
      nameError.style.color = "red";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    const email = document.querySelector('.input-email').value;
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email) {
      emailError.textContent = "This field is required";
      emailError.style.color = "red";
      isValid = false;
    } else if (!email.match(emailPattern)) {
      emailError.textContent = "Please use a valid email address";
      emailError.style.color = "red";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    const month = document.getElementById('input-month').value;
    const day = document.getElementById('input-day').value;
    const year = document.getElementById('input-year').value;
    const dateError = document.getElementById('date-error');
    if (!month || !day || !year) {
      dateError.textContent = "This field is incomplete";
      dateError.style.color = "red";
      isValid = false;
    } else {
      dateError.textContent = "";
    }

    
    const hour = document.getElementById('input-hour').value;
    const minute = document.getElementById('input-minute').value;
    const timeError = document.getElementById('time-error');
    if (!hour || !minute) {
      timeError.textContent = "This field is incomplete";
      timeError.style.color = "red";
      isValid = false;
    } else {
      timeError.textContent = "";
    }

}

pickTimeDiv.addEventListener('click', bookingDropdown);
minuSign.addEventListener('click', countPeople);
plusSign.addEventListener('click', countPeople);
