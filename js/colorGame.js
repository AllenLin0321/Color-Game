var colors=generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");

colorDisplay.textContent = pickColor;

resetBtn.addEventListener("click",function(){
    //generate all new colors
    colors = generateRandomColors(6);

    //pick a new random color from array
    // THERE IS A PROBLEM!!!
    pickColor = colors[Math.floor(Math.random()*colors.length)];
    colorDisplay.textContent = pickColor;

    //change colors of squares
    for (var i=0 ; i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    };

    h1.style.background="#232323";
}); 

for (var i=0 ; i<squares.length;i++){ 
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to square
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickColor
        if (clickedColor===pickColor){
            messageDisplay.textContent="Correct!";
            changeColors(pickColor);
            h1.style.backgroundColor = pickColor;
            resetBtn.textContent="Play Again?";
        }else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again!";
        }

    });

}

// change the square color
function changeColors(color){
    // loop through all squares
    for (var i=0 ; i<squares.length;i++){
        //change  each color to match given color
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    
    return colors[random];

}

function generateRandomColors(num){
    // make a array
    var arr = [];
    
    // add the random color into array
    for (var i=0;i<num;i++){
        //get random color and push into arr
        arr.push(randomColor());
    }

    // return this array
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return"rgb("+r+", "+g+", "+b+")";
    
}
