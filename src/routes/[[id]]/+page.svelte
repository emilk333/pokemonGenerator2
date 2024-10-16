
<script lang="ts">
	import { navigating } from "$app/stores";
	import CardPokemon from "$lib/components/cards/CardPokemon.svelte";
	import CardPokemonFrame from "$lib/components/cards/CardPokemonFrame.svelte";
	import SkeletonImageText from "$lib/components/skeleton/SkeletonImage+Text.svelte";	
	
	export let data;
	$: ({ pokemon, pokemonId, randomId } = data);
	$: linkDisableClass = $navigating ? 'opacity-50 pointer-events-none' : '';

</script>

<div class="space-y-4">
	
	{#if $navigating} 
		<CardPokemonFrame wrappedComponent={SkeletonImageText}/>
	{:else}
		<CardPokemon pokemon={pokemon}/>
	{/if}

	<div class="flex flex-wrap justify-center gap-4">
		<a class="{linkDisableClass} relative" href={`${pokemonId - 1}`}>
			<span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
			<span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">Previous</span>
		</a>
		<a class="{linkDisableClass} relative" href={`${randomId}`}>
			<span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
			<span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">Randomize!</span>
		</a> 
		<a class="{linkDisableClass} relative" href={`${pokemonId + 1}`}>
			<span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
			<span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">Next</span>
		</a>
	</div>
	
</div>

