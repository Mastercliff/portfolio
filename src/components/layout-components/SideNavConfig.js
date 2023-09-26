import {FiGrid, FiLayers, FiPenTool, FiClipboard, FiAtSign, FiAward} from 'react-icons/fi';


const navMenuElements = [
    {
        title: 'Início',
        icon: FiGrid,
        selected : true,
        path: "#home",
    },
    {
        title: 'Projetos',
        icon: FiLayers,
        selected : false,
        path: "#projects",
    },
    {
        title: 'Habilidades',
        icon: FiPenTool,
        selected : false,
        path: "#home",
    },
    {
        title: 'Experiências',
        icon: FiClipboard,
        selected : false,
        path: "#home",
    },
    {
        title: 'Certificações',
        icon: FiAward,
        selected : false,
        path: "#home",
    },
    {
        title: 'Contato',
        icon: FiAtSign,
        selected : false,
        path: "#home",
    },
]


export default navMenuElements;