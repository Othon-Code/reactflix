import React from 'react';
import Logo from '../../assets/imagem/Logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
            <img  className="Logo" src={Logo} alt="AppFlix Logo" />
            </a>

        <Button as="a" className="ButtonLink" href="/">
             Novo vídeo
        </Button>

        </nav>
    );
}

export default Menu;