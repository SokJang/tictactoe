const tabl = document.getElementById('tictactoe')
const fields = tabl.getElementsByTagName("td")
const imgs = tabl.getElementsByTagName("img")

// reset
const resetFields = () => {
  for (let i = 0; i < fields.length; i++){
    fields[i].setAttribute('data-player', 'blank')
    fields[i].setAttribute('class', 'default')
  }
}
const resetImgs = () => {
  for (let i = 0; i < imgs.length; i++){
    imgs[i].setAttribute('src', 'http://localhost:3000/img/transparent.gif')
  }
}
// getter
let getPlayerFields = () => {
  let i = 0
  let player = document.querySelectorAll('.player');
  for(i; i < player.length; i++){
    i
    //playerFields.push(i)
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
// setter
let setPlayerField = () => {
  
  for(let i = 0; i< fields.length; i++){
    
    fields[i].addEventListener("click", function(){

      imgs[i].setAttribute('src', 'http://localhost:3000/img/cross.svg')
      this.setAttribute('class', 'player')
      this.setAttribute('data-player', 'player')
      let amountMoves = getMoves()
      this.setAttribute('data-counter', amountMoves)

    })
  }
}
let getMoves = () => {
	let numPlayer = getPlayerFields()
	let numAi = getAiFields()
	let amountMoves = numAi + numPlayer

	return amountMoves
}
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    resetFields()
    resetImgs()
    getPlayerFields()
    getAiFields()
    setPlayerField()
  }
}