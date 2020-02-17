import React,  { Component } from 'react';
import api from '../services/api';
import io from 'socket.io-client';
import './tabelas.css';

import PrintThisComponent from '../PrintThisComponent';





class tabelas extends Component{
  state = {
    tabelas: [],
};


async componentDidMount() {
  this.registerToSocket();
    const response = await api.get('posts');

    this.setState({ tabelas: response.data });
}

registerToSocket = () => {
  const socket = io(`http://localhost:3333`);

  socket.on('post', newPost => {
    this.setState({ tabelas:[newPost, ... this.state.tabelas]})
  })

}


render(){
  
    return(
      
      
      <section id="post-table">
              { this.state.tabelas.map(post => (
                //   aqui sera carregado o vetor
                
      <article key={post._id}>
        
          

          <div  style={{}}>
          <p>Gaiola/Lote: <strong style={{fontSize:15}}>{post.nome}</strong>
          <p>Periodo: <strong>{post.periodo}</strong></p>
          
          </p></div>
          
    
    <table id="lotes" >
  <thead>
    <tr>
      <th>Aves</th>
      <th>Peso</th>
      <th>Consumo</th>
      <th>Total Produtividade</th>
      


    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>1</td>
      <td>{post.peso1} kg</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td>2</td>
      <td>{post.peso2} kg</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td>3</td>
      <td>{post.peso3} kg</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td>4</td>
      <td>{post.peso4} kg</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td>5</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td>6</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td>7</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td>8</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td>9</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td>10</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td><strong>Totais</strong></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>

    

    <tr>
      <td>Total Aves </td>
      <td>{post.quantidadeave}</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td>Total Ovos </td>
      <td></td>
      <td></td>
      <td>{post.quantidadeovo}</td>
    </tr>

    <tr>
      <td>Total Gaiola</td>
      <td>{post.peso1+post.peso2+post.peso3+post.peso4} kg</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td>Total Bloco</td>
      <td>{post.peso1+post.peso2+post.peso3+post.peso4*16} kg</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td>Media por ave</td>
      <td>{(post.peso1+post.peso2+post.peso3+post.peso4)/4} kg</td>
      <td>0</td>
      <td>0</td>
    </tr>

    <tr>
      <td>Total Bloco</td>
      <td>{post.peso1+post.peso2+post.peso3+post.peso4*16} kg</td>
      <td>0</td>
      <td>0</td>
    </tr>
                
  </tbody>

</table>

          <p style={{margin:5}}>Data criação: <strong style={{fontSize:10}}>{post.createdAt}</strong></p>
          <p style={{margin:5}}>Responsavel: <strong style={{fontSize:15}}>{post.responsavel}</strong></p>

          
          <div name="print" style={{alignContent:'center',margin:5}}><PrintThisComponent/></div>



</article>


))}

</section>

      
    
    );
}
};
export default tabelas;