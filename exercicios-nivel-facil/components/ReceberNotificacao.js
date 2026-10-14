'use client'
import { useState } from "react";

export default function ReceberNotificacao(){
    const [notificacao, setNotificacao] = useState(true);

    return(
        <div>
            <button onClick={() => setNotificacao(!notificacao)} style={{cursor: 'pointer'}}>Receber notificações</button>
            <p>{notificacao ? 'Ativado' : 'Desativado'}</p>
        </div>
        
    );
}