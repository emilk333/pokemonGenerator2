export interface PokemonResult {
	url: string;
	name: string;
	image: string;
}

export interface Pokemons {
	count: number;
	next: string | null;
	previous: string | null;
	nextOffset: number | null;
	prevOffset: number | null;
	status: string;
	message: string;
	results: PokemonResult[];
}
