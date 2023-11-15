// will need to create and shuffle a 52 deck of cards
// to simplify the game the all cards will be dealt face
// up (at first)

// Beginning of play.  We alternate being the dealer
// we both post an ante. 

class Card {
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit
  }
}

// ok this is a card class at it's simplest.  It has a rank and a suit.

// now what?  now we need to create a deck (an array) of cards

suits = ['spades', 'hearts', 'diamonds', 'clubs']

deck = []

for (let suit of suits) {         
  for (let rank = 2; rank <=14; rank++) {
    deck.push(new Card(rank, suit))
  }
}

// console.log(deck)

// ok awesome we have a deck of cards!!!

// now we need to shuffle
// and after some googling  lookes like Fisher-Yates algorithm is 
// where it's at: 

// the following credit to:
// https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffleArray(deck)
console.log(deck)    // it works!!!

// ok now to play a game we need 2 hands

hand1 = []
hand2 = []

// for now let's just assume hand2 is the dealer:

const dealhands = deck => {
  for (let i = 0; i<= 4; i++) {
    hand1.push(deck.pop())
    hand2.push(deck.pop())
  }
}
dealhands(deck)
console.log(hand1, hand2)