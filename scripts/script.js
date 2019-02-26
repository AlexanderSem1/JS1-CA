// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

//Fetching JSON File

var myDom = document.getElementById("cards"); 


fetch('https://api.magicthegathering.io/v1/cards')
.then(function(response){
    return response.json()
    console.log(response); 
})
       
.then(function(data) {
    for(let i = 0; i < data.cards.length; i++){ //Clean out operation
        if(data.cards[i].imageUrl === undefined){
            data.cards.splice(i, 1); //removing matching results 
    }
}

// Create HTML card template structure 

    data.cards.forEach(function(data){
    
    let column = document.createElement("div"); 
    column.setAttribute("class", "col-sm-4");
    myDom.appendChild(column); 
    
    let container = document.createElement("div");
    container.setAttribute("class", "card-container");
    column.appendChild(container);
    
    let h4 = document.createElement("h4");
    h4.textContent = data.name; 
    container.append(h4); 
    
    let image = document.createElement ("img");
    image.src = data.imageUrl; 
    image.setAttribute ("width", "100%"); 
    container.appendChild(image); 
    
    let a = document.createElement("a");
    a.setAttribute("href", "card-specific.html?id=" + data.id);
    a.setAttribute("Class", "btn btn-success"); 
    a.textContent = "View More"; 
    container.appendChild(a); 
}); 

});


document.getElementById("searchButton").addEventListener("click", searchRemove);

function searchRemove() {
    
    function deleteCard(){
    var myDom = document.getElementById("cards"); 
    while(myDom.firstChild){
        myDom.removeChild(myDom.firstChild)
    }
} 
deleteCard (); 

fetch('https://api.magicthegathering.io/v1/cards')
.then(function(response){
    return response.json()
    console.log(response); 
})
       
.then(function(data) {
    for(let i = 0; i < data.cards.length; i++){ //Clean out operation
        if(data.cards[i].imageUrl === undefined){
            data.cards.splice(i, 1); //removing matching results 
    }
}

    
let searchInput = document.getElementById("search").value;

data.cards.forEach(function(data){
    
    let trimText = searchInput.trim()
   
    if(data.name.toLowerCase().includes(trimText.toLowerCase())){
    
        let column = document.createElement("div"); 
        column.setAttribute("class", "col-sm-4");
        myDom.appendChild(column); 

        let container = document.createElement("div");
        container.setAttribute("class", "card-container");
        column.appendChild(container);

        let h4 = document.createElement("h4");
        h4.textContent = data.name; 
        container.append(h4); 

        let image = document.createElement ("img");
        image.src = data.imageUrl; 
        image.setAttribute ("width", "100%"); 
        container.appendChild(image); 

        let a = document.createElement("a");
        a.setAttribute("href", "card-specific.html?id=" + data.id);
        a.setAttribute("Class", "btn btn-success"); 
        a.textContent = "View More"; 
        container.appendChild(a); 
        
        document.getElementById("no-result").style.display = "none"; 

        }else {
            document.getElementById("no-result").style.display = "inline"; 
            console.log("Why won't your work!!"); 
            return false; 
        } 
    
}); 
});
}

    

