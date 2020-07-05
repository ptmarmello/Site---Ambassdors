import React from 'react';
import './styles.css'
import { Link} from "react-router-dom";
// import {FiLogIn} from 'react-icons/fi';

import whowe from '../../assets/chao.png';
import connect from '../../assets/imagem.png';
export default function about(){
    return(
        <div className="container">
            <div className="content">
                <section>
                    <h1>O que é EMBA?</h1>
                    <p>Emba é um projeto desenvolvido em meio ao momento marcante de pandemia, onde é nítido o quanto o mundo ficou abalado. Para almejarmos uma recuperação precisamos entender como as pessoas estão sendo afetadas, motivando-as a superar momentos como este,  por meio de estabilidade, segurança e confiabilidade.
                        <p>Para superar esse momento, criamos nosso programa de embaixadores sociais. O qual encoraja seus  participantes a desenvolverem o seu senso de responsabilidade cívica,  colaborando com o desenvolvimento mútuo de seu meio social.</p></p>
                </section>
                {/* <section >
                    
                </section> */}
                <img src={whowe} className="ImgRecap" alt="Quem somos"/>
            </div>
            <div className="separador"></div>
            <div className="content">
                <section className="mobileVoff">
                    <img src={connect} className="ImgRecap" alt="Rede"/>
                </section>
                <section>
                    <h1>Nosso Programa</h1>
                    <p>Queremos criar uma rede que conecta pessoas de diferentes lugares com o objetivo comum de participarem da geração de transformações sociais e multiplicar boas notícias. Criando um sistema de confiabilidade e responsabilidade social, envolvendo projetos (sociais) e empresas. Além de engajarem como Influenciadores sociais, adquirindo assim vantagens ao longo do tempo de acordo com seus níveis.
<p>Ou seja, não importa se é dentro da sua empresa, do seu departamento, da sua comunidade, da sua cidade, ou dentro da sua cabeça. Se você se sente engajado para uma melhora social... aqui é o seu lugar.</p></p>
                </section>
                <section className="mobileVOn">
                    <img src={connect} className="ImgRecap" alt="Rede"/>
                </section>
            </div>
            <div className="separador"></div>
            <div className="callBox">
                
                <div className="calltoAction">
                    <section>
                        <Link to="/register" className="link-direct">
                                {/* <FiLogIn size={16} color="#073763"/> */}
                                Quero ser um Embaixador!
                                </Link>
                    </section>

                    <section>
                        <Link to="#" className="link-direct">
                                Quero divulgar minha Empresa ou Iniciativa social!
                                </Link>
                    </section>
                </div>
            </div>
        </div>
    );
}