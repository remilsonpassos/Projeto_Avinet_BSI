import React,  { Component } from 'react';

import './NewOvos.css';
import api from '../services/api';

class NewOvos extends Component {
        // state = {
        //     image:null,
        //     nome:'',
        //     periodo: '',
        //     responsavel:'',
        //     telefone:'',
        //     email:'',
        //     quantidadeovo:'',
        //     quantidadeave:'',
        //     peso1:'',
        //     peso2:'',
        //     peso3:'',
        //     peso4:'',

        // };
        // handleSubmit = async e => {
        //     e.preventDefault();
        //     const data = new FormData();

        //     data.append('image', this.state.image);
        //     data.append('nome', this.state.nome);
        //     data.append('periodo', this.state.periodo);
        //     data.append('responsavel', this.state.responsavel);
        //     data.append('telefone', this.state.telefone);
        //     data.append('email', this.state.email);
        //     data.append('quantidadeovo', this.state.quantidadeovo);
        //     data.append('quantidadeave', this.state.quantidadeave);
        //     data.append('peso1', this.state.peso1);
        //     data.append('peso2', this.state.peso2);
        //     data.append('peso3', this.state.peso3);
        //     data.append('peso4', this.state.peso4);



        //     await api.post('posts', data)

        //     this.props.history.push('/');

        // }

        // handleImageChange = e => {
        //     this.setState({ image: e.target.files[0] });

        // }

        // handleChange = e => {
        //     this.setState({[e.target.name]: e.target.value})
        // }

    render(){
        return(
            <form  id="new-post" onSubmit ={this.handleSubmit}>
                <text style={{marginBottom:10}}>Cadastro de dados dos Ovos</text>
                    <div>
                    
                <input 
                type="text"
                name="nome" 
                placeholder="Bloco/gaiola/lote"
                // onChange={{}}
                // value={{}}
                ></input>

                <input 
                type="text"
                name="periodo" 
                placeholder="Periodo"
                // onChange={this.handleChange}
                // value={{}}
                ></input>
                </div>

                <input 
                type="text"
                name="quantidade" 
                placeholder="Quantidade Ovos"
                // onChange={this.handleChange}
                // value={{}}
                ></input>

                <input 
                type="text"
                name="peso ovos" 
                placeholder="Peso Medio Kg"
                // onChange={this.handleChange}
                // value={{}}
                ></input>

                <input 
                type="text"
                name="tamanho" 
                placeholder="Pequeno"
                // onChange={this.handleChange}
                // value={{}}
                ></input>

                
                    <input 
                type="text"
                name="jumbo" 
                placeholder="Jumbo"
                // onChange={this.handleChange}
                // value={{}}
                ></input>

                <input 
                type="text"
                name="sujo" 
                placeholder="Sujo"
                // onChange={this.handleChange}
                // value={{}}
                ></input>

                    <input 
                type="text"
                name="trincado" 
                placeholder="Trincado"
                // onChange={this.handleChange}
                // value={{}}
                ></input>

                <input 
                type="text"
                name="sangue" 
                placeholder="Com sangue"
                // onChange={this.handleChange}
                // value={{}}
                ></input>

                <input 
                type="text"
                name="estranho" 
                placeholder="Estranho"
                // onChange={this.handleChange}
                // value={{}}
                ></input>


                <button type="submit">Enviar</button>
            </form>
        );
    }

}
export default NewOvos;