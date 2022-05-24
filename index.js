let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById ("message-el")
let sumEl = document.getElementById ("sum-el")
let cardsEl = document.getElementById ("cards-el")


function getRandomCard () {
    let randomNumber = Math.floor ( Math.random ()*11 ) +1
    if (randomNumber >11){
        return 11
    } else {
        return randomNumber}
    
}

function startGame () {
    isAlive = true
    let firstCard = getRandomCard ()
    let secondCard = getRandomCard ()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + "  "
    }

    sumEl.textContent = "Sum: " + sum
        if (sum <21) {
        message = "do you want another card?"
    }   else if (sum ===21) {
        message = "you've won, collect your prize!"
        hasBlackJack = true
    }   else if (sum>21) {
        message = "you're a loser, go home or start again"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard () {
    if (isAlive === true && hasBlackJack === false) {

    
    let card = getRandomCard ()
    sum += card
    cards.push(card)
    renderGame()
    }
}


function reset () {
    if (isAlive === false) {
    sum = 0
    sumEl.textContent = "Sum:"
    cardsEl.textContent = "Cards:"
    messageEl.textcontent = "Start anotehr game"
    }
}
