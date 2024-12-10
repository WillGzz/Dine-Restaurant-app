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

    let isValid = true;

    const name = document.querySelector('.input-name');
    const email = document.querySelector('.input-email');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
 
    if (!name.value) {
    nameError.textContent = "This field is required";
    setInputStyles([name]);//pass as array containing one input
    isValid = false;
    } else {
        resetInputStyles([name], nameError);
    }

    if (!email.value) {
        emailError.textContent = "This field is required";
        setInputStyles([email]);
        isValid = false;
    } else {
        resetInputStyles([email], emailError);
    }

    
    const month = document.getElementById('input-month');
    const day = document.getElementById('input-day');
    const year = document.getElementById('input-year');
    const dateError = document.getElementById('date-error');
    const pickDateInputs = document.querySelectorAll("#pick-date-div input");

    if (!month.value && !day.value && !year.value) {
      dateError.textContent = "This field is required";
      setInputStyles(pickDateInputs); 
      isValid = false;
    } 
    else if(!month.value || !day.value || !year.value){
      dateError.textContent = "This field is incomplete";

    }
    else{
      resetInputStyles(pickDateInputs, dateError);
    }

   
    const hour = document.getElementById('input-hour');
    const minute = document.getElementById('input-minute');
    const timeError = document.getElementById('time-error');
    const pickTimeInputs = document.querySelectorAll("#pick-time-div .time-inputs");

    if (!hour.value && !minute.value) {
      timeError.textContent = "This field is required";
      setInputStyles(pickTimeInputs);
      isValid = false;
    } 
    else if(!hour.value || !minute.value){
      timeError.textContent = "This field is incomplete";      
      isValid = false;
    }
    else{
       resetInputStyles(pickTimeInputs, timeError);
    }
    
    if (!isValid) { //form is submittted if true
      event.preventDefault();
    }
  
}

function setInputStyles(inputDiv){
  inputDiv.forEach(input =>{
    input.style.setProperty("--placeholder-color", "#B54949");
    input.style.borderBottomColor = "#B54949";
});
}

function resetInputStyles(inputDiv, errorMessage){
  errorMessage.textContent = "";
  inputDiv.forEach(input =>{
    input.style.setProperty("--placeholder-color", "");
    input.style.borderBottomColor = "";
});
}

pickTimeDiv.addEventListener('click', bookingDropdown);
minuSign.addEventListener('click', countPeople);
plusSign.addEventListener('click', countPeople);
