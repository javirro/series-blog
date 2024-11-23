import PokemonIndividual from '@/components/Pokemon/PokemonIndividual/PokemonIndividual'


interface PageProps {
  params: Promise<{ pokemon: string }>
}
const PokemonIndividualPage = async  ({params}: PageProps) => {
  const pokemon = (await params).pokemon
  return (
    <div>
      <h1>Pokemon Individual Page {pokemon}</h1>
      <PokemonIndividual pokemonName={pokemon} />
    </div>
  )
}

export default PokemonIndividualPage
