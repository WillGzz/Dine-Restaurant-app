const minuSign = document.getElementById('minus-sign');
const plusSign = document.getElementById('plus-sign');
const numPeopleSpan = document.getElementsByTagName('span')[0];//the first span element

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


minuSign.addEventListener('click', countPeople);
plusSign.addEventListener('click', countPeople);
