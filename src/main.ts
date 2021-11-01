import App from './App.svelte';

import { Engine } from "./engine/engine.js";
import { EntityList } from "./engine/entityList.js";
import { Map01 } from "./engine/map.js";

const app = new App({
	target: document.body,
	props: {
		Engine: Engine,
		EntityList: EntityList,
		Map: Map01
	}
});

export default app;