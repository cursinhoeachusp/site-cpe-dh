import React from 'react';

import './style.css';

export default function Header() {
  return (
<header>
    <nav className="nav-mobile">
        <figure>
            <img  className="logo" src="" alt=""></img>
        </figure>
        <a href="">
            <div>
                <hr className="bar1"></hr>
                <hr className="bar2"></hr>
                <hr className="bar3"></hr>
            </div>
            <div className="menu-text">
                <span>
                    MENU           
                </span>
                <hr></hr>
            </div>
        </a>
    </nav>
    <nav id="myLinks">
        <a href="/about"><p>QUEM SOMOS</p>
        <hr></hr>
        </a>
        <a href="/processo-seletivo"><p>PROCESSO SELETIVO</p>
        <hr></hr>
        </a>
        <a href="/noticias"><p>NOTÍCIAS</p> 
        <hr></hr>
        </a>
        <figure className="logo-top-nav">
        <img className="logo" src="" alt=""></img>
        </figure>
        <a href="/apoie"><p>APOIE</p>
        <hr></hr>
        </a>
        <a href="/faca-parte"><p>FAÇA PARTE</p>
        <hr></hr>
        </a>
        <a href="/contato"><p>CONTATO</p>
        <hr></hr>
        </a>
    </nav>
    <hr className="separador"></hr>
</header>
  );
}