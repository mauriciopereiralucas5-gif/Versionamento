<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const categoriaSelecionada = ref('Todas')

function voltarSaldo(){
    router.push('/teixeirinhas')
}
</script>

<template>
        <header class="header-teixeirinhas">
        <div class="header-moeda-bg"><i class="bi bi-clock-history"></i></div> 
        <div class="header-textos">
            <h1 class="title">Histórico</h1>
            <h2 class="subtitle">Veja suas atividades e movimentações de Teixeirinhas!</h2>
        </div>
    </header>

    <!-- Grid Superior de Cards de Balanço -->
    <div class="grid-cards">
        <div class="card1">
            <div class="card-conteudo">
                <div class="icone-container">
                    <span class="seta-cima"><i class="bi bi-arrow-up"></i></span>
                </div>
                <div class="textos-container">
                    <div class="saldo-atual">Total Recebido</div>
                    <div class="quantidade-saldo1">
                        <span>+250</span>
                        <span class="emoji-moeda-laranja">$</span>
                    </div>
                    <h3 class="teixeirinhas">Teixeirinhas</h3>
                </div>
            </div>
            <div class="status-barra status-sucesso">
                Este mês
            </div>
        </div>

        <div class="card2">
             <div class="card-conteudo">
                <div class="icone-container2">
                    <span class="seta-baixo"><i class="bi bi-arrow-down"></i></span>
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
        
        <div class="card3">
             <div class="card-conteudo">
                <div class="icone-container3">
                    <span class="icone-carteira"><i class="bi bi-wallet2"></i></span>
                </div>
                <div class="textos-container">
                    <div class="saldo-atual">Saldo Atual</div>
                    <div class="quantidade-saldo2">
                        <span>150</span>
                        <span class="emoji-moeda-laranja">$</span>
                    </div>
                    <h3 class="teixeirinhas">Teixeirinhas</h3>
                </div>
            </div>
            <div class="status-barra status-atualizado">
                <span class="status-ponto"></span>
                Atualizado agora
            </div>
        </div>

        <div class="card4">
             <div class="card-conteudo">
                <div class="icone-container4">
                    <span class="seta-lados"><i class="bi bi-arrow-left-right"></i></span>
                </div>
                <div class="textos-container">
                    <div class="transacoes-atual">Total de Transações</div>
                    <div class="total-transacoes">
                        <span>20</span>
                    </div>
                    <h3 class="teixeirinhas">Transações realizadas</h3>
                </div>
            </div>
            <div class="status-barra status-transacoes">
                Este mês
            </div>
        </div>

    </div>

    <div class="grid-tipos">
        <button class="botao-todas"
        :class="{ativo: categoriaSelecionada === 'Todas'}"
        @click="categoriaSelecionada = 'Todas'">
        Todas
        </button>
        <button class="botao-recebidas"
        :class="{ativo: categoriaSelecionada === 'Recebidas'}"
        @click="categoriaSelecionada = 'Recebidas'">
        Recebidas
        </button>
        <button class="botao-gastas"
        :class="{ativo: categoriaSelecionada === 'Gastas'}"
        @click="categoriaSelecionada = 'Gastas'">
        Gastas
        </button>
        <button class="botao-compras"
        :class="{ativo: categoriaSelecionada === 'Compras'}"
        @click="categoriaSelecionada = 'Compras'">
        Compras
        </button>
        <button class="botao-conquistas"
        :class="{ativo: categoriaSelecionada === 'Conquistas'}"
        @click="categoriaSelecionada = 'Conquistas'">
        Conquistas
        </button>
        <button class="botao-outros"
        :class="{ativo: categoriaSelecionada === 'Outros'}"
        @click="categoriaSelecionada = 'Outros'">
        Outros
        </button>
    </div>

    <div>
        <button class="voltar-saldo"
        @click="voltarSaldo">Voltar para área de Teixeirinhas
    </button>
    </div>

    <div class="texto">
        <p>Em andamento...</p>
    </div>
</template>

<style scoped>

.texto p {
    text-align: center;
    font-weight: bold;
    font-size: 80px;
    padding: 20px;
    margin-top: 100px;
}

.voltar-saldo {
    color: #ff6a00;
    background-color: #ffffff;
    border: 2px solid #ff6a00;
    border-radius: 12px;
    height: 50px;
    width: 165px;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    transition: .3s;
    cursor: pointer;
}

.voltar-saldo:hover {
    color: #ffffff;
    background-color: #ff6a00;
}

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
    color: #ff6a00;
    background-color: #ffe3ce;
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
    flex-direction: row;        /* Garante o alinhamento em linha */
    flex-wrap: nowrap;          /* IMPEDE os cards de quebrarem linha */
    gap: 6.5px;                  /* Espaçamento uniforme entre eles */
    justify-content: space-between; /* Distribui os cards igualmente na tela */
    width: 100%;                /* Garante que o container use todo o espaço útil */
    margin-bottom: 25px;
    align-items: stretch;
}

.card1, .card2, .card3, .card4 {
    border-radius: 20px;
    background-color: #ffffff;
    min-height: 140px;
    width: 230px;
    padding: 24px;
    transition: .3s;
    border: 1px solid #eaeaea;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(160, 160, 160, 0.05);
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    outline: none;
}

.card1:hover { 
    border: 2px solid #459f2a; 
    box-shadow: 0 12px 25px rgba(167, 255, 140, 0.3);
}


.card2:hover {
    border: 2px solid #ff2b2b; 
    box-shadow: 0 12px 25px rgba(255, 43, 43, 0.2);
}

.card3:hover { 
    border: 2px solid #ffd555; 
    box-shadow: 0 12px 25px #fff5cf;
}

.card4:hover {
    border: 2px solid #7860ff;
    box-shadow: 0 12px 25px #c2b8ff;
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

.seta-cima {
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

.quantidade-saldo1 {
    font-size: 34px;
    color: #459f2a;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 6px;
    line-height: 1;
}

.quantidade-saldo2 {
    font-size: 34px;
    color: #ff9100;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 6px;
    line-height: 1;
}

.total-transacoes {
    font-size: 34px;
    color: #7860ff;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 6px;
    line-height: 1;
}

.transacoes-atual {
    font-weight: bold;
    font-size: 12px;
    color: #000000;
    margin-bottom: 2px;
    white-space: nowrap;
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
    margin-top: auto;
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

.status-sucesso  { 
    background-color: #e8f7ec; 
    color: #2e7d32;
}

.status-ponto {
    background-color: #c69a16;
}

.status-atualizado { 
    background-color: #fff5cf; 
    color: #c69a16;
}

.status-gasto { 
    background-color: #fce8e6; 
    color: #ff2b2b;
}

.status-transacoes {
    background-color: #e6e1ff;
    color: #7860ff;
}

.icone-container2 {
    width: 65px;
    height: 65px;
    background-color: #fce8e6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;flex-shrink: 0;
}

.icone-container3 {
    width: 65px;
    height: 65px;
    background-color: #fff5cf;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.icone-container4 {
    width: 65px;
    height: 65px;
    background-color: #e6e1ff;
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

.seta-lados {
    font-size: 28px;
    color: #7860ff;
    display: flex;
}

.icone-carteira {
    font-size: 28px;
    color: #c69a16;
    display: flex;
}

.grid-tipos {
    display: flex;
    gap: 15px;
    margin: 30px 0;
    flex-wrap: wrap;
}

.botao-todas, .botao-outros {
    min-width: 120px;
  height: 35px;
  border: 1.5px solid;
  border-radius: 15px;
  background-color: #fffefe;
  color: #747474;
  font-size: 17px;
  font-weight: 700;
  margin: 5px;
  padding: 2px;
  text-align: center;
  cursor: pointer;
  transition: .3s;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.botao-todas:hover, .botao-outros:hover{
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255,106,0,.25);
  color: #ff6a00;
  background-color: #fff0db;
}

.botao-todas.ativo, .botao-outros.ativo{
  background: #ff6a00;
  color: #fff6ef;
  border: 2px solid #ff6a00;
  box-shadow: 0 8px 20px rgba(255,106,0,.35);
}

.botao-recebidas {
    min-width: 120px;
  height: 35px;
  border: 1.5px solid #16a41d;
  border-radius: 15px;
  background-color: #fffefe;
  color: #459f2a;
  font-size: 17px;
  font-weight: 700;
  margin: 5px;
  padding: 2px;
  text-align: center;
  cursor: pointer;
  transition: .3s;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.botao-recebidas:hover{
  transform: translateY(-3px);
  box-shadow: 0 8px 20px #d7ffcb;
  color: #2e7d32;
  background-color: #d7ffcb;
}

.botao-recebidas.ativo{
  background: #459f2a;
  color: #fff6ef;
  border: 2px solid #459f2a;
  box-shadow: 0 8px 20px #d7ffcb;
}

.botao-gastas {
    min-width: 120px;
  height: 35px;
  border: 1.5px solid #d70000;
  border-radius: 15px;
  background-color: #fffefe;
  color: #ff2b2b;
  font-size: 17px;
  font-weight: 700;
  margin: 5px;
  padding: 2px;
  text-align: center;
  cursor: pointer;
  transition: .3s;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.botao-gastas:hover{
  transform: translateY(-3px);
  box-shadow: 0 8px 20px #ffd4d4;
  color: #d70000;
  background-color: #ffc5c5;
}

.botao-gastas.ativo{
  background: #d70000;
  color: #fff6ef;
  border: 2px solid #d70000;
  box-shadow: 0 8px 20px #ffc5c5;
}

.botao-compras {
    min-width: 120px;
  height: 35px;
  border: 1.5px solid #5baaff;
  border-radius: 15px;
  background-color: #fffefe;
  color: #5baaff;
  font-size: 17px;
  font-weight: 700;
  margin: 5px;
  padding: 2px;
  text-align: center;
  cursor: pointer;
  transition: .3s;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.botao-compras:hover{
  transform: translateY(-3px);
  box-shadow: 0 8px 20px #b6d9ff;
  color: #2f93ff;
  background-color: #c9e3ff;
}

.botao-compras.ativo{
  background: #5baaff;
  color: #fff6ef;
  border: 2px solid #5baaff;
  box-shadow: 0 8px 20px #c9e3ff;
}

.botao-conquistas {
    min-width: 120px;
  height: 35px;
  border: 1.5px solid #7860ff;
  border-radius: 15px;
  background-color: #fffefe;
  color: #7860ff;
  font-size: 17px;
  font-weight: 700;
  margin: 5px;
  padding: 2px;
  text-align: center;
  cursor: pointer;
  transition: .3s;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.botao-conquistas:hover{
  transform: translateY(-3px);
  box-shadow: 0 8px 20px #cbc1ff;
  color: #7860ff;
  background-color: #dad3ff;
}

.botao-conquistas.ativo{
  background: #7860ff;
  color: #fff6ef;
  border: 2px solid #7860ff;
  box-shadow: 0 8px 20px #cbc1ff;
}
</style>