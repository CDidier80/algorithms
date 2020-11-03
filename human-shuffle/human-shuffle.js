function buildDeck() {
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
  
    const deck = []
    ranks.forEach(function(cardRank, index){      // rank first
      suits.forEach(function(cardSuit){           // suits second 
        let card = {suit: cardSuit, rank: cardRank, value: index}  // value assigned based on rank
        deck.push(card)
      })
    })
    return deck
  }

const myShuffle = function(deck, numberOfShuffles) {

    let shuffledDeck = []
    let deckHalfOne = deck.slice(0, (deck.length / 2))
    let deckHalfTwo = deck.slice((deck.length / 2),) 

    const popAndPushSomeCards = function(half, numOfCards) {  
      for(i=0; i < numOfCards; i++) {
        shuffledDeck.push(half.pop())
      }
    }
    for(i = 0; i < numberOfShuffles; i++) {
      while (deckHalfOne.length > 0 || deckHalfTwo.length > 0) { 
        let firstRandom =  Math.ceil(Math.random() * 4), secondRandom = Math.ceil(Math.random() * 4)
        d1PopNum = firstRandom < deckHalfOne.length ? firstRandom : deckHalfOne.length
        d2PopNum = secondRandom < deckHalfTwo.length ? secondRandom : deckHalfTwo.length
        popAndPushSomeCards(deckHalfOne, d1PopNum)                                            
        popAndPushSomeCards(deckHalfTwo, d2PopNum)
        }                                                    
      deckHalfOne = shuffledDeck.slice(0, (shuffledDeck.length / 2))         
      deckHalfTwo = shuffledDeck.slice((shuffledDeck.length / 2),)
      shuffledDeck = (i === (numberOfShuffles - 1)) ? shuffledDeck : []
      }   
    return shuffledDeck 
  }