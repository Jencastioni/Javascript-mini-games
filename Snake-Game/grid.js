const gridSize = 21

// random grid position function for food
export function randomGridPosition() {
  return {
    // use mathfloor to round down to nearest integer and not a decimal from math random (1-20) then add 1 to make it 1-21
    x: Math.floor(Math.random() * gridSize) + 1,
    y: Math.floor(Math.random() * gridSize) + 1
  }
}

export function outsideGrid(position) {
  return (
    // if position is < 1 or > gridsize = off the grid
    position.x < 1 || position.x > gridSize ||
    position.y < 1 || position.y > gridSize
  )
}