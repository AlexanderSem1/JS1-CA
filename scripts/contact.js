// refer to question 4 before development starts for scope document

function validateMyForm(){
    let regExName = /^[a-zA-Z]+$/; // RegEx for first and last name not to be empty
    let regExPhone = /^[0-9]{3}[.-\s][0-9]{3}[.-\s][0-9]{4}$/ // RegEx for all three phone number formats 
    let regExEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/; // RegEx for email address format 
        
    let inputFirstName = document.getElementById("firstName").value;
    let inputLastName = document.getElementById("lastName").value; 
    let inputPhone = document.getElementById("phone").value; 
    let inputEmail = document.getElementById("email").value; 
    
(function verifyFirstName(){
    if(inputFirstName.match(regExName)){
        return true;
    } else {
        document.getElementById("firstNameError").style.display = "inline"; 
    }    
})();

(function verifyLastName(){
    if(inputLastName.match(regExName)){
        return true;
    } else {
        document.getElementById("lastNameError").style.display = "inline"; 
    }
})();    

(function verifyPhone(){
    if(inputPhone.match(regExPhone)){
        return true;
    } else {
        document.getElementById("phoneError").style.display = "inline"; 
    }
})();

(function verifyEmail(){
    if(inputEmail.match(regExEmail)){
        return true;
    } else {
        document.getElementById("emailError").style.display = "inline";  
    }
})();  
    
(function allTrue(){
    if(inputFirstName.match(regExName) && inputLastName.match(regExName) && inputPhone.match(regExPhone) &&inputEmail.match(regExEmail))
        alert("Thank you for contacting us, we will get back to you shortly!")
})();
}