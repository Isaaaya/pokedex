import { PokemonCard } from './index';

const PokemonCards = ({ pokemons, setSelectedPokemon, selectedPokemon }) => {
    return (
        <div className='grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-[20px]'>
            {pokemons && pokemons.map((pokemon, index) => {
                return (
                    <PokemonCard selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} {...pokemon} key={index} pokemon={pokemon} />
                )
            }
            )}
        </div>
    )

}

export default PokemonCards