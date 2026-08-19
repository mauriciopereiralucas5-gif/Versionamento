<template>
    <!-- Alterado: Cabeçalho reestruturado com a moeda ao lado esquerdo -->
    <header class="header-teixeirinhas">
        <div class="header-moeda-bg">🪙</div> 
        <div class="header-textos">
            <h1 class="title">Meus Teixeirinhas</h1>
            <h2 class="subtitle">Sua moeda, suas conquistas!</h2>
        </div>
    </header>

    <div class="grid-cards">
        <div class="card1">
            <!-- Bloco Superior: Divide o ícone e os textos lado a lado -->
            <div class="card-conteudo">
                <!-- Ícone da Esquerda com círculo -->
                <div class="icone-container">
                    <span class="icone-livro"><i class="bi bi-book"></i></span>
                </div>

                <!-- Textos da Direita alinhados na esquerda -->
                <div class="textos-container">
                    <div class="saldo-atual">Saldo Atual</div>
                    <div class="quantidade-saldo">
                        <span>125</span>
                        <span class="emoji-moeda-laranja">$</span>
                    </div>
                    <h3 class="teixeirinhas">Teixeirinhas</h3>
                </div>
            </div>

            <!-- Bloco Inferior: Barra de status que você pode alterar o texto e cor -->
            <div class="status-barra status-sucesso">
                <span class="status-ponto"></span>
                Atualizado agora
            </div>
        </div>
        
        <div class="card2">
             <!-- Bloco Superior: Divide o ícone e os textos lado a lado -->
             <div class="card-conteudo">
                <!-- Ícone da Esquerda com círculo -->
                <div class="icone-container2">
                    <span class="seta-cima"><i class="bi bi-arrow-up-circle"></i></span>
                </div>

                <!-- Textos da Direita alinhados na esquerda -->
                <div class="textos-container">
                    <div class="saldo-atual">Total Recebido</div>
                    <div class="quantidade-saldo">
                        <span>+250</span>
                        <span class="emoji-moeda-laranja">$</span>
                    </div>
                    <h3 class="teixeirinhas">Teixeirinhas</h3>
                </div>
            </div>

            <!-- Bloco Inferior: Barra de status que você pode alterar o texto e cor -->
            <div class="status-barra status-atualizado">
                Este mês
            </div>
        </div>
        
        <div class="card3">
             <!-- Bloco Superior: Divide o ícone e os textos lado a lado -->
             <div class="card-conteudo">
                <!-- Ícone da Esquerda com círculo -->
                <div class="icone-container3">
                    <span class="seta-baixo"><i class="bi bi-arrow-down-circle"></i></span>
                </div>

                <!-- Textos da Direita alinhados na esquerda -->
                <div class="textos-container">
                    <!-- Alterado: classe quantidade-saldo-vermelho adicionada para o valor negativo -->
                    <div class="saldo-atual">Total Gasto</div>
                    <div class="quantidade-saldo quantidade-saldo-vermelho">
                        <span>-125</span>
                        <span class="emoji-moeda-laranja">$</span>
                    </div>
                    <h3 class="teixeirinhas">Teixeirinhas</h3>
                </div>
            </div>

            <!-- Bloco Inferior: Barra de status que você pode alterar o texto e cor -->
            <div class="status-barra status-gasto">
                Este mês
            </div>
        </div>
    </div>

    <div class="texto">
        <p>Em andamento...</p>
    </div>
</template>

<style scoped>
/* --- Ajustes do Novo Cabeçalho do Topo --- */
.header-teixeirinhas {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    margin-top: 20px;
}

.header-moeda-bg {
    width: 65px;
    height: 65px;
    background-color: #fff6ee;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 34px;
}

.header-textos {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.title {
    font-weight: bold;
    font-size: 32px; /* Reduzido levemente para bater com o modelo */
    color: #000;
    margin: 0;
}

.subtitle {
    font-size: 16px;
    color: #666;
    margin: 0;
}

/* --- Seus Estilos Originais Ajustados --- */
.texto p {
    text-align: center;
    font-weight: bold;
    font-size: 80px;
    padding: 20px;
    margin-top: 100px;
}

.grid-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 12px; /* Aumentado para dar o respiro correto da imagem */
    justify-content: flex-start;
}

.card1 {
    border-radius: 20px;
    background-color: #ffffff;
    height: 140px; /* Reduzido o padding e a altura para o box não cortar o conteúdo */
    width: 290px; /* Largura ajustada para caber os elementos sem amassar */
    padding: 24px;
    transition: .3s;
    border: 1px solid #eaeaea;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(160, 160, 160, 0.1);
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between; /* Garante o status fixado perfeitamente embaixo */
    outline: none;
}

.card1:hover {
    border: 2px solid #459f2a;
    box-shadow: 0 12px 25px rgba(167, 255, 140, 0.4);
}

.card-conteudo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 20px;
}

.icone-container {
    width: 65px;
    height: 65px;
    background-color: #e8f7ec;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.icone-livro {
    font-size: 28px;
    color: #2e7d32;
    display: flex;
}

.textos-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
}

.saldo-atual { 
    font-weight: bold; 
    font-size: 13px;
    color: #000000; 
    margin-bottom: 2px;
} 

.quantidade-saldo { 
    font-size: 34px; 
    color: #459f2a; 
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 6px;
    line-height: 1;
    margin-bottom: 2px;
} 

/* Nova variação de cor para o Total Gasto */
.quantidade-saldo-vermelho {
    color: #ff2b2b;
}

/* Transforma o caractere no círculo laranja com o $ branco */
.emoji-moeda-laranja {
    font-size: 13px;
    background-color: #ff9100;
    color: #ffffff;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.teixeirinhas { 
    font-weight: normal;
    font-size: 13px; 
    color: #888; 
}

.status-barra {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 4px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
}

.status-ponto {
    width: 6px;
    height: 6px;
    border-radius: 50%;
}

.status-sucesso {
    background-color: #e8f7ec;
    color: #2e7d32;
}
.status-sucesso .status-ponto {
    background-color: #2e7d32;
}

/* --- Estilos do Card 2 --- */
.card2 {
    border-radius: 20px;
    background-color: #ffffff;
    height: 140px;
    width: 290px;
    padding: 24px;
    transition: .3s;
    border: 1px solid #eaeaea;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(160, 160, 160, 0.1);
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    outline: none;
}

.card2:hover {
    border: 2px solid #3b71ca;
    box-shadow: 0 12px 25px rgba(59, 113, 202, 0.3);
}

.icone-container2 {
    width: 65px;
    height: 65px;
    background-color: #e8f0fe;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.seta-cima {
    font-size: 28px;
    color: #3b71ca;
    display: flex;
}

.status-atualizado {
    background-color: #e8f0fe;
    color: #3b71ca;
}

/* --- Estilos do Card 3 --- */
.card3 {
    border-radius: 20px;
    background-color: #ffffff;
    height: 140px;
    width: 290px;
    padding: 24px;
    transition: .3s;
    border: 1px solid #eaeaea;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(160, 160, 160, 0.1);
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    outline: none;
}

.card3:hover {
    border: 2px solid #ff2b2b;
    box-shadow: 0 12px 25px rgba(255, 43, 43, 0.3);
}

.icone-container3 {
    width: 65px;
    height: 65px;
    background-color: #fce8e6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.seta-baixo {
    font-size: 28px;
    color: #ff2b2b;
    display: flex;
}

.status-gasto {
    background-color: #fce8e6;
    color: #ff2b2b;
}
</style>