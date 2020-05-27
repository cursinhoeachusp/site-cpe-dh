import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import './style.css';
import postUm from '../../assets/post-1.jpg';
import postDois from '../../assets/post-2.jpg';

import carouselImgUm from '../../assets/post-1.png';
import carouselImgDois from '../../assets/post-2.png';
import carouselImgTres from '../../assets/post-3.png';
import carouselImgQuatro from '../../assets/post-4.png';
import carouselImgCinco from '../../assets/post-5.png';

export default class Noticias extends Component {
  render() {
    return (
      <main>
        <section className="slider-noticias">
          <Carousel
            autoPlay={7000}
            animationSpeed={1500}
            infinite
          >
            <div>
              <a href="https://www.facebook.com/CursinhoPopularEACH/posts/1662323463908740" target="blank"><img src={carouselImgUm} alt="" /></a>

            </div>
            <div>
              <a href="https://www.facebook.com/CursinhoPopularEACH/posts/1662323463908740" target="blank"><img src={carouselImgDois} alt="" /></a>


            </div>
            <div>
              <a href="https://www.facebook.com/CursinhoPopularEACH/posts/1662323463908740" target="blank"><img src={carouselImgTres} alt="" /></a>


            </div>
            <div>
              <a href="https://www.facebook.com/CursinhoPopularEACH/posts/1662323463908740" target="blank"><img src={carouselImgQuatro} alt="" /></a>

            </div>
            <div>
              <a href="https://www.facebook.com/CursinhoPopularEACH/posts/1662323463908740" target="blank"> <img src={carouselImgCinco} alt="" /></a>

            </div>
          </Carousel>
        </section>
        <section className="post-principal">
          <div className="postagem">
            <img src={postUm} alt="imagem da postagem" />
            <div className="titulo">
              Cursinho Popular EACH - USP
          </div>
            <div className="texto-postagem">
              Parabéns aprovados! <br />
            Em 2020, mais sonhos se tornaram realidade! Temos orgulho em apresentar
            <span id="dots">...</span>
              <span id="more">
                Em meio ao contexto em que estamos vivendo, temos na educação nosso ponto de esperança e incentivo. Compartilhar essas aprovações nos dá ainda mais forças para não parar e ter a certeza de continuar lutando pelo nosso propósito: um ensino superior acessível e democrático.
                Agradecemos a todes estudantes que confiaram no nosso trabalho em 2019. O Cursinho Popular EACH - USP deseja uma excelente jornada para as novas e novos universitários, com caminhos únicos e cheios de aprendizados. E lembrem-se: contem conosco para tudo, sempre serão os filhotes da Atena!
            </span>
            </div>
            <a href="https://www.facebook.com/CursinhoPopularEACH/photos/a.617012431773187/1668656119942141/?type=3&theater" target="blank" className="btnLeia">Leia mais</a>
          </div>
          <div className="postagem">
            <img src={postDois} alt="imagem da postagem" />
            <div className="titulo">
              Doe Cotas para o Cursinho!
          </div>
            <div className="texto-postagem">
              Você, aluno da EACH, recebe todo semestre 200 cotas de impressão e, às vezes, nem todas são utilizadas ao longo do semestre
            <span id="dots">...</span>
              <span id="more">
                Que tal doar estas cotas para o Cursinho Popular EACH??
                Ajude o Cursinho Popular EACH doando suas cotas de impressão! Nós as utilizamos para a impressão de provas, simulados, listas de exercícios e outros subsídios para nossos alunos!
                Você pode ajudar a transformar em realidade o sonho de entrar na universidade! Preencha nosso forms para doar: http://bit.ly/
            </span>
            </div>
            <a href="https://www.facebook.com/CursinhoPopularEACH/photos/a.617012431773187/1668656119942141/?type=3&theater" target="blank" className="btnLeia">Leia mais</a>
          </div>
          <div className="postagem">
            <img src={postUm} alt="imagem da postagem" />
            <div className="titulo">
              Cursinho Popular EACH - USP
          </div>
            <div className="texto-postagem">
              Parabéns aprovados! <br />
            Em 2020, mais sonhos se tornaram realidade! Temos orgulho em apresentar
            <span id="dots">...</span>
              <span id="more">
                Em meio ao contexto em que estamos vivendo, temos na educação nosso ponto de esperança e incentivo. Compartilhar essas aprovações nos dá ainda mais forças para não parar e ter a certeza de continuar lutando pelo nosso propósito: um ensino superior acessível e democrático.
                Agradecemos a todes estudantes que confiaram no nosso trabalho em 2019. O Cursinho Popular EACH - USP deseja uma excelente jornada para as novas e novos universitários, com caminhos únicos e cheios de aprendizados. E lembrem-se: contem conosco para tudo, sempre serão os filhotes da Atena!
            </span>
            </div>
            <a href="https://www.facebook.com/CursinhoPopularEACH/photos/a.617012431773187/1668656119942141/?type=3&theater" target="blank" className="btnLeia">Leia mais</a>
          </div>
        </section>
      </main>
    );
  }
}