const jogos = [
    { id: 1, nome: "Rocket League" },
    { id: 2, nome: "Minecraft" },
    { id: 3, nome: "The Bazaar" }
];

function NovaListaJogos(){
    return(
        <div>
            <ul>{jogos.map(jogo => <Jogo key={jogo.id} nome={jogo.nome} />)}</ul>
        </div>
    );
}

function Jogo({nome}){
    return(
        <li>{nome}</li>
    );
}