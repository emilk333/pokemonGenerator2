export interface PokemonSprite {
	front_default: string;
}

export interface Move {
	name: string;
}

export interface PokemonMove {
	move: Move;
}

export interface Type {
	name: string;
}

export interface PokemonType {
	type: Type;
}

export interface Pokemon {
	id: number;
	name: string;
	sprites: PokemonSprite;
	moves: PokemonMove[];
	types: PokemonType[];
}

