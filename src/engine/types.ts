

// Entities

export interface Entity {
	id: string,
	name: string,
	ai: AI,
	maxHP: number,
	HP: number,
	speed: number, // adds up to 1000
	activeTime: number, // between 0 and slightly over 1000
	movement: number, // Number of squares on the grid
	position: Point,	
}


// AI

// export interface AIList {
// 	[index: AI]: object
// }
// Use a Record<Key, Value> instead

export type AI = "PC" | "wanderer" | "defensive" | "aggressive" | "melee";



// Maps

export interface Point {
	x: number,
	y: number
}

export interface Map {
	grid: GridSquareContents[][]
}

export type GridSquareContents = "" | "WALL" | "HOLE";



// Engine

type TurnPart = "START" | "END"; // Non-PC entities have just a Start of turn.
// However, for PC entities, the Start of turn sets things up, and then 