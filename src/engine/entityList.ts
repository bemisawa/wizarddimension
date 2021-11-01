import type { Entity } from "./types.js";



export let EntityList: Record<string, Entity> = {
	"001": {
		id: "001",
		name: "",
		ai: "PC",
		maxHP: 30,
		HP: 30,
		speed: 127,
		movement: 3,
		position: {
			x: 0,
			y: 0
		}
	},
	"002": {
		id: "002",
		name: "",
		ai: "wanderer",
		maxHP: 10,
		HP: 10,
		speed: 110,
		movement: 1,
		position: {
			x: 4,
			y: 5
		}
	}
};