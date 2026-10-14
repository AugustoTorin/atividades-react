'use client'
import { useState } from "react";

export default function ModoEscuro(){
    const [modoEscuro, setModoEscuro] = useState(false);

    return(
        <div className={modoEscuro ? 'fundo-escuro' : 'fundo-claro'}>
            <button onClick={() => setModoEscuro(!modoEscuro)} style={{cursor: 'pointer'}}>Alterar tema</button>
            <p>{modoEscuro ? 'Tema Escuro' : 'Tema Claro'}</p>
        </div>
    );
}