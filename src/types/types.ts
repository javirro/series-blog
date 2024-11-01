export type Series = 'pokemon' | 'digimon' | 'dragonball'

export interface PokemonList {
  count: number
  next: string | null
  previous: string | null
  results: Array<{
    name: string
    url: string
  }>
}
