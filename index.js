const form = document.getElementById("user-form");
const name = document.getElementById("name");
const age = document.getElementById("age");
const formSection = document.querySelector(".form-section");
const hiddenSection = document.getElementById("hidden-section");

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

    localStorage.setItem("name", name.value);
    localStorage.setItem("age", age.value);

    const savedName = localStorage.getItem("name");
    const savedAge = localStorage.getItem("age");
    
    

});

