import './style.css';
import ScoreManager from './modules/ScoreManager.js';
import GameManager from './modules/GameManager.js';

/* UI elements */
const addNewScore = document.forms[0];
const btnReset = document.getElementById('refresh-list-scores');

const gameManager = new GameManager();

const scoreManager = new ScoreManager();

addNewScore.addEventListener('submit', (event) => {
  event.preventDefault();
  if (addNewScore.name.value.length === 0
    || addNewScore.score.value.length === 0) {
    return;
  }
  const name = addNewScore.name.value;
  const score = parseInt(addNewScore.score.value, 10);
  gameManager.addScore(name, score);
  scoreManager.add(name, score);
});

btnReset.addEventListener('click', async () => {
  const data = await gameManager.getScores();
  scoreManager.list = [];
  document.getElementById('list-scores').innerHTML = '';
  data.result.forEach((element) => {
    scoreManager.add(element.user, element.score);
  });
});

window.addEventListener('load', async () => {
  btnReset.click();
});
