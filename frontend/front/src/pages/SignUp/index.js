import React from 'react';
import { Link} from "react-router-dom";
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.png';

export default function signup(){
    
    
    async function redirectfunction(e){
        e.preventDefault();
        alert('Desculpe, essa feature ainda não foi ativada. Tente novamente mais tarde.');
        
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} className="logo" alt="Welcome. We've been expecting you"/>
                    <h1>Cadastro</h1>
                    <p>Estamos procurando pessoas que se envolvam, sejam dedicadas e tenham o espírito de mudança assim como a gente!
                        Se deseja saber mais sobre nossa visão e sobre nosso espírito de mudança: <Link className="aboutme-link" to="/">Veja aqui!</Link></p>

                    <Link className="link" to="/">
                        <FiArrowLeft size={16} color="#073763"/>
                        Voltar a página inicial
                    </Link>
                </section>
                <form onSubmit={redirectfunction} >
                    <input placeholder="Nome" type="text"/>
                    <input placeholder="E-mail" type="email"/>
                    <input placeholder="WhatsApp"/>
                    <div className="input-group">
                        <input placeholder="Cidade" type="text"/>
                        <input placeholder="UF" style={ { width:80} }/>
                    </div>
            
                    <button className="button" type="submit">Cadastrar.</button>
                    

                </form>
            </div>
        </div>
    );
}
