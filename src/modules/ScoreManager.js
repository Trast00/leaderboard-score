
export default class ScoreManager {
  constructor() {
    this.list = []
  }

  add = (name, value) => {
    const score = {'value': value, 'name': name}

    this.list.push(score)

    this.list = this.list.sort((a, b) => b.value - a.value)
    const index  = this.list.indexOf(score)

    this.display(score, index)
  } 

  display = (score, index=this.list.length) => {
    const liScore = document.createElement('li')
    liScore.classList.add('score')
    liScore.textContent = `${score.name}: ${score.value}`

    const ulListScore = document.getElementById('list-scores');

    if(index===this.list.length){
      ulListScore.append(liScore)
      return
    }

    //Order the list: Insert current Score at index (after the higher score)
    let currentIndex = index
    let currentli = ulListScore.firstChild
    while (currentIndex!=0){
      currentli = currentli.nextSibling
      currentIndex -= 1
    }
    ulListScore.insertBefore(liScore, currentli)
    //insertAfter(currentli, liScore)
    console.log(this.list)
  }

}