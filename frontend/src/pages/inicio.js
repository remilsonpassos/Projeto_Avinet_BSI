import React, {Component, } from 'react';
import { Link } from 'react-router-dom';
import nupean from '../assets/nupean.png';
import avinet2 from '../assets/avinet2.png';

import './inicio.css';
class inicio extends Component {

    render(){
        return(
            <form id="inicio">
                <img src={avinet2} type="background-image"></img>

                <body style={{marginTop:50, backgroundColor: 'white'}}>
            
                <div  style={{marginTop:30, color:'#1E90FF',}}>
                <p>Projeto Engenharia de Software II </p>
                <p style={{marginLeft: 30, marginTop:20}}>Avicultura de Postura</p>
                <p style={{marginLeft: 70,marginTop:20}}>Nupean</p>
               
                </div>
            </body>


            <div id="footer">
                
        <Link to="/">
        <img src ={nupean}  style={{height:100, width:200, marginTop: 200}} id="foot"></img>
        </Link>
       

        </div>
            </form>

            

        );
    }
};
    export default inicio;
