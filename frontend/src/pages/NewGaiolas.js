import React,  { Component } from 'react';

import './NewGaiolas.css';
import api from '../services/api';

class NewGaiolas extends Component {
        state = {
            image:null,
            nome:'',
            periodo: '',
            responsavel:'',
            telefone:'',
            email:'',
            quantidadeovo:'',
            quantidadeave:'',
            peso1:'',
            peso2:'',
            peso3:'',
            peso4:'',

        };
        handleSubmit = async e => {
            e.preventDefault();
            const data = new FormData();

            data.append('image', this.state.image);
            data.append('nome', this.state.nome);
            data.append('periodo', this.state.periodo);
            data.append('responsavel', this.state.responsavel);
            data.append('telefone', this.state.telefone);
            data.append('email', this.state.email);
            data.append('quantidadeovo', this.state.quantidadeovo);
            data.append('quantidadeave', this.state.quantidadeave);
            data.append('peso1', this.state.peso1);
            data.append('peso2', this.state.peso2);
            data.append('peso3', this.state.peso3);
            data.append('peso4', this.state.peso4);



            await api.post('posts', data)

            this.props.history.push('/');

        }

        handleImageChange = e => {
            this.setState({ image: e.target.files[0] });

        }

        handleChange = e => {
            this.setState({[e.target.name]: e.target.value})
        }

    render(){
        return(
            <form  id="new-post" onSubmit ={this.handleSubmit}>
                <input type="file" onChange={this.handleImageChange}></input>
                    <div>
                <input 
                type="text"
                name="nome" 
                placeholder="bloco/gaiola/lote"
                onChange={this.handleChange}
                value={this.state.nome}
                ></input>

                <input 
                type="text"
                name="periodo" 
                placeholder="Periodo"
                onChange={this.handleChange}
                value={this.state.periodo}
                ></input>
                </div>

                <input 
                type="text"
                name="responsavel" 
                placeholder="Nome responsavel"
                onChange={this.handleChange}
                value={this.state.responsavel}
                ></input>

                <input 
                type="text"
                name="telefone" 
                placeholder="telefone"
                onChange={this.handleChange}
                value={this.state.telefone}
                ></input>

                <input 
                type="text"
                name="email" 
                placeholder="email"
                onChange={this.handleChange}
                value={this.state.email}
                ></input>

                

                    <text>Cadastro de dados da Gaiola</text>


                    <input 
                type="text"
                name="quantidadeave" 
                placeholder="quantidades de aves"
                onChange={this.handleChange}
                value={this.state.quantidadeave}
                ></input>

                <input 
                type="text"
                name="quantidadeovo" 
                placeholder="quantidades de ovos"
                onChange={this.handleChange}
                value={this.state.quantidadeovo}
                ></input>

                    <input 
                type="text"
                name="peso1" 
                placeholder="peso ave1 kg"
                onChange={this.handleChange}
                value={this.state.peso1}
                ></input>

                <input 
                type="text"
                name="peso2" 
                placeholder="peso ave2 kg"
                onChange={this.handleChange}
                value={this.state.peso2}
                ></input>

                <input 
                type="text"
                name="peso3" 
                placeholder="peso ave3 kg"
                onChange={this.handleChange}
                value={this.state.peso3}
                ></input>

                <input 
                type="text"
                name="peso4" 
                placeholder="peso ave4 kg"
                onChange={this.handleChange}
                value={this.state.peso4}
                ></input>

                <button type="submit">Enviar</button>
            </form>
        );
    }

}
export default NewGaiolas;