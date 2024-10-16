import { PokemonType } from "$lib/enums/PokemonTypeEnum";
import mapStringToPokemonType from "./mapStringToPokemonType";


export default function mapPokemonTypeToIcon(typeString: String) {
    const type = mapStringToPokemonType(typeString)

    switch (type) {
        case PokemonType.BUG:
            return "/bug.png"
            break;
        case PokemonType.DARK:
            return "/dark.png"
            break;
        case PokemonType.DRAGON:
            return "/dragon.png"
            break;
        case PokemonType.ELECTRIC:
            return "/electric.png"
            break;
        case PokemonType.FAIRY:
            return "/fairy.png"
            break;
        case PokemonType.FIGHTING:
            return "/fighting.png"
            break;
        case PokemonType.FIRE:
            return "/fire.png"
            break;
        case PokemonType.FLYING:
            return "/flying.png"
            break;
        case PokemonType.GHOST:
            return "/ghost.png"
            break;
        case PokemonType.GROUND:
            return "/ground.png"
            break;
        case PokemonType.ICE:
            return "/ice.png"
            break;
        case PokemonType.NORMAL:
            return "/normal.png"
            break;
        case PokemonType.POISEN:
            return "/poisen.png"
            break;
        case PokemonType.PSYCHIC:
            return "/psychic.png"
            break;
        case PokemonType.ROCK:
            return "/rock.png"
            break;
        case PokemonType.STEEL:
            return "/steel.png"
            break;
        case PokemonType.WATER:
            return "/water.png"
            break;
        case PokemonType.GRASS:
            return "/grass.png"
            break;

        default:
          ""
      }
}