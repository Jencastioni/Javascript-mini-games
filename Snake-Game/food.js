import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
// expansion rate of snake is 1 block
const expansionRate = 2

export function update() {
  // checking to see if snake is on top of the food
  // if so, snake can "eat" it and expand
  if (onSnake(food)) {
    expandSnake(expansionRate)
    // once food is consumed, reset the food position to a random space on the board
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  // using while loop to make sure new position is not a position the snake is on
  // if food position is null or on snake already, get new food position on the grid
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}