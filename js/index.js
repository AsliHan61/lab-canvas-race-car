let currentGame;
let currentCar;
document.getElementById('game-beard').style.display = 'none';
const myCanvas = document.getElementById('the-canvas');
const ctx = myCanvas.getContext('2d');



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    document.getElementById('game-board').style.display = 'block';
    currentGame = new Game();
    currentCar= new Car();
    currentGame.car = currentCar;
    currentGame.car.drawCar();
    updateCanvas();
  }
  function detectCollision(obstacle){
    return !((currentCar.y > obstacle.y + obstacle.height) ||
    (currentCar.x + currentCar.width < obstacle.x) ||
    (currentCar.x - current.width > obstacle.x + obstacle.width))
  }

  let obstacleFrequency = 0;
  function updateCanvas(){
    ctx.clearRect(0, 0, 500, 600);
    currentGame.car.drawCar();
    obstacleFrequency++;

    if (obstacleFrequency % 100 === 1) {
      let randomObstacleX = Math.floor(Math.random()* 450);
      let randomObstacleY = 0;
      let randomObstacleWidth = Math.floor(Math.random() * 50)+20;
      let randomObstacleHeight = Math.floor(Math.random()*50) +20;
      let newObstacle = new Obstacle(
        randomObstacleX,
        randomObstacleY,
        randomObstacleWidth,
        randomObstacleHeight);

        currentGame.obstacle.push(newObstacle);
    }
    for (let i =0; i < currentGame.obstacle.length; i++) {
      currentGame.obstacle[i].y += 1;
      currentGame.obstacle[i].drawObstacle();
      
      if (detectCollision(currentGame.obstacle[i])) {
        alert('Booom!')
        obstacleFrequency = 0;
        currentGame.score = 0;
        document.getElementById('score').innerHTML = 0;
        currentGame.obstacle = [];
        document.getElementById('game-beard').style.display = 'none';
      }
      if (currentGame.obstacle.length > 0 && currentGame.obstacle[i].y >= 600){
        currentGame.obstacle.splice(i, 1);
        currentGame.score++;
        document.getElementById('score').innerHTML = currentGame.score;
      } 
    }
    requestAnimationFrame(updateCanvas);
  }
};
