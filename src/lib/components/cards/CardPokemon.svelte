<script lang="ts">
	import mapPokemonTypeToBg from "$lib/util/mapPokemonTypeToBg";
	import type { Pokemon } from "../../../types/IPokemon";
	import mapPokemonTypeToIcon from "../../util/mapPokemonTypeToIcon";
	import Image from "../images/Image.svelte";
  
    export let pokemon: Pokemon;
    
</script>

<article class="{mapPokemonTypeToBg(pokemon.types[0].type.name)} min-h-[125px] rounded-lg border-yellow border-[12px] w-[320px] p-3 flex items-center background-gradient-special">

    <section class="w-[60px]">
        <Image url={pokemon.sprites.front_default ?? ""} alt={pokemon.name ?? ""}/>
    </section>

    <section class="ml-2 flex flex-col">
        <div class="flex items-center">
            <div class="pr-1 flex">
                {#each pokemon.types as type}
                    <div class="w-6 h-6 p-0.5">
                        <img src={mapPokemonTypeToIcon(type?.type?.name ?? "")} alt="">
                    </div>
                {/each}
            </div>
    
            <h1 class="text-xl font-bold capitalize">{pokemon.name}</h1>
        </div>
    </section>
</article>