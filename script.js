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

dealhands(deck)
console.log('hand1 is ', hand1)
console.log('hand2 is ', hand2)
console.log(hand1[0])

// ok one of the issues displaying the cards is I need to have
// the suits correspond to the hexadecimal characters
// and I need 11-12-13-14 ranks to correspond to J-Q-K-A

// I think I can modify the card class to have methods that return
// properties accordingly for display purposes - try it!

// ok - going to use a function instead

const displaySuit = suit => {
  // This will take the suit and return the corresponding
  // hexadecimal code
  switch (suit) {
    case 'spades':
      return '\u2660'
    case 'hearts':
      return '\u2665'
    case 'diamonds':
      return '\u2666'
    case 'clubs':
      return '\u2663'
  }

}

const displaySuitColor = suit => {
  // This will take the suit and return the corresponding
  // hexadecimal code
  switch (suit) {
    case 'spades':
      return 'black'
    case 'hearts':
      return 'red'
    case 'diamonds':
      return 'blue'
    case 'clubs':
      return 'green'
  }

}

const displayRank = rank => {
  switch (rank) {
    case 11:
      return 'J'
    case 12:
      return 'Q'
    case 13:
      return 'K'
    case 14:
      return 'A'
    default:
      return rank
  }
}
let card1 = document.querySelector('card1')
let card1rank = document.querySelector('.card1rank')
let card1suit = document.querySelector('.card1suit')
let card1rank2 = document.querySelector('.card1rank2')
card1rank.innerHTML = displayRank(hand1[0].rank)
card1suit.innerHTML = displaySuit(hand1[0].suit)
card1rank2.innerHTML =` <font size = '+18'>${displayRank(hand1[0].rank)}</font>`

let card2rank = document.querySelector('.card2rank')
let card2suit = document.querySelector('.card2suit')
let card2rank2 = document.querySelector('.card2rank2')
card2rank.innerHTML = displayRank(hand1[1].rank)
card2suit.innerHTML = displaySuit(hand1[1].suit)
card2rank2.innerHTML =` <font size = '+18'>${displayRank(hand1[1].rank)}</font>`

// let card3 = document.querySelector('#card3')
// card3.textContent = `${hand1[2].rank}
//                      ${hand1[2].suit}`

// let card4 = document.querySelector('#card4')
// card4.textContent = `${hand1[3].rank}
//                      ${hand1[3].suit}`

// let card5 = document.querySelector('#card5')
// card5.textContent = `${hand1[4].rank}
//                      ${hand1[4].suit}`





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
  // console.log('STRAIGHT FLUSH!!!  ', hand)
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
          // console.log(hand)
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

const isFullHouse = hand => {
  // first check to make sure is not a flush or straight or quads
  if(isFlush(hand) == true || isStraight(hand) == true || isQuads(hand) == true) {
    return false
  }
  else {
    // now we check to see if we have 3 cards of the same rank:
    // first we should sort the array by rank
    sortHandByRank(hand)
    let rankCount = 0
    let rank = hand[0].rank
    for (let card = 1; card<=4; card++ ) {
      if (hand[card].rank == rank) {
        rankCount++
        // console.log(rankCount, hand)
        if (rankCount == 2) {
          // console.log(hand)
          // great we know we have 3 cards of the same rank
          // now we need to check if the other 2 cards have the same rank.
          if (card != 3) { // this means we found trips in a ranked hand in the middle
                           // this means the other two can't be a pair!
            if (card == 2) {
              if (hand[3].rank == hand[4].rank) {
                // console.log(hand)
                return true
              }
            }
            else if (card == 4) {
              if (hand[0].rank == hand[1].rank) {
                // console.log(hand)
                return true
              }
            }
          }
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



const isTrips = hand => {
  // first check to make sure is not a flush or straight or quads or full house
  if(isFlush(hand) == true || isStraight(hand) == true || isQuads(hand) == true || isFullHouse(hand) == true) {
    return false
  }
  else {
    // now we check to see if we have 3 cards of the same rank:
    // first we should sort the array by rank
    sortHandByRank(hand)
    let rankCount = 0
    let rank = hand[0].rank
    for (let card = 1; card<=4; card++ ) {
      if (hand[card].rank == rank) {
        rankCount++
        // console.log(rankCount, hand)
        if (rankCount == 2) {
          // console.log(hand)
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


// ok just a quick observation when we check to see if we have quads
// we also are checking to see if we have trips to get there.  We need to better
// use this logic to calculate trips otherwise we are repeating ourself
// violation of DRY principle - DON'T REPEAT YOURSELF!

// also by same logic we would have also already found a pair

const isTwoPair = hand => {
  // first check to make sure is not a flush or straight or quads or full house or trips
  if(isFlush(hand) == true || isStraight(hand) == true || isQuads(hand) == true || isFullHouse(hand) == true || isTrips(hand) == true) {
    return false
  }
  else {
    // now we check to see if we have 2 cards of the same rank:
    // first we should sort the array by rank
    sortHandByRank(hand)
    let rankCount = 0
    let rank = hand[0].rank
    let pairCount = 0 
    for (let card = 1; card<=2; card++ ) {
      if (hand[card].rank == rank) {
        rankCount++
        // console.log(rankCount, hand)
        if (rankCount == 1) {
          // console.log(hand)
          pairCount++
        }
      }
      else {
        rankCount = 0
        rank = hand[card].rank
      }
    }
    if (pairCount == 0) {
      return false
    }
    else {
      rankCount = 0
      rank = hand[2].rank
      for (let card = 3; card<=4; card++ ) {
        if (hand[card].rank == rank) {
          rankCount++
          // console.log(rankCount, hand)
          if (rankCount == 1) {
            // console.log(hand)
            return true
          }
        }
        else {
          rankCount = 0
          rank = hand[card].rank
        }
      }
    }
  }
  return false
}


const isPair = hand => {
  // first check to make sure is not a flush or straight or quads or full house or trips or
  // two pair
  if(isFlush(hand) == true || isStraight(hand) == true || isQuads(hand) == true || isFullHouse(hand) == true || isTrips(hand) == true || isTwoPair(hand) == true) {
    return false
  }
  else {
    // now we check to see if we have 2 cards of the same rank:
    // first we should sort the array by rank
    sortHandByRank(hand)
    let rankCount = 0
    let rank = hand[0].rank
    for (let card = 1; card<=4; card++ ) {
      if (hand[card].rank == rank) {
        rankCount++
        // console.log(rankCount, hand)
        if (rankCount == 1) {
          // console.log(hand)
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


// // test loop
// for (let i = 0; i <= 10; i++) {
//   shuffleArray(deck)
//   // if(isStraight(deck.slice(0,5)) == true) {
//   //   console.log(i)
//   // }
//   if(isPair(deck.slice(0,5)) == true) {
//     console.log(i)
//   }
// }





// console.log(isFlush(hand1), isFlush([{rank: 2, suit: 'diamonds'}, {rank: 4, suit: 'diamonds'}, {rank: 10, suit: 'diamonds'}, {rank: 11, suit: 'diamonds'}, {rank: 8, suit: 'diamonds'}]))


// console.log(isStraight(hand2), isStraight([{rank: 5, suit: 'diamonds'}, {rank: 4, suit: 'diamonds'}, {rank: 3, suit: 'diamonds'}, {rank: 2, suit: 'diamonds'}, {rank: 14, suit: 'diamonds'}]))



// Ok, wow well we can now determine what hand category we have and if it's none of the above
// then we are left with the lowly high card.

// At this point we can actually start computing which player wins, that is, in the simple
// case where our categories are different. i.e. If I have a flush, and oppenent has 2 pair,
// it doesn't matter if I have a Jack high flush, and it doesn't matter which 2 pair my
// opponent has, I win because flush beats 2 pair.

// So maybe we can mix it up a bit at the moment - try to display in the browser some of the
// stuff that's going on and do some checking to make sure that our above code works right
// and some code cleanup of sort.




// Good morning, alright how about a quick review of where we are at.
// in need of more caffeine that's where we're at....

// ok, let's research some basic odds to make sure our program is working as expected
// so far....

// credit to https://en.wikipedia.org/wiki/Poker_probability#5-card_poker_hands

// one pair probability: 42.2569%
// four of a kind:       0.02401%

// test loop
// let n = 0
// for (let i = 1; i <= 1000000000; i++) {
//   shuffleArray(deck)
//   // if(isStraight(deck.slice(0,5)) == true) {
//   //   console.log(i)
//   // }
//   if(isPair(deck.slice(0,5)) == true) {
//     n++
//     if(n%10000 == 0) {
//       console.log(i, (100*n/i).toFixed(4),'%', ((100*n/i).toFixed(4)-42.2569).toFixed(4))
//     }
//   }
// }

// ok great we are getting hands at the odds calculated

// this needs to work in html page.  need DOM interactivity.
// lets just get something to display in a browser.

// I need to do a quick review of html / css - don't panic!

// we just need to display (for right now) 10 cards on the screen
// and a button to calculate the winner.

// sound simple right?  

// allright we need to do a review of what we learned in class in
// regards to HTML and CSS and DOM  
// I'm shutting down this project for now but I will back....

