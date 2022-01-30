

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  play: function () {
    // this.chooseRange()   ...somehow picked a number outside of it's range (array, high/low, and response work)
    
    this.secretNum = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do {
      this.getGuess()
      if (guess > this.secretNum){
        console.log('Your guess was too high')
      } else if(guess < this.secretNum){
        console.log('Your guess was too low')
      }
      //for loop for no array brackets
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
      this.getGuess()                          // THIS is supposed to be the NaN filter
    }
    this.prevGuesses.push(guess)
  },

    render: function(){
        console.log(`Congratulations! You guessed it! The number was ${this.secretNum}`)
        numGuesses = this.prevGuesses.length
        console.log(`It took you ${numGuesses} guesses`)
      },

//// this is meant to be min/max set
    // chooseRange: function(){
    //   this.biggestNum = prompt('Choose the maximum number')   
    //   this.smallestNum = prompt('Choose the lowest number')       
    // },
  }

  // game.play()

//Task1: Array of PrevGuesses >>> .join() previous guesses
//Why is it ending then resetting?
//variable not creating with 'let' and 'const', only alone
//if I input NaN response then next guess doubles


