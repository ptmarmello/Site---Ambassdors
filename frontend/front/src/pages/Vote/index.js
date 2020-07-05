import React from 'react';
import {Link} from 'react-router-dom';
import {FiPower,FiExternalLink} from 'react-icons/fi';

import logo from '../../assets/logo.png';
import cooper from '../../assets/cooper-viralata.jpg';
import explica from '../../assets/explica-enem.jpg';
import instituto from '../../assets/instituto.jpg';
import sobresuspeita from '../../assets/sobreSuspeita.jpg';
import './styles.css';

export default function vote(){
    return(
        <div className="vote-container">
            <header>
                <img src={logo} alt="Sabiamente você deve escolher"/>
                <span>E aí, vamos EMBArcar nessa?</span>
                <Link className="button" to="/prod/new" >Adicionar programa</Link>
                
                <button type="button"><FiPower size={18} color="#073763"/></button>
            </header>
            <h1>Casos Cadastrados</h1>

            <ul>
            <li>
                <img src={explica} alt="Explica Enem"/>
                    <strong>@ExplicaEnem</strong>
                    <p>Rio de Janeiro, RJ</p>
                    <p>6500 Seguidores no Instagram</p>
                    <strong>Curso preparatório para o ENEM, ONLINE e GRATUITO
                        Visamos a democratização do acesso à universidade, empoderando a juventude por meio da educação.<br/><a style={{textDecoration:"none", textDecorationColor:"none"}} href="linktr.ee/explicaenem">Visite Aqui</a>
                        </strong><br/> <Link className="button" to="#">Saiba Mais</Link>
                    {/* <h3>Qual seu voto?</h3>
                    <div className="choice">
                        <ul className="choice-method">
                            <li className="inputGroup">
                                <input type="radio" name="VoteYes" value="Y" id="VoteYes"/>
                                <label for="VoteYes">Sim</label>
                            </li>
                            <li className="inputGroup">
                                <input type="radio" name="VoteNo" value="N" id="VoteNo"/>
                                <label for="VoteNo">Não</label>
                            </li>
                        </ul>
                        
                    </div> */}
                    
                    <button>
                        <FiExternalLink size={20} color="#073763"/>
                    </button>
                </li>
                <li>
                    <img src={cooper} alt="CooperViraLata"/>
                    <strong>@cooperviralataoficial</strong>
                    <p>São Paulo, SP</p>
                    <p>448 seguidores no Instagram</p>
                    <strong>O Projeto Vira Lata começou com um grupo de amigos que pensaram em combater o desemprego que assolava o país naquela época com um projeto que envolvesse a preservação do meio ambiente.<a style={{textDecoration:"none", textDecorationColor:"none"}} href="https://linktr.ee/cooperviralataoficial">Visite Aqui</a> </strong>
<Link className="button" to="#">Saiba Mais</Link>
                    {/* <h3>Qual seu voto?</h3>
                    <div className="choice">
                        <ul className="choice-method">
                            <li className="inputGroup">
                                <input type="radio" name="VoteYes" value="Y" id="VoteYes"/>
                                <label for="VoteYes">Sim</label>
                            </li>
                            <li className="inputGroup">
                                <input type="radio" name="VoteNo" value="N" id="VoteNo"/>
                                <label for="VoteNo">Não</label>
                            </li>
                        </ul>
                        
                    </div> */}
                    
                    <button>
                        <FiExternalLink size={20} color="#073763"/>
                    </button>
                </li>
                <li>
                <img className="" src={instituto} alt="IHGBI"/>
                    <strong>IHGBI.</strong>
                    <p>Rio de Janeiro, RJ</p>
                    <p>3.077 seguidores no Instagram</p>
                    <strong>O Instituto Histórico e Geográfico Baixada de Irajá é um coletivo multidisciplinar, fundado no ano de 2006, que se dedica ao estudo da região chamada Baixada de Irajá, na Cidade do Rio de Janeiro.<br/>
                    <a style={{textDecoration:"none", textDecorationColor:"none"}} href="https://www.facebook.com/IHGBI.oficial/">Visite Aqui</a></strong> <Link className="button" to="#">Saiba Mais</Link>
                    {/* <h3>Qual seu voto?</h3>
                  
                        <ul className="choice-method">
                            <li className="inputGroup">
                                <input type="radio" name="VoteYes" value="Y" id="VoteYes"/>
                                <label for="VoteYes">Sim</label>
                            </li>
                            <li className="inputGroup">
                                <input type="radio" name="VoteNo" value="N" id="VoteNo"/>
                                <label for="VoteNo">Não</label>
                            </li>
                        </ul> */}
                        
                    
                    
                    <button>
                        <FiExternalLink size={20} color="#073763"/>
                    </button>
                </li>
                <li>
                <img className="" src={sobresuspeita} alt=""/>
                    <strong>"Sobre Suspeita"</strong>
                    <p>Rio de Janeiro, RJ</p>
                    <p>233 seguidores no Facebook</p>
                    <strong>Projeto social iniciado no ano de 2017 em meio a greve com objetivo de promover o aprendizado e envolver os alunos.
                    <br/><a style={{textDecoration:"none", textDecorationColor:"none"}} href="https://www.facebook.com/pg/sobresuspeita/about/?ref=page_internal">Visite Aqui</a></strong>
 <br/><br/><Link className="button" to="#">Saiba Mais</Link>

                    {/* <h3>Qual seu voto?</h3>
                    <div className="choice">
                        <ul className="choice-method">
                            <li className="inputGroup">
                                <input type="radio" name="VoteYes" value="Y" id="VoteYes"/>
                                <label for="VoteYes">Sim</label>
                            </li>
                            <li className="inputGroup">
                                <input type="radio" name="VoteNo" value="N" id="VoteNo"/>
                                <label for="VoteNo">Não</label>
                            </li>
                        </ul>
                    </div> */}
                    
                    <button>
                        <FiExternalLink size={20} color="#073763"/>
                    </button>
                </li>
                
                
            </ul>    

        </div>
    );
}