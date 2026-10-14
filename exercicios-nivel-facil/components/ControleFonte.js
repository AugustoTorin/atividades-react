'use client'

export default function ControladorFonte({tamanhoFonte, setTamanhoFonte}){

    return(
        <div>
            <button onClick={() => setTamanhoFonte(prev => Math.min(prev + 2, 24))} style={{cursor: 'pointer'}}>Aumentar fonte</button>
            <p></p>
            <button onClick={() => setTamanhoFonte(prev => Math.max(prev - 2, 12))} style={{cursor: 'pointer'}}>Diminuir fonte</button>
            <p style={{fontSize: tamanhoFonte}}>Tamanho atual da fonte: {tamanhoFonte}px</p>
        </div>
    );
}