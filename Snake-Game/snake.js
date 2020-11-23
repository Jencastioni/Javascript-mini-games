// import { getInputDirection } from "./input.js"

// export const SNAKE_SPEED = 4
// const snakeBody = [{ x: 11, y: 11 }]
// let newSegments = 0

// export function update() {
//   addSegments()

//   const inputDirection = getInputDirection()
//   for (let i = snakeBody.length - 2; i >= 0; i--) {
//     snakeBody[i + 1] = { ...snakeBody[i] }
//   }

//   snakeBody[0].x += inputDirection.x
//   snakeBody[0].y += inputDirection.y
// }

// export function draw(gameBoard) {
//   snakeBody.forEach(segment => {
//     const snakeElement = document.createElement('div')
//     snakeElement.style.gridRowStart = segment.y
//     snakeElement.style.gridColumnStart = segment.x
//     snakeElement.classList.add('snake')
//     gameBoard.appendChild(snakeElement)
//   })
// }

// export function expandSnake(amount) {
//   newSegments += amount
// }

// export function onSnake(position, { ignoreHead = false } = {}) {
//   return snakeBody.some((segment, index) => {
//     if (ignoreHead && index === 0) return false
//     return equalPositions(segment, position)
//   })
// }

// export function getSnakeHead() {
//   return snakeBody[0]
// }

// export function snakeIntersection() {
//   return onSnake(snakeBody[0], { ignoreHead: true })
// }

// function equalPositions(pos1, pos2) {
//   return pos1.x === pos2.x && pos1.y === pos2.y
// }

// function addSegments() {
//   for (let i = 0; i < newSegments; i++) {
//     snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
//   }

//   newSegments = 0
// }

import { getInputDirection } from "./input.js"

export const snakeSpeed = 5
// making snake body as x,y position in the center
const snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0

export function update() {
  addSegments()

  // imports from input.js
  const inputDirection = getInputDirection()
  // loop through every segment except the last segment because as it moves forward, the last segment disappears
  // snakeBody.length - 2 gives second to last element in the snake. start from bottom and work up
  // subtract 1 from snake body each time (i--)
  for (let i = snakeBody.length - 2; i >= 0; i--) { 
    // i+1 = last element
    // shifting entire snake to move forward to parent position
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
  
}

export function draw(gameBoard) {
  snakeBody.forEach(segment => {
    // goes into the game board at specific x, y element
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    gameBoard.appendChild(snakeElement)
    snakeElement.classList.add('snake')
    // add empty div onto gameboard for snakeElement
  })
}
// when snake consumes food, the snake expands by segments by number of our choice
export function expandSnake(amount) {
  newSegments += amount
}

// can't ignore head, must use head to consume food
export function onSnake(position, { ignoreHead = false } = {}) {
  // is a segment of the snake body on top of the food 
  // .some =  if any part of snake body meets the criteria
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    // if true, return equalPositions function
    return equalPositions(segment, position)
  })
}

// snake head = index 0 of snake body
export function getSnakeHead() {
  // location of first element of snakeBody
  return snakeBody[0]
}

// you can tell if the snake intersected itself if the head hits any part of the body
// starts at head, ignore the head because the head can't hit the head, only other parts of the snakeBody
export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(position1, position2) {
  // if 2 positions are the same, return truw
  return position1.x === position2.x && position1.y === position2.y
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    // push new element onto the end of snakeBody
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }

  newSegments = 0
}
