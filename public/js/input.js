let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

// add event listeners to the wasd keys so players can move the snake
window.addEventListener("keydown", e => {
	switch (e.key) {
		case "w":
			if (lastInputDirection.y !== 0) break;
			inputDirection = { x: 0, y: -1 };
			break;
		case "s":
			if (lastInputDirection.y !== 0) break;
			inputDirection = { x: 0, y: 1 };
			break;
		case "a":
			if (lastInputDirection.x !== 0) break;
			inputDirection = { x: -1, y: 0 };
			break;
		case "d":
			if (lastInputDirection.x !== 0) break;
			inputDirection = { x: 1, y: 0 };
			break;
	}
});

// simply retrieves the direction the player is going
export const getInputDirection = () => {
	lastInputDirection = inputDirection;

	return inputDirection;
};
