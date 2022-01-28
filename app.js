

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}

let prevGuesses = [] //to compile past guesses to display


let getGuess = prompt(`Guess a number between ${[smallestNum]} and ${[biggestNum]}`)

//while loop to ensure 1.number not a string and 2.is between smallestNum and biggestNum
//parseInt returns NaN if string cannot become a number

//try console.log play method to see what happens

//use play method to invoke getGuess from inside a loop and add new guess to prevGuesses array

//create render method to game that play will call after a guess has been made
//will alert if guess is correct
//OR if guess is too high or low and previous guesses

//'return' only when player has guessed secretNum

window.alert("Sorry! That number wasn't quite right") //for incorrect guesses -- add too high or too low depending




