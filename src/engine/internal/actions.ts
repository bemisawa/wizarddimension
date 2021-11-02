export const Actions = {
	"run": function(context) {
		let updatedContext = Object.assign( {}, context );
		let selfID = context.currentEntityID;
		let actions = context.currentActions;

		// If actions are present
		while ( actions.length > 0 ) {
			updatedContext = runSingleAction( actions.shift(), updatedContext );
		}

		return updatedContext;
	}
}

function runSingleAction(currentAction : String, context) {
	let updatedContext = Object.assign( {}, context );
	let parsedAction = {};

	// Here's where we actually parse the actions
	parsedAction = parseActionIntoParts(currentAction);



	return updatedContext;
}

function parseActionIntoParts(currentAction : String) {
	let splitActionString = [];
	let parsedAction = {};

	return parsedAction;
}