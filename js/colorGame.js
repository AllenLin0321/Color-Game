var colors=[
    "rgb(255, 0, 0)",    
    "rgb(255, 255, 0)",    
    "rgb(0, 255, 0)",    
    "rgb(0, 255, 255)",    
    "rgb(0, 0, 255)",    
    "rgb(255, 0, 255)",    
]

var squares = document.querySelectorAll(".square");
var pickColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

for (var i=0 ; i<squares.length;i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to square
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickColor
        if (clickedColor===pickColor){
            alert("Correct");
        }else{
            alert("wrong!");
        }

    });

}

colorDisplay.textContent = pickColor;
