import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

// update food location
export const update = () => {
	if (onSnake(food)) {
		expandSnake(EXPANSION_RATE);
		food = getRandomFoodPosition();
	}
};

// draw and set position of food onto the gameboard
export const draw = gameBoard => {
	const foodElement = document.createElement("div");
	foodElement.style.gridRowStart = food.y;
	foodElement.style.gridColumnStart = food.x;
	foodElement.classList.add("food");
	gameBoard.appendChild(foodElement);
};

// set food position by randomizing
function getRandomFoodPosition() {
	let newFoodPosition;

	// a loop that contiously checks to make sure the food doesn't relocate anywhere on the snake
	while (newFoodPosition == null || onSnake(newFoodPosition)) {
		newFoodPosition = randomGridPosition();
	}
	return newFoodPosition;
}
