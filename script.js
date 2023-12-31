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
let card1 = document.querySelector('#card1')
let card1rank = document.querySelector('.card1rank')
let card1suit = document.querySelector('.card1suit')
let card1rank2 = document.querySelector('.card1rank2')
card1.style.backgroundColor = `${displaySuitColor(hand1[0].suit)}`
card1rank.innerHTML = displayRank(hand1[0].rank)
card1suit.innerHTML = displaySuit(hand1[0].suit)
card1rank2.innerHTML =` <font size = '+18'>${displayRank(hand1[0].rank)}</font>`

let card2 = document.querySelector('#card2')
let card2rank = document.querySelector('.card2rank')
let card2suit = document.querySelector('.card2suit')
let card2rank2 = document.querySelector('.card2rank2')
card2.style.backgroundColor = `${displaySuitColor(hand1[1].suit)}`
card2rank.innerHTML = displayRank(hand1[1].rank)
card2suit.innerHTML = displaySuit(hand1[1].suit)
card2rank2.innerHTML =` <font size = '+18'>${displayRank(hand1[1].rank)}</font>`


let card3 = document.querySelector('#card3')
let card3rank = document.querySelector('.card3rank')
let card3suit = document.querySelector('.card3suit')
let card3rank2 = document.querySelector('.card3rank2')
card3.style.backgroundColor = `${displaySuitColor(hand1[2].suit)}`
card3.style.visibility = 'hidden'
card3rank.innerHTML = displayRank(hand1[2].rank)
card3suit.innerHTML = displaySuit(hand1[2].suit)
card3rank2.innerHTML =` <font size = '+18'>${displayRank(hand1[2].rank)}</font>`

let card4 = document.querySelector('#card4')
let card4rank = document.querySelector('.card4rank')
let card4suit = document.querySelector('.card4suit')
let card4rank2 = document.querySelector('.card4rank2')
card4.style.backgroundColor = `${displaySuitColor(hand1[3].suit)}`
card4.style.visibility = 'hidden'
card4rank.innerHTML = displayRank(hand1[3].rank)
card4suit.innerHTML = displaySuit(hand1[3].suit)
card4rank2.innerHTML =` <font size = '+18'>${displayRank(hand1[3].rank)}</font>`

let card5 = document.querySelector('#card5')
let card5rank = document.querySelector('.card5rank')
let card5suit = document.querySelector('.card5suit')
let card5rank2 = document.querySelector('.card5rank2')
card5.style.backgroundColor = `${displaySuitColor(hand1[4].suit)}`
card5.style.visibility = 'hidden'
card5rank.innerHTML = displayRank(hand1[4].rank)
card5suit.innerHTML = displaySuit(hand1[4].suit)
card5rank2.innerHTML =` <font size = '+18'>${displayRank(hand1[4].rank)}</font>`




let card6 = document.querySelector('#card6')
let card6rank = document.querySelector('.card6rank')
let card6suit = document.querySelector('.card6suit')
let card6rank2 = document.querySelector('.card6rank2')
card6.style.backgroundColor = `${displaySuitColor(hand2[0].suit)}`
card6rank.innerHTML = displayRank(hand2[0].rank)
card6suit.innerHTML = displaySuit(hand2[0].suit)
card6rank2.innerHTML =` <font size = '+18'>${displayRank(hand2[0].rank)}</font>`

let card7 = document.querySelector('#card7')
let card7rank = document.querySelector('.card7rank')
let card7suit = document.querySelector('.card7suit')
let card7rank2 = document.querySelector('.card7rank2')
card7.style.backgroundColor = `${displaySuitColor(hand2[1].suit)}`
card7rank.innerHTML = displayRank(hand2[1].rank)
card7suit.innerHTML = displaySuit(hand2[1].suit)
card7rank2.innerHTML =` <font size = '+18'>${displayRank(hand2[1].rank)}</font>`


let card8 = document.querySelector('#card8')
let card8rank = document.querySelector('.card8rank')
let card8suit = document.querySelector('.card8suit')
let card8rank2 = document.querySelector('.card8rank2')
card8.style.backgroundColor = `${displaySuitColor(hand2[2].suit)}`
card8.style.visibility = 'hidden'
card8rank.innerHTML = displayRank(hand2[2].rank)
card8suit.innerHTML = displaySuit(hand2[2].suit)
card8rank2.innerHTML =` <font size = '+18'>${displayRank(hand2[2].rank)}</font>`

let card9 = document.querySelector('#card9')
let card9rank = document.querySelector('.card9rank')
let card9suit = document.querySelector('.card9suit')
let card9rank2 = document.querySelector('.card9rank2')
card9.style.backgroundColor = `${displaySuitColor(hand2[3].suit)}`
card9.style.visibility = 'hidden'
card9rank.innerHTML = displayRank(hand2[3].rank)
card9suit.innerHTML = displaySuit(hand2[3].suit)
card9rank2.innerHTML =` <font size = '+18'>${displayRank(hand2[3].rank)}</font>`

let card10 = document.querySelector('#card10')
let card10rank = document.querySelector('.card10rank')
let card10suit = document.querySelector('.card10suit')
let card10rank2 = document.querySelector('.card10rank2')
card10.style.backgroundColor = `${displaySuitColor(hand2[4].suit)}`
card10.style.visibility = 'hidden'
card10rank.innerHTML = displayRank(hand2[4].rank)
card10suit.innerHTML = displaySuit(hand2[4].suit)
card10rank2.innerHTML =` <font size = '+18'>${displayRank(hand2[4].rank)}</font>`


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


const handCategory = (hand) => {
  if (isStraightFlush(hand)) {
    return 'Straight Flush'
  }
  else if (isFlush(hand)) {
    return 'Flush'
  }
  else if (isStraight(hand)) {
    return 'Straight'
  }
  else if (isQuads(hand)) {
    return 'Quads'
  }
  else if (isFullHouse(hand)) {
    return 'Full House'
  }
  else if (isTrips(hand)) {
    return 'Trips'
  }
  else if (isTwoPair(hand)) {
    return "Two Pair"
  }
  else if (isPair(hand)) {
    return "Pair"
  }
  else {
    return "High Card"
  }

}

const handRanking = (hand) => {
  if (isStraightFlush(hand)) {
    return 9
  }
  else if (isFlush(hand)) {
    return 6
  }
  else if (isStraight(hand)) {
    return 5
  }
  else if (isQuads(hand)) {
    return 8
  }
  else if (isFullHouse(hand)) {
    return 7
  }
  else if (isTrips(hand)) {
    return 4
  }
  else if (isTwoPair(hand)) {
    return 3
  }
  else if (isPair(hand)) {
    return 2
  }
  else {
    return 1
  }
}

const determineWinner = (hand1, hand2) => {
  // ok we have all the functions we need to determine the hand type for now
  // for simplicity we are going to just compare hand categories for now
  // not worry about tie breakers.

  if (handCategory(hand1) == handCategory(hand2)) {
    return 'Player 1 and Player 2 tie'
  }
  else if (handRanking(hand1) > handRanking(hand2)) {
    return "Player 1 Wins!!"
  }
  else { return "Player 2 Wins!!"}


}

const ButtonClick = () => {
  if (card5.style.visibility == 'visible'){
    alert(`player 1 has a ${handCategory(hand1)}
player 2 has a ${handCategory(hand2)}
${determineWinner(hand1, hand2)}`)
  }
}

let button = document.querySelector('.Button')

button.addEventListener("click", ButtonClick)


let n = 0
const DealClick = () => {
  n++
  if (n==1){
    card3.style.visibility = 'visible'
    card8.style.visibility = 'visible'
    return
  }

  if(n==2){
    card4.style.visibility = 'visible'
    card9.style.visibility = 'visible'
    return
  }

  if(n==3){
    card5.style.visibility = 'visible'
    card10.style.visibility = 'visible'
    return
  }
}

let deal = document.querySelector('#Deal')

deal.addEventListener("click", DealClick)
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

