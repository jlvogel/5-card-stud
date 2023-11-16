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
// console.log(deck)    // it works!!!

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

// dealhands(deck)
// console.log('hand1 is ', hand1)
// console.log('hand2 is ', hand2)





// ok awesome now that we have 2 hands - who is the winner?
// yeah, isn't that the $64,000 question...

// to simplify the case at first let's just determine our hand as being
// a straight flush, quads, full house, flush, straight, 3 of a kind,
// 2 pair, a pair, or a high card.  in that order.

// let's not worry about who wins quite yet, let's just determine
// which of the 9 categories our hand falls into.  

// let's check in order of highest hand to lowest i.e. if we have
// straight flush were done checking if we have another hand.

const isFlush = hand => {
  // just need to look at the cards and see if all the suits
  // are the same.
  let suit = hand[0].suit
  for (let card = 1; card<=4; card++ ) {
    if (hand[card].suit != suit) {
      return false
    }
  }
  // console.log('flush! ', hand)
  return true
}

const sortHandByRank = hand => {
  hand.sort((a,b) => (a.rank > b.rank ? 1: b.rank > a.rank ? -1: 0))
}

const isStraight = hand => {
  // ok this is where we see if we have a straight.
  // don't forget to check for the wheel! (the straight where
  // Ace is actually low)

  // first we should sort the array by rank
  sortHandByRank(hand)

  // Ok now that we have our hand sorted by rank now we determine
  // if it's in sequential order
  let rank = hand[0].rank

  for (let card = 1; card<=4; card++ ) {

    if (card != 4) {  // not the last card
      if (hand[card].rank != rank + 1) {
        // console.log(hand[card].rank, rank)
        return false
      }
      rank = hand[card].rank
    }
    else if (hand[card].rank != rank + 1) {  // card == 4   We are on the last card
      if (!(hand[card].rank == 14 && rank == 5)) { // makes sure we don't have the wheel
        // console.log(hand[card].rank, rank)
        return false
      }
      // else {console.log('wheel! ', hand)}  // show me the wheel!
    }

  }
  // console.log('straight! ', hand)
  return true
}


// console.log(hand2)
// console.log(isStraight(hand2))


const isStraightFlush = hand => {
  // well to determine if isStraightFlush
  // it would have to both be a flush AND a straight.
  if (!(isFlush(hand) == true && isStraight(hand) == true)) {
    return false
  }
  console.log('STRAIGHT FLUSH!!!  ', hand)
  return true
}


// // test loop
// for (let i = 0; i <= 1000000; i++) {
//   shuffleArray(deck)
//   // if(isStraight(deck.slice(0,5)) == true) {
//   //   console.log(i)
//   // }
//   if(isStraightFlush(deck.slice(0,5)) == true) {
//     console.log(i)
//   }
// }

// ok awesome  we now can compute if we have a flush, straight flush, or straight

// now let's see if we have quads

// we only check if we have quads if flush == false or straight == false
// this is because if we have a flush or a straight it's not possible
// that we have 2 cards of the same rank

const isQuads = hand => {
  // first check to make sure is not a flush or straight
  if(isFlush(hand) == true || isStraight(hand) == true) {
    return false
  }
  else {
    // now we check to see if we have 4 cards of the same rank:
    // first we should sort the array by rank
    sortHandByRank(hand)
    let rankCount = 0
    let rank = hand[0].rank
    for (let card = 1; card<=4; card++ ) {
      if (hand[card].rank == rank) {
        rankCount++
        // console.log(rankCount, hand)
        if (rankCount == 3) {
          console.log(hand)
          return true
        }
      }
      else {
        rankCount = 0
        rank = hand[card].rank
      }
    }
  }
  return false
}

// test loop
for (let i = 0; i <= 1000000; i++) {
  shuffleArray(deck)
  // if(isStraight(deck.slice(0,5)) == true) {
  //   console.log(i)
  // }
  if(isQuads(deck.slice(0,5)) == true) {
    console.log(i)
  }
}




// console.log(isFlush(hand1), isFlush([{rank: 2, suit: 'diamonds'}, {rank: 4, suit: 'diamonds'}, {rank: 10, suit: 'diamonds'}, {rank: 11, suit: 'diamonds'}, {rank: 8, suit: 'diamonds'}]))


// console.log(isStraight(hand2), isStraight([{rank: 5, suit: 'diamonds'}, {rank: 4, suit: 'diamonds'}, {rank: 3, suit: 'diamonds'}, {rank: 2, suit: 'diamonds'}, {rank: 14, suit: 'diamonds'}]))

