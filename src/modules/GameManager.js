export default class GameManager {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
    this.gameID = 'qJy8HJSS4vFuYrw4yTid';
    this.gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qJy8HJSS4vFuYrw4yTid/scores/';
    this.list = [];
  }

  addScore = async (name, score) => {
    await fetch(this.gameUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: name, score }),
    }).then(((response) => response.ok));
  }

  getScores = async () => {
    const data = await fetch(this.gameUrl);
    return data.json();
  }
}