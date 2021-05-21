const GRID_SIZE = 21;

export const randomGridPosition = () => ({
	x: Math.floor(Math.random() * GRID_SIZE) + 1,
	y: Math.floor(Math.random() * GRID_SIZE) + 1,
});

// simply checks to see if the snake has hit the black lines or out of bounds
export const outSideGrid = position =>
	position.x < 1 ||
	position.x > GRID_SIZE ||
	position.y < 1 ||
	position.y > GRID_SIZE;
