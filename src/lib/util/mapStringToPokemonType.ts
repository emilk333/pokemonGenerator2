import { PokemonType } from "$lib/enums/PokemonTypeEnum";


export default function mapStringToPokemonType(type: String): PokemonType {
    switch (type) {
        case "bug":
            return PokemonType.BUG;
        case "dark":
            return PokemonType.DARK;
        case "dragon":
            return PokemonType.DRAGON;
        case "electric":
            return PokemonType.ELECTRIC;
        case "fairy":
            return PokemonType.FAIRY;
        case "fighting":
            return PokemonType.FIGHTING;
        case "fire":
            return PokemonType.FIRE;
        case "flying":
            return PokemonType.FLYING;
        case "ghost":
            return PokemonType.GHOST;
        case "ground":
            return PokemonType.GROUND;
        case "ice":
            return PokemonType.ICE;
        case "normal":
            return PokemonType.NORMAL;
        case "poison":
            return PokemonType.POISEN;
        case "psychic":
            return PokemonType.PSYCHIC;
        case "rock":
            return PokemonType.ROCK;
        case "steel":
            return PokemonType.STEEL;
        case "water":
            return PokemonType.WATER;
        case "grass":
            return PokemonType.GRASS;
        default:
            return PokemonType.NORMAL;
      }
}