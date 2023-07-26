import React from 'react'

const PokemonDetailsCard = ({ name, id, types, attack, defense, hp, specialAttack, specialDefense, speed, weight, totalMoves, image }) => {
    const pokemonQualities = [
        {
            title: 'Type',
            value: types,
        },
        {
            title: 'Attack',
            value: attack,
        },
        {
            title: 'Defense',
            value: defense,
        },
        {
            title: 'HP',
            value: hp,
        },
        {
            title: 'SP Attack',
            value: specialAttack,
        }, {
            title: 'SP Defense',
            value: specialDefense,
        },
        {
            title: 'Speed',
            value: speed,
        },
        {
            title: 'Weight',
            value: weight,
        },
        {
            title: 'Total moves',
            value: totalMoves,
        },
    ]
    return (
        <div className='sticky top-20 border-2 border-black capitalize h-fit max-sm:w-1/2 w-[265px] px-[15px] max-sm:px-[10px] mt-[283px] md:ml-[70px] text-center pb-[20px]'>
            <div className='relative max-sm:h-[120px] h-[200px] max-w-[230px] border-zinc-400 border-2 mt-[13px] m-auto flex justify-center items-center overflow-hidden'>
                <img src={image} alt={name} />
            </div>
            <h2 className='text-2xl font-bold m-[15px] max-sm:text-lg'>{name} #{String(id).padStart(3, '0')}</h2>
            <div>
                {pokemonQualities.map((quality, index) => (
                    <div key={index} className={`flex items-center min-h-[27px] border-black border max-sm:text-xs ${index !== 0 && 'border-t-0'}`}>
                        <div className='w-[70%] text-center flex items-center justify-center'>{quality.title}</div>
                        <div className='w-[30%] max-sm:w-[35%] text-center border-black border-l-[1px]'>{typeof quality.value === 'number' ? quality.value : types.map((type) => `${type} `)}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PokemonDetailsCard