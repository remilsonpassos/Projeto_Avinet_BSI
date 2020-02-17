import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import tabela2 from '../assets/tabela2.png'
import avinet from '../assets/avinet2.png';
import cadastrar from '../assets/cadastrar.png';
import home2 from '../assets/home2.png'
import telaovos from '../assets/telaovos.png'

export default function Header() {
  return (
   <header id="main-header">
       <div className="header-content">
       <Link to="/inicio"> 
           <img src={home2} style={{height:45, marginTop:10}} alt="home"/>
           </Link>
           <Link to="/"> 
           <img src={avinet} style={{height:35}} alt="AviNet"/>
           </Link>
           <Link to="/NewOvos">
           <img src={telaovos} style={{height:50, width: 45, marginTop:10}} alt="Casadstrar ovos"/>
           </Link>
           
            <Link to="/tabelas">
           <img src={tabela2} style={{height:45, width: 50}} alt="AviNet"/>
           </Link>
           
           <Link to="/NewGaiolas">
           <img src={cadastrar} style={{height:40, width: 40}} alt="Casadstrar nova gaiola"/>
           </Link>
       </div>
   </header>
  );
}
