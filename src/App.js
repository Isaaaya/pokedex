import { useState, useEffect } from 'react'
import axios from 'axios'
import { PokemonsList, FilterPokemons, PokemonDetailsCard } from './components/index'

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon/?limit=12');
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [activeType, setActiveType] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [pokemonDetails, setPokemonDetails] = useState({});

  const getPokemons = async () => {
    const response = await axios(loadMore);
    setLoadMore(response.data.next);
    response.data.results.map(async (pokemon) => {

      await axios(pokemon.url)
        .then((res) => {
          setIsLoading(true)
          setAllPokemons((currentPokemons) => [...currentPokemons, res.data]);
          setPokemons((currentPokemons) => [...currentPokemons, res.data])
        })
        .then(() => setIsLoading(false))
        .catch((error) => console.log(error))
    })
  };

  const filterPokemonsByType = (pokemonType) => {
    if (pokemonType === 'clear') setPokemons(allPokemons);
    else {
      const filteredPokemons = [];
      for (const pokemon of allPokemons) {
        for (const item of pokemon.types) {
          if (item.type.name === pokemonType) filteredPokemons.push(pokemon)
        }
      }
      setPokemons(filteredPokemons);
    }
  }

  const getPokemonTypes = async () => {
    axios.get('https://pokeapi.co/api/v2/type?limit=999')
      .then((res) => setPokemonTypes(res.data.results))
  };

  const getPokemonDetails = (selectedPokemon) => {
    console.log(selectedPokemon)
    if (selectedPokemon.name) {
      const types = [];

      for (const item of selectedPokemon.types) types.push(item.type.name)

      const pokemonDetails = {
        name: selectedPokemon.name,
        id: selectedPokemon.id,
        types,
        attack: selectedPokemon.stats[1].base_stat,
        defense: selectedPokemon.stats[2].base_stat,
        hp: selectedPokemon.stats[0].base_stat,
        specialAttack: selectedPokemon.stats[3].base_stat,
        specialDefense: selectedPokemon.stats[4].base_stat,
        speed: selectedPokemon.stats[5].base_stat,
        weight: selectedPokemon.weight,
        totalMoves: selectedPokemon.moves.length,
      }

      setPokemonDetails(pokemonDetails);
    }

  }


  useEffect(() => {
    getPokemonDetails(selectedPokemon)
  }, [selectedPokemon])

  useEffect(() => {
    getPokemons();
    getPokemonTypes();
  }, [])

  useEffect(() => {
    if (activeType) filterPokemonsByType(activeType);
  }, [activeType, allPokemons])


  return (
    <div className="flex flex-col items-center py-[80px] gap-[20px] w-[90%] m-[auto]">
      <div className="border-[1.5px] border-black px-[140px] py-2 text-4xl max-sm:px-[50px]">
        <h1>Pokedex</h1>
      </div>
      {!isLoading ? (<>
        <FilterPokemons activeType={activeType} setActiveType={setActiveType} pokemonTypes={pokemonTypes} filterPokemonsByType={filterPokemonsByType} />
        <div className='flex w-[85%] max-sm:w-[100%]justify-between'>
          <div className='w-1/2'>
            <PokemonsList pokemons={pokemons} setSelectedPokemon={setSelectedPokemon} selectedPokemon={selectedPokemon} />
            <button onClick={getPokemons} className='bg-sky-500 text-white font-semibold py-3 rounded-lg text-lg w-[100%] max-sm:w-[85%] mt-[25px] px-[10px]'>Load More</button>
          </div>
          {pokemonDetails.name && <PokemonDetailsCard image={selectedPokemon.sprites.front_default} {...pokemonDetails} />}
        </div>
      </>) : (<p>Loading...</p>)}
    </div>
  );
}

export default App;
