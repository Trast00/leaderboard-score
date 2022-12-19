
export default class ScoreManager {
  constructor() {
    this.list = []
  }

  add = (name, value) => {
    this.list.push({'value': value, 'name': name})
    this.display({'value': value, 'name': name})
  } 

  display = (score) => {
    const liScore = document.createElement('li')
    liScore.classList.add('score')
    liScore.textContent = `${score.name}: ${score.value}`

    const ulListScore = document.getElementById('list-scores');
    ulListScore.append(liScore)
  }

}