const tabl = document.getElementById('tictactoe')
const tbod = tabl.getElementsByTagName('tbody')
const fields = tbod[0].getElementsByTagName("td")
const imgs = tbod[0].getElementsByTagName("img")
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
let checkAiWin = () => {
  let elAi = 'ai'
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
  /* 
    check for gamestate in played
    return true for win
    otherwise make the function visible for callback
  */

  switch(true) {
    case (played.indexOf(elAi) == 0) && (played.indexOf(elAi, 1) == 1) && (played.indexOf(elAi, 2) == 2):
      return true
      break
    case (played.indexOf(elAi, 3) == 3) && (played.indexOf(elAi, 4) == 4) && (played.indexOf(elAi, 5) == 5):
      return true
      break
    case (played.indexOf(elAi, 6) == 6) && (played.indexOf(elAi, 7) == 7) && (played.indexOf(elAi, 8) == 8):
      return true
      break
    case (played.indexOf(elAi) == 0) && (played.indexOf(elAi, 3) == 3) && (played.indexOf(elAi, 6) == 6):
      return true
      break
    case (played.indexOf(elAi, 1) == 1) && (played.indexOf(elAi, 4) == 4) && (played.indexOf(elAi, 7) == 7):
      return true
      break
    case (played.indexOf(elAi, 2) == 2) && (played.indexOf(elAi, 5) == 5) && (played.indexOf(elAi, 8) == 8):
      return true
      break
    case (played.indexOf(elAi) == 0) && (played.indexOf(elAi, 4) == 4) && (played.indexOf(elAi, 8) == 8):
      return true
      break
    case (played.indexOf(elAi, 2) == 2) && (played.indexOf(elAi, 4) == 4) && (played.indexOf(elAi, 6) == 6):
      return true
      break
    default:
      return checkAiWin
  }
}

let checkPlayerWin = () => {
  let elPlayer = 'player'
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

  /* 
    check for gamestate in played
    return true for win
    otherwise make the function visible for callback
  */
  switch(true) {
    case (played.indexOf(elPlayer) == 0) && (played.indexOf(elPlayer, 1) == 1) && (played.indexOf(elPlayer, 2) == 2):
      // row1
      return true
      break
    case (played.indexOf(elPlayer, 3) == 3) && (played.indexOf(elPlayer, 4) == 4) && (played.indexOf(elPlayer, 5) == 5):
      // row2
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
      return checkPlayerWin
  }
  
}
// setter
let setPlayerField = () => {
  for(let i = 0; i < fields.length; i++){
    
    fields[i].addEventListener("click", function(){
      
      if(fields[i].classList[0] != 'ai' || fields[i].classList[0] != 'player' ){
        imgs[i].src = plImg
        this.setAttribute('data-player', 'player')
        this.setAttribute('data-counter', 1)
        this.setAttribute('class', 'player')

        if(checkPlayerWin()==true){ // return true or false
          console.log('player won game')
        } 
        else {
          setAiField(checkAiWin)
        }
      }
    })
  }
}
let setAiField = (checkAiWin) => {
  switch (true) {
    case fields[0].classList[0] !== 'ai' && fields[0].classList[0] !== 'player':
      imgs[0].setAttribute('src', aiImg)
      fields[0].setAttribute('class', 'ai')
      fields[0].setAttribute('data-player', 'ai')
      fields[0].setAttribute('data-counter', 1)
      
      if (checkAiWin()==true) {
        console.log('ai won game')
      } 
      
      break
    case fields[1].classList[0] !== 'ai' && fields[1].classList[0] !== 'player':
      imgs[1].setAttribute('src', aiImg)
      fields[1].setAttribute('class', 'ai')
      fields[1].setAttribute('data-player', 'ai')
      fields[1].setAttribute('data-counter', 1)
      
      if(checkAiWin()==true){
        console.log('ai won game')
      }
      
      break
    case fields[2].classList[0] !== 'ai' && fields[2].classList[0] !== 'player':
      imgs[2].setAttribute('src', aiImg)
      fields[2].setAttribute('class', 'ai')
      fields[2].setAttribute('data-player', 'ai')
      fields[2].setAttribute('data-counter', 1)

      if (checkAiWin()==true) { 
        console.log('ai won the game')
      }
      
      break
    case fields[3].classList[0] !== 'ai' && fields[3].classList[0] !== 'player':
      imgs[3].setAttribute('src', aiImg)
      fields[3].setAttribute('class', 'ai')
      fields[3].setAttribute('data-player', 'ai')
      fields[3].setAttribute('data-counter', 1)

      if (checkAiWin()==true) { 
        console.log('ai won the game')
      }
     
      break
    case fields[4].classList[0] !== 'ai' && fields[4].classList[0] !== 'player':  
      imgs[4].setAttribute('src', aiImg)
      fields[4].setAttribute('class', 'ai')
      fields[4].setAttribute('data-player', 'ai')
      fields[4].setAttribute('data-counter', 1)

      if (checkAiWin()==true) { 
        console.log('ai won the game')
      }
      
      break
    case fields[5].classList[0] !== 'ai' && fields[5].classList[0] !== 'player':
      imgs[5].setAttribute('src', aiImg)
        fields[5].setAttribute('class', 'ai')
        fields[5].setAttribute('data-player', 'ai')
        fields[5].setAttribute('data-counter', 1)

      if (checkAiWin()==true) { 
        console.log('ai won the game')
      } 

      break
    case fields[6].classList[0] !== 'ai' && fields[6].classList[0] !== 'player':
      imgs[6].setAttribute('src', aiImg)
      fields[6].setAttribute('class', 'ai')
      fields[6].setAttribute('data-player', 'ai')
      fields[6].setAttribute('data-counter', 1)
    
      if (checkAiWin()==true) { 
        console.log('ai won the game')
      }

      break
    case fields[7].classList[0] !== 'ai' && fields[7].classList[0] !== 'player':
      imgs[7].setAttribute('src', aiImg)
      fields[7].setAttribute('class', 'ai')
      fields[7].setAttribute('data-player', 'ai')
      fields[7].setAttribute('data-counter', 1)

      if (checkAiWin()==true) { 
        console.log('ai won the game')
      }

      break
    case fields[8].classList[0] !== 'ai' && fields[8].classList[0] !== 'player':
      imgs[8].setAttribute('src', aiImg)
      fields[8].setAttribute('class', 'ai')
      fields[8].setAttribute('data-player', 'ai')
      fields[8].setAttribute('data-counter', 1)

      if (checkAiWin()==true) { 
        console.log('ai won the game')
      }
      break
    default:
      return setAiField
  }
  
}
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    resetFields()
    setPlayerField()
  }
}