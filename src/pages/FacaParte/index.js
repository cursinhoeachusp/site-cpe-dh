import React from 'react';

import './style.css';
import cmkt from '../../assets/cmkt.png';
import gp from '../../assets/gp.png';
import inovatec from '../../assets/inovatec.png';
import jurfin from '../../assets/jurfin.png';
import ped from '../../assets/ped.png';
import proj from '../../assets/proj.png';

export default function FacaParte() {
  return (
    <div className="mainFaçaParte">

      <section className="departamentos">
        
        <div className="textoDepartamentos">
          <h3>No CPE, somos divididos em departamentos. Conheça mais sobre cada departamento abaixo!</h3>
        </div>

        <div className="departamento">
          <img src={cmkt} alt="ilustracao cmkt" />
          <h3>Comunicação e Marketing</h3>
          <p>> Desenvolver a comunicação visual do Cursinho;</p>
          <p>> Elaborar estratégias para atrair parceiros e patrocinadores;</p>
          <p>> Dar manutenção e criar conteúdos para as mídias sociais;</p>
          <p>> Divulgar atividades e demandas do Cursinho.</p>
        </div>

        <div className="departamento">
          <img src={gp} alt="ilustracao gp" />
          <h3>Gestão de Pessoas</h3>
          <p>> Realizar o acompanhamento departamental;</p>
          <p>> Desenvolver atividade de integração;</p>
          <p>> Gerir canal de denúncias e críticas;</p>
          <p>> Fornecer capacitações.</p>
        </div>

        <div className="departamento">
          <img src={inovatec} alt="ilustracao inovatec" />
          <h3>Inovação & Tecnologia</h3>
          <p>> Propor soluções tecnológicas;</p>
          <p>> Gerenciar dados e informações;</p>
          <p>> Analisar rotinas e processos da organização; </p>
          <p>> Desenvolver aplicativos e sistemas para o Cursinho.</p>
        </div>

        <div className="departamento-baixo">
          <img src={jurfin} alt="ilustracao jurfin" />
          <h3>Jurídico-Financeiro</h3>
          <p>> Administrar questões jurídicas;</p>
          <p>> Elaborar relatórios financeiros;</p>
          <p>> Gerir os recursos financeiros;</p>
          <p>> Elaborar orçamentos;</p>
          <p>> Responsabilidade por contratos e editais</p>
          <p>> Venda de produtos</p>
        </div>

        <div className="departamento-baixo">
          <img src={ped} alt="ilustracao ped" />
          <h3>Pedagógico</h3>
          <p>> Análisar indicadores;</p>
          <p>> Coordenar turmas do vespertino e noturno;</p>
          <p>> Intermediar a comunicação entre professor/plantonista, aluno e equipe administrativa;</p>
          <p>> Organizar grades horárias</p>
        </div>

        <div className="departamento-baixo">
          <img src={proj} alt="ilustracao projetos" />
          <h3>Projetos</h3>
          <p>> Criar e desenvolver projetos do Cursinho:</p>
          <p>> Festa do Livro da USP Leste;</p>
          <p>> Mostra de Cursos;</p>
          <p>> Semana de Educação;</p>
          <p>> Dialogando com...</p>
          <p>> SP no Vestibular</p>
        </div>
      </section>

      <section className="façaParte">
        <div className="textContato">
          <p>Tem interesse em fazer parte do projeto como voluntário? Deixe seu contato para te avisarmos sobre os processos seletivos!</p>
          <p>Vem com a gente!</p>
        </div>
        
        <div className="corpoDaAreaDeContato">

          <div className="formContato">
            <form className="formularioDeContato">
              <div>
                <label> 
                  <p className="itemDoForm" id="nome">Nome:</p>
                  <input type="text" name="name" className="caixaDoForm"/>
                </label>
              </div>
              <div>
                <label> 
                  <p className="itemDoForm">Email </p>
                  <input type="text" name="name" className="caixaDoForm"/>
                </label>
              </div>
              {/* <div>
                <label> 
                  <p className="itemDoForm">Assunto: </p>
                  <input type="text" name="name" className="caixaDoForm"/>
                </label>
              </div>
              <div>
                <label> 
                  <p className="itemDoForm">Mensagem:</p>
                  {/* <input type="textarea" name="name" className="caixaDoForm"/> 
                  <textarea class ="caixaDoForm" id="formBotaoRedimensionavel" name="story" rows="5" cols="33"> </textarea>
                </label>
              </div> */}

              <input type="submit" value="Enviar" className="botaoEnviarContato"/>
            </form>
          </div> {/* fim da form */}
          <div className="contatoBlocoImagem">
            <div className="imagemDeFaçaParte"></div>
          </div>

        </div> {/* fim da corpoDaAreaDeContato */}
      </section>
      
      
    </div>
  );
}