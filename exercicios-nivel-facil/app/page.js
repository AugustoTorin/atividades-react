'use client'
import {useState} from "react";

import ModoEscuro from "@/components/ModoEscuro";
import ReceberNotificacao from "@/components/ReceberNotificacao";
import ReceberNovidadesEmail from "@/components/ReceberNovidadesEmail";
import Interruptor from "@/components/Interruptor";

export default function Home() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [novidades, setNovidades] = useState(false);

  return (
    <>
      <ReceberNotificacao />

      <ModoEscuro />

      <ReceberNovidadesEmail />

      <Interruptor titulo={'Receber notificações'} valor={notificacoes} aoAlternar={() => setNotificacoes(!notificacoes)}/>
      <Interruptor titulo={'Receber novidades por e-mail'} valor={novidades} aoAlternar={() => setNovidades(!novidades)}/>
    </>
  );
}