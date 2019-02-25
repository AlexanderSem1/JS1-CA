// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
// variable for the id
var id = getQueryStringValue("id");

var cardDetail = document.getElementById("cardDetails"); 

fetch('https://api.magicthegathering.io/v1/cards')
.then(function(response){
    return response.json()
    console.log(response); 
})
       
.then(function(data) {
    
    for (let i = 0; i < data.cards.length; i++){
        if(data.cards[i].id === id){
            
            let image = document.createElement ("img");
            image.src = data.cards[i].imageUrl; 
            image.setAttribute("width", "100%"); 
            document.getElementById("cardImage").appendChild(image); 
            
            let h2 = document.createElement ("h2");
            h2.textContent = data.cards[i].name;
            cardDetail.appendChild(h2); 
            
            let para1 = document.createElement ("div"); 
            para1.innerHTML = "<strong> About :</strong>" + data.cards[i].text;
            //para1.style.fontWeight = "bold";
            cardDetail.appendChild(para1);
            
            let para2 = document.createElement ("div");
            para2.innerHTML = "<strong> Rarity: </strong>" + data.cards[i].rarity; 
            cardDetail.appendChild(para2);
            
            let para3 = document.createElement("div");
            para3.innerHTML = "<strong> Color: </strong>" + data.cards[i].colors; 
            cardDetail.appendChild(para3); 
            
        }

        }
})


      
      