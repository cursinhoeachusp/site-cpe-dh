import React from 'react';
import './style.css';

export default function Header() {
  const { useState } = React;
  const [condition, setCondition] = useState(false);
  const [opendropdown, setCondition1] = useState(true);
  return (
    <header>
    <hr className="separador"></hr>
    <nav className="nav-mobile">
        <a href="/">
            <figure onClick={() => setCondition(!condition)}>
                <img  className="logo" src={require("../../assets/logo-cursinho.png")} alt=""></img>
            </figure>
        </a>
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
                <hr className="extend"></hr>
            </div>
        </a>
    </nav>
    <nav className={condition ? "top-nav displayFlex": "top-nav"} id="myLinks">
        <a href="/"><p>HOME</p>
        <hr className="extend"></hr>
        </a>
        <a href="/about"><p>QUEM SOMOS</p>
        <hr className="extend"></hr>
        </a>
        <a href="/noticias"><p>NOTÍCIAS</p> 
        <hr className="extend"></hr>
        </a>
        <a href="/">
            <figure className="logo-top-nav">
            <img className="logo" src={require("../../assets/logo-cursinho.png")} alt=""></img>
            </figure>
        </a>
        <div href="#myLinks" className="container-dropdown" onClick={() => setCondition1(!opendropdown)}>
            <a href="#myLinks">
            <p>PROCESSO SELETIVOS</p>
            <hr className="extend"></hr>
            </a>
            <div className={opendropdown ? "dropdown": "dropdown displayFlex"}>
                <hr></hr>
                <a href="/processo-seletivo">
                    <p>Alunos</p>
                </a>
                <hr></hr>
                <a href="/faca-parte">
                    <p>Faça Parte</p>
                </a>
                <hr></hr>
            </div>
        </div>
        <a href="apoie"><p>APOIE</p>
        <hr className="extend"></hr>
        </a>
        <a href="/contato"><p>CONTATO</p>
        <hr className="extend"></hr>
        </a>
    </nav>
    <hr className="separador"></hr>
</header>
  );
}