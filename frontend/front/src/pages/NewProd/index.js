import React from 'react';
import { Link} from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi';
import "./styles.css";

import logoImg from '../../assets/logo.png';

export default function newprod(){
    
    
    async function redirectfunction(e){
        e.preventDefault();
        alert('Desculpe, essa feature ainda não foi ativada. Tente novamente mais tarde.');
        
    }
    return(
        <div className="register-container">
            <div className="contain">
                <section>
                    <img src={logoImg} className="logo" alt="Welcome. We've been expecting you"/>
                    <h1>Novo Produto</h1>
                    <p>Todos precisam de ajuda, e nós queremos ajudar! Descreva aqui o projeto ou programa para que nossos embaixadores e empresas afiliadas possam ajudar!</p>

                    <Link className="link-direct" to="/voting">
                        <FiArrowLeft size={16} color="#073763"/>
                        Voltar!
                    </Link>
                </section>
                <form onSubmit={redirectfunction} id="SignupForm" >
                    <input placeholder="Nome do Projeto" type="text"/>
                    <input placeholder="Número de participantes" type="number"/>
                    <div className="input-group">
                        <input placeholder="Cidade" type="text"/>
                        <input placeholder="UF" style={ { width:80} }/>
                    </div>
                    
                    <textarea placeholder="Descrição" name="reason" form="SignupForm"></textarea>

                    <button className="button" type="submit">Cadastrar.</button>
                    
                    
                </form>
                
            </div>
        </div>
    );
}
