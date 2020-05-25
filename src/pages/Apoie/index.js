import React from 'react';

import './style.css';

export default function Apoie() {
  return (
    <div className="tudoApoie">

      <div className="primeiraTela">
        <div className="doacoes">
          <h1>DO<svg width="25" height="25" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 0.804688L17.4023 17.5977H0.597656L9 0.804688Z" />
          </svg>ÇÕES</h1>
        </div>
        <div className="texto">
          Texto bonito sobre como todxs no cursinho são voluntários e qualquer valor na doação ajuda muito na execução das nossas atividades e ajuda a "transformar em realidade o sonho de entrar para a universidade."
        </div>
        <div className="divQuero">
          <a href="#queroContribuir">
            <button className="botaoQuero">Quero Contribuir</button>
          </a>
        </div>
      </div>

      <div className="precos" id="queroContribuir">
        <a href="https://www.google.com.br/" target="_blank">
          <div className="d200 doacao">
            R$ 200,00 Mensais
          </div>
        </a>
        <a href="https://www.google.com.br/" target="_blank">
          <div className="d100 doacao">
            R$ 100,00 Mensais
          </div>
        </a>
        <a href="https://www.google.com.br/" target="_blank">
          <div className="d50 doacao">
            R$ 50,00 Mensais
          </div>
        </a>
        <a href="https://www.google.com.br/" target="_blank">
          <div className="d25 doacao">
            R$ 25,00 Mensais
          </div>
        </a>
        <a href="https://www.google.com.br/" target="_blank">
          <div className="d10 doacao">
            R$ 10,00 Mensais
          </div>
        </a>
        <a href="https://www.google.com.br/" target="_blank">
          <div className="dUnica doacao">
            Doação Única
          </div>
        </a>
      </div>

    </div>
  );
}