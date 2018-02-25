const tabl = document.getElementById('tictactoe')
const tbod = tabl.getElementsByTagName('tbody')
const fields = tabl.getElementsByTagName("td")
const imgs = tabl.getElementsByTagName("img")
const plImg = 'http://localhost:3000/img/cross.svg'
const aiImg = 'http://localhost:3000/img/heart.svg'
const gamewin = [
	// rows
	[0, 1, 2], 
	[3, 4, 5], 
	[6, 7, 8], 
	// cols 
	[0, 3, 6], 
	[1, 4, 7], 
	[2, 5, 8],
	// diagonal 
	[0, 4, 8], 
	[2, 4, 6]
]

// reset
const resetFields = () => {
  for (let i = 0; i < fields.length; i++){
    imgs[i].src = 'http://localhost:3000/img/transparent.gif'
    fields[i].setAttribute('data-player', 'blank')
    fields[i].setAttribute('data-counter', 0)
    fields[i].setAttribute('class', 'default')
  }
}
const gamestatePlayer = (getPlayedFields) => {
	let played = getPlayedFields() // returns array with setted fields
  let elPlayer = 'player'
  
  switch(true) {
    case (played.indexOf(elPlayer) == 0) && (played.indexOf(elPlayer, 1) == 1) && (played.indexOf(elPlayer, 2) == 2):
      return true
      break
    case (played.indexOf(elPlayer, 3) == 3) && (played.indexOf(elPlayer, 4) == 4) && (played.indexOf(elPlayer, 5) == 5):
      return true
      break
    case (played.indexOf(elPlayer, 6) == 6) && (played.indexOf(elPlayer, 7) == 7) && (played.indexOf(elPlayer, 8) == 8):
      return true
      break
    case (played.indexOf(elPlayer) == 0) && (played.indexOf(elPlayer, 3) == 3) && (played.indexOf(elPlayer, 6) == 6):
      return true
      break
    case (played.indexOf(elPlayer, 1) == 1) && (played.indexOf(elPlayer, 4) == 4) && (played.indexOf(elPlayer, 7) == 7):
      return true
      break
    case (played.indexOf(elPlayer, 2) == 2) && (played.indexOf(elPlayer, 5) == 5) && (played.indexOf(elPlayer, 8) == 8):
      return true
      break
    case (played.indexOf(elPlayer) == 0) && (played.indexOf(elPlayer, 4) == 4) && (played.indexOf(elPlayer, 8) == 8):
      return true
      break
    case (played.indexOf(elPlayer, 2) == 2) && (played.indexOf(elPlayer, 4) == 4) && (played.indexOf(elPlayer, 6) == 6):
  		return true
  		break
  	default:
  	  //console.log('run gameEval by player')
  	  break
  }
}
const gamestateAi = (getPlayedFields) => {
	let played = getPlayedFields() // returns array with setted fields
  let elAi = 'ai'

  switch(true) {
    case (played.indexOf(elAi) == 0) && (played.indexOf(elAi, 1) == 1) && (played.indexOf(elAi, 2) == 2):
      return true
      break
    case (played.indexOf(elAi, 3) == 3) && (played.indexOf(elAi, 4) == 4) && (played.indexOf(elAi, 5) == 5):
      console.log('second row ai wins')
      break
    case (played.indexOf(elAi, 6) == 6) && (played.indexOf(elAi, 7) == 7) && (played.indexOf(elAi, 8) == 8):
      console.log('third row ai wins')
      break
    case (played.indexOf(elAi) == 0) && (played.indexOf(elAi, 3) == 3) && (played.indexOf(elAi, 6) == 6):
      console.log('first col ai wins')
      break
    case (played.indexOf(elAi, 1) == 1) && (played.indexOf(elAi, 4) == 4) && (played.indexOf(elAi, 7) == 7):
      console.log('second col ai wins')
      break
    case (played.indexOf(elAi, 2) == 2) && (played.indexOf(elAi, 5) == 5) && (played.indexOf(elAi, 8) == 8):
      console.log('third col ai wins')
      break
    case (played.indexOf(elAi) == 0) && (played.indexOf(elAi, 4) == 4) && (played.indexOf(elAi, 8) == 8):
      console.log('diagonal ai wins')
      break
    case (played.indexOf(elAi, 2) == 2) && (played.indexOf(elAi, 4) == 4) && (played.indexOf(elAi, 6) == 6):
  		console.log('diagonal ai wins')
  		break
  	default:
  	  //console.log('run gameEval by ai')
  	  break
  }
}
// getter
let getPlayedFields = () => {
	let i = 0
	let played = []
  for(i; i < fields.length; i++){
  	if (fields[i].classList == 'player')
      played[i] = 'player'
    if (fields[i].classList == 'ai')
      played[i] = 'ai'
    if (fields[i].classList == 'default')
      played[i] = 'default'
  }
  return played
}
// Moves Counter
let getPlayerMoves = () => {
  let i = 0
  let playerFields = []
  let player = document.querySelectorAll('.ai');
  for(i; i < player.length; i++){
    i
  }
  return i
}
let getAiMoves = () => {
  let i = 0
  let playerFields = []
  let player = document.querySelectorAll('.ai');
  for(i; i < player.length; i++){
    i
  }
  return i
}
let getMoves = () => {
	let numPlayer = getPlayerMoves()
	let numAi = getAiMoves()
	if((fields.length-1) == (numAi+numPlayer))
	  return numAi + numPlayer
}
// setter
let setPlayerField = () => {
  
  for(let i = 0; i< fields.length; i++){
    
    fields[i].addEventListener("click", function(){
    	
    	if(fields[i].classList[0]!== 'ai' && fields[i].classList[0] !== 'player'){
        imgs[i].src = plImg
        this.setAttribute('data-player', 'player')
        this.setAttribute('data-counter', 1)
        this.setAttribute('class', 'player')

        if(gamestatePlayer(getPlayedFields)==true){
        	console.log('player won game')
        } 
        if (gamestateAi(getPlayedFields)==true){
        	console.log('ai won game')
        }
        else if(getMoves()==8){
  	      console.log('draw')
        }
        else {
        	setAiField()
        }
        
    	}
      
    })
  }
  
}

let setAiField = () => {
	switch (true) {
	  case fields[0].classList[0] !== 'ai' && fields[0].classList[0] !== 'player':
	    imgs[0].setAttribute('src', aiImg)
	    fields[0].setAttribute('class', 'ai')
	    fields[0].setAttribute('data-player', 'ai')
	    fields[0].setAttribute('data-counter', 1)
	    gamestateAi(getPlayedFields)
	    break
	  case fields[0].classList[0] == 'ai' && fields[0].classList[0] == 'player':
	    gamestateAi(getPlayedFields)
	  case fields[1].classList[0] !== 'ai' && fields[1].classList[0] !== 'player':
	    imgs[1].setAttribute('src', aiImg)
	    fields[1].setAttribute('class', 'ai')
	    fields[1].setAttribute('data-player', 'ai')
	    fields[1].setAttribute('data-counter', 1)
	    gamestateAi(getPlayedFields)
	    break
	  case fields[2].classList[0] !== 'ai' && fields[2].classList[0] !== 'player':
	    imgs[2].setAttribute('src', aiImg)
	    fields[2].setAttribute('class', 'ai')
	    fields[2].setAttribute('data-player', 'ai')
	    fields[2].setAttribute('data-counter', 1)
	    gamestateAi(getPlayedFields)
	    break
	  case fields[3].classList[0] !== 'ai' && fields[3].classList[0] !== 'player':
	    imgs[3].setAttribute('src', aiImg)
	    fields[3].setAttribute('class', 'ai')
	    fields[3].setAttribute('data-player', 'ai')
	    fields[3].setAttribute('data-counter', 1)
	    gamestateAi(getPlayedFields)
	    break
	  case fields[4].classList[0] !== 'ai' && fields[4].classList[0] !== 'player':
	    imgs[4].setAttribute('src', aiImg)
	    fields[4].setAttribute('class', 'ai')
	    fields[4].setAttribute('data-player', 'ai')
	    fields[4].setAttribute('data-counter', 1)
	    gamestateAi(getPlayedFields)
	    break
	  case fields[5].classList[0] !== 'ai' && fields[5].classList[0] !== 'player':
	    imgs[5].setAttribute('src', aiImg)
	    fields[5].setAttribute('class', 'ai')
	    fields[5].setAttribute('data-player', 'ai')
	    fields[5].setAttribute('data-counter', 1)
	    gamestateAi(getPlayedFields)
	    break
	  case fields[6].classList[0] !== 'ai' && fields[6].classList[0] !== 'player':
	    imgs[6].setAttribute('src', aiImg)
	    fields[6].setAttribute('class', 'ai')
	    fields[6].setAttribute('data-player', 'ai')
	    fields[6].setAttribute('data-counter', 1)
	    gamestateAi(getPlayedFields)
	    break
	  case fields[7].classList[0] !== 'ai' && fields[7].classList[0] !== 'player':
	    imgs[7].setAttribute('src', aiImg)
	    fields[7].setAttribute('class', 'ai')
	    fields[7].setAttribute('data-player', 'ai')
	    fields[7].setAttribute('data-counter', 1)
	    gamestateAi(getPlayedFields)
	    break
	  case fields[8].classList[0] !== 'ai' && fields[8].classList[0] !== 'player':
	    imgs[8].setAttribute('src', aiImg)
	    fields[8].setAttribute('class', 'ai')
	    fields[8].setAttribute('data-player', 'ai')
	    fields[8].setAttribute('data-counter', 1)
	    gamestateAi(getPlayedFields)
	    break
	  default:
	    //gamestateAi(getPlayedFields)
	    //console.log('run gameEval by ai')
	    break
  }
  
}
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    resetFields()
    setPlayerField()
  }
}