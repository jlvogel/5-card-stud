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

suitArray = ['spades', 'hearts', 'diamonds', 'clubs']

deck = []

let n = 0
for (let suit of suitArray) {
  for (let i = 2; i <=14; i ++) {
    deck[n] = new Card(i, suit)
    n++
  }
}

console.log(deck)