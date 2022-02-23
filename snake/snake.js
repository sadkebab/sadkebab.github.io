import { getInputDirection } from "./input.js"
import { GRID_SIZE } from './grid.js'

let food;
export let SNAKE_SPEED = 10

const snakeBody = [{ x: 11, y: 11, deg:0}]
let newSegments = 0

export function update() {
  addSegments()
  
  const inputDirection = getInputDirection()
  
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  
  if(snakeBody[0].x == GRID_SIZE && inputDirection.x == 1){
    snakeBody[0].x=1;
  }
  else if (snakeBody[0].x == 1 && inputDirection.x == -1){
    snakeBody[0].x=GRID_SIZE;
  }else{
    snakeBody[0].x += inputDirection.x
  }
  
  if(snakeBody[0].y == GRID_SIZE && inputDirection.y == 1){
    snakeBody[0].y=1;
  }
  else if (snakeBody[0].y == 1 && inputDirection.y == -1){
    snakeBody[0].y=GRID_SIZE;
  }else{
    snakeBody[0].y += inputDirection.y
  }
}

export function draw(gameBoard) {
  for(var i = 0; i<snakeBody.length; i++){
    var segment = snakeBody[i];
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    if(i==0){
      snakeElement.classList.add('head')
    } else if(i==snakeBody.length-1){
      snakeElement.classList.add('tail')
    }

    gameBoard.appendChild(snakeElement)
  }
}

export function expandSnake(amount) {
  newSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}

export function getSnakeHead() {
  return snakeBody[0]
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true })
}

export function setFood(newFood){
  food=newFood
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    if(snakeBody.length%8==0){
      SNAKE_SPEED++
    }
  }
  
  newSegments = 0
}