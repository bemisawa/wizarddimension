<script lang="ts">
	import type { Map, Entity } from "./engine/types.js";

	import MapDisplay from "./MapDisplay.svelte";
	import UI from "./UI.svelte";

	export let Engine: object;
	export let Map: Map;
	export let EntityList: Record<string, Entity>;
</script>

<main>
	<h1>Wizard Dimension, v0.1 – Svelte</h1>
	
	<MapDisplay Map={Map} EntityList />
	<UI />

	

</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>