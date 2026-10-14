'use client'
import {useState} from "react";

import ModoEscuro from "@/components/ModoEscuro";
import Interruptor from "@/components/Interruptor";
import ControladorFonte from "@/components/ControleFonte";
import ResumoConfiguracoes from "@/components/ResumoConfiguracoes";

export default function Home() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [tamanhoFonte, setTamanhoFonte] = useState(16);

  return (
    <>
      <ModoEscuro />

      <Interruptor titulo={'Receber notificações'} valor={notificacoes} aoAlternar={() => setNotificacoes(!notificacoes)}/>
      <Interruptor titulo={'Receber novidades por e-mail'} valor={novidades} aoAlternar={() => setNovidades(!novidades)}/>

      <ControladorFonte tamanhoFonte={tamanhoFonte} setTamanhoFonte={setTamanhoFonte}/>  
      
      <ResumoConfiguracoes notificacoes={notificacoes} novidades={novidades} tamanhoFonte={tamanhoFonte}/>
    </>

  );
}