import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Header from './components/header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Aluno from './pages/Aluno';
import Contato from './pages/Contato';
import FacaParte from './pages/FacaParte';
import Noticias from './pages/Noticias';
import ProcessoSeletivo from './pages/ProcessoSeletivo';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/aluno" component={Aluno} />
        <Route path="/contato" component={Contato} />
        <Route path="/faca-parte" component={FacaParte} />
        <Route path="/noticias" component={Noticias} />
        <Route path="/processo-seletivo" component={ProcessoSeletivo} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}