import React from 'react';

import './style.css';

export default function Home() {
  return (
    <main>
      <section className="container">
        <div className="background">
          <div className="background-img">
          </div>
          <div className="slide">
            <a href="#items">
              <svg width="13" height="auto" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.082 0.0898438L23.918 2.91406L12 14.832L0.0820312 2.91406L2.91797 0.0898438L12 9.17188L21.082 0.0898438Z" fill="darkorange" />
              </svg>
            </a>

          </div>
        </div>
        <section className="items" id="items">
          <div >
            <h2>VIS<svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 0.804688L17.4023 17.5977H0.597656L9 0.804688Z" />
            </svg>
O</h2>
            <div className="texto">
              Ser uma referência, na Zona Leste da cidade de São Paulo, no acesso à educação e a um ensino superior de qualidade. Expandir nossos valores, ações e parcerias para dentro e fora da EACH. Ser uma ferramenta de desenvolvimento pessoal e profissional de todos os membros, egressos e colaboradores.

            </div>
          </div>
          <div >
            <h2>MISS<svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 0.804688L17.4023 17.5977H0.597656L9 0.804688Z" />
            </svg>
O</h2>
            <div className="texto">
              Promover o acesso de pessoas, prioritariamente de baixa renda, de escolas públicas e da Zona Leste da cidade de São Paulo a um ensino superior de qualidade por meio da apropriação de conhecimento, desenvolvimento do pensamento crítico, formação cidadã e participação social.
            </div>

          </div>
          <div >
            <h2>V<svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 0.804688L17.4023 17.5977H0.597656L9 0.804688Z" />
            </svg>
LORES</h2>
            <div className="texto">
              Comprometimento, participação, organização, transparência, empatia, horizontalidade e valorização da diversidade
            </div>

          </div>
          
        </section>
      </section>
    </main>

  );
}