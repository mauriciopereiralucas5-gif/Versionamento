<template>
    <h1 class="text-center title">
        Saldo de <span>Teixeirinhas</span>
    </h1>
    <h2 class="text-center subtitle">Conquiste Teixeirinhas através de um bom rendimento!</h2>

    <div class="grid-cards">
        <div class="card1">
            <div class="saldo-atual text-center">Saldo Atual:
                <h3>
                    <span>125🪙</span>
                </h3>
            </div>
            <h3 class="teixeirinhas">Teixeirinhas</h3>
        </div>
        <div class="card2">
        </div>
        <div class="card3">
        </div>
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

.title {
    font-weight: bold;
    font-size: 40px;
}

.title span {
    color: #ff6a00;
}

.subtitle {
    font-size: 18px;
    color: #666;
}

.grid-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card1 {
    border-radius: 20px;
    background-color: #f0f0f0;
    height: 150px;
    width: 250px;
    outline: none;
    overflow: hidden;
    margin-top: 50px;
    padding: 20px;
    transition: .3s;
    border: 2px solid #f0f0f0;
    align-items: center;
    text-align: center;
    cursor: pointer;
}

.card1:hover {
    border: 2px solid #459f2a;
    box-shadow:0 12px 25px #a7ff8c;

}

.saldo-atual {
    font-weight: bold;
    font-size: 20px;
    color: #393939;
}

.saldo-atual span {
    font-size: 40px;
    color: #459f2a;
    font-weight: bold;
    margin-top: 10px;
    margin: 5px;
}

.teixeirinhas {
    font-weight: bold;
    font-size: 15px;
    color: #666;
}
</style>