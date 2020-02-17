import React,  { Component } from 'react';
import api from '../services/api';
import io from 'socket.io-client';
import './Gaiolas.css';

import personblue from '../assets/personblue.png';
import add from '../assets/add.jpg';


class Gaiolas extends Component {
    state = {
        gaiolas: [],
    };

    async componentDidMount() {
        this.registerToSocket();
        const response = await api.get('posts');

        this.setState({ gaiolas: response.data });
    }
    registerToSocket = () => {
        const socket = io(`http://localhost:3333`);
      
        socket.on('post', newPost => {
          this.setState({ gaiolas:[newPost, ... this.state.gaiolas]})
        })
    }

    render(){
        return(
           <section id="post-list">
              { this.state.gaiolas.map(post => (
                //   aqui sera carregado o vetor
                
                  <article key={post._id}>
                        <header>
                            <div className="user-info">
                                    <p className="gaiola">Gaiola/Lote:<strong>{post.nome}</strong></p>
                                    <strong className="responsavel">Responsavel: {post.responsavel}</strong>
                                    <strong className="email">E-mail: {post.email}</strong>
                                    <strong className="Telefone">Telefone: {post.telefone}</strong>
                            </div>
                            <img src={personblue} style={{height:50, width:50}} alt="responsavel"></img>
                   
                        </header>
                           {/* imagem principal */}

                           <img src={`http://localhost:3333/files/${post.image}`} alt=""></img>
                    

                        <footer>
                            <div className="atributos">
                                <button type="button" >
                                <img src={add} style={{height:40, width:40}}></img>
                                </button>
                            </div>

                       <p>Quantidade Ovos: <strong>{post.quantidadeovo}</strong></p>
                       <p>Quantidade Aves: <strong>{post.quantidadeave}</strong></p>
                       <p>Data criação: <strong>{post.createdAt}</strong></p>
                       <p>Total Consumo: <strong>{post.quantidadeovo + post.quantidadeave}</strong></p>
                       

                      <p>Projeto Engenharia de software NUPEAN
                          <span>#NUPEAN</span>
                      </p>
                  </footer>
                                                  
                                                  
                        
            </article>
              ))}

           </section>

           
        );
    }

}
export default Gaiolas;