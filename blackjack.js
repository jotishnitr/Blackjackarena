
let cards=[] // list of cards
let sum=0
let hasBlackJack=false
let isAlive=false
let aceCount = 0;
let message = ""


let messageEl=document.getElementById("message-el")

let sumEl=document.querySelector("#sum-el")

let cardsEl=document.getElementById("cards-el")



let player={
  name:"",
  age:null,
  chips:0,
  bet:0
}

let playerEl=document.getElementById("player-el")

function setPlayer(){
  let name = document.getElementById("name-input").value
  let age = Number(document.getElementById("age-input").value)
  let chips = Number(document.getElementById("chips-input").value)
  
  if(name ==="" || isNaN(age) || isNaN(chips)){
    messageEl.textContent="Please enter all required details"
    return
  }
  else if(age<18){
    messageEl.textContent="You must be 18+ to play"
    return
  }


  player.name=name
  player.age=age
  player.chips=chips
  playerEl.textContent = player.name + " (Age: " + player.age + ") : $" + player.chips
  document.getElementById("name-input").value=""
  document.getElementById("age-input").value=""
  document.getElementById("chips-input").value=""
  messageEl.textContent = "Player set successfully!"
}


function getRandomCard(){
  let randomNumber= Math.floor(Math.random()*13)+1
  if(randomNumber>10){
    return 10
  }
  else if(randomNumber ===1){
    aceCount++
    return 11
  }
  else{
    return randomNumber
  }
  
}

function startGame(){
  if(player.name === "" || player.age===null || player.chips===0){
    messageEl.textContent=("Please click on (SET PLAYER) button first")
    return
  }
  let bet =  Number(document.getElementById("bet-input").value)
  if(bet <= 0 || bet > player.chips){
    messageEl.textContent = "Invalid bet"
    return
  }
  if(isAlive === true){
  messageEl.textContent = "Finish current round first"
  return
  }
  if(player.chips <= 0){
  messageEl.textContent = "You are out of chips!"
  isAlive = false
  return
  }
  player.bet=bet
  player.chips -= player.bet
  isAlive=true
  hasBlackJack=false
  cards=[]   // reset
  sum=0  
  aceCount=0
  document.getElementById("bet-input").value = ""
  let firstCard=getRandomCard()
  let secondCard=getRandomCard()
  sum=firstCard+secondCard
  cards.push(firstCard,secondCard)
  renderGame()
}
function renderGame(){
  cardsEl.textContent="Cards: "
  for(let i=0;i<cards.length;i++){
    cardsEl.textContent+=cards[i]+" "
  }
  
  sumEl.textContent="Sum: "+sum
  while(sum>21 && aceCount>0){
    sum-=10;
    aceCount--;
  }
  if(sum<=20){
    message=("Do you want to draw a new card? ")
  }
  else if(sum===21){
    message=("Wohoo! You've got Blackjack! ")
    player.chips += (2*player.bet)
    hasBlackJack=true
  }
  else{
    message="You're are out of game! "
    isAlive=false
  }
  messageEl.textContent=message
  playerEl.textContent = player.name + " (Age: " + player.age + ") : $" + player.chips
}

function newCard(){
  if(isAlive===true && hasBlackJack===false){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
  }
  
}

