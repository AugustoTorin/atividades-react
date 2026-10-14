'use client'

export default function ResumoConfiguracoes({notificacoes, novidades, tamanhoFonte}){
    return(
        <section className="painel-configuracoes">
            <div className="painel-container">
                <h1 className="painel-titulo">Painel de Configurações</h1>

                <div className="painel-card">
                    <h2>Resumo das configurações</h2>

                    <div className="configuracao-linha">
                        <span>Notificações</span>
                        <span className={`status ${notificacoes ? 'status-ativo' : 'status-inativo'}`}>
                            {notificacoes ? 'Ativadas' : 'Desativadas'}
                        </span>
                    </div>

                    <div className="configuracao-linha">
                        <span>Novidades por e-mail</span>
                        <span className={`status ${novidades ? 'status-ativo' : 'status-inativo'}`}>
                            {novidades ? 'Ativadas' : 'Desativadas'}
                        </span>
                    </div>

                    <div className="configuracao-linha">
                        <span>Tamanho da fonte</span>
                        <span className="configuracao-valor" style={{ fontSize: tamanhoFonte }}>
                            {tamanhoFonte}px
                        </span>
                    </div>
                </div>
            </div>
        </section>
        
    );
}