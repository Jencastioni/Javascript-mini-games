let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', event => {
  switch (event.key) {
    // up to down is y axis
    case 'ArrowUp':
      // if y axis is anything but 0 (center of screen) it cannot go back on itself (if up, can't go right back down)
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break
     // left to right is x axis 
    case 'ArrowLeft':
      // if moving to the left cannot go back to the right, if going right cannot go back left
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break
  }
})

// function that returns current position of the snake with x,y coordinates
export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}
