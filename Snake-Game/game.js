import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
// game must be played when page is loaded, becomes true if snake heads goes outside grid or hits self
let gameOver = false
// passing gameboard into draw snake function
const gameBoard = document.getElementById('game-board')



function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location = '/'
    }
    return
  }
  // requestAnimationFrame tells browser that you want an animation and requests that the browser calls a specified function to update an animation before the next repaint. 
  // takes a callback (main) as an argument to be invoked before the repaint.
  window.requestAnimationFrame(main)

  // instead of firing every millisecond, snake moves 2 squares per second allowing main function to run again
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / snakeSpeed) return

  // currentTime gives Timestamp, setting last render to be current timr
  lastRenderTime = currentTime
  
  update()
  draw()
}
// starts loop of animation
window.requestAnimationFrame(main)

// GAME LOGIC

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ' '
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

// function to end the game 
function checkDeath() {
  // game ends if the snake head goes outside the grid or if the snake head hits itself
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}