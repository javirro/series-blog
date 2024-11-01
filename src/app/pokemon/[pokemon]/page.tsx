import PokemonIndividual from '@/components/Pokemon/PokemonIndividual/PokemonIndividual'

const PokemonIndividualPage = ({
  params,
}: {
  params: {
    pokemon: string
  }
}) => {
  const pokemon = params.pokemon
  return (
    <div>
      <h1>Pokemon Individual Page {pokemon}</h1>
      <PokemonIndividual pokemonName={pokemon} />
    </div>
  )
}

export default PokemonIndividualPage
