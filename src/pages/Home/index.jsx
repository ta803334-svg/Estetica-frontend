import './home.css'
import { Link } from 'react-router-dom'
import logo from "./logo1.png"
import video1 from "./videoBelezaEstetica.MP4"
import video2 from "./videoEstetica2.MP4"
import video3 from "./videoEstetica3.MP4"
import vitoria from "./vitoria.PNG"
import sobrancelha from "./sobrancelha.PNG"
import limpeza from "./limpeza.PNG"
import pelling from "./pelling.PNG"
import micro from "./micropigmentacao.PNG"
import setaEsquerda from "./setaEsquerda.PNG"
import setaDireita from "./setaDireita.PNG"
import soft from "./solt.PNG"
import epiliacao from "./epiliação.PNG"
import desing from "./Desing.PNG"
import whatsapp from "./whatsapp.png"
import instagram from "./instagram.png"
import facebook from "./facebook.png"
import { useState } from 'react'


function Home() {


    const [ativoIndex, setAtivoIndex] = useState(0);
    const totalImagens = 6

    const handleUpdate = (direction) => {

        setAtivoIndex(prevIndex => {
            let newIndex = prevIndex + direction;
            if (newIndex >= totalImagens) {
                newIndex = 0
            } else if (newIndex < 0) {
                newIndex = totalImagens - 1;
            }
            return newIndex;
        })
    }
    const getClasseName = (index) => { return index === ativoIndex ? 'imagem1 ativo' : 'imagem1' }

    return (
        <>
            <div className='Body-Home'>
                <header>
                    <Link id='home' to="/Home"><img className='logo' src={logo}></img></Link>
                    <div id='nav'>
                        <Link id='link' to="/Home"> HOME </Link>
                        <Link id='link' to="/Formulario">AGENDAMENTO</Link>
                        <Link id='link' to="/Sobre">SOBRE NÓS</Link>
                    </div>
                </header>

                <div id='texto1'>
                    <img src={vitoria}></img>
                    <div className='introdução'>
                        <h4>Beleza & Bem-estar</h4>
                        <h2><span>Realce Sua</span> <br></br>Beleza Natural</h2>
                        <p>Tratamentos personalizados com técnicas avançadas para cuidar da sua pele e elevar sua autoestima.</p>
                        <Link id='agendar' to="/Formulario"> AGENDAR HORÁRIO</Link>
                    </div>

                </div>

                <div className='texto-CaixadeVideos'>
                    <h1>Cuidados Necessários para o bem da sua pele,<br></br><span>aumentando ainda mais sua autoestima!</span></h1>
                </div>

                <div className='caixaVideos'>
                    <video id='video1' src={video1} muted autoPlay loop playsInline  > </video>

                    <video id='video2' src={video2} muted autoPlay loop playsInline > </video>

                    <video id='video3' src={video3} muted autoPlay loop playsInline > </video>

                </div>

                <div id='serviços'>
                    <h3>NOSSOS SERVIÇOS</h3>
                    <h1>Tratamentos <span>Especiais </span></h1>
                    <p id='descrição'>Conheça nossos tratamentos desenvolvidos para realçar sua beleza natural</p>
                    <button id='setaDireita' onClick={() => handleUpdate(1)} ><img src={setaDireita} id='Direita'></img></button>

                    <div id='mediaTosa' className={getClasseName(0)} >
                        <img src={limpeza} id='tosa'></img>
                        <h2 id='servico1'> Limpeza de Pele </h2>
                        <p id='paragrafo1'> A limpeza de pele é um procedimento estético que remove impurezas, células mortas e excesso de oleosidade, deixando a pele mais saudável, equilibrada e com aspecto renovado. </p>
                    </div>
                    <div id='mediaBanho' className={getClasseName(1)}>
                        <img src={pelling} id='tosa'></img>
                        <h2 id='servico2'> Pellings (Esfoliar)</h2>
                        <p id='paragrafo2'>  O peeling é um procedimento estético que promove a renovação da pele por meio da remoção controlada das camadas superficiais, revelando uma aparência mais uniforme, saudável e rejuvenescida.</p>
                    </div>

                    <div id='mediaAli' className={getClasseName(2)}>
                        <img src={micro} id='tosa'></img>
                        <h2 id='servico3'> Micropigmentação </h2>
                        <p id='paragrafo3'> "A micropigmentação é um procedimento estético moderno que utiliza pigmentos específicos aplicados na camada superficial da pele para realçar traços naturais, corrigir imperfeições e valorizar a beleza de forma prática e duradoura. É muito procurada para sobrancelhas, lábios e até correções de cicatrizes, oferecendo resultados que unem estética e autoestima."  </p>
                    </div>

                    <div id='mediaAcesso' className={getClasseName(3)}>
                        <img src={soft} id='tosa'></img>
                        <h2 id='servico4'> Soft Lips </h2>
                        <p id='paragrafo4'> O Soft Lips é um procedimento estético inovador que tem como objetivo hidratar, revitalizar e realçar a beleza natural dos lábios, proporcionando uma aparência mais saudável, macia e delicada. A técnica utiliza ativos específicos que promovem nutrição profunda, estimulam a produção de colágeno e melhoram a textura da pele labial, deixando os lábios com aspecto rejuvenescido e uniforme. </p>
                    </div>

                    <div id='mediaH' className={getClasseName(4)}>
                        <img src={epiliacao} id='tosa'></img>
                        <h2 id='servico5'> Epiliação </h2>
                        <p id='paragrafo5'> A epilação facial é um procedimento estético que tem como objetivo remover os pelos indesejados do rosto, proporcionando uma pele mais lisa, uniforme e com aspecto bem cuidado. Existem diferentes técnicas utilizadas, como a cera, linha (threading), pinça ou até métodos definitivos como a luz pulsada e o laser, cada uma indicada de acordo com o tipo de pele, sensibilidade e necessidade da cliente.
                        </p>
                    </div>

                    <div id='mediaAdestra' className={getClasseName(5)}>
                        <img src={desing} id='tosa'></img>
                        <h2 id='servico6'> Desing de Sobrancelha </h2>
                        <p id='paragrafo6'>O design de sobrancelhas é um procedimento estético que tem como objetivo harmonizar o olhar e valorizar os traços faciais, através da modelagem personalizada das sobrancelhas. Mais do que apenas retirar os pelos excedentes, o design busca criar um formato que esteja em equilíbrio com o rosto, respeitando a simetria, a proporção e o estilo de cada pessoa.
                        </p>
                    </div>


                    <button id='setaEsquerda' onClick={() => handleUpdate(-1)}><img src={setaEsquerda} id='Esquerda'></img></button>
                </div>

                <div className='caixa-geral'>
                    <div id='banho' className='produto'>
                        <img src={sobrancelha}></img>
                        <h5>Design e Micropigmentação de sobrancelhas.</h5>
                        <p>"Sobrancelhas perfeitas que valorizam seu olhar."</p>
                        <h3>R$ 100</h3>

                    </div>

                    <div id='tosaa' className='produto'>
                        <img src={limpeza}></img>
                        <h5>Limpeza de Pele Premium</h5>
                        <p>"Tratamento completo para remover impurezas e renovar sua pele."</p>
                        <h3>R$ 100</h3>

                    </div>

                    <div id='hospedagem' className='produto'>
                        <img src={pelling}></img>
                        <h5>Peelings</h5>
                        <p>"Revele a sua melhor versão: pele renovada e radiante com nossos peelings."</p>
                        <h3>R$ 100</h3>

                    </div>

                    <div id='acessorio' className='produto'>
                        <img src={micro}></img>
                        <h5>Micropigmentação</h5>
                        <p>"Micropigmentação: realce sua beleza com naturalidade."</p>
                        <h3>R$100 </h3>

                    </div>
                </div>

                <div className='anuncio'>
                    <h3> ESTAMOS COM PROMOÇÃO NOS NOSSOS SERVIÇOS || Desing + Sobrancelha: 30% DE DESCONTO || COMPRE ALGUNS COSMÉTICOS E GANHE 20% DE DESCONTO EM QUALQUER SERVIÇO || APROVEITE NOSSAS OFERTAS || ENTRE EM CONTATO NO MEU WHATSAPP CLICANDO NO BOTÃO <span>FALE COMIGO</span>.</h3>
                </div>

                <div id='whats' className='contatos'>
                    <Link id='fale' > <img id='zap' src={whatsapp} ></img> <h3>FALE COMIGO</h3> </Link>
                </div>

                <div id='mediaLocali' className='localizacao'>
                    <h2>LOCALIZAÇÃO</h2>

                    <iframe src="https://www.google.com/maps/embed?pb=!4v1771681346580!6m8!1m7!1sgItkLErJdXosHT7fQ4eFGw!2m2!1d-7.376560947475788!2d-35.23627229230873!3f202.04597!4f0!5f0.7820865974627469"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                <footer>
                    <div className='petShop'>
                        <div className='THEDOG'>
                            <h3>MARIA VITÓRIA - ESTETICISTA.</h3>

                            <p>Há mais de 5 anos dedico minha carreira a realçar a beleza natural de cada cliente. Acredito que cada pessoa é única e merece um tratamento personalizado, com técnicas modernas e produtos de alta qualidade..</p>
                            <div className='redesSociais'>
                                <a href='#instagram'><img src={instagram}></img></a>
                                <a href='#whatsapp'><img src={whatsapp}></img></a>
                            </div>
                        </div>

                        <div className='LinksRapidos'>
                            <h2>LINKS RÁPIDOS</h2>
                            <Link id='Home' to="/Home"> HOME</Link>
                            <Link id='Cadastre-se' to="/Formulario">AGENDAMENTO</Link>
                            <Link id='sobre' to="/Sobre">SOBRE MIM</Link>
                        </div>

                        <div className='linha'></div>

                    </div>
                    <p className='direitos'>© 2026 TheDogStore. Todos os direitos reservados.</p>
                </footer>

            </div>

        </>
    )
}

export default Home