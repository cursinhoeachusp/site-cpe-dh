import React from 'react';

import './style.css';

export default function FacaParte() {
  return (
    <div className="mainContato">
      
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
    </div>
  );
}