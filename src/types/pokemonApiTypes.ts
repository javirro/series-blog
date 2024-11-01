export interface PokemonResponse {
  id: number
  name: string
  base_experience: number
  height: number
  weight: number
  order: number
  abilities: Ability[]
  forms: Form[]
  game_indices: GameIndex[]
  held_items: HeldItem[]
  location_area_encounters: string
  moves: Move[]
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
}

interface Ability {
  ability: NamedResource
  is_hidden: boolean
  slot: number
}

interface Form {
  name: string
  url: string
}

interface GameIndex {
  game_index: number
  version: NamedResource
}

interface HeldItem {
  item: NamedResource
  version_details: VersionDetail[]
}

interface VersionDetail {
  rarity: number
  version: NamedResource
}

interface Move {
  move: NamedResource
  version_group_details: VersionGroupDetail[]
}

interface VersionGroupDetail {
  level_learned_at: number
  move_learn_method: NamedResource
  version_group: NamedResource
}

interface Species {
  name: string
  url: string
}

interface Sprites {
  front_default: string
  front_shiny: string
  front_female?: string
  front_shiny_female?: string
  back_default?: string
  back_shiny?: string
  back_female?: string
  back_shiny_female?: string
  other?: OtherSprites
}

interface OtherSprites {
  dream_world?: { front_default?: string; front_female?: string }
  home?: { front_default?: string; front_shiny?: string; front_female?: string; front_shiny_female?: string }
  'official-artwork'?: { front_default?: string }
}

interface Stat {
  base_stat: number
  effort: number
  stat: NamedResource
}

interface Type {
  slot: number
  type: NamedResource
}

interface NamedResource {
  name: string
  url: string
}
