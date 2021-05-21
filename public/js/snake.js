import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

// updates the snake location
export const update = () => {
	addSegments();
	const inputDirection = getInputDirection();

	for (let i = snakeBody.length - 2; i >= 0; i--) {
		snakeBody[i + 1] = { ...snakeBody[i] };
	}

	snakeBody[0].x += inputDirection.x;
	snakeBody[0].y += inputDirection.y;
};

// this function draws the snake and set its position on the board
export const draw = gameBoard => {
	gameBoard.innerHTML = "";

	snakeBody.forEach(segment => {
		const snakeElement = document.createElement("div");
		snakeElement.style.gridRowStart = segment.y;
		snakeElement.style.gridColumnStart = segment.x;
		snakeElement.classList.add("snake");
		gameBoard.appendChild(snakeElement);
	});
};

// a function that allows the expansion of the snake
export const expandSnake = amount => (newSegments += amount);

//
export const onSnake = (position, { ignoreHead = false } = {}) =>
	snakeBody.some((segment, index) => {
		if (ignoreHead && index === 0) return false;
		return equalPositions(segment, position);
	});

// simply gets the position of the snake head
export const getSnakeHead = () => snakeBody[0];

// simply retrieve the location of the snakebody
export const snakeIntersection = () =>
	onSnake(snakeBody[0], { ignoreHead: true });

// checks to see if the snake basically eats the food
const equalPositions = (pos1, pos2) => pos1.x === pos2.x && pos1.y === pos2.y;

// add more body to the snake if the snake ate
const addSegments = () => {
	for (let i = 0; i < newSegments; i++) {
		snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
	}

	newSegments = 0;
};
