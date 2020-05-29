import React from 'react';

import './style.css';
import './script.js';

export default function ProcessoSeletivo() {
  return (
    <div className="html">
      <input type="checkbox" name="grupo" id="principal" className="esconder" />

      <div className="body" id="body" data-escondido="false">

        <div className="conteudo-superior">
            
          <div className="cor-fundo azul flex-row">
            <div className="texto formatacao-texto">
              <h2>É estudante de baixa renda? Já se imaginou passando no vestibular?</h2>
              <span>Saiba que esse sonho não está tão distante, e estamos aqui para te ajudar nessa jornada. Somos um cursinho pré-vestibular
                    presencial gratuíto para alunos de baixa renda da zona leste de São Paulo. As únicas taxas são as de inscrição, para manutenção do processo
                    seletivo. A partir disso, sem pagamentos: de materiais, mensalidades, nada. Acompanhe nossos processos seletivos para alunos abaixo:
              </span>
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
                  <h2><data value="2020-1-20">20/01/2020</data></h2>
                  <h6><a href="#" className="detalhes">veja mais detalhes</a></h6>
                </div>
                
                <div className="info-prova">
                  <ul>
                    <li className="impar"><strong className="azul-escuro">Inscrições:</strong> 01 a 09 de Janeiro</li>
                    <li><strong className="azul-escuro">Vagas:</strong> 0 vagas disponívies</li>
                    <li className="impar"><strong className="azul-escuro">Documentos:</strong> RG ou CPF</li>
                    <li><strong className="azul-escuro">Horario:</strong> 12:00 até as 17:00</li>
                    <li className="impar"><strong className="azul-escuro">Status:</strong><span className="tempo"></span></li>
                    <li className="botao bordar-redonda centro flex-row"><button className="inscrever"></button></li>
                  </ul>
                </div>
              </div>

              <div className="processo">
                <div className="cabecalho azul">
                  <h6>PROVA</h6>
                  <h2><data value="2020-6-15">15/06/2020</data></h2>
                  <h6><a href="#" className="detalhes">veja mais detalhes</a></h6>
                </div>
                
                <div className="info-prova">
                  <ul>
                    <li className="impar"><strong className="azul-escuro">Inscrições:</strong> 05 a 10 de Junho</li>
                    <li>< strong className="azul-escuro">Vagas:</strong> 20 vagas disponívies</li>
                    <li className="impar"><strong className="azul-escuro">Documentos:</strong> RG ou CPF</li>
                    <li><strong className="azul-escuro">Horario:</strong> 12:00 até as 17:00</li>
                    <li className="impar"><strong className="azul-escuro">Status:</strong> <span className="tempo"></span></li>
                    <li className="botao bordar-redonda centro flex-row"><button className="inscrever"></button></li>
                  </ul>
                </div>
              </div>
            
              <div className="processo">
                <div className="cabecalho azul">
                  <h6>PROVA</h6>
                  <h2><data value="2020-11-10">10/11/2020</data></h2>
                  <h6><a href="#" className="detalhes">veja mais detalhes</a></h6>
                </div>
                
                <div className="info-prova">
                  <ul>
                    <li className="impar"><strong className="azul-escuro">Inscrições:</strong> 20 a 25 de Outubro</li>
                    <li><strong className="azul-escuro">Vagas:</strong> 20 vagas disponívies</li>
                    <li className="impar"><strong className="azul-escuro">Documentos:</strong> RG ou CPF</li>
                    <li><strong className="azul-escuro">Horario:</strong> 12:00 até as 17:00</li>
                    <li className="impar"><strong className="azul-escuro">Status:</strong> <span className="tempo"></span> </li>
                    <li className="botao bordar-redonda centro flex-row"><button className="inscrever"></button></li>
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
                  <svg className="icone-dica" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"> <g><path d="m88 456c-8.837 0-16-7.164-16-16v-374c0-36.393 29.607-66 66-66h286c8.837 0 16 7.164 16 16v368c0 8.836-7.163 16-16 16s-16-7.164-16-16v-352h-270c-18.748 0-34 15.252-34 34v374c0 8.836-7.163 16-16 16z"/><path d="m424 512h-280c-39.701 0-72-32.299-72-72s32.299-72 72-72h280c8.837 0 16 7.164 16 16s-7.163 16-16 16h-280c-22.056 0-40 17.944-40 40s17.944 40 40 40h280c8.837 0 16 7.164 16 16s-7.163 16-16 16z"/><path d="m424 456h-280c-8.837 0-16-7.164-16-16s7.163-16 16-16h280c8.837 0 16 7.164 16 16s-7.163 16-16 16z"/><path d="m160 400c-8.837 0-16-7.164-16-16v-368c0-8.836 7.163-16 16-16s16 7.164 16 16v368c0 8.836-7.163 16-16 16z"/></g></svg>

                  </div>
                </div>
                <div className="texto-dica">
                  <h3 className="azul-escuro">ESTUDE</h3>
                  <p>Estude com calma, sem se desgastar no processo.</p>
                </div>
              </div>
           
              <div className="dica flex-row">
                <div className="container-icone-pai">
                  <div className="container-icone">
                    <svg className="icone-dica" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 482.14 482.14" >
                      <g>
                        <path d="M142.024,310.194c0-8.007-5.556-12.782-15.359-12.782c-4.003,0-6.714,0.395-8.132,0.773v25.69
                          c1.679,0.378,3.743,0.504,6.588,0.504C135.57,324.379,142.024,319.1,142.024,310.194z"/>
                        <path d="M202.709,297.681c-4.39,0-7.227,0.379-8.905,0.772v56.896c1.679,0.394,4.39,0.394,6.841,0.394
                          c17.809,0.126,29.424-9.677,29.424-30.449C230.195,307.231,219.611,297.681,202.709,297.681z"/>
                        <path d="M315.458,0H121.811c-28.29,0-51.315,23.041-51.315,51.315v189.754h-5.012c-11.418,0-20.678,9.251-20.678,20.679v125.404
                          c0,11.427,9.259,20.677,20.678,20.677h5.012v22.995c0,28.305,23.025,51.315,51.315,51.315h264.223
                          c28.272,0,51.3-23.011,51.3-51.315V121.449L315.458,0z M99.053,284.379c6.06-1.024,14.578-1.796,26.579-1.796
                          c12.128,0,20.772,2.315,26.58,6.965c5.548,4.382,9.292,11.615,9.292,20.127c0,8.51-2.837,15.745-7.999,20.646
                          c-6.714,6.32-16.643,9.157-28.258,9.157c-2.585,0-4.902-0.128-6.714-0.379v31.096H99.053V284.379z M386.034,450.713H121.811
                          c-10.954,0-19.874-8.92-19.874-19.889v-22.995h246.31c11.42,0,20.679-9.25,20.679-20.677V261.748
                          c0-11.428-9.259-20.679-20.679-20.679h-246.31V51.315c0-10.938,8.921-19.858,19.874-19.858l181.89-0.19v67.233
                          c0,19.638,15.934,35.587,35.587,35.587l65.862-0.189l0.741,296.925C405.891,441.793,396.987,450.713,386.034,450.713z
                          M174.065,369.801v-85.422c7.225-1.15,16.642-1.796,26.58-1.796c16.516,0,27.226,2.963,35.618,9.282
                          c9.031,6.714,14.704,17.416,14.704,32.781c0,16.643-6.06,28.133-14.453,35.224c-9.157,7.612-23.096,11.222-40.125,11.222
                          C186.191,371.092,178.966,370.446,174.065,369.801z M314.892,319.226v15.996h-31.23v34.973h-19.74v-86.966h53.16v16.122h-33.42
                          v19.875H314.892z"/>
                      </g>

                    </svg>

                  </div>
                </div>
                <div className="texto-dica">
                  <h3 className="azul-escuro">Edital</h3>
                  <p>Para saber mais sobre a prova, baixa o edital <a href="" className="edital">aqui</a>.</p>
                </div>
              </div>

              
            </article>
          </section>
        </main>
      
      </div>
    </div>
  );
}