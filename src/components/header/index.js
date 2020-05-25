import React from 'react';

import './style.css';

export default function Header() {
  const { useState } = React;
  const [condition, setCondition] = useState(false);
  return (
    <header>
    <hr class="separador"></hr>
    <nav className="nav-mobile">
        <figure onClick={() => setCondition(!condition)}>
            <img  className="logo" src={require("../../assets/logo-cursinho.png")} alt=""></img>
        </figure>
        <a href="#root" id="root" className="icon" onClick={() => setCondition(!condition)}>
            <div className={condition ? "menu-hamburguer girar": "menu-hamburguer"}>
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
    <nav className={condition ? "top-nav displayFlex": "top-nav"} id="myLinks">
        <a href="/"><p>HOME</p>
        <hr></hr>
        </a>
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
        <img className="logo" src={require("../../assets/logo-cursinho.png")} alt=""></img>
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