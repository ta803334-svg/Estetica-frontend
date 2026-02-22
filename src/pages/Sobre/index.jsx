import { Link } from "react-router-dom"
import './sobre.css'
import logo from "../Home/logo1.png"

function sobre() {
    return (
        <>
            <div className="Body-Sobre">

                <header>
                    <Link id='home' to="/Home"> <img className="logo" src={logo}></img> </Link>
                    <div id='nav'>
                        <Link id='link' to="/Home"> HOME </Link>
                        <Link id='link' to="/Formulario">AGENDAMENTO</Link>
                        <Link id='link' to="/Sobre">SOBRE MIM</Link>
                    </div>

                </header>

                <div className="quemsomos">
                    <h1> QUEM SOU EU ?</h1>
                    <p> Me chamo Maria Vitória, sou formada pelo centro universitário UNIESP como Esteticista Cosmetóloga, Também sou Pós-Graduada em Estética Avançadada Expertise Em Injetáveis pela FACOP(Faculdade Do Centro Oeste Paulista).Há mais de 10 anos dedico minha carreira a realçar a beleza natural de cada cliente. Acredito que cada pessoa é única e merece um tratamento personalizado, com técnicas modernas e produtos de alta qualidade. Há mais de 10 anos dedico minha carreira a realçar a beleza natural de cada cliente. Acredito que cada pessoa é única e merece um tratamento personalizado, com técnicas modernas e produtos de alta qualidade. </p>
                </div>

                <div className="missao">
                    <h1>MISSÃO</h1>
                    <p>Oferecer cuidados estéticos personalizados que promovam saúde, beleza e autoestima, utilizando técnicas seguras e eficazes para realçar a beleza natural de cada cliente.</p>
                </div>

                <div className="visao">
                    <h1>VISÃO</h1>
                    <p>Ser referência em estética e bem-estar, reconhecida pela excelência nos resultados, inovação nos procedimentos e pelo atendimento humanizado, tornando-se a primeira escolha dos clientes que buscam confiança e qualidade..</p>
                </div>

                <div className="valor">
                    <h1>VALOR</h1>
                    <p>Profissionalismo: atuar com ética, responsabilidade e dedicação.<br></br>

                        Respeito: valorizar a individualidade e necessidades de cada cliente.<br></br>

                        Inovação: buscar atualização constante em técnicas e tendências da estética.<br></br>

                        Segurança: garantir procedimentos realizados com higiene e cuidado.<br></br>

                        Autoestima: contribuir para que cada cliente se sinta mais confiante e feliz com sua aparência.<br></br>

                        Empatia: acolher e ouvir, criando uma experiência positiva e personalizada.</p>
                </div>

            </div>


        </>
    )


}
export default sobre