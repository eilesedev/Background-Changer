//Load the page with a random color
document.body.style.background = randColor(); 

// Select the button on the page
const button = document.querySelector("button"); 

// Add an Event Listener to that button
button.addEventListener("click", function(){
    document.body.style.background = randColor(); 
})

//Choose a random color
function randColor() {
    //create a function for getting a random color using rgb
    function randomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256); 
        var b = Math.floor(Math.random() * 256); 
        return "rgb(" + r + "," + g + "," + b + ")"; 
    }
    //assign random color to a variable
    color = randomColor(); 

    //return that color
    return color;
} 