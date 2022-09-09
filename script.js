const suits = ["♠", "♥", "♦", "♣"]                                                                           //This is my suit varable
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]                                                  //this is my card value varable

let user1score = 26;                                                                                         //this is the varable for Player 1 score starting point
let user2score = 26;                                                                                         //this is the varable for Computer score starting point

class Deck{                                                                                                  //this is my Deck class that hold all properties of my deck
    constructor(cards = createFullDeck()){                                                                   //cards is my property holder + function of creating a full deck
    this.cards = cards
    }

    get numberOfCards(){                                                                                     //this is a getter of the cards array
        return this.cards.length
    }
    shuffle(){                                                                                               //this is my shuffle method
        for(let i = this.numberOfCards -2; i > 0; i--){                                                      //this for loop iterates thru cards array and returns a
            const newIndex = Math.floor(Math.random() * (i + 1))                                             //random array of cards
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card{                                                                                                  //this is my card class that holds all my card properties
    constructor(suit, value){                                                                                //properties suit and value
        this.suit = suit
        this.value = value
    }
}

function createFullDeck(){                                                                                   //this function takes the suit array, and value array
    return suits.flatMap(suit =>{                                                                            //and iterates thru them combining them to make a deck 
        return values.map(value =>{                                                                          //of 52 cards with suit and value to each (52 specific cards)
            return new Card(suit, value)
        })
    })
    
}
const deck = new Deck()                                                                                      //this creates new varable for the new Deck (deck)
deck.shuffle()                                                                                               //this calls the shuffle function on the deck of cards
console.log(deck);                                                                                           //this displays the shuffled deck of 52 cards to the console

class StartGame{                                                                                             //this is my Game class that hold the properties of my game
    constructor(playerDeck, playerCard, computerDeck, computerCard){
    this.playerDeck = playerDeck
    this.playerCard = playerCard
    this.computerDeck = computerDeck
    this.computerCard = computerCard
    }


    startGame(){                                                                                             //this is my start game method. this is ran when the
        const deck = new Deck()                                                                              //start game method is called
        deck.shuffle()                                                                                       //this calls my shuffled deck to the start of the game
        
        
        const deckMidpoint = Math.ceil(deck.numberOfCards / 2)                                               //this created my player deck and computer deck
        this.playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))                                        //this takes the original shuffled deck and splits it in half
        this.computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))                     //this is the second half of the shuffled deck
        
        
        this.computerCard = new Deck(deck.cards.pop())                                                       //this takes the end card of the computer deck array and returns a card
        this.playerCard = new Deck(deck.cards.pop())                                                         //this takes the end card of the players deck array and returns a card
    
        for(let i = 0; i < 26; i++){                                                                         //this for loop, loops through all the player deck and computer deck
            console.log("#", i,"PlayerCard", this.playerDeck.cards[i].value)                                 //and prints out the player card
            console.log("#", i,"ComputerCard", this.computerDeck.cards[i].value)                             //and computer card
            this.score(this.playerDeck.cards[i].value,this.computerDeck.cards[i].value)                      //this calls the score method compares playercard and computer card
        }
        console.log("Player 1 Score:",user1score);                                                           //this prints player1 score to console
        console.log("Computer Score:", user2score);                                                          //this primnts computer score to console
        this.winner(user1score,user2score)                                                                   //this calls the winner method with user1score and user2score
    }                                                                                                              //as perimeters at the end of the game
    
    

    score(playerCard ,computerCard){                                                                         //this is my score method playercard and computercard as perameters                     
        console.log(playerCard, computerCard)                                                                //this prints player and computer cards to console
        if(playerCard > computerCard){                                                                       //if player card is larger than computer card
            user1score++;                                                                                    //increase user1score by 1 and 
            user2score--;                                                                                    //decrease user2score by 1
            console.log("Player1 Wins!","Player1 Score:", user1score, "Computer Score:", user2score);        //prints player 1 as declared winner of round and shows both scores
            
        }else if(computerCard > playerCard){                                                                 //if computer card is larger than player card
                user2score++;                                                                                //increase user2score by 1
                user1score--;                                                                                //decrease user1score by 1
                console.log("Computer Wins!","Player1 Score:", user1score, "Computer Score:", user2score);   //declares round winner and prints it to the console
        }else{console.log("DRAW!","Player1 Score:", user1score, "Computer Score:", user2score);}             //this else statements says if its anything else declare a draw
    }                                                                                                        //and no pints awarded and prints to the console
        
   winner(user1score,user2score){                                                                            //this is the game winner method
    if(user1score > user2score){                                                                             //if final user1score is larger than final user2score
    console.log("Player 1 has Won the War!")                                                                 //prints Player 1 is winner to console
    }else if(user1score === user2score){                                                                     //if scores are equal to eachother
        console.log("This Game was a Draw!")                                                                 //prints that final game score was a draw
    }else {console.log("Computer has Won the War!")}                                                         //everything else prints that the computer is the declared winner
   }
}

let Game = new StartGame();                                                                                  //this creates an varable from new startGame to Game      
Game.startGame()                                                                                             //this calls the Game varable to start
console.log(Game);                                                                                           //this prints the entire game to the console










function combineCards(suits,values){                                                                         //function that I wrote earlier in the writing process                      
    if(suits != suits){                                                                                      //was tring to make a card  
        throw new Error("Suit must be " + "♠ ♥ ♦ ♣");
    }  
    return suits + values;
}