import './style.css';
import ScoreManager from './modules/ScoreManager.js';
import GameManager from './modules/GameManager';

/* UI elements */
const addNewScore = document.forms[0];
const btnReset = document.getElementById('reset-list-scores');

const gameManager = new GameManager();
// create a game
// gameManager.create("Looking for Game")

const scoreManager = new ScoreManager();

addNewScore.addEventListener('submit', (event) => {
  event.preventDefault();
  if (addNewScore.name.value.length === 0
    || addNewScore.score.value.length === 0) {
    return;
  }
  gameManager.addScore(addNewScore.name.value, parseInt(addNewScore.score.value));
  scoreManager.add(addNewScore.name.value, parseInt(addNewScore.score.value));
});

btnReset.addEventListener('click', async () => {
  const data = await gameManager.getScores();
  data.result.forEach((element) => {
    scoreManager.add(element.user, element.score);
  });
});

window.addEventListener('load', async () => {
  btnReset.click();
});
