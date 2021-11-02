import { Actions } from './internal/actions.js';

type TurnPart = "start" | "end";
let turnPart : TurnPart = "start";


type Context = {
	entityList,
	map,
	actions,
	graph,
	turnList : String[],
	upcomingTurnsDisplay : String[],
	currentEntityID : String,
	currentEntityActions : String[]
}


export const Engine = {
	"init": function(entityList, map, actions) {
		// Set up the context
		let context : Context = {
			entityList,
			map,
			actions,
			graph: undefined, // Graph using graphlib
			turnList: [], // String[] = []; // A list of entity IDs
			upcomingTurnsDisplay: [], // For displaying the upcoming turns
			currentEntityID: "",
			currentEntityActions: []
		};
		return context;
	},
	"turn": function(context) {
		// Run through 
		let updatedContext = Object.assign({}, context);

		if ( turnPart === "start" ) {

			// If turnList[] is empty, populate it.
			// turnList[] will only contain the turns of the next entity or entities to act.
			if ( context.turnList.length === 0 ) {
				updatedContext = generateTurns(context);
			}

			updatedContext.upcomingTurnsDisplay = generateUpcomingTurnsDisplay(context);
			
			// If we're just working with the raw map, create the graph
			if ( context.graph === undefined ) {
				updatedContext.graph = generateBaseGraphFromMap(context.map);
			}
			
			// Get the current move.  If AI-controlled, we'll consult the AI.  If a Player Character (PC), we'll give the chance for the player to input commands.
			if ( context.currentEntityID !== "" ) {
				
			}

			// Change turnPart
			turnPart = "end";

			// Return the updated context with any changes
			return updatedContext;
		} else if ( turnPart === "end" ) {

			// Run any commands from the AI or Player
			if ( context.currentEntityID !== "" && context.currentEntityAction !== "" ) {
				updatedContext = runCommands(context);
			}

			// Reset the currentEntityAction
			updatedContext.currentEntityAction = "";

			// Set up the next turn
			updatedContext.currentEntityID = updatedContext.turnList.shift();
		
			// Change turnPart
			turnPart = "start";
			
			// Return the updated context with any changes
			return updatedContext;
		}

	},
	"run": function(context) {

	}
}


type turnRecord {
	id: String,
	activeTime: Number
}

function generateTurns(context) {
	let updatedContext = Object.assign({}, context);
	let unsortedNewTurns : turnRecord[] = [];
	let sortedNewTurns : turnRecord[] = [];
	let turnList : String[];

	for ( let entity of context.entityList ) {
		let id = entity.id; // Not updated, so entity.id is fine
		let speed = entity.speed; // Not updated, so entity.speed is fine
		context.entityList[id].activeTime += speed; // This we actually need to update, so we use the copy from context.entityList[id]
		if ( context.entityList[id].activeTime >= 1000 ) {
			unsortedNewTurns.push( {"id": id, activeTime: context.entityList[id].activeTime } ); // We're going to want to compare these, to see which is biggest
			context.entityList[id].activeTime -= 1000; // Then we reset this turn counter
		}
	}

	if ( unsortedNewTurns.length > 0 ) {

		
		// Sort the unsortedNewTurns into sortedNewTurns
		sortedNewTurns = unsortedNewTurns.sort( (a, b) => (a.activeTime > b.activeTime) ? 1 : -1 );
		
		//
		for ( let turnRecord of sortedNewTurns ) {
			turnList.push( turnRecord.id );
		}
		updatedContext.turnList = [...updatedContext.turnList, ...turnList]; // Just in case there's anything in the current turn listings
		// We might want to use this repeatedly with a copy of context to look at the upcoming turns.
	}

	return updatedContext;
}

function generateUpcomingTurnsDisplay(context) : String[] {
	let upcomingTurnsDisplay = [];
	let copyOfContext = Object.assign( {}, context );

	while ( upcomingTurnsDisplay.length < 10 ) {
		copyOfContext = generateTurns(copyOfContext);
	}

	upcomingTurnsDisplay = copyOfContext.upcomingTurnsDisplay;

	// One of the rare cases where we don't return context, because here we *don't* want to update it.
	return upcomingTurnsDisplay;
}

function generateBaseGraphFromMap(map) {

}

function runCommands(context) {
	let updatedContext = Object.assign({}, context);

	// Do the stuff
	if ( context.currentEntityID !== "" && context.currentEntityAction !== "" ) {
		updatedContext = Actions.run(context);
	}

	return updatedContext;
}