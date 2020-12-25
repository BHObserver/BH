let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.getElementsByClassName("square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset")

/* let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn"); */

let modeButtons = document.querySelectorAll(".mode");

init() ;

function init() {
    setupModeListeners();
    setupSquares();
    reset();
}

function setupModeListeners() {
    
for( let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        
        /* if(this.textContent === "Easy") {
            numSquares = 3;
        }
        else
        {
            numSquares = 6;
        } */

        reset();
        
        //figure out how many squares to show
        //pick new colors
        //pick a new pickedColor
        //update page to reflect changes
        }); 
    }
}

function setupSquares() {
    for(i = 0; i < squares.length; i++) {
        //add initial  colors to square
        
        
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked color
            let clickedColor = this.style.background;
            //compare color to pickedColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!!";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play again?";
            }
            else
                {
                    this.style.background = "#232323";
                    messageDisplay.textContent = "Try Again";
                }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";

    messageDisplay.textContent = "";
    //change colors of squares
    for(let i = 0; i < squares.length; i++) {
            if(colors[i]) {
                squares[i].style.display = "block";
                squares[i].style.background = colors[i];
            }
            else
            {
                squares[i].style.display = "none";
            }
        }

    h1.style.background = "steelblue";
    
}

/* easyBtn.addEventListener("click", function() {
   
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

        for( let i = 0; i <squares.length; i++) {
            if(colors[i]) {
                squares[i].style.background = colors[i];
            }
            else
            {
                squares[i].style.display = "none";
            }
        }

    h1.style.background = "steelblue";
    messageDisplay.textContent = "";

});

hardBtn.addEventListener("click", function() {
   
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

   for(let i = 0; i < squares.length; i++) {
       squares[i].style.background = colors[i];
       squares[i].style.display = "block";
    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";

}); */

resetButton.addEventListener("click", function() {

    reset();
    /* //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(let i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
        }

    resetButton.textContent = "New Colors";
    h1.style.background = "steelblue";
    messageDisplay.textContent = ""; 
    */
});

    
function changeColors(color) {
    //loop through all squares
    for(let i = 0; i < squares.length; i++) {
        //change each color match given color
        squares[i].style.background = color;
    }
    
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    let arr = [];
    //repeat num times
    for(let i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push( randomColor() );
    }

    //return that array
    return arr;
}

function randomColor() {
    
    //pick a "red" from 0 - 255
    let r = Math.floor(Math.random() * 256)
    //pick a "green" from 0 - 255
    let g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 - 255
    let b = Math.floor(Math.random() * 256)
    //"rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")"; 

}