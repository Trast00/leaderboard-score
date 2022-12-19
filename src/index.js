import "./style.css";
import ScoreManager from "./modules/ScoreManager";

/* UI elements */
const addNewScore = document.forms[0]

const scoreManager = new ScoreManager()

addNewScore.addEventListener('submit', (event) => {
  event.preventDefault()
  if(addNewScore.name.value.length === 0 
    || addNewScore.score.value.length === 0){
      return
  }
  scoreManager.add(addNewScore.name.value, addNewScore.score.value)
})