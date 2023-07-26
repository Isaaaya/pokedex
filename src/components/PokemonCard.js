import React from 'react'
import { getTypeColor } from '../utils/index'

const PokemonCard = ({ name, id, types, sprites, setSelectedPokemon, pokemon, selectedPokemon }) => {
    return (
        <div onClick={() => setSelectedPokemon(pokemon)} className={`border-[1.5px] border-black min-h-[200px] px-[10px] sm:px-[11px] text-center w-[85%] sm:w-[90%] pb-[35px] break-words ${selectedPokemon.id === id && 'shadow-xl border-[2.5px]'}`}>
            <div className='relative h-[110px] border-zinc-400 border-2 mt-[13px] m-auto flex justify-center items-center overflow-hidden'>
                <img src={sprites.front_default} alt={name} />
            </div>
            <h3 className='capitalize mt-[15px] font-bold'>{name}</h3>
            <div className='flex gap-[3px] pt-3 md:max-lg:flex-col'>
                {types.map((item, index) => {
                    const color = getTypeColor(item.type.name);
                    return (<div key={index} className={`${color} capitalize rounded-lg px-2 py-[2px] text-sm max-sm:text-xs w-min`}>{item.type.name}</div>)
                })}
            </div>
        </div>
    )
}

export default PokemonCard