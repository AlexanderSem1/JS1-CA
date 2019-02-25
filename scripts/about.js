// refer to question 3 before development starts for scope document


var myText = aboutText.innerHTML;
var myNewText = myText.replace("Magic", "Something");
aboutText.innerHTML = myNewText; 

var myText2 = moreInfoContent.innerHTML;
var myNewText2 = myText2.replace("Magic", "Something");
moreInfoContent.innerHTML = myNewText2; 



document.getElementById("moreInfoTrigger").addEventListener("click", display); 

function display(){
    var temp = document.getElementById("moreInfoContent");
    if (temp.style.display === "none"){
        temp.style.display = "block"; 
    }else {
        temp.style.display = "none"; 
    }
}; 