<script setup>

const props = defineProps({
  nome: String,
  descricao: String,
  NumouNome: {
    type: [String, Number],
    required: true
  },
  icon: String,
  color: String,
  unlocked: Boolean
})


console.log(props.icon);

</script>

<template>
    <div class="total-conquistas">

        <div class="conquistas-icon">
        <i :class= props.icon :style="{color}"></i> 
        <span class="conquistas">
            {{ nome }}
        </span>
    </div>
        <h2 class="total text-center" :style="{color}">
            {{ NumouNome}}
        </h2>
        <h3 class="congrats">{{descricao}}</h3>
    </div>
</template>

<style setup>

.conquistas-icon {
    font-size: 35px;
}

.total-conquistas {
    outline: none;
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    overflow: hidden;
    margin-top: 50px;
    width: 300px;
    height: 200px;
    cursor: pointer;
    transition: .3s;
    box-shadow:0 12px 25px #4c4c4d;
    align-items: center;
}

.total-conquistas:hover {
    transform: translateY(-3px);
}

.conquistas {
    margin: 25px;
    font-weight: bold;
    color: #111;
    font-size: 18px;
    text-align: center;
}

.total {
    text-align: center;
    margin-top: 8px;
    font-weight: bold;
    font-size: 50px;
    padding: 5px;
}

.congrats {
    text-align: center;
    font-weight: bolder;
    font-size: 15px;
    color: #666;
}
</style>