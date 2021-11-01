import type { AI } from "../types.js";
// The AI typess are listed as keys there

export const AIs : Record<AI, function> = {
	"PC": function (entity = {}, ) {
		// Player character
		return false; // Player characters have their AI set to "PC", and their AI just returns false
	},
	"wanderer": function () {
		return true;
	},
	"defensive": function () {
		return true;
	},
	"aggressive": function () {
		return true;
	},
	"melee": function () {
		return true;
	}
};