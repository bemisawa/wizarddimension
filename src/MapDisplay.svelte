<script lang="ts">
	import type { Map as MapType, GridSquareContents } from "./engine/types.js";

	import MapSpace from "./MapSpace.svelte";

	export let Map : MapType;
	export let EntityList;


</script>


<main>

	<div class="map">
		{#if Map && Map.grid }
			{#each Map.grid as MapRow, y}
				
				{#each MapRow as MapSpaceContents, x}
					
					<MapSpace contents={MapSpaceContents} x={x} y={y} />

				{/each}

			{/each}
		{/if}
	</div>
	
</main>


<style lang="scss">

	.map {
		// Grid stuff goes here
		width: 100%;
		height: auto;
	}




</style>