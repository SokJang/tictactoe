const tabl = document.getElementById('tictactoe')
const tbod = tabl.getElementsByTagName('tbody')
const fields = tabl.getElementsByTagName("td")
const imgs = tabl.getElementsByTagName("img")
const plImg = 'http://localhost:3000/img/cross.svg'
const aiImg = 'http://localhost:3000/img/heart.svg'
const gamewin = [
  // winning rows
	[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]

let beispiel = ["ai", "ai", "ai", "ai", "player", "player", "player", "player", "player"]

// reset
const resetFields = () => {
  for (let i = 0; i < fields.length; i++){
    imgs[i].src = 'http://localhost:3000/img/transparent.gif'
    fields[i].setAttribute('data-player', 'blank')
    fields[i].setAttribute('data-counter', 0)
    fields[i].setAttribute('class', 'default')
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
    console.log(played)
  }
}
let getPlayerFields = () => {
  let i = 0
  let playerFields = []
  let player = document.querySelectorAll('.ai');
  for(i; i < player.length; i++){
    i
  }
  return i
}
let getAiFields = () => {
  let i = 0
  let playerFields = []
  let player = document.querySelectorAll('.ai');
  for(i; i < player.length; i++){
    i
  }
  return i
}
let getMoves = () => {
	let numPlayer = getPlayerFields()
	let numAi = getAiFields()
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

        getPlayedFields()

        //console.log(getMoves())

        if(getMoves()==9){
  	      console.log('game ended by player')
        } else {
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
	    //gamestate()
	    break
	  case fields[1].classList[0] !== 'ai' && fields[1].classList[0] !== 'player':
	    imgs[1].setAttribute('src', aiImg)
	    fields[1].setAttribute('class', 'ai')
	    fields[1].setAttribute('data-player', 'ai')
	    fields[1].setAttribute('data-counter', 1)
	    //gamestate()
	    break
	  case fields[2].classList[0] !== 'ai' && fields[2].classList[0] !== 'player':
	    imgs[2].setAttribute('src', aiImg)
	    fields[2].setAttribute('class', 'ai')
	    fields[2].setAttribute('data-player', 'ai')
	    fields[2].setAttribute('data-counter', 1)
	    //gamestate()
	    break
	  case fields[3].classList[0] !== 'ai' && fields[3].classList[0] !== 'player':
	    imgs[3].setAttribute('src', aiImg)
	    fields[3].setAttribute('class', 'ai')
	    fields[3].setAttribute('data-player', 'ai')
	    fields[3].setAttribute('data-counter', 1)
	    //gamestate()
	    break
	  case fields[4].classList[0] !== 'ai' && fields[4].classList[0] !== 'player':
	    imgs[4].setAttribute('src', aiImg)
	    fields[4].setAttribute('class', 'ai')
	    fields[4].setAttribute('data-player', 'ai')
	    fields[4].setAttribute('data-counter', 1)
	    //gamestate()
	    break
	  case fields[5].classList[0] !== 'ai' && fields[5].classList[0] !== 'player':
	    imgs[5].setAttribute('src', aiImg)
	    fields[5].setAttribute('class', 'ai')
	    fields[5].setAttribute('data-player', 'ai')
	    fields[5].setAttribute('data-counter', 1)
	    //gamestate()
	    break
	  case fields[6].classList[0] !== 'ai' && fields[6].classList[0] !== 'player':
	    imgs[6].setAttribute('src', aiImg)
	    fields[6].setAttribute('class', 'ai')
	    fields[6].setAttribute('data-player', 'ai')
	    fields[6].setAttribute('data-counter', 1)
	    //gamestate()
	    break
	  case fields[7].classList[0] !== 'ai' && fields[7].classList[0] !== 'player':
	    imgs[7].setAttribute('src', aiImg)
	    fields[7].setAttribute('class', 'ai')
	    fields[7].setAttribute('data-player', 'ai')
	    fields[7].setAttribute('data-counter', 1)
	    //gamestate()
	    break
	  case fields[8].classList[0] !== 'ai' && fields[8].classList[0] !== 'player':
	    imgs[8].setAttribute('src', aiImg)
	    fields[8].setAttribute('class', 'ai')
	    fields[8].setAttribute('data-player', 'ai')
	    fields[8].setAttribute('data-counter', 1)
	    //gamestate()
	    break
	  default:
	    console.log('run gameEval by ai')
	    break
  }
  
}
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    resetFields()
    setPlayerField()
  }
}