import { useState, useRef } from 'react'
import './style.css'
import logo from "../Home/logo1.png"

//aqui se importa o axios,que demos um nome de API
import api from '../../services/api'
import { Link } from 'react-router-dom'

function Formulario() {

  const inputNome = useRef()
  const inputTelefone = useRef()
  const inputHorario = useRef()
  const inputServicos = useRef()
  const inputEmail = useRef() 
  const inputData = useRef()

  async function agendamento() {

    let usuario = []
    const dadosFormulario = {
      nomeCompleto: inputNome.current.value,
      numeroTelefone: inputTelefone.current.value,
      horario: inputHorario.current.value,
      servicos: inputServicos.current.value,
      dataa: inputData.current.value,
      email: inputEmail.current.value,
    }

    const camposVazios = Object.values(dadosFormulario).some(value => !value)
    if (camposVazios) {
      alert("OPA,ALGUM CAMPO FALTOU SER PREENCHIDO")
      return;
    }
    else {
      alert("CADASTRO FEITO")
    }
    try {

      usuario = await api.post("/usuarios", dadosFormulario)
      console.log("dados enviados", usuario.data, dadosFormulario)

      
      const numeroEmpresa = "5583987867624"; // COLOQUE O NÚMERO DA EMPRESA AQUI (com DDD e sem espaços)

      const mensagem = encodeURIComponent(`Novo agendamento!` +
        `Nome Completo: ${dadosFormulario.nomeCompleto}` +
        `Horário: ${dadosFormulario.horario} ` +
        `Serviço: ${dadosFormulario.servicos}` +
        `Telefone: ${dadosFormulario.numeroTelefone}` )

      const urlWhatsapp = `https://wa.me/${numeroEmpresa}?text=${mensagem}`;

      // 3. Abre o WhatsApp em uma nova aba
      window.location.href = urlWhatsapp;

      alert("CADASTRO FEITO E ENVIADO AO WHATSAPP!");

      inputNome.current.value = "";
      inputHorario.current.value = "";
      inputServicos.current.value = "";
      inputData.current.value = "";
      inputTelefone.current.value = "";
      inputEmail.current.value = "";

    }
    catch (error) {
      console.error("erro ao enviar os dados", error.usuario ? error.usuario.dadosFormulario : error.message)
    }
  }
  return (
    <>
    <div className='Body-Formulario'>
      <header>
        <Link id='home' to="/Home"> <img className='logo' src={logo}></img> </Link>
        <div id='nav'>
          <Link id='link' to="/Home"> HOME </Link>
          <Link id='link' to="/Formulario">AGENDAMENTO</Link>
          <Link id='link' to="/Sobre">SOBRE MIM</Link>
        </div>
      </header>

      


      <div className='formulario'>
        <h1 id='cadastre'>  AGENDE SEU SERVIÇO DESEJADO AQUI! </h1>
        <form>
          <input id='nomeTutor' placeholder='NOME COMPLETO' required ref={inputNome} ></input>

          <input id='telefoneTutor' placeholder='Celular (xx) xxx-xx *' ref={inputTelefone} required ></input>

          <input type='date'  style={{color: "white",background:"rgba(212, 160, 92, 0.54)"}} placeholder='Selecione a Data*' ref={inputData}></input>

          <select className='horario' ref={inputHorario} style={{background:"rgba(212, 160, 92, 0.54)", color:"white"}} >
            <option  value={""}>Horário</option>
            <option  value={"09:00"}>09:00</option>
            <option value={"09:30"}>09:30</option>
            <option value={"10:00"}>10:00</option>
            <option value={"10:30"}>10:30</option>
            <option value={"11:00"}>11:00</option>
            <option value={"11:30"}>11:30</option>
            <option value={"13:00"}>13:00</option>
            <option value={"13:30"}>13:30</option>
            <option value={"14:00"}>14:00</option>
            <option value={"14:30"}>14:30</option>
            <option value={"15:00"}>15:00</option>
            <option value={"15:30"}>15:30</option>
            <option value={"16:00"}>16:00</option>
            <option value={"16:30"}>16:30</option>
            <option value={"17:00"}>17:00</option>
          </select>

          <select ref={inputServicos} style={{background:"rgba(212, 160, 92, 0.54)", color:"white"}} >
            <option value={""}>SERVIÇOS</option>
            <option value={"Limpeza Profunda"}>Limpeza Profunda - R$ 150</option>
            <option value={"Massagem Realaxante"}>Massagem Relaxante - R$ 180</option>
            <option value={"Desing De Sobrancelhas"}>Desing De Sobrancelhas - R$ 100</option>
            <option value={"Micropigmentação"}>Micropigmentação - R$ 120</option>
            <option value={"Micro + Sobrancelha"}>Micropigmentação + Sobrancelha - R$ 195</option>
            <option value={"Peelings"}>Peelings - R$ 90</option>
          </select>
          <input id='email' type='email' placeholder='seu@email.com' required ref={inputEmail} ></input>
          <button id='bnt_cadastrar' type='button' onClick={agendamento}> Confirmar Agendamento </button>
          <div>
            <h3 id='mensagem'></h3>
          </div>
        </form >
      </div >

    </div>
      
    </>
  )
}

export default Formulario
