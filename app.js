

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  play: function () {
    // this.biggestNum = prompt('Choose the maximum number')
    // this.smallestNum = prompt('Choose the lowest number')
    //^^^ this gets to getGuess() but doesn't return console.log or array
    this.secretNum = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do {
      this.getGuess()
      if (guess > this.secretNum){
        console.log('Your guess was too high')
      } else if(guess < this.secretNum){
        console.log('Your guess was too low')
      }
      console.log(this.prevGuesses)
    } while (guess !== this.secretNum)
    this.render()
   },

  getGuess: function () {
    guess = parseInt(prompt(`Guess a number between ${[this.smallestNum]} and ${[this.biggestNum]}`))
    // if (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
    //   console.log("Nice try! But that either wasn't within the numerical range or not a number")
    //   this.getGuess()
    // } else {
    //   console.log("That was not the number...but don't give up!")
    //   this.prevGuesses.push(guess)
    // }
    while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
      console.log("Nice try! But that either wasn't within the numerical range or not a number")
      this.getGuess()
    }
    this.prevGuesses.push(guess)
  },

    render: function(){
        console.log(`Congratulations! You guessed it! The number was ${this.secretNum}`)
        numGuesses = this.prevGuesses.length
        console.log(`It took you ${numGuesses} guesses`)
      } 
  }

  // game.play()

//Task1: Array of PrevGuesses >>> .join() previous guesses
//Why is it ending then resetting?
//variable not creating with 'let' and 'const', only alone


