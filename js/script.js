import {
	SNAKE_SPEED,
	update as updateSnake,
	draw as drawSnake,
	getSnakeHead,
	snakeIntersection,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outSideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.querySelector("#game-board");

const main = currentTime => {
	if (gameOver) {
		if (confirm("You lost! Press okay to restart.")) {
			window.location = "/";
		}
		return;
	}

	// making a infinite game loop so the page keeps rendering
	window.requestAnimationFrame(main);
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

	if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
	lastRenderTime = currentTime;

	updateSnake();
	updateFood();
	checkDeath();
	drawSnake(gameBoard);
	drawFood(gameBoard);
};

const checkDeath = () => {
	//Function that checks to see if player snake died
	gameOver = outSideGrid(getSnakeHead()) || snakeIntersection();
};

// start render
window.requestAnimationFrame(main);
