import { Link } from 'react-router-dom'

import './Header.css'


export default function Header(){
    return(
        <div className="cabecalho">
            <ul className=''>
                <li><Link to="/">Inicio</Link ></li>
                <li><Link to='/sobre'>Sobre</Link></li>
                <li><Link to='/contato'>Contato</Link></li>
               
            </ul>
        </div>
    )
}