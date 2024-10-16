import getPokemon from "$lib/server/getPokemonService.js";
import getPokemons from "$lib/server/getPokemonsService";
import { MAX_POKEMON_ID } from "../../constants/Pokemon";

export async function load({ params }) { 
    const id = params.id ? parseInt(params.id) : 1
    const limitVar = 1

    const pokemons = await getPokemons(id, limitVar) 
    const pokemon = await getPokemon(pokemons.results[0]?.name ?? "") // TODO this can error if api change
    const randomId = Math.floor(Math.random() * MAX_POKEMON_ID)

    return {    
        pokemon: pokemon,
        pokemonId: id,
        randomId: randomId
    }
}

