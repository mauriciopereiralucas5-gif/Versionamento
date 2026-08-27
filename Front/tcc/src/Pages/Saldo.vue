<script setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

const router = useRouter()

function verHistorico(){
  router.push('/historico')
}

function irLoja(){
  router.push('/mercado')
}

const periodoSelecionado = ref('Este Mês')

const dadosGrafico = {
  'Este Mês': [105, 108, 112, 110, 115, 118, 125],
  'Fevereiro': [80, 85, 83, 90, 95, 100, 105],
  'Março': [90, 94, 98, 96, 105, 110, 115],
  'Abril': [100, 102, 108, 105, 115, 120, 125],
  'Maio': [110, 108, 115, 118, 120, 123, 125],
  'Junho': [95, 100, 105, 108, 112, 118, 125],
  'Agosto': [100, 104, 108, 115, 117, 120, 125],
  'Setembro': [105, 107, 110, 116, 120, 122, 125],
  'Outubro': [90, 95, 100, 108, 115, 120, 125],
  'Novembro': [100, 105, 110, 112, 118, 122, 125]
}

const valoresGrafico = computed(() => {
  return dadosGrafico[periodoSelecionado.value]
})
</script>

<template>
    <!-- Cabeçalho Principal -->
    <header class="header-teixeirinhas">
        <div class="header-moeda-bg">🪙</div> 
        <div class="header-textos">
            <h1 class="title">Meus Teixeirinhas</h1>
            <h2 class="subtitle">Sua moeda, suas conquistas!</h2>
        </div>
    </header>

    <!-- Grid Superior de Cards de Balanço -->
    <div class="grid-cards">
        <div class="card1">
            <div class="card-conteudo">
                <div class="icone-container">
                    <span class="icone-livro"><i class="bi bi-book"></i></span>
                </div>
                <div class="textos-container">
                    <div class="saldo-atual">Saldo Atual</div>
                    <div class="quantidade-saldo">
                        <span>125</span>
                        <span class="emoji-moeda-laranja">$</span>
                    </div>
                    <h3 class="teixeirinhas">Teixeirinhas</h3>
                </div>
            </div>
            <div class="status-barra status-sucesso">
                <span class="status-ponto"></span>
                Atualizado agora
            </div>
        </div>
        
        <div class="card2">
             <div class="card-conteudo">
                <div class="icone-container2">
                    <span class="seta-cima"><i class="bi bi-arrow-up-circle"></i></span>
                </div>
                <div class="textos-container">
                    <div class="saldo-atual">Total Recebido</div>
                    <div class="quantidade-saldo">
                        <span>+250</span>
                        <span class="emoji-moeda-laranja">$</span>
                    </div>
                    <h3 class="teixeirinhas">Teixeirinhas</h3>
                </div>
            </div>
            <div class="status-barra status-atualizado">
                Este mês
            </div>
        </div>
        
        <div class="card3">
             <div class="card-conteudo">
                <div class="icone-container3">
                    <span class="seta-baixo"><i class="bi bi-arrow-down-circle"></i></span>
                </div>
                <div class="textos-container">
                    <div class="saldo-atual">Total Gasto</div>
                    <div class="quantidade-saldo quantidade-saldo-vermelho">
                        <span>-125</span>
                        <span class="emoji-moeda-laranja">$</span>
                    </div>
                    <h3 class="teixeirinhas">Teixeirinhas</h3>
                </div>
            </div>
            <div class="status-barra status-gasto">
                Este mês
            </div>
        </div>
    </div>

    <!-- Novo Bloco Inferior: Alinhamento Triplo baseado na Imagem -->
    <div class="container-grid-inferior">
        
        <!-- Coluna 1: Como Ganhar Teixeirinhas -->
        <div class="coluna-painel como-ganhar">
            <h3 class="painel-titulo">Como ganhar Teixeirinhas?</h3>
            <div class="lista-dicas">
                
                <div class="dica-item">
                    <div class="dica-icone icone-bg-verde">
                        <i class="bi bi-check-circle"></i>
                    </div>
                    <div class="dica-textos">
                        <h4>Frequência 100% da semana</h4>
                        <p>Por manter presença total nas aulas.</p>
                    </div>
                    <div class="dica-valor valor-positivo">+10 <span class="moeda-mini">$</span></div>
                </div>

                <div class="dica-item">
                    <div class="dica-icone icone-bg-roxo">
                        <i class="bi bi-people-fill"></i>
                    </div>
                    <div class="dica-textos">
                        <h4>Participação em atividades</h4>
                        <p>Por participar ativamente das atividades escolares.</p>
                    </div>
                    <div class="dica-valor valor-positivo">+5 <span class="moeda-mini">$</span></div>
                </div>

                <div class="dica-item">
                    <div class="dica-icone icone-bg-azul">
                        <i class="bi bi-clipboard2-check"></i>
                    </div>
                    <div class="dica-textos">
                        <h4>Entrega de trabalhos no prazo</h4>
                        <p>Por entregar seus trabalhos dentro do prazo.</p>
                    </div>
                    <div class="dica-valor valor-positivo">+5 <span class="moeda-mini">$</span></div>
                </div>

                <div class="dica-item">
                    <div class="dica-icone icone-bg-vermelho">
                        <i class="bi bi-heart-fill"></i>
                    </div>
                    <div class="dica-textos">
                        <h4>Comportamento exemplar</h4>
                        <p>Por atitudes positivas e respeito com todos.</p>
                    </div>
                    <div class="dica-valor valor-positivo">+10 <span class="moeda-mini">$</span></div>
                </div>

                <div class="dica-item">
                    <div class="dica-icone icone-bg-laranha">
                        <i class="bi bi-emoji-smile"></i>
                    </div>
                    <div class="dica-textos">
                        <h4>Ajudar colegas</h4>
                        <p>Por ajudar colegas e promover um ambiente melhor.</p>
                    </div>
                    <div class="dica-valor valor-positivo">+5 <span class="moeda-mini">$</span></div>
                </div>

            </div>
            
            <!-- Box de Dica Flutuante Inferior -->
            <div class="dica-box-rodape">
                <span class="dica-lampada"><i class="bi bi-lightbulb-fill"></i></span>
                <p><strong>Dica:</strong> Use suas Teixeirinhas com sabedoria e continue acumulando!</p>
            </div>
        </div>

        <!-- Coluna 2: Evolução do Saldo -->
        <div class="coluna-painel evolucao-saldo">
            <div class="painel-header-flex">
                <h3 class="painel-titulo">Evolução do Saldo</h3>
                <select class="select-periodo"
                v-model="periodoSelecionado"
                >
                    <option>Este Mês</option>
                    <option>Fevereiro</option>
                    <option>Março</option>
                    <option>Abril</option>
                    <option>Maio</option>
                    <option>Junho</option>
                    <option>Agosto</option>
                    <option>Setembro</option>
                    <option>Outubro</option>
                    <option>Novembro</option>
                </select>
            </div>
            <!-- Área reservada para o seu gráfico futuramente -->
            <div class="area-grafico">

    <div class="grafico-valores">
        <span>125</span>
        <span>115</span>
        <span>105</span>
        <span>95</span>
        <span>85</span>
    </div>

    <svg
    class="grafico-svg"
    viewBox="0 0 500 260"
    preserveAspectRatio="none"
>

    <!-- Linhas horizontais -->

    <line
        x1="0"
        y1="20"
        x2="500"
        y2="20"
        class="linha-grade"
    />

    <line
        x1="0"
        y1="80"
        x2="500"
        y2="80"
        class="linha-grade"
    />

    <line
        x1="0"
        y1="140"
        x2="500"
        y2="140"
        class="linha-grade"
    />

    <line
        x1="0"
        y1="200"
        x2="500"
        y2="200"
        class="linha-grade"
    />

    <line
        x1="0"
        y1="250"
        x2="500"
        y2="250"
        class="linha-grade"
    />

    <!-- Área preenchida -->

    <polygon
        :points="`
            0,${230 - ((valoresGrafico[0] - 80) * 3)}
            83,${230 - ((valoresGrafico[1] - 80) * 3)}
            166,${230 - ((valoresGrafico[2] - 80) * 3)}
            250,${230 - ((valoresGrafico[3] - 80) * 3)}
            333,${230 - ((valoresGrafico[4] - 80) * 3)}
            416,${230 - ((valoresGrafico[5] - 80) * 3)}
            500,${230 - ((valoresGrafico[6] - 80) * 3)}
            500,250
            0,250
        `"
        class="area-grafico-preenchida"
    />

    <!-- Linha do gráfico -->

    <polyline
        :points="`
            0,${230 - ((valoresGrafico[0] - 80) * 3)}
            83,${230 - ((valoresGrafico[1] - 80) * 3)}
            166,${230 - ((valoresGrafico[2] - 80) * 3)}
            250,${230 - ((valoresGrafico[3] - 80) * 3)}
            333,${230 - ((valoresGrafico[4] - 80) * 3)}
            416,${230 - ((valoresGrafico[5] - 80) * 3)}
            500,${230 - ((valoresGrafico[6] - 80) * 3)}
        `"
        class="linha-grafico"
    />

    <!-- Pontos -->

    <circle
        v-for="(valor, index) in valoresGrafico"
        :key="index"
        :cx="index * 83.33"
        :cy="230 - ((valor - 80) * 3)"
        r="5"
        class="ponto-grafico"
    />

</svg>

    <div class="grafico-legendas">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
    </div>

</div>
            <div class="status-mensagem-parabens">
                <span class="estrela-icone"><i class="bi bi-bookmark-star-fill"></i></span>
                <div>
                    <h4>Você está indo muito bem!</h4>
                    <p>Continue assim para conquistar ainda mais!</p>
                </div>
            </div>
        </div>

        <!-- Coluna 3: Últimas Movimentações -->
        <div class="coluna-painel ultimas-movimentacoes">
            <div class="painel-header-flex">
                <h3 class="painel-titulo">Últimas movimentações</h3>
            </div>
            
            <div class="lista-movimentacoes">
                <div class="dica-item">
                    <div class="dica-icone icone-bg-verde"><i class="bi bi-check-circle"></i></div>
                    <div class="dica-textos">
                        <h4>Frequência 100% da semana</h4>
                        <p class="data-mov">10/05/2024</p>
                    </div>
                    <div class="dica-valor valor-positivo">+10 <span class="moeda-mini">$</span></div>
                </div>

                <div class="dica-item">
                    <div class="dica-icone icone-bg-sacola"><i class="bi bi-cart-fill"></i></div>
                    <div class="dica-textos">
                        <h4>Compra realizada</h4>
                        <p class="sub-detalhe">Laka Oreo</p>
                        <p class="data-mov">08/05/2024</p>
                    </div>
                    <div class="dica-valor valor-negativo">-4 <span class="moeda-mini">$</span></div>
                </div>
            </div>

            <button @click="verHistorico" class="btn-historico-completo">
                <i class="bi bi-clock-history"></i> Ver histórico completo
            </button>
        </div>
    </div>

    <!-- Mensagem para sugerir compras (Ajustada com a nova estrutura HTML) -->
    <div class="status-mensagem-comprar">
        <div class="mensagem-conteudo-esquerdo">
            <i class="bi bi-gift presente-icone"></i>
            <div class="mensagem-textos">
                <h4>Troque suas Teixeirinhas!</h4>
                <p>Acesse a loja e veja os produtos disponíveis para você!</p>
            </div>
        </div>
        <button @click="irLoja" class="btn-ir-comprar">
            <i class="bi bi-basket"></i>Ir para a loja
        </button>
    </div>
</template>

<style scoped>
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
    font-size: 32px;
    color: #000;
    margin: 0;
}

.subtitle {
    font-size: 16px;
    color: #666;
    margin: 0;
}

.grid-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-start;
    margin-bottom: 25px;
}
.card1, .card2, .card3 {
    border-radius: 20px;
    background-color: #ffffff;
    height: 140px;
    width: 290px;
    padding: 24px;
    transition: .3s;
    border: 1px solid #eaeaea;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(160, 160, 160, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    outline: none;
}

.card1:hover { 
    border: 2px solid #459f2a; 
    box-shadow: 0 12px 25px rgba(167, 255, 140, 0.3);
}

.card2:hover { 
    border: 2px solid #3b71ca; 
    box-shadow: 0 12px 25px rgba(59, 113, 202, 0.2);
}

.card3:hover {
    border: 2px solid #ff2b2b; 
    box-shadow: 0 12px 25px rgba(255, 43, 43, 0.2);
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
}

.quantidade-saldo-vermelho {
    color: #ff2b2b;
}

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
    margin-top: 2px;
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

.status-atualizado { 
    background-color: #e8f0fe; 
    color: #3b71ca;
}

.status-gasto { 
    background-color: #fce8e6; 
    color: #ff2b2b;
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

.icone-container3 {
    width: 65px;
    height: 65px;
    background-color: #fce8e6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;flex-shrink: 0;
}

.seta-baixo {font-size: 28px;
    color: #ff2b2b;
    display: flex;
}

/* --- Estrutura Grid do Painel Inferior --- */

.container-grid-inferior {
    display: grid;
    grid-template-columns: 1.1fr 1.8fr 1.1fr;
    gap: 12px;
    margin-top: 25px;
}

.coluna-painel {
    background-color: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 24px;
    padding: 24px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.02);
    display: flex;
    flex-direction: column;
}

.painel-titulo {
    font-size: 18px;
    font-weight: bold;
    color: #111;
    margin-bottom: 20px;
    text-align: left;
}

.painel-header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.evolucao-saldo .painel-header-flex {
    margin-bottom: 30px;
}

.painel-header-flex .painel-titulo { 
    margin-bottom: 0;
}

.lista-dicas, .lista-movimentacoes {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-grow: 1;
}

.dica-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.dica-icone {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
}

.icone-bg-verde { 
    background-color: #eaf7ed; 
    color: #2e7d32;
}

.icone-bg-roxo { 
    background-color: #f3e5f5; 
    color: #8e24aa;
}

.icone-bg-azul { 
    background-color: #e8f0fe; 
    color: #1a73e8;
}

.icone-bg-vermelho { 
    background-color: #ffebee; 
    color: #e53935;
}

.icone-bg-laranha { 
    background-color: #fff3e0; 
    color: #fb8c00;
}

.icone-bg-sacola { 
    background-color: #ffebee; 
    color: #e53935;
}

.dica-textos {
    flex-grow: 1;
    text-align: left;
    padding-left: 14px;
}

.dica-textos h4 { 
    font-size: 14px; 
    font-weight: bold; 
    color: #222; 
    margin: 0 0 2px 0;
}

.dica-textos p { 
    font-size: 12px; 
    color: #777; 
    margin: 0;
}

.dica-textos .sub-detalhe { 
    font-size: 13px; 
    color: #333; 
    font-weight: 500;
}

.dica-textos .data-mov { 
    font-size: 11px; 
    color: #aaa; 
    margin-top: 2px;
}

.dica-valor {
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 4px;
}

.valor-positivo { 
    color: #459f2a;
}

.valor-negativo { 
    color: #d93025;
}

.moeda-mini {
    font-size: 10px; 
    background-color: #ff9100; 
    color: white; 
    width: 14px; 
    height: 14px;
    border-radius: 50%; 
    display: inline-flex;
    align-items: center; 
    justify-content: center;
}

.dica-box-rodape {
    background-color: #fffbeb;
    border-radius: 14px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 25px;
}

.dica-lampada { 
    font-size: 20px; 
    color: #ffa200; 
    display: flex;
}

.dica-box-rodape p { 
    font-size: 12px; 
    color: #b45309; 
    text-align: left; 
    margin: 0; 
    line-height: 1.4;
}

.select-periodo {
    padding: 4px 12px; 
    border: 1px solid #ccc; 
    border-radius: 10px; 
    font-size: 13px; 
    color: #333; 
    outline: none; 
    background: #fff;
}

.status-mensagem-parabens {
    background-color: #eaf7ed; 
    border-radius: 18px; 
    padding: 18px 20px;
    display: flex; 
    align-items: center; 
    gap: 15px;
    margin-top: -10px;
}

.estrela-icone { 
    font-size: 22px; 
    color: #2e7d32; 
    display: flex;
}

.status-mensagem-parabens h4 { 
    font-size: 13px; 
    font-weight: bold; 
    color: #1b5e20; 
    margin: 0; 
    text-align: left;
}

.status-mensagem-parabens p { 
    font-size: 12px; 
    color: #2e7d32; 
    margin: 0; 
    text-align: left;
}

.btn-historico-completo {
    margin-top: 20px; 
    padding: 12px; 
    background: transparent;
    border: 1px solid #ff6a00; 
    color: #ff6a00;
    border-radius: 14px; 
    font-weight: bold; 
    font-size: 14px; 
    cursor: pointer; 
    transition: .2s;
    display: flex;
    align-items: center; 
    justify-content: center; 
    gap: 8px;
}

.btn-historico-completo:hover { 
    background-color: #fff3eb;
}

/* --- Mensagem para sugerir compras --- */

.status-mensagem-comprar {
    background-color: #fff3e0;
    border-radius: 14px;
    padding: 12px 16px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    /* Alinhamentos adicionados */
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
}

/* Auxilia no agrupamento do lado esquerdo */

.mensagem-conteudo-esquerdo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.mensagem-textos {
    display: flex;
    flex-direction: column;
}

.presente-icone {
    font-size: 30px;
    color: #ff8121;
}

.status-mensagem-comprar h4 {
    font-size: 13px;
    font-weight: bold;
    color: #b45309;
    margin: 0;
    text-align: left;
}

.status-mensagem-comprar p {
    font-size: 12px;
    color: #b45309;
    margin: 0;
    text-align: left;
}

.btn-ir-comprar {
    background-color: #ff6a00;
    border: 1px solid #ff6a00;
    color: #ffffff;
    border-radius: 15px;
    width: 120px;
    height: 40px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-ir-comprar:hover {
    background-color: #fff3eb;
    color: #ff6a00;
}

/* --- GRÁFICO DE EVOLUÇÃO --- */

.area-grafico {
    height: 400px;
    width: 100%;
    position: relative;

    padding-left: 40px;
    padding-right: 5px;
    padding-top: 35px;

    box-sizing: border-box;
}

.grafico-svg {
    width: 100%;
    height: 300px;
    display: block;
    overflow: visible;
}

.linha-grade {
    stroke: #eeeeee;
    stroke-width: 1;
}

.linha-grafico {
    fill: none;
    stroke: #ff6a00;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.area-grafico-preenchida {
    fill: rgba(255, 106, 0, 0.10);
}

.ponto-grafico {
    fill: white;
    stroke: #ff6a00;
    stroke-width: 3;
}

.grafico-valores {
    position: absolute;
    left: 0;
    top: 5px;
    height: 280px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-size: 11px;
    color: #999;
}

.grafico-legendas {
    width: calc(100% - 40px);

    display: flex;
    justify-content: space-between;

    margin-top: 8px;

    font-size: 11px;
    color: #999;
}
</style>