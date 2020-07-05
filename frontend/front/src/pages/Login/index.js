import React from 'react';
import About from '../About';
import {FiLogIn} from 'react-icons/fi';

import {Link} from 'react-router-dom'; 
import './styles.css';

import heroesImg from '../../assets/Mesadetrabajo1.png';
import logoImg from '../../assets/logo.png'; 
export default function Login(){
    return(
        <div className="container">
            <div className="logon-container">
                <section className="form">
                    <img src={logoImg} className="logoEmba" alt="It's time to change the World"/>
                    <img className="ImgSome" src={heroesImg} alt="AmbassDoors"/>
                    <form>
                        <h1>Faça seu Login</h1>
                        <input placeholder="Sua ID"/>
                        {/* <button className="button" type="submit">Entrar!</button> */}
                        <Link className="button" to="/voting">Entrar!</Link>
                        <Link to="/register" className="link-direct">
                            <FiLogIn size={16} color="#073763"/>
                            Não tenho cadastro!
                            </Link>
                            
                    </form>
                </section>
                <img style={{width:500}} className="HeroesSome" src={heroesImg} alt="AmbassDoors"/>
            </div>
            <About/>
       </div>
    );
}