'use client'
import { useState } from "react";

export default function ReceberNovidadesEmail(){
    const [novidades, setNovidades] = useState(false);

    return(
        <div>
            <button onClick={() => setNovidades(!novidades)} style={{cursor: 'pointer'}}>{novidades ? 'Não quero receber novidades por e-mail': 'Quero receber novidades por e-mail'}</button>
            <p>{novidades ? 'Você receberá novidades por e-mail' : 'Você não receberá novidades por e-mail'}</p>
        </div>
    );
}