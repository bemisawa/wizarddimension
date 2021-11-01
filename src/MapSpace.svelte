<script lang="ts">
	import type { GridSquareContents } from "./engine/types.js";

	export let contents: GridSquareContents;
	export let x: number;
	export let y: number;

	let color = Math.floor(Math.random()*16777215).toString(16); // Set each one to a random color

	$: cssVarStyles = `--color:${color}`;
</script>



<div x={x} y={y} style="backgroundColor: {color}">
	{ contents }
</div>


<style lang="scss">

	div {
		display: inline-block;
		width: 100px;
		height: 100px;
		background-color: var(--color);
	}

	// X and Y code for Grid goes here


</style>