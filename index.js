const form = document.getElementById("form");
const name = document.getElementById("name");
const age = document.getElementById("age");

form.addEventListener("submit", function(event){


    event.preventDefault();
    console.log("Form Submitted");

    console.log(name.value);
    console.log(age.value);

    localStorage.setItem("name", name.value);
    localStorage.setItem("age", age.value);

    const savedName = localStorage.getItem("name");
    const savedAge = localStorage.getItem("age");
});