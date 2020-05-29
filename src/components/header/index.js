import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
    const { useState } = React;
    const [condition, setCondition] = useState(false);
    const [opendropdown, setCondition1] = useState(true);
    return (
        <header>
            <hr className="separador"></hr>
            <nav className="nav-mobile">
                <Link to="/">
                    <figure onClick={() => setCondition(!condition)}>
                        <img className="logo" src={require("../../assets/logo-cursinho.png")} alt=""></img>
                    </figure>
                </Link>
                <a href="#root" id="root" className="icon" onClick={() => setCondition(!condition)}>
                    <div className={condition ? "menu-hamburguer girar" : "menu-hamburguer"}>
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
            <nav className={condition ? "top-nav displayFlex" : "top-nav"} id="myLinks">
                <Link to="/"><p>HOME</p>
                    <hr className="extend"></hr>
                </Link>
                <Link to="/about"><p>QUEM SOMOS</p>
                    <hr className="extend"></hr>
                </Link>
                <Link to="/noticias"><p>NOTÍCIAS</p>
                    <hr className="extend"></hr>
                </Link>
                <Link to="/">
                    <figure className="logo-top-nav">
                        <img className="logo" src={require("../../assets/logo-cursinho.png")} alt=""></img>
                    </figure>
                </Link>
                <div href="#myLinks" className="container-dropdown" onClick={() => setCondition1(!opendropdown)}>
                    <a href="#myLinks">
                        <p>PROCESSO SELETIVOS</p>
                        <hr className="extend"></hr>
                    </a>
                    <div className={opendropdown ? "dropdown" : "dropdown displayFlex"}>
                        <hr></hr>
                        <Link to="/processo-seletivo">
                            <p>Alunos</p>
                        </Link>
                        <hr></hr>
                        <Link to="/faca-parte">
                            <p>Faça Parte</p>
                        </Link>
                        <hr></hr>
                    </div>
                </div>
                <Link to="apoie"><p>APOIE</p>
                    <hr className="extend"></hr>
                </Link>
                <Link to="/contato"><p>CONTATO</p>
                    <hr className="extend"></hr>
                </Link>
            </nav>
            <hr className="separador"></hr>
        </header>
    );
}