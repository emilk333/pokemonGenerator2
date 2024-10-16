import { QUERY_POKEMONS } from "../../graphql/queryPokemon";
import type { Pokemons } from "../../types/IPokemons";


export default async function getPokemons(offsetVar: number, limitVar: number): Promise<Pokemons> {

    const gqlVariables = {
        limit: limitVar,
        offset: offsetVar,
    };

    return fetch('https://graphql-pokeapi.graphcdn.app/', {
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: QUERY_POKEMONS,
            variables: gqlVariables,
        }),
            method: 'POST',
        })
        .then((res) => res.json())
        .then((res) => {
            return res.data.pokemons
        });
}