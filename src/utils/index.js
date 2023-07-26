export const getTypeColor = (type) => {
    switch (type) {
        case 'normal': return 'bg-[#d9d9d9]'
        case 'rock': return 'bg-[#a38c21]'
        case 'water': return 'bg-[#4592c4]'
        case 'dragon': return 'bg-[#f06d56]'
        case 'fighting': return 'bg-[#c1121f]'
        case 'bug': return 'bg-[#787B00]'
        case 'grass': return 'bg-[#719f3f]'
        case 'dark': return 'bg-[#240046]'
        case 'flying': return 'bg-[#0D8892]'
        case 'ghost': return 'bg-[#7b62a3]'
        case 'electric': return 'bg-[#efd535]'
        case 'fairy': return 'bg-[#ffacc5]'
        case 'poison': return 'bg-[#b97fc9]'
        case 'steel': return 'bg-[#adb6c4]'
        case 'psychic': return 'bg-[#f366b9]'
        case 'unknown': return 'bg-[#a2a3bb]'
        case 'ground': return 'bg-[#714646]'
        case 'fire': return 'bg-[#fd7d24]'
        case 'ice': return 'bg-[#a9def9]'
        case 'shadow': return 'bg-[#2b2d42]'
        default: return 'bg-[#000814]'
    };
}

