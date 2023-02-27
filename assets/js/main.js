const form = document.querySelector("#email_form");
const submitBtn = document.querySelector("input[type='submit']");
const confirmationPage = document.querySelector("#confirmation");
const emailInput = document.querySelector("input[type='email']");




function goToHomepage(){
    if(emailInput.value === "dangox3@hotmail.com"){
        form.style.display="none";
        confirmationPage.style.display="block";
    } 
}

function goback(){
        form.style.display="flex";
        confirmationPage.style.display="none"
}

