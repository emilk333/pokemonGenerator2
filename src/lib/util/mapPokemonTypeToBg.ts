import { PokemonType } from "$lib/enums/PokemonTypeEnum";
import mapStringToPokemonType from "./mapStringToPokemonType";


export default function mapPokemonTypeToBg(typeString: String) {
    const type = mapStringToPokemonType(typeString)

    switch (type) {
        case PokemonType.BUG:
            return "!bg-bug";
        case PokemonType.DARK:
            return "!bg-dark";
        case PokemonType.DRAGON:
            return "!bg-dragon";
        case PokemonType.ELECTRIC:
            return "!bg-electric";
        case PokemonType.FAIRY:
            return "!bg-fairy";
        case PokemonType.FIGHTING:
            return "!bg-fighting";
        case PokemonType.FIRE:
            return "!bg-fire";
        case PokemonType.FLYING:
            return "!bg-flying";
        case PokemonType.GHOST:
            return "!bg-ghost";
        case PokemonType.GROUND:
            return "!bg-ground";
        case PokemonType.ICE:
            return "!bg-ice";
        case PokemonType.NORMAL:
            return "!bg-normal";
        case PokemonType.POISEN:
            return "!bg-poisen";
        case PokemonType.PSYCHIC:
            return "!bg-psychic";
        case PokemonType.ROCK:
            return "!bg-rock";
        case PokemonType.STEEL:
            return "!bg-steel";
        case PokemonType.WATER:
            return "!bg-water";
        case PokemonType.GRASS:
            return "!bg-grass";
        default:
            return "";
    }
}