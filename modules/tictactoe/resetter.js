const resetter = document.getElementById('tictactoe')
const fields = resetter.getElementsByTagName("td")
const imgs = resetter.getElementsByTagName("img")

const resetFields = () => {
  for (var i = 0; i < fields.length; i++){
    fields[i].setAttribute('data-player', 'blank')
    fields[i].setAttribute('data-counter', 0)
    fields[i].setAttribute('class', 'default')
  }
}
const resetImgs = () => {
  for (var i = 0; i < imgs.length; i++){
    imgs[i].setAttribute('src', 'http://localhost:3000/img/transparent.gif')
  }
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
  	resetFields()
  	resetImgs()
  }
}