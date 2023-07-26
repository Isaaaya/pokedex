import { useState } from 'react'
import { getTypeColor } from '../utils/index'

const FilterPokemons = ({ pokemonTypes, activeType, setActiveType, filterPokemonsByType }) => {
    const [showFilter, setShowFilter] = useState(false);

    return (
        <div className='w-[80%] max-sm:w-[95%]'>
            <button onClick={() => setShowFilter((prev) => !prev)} className='text-lg font-semibold'>Click here to filter by type</button>
            {showFilter && <div className='grid grid-cols-5 gap-[15px] max-sm:gap-[7px] mt-5 py-[20px]'>
                {pokemonTypes.map((type, index) => {
                    const color = getTypeColor(type.name)
                    return (
                        <button onClick={() => {
                            setActiveType(type.name);
                            filterPokemonsByType(type.name)
                        }} key={index} className={`${color} ${activeType === type.name && 'border-2 border-black'} text-white text-center py-1  rounded-xl font-semibold max-sm:text-xs`}>
                            <p className='capitalize'>{type.name}</p>
                        </button>)
                })}
                <div onClick={() => setActiveType('clear')} className='border-2 border-black text-white text-center py-1 rounded-xl font-semibold cursor-pointer bg-black min-w-[100px]'>
                    <p className='capitalize'>Clear Filter</p>
                </div>
            </div>}
        </div >
    )
}

export default FilterPokemons