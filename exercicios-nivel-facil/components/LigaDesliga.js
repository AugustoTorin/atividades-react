'use client'
import { useState } from "react";

export default function ReceberNotificacao(){
    const [notificacao, setNotificacao] = useState(true);

    return(
        <div>
            <button onClick={() => setNotificacao(notificacao === true ? false : true)} style={{cursor: 'pointer'}}>Receber notificações</button>
            <p>{notificacao}</p>
        </div>
        
    );
}