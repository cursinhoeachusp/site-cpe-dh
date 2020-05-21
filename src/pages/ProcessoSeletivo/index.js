import React from 'react';

import './style.css';


export default function ProcessoSeletivo() {
  return (
    <div className="html">
      <input type="checkbox" name="grupo" id="principal" className="esconder" />

      <div className="body" id="body">

        <div className="conteudo-superior">
            
          <div className="cor-fundo azul flex-row">
            <div className="texto formatacao-texto">
              <h2>Ja Sonhou em ser o primeiro nos consursos?</h2>
              <span>Deixe de sonhar e acorde, venha para EACH!! O cursinho popular sem nenhum custo mais desejado de São Paulo, garanta sua vaga já</span>
            </div>

            <div className="seta">
              <div className="fundo-seta" id="botao-baixo">
                <label for="principal">
                <svg version="1.1" class="icone-seta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.011 512.011">
                  <g>
                    <g>
                      <path d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
                      s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
                      C514.096,145.416,514.096,131.933,505.755,123.592z"/>
                    </g>
                  </g>
                </svg>
                </label>
              </div>
            </div>
          </div>

          <div className="separacao laranja"></div>

        </div>

        <main class="conteudo-principal" id="principal">

          <section className="inscricoes flex-col">
            <article className="descricao flex-col">
              <h2 className="azul-escuro">PROCESSOS SELETIVOS</h2>
              <div className="barra laranja"></div>
            </article>

            <article className="processos-seletivos flex-row">  
              <div className="processo">
                <div className="cabecalho azul">
                  <h6>PROVA</h6>
                  <h2>01/01/2020</h2>
                  <h6><a href="#">veja mais detalhes</a></h6>
                </div>
                
                <div className="info-prova">
                  <ul>
                    <li className="impar"><strong className="azul-escuro">Inscrições:</strong> 01 a 09 de Janeiro</li>
                    <li><strong className="azul-escuro">Vagas:</strong> 20 vagas disponívies</li>
                    <li className="impar"><strong className="azul-escuro">Documentos:</strong> RG ou CPF</li>
                    <li><strong className="azul-escuro">Horario:</strong> 12:00 até as 17:00</li>
                    <li className="impar"><strong className="azul-escuro">Edital:</strong> veja mais sobre a prova</li>
                    <li className="botao bordar-redonda centro flex-row"><button>inscrever</button></li>
                  </ul>
                </div>
              </div>

              <div className="processo">
                <div className="cabecalho azul">
                  <h6>PROVA</h6>
                  <h2>01/01/2020</h2>
                  <h6><a href="#">veja mais detalhes</a></h6>
                </div>
                
                <div className="info-prova">
                  <ul>
                    <li className="impar"><strong className="azul-escuro">Inscrições:</strong> 01 a 09 de Janeiro</li>
                    <li>< strong className="azul-escuro">Vagas:</strong> 20 vagas disponívies</li>
                    <li className="impar"><strong className="azul-escuro">Documentos:</strong> RG ou CPF</li>
                    <li><strong className="azul-escuro">Horario:</strong> 12:00 até as 17:00</li>
                    <li className="impar"><strong className="azul-escuro">Edital:</strong> veja mais sobre a prova</li>
                    <li className="botao bordar-redonda centro flex-row"><button>inscrever</button></li>
                  </ul>
                </div>
              </div>
            
              <div className="processo">
                <div className="cabecalho azul">
                  <h6>PROVA</h6>
                  <h2>01/01/2020</h2>
                  <h6><a href="#">veja mais detalhes</a></h6>
                </div>
                
                <div className="info-prova">
                  <ul>
                    <li className="impar"><strong className="azul-escuro">Inscrições:</strong> 01 a 09 de Janeiro</li>
                    <li><strong className="azul-escuro">Vagas:</strong> 20 vagas disponívies</li>
                    <li className="impar"><strong className="azul-escuro">Documentos:</strong> RG ou CPF</li>
                    <li><strong className="azul-escuro">Horario:</strong> 12:00 até as 17:00</li>
                    <li className="impar"><strong className="azul-escuro">Edital:</strong> veja mais sobre a prova</li>
                    <li className="botao bordar-redonda centro flex-row"><button>inscrever</button></li>
                  </ul>
                </div>
              </div>
            </article>
          </section>
        </main>
      
      </div>
    </div>
  );
}