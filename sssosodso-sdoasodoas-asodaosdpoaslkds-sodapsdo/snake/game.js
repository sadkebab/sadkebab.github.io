import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { wAction, aAction, sAction, dAction } from './input.js'

window.wAction = wAction;
window.aAction = aAction;
window.sAction = sAction;
window.dAction = dAction;

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if (gameOver) {
    if (confirm('Hai perso. Press ok per ricominciare oppure annulla per tornare al sito.')) {
      window.location = '/snake/'
    }else{
      window.location = '/'
    }
    return
  }

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkDeath() {
  gameOver = snakeIntersection()
}