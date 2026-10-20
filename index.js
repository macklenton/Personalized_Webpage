const form = document.getElementById("user-form");
const name = document.getElementById("name");
const age = document.getElementById("age");
const formSection = document.querySelector(".form-section");
const hiddenSection = document.getElementById("hidden-section");
const ageMessage = document.getElementById("age-message");
const greetMessage = document.getElementById("greetings");
const ageMonths = document.getElementById("age-months");
const motivations = document.getElementById("quotes");



// hidden section
function personalContent(){
    if(form){
        formSection.hidden = true
        hiddenSection.hidden = false; 
    }
    
}
//event listener

form.addEventListener("submit", function(event){


    event.preventDefault();

    personalContent();

    console.log("Form Submitted");

    console.log(name.value);
    console.log(age.value);

    console.log("Name input:", name.value);
    console.log("Age input:", age.value);

    localStorage.setItem("name", name.value);
    localStorage.setItem("age", age.value);

    const savedName = localStorage.getItem("name");
    const savedAge = localStorage.getItem("age");
    const userAge = Number(age.value);// convert string to number
    ageContent(userAge);
    welcome(savedName);
    calculateAgeMonths(userAge);
    dailyQuotes();

});
 // AGE FUNCTION
function ageContent(userAge){
    if(userAge>= 18){
        ageMessage.textContent =  "You can access adult content"
    }else{
        ageMessage.textContent = "You're too young for adult content"
    }
}

// GREETINGS FUNCTION
function welcome(savedName){
    greetMessage.textContent = `Welcome, ${savedName}!` ;
}

//AGE CALCULATION
function calculateAgeMonths(userAge){
    const months = userAge * 12;
    ageMonths.textContent = ` You are ${months} months old.`
}

// MOTIVATIONAL QUOTES LOOP


function dailyQuotes(){
    
    for(let i=0; i < 5; i++){
        const item = document.createElement("li");
        item.textContent = `Keep Trusting.`
        motivations.appendChild(item);
        

    }   
}
