<script setup>

import { useAlert } from '@/composables/useAlert';
import { computed } from 'vue';



const { alertState, close} = useAlert();
const alertClass = computed(() => {

    switch (alertState.type) {

        case "sucess":
            return "alert-sucess";
        case "danger":
            return "alert-danger";
        case "warning":
            return "alert-warning";
        case "info":
            return "alert-info";
        
        default:
            return "alert-primary";

    }
})

</script>

<template>
    <div
        v-if="alertState.show"
        class="position-fixed bottom-0 end-0 p-3"
        style="z-index: 9;"
    >
    <div
        :class="[
            'alert',
            alertClass,
            'alert-dimissible',
            'fade',
            'show'
        ]"
        role="alert"
    >
    <strong>{{ alertState.title }}</strong>

    <br>

    {{ alertState.message }}

    <button
        type="button"
        class="btn-close"
        @click="close"
    ></button>

</div>
    </div>

    <!-- <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> -->
</template>