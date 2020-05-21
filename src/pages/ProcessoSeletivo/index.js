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
            <label for="principal">
              <div className="fundo-seta" id="botao-baixo">
                
                <svg version="1.1" class="icone-seta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.011 512.011">
                  <g>
                    <g>
                      <path d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
                      s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
                      C514.096,145.416,514.096,131.933,505.755,123.592z"/>
                    </g>
                  </g>
                </svg>
                
              </div>
              </label>
            </div>
          </div>

          <div className="separacao laranja"></div>

        </div>

        <main class="conteudo-principal" id="principal">

          <section className="inscricoes flex-col">
            <article className="descricao flex-col">
              <h2 className="titulo-secao azul-escuro">PROCESSOS SELETIVOS</h2>
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

          <section className="container-dicas"> 
            <article className="titulo-dica">
              <h2 className="titulo-secao azul-escuro">DICAS E AVISOS</h2>
              <p>Para se preparar bem, separamos alguns dicas especias para você</p>
            </article>

            <article className="dicas-provas flex-row">
              <div className="dica flex-row">
                <div className="container-icone-pai">
                  <div className="container-icone">
                    <svg version="1.1" className="icone-dica" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.891 438.891">
                      <g>
                        <g>
                          <g>
                            <path d="M347.968,57.503h-39.706V39.74c0-5.747-6.269-8.359-12.016-8.359h-30.824c-7.314-20.898-25.6-31.347-46.498-31.347
                              c-20.668-0.777-39.467,11.896-46.498,31.347h-30.302c-5.747,0-11.494,2.612-11.494,8.359v17.763H90.923
                              c-23.53,0.251-42.78,18.813-43.886,42.318v299.363c0,22.988,20.898,39.706,43.886,39.706h257.045
                              c22.988,0,43.886-16.718,43.886-39.706V99.822C390.748,76.316,371.498,57.754,347.968,57.503z M151.527,52.279h28.735
                              c5.016-0.612,9.045-4.428,9.927-9.404c3.094-13.474,14.915-23.146,28.735-23.51c13.692,0.415,25.335,10.117,28.212,23.51
                              c0.937,5.148,5.232,9.013,10.449,9.404h29.78v41.796H151.527V52.279z M370.956,399.185c0,11.494-11.494,18.808-22.988,18.808
                              H90.923c-11.494,0-22.988-7.314-22.988-18.808V99.822c1.066-11.964,10.978-21.201,22.988-21.42h39.706v26.645
                              c0.552,5.854,5.622,10.233,11.494,9.927h154.122c5.98,0.327,11.209-3.992,12.016-9.927V78.401h39.706
                              c12.009,0.22,21.922,9.456,22.988,21.42V399.185z"/>
                            <path d="M179.217,233.569c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437,31.869l-14.106-14.629
                              c-3.919-4.131-10.425-4.363-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                              c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                              C179.628,233.962,179.427,233.761,179.217,233.569z"/>
                            <path d="M329.16,256.034H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                              c5.771,0,10.449-4.678,10.449-10.449S334.931,256.034,329.16,256.034z"/>
                            <path d="M179.217,149.977c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437,31.869l-14.106-14.629
                              c-3.919-4.131-10.425-4.364-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                              c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                              C179.628,150.37,179.427,150.169,179.217,149.977z"/>
                            <path d="M329.16,172.442H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                              c5.771,0,10.449-4.678,10.449-10.449S334.931,172.442,329.16,172.442z"/>
                            <path d="M179.217,317.16c-3.919-4.131-10.425-4.363-14.629-0.522l-33.437,31.869l-14.106-14.629
                              c-3.919-4.131-10.425-4.363-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                              c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                              C179.628,317.554,179.427,317.353,179.217,317.16z"/>
                            <path d="M329.16,339.626H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                              c5.771,0,10.449-4.678,10.449-10.449S334.931,339.626,329.16,339.626z"/>
                          </g>
                        </g>
                      </g>

                    </svg>

                  </div>
                </div>
                <div className="texto-dica">
                  <h3 className="azul-escuro">LISTE TUDO</h3>
                  <p>Monte uma rotina de estudos baseado no edital na prova.</p>
                </div>
              </div>

              <div className="dica flex-row">
                <div className="container-icone-pai">
                  <div className="container-icone">
                    <svg version="1.1" className="icone-dica" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.891 438.891">
                      <g>
                        <g>
                          <g>
                            <path d="M347.968,57.503h-39.706V39.74c0-5.747-6.269-8.359-12.016-8.359h-30.824c-7.314-20.898-25.6-31.347-46.498-31.347
                              c-20.668-0.777-39.467,11.896-46.498,31.347h-30.302c-5.747,0-11.494,2.612-11.494,8.359v17.763H90.923
                              c-23.53,0.251-42.78,18.813-43.886,42.318v299.363c0,22.988,20.898,39.706,43.886,39.706h257.045
                              c22.988,0,43.886-16.718,43.886-39.706V99.822C390.748,76.316,371.498,57.754,347.968,57.503z M151.527,52.279h28.735
                              c5.016-0.612,9.045-4.428,9.927-9.404c3.094-13.474,14.915-23.146,28.735-23.51c13.692,0.415,25.335,10.117,28.212,23.51
                              c0.937,5.148,5.232,9.013,10.449,9.404h29.78v41.796H151.527V52.279z M370.956,399.185c0,11.494-11.494,18.808-22.988,18.808
                              H90.923c-11.494,0-22.988-7.314-22.988-18.808V99.822c1.066-11.964,10.978-21.201,22.988-21.42h39.706v26.645
                              c0.552,5.854,5.622,10.233,11.494,9.927h154.122c5.98,0.327,11.209-3.992,12.016-9.927V78.401h39.706
                              c12.009,0.22,21.922,9.456,22.988,21.42V399.185z"/>
                            <path d="M179.217,233.569c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437,31.869l-14.106-14.629
                              c-3.919-4.131-10.425-4.363-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                              c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                              C179.628,233.962,179.427,233.761,179.217,233.569z"/>
                            <path d="M329.16,256.034H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                              c5.771,0,10.449-4.678,10.449-10.449S334.931,256.034,329.16,256.034z"/>
                            <path d="M179.217,149.977c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437,31.869l-14.106-14.629
                              c-3.919-4.131-10.425-4.364-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                              c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                              C179.628,150.37,179.427,150.169,179.217,149.977z"/>
                            <path d="M329.16,172.442H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                              c5.771,0,10.449-4.678,10.449-10.449S334.931,172.442,329.16,172.442z"/>
                            <path d="M179.217,317.16c-3.919-4.131-10.425-4.363-14.629-0.522l-33.437,31.869l-14.106-14.629
                              c-3.919-4.131-10.425-4.363-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                              c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                              C179.628,317.554,179.427,317.353,179.217,317.16z"/>
                            <path d="M329.16,339.626H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                              c5.771,0,10.449-4.678,10.449-10.449S334.931,339.626,329.16,339.626z"/>
                          </g>
                        </g>
                      </g>

                    </svg>

                  </div>
                </div>
                <div className="texto-dica">
                  <h3 className="azul-escuro">LISTE TUDO</h3>
                  <p>Monte uma rotina de estudos baseado no edital na prova.</p>
                </div>
              </div>
           
              <div className="dica flex-row">
                <div className="container-icone-pai">
                  <div className="container-icone">
                    <svg version="1.1" className="icone-dica" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.891 438.891">
                      <g>
                        <g>
                          <g>
                            <path d="M347.968,57.503h-39.706V39.74c0-5.747-6.269-8.359-12.016-8.359h-30.824c-7.314-20.898-25.6-31.347-46.498-31.347
                              c-20.668-0.777-39.467,11.896-46.498,31.347h-30.302c-5.747,0-11.494,2.612-11.494,8.359v17.763H90.923
                              c-23.53,0.251-42.78,18.813-43.886,42.318v299.363c0,22.988,20.898,39.706,43.886,39.706h257.045
                              c22.988,0,43.886-16.718,43.886-39.706V99.822C390.748,76.316,371.498,57.754,347.968,57.503z M151.527,52.279h28.735
                              c5.016-0.612,9.045-4.428,9.927-9.404c3.094-13.474,14.915-23.146,28.735-23.51c13.692,0.415,25.335,10.117,28.212,23.51
                              c0.937,5.148,5.232,9.013,10.449,9.404h29.78v41.796H151.527V52.279z M370.956,399.185c0,11.494-11.494,18.808-22.988,18.808
                              H90.923c-11.494,0-22.988-7.314-22.988-18.808V99.822c1.066-11.964,10.978-21.201,22.988-21.42h39.706v26.645
                              c0.552,5.854,5.622,10.233,11.494,9.927h154.122c5.98,0.327,11.209-3.992,12.016-9.927V78.401h39.706
                              c12.009,0.22,21.922,9.456,22.988,21.42V399.185z"/>
                            <path d="M179.217,233.569c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437,31.869l-14.106-14.629
                              c-3.919-4.131-10.425-4.363-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                              c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                              C179.628,233.962,179.427,233.761,179.217,233.569z"/>
                            <path d="M329.16,256.034H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                              c5.771,0,10.449-4.678,10.449-10.449S334.931,256.034,329.16,256.034z"/>
                            <path d="M179.217,149.977c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437,31.869l-14.106-14.629
                              c-3.919-4.131-10.425-4.364-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                              c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                              C179.628,150.37,179.427,150.169,179.217,149.977z"/>
                            <path d="M329.16,172.442H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                              c5.771,0,10.449-4.678,10.449-10.449S334.931,172.442,329.16,172.442z"/>
                            <path d="M179.217,317.16c-3.919-4.131-10.425-4.363-14.629-0.522l-33.437,31.869l-14.106-14.629
                              c-3.919-4.131-10.425-4.363-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135
                              c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025
                              C179.628,317.554,179.427,317.353,179.217,317.16z"/>
                            <path d="M329.16,339.626H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16
                              c5.771,0,10.449-4.678,10.449-10.449S334.931,339.626,329.16,339.626z"/>
                          </g>
                        </g>
                      </g>

                    </svg>

                  </div>
                </div>
                <div className="texto-dica">
                  <h3 className="azul-escuro">LISTE TUDO</h3>
                  <p>Monte uma rotina de estudos baseado no edital na prova.</p>
                </div>
              </div>

              
            </article>
          </section>
        </main>
      
      </div>
    </div>
  );
}