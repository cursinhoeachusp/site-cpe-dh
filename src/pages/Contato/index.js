import React from 'react';

import './style.css';

export default function Contato() {
  return (
    <div className="mainContato">
      
      <div className="textContato">
        <p>Algum comentário, sugestão, crítica, dúvida ou simplesmente gostaria de entrar em contato conosco?</p>
        <p>Fala com a gente!</p>
      </div>
      
      <div className="corpoDaAreaDeContato">

        <div className="formContato">
          <form className="formularioDeContato">
            <div>
              <label> 
                <p className="itemDoForm">Nome:</p>
                <input type="text" name="name" className="caixaDoForm"/>
              </label>
            </div>
            <div>
              <label> 
                <p className="itemDoForm">Email </p>
                <input type="text" name="name" className="caixaDoForm"/>
              </label>
            </div>
            <div>
              <label> 
                <p className="itemDoForm">Assunto: </p>
                <input type="text" name="name" className="caixaDoForm"/>
              </label>
            </div>
            <div>
              <label> 
                <p className="itemDoForm">Mensagem:</p>
                {/* <input type="textarea" name="name" className="caixaDoForm"/> */}
                <textarea class ="caixaDoForm" id="story" name="story" rows="5" cols="33"> It was a dark and stormy night...</textarea>
              </label>
            </div>

            <input type="submit" value="Enviar" className="botaoSubmit"/>
          </form>
        </div> {/* fim da form */}
        <div className="contatoBlocoImagem">
          <div className="imagemDeContato"></div>
        </div>

      </div> {/* fim da corpoDaAreaDeContato */}
      
      
      
      
      
      
      
      
      
      
      
      



    </div>
  );
}