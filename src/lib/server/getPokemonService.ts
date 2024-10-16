import { QUERY_POKEMON } from "../../graphql/queryPokemon";
import type { Pokemon } from "../../types/IPokemon";


export default async function getPokemon(name: String): Promise<Pokemon> {
	const gqlVariables = {
		name
	};

	return fetch('https://graphql-pokeapi.graphcdn.app/', {
		credentials: 'omit',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: QUERY_POKEMON,
			variables: gqlVariables
		}),
		method: 'POST'
	})
		.then((res) => res.json())
		.then((res) => {
            return res.data.pokemon
        });
}
