export default function Interruptor({titulo, valor, aoAlternar}){
    return(
        <div>
            <button onClick={() => aoAlternar()} style={{cursor: 'pointer'}}>Título: {titulo}</button>
            <p>Valor: {valor ? 'Ativado' : 'Desativado'}</p>
        </div>

    );
}