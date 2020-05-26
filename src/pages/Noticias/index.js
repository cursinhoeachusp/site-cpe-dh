import React from 'react';

import './style.css';
import postUm from '../../assets/post-1.jpg';

export default function Noticias() {
  return (
    <main>
      <section className="slider-noticias">
        <div>
          <ul>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
          </ul>
          <button className="btnLeia">Leia mais</button>
        </div>
      </section>
      <section className="post-principal">
        <div className="postagem">
          <img src={postUm} alt="imagem da postagem" />
          <div className="titulo">
            Cursinho Popular EACH - USP
        </div>
          <div className="texto-postagem">
            Parabéns aprovados! <br />
          Em 2020, mais sonhos se tornaram realidade! Temos orgulho em apresentar nossos alunos e alunas da turma de 2019 aprovades no ensino superior.
          <span id="dots">...</span>
            <span id="more"
            >
              Em meio ao contexto em que estamos vivendo, temos na educação nosso ponto de esperança e incentivo. Compartilhar essas aprovações nos dá ainda mais forças para não parar e ter a certeza de continuar lutando pelo nosso propósito: um ensino superior acessível e democrático.
              Agradecemos a todes estudantes que confiaram no nosso trabalho em 2019. O Cursinho Popular EACH - USP deseja uma excelente jornada para as novas e novos universitários, com caminhos únicos e cheios de aprendizados. E lembrem-se: contem conosco para tudo, sempre serão os filhotes da Atena!
          </span>
          </div>
          <button className="btnLeia">Leia mais</button>
        </div>
        <div className="postagem">
          <img src={postUm} alt="imagem da postagem" />
          <div className="titulo">
            Cursinho Popular EACH - USP
        </div>
          <div className="texto-postagem">
            Parabéns aprovados! <br />
          Em 2020, mais sonhos se tornaram realidade! Temos orgulho em apresentar nossos alunos e alunas da turma de 2019 aprovades no ensino superior.
          <span id="dots">...</span>
            <span id="more"

            >
              Em meio ao contexto em que estamos vivendo, temos na educação nosso ponto de esperança e incentivo. Compartilhar essas aprovações nos dá ainda mais forças para não parar e ter a certeza de continuar lutando pelo nosso propósito: um ensino superior acessível e democrático.
              Agradecemos a todes estudantes que confiaram no nosso trabalho em 2019. O Cursinho Popular EACH - USP deseja uma excelente jornada para as novas e novos universitários, com caminhos únicos e cheios de aprendizados. E lembrem-se: contem conosco para tudo, sempre serão os filhotes da Atena!
          </span>
          </div>
          <button className="btnLeia">Leia mais</button>
        </div>
        <div className="postagem">
          <img src={postUm} alt="imagem da postagem" />
          <div className="titulo">
            Cursinho Popular EACH - USP
        </div>
          <div className="texto-postagem">
            Parabéns aprovados! <br />
          Em 2020, mais sonhos se tornaram realidade! Temos orgulho em apresentar nossos alunos e alunas da turma de 2019 aprovades no ensino superior.
          <span id="dots">...</span>
            <span id="more"

            >
              Em meio ao contexto em que estamos vivendo, temos na educação nosso ponto de esperança e incentivo. Compartilhar essas aprovações nos dá ainda mais forças para não parar e ter a certeza de continuar lutando pelo nosso propósito: um ensino superior acessível e democrático.
              Agradecemos a todes estudantes que confiaram no nosso trabalho em 2019. O Cursinho Popular EACH - USP deseja uma excelente jornada para as novas e novos universitários, com caminhos únicos e cheios de aprendizados. E lembrem-se: contem conosco para tudo, sempre serão os filhotes da Atena!
          </span>
          </div>
          <button className="btnLeia">Leia mais</button>
        </div>
      </section>
    </main>
  );
}